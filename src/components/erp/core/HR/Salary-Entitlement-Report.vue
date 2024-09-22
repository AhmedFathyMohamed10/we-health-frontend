<template>
    <div class="HR-salary-Report">
      <div class="company-wrapper my-2">
        <Base class="my-2">
          <div class="row">
            <div class="col-12">
              <h1 class="text-center text-danger fw-bold my-4">RedFoxes</h1>
              <h2 class="text-center">Welcome To RedFoxes ERP System</h2>
            </div>
          </div>
        </Base>
      </div>
      
      <div class="table-wrapper">
        <Base>
          <div v-if="listLoading">
            <DataTable :value="[{}, {}, {}, {}, {}, {}, {}]">
              <Column field="id" header="#">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="name" header="name">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="salary" header="Salary">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="total_overtime" header="Total Overtime">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="total_liabilities" header="Total Liabilities">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="total_imprests" header="total Imprests">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="total_bonus" header="Total Bonus">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
  
              <Column field="status" header="Status">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
             
            </DataTable>
          </div>
          <div class="row" v-if="totalRecords">
            
            <div class="col-12">
              <div class="table-responsive">
                <table class="table table-sm text-center">
                  <thead>
                    <tr>
                      
                      <th scope="col">{{ $t("table.thead.count") }}</th>
                      <th scope="col">{{ $t("form.name.label") }}</th>
                      <th scope="col">{{ $t("form.salary.label") }}</th>
                      <th scope="col">{{ $t("form.total_overtime.label") }}</th>
                      <th scope="col">{{ $t("form.total_bonus.label") }}</th>
                      <th scope="col">{{ $t("form.total_liabilities.label") }}</th>
                      <th scope="col">{{ $t("form.total_imprests.label") }}</th>
                      <th scope="col">{{ $t("form.net_salary.label") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(record, index) in salary_report"
                      :key="index"
                      
                    >
                     
                      <td class="align-middle custom-width">
                        {{ calculateTableIndexing(index) }}
                      </td>
                      
                      <td class="align-middle fw-bold">
                        <div>
                          {{ record.name }}
                        </div>
                      </td>
                      <td class="align-middle fw-bold">
                        <div>
                          {{ record.salary }}
                        </div>
                      </td>
                      <td class="align-middle fw-bold">
                        <div>
                          {{ record.total_overtime }}
                        </div>
                      </td>
                       <td class="align-middle fw-bold">
                        <div>
                          {{ record.total_bonus }}
                        </div>
                      </td>
                      <td class="align-middle fw-bold">
                        <div>
                          {{ record.total_liability }}
                        </div>
                      </td>
                      <td class="align-middle fw-bold">
                        <div>
                          {{ record.total_imprest_liability }}
                        </div>
                      </td>
                     
                      <td class="align-middle fw-bold">
                        <div>
                          {{ calculate_net_salary(record) }}
                        </div>
                      </td>
                      
                     
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-12" :dir="[locale == 'ar' ? 'ltr' : '']">
              <Paginator
                :first.sync="pagination.offset"
                :rows.sync="pagination.rows"
                :totalRecords="totalRecords"
                :rowsPerPageOptions="pagination.rowsOptions"
                @page="onPage($event)"
              ></Paginator>
            </div>
          </div>
          <div v-if="!totalRecords && !listLoading">
            <NoResults></NoResults>
          </div>
        </Base>
      </div>
    </div>
  </template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/erp/hr/reports/salary-entitlement-report.json"></i18n>
  <script>
  import Base from "@/components/global/utilities/Base.vue";
  import NoResults from "@/components/global/utilities/NoResults.vue";
 
  import { mapGetters, mapActions } from "vuex";
  import pagination from "@/mixins/global/pagination";
  import toast from "@/mixins/global/toast";
  import { urls } from "@/backend/urls.js";
  export default {
    mixins: [pagination, toast],
    components: {
      Base,
      NoResults,
    
    },
    data() {
      return {
        net_salary:"",
        displayForm: false,
        isUpdating: false,
        ////////////////////
        dateKeys: ["dob", "job_start_date", "created_at"],
        displayDeleteDialog: false,
        codeToDelete: null,
        selected: [],
        selectAll: false,
        displayStatusDialog: false,
        statusAction: "",
        displayDetailsDialog: false,
        recordDetails: null,
        from_date:"",
        to_date:"",
        form: {
          from_date: "",
          to_date: "",
          reason: "",
          description: "",
        },
        searchQuery: {
          employee_name: "",
          department_name: "",
          from_date: "",
          to_date: "",
          status: "",
        },
        isPaginating: false,
        isSearching: false,
      };
    },
    computed: {
      listResponse() {
        return this.getListResponse;
      },
      salary_report() {
        if (this.listResponse) return this.listResponse.results;
        else return {};
      },
      totalRecords() {
        if (this.listResponse) return this.listResponse.count;
        else return 0;
      },
      ...mapGetters("erp/hr/hr_salary_report", {
        getListResponse: "getListResponse",
        listLoading: "getListLoading",
        getListError: "getListError",
  
        getUpsertResponse: "getUpsertResponse",
        upsertLoading: "getUpsertLoading",
        getUpsertError: "getUpsertError",
  
        getDeleteResponse: "getDeleteResponse",
        deleteLoading: "getDeleteLoading",
        getDeleteError: "getDeleteError",
  
        getStatusResponse: "getStatusResponse",
        statusLoading: "getStatusLoading",
        getStatusError: "getStatusError",
      }),
  
      upsertResponse: {
        get() {
          return this.getUpsertResponse;
        },
        set(value) {
          this.setUpsertResponse(value);
        },
      },
      upsertError: {
        get() {
          return this.getUpsertError;
        },
        set(value) {
          this.setUpsertError(value);
        },
      },
  
      deleteResponse: {
        get() {
          return this.getDeleteResponse;
        },
        set(value) {
          this.setDeleteResponse(value);
        },
      },
      deleteError: {
        get() {
          return this.getDeleteError;
        },
        set(value) {
          this.setDeleteError(value);
        },
      },
  
      statusResponse: {
        get() {
          return this.getStatusResponse;
        },
        set(value) {
          this.setStatusResponse(value);
        },
      },
      statusError: {
        get() {
          return this.getStatusError;
        },
        set(value) {
          this.setStatusError(value);
        },
      },
      filterParams() {
        return {
          pageNumber: this.pagination.pageNumber + 1,
          rows: this.pagination.rows,
       
        };
      },
    },
    mounted() {
      this.list();
    },
    methods: {
   
      ...mapActions("erp/hr/hr_salary_report", [
        "setUpsertResponse",
        "setUpsertError",
        "setDeleteResponse",
        "setDeleteError",
        "setStatusResponse",
        "setStatusError",
      ]),
      /////////////////////////////////////////
     
     calculate_net_salary(record){
        let net_salary = (record.salary + record.total_bonus + record.total_overtime) - (record.total_liability+ record.total_imprest_liability)
        return net_salary
     },

      list() {
        this.$store
          .dispatch("erp/hr/hr_salary_report/list", this.filterParams)
          .then(() => {
            if (!this.isPaginating) {
              this.pagination.offset = 0;
              this.pagination.pageNumber = 0;
            }
            this.isSearching = false;
            this.isPaginating = false;
          });
      },
      search() {
        this.isSearching = true;
  
        this.filterParams.pageNumber = 1;
        this.list();
       
      },
  
      fetchAll() {
        this.from_date="",
        this.to_date = "",
        this.searchQuery = {
          employee_name: "",
          department_name: "",
          from_date: "",
          to_date: "",
          status: "",
        };
        this.list();
      },
      onPage(event) {
        this.isPaginating = true;
        this.pagination.pageNumber = event.page;
        this.list();
      },
    },
  };
  </script>
  <style scoped lang="scss">
  .table tbody td {
    min-width: 120px;
  }
  .custom-width {
    min-width: 40px !important;
  }
  .active-row {
    background-color: $gray;
  }
  </style>
  