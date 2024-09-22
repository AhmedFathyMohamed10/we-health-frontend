<template>
  <div class="mic">
    <div class="col-12">
      <CustomTabs class="text-center" v-model="selectedTab" :tabs="tabs" />
    </div>

    <div class="col-12">
      <CustomTabs class="text-center" v-model="DrugTab" :tabs="search_drug_tabs" />

      <Base>
        <!-- Search bar -->
        <div class="search-container mt-4">
          <p class="search-title">Search for Drug</p>
          <span class="p-input-icon-right">
            <input
              type="text"
              v-model="searchQuery"
              @input="debouncedSearch"
              placeholder="Search..."
              class="p-inputtext p-component"
            />
            <i class="pi pi-plus" @click="addDrug"></i>
          </span>
        </div>
      </Base>
      <Base>
        <h3>Drugs List</h3>  
        <!-- Search results -->
        <div class="search-results" v-if="searchResults.length > 0">
          <ul>
            <li v-for="(drug, index) in searchResults" :key="index" @click="selectDrug(drug)">
              {{ drug.openfda?.generic_name?.join(', ') || drug.openfda?.brand_name?.join(', ') }}
            </li>
          </ul>
        </div>
        <!-- Added drugs list -->
        <div class="added-drugs" v-if="addedDrugs.length > 0">
          <ul>
            <li v-for="(drug, index) in addedDrugs" :key="index">
              {{ drug.openfda?.generic_name?.join(', ') || drug.openfda?.brand_name?.join(', ') }}
              <i class="pi pi-times" @click="removeDrug(index)"></i>
            </li>
          </ul>
          <button @click="checkInteractions">Check Interactions</button>
        </div>

      </Base>
      <Base>
        <h3>Drug Interaction Report</h3>
        <div v-if="interactionResults && interactionResults.length > 0" class="interaction-results">
          <p v-if="addedDrugs.length > 1">
            There {{ interactionResults.length > 1 ? 'are' : 'is' }} <strong>{{ interactionResults.length }}</strong> potential interaction{{ interactionResults.length > 1 ? 's' : '' }} between the selected drugs.
          </p>
          <ul v-if="addedDrugs.length > 1">
            <li v-for="(interaction, index) in interactionResults" :key="index">
              <strong>{{ interaction.drug1 }}</strong> interacts with <strong>{{ interaction.drug2 }}</strong>
              <p>⬌ {{ interaction.description || 'No description available' }}</p>
            </li>
          </ul>
          <div v-else>
            <p>
              The selected drug interacts with <strong>{{ interactionResults.length }}</strong> other drug{{ interactionResults.length > 1 ? 's' : '' }}.
            </p>
            <ul>
              <li v-for="(interaction, index) in interactionResults" :key="index">
                <strong>{{ interaction.name }}</strong>
                <p>⬌ {{ interaction.description || 'No description available' }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="interactionResults.length === 0 && interactionMessage" class="interaction-message">
          <!-- <h3>Drug Interaction Report</h3> -->
          <p>{{ interactionMessage }}</p>
        </div>
      </Base>
    </div>
  </div>
</template>

<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import Base from "@/components/global/utilities/Base.vue";
import axios from 'axios';
import { debounce } from 'lodash';

export default {
  name: 'InteractionsDrugs',

  components: {
    CustomTabs,
    Base
  },

  data() {
    return {
      selectedTab: "humanDrugs",
      tabs: [
        { en: "Human Drugs", ar: "أدوية بشرية", key: "humanDrugs" },
        { en: "Animal Drugs", ar: "أدوية حيوانية", key: "animalDrugs" },
        { en: "Procedures", ar: "إجراءات", key: "procedures" },
        { en: "Devices", ar: "أجهزة", key: "devices" },
        { en: "Food", ar: "طعام", key: "food" },
        { en: "News", ar: "أخبار", key: "news" },
      ],
      DrugTab: "drugProfile",
      search_drug_tabs: [
        { en: "Drug Profile", ar: "ملف الدواء", key: "drugProfile" },
        { en: "Drug Interaction", ar: "تفاعل الدواء", key: "drugInteraction" },
        { en: "Pill Identifier", ar: "معرف الحبة", key: "pillIdentifier" },
        { en: "Comparisons", ar: "مقارنات", key: "comparisons" },
      ],
      searchQuery: "",
      searchResults: [],
      addedDrugs: [],
      loading: false,
      error: null,
      interactionResults: [],
      interactionMessage: null
    }
  },

  created() {
    this.debouncedSearch = debounce(this.search, 300);
  },

  methods: {
    async search() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('/drugs/', {
          params: { search: this.searchQuery },
          headers: { 'Content-Type': 'application/json', 'lang': 'en' }
        });
        this.searchResults = response.data.results;
      } catch (error) {
        console.error("There was an error with the search request:", error);
        this.error = "There was an error with the search request. Please try again.";
      } finally {
        this.loading = false;
      }
    },

    addDrug() {
      const selectedDrug = this.searchResults.find(drug =>
        drug.openfda?.brand_name?.some(name => name.toLowerCase() === this.searchQuery.toLowerCase()) ||
        drug.openfda?.generic_name?.some(name => name.toLowerCase() === this.searchQuery.toLowerCase())
      );
      if (selectedDrug && !this.addedDrugs.includes(selectedDrug)) {
        this.addedDrugs.push(selectedDrug);
      }
    },

    selectDrug(drug) {
      if (!this.addedDrugs.includes(drug)) {
        this.addedDrugs.push(drug);
      }
      this.searchResults = [];
      this.searchQuery = '';
    },

    removeDrug(index) {
      this.addedDrugs.splice(index, 1);
    },

    async checkInteractions() {
      try {
        if (this.addedDrugs.length < 1) {
          this.error = "Please add at least one drug to check interactions.";
          return;
        }

        const requestData = this.addedDrugs.map(drug =>
          (drug.openfda?.generic_name || drug.openfda?.brand_name || []).join(', ')
        );
        console.log('Request data:', requestData);

        const response = await axios.post('/check-drug-interactions/', { drugs: requestData });
        console.log('Response data:', response.data);

        // Check if the backend returns interaction results
        if (response.data.interactions) {
          if (this.addedDrugs.length === 1) {
            // Handle the case for one drug
            this.interactionResults = response.data.drug_interactions || [];
            this.interactionMessage = response.data.message || 'No interactions found.';
          } else {
            // Handle the case for multiple drugs
            this.interactionResults = response.data.details || [];
            this.interactionMessage = '';
          }
        } else {
          // If no interactions found
          this.interactionResults = [];
          this.interactionMessage = response.data.message || 'No interactions found.';
        }

      } catch (error) {
        console.error("There was an error checking interactions:", error);
        this.error = "There was an error checking interactions. Please try again.";
      }
    }
  }
};
</script>
<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import Base from "@/components/global/utilities/Base.vue";
import axios from 'axios';
import { debounce } from 'lodash';

export default {
  name: 'InteractionsDrugs',

  components: {
    CustomTabs,
    Base
  },

  data() {
    return {
      selectedTab: "humanDrugs",
      tabs: [
        { en: "Human Drugs", ar: "أدوية بشرية", key: "humanDrugs" },
        { en: "Animal Drugs", ar: "أدوية حيوانية", key: "animalDrugs" },
        { en: "Procedures", ar: "إجراءات", key: "procedures" },
        { en: "Devices", ar: "أجهزة", key: "devices" },
        { en: "Food", ar: "طعام", key: "food" },
        { en: "News", ar: "أخبار", key: "news" },
      ],
      DrugTab: "drugProfile",
      search_drug_tabs: [
        { en: "Drug Profile", ar: "ملف الدواء", key: "drugProfile" },
        { en: "Drug Interaction", ar: "تفاعل الدواء", key: "drugInteraction" },
        { en: "Pill Identifier", ar: "معرف الحبة", key: "pillIdentifier" },
        { en: "Comparisons", ar: "مقارنات", key: "comparisons" },
      ],
      searchQuery: "",
      searchResults: [],
      addedDrugs: [],
      loading: false,
      error: null,
      interactionResults: [],
      interactionMessage: null
    }
  },

  created() {
    this.debouncedSearch = debounce(this.search, 300);
  },

  methods: {
    async search() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('/drugs/', {
          params: { search: this.searchQuery },
          headers: { 'Content-Type': 'application/json', 'lang': 'en' }
        });
        this.searchResults = response.data.results;
      } catch (error) {
        console.error("There was an error with the search request:", error);
        this.error = "There was an error with the search request. Please try again.";
      } finally {
        this.loading = false;
      }
    },
    
    capitalizeFirstLetter(name) {
      return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    },
    
    addDrug() {
      const selectedDrug = this.searchResults.find(drug =>
        drug.openfda?.brand_name?.some(name => name.toLowerCase() === this.searchQuery.toLowerCase()) ||
        drug.openfda?.generic_name?.some(name => name.toLowerCase() === this.searchQuery.toLowerCase())
      );
      if (selectedDrug && !this.addedDrugs.includes(selectedDrug)) {
        this.addedDrugs.push(selectedDrug);
      }
    },
    
    selectDrug(drug) {
      if (!this.addedDrugs.includes(drug)) {
        this.addedDrugs.push(drug);
      }
      this.searchResults = [];
      this.searchQuery = '';
    },
    
    removeDrug(index) {
      this.addedDrugs.splice(index, 1);
    },
    
    async checkInteractions() {
      try {
        if (this.addedDrugs.length < 1) {
          this.error = "Please add at least one drug to check interactions.";
          return;
        }

        const requestData = this.addedDrugs.map(drug => 
          (drug.openfda?.generic_name || drug.openfda?.brand_name || []).join(', ')
        );
        console.log('Request data:', requestData);

        const response = await axios.post('/check-drug-interactions/', { drugs: requestData });
        console.log('Response data:', response.data);

        // Check if the backend returns interaction results
      if (response.data.interactions) {
        if (this.addedDrugs.length === 1) {
          // Handle the case for one drug
          this.interactionResults = response.data.drug_interactions || [];
          this.interactionMessage = response.data.message || 'No interactions found.';
        } else {
          // Handle the case for multiple drugs
          this.interactionResults = response.data.details || [];
          this.interactionMessage = '';
        }
      } else {
        // If no interactions found
        this.interactionResults = [];
        this.interactionMessage = response.data.message || 'No interactions found.';
      } 

      } catch (error) {
        console.error("There was an error checking interactions:", error);
        this.error = "There was an error checking interactions. Please try again.";
      }
    }
  }
};
</script>


<style scoped>
.search-container {
  text-align: center;
  margin-top: 1rem;
}

.search-title {
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.p-input-icon-right {
  width: 50% !important;
}

.search-results {
  max-height: 200px;
  overflow-y: auto;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
}

.search-results ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.search-results li {
  padding: 0.5rem;
  cursor: pointer;
}

.search-results li:hover {
  background-color: #b8b9b5;
}

.added-drugs {
  margin-top: 1rem;
}

.added-drugs ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.added-drugs li {
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
}

.added-drugs li i {
  cursor: pointer;
  color: red;
}

button {
  background-color: #18ac7d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0d8a5b;
}

.interaction-results {
  margin-top: 1rem;
}

.interaction-results ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.interaction-results li {
  padding: 0.5rem;
}

.interaction-message {
  margin-top: 1rem;
  font-weight: bold;
}

h3{
  margin: 0;
  font-weight: 500;
  font-size: 17px;
  color: steelblue;
  align-items: center;
  text-align: center;
}
</style>
