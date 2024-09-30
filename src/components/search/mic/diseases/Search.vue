<template>
  <div class="mic">
    <!-- Search Bar and Tab Layout -->
    <div class="col-12">
      <CustomTabs class="text-center" v-model="selectedTab" :tabs="tabs"></CustomTabs>
    </div>

    <div class="disease_search">
      <Base title="Search for Diseases">
      <div class="search">
        <!-- Search bar -->
        <div class="search-container mt-4">
          <span class="p-input-icon-right">
            <input type="text" v-model="searchQuery" @input="debouncedSearch"
              placeholder="Search by Disease Code or Title..." class="p-inputtext p-component" />
            <i class="pi pi-search" @click="search"></i>
          </span>
        </div>
      </div>
      </Base>
    </div>

    <!-- Loading and Error Messages -->
    <div v-if="loading || error">
      <Base v-if="loading">Loading...</Base>
      <Base v-if="error" class="error">{{ error }}</Base>
    </div>

    <!-- Disease Results Section -->
    <div v-if="diseaseResults.length > 0">
      <Base v-for="(disease, index) in diseaseResults" :key="index" class="disease-item mt-4">
      <!-- Disease summary with reduced size -->
      <div class="disease-summary" @click="toggleDetails(index)">
        <p><strong>{{ disease.icd11Code[0] }}:</strong> {{ disease.Title_en }}</p>
      </div>

      <!-- Split View with Two Cards -->
      <div class="disease-cards-container">
        <!-- First Card: Hierarchy -->
        <div class="disease-hierarchy">
          <h5>Classification</h5>
          <ul class="hierarchy-list">
            <li v-if="disease.Chapter" @click="toggleHierarchy('Chapter', index)">
              <span>{{ isHierarchyOpen('Chapter', index) ? '▽' : '▷' }}</span> {{ disease.Chapter }} {{ disease.H1 }}
              <ul v-if="isHierarchyOpen('Chapter', index)">
                <li v-if="disease.H2" @click="toggleHierarchy('H2', index, $event)">
                  <span>{{ isHierarchyOpen('H2', index) ? '▽' : '▷' }}</span> {{ disease.H2 }}
                  <ul v-if="isHierarchyOpen('H2', index)">
                    <li v-if="disease.H3" @click="toggleHierarchy('H3', index, $event)">
                      <span>{{ isHierarchyOpen('H3', index) ? '▽' : '▷' }}</span> {{ disease.H3 }}
                      <ul v-if="isHierarchyOpen('H3', index)">
                        <li v-if="disease.H4" @click="toggleHierarchy('H4', index, $event)">
                          <span>{{ isHierarchyOpen('H4', index) ? '▽' : '▷' }}</span> {{ disease.H4 }}
                          <ul v-if="isHierarchyOpen('H4', index)">
                            <li v-if="disease.H5">
                              {{ disease.icd11Code[0] }} {{ disease.H5 }}
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <!-- Second Card: Disease Details -->
        <div class="disease-details-card" v-if="selectedIndex === index">
          <!-- Titles -->
          <h5>Titles</h5>
          <p v-if="disease.Title_en"><strong>English Title:</strong> {{ disease.Title_en }}</p>
          <p v-if="disease.Title_ar"><strong>Arabic Title:</strong> {{ disease.Title_ar }}</p>

          <!-- ICD Codes -->
          <h5>ICD Codes</h5>
          <p v-if="disease.icd9Code && disease.icd9Code.length"><strong>ICD-9:</strong> {{ disease.icd9Code.join(', ')
            }}</p>
          <p v-if="disease.icd10Code && disease.icd10Code.length"><strong>ICD-10:</strong> {{ disease.icd10Code.join(',') }}</p>
          <p v-if="disease.icd11Code && disease.icd11Code.length"><strong>ICD-11:</strong> {{ disease.icd11Code.join(',') }}</p>
        </div>
      </div>
      </Base>

      <!-- Pagination Controls -->
      <div class="pagination-controls mt-4">
        <button @click="prevPage" :disabled="page === 1">Previous</button>
        <span>Page {{ page }}</span>
        <button @click="nextPage" :disabled="!hasMoreResults">Next</button>
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
  name: "searchDisease",
  components: {
    CustomTabs,
    Base
  },
  data() {
    return {
      selectedTab: "humanDiseases",
      tabs: [
        { en: "Human Diseases", ar: "أمراض بشرية", key: "humanDiseases" },
        { en: "Animal Diseases", ar: "أمراض حيوانية", key: "animalDiseases" },
        { en: "Procedures", ar: "إجراءات", key: "procedures" }
      ],
      searchQuery: "",
      diseaseResults: [],
      page: 1,
      pageSize: 5,
      hasMoreResults: false,
      loading: false,
      error: null,
      selectedIndex: null,
      openHierarchy: {},  // Stores open hierarchies by index
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
        const response = await axios.get('/diseases/', {
          params: {
            search: this.searchQuery,
            page: this.page
          },
          headers: {
            'Content-type': 'application/json',
            'lang': 'en'
          }
        });
        this.diseaseResults = response.data.results;
        this.hasMoreResults = this.page < response.data.total_pages;
      } catch (error) {
        console.error("There was an error with the search request:", error);
        this.error = "There was an error with the search request. Please try again.";
      } finally {
        this.loading = false;
      }
    },
    toggleDetails(index) {
      this.selectedIndex = this.selectedIndex === index ? null : index;
    },
    toggleHierarchy(level, index, event) {
      if (event) {
        event.stopPropagation();
      }
      if (!this.openHierarchy[index]) {
        this.$set(this.openHierarchy, index, []);
      }

      if (this.openHierarchy[index].includes(level)) {
        this.openHierarchy[index] = this.openHierarchy[index].filter(l => l !== level);
      } else {
        this.openHierarchy[index].push(level);
      }
    },
    isHierarchyOpen(level, index) {
      return this.openHierarchy[index] && this.openHierarchy[index].includes(level);
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
    }
  }
};
</script>

<style scoped lang="scss">
/* General styles for search and results */
.search-container {
  text-align: center;
  margin-top: 1rem;
}

.p-input-icon-right {
  width: 50% !important;
}

/* Layout for split card view */
.disease-cards-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 1rem;
}

.disease-hierarchy,
.disease-details-card {
  width: 48%;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
}

/* Reduced size for disease summary */
.disease-summary {
  font-weight: bold;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

/* Hierarchy styles */
.hierarchy-list {
  list-style-type: none;
  padding-left: 0;
}

.hierarchy-list li {
  cursor: pointer;
  padding-left: 10px;
  line-height: 1.5;
  margin: 5px 0;
}

.hierarchy-list li span {
  margin-right: 5px;
}

/* Pagination Controls */
.pagination-controls {
  text-align: center;
  margin-top: 1rem;
}

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
</style>
