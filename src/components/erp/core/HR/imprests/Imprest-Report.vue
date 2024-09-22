<template>
    <div class="imprest">
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
      <div class="search-wrapper my-2">
        <Base>
          <div class="row">
            <div class="col-12">
              <h4>{{ $t("Imprest.header") }}</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5 col-xxl-3">
              <div class="form-group">
                <label class="form-label">
                  {{ $t("form.employee_name.label") }}
                </label>
                <span
                  :class="[
                    locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
                  ]"
                >
                  <i
                    class="pi"
                    :class="[
                      isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',
                    ]"
                  ></i>
                  <InputText
                    type="text"
                    v-model="searchQuery.employee_name"
                    :placeholder="$t('btns.search')"
                    @keyup.enter="search"
                  />
                </span>
              </div>
            </div>
            <div class="col-md-5 col-xxl-3">
              <div class="form-group">
                <label class="form-label">
                  {{ $t("form.department_name.label") }}
                </label>
                <span
                  :class="[
                    locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
                  ]"
                >
                  <i
                    class="pi"
                    :class="[
                      isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',
                    ]"
                  ></i>
                  <InputText
                    type="text"
                    v-model="searchQuery.department_name"
                    :placeholder="$t('btns.search')"
                    @keyup.enter="search"
                  />
                </span>
              </div>
            </div>
            <div class="col-md-5 col-xxl-3">
              <div class="form-group">
                <label class="form-label">
                  {{ $t("form.from_date.label") }}
                </label>
                <span
                  :class="[
                    locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
                  ]"
                >
                  <i
                    class="pi"
                    :class="[
                      isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',
                    ]"
                  ></i>
                  <Calendar
                    v-model="from_date"
                    dateFormat="yy-mm-dd"
                    @input="selectDate($event)"
                    @keyup.enter="search"
                    :placeholder="$t('btns.search')"
                  />
                  <!-- <InputText
                        type="text"
                        v-model="searchQuery.from_date"
                        :placeholder="$t('btns.search')"
                        @keyup.enter="search"
                      /> -->
                </span>
              </div>
            </div>
            <div class="col-md-5 col-xxl-3">
              <div class="form-group">
                <label class="form-label"> {{ $t("form.to_date.label") }} </label>
                <span
                  :class="[
                    locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
                  ]"
                >
                  <i
                    class="pi"
                    :class="[
                      isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',
                    ]"
                  ></i>
                  <Calendar
                  v-model="to_date"
                  dateFormat="yy-mm-dd"
                  @input="selectToDate($event)"
                  @keyup.enter="search"
                  :placeholder="$t('btns.search')"
                />
                  <!-- <InputText
                    type="text"
                    v-model="searchQuery.to_date"
                    :placeholder="$t('btns.search')"
                    @keyup.enter="search"
                  /> -->
                </span>
              </div>
            </div>
            <div class="col-md-5 col-xxl-3">
              <div class="form-group">
                <label class="form-label"> {{ $t("form.status.label") }} </label>
                <span
                  :class="[
                    locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
                  ]"
                >
                  <i
                    class="pi"
                    :class="[
                      isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',
                    ]"
                  ></i>
                  <InputText
                    type="text"
                    v-model="searchQuery.status"
                    :placeholder="$t('btns.search')"
                    @keyup.enter="search"
                  />
                </span>
              </div>
            </div>
            <div class="col-md-2 d-flex align-items-end">
              <div class="form-group">
                <button
                  class="btn btn-pill btn-success-gradient"
                  @click.prevent="search"
                >
                  <span>
                    <i
                      class="pi"
                      :class="[
                        isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',
                      ]"
                    ></i>
                  </span>
                  <span class="mx-2">{{ $t("btns.search") }}</span>
                </button>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="d-flex flex-wrap">
                <div class="form-group mb-2 me-2">
                  <button  class="btn btn-pill btn-secondary-gradient" @click="fetchAll" >
                    <span><i class="bi bi-arrow-clockwise"></i></span>
                    <span class="mx-2">{{ $t("btns.all") }}</span>
                  </button>
                </div>
              </div>
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
              <Column field="name" header="employee_name">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="mobile" header="department_name">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="email" header="amount">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="email" header="from_date">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="email" header="to_date">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
  
              <Column field="status" header="Status">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="status" header="reviewer">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
            </DataTable>
          </div>
          <div class="row" v-if="totalRecords">
            <div class="col-12">
              <div class="d-flex justify-content-between flex-wrap">
                <div class="actions d-flex flex-wrap">
                  <!-- <div class="form-group me-2">
                        <button
                          class="btn btn-pill btn-danger-gradient"
                          @click="openDeleteDialogMultiple"
                        >
                          <i class="fa fa-trash"></i>
                          {{ $t("btns.delete") }}
                        </button>
                      </div> -->
                  <div class="form-group me-2">
                    <button
                      class="btn btn-pill btn-success-gradient"
                      @click="openStatusDialog(1)"
                    >
                      {{ $t("btns.approved") }}
                    </button>
                  </div>
                  <div class="form-group me-2">
                    <button
                      class="btn btn-pill btn-danger-gradient"
                      @click="openStatusDialog(2)"
                    >
                      {{ $t("btns.rejected") }}
                    </button>
                  </div>
                </div>
                <div class="result">
                  <span>{{ $t("messages.resultsfound") }} </span>
                  <Badge severity="success" :value="totalRecords"></Badge>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="table-responsive">
                <table class="table table-sm text-center">
                  <thead>
                    <tr>
                      <th scope="col">
                        <input
                          type="checkbox"
                          v-model="selectAll"
                          @click="selectAllRecords"
                          :binary="true"
                        />
                      </th>
                      <th scope="col">{{ $t("table.thead.count") }}</th>
                      <th scope="col">{{ $t("form.beneficiary.label") }}</th>
                      <th scope="col">{{ $t("form.department_name.label") }}</th>
                      <th scope="col">{{ $t("form.amount.label") }}</th>
                      <th scope="col">{{ $t("form.due_date.label") }}</th>
                      <th scope="col">{{ $t("form.liability_amount.label") }}  ({{($t("monthly"))}})</th>
                      <th scope="col">{{ $t("form.status.label") }}</th>
                      <th scope="col">{{ $t("form.reviewer.label") }}</th>
                      <th scope="col">{{ $t("table.thead.controls") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(imprest, index) in imprests"
                      :key="index"
                      :class="[!imprest.employee_name ? 'active-row' : '']"
                    >
                      <td class="align-middle custom-width">
                        <input
                          v-if="imprest.status == 3"
                          type="checkbox"
                          :value="imprest.code"
                          v-model="selected"
                          :binary="true"
                        />
                      </td>
                      <td class="align-middle custom-width">
                        {{ calculateTableIndexing(index) }}
                      </td>
                      <td class="align-middle fw-bold">
                        <span v-if="imprest.employee_name">
                        
                            <div>
                              {{ imprest.employee_name }}
                            </div>
                         
                          <!-- <a
                            class="fw-bold"
                            href="javascript:void(0)"
                            @click="openDetailsDialog(imprest)"
                            >{{ imprest.employee_name }}</a
                          > -->
                        </span>
                        <span v-else-if="imprest.reason">
                          <div>
                            {{ imprest.reason }}
                          </div>
                          <!-- <a
                            class="fw-bold"
                            href="javascript:void(0)"
                            @click="openDetailsDialog(imprest)"
                            >{{ imprest.reason }}</a
                          > -->
                        </span>
                      </td>
                      <td class="align-middle fw-bold">
                        <span v-if="imprest.department_name">{{
                          imprest.department_name
                        }}</span>
                        <span v-else>
                          <Tag
                            severity="info"
                            :value="$t('status.all')"
                            rounded
                          ></Tag>
                        </span>
                      </td>
                      <td class="align-middle">
                        <div>
                          {{ imprest.amount }}
                        </div>
                      </td>
                      <td class="align-middle">
                          <div>
                              {{ imprest.due_date }}
                            </div>
                        </td>
                        <td class="align-middle">
                          <div>
                            {{ imprest.liability_amount }}
                          </div>
                        </td>
                      <td class="align-middle">
                        <span v-if="imprest.status == 1">
                          <Tag
                            severity="success"
                            :value="$t('status.approved')"
                            rounded
                          ></Tag>
                        </span>
                        <span v-if="imprest.status == 2">
                          <Tag
                            severity="danger"
                            :value="$t('status.rejected')"
                            rounded
                          ></Tag>
                        </span>
                        <span v-if="imprest.status == 3">
                          <Tag
                            severity="warning"
                            :value="$t('status.under_review')"
                            rounded
                          ></Tag>
                        </span>
                      </td>
                      <td class="align-middle fw-bold">
                        <span>{{ imprest.reviewer_name }}</span>
                      </td>
                      <td class="align-middle">
                        <div class="actions d-flex gap-2 justify-content-center">
                          <div>
                            <button
                              class="btn btn-pill btn-info-gradient btn-sm"
                              @click="openDetailsDialog(imprest)"
                            >
                              {{ $t("btns.details") }}
                            </button>
                        </div>
                        <div
                        class="actions d-flex gap-2 "
                        v-if="imprest.status == 3"
                      >
                        <div>
                          <button
                            class="btn btn-pill btn-success-gradient btn-sm"
                            @click="openStatusDialogSingle(1, imprest.code)"
                          >
                            {{ $t("btns.approved") }}
                          </button>
                        </div>
                        <div>
                          <button
                            class="btn btn-pill btn-danger-gradient btn-sm"
                            @click="openStatusDialogSingle(2, imprest.code)"
                          >
                            {{ $t("btns.rejected") }}
                          </button>
                        </div>
                      </div>
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
  
      <Form
        v-model="form"
        :displayForm="displayForm"
        @close="resetForm"
        @cancel="resetForm"
        @save="changeStatus"
        :header="$t('dialog.header.status')"
        
      >
      </Form>
      <EditDialog
        :display="displayStatusDialog"
        @close="closeStatusDialog"
        @cancel="closeStatusDialog"
        @save="changeStatus"
        :isLoading="statusLoading"
        :header="$t('dialog.header.status')"
      >
        <div class="row">
          <div class="col-12">
            <div class="msg">
              <h4 class="text-center">{{ $t("messages.status") }}</h4>
            </div>
          </div>
        </div>
      </EditDialog>
  
      <DeleteDialog
        :display="displayDeleteDialog"
        @cancel="closeDeleteDialog"
        @delete="deleteRecords"
        :isLoading="deleteLoading"
      />
  
      <DetailsDialog
        :display="displayDetailsDialog"
        @hide="closeDetailsDialog"
        :header="$t('dialog.header.details')"
        :containerStyle="{ 'min-width': '50vw' }"
      >
        <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-borderless text-nowrap mb-0">
                <tbody>
                  <tr v-for="(value, key) in recordDetails" :key="key">
                    <td class="">
                      {{ $t(`Imprest.key.${key}`) }}
                    </td>
                    <td class="">
                      <span v-if="!value" class="text-muted">------</span>
                      <span v-if="key !== 'status'">{{ value }}</span>
                      <div v-if="key == 'status'">
                        <span v-if="value == '1'">
                          <Tag
                            severity="success"
                            :value="$t('status.approved')"
                            rounded
                          ></Tag>
                        </span>
                        <span v-if="value == '2'">
                          <Tag
                            severity="danger"
                            :value="$t('status.rejected')"
                            rounded
                          ></Tag>
                        </span>
                        <span v-if="value == '3'">
                          <Tag
                            severity="warning"
                            :value="$t('status.under_review')"
                            rounded
                          ></Tag>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DetailsDialog>
    </div>
  </template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/erp/hr/imprest/imprests.json"></i18n>
  <script>
  import Base from "@/components/global/utilities/Base.vue";
  import NoResults from "@/components/global/utilities/NoResults.vue";
  import EditDialog from "@/components/global/utilities/EditDialog.vue";
  import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
  import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";

  import Form from "@/components/erp/HR/imprest/Approved_Form"
  import { mapGetters, mapActions } from "vuex";
  import pagination from "@/mixins/global/pagination";
  import toast from "@/mixins/global/toast";
  import { urls } from "@/backend/urls.js";
  export default {
    mixins: [pagination, toast],
    components: {
      Base,
      NoResults,
      EditDialog,
      DeleteDialog,
      DetailsDialog,
      Form,
    },
    data() {
      return {
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
        form :{
            liability_amount :""
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
      imprests() {
        if (this.listResponse) return this.listResponse.results;
        else return {};
      },
      totalRecords() {
        if (this.listResponse) return this.listResponse.count;
        else return 0;
      },
      ...mapGetters("erp/hr/imprests_reports", {
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
          employee_name: this.isSearching ? this.searchQuery.employee_name : "",
          department_name: this.isSearching
            ? this.searchQuery.department_name
            : "",
          from_date: this.isSearching ? this.searchQuery.from_date : "",
          to_date: this.isSearching ? this.searchQuery.to_date : "",
          status: this.isSearching ? this.searchQuery.status : "",
        };
      },
    },
    mounted() {
      this.list();
    },
    methods: {
      selectDate(event) {
        this.searchQuery.from_date = this.$moment(event).format("YYYY-MM-DD");
      },
      selectToDate(event) {
        this.searchQuery.to_date = this.$moment(event).format("YYYY-MM-DD");
      },
      ...mapActions("erp/hr/imprests_reports", [
        "setUpsertResponse",
        "setUpsertError",
        "setDeleteResponse",
        "setDeleteError",
        "setStatusResponse",
        "setStatusError",
      ]),
      /////////////////////////////////////////
      selectAllRecords() {
        this.selected = [];
        if (!this.selectAll) {
          for (let i in this.imprests) {
            this.selected.push(this.imprests[i].code);
          }
        }
      },
      ////////// UPSERT ///////////////////
      openForm() {
        this.displayForm = true;
      },
      closeForm() {
        this.displayForm = false;
      },
  
      resetForm() {
        (this.form = {
         
            liability_amount: "",
        }),
          this.closeForm();
        this.selected = [];
        this.upsertResponse = null;
        this.upsertError = null;
        this.isUpdating = false;
      },
      create() {
        this.$store
          .dispatch("erp/hr/imprests_reports/create", this.form)
          .then((res) => {
            this.resetForm();
            // console.log(res)
            const summery = res.statusText;
            const details = res.data.message;
            this.successToast(summery, details);
          })
          .catch((err) => {
            console.log(err);
            const summery = err.statusText;
            const details = err.data.message;
            this.errorToast(summery, details);
          });
      },
  
      upsert() {
        if (this.isUpdating) {
          this.update();
        } else {
          this.create();
        }
      },
      //////////// STATUS /////////////////////
      openStatusDialogSingle(event, code) {
        this.statusAction = event;
        if (event == 1){
            this.openForm()
        }
        if(event == 2){
          this.displayStatusDialog = true;
        }
        this.selected = [];
        this.selected.push(code);
      },
      openStatusDialog(event) {
        if (this.selected.length) {
          if (event == 1){
            this.openForm()
        }
        if(event == 2){
          this.displayStatusDialog = true;
        }
          this.statusAction = event;
          // this.displayStatusDialog = true;
        } else {
          this.infoToast(
            this.$t("toast.select.summery"),
            this.$t("toast.select.details")
          );
        }
      },
      closeStatusDialog() {
        this.statusAction = "";
        this.displayStatusDialog = false;
        // this.displayStatusDialog = false;
        this.selected = [];
        this.selectAll = false;
      },
  
      changeStatus() {
        this.$store
          .dispatch("erp/hr/imprests_reports/changeStatus", {
            liability_amount : this.form.liability_amount,
            action: this.statusAction,
            selected: this.selected,
          })
          .then((res) => {
            this.closeStatusDialog();
            this.resetForm()
            const summery = res.statusText;
            const details = res.data.message;
            this.successToast(summery, details);
          })
          .catch((err) => {
            const summery = err.statusText;
            const details = err.data.message;
            this.errorToast(summery, details);
          });
      },
  
      /////////// DELETE /////////////
      openDeleteDialog() {
        this.displayDeleteDialog = true;
      },
      closeDeleteDialog() {
        this.displayDeleteDialog = false;
        this.selected = [];
        this.selectAll = false;
      },
      openDeleteDialogSingle(agent) {
        this.openDeleteDialog();
        this.selected = [];
        this.selected.push(agent);
      },
      openDeleteDialogMultiple() {
        if (this.selected.length) {
          this.openDeleteDialog();
        } else {
          this.infoToast(
            this.$t("toast.select.summery"),
            this.$t("toast.select.details")
          );
        }
      },
      deleteRecords() {
        this.statusAction = 4;
        this.$store
          .dispatch("erp/hr/imprests_reports/delete", this.selected)
          .then((res) => {
            this.closeDeleteDialog();
            this.selected = [];
            const summery = res.statusText;
            const details = res.data.message;
            this.successToast(summery, details);
            this.fetchAll();
          })
          .catch((err) => {
            // console.log(err)
            const summery = err.statusText;
            const details = err.data.message;
            this.errorToast(summery, details);
          });
      },
      ///////////////// DETAILS /////////////////////////////
      closeDetailsDialog() {
        this.recordDetails = null;
        this.displayDetailsDialog = false;
      },
      openDetailsDialog(record) {
        const { due_date, amount, reason, liability_amount } = record;
        this.recordDetails = { due_date, amount, reason, liability_amount };
        this.displayDetailsDialog = true;
      },
      list() {
        this.$store
          .dispatch("erp/hr/imprests_reports/list", this.filterParams)
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
  
        if(this.searchQuery.from_date == 'Invalid date' ){
            this.searchQuery.from_date = ""
          }
        
          if(this.searchQuery.to_date == 'Invalid date' ){
            this.searchQuery.to_date = ""
          }
        if (
          this.filterParams.from_date ||
          this.filterParams.to_date ||
          this.filterParams.employee_name ||
          this.filterParams.department_name ||
          this.filterParams.status
        ) {
          this.filterParams.pageNumber = 1;
          this.list();
        } else {
          this.infoToast(
            this.$t("toast.search.summery"),
            this.$t("toast.search.details")
          );
          this.isSearching = false;
        }
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
  