<template>
    <div class="mic">
      <!-- Search Bar and Tab Layout -->
      <div class="col-12">
        <CustomTabs class="text-center" v-model="selectedTab" :tabs="tabs"></CustomTabs>
      </div>
  
      <Base>
        <!-- Search bar -->
        <div class="search-container mt-4">
          <p class="search-title">Search for Diseases</p>
          <span class="p-input-icon-right">
            <input
              type="text"
              v-model="searchQuery"
              @input="debouncedSearch"
              placeholder="Search by Disease Code or Title..."
              class="p-inputtext p-component"
            />
            <i class="pi pi-search" @click="search"></i>
          </span>
        </div>
      </Base>
  
      <!-- Loading and Error Messages -->
      <div v-if="loading || error">
        <Base v-if="loading">Loading...</Base>
        <Base v-if="error" class="error">{{ error }}</Base>
      </div>
  
      <!-- Disease Results Section -->
      <div v-if="diseaseResults.length > 0">
        <Base v-for="(disease, index) in diseaseResults" :key="index" class="disease-info mt-4">
          <!-- Hierarchy Display -->
          <h5>Classification</h5>
          <ul>
            <li v-if="disease.H1"><strong>Category:</strong> {{ disease.H1 }}</li>
            <li v-if="disease.H2"><strong>Subcategory:</strong> {{ disease.H2 }}</li>
            <li v-if="disease.H3"><strong>Type:</strong> {{ disease.H3 }}</li>
            <li v-if="disease.H4"><strong>Subtype:</strong> {{ disease.H4 }}</li>
            <li v-if="disease.H5"><strong>Detail:</strong> {{ disease.H5 }}</li>
          </ul>
  
          <!-- Titles -->
          <h5>Titles</h5>
          <p v-if="disease.Title_en"><strong>English Title:</strong> {{ disease.Title_en }}</p>
          <p v-if="disease.Title_ar"><strong>Arabic Title:</strong> {{ disease.Title_ar }}</p>
  
          <!-- ICD Codes -->
          <h5>ICD Codes</h5>
          <p v-if="disease.icd9Code.length"><strong>ICD-9:</strong> {{ disease.icd9Code.join(', ') }}</p>
          <p v-if="disease.icd10Code.length"><strong>ICD-10:</strong> {{ disease.icd10Code.join(', ') }}</p>
          <p v-if="disease.icd11Code.length"><strong>ICD-11:</strong> {{ disease.icd11Code.join(', ') }}</p>
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
  
    .disease-info {
      text-align: left;
      margin-top: 1rem;
    }
  
    .disease-name {
      font-size: 1.2rem;
      font-weight: 700;
    }
  
    .field-name p, .field-value p {
      margin: 0;
      color: #000000;
      font-size: small;
      font-weight: bold;
    }
  
    .field-value p {
      color: #56C596;
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
  