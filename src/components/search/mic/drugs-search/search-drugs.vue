<template>
  <div class="mic"> 
    <div class="col-12">
      <CustomTabs
        class="text-center"
        v-model="selectedTab"
        :tabs="tabs">
      </CustomTabs>
    </div>
    <div class="col-12">
      <CustomTabs
        class="text-center"
        v-model="DrugTab"
        :tabs="search_drug_tabs">
      </CustomTabs>
      <Base>
          <!-- Search bar -->
          <div class="search-container mt-4">
              <p class="search-title">Search for Drugs</p>
              <span class="p-input-icon-right">
                  <input type="text" v-model="searchQuery" @input="debouncedSearch" placeholder="Search..." class="p-inputtext p-component" />
                  <i class="pi pi-search" @click="search"></i>
              </span>
          </div>
      </Base>
      <!-- For loading or errors only -->
      <div v-if="loading || error">
        <Base v-if="loading">Loading...</Base>
        <Base v-if="error" class="error">{{ error }}</Base>
      </div>
      
      <!-- Drug information section -->
      <div v-if="drugResults.length > 0">
          <Base v-for="(drug, index) in drugResults" :key="index" class="drug-info mt-4">
              <h5 class="drug-name">{{ (drug.openfda.brand_name && drug.openfda.brand_name.join(', ')) || 'Drug Name' }}</h5>
              <hr>
              <div class="row">
                  <div class="col-md-6 field-name">
                      <p v-if="drug.openfda.brand_name">Brand Name</p>
                      <p v-if="drug.openfda.generic_name">Generic Name</p>
                      <p v-if="drug.openfda.manufacturer_name">Manufacturer Name</p>
                      <p v-if="!drug.openfda.brand_name || !drug.openfda.generic_name || !drug.openfda.manufacturer_name">Effective Time</p>
                      <p v-if="!drug.openfda.brand_name || !drug.openfda.generic_name || !drug.openfda.manufacturer_name">Version</p>
                      <p v-if="!drug.openfda.brand_name || !drug.openfda.generic_name || !drug.openfda.manufacturer_name">Active Ingredient</p>
                  </div>
                  <div class="col-md-6 field-value">
                      <div v-if="drug.openfda.brand_name">
                        <span v-for="(name, idx) in drug.openfda.brand_name" :key="'brand_name_' + idx">- {{ name }}</span>
                      </div>
                      <div v-if="drug.openfda.generic_name">
                        <span v-for="(name, idx) in drug.openfda.generic_name" :key="'generic_name_' + idx">- {{ name }}</span>
                      </div>
                      <div v-if="drug.openfda.manufacturer_name">
                        <span v-for="(name, idx) in drug.openfda.manufacturer_name" :key="'manufacturer_name_' + idx">- {{ name }}</span>
                      </div>
                      <div v-if="!drug.openfda.brand_name || !drug.openfda.generic_name || !drug.openfda.manufacturer_name">- {{ formatEffectiveTime(drug.effective_time) }}</div>
                      <div v-if="!drug.openfda.brand_name || !drug.openfda.generic_name || !drug.openfda.manufacturer_name">- {{ drug.version }}</div>
                      <div v-if="!drug.openfda.brand_name || !drug.openfda.generic_name || !drug.openfda.manufacturer_name">
                        <span v-for="(ingredient, idx) in drug.active_ingredient" :key="'active_ingredient_' + idx">- {{ ingredient }}</span>
                      </div>
                  </div>
              </div>
          </Base>
          <div class="pagination-controls mt-4">
              <button @click="prevPage" :disabled="page === 1">Previous</button>
              <span>Page {{ page }}</span>
              <button @click="nextPage" :disabled="!hasMoreResults">Next</button>
          </div>
      </div>
    </div> 
  </div>
</template>

<script>
  import CustomTabs from "@/components/global/custom/CustomTabs.vue";
  import Base from "@/components/global/utilities/Base.vue";
  import axios from 'axios';
  import { debounce } from 'lodash';

  export default {
    name: "searchDrug",
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
        drugResults: [],
        page: 1,
        pageSize: 10,
        hasMoreResults: false,
        loading: false,
        error: null
      };
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
            params: {
              search: this.searchQuery,
              page: this.page,
              pageSize: this.pageSize
            },
            headers: {
              'Content-type': 'application/json',
              'lang': 'en',
            }
          });
          this.drugResults = response.data.results;
          this.hasMoreResults = response.data.next !== null;
        } catch (error) {
          console.error("There was an error with the search request:", error);
          this.error = "There was an error with the search request. Please try again.";
        } finally {
          this.loading = false;
        }
      },
      prevPage() {
        if (this.page > 1) {
          this.page--;
          this.search();
        }
      },
      nextPage() {
        if (this.hasMoreResults) {
          this.page++;
          this.search();
        }
      },
      formatEffectiveTime(effectiveTime) {
        if (effectiveTime) {
          const year = effectiveTime.toString().slice(0, 4);
          const month = effectiveTime.toString().slice(4, 6);
          const day = effectiveTime.toString().slice(6, 8);
          return `${year}-${month}-${day}`;
        }
        return '';
      }
    }
  };
</script>

<style scoped lang="scss">
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

  .drug-info {
    text-align: left;
    margin-top: 1rem;
  }

  .drug-name {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .field-name p {
      margin: 0;
      color: #000000 !important;
      font-size: small;
      font-weight: bold;
  }
  .field-value p {
      margin: 0;
      color: #56C596 !important;
      font-size: small;
      font-weight: 500;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .field-name {
    border-right: 1px solid #ccc;
    padding-right: 1rem;
  }

  .field-value {
    padding-left: 1rem;
  }

  hr {
      margin: 1rem 0;
      border: 0;
      height: 3px;
      background-color: #18ac7d; 
  }

  .pagination-controls {
    text-align: center;
    margin-top: 1rem;

    button {
      background-color: #18ac7d;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      margin: 0 0.5rem;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0d8a5b;
      }

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    }

    span {
      font-size: 1rem;
      font-weight: bold;
    }
  }

  .error {
    color: rgb(241, 54, 54);
    text-align: center;
  }
</style>
