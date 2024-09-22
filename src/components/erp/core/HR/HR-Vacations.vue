<template>
  <div class="insurance-agents">
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
            <h4>{{ $t("Vacation.header") }}</h4>
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
                <button
                  class="btn btn-pill btn-success-gradient"
                  @click="openForm"
                >
                  <span><i class="fa fa-plus fa-md"></i> </span>
                  <span class="mx-2">{{
                    $t("btns.new_Official_vacation")
                  }}</span>
                </button>
              </div>
              <div class="form-group mb-2 me-2">
                <button
                  class="btn btn-pill btn-secondary-gradient"
                  @click="fetchAll"
                >
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
            <Column field="email" header="direct_manager">
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
                    <th scope="col">{{ $t("form.direct_manager.label") }}</th>
                    <th scope="col">{{ $t("form.from_date.label") }}</th>
                    <th scope="col">{{ $t("form.to_date.label") }}</th>
                    <th scope="col">{{ $t("form.status.label") }}</th>
                    <th scope="col">{{ $t("form.reviewer.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(vacation, index) in vacations"
                    :key="index"
                    :class="[!vacation.employee_name ? 'active-row' : '']"
                  >
                    <td class="align-middle custom-width">
                      <input
                        v-if="vacation.status == 3"
                        type="checkbox"
                        :value="vacation.id"
                        v-model="selected"
                        :binary="true"
                      />
                    </td>
                    <td class="align-middle custom-width">
                      {{ calculateTableIndexing(index) }}
                    </td>
                    <td class="align-middle">
                      <span v-if="vacation.employee_name">
                        <a
                          class="fw-bold"
                          href="javascript:void(0)"
                          @click="openDetailsDialog(vacation)"
                          >{{ vacation.employee_name }}</a
                        >
                      </span>
                      <span v-else-if="vacation.reason">
                        <a
                          class="fw-bold"
                          href="javascript:void(0)"
                          @click="openDetailsDialog(vacation)"
                          >{{ vacation.reason }}</a
                        >
                      </span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span v-if="vacation.department_name">{{
                        vacation.department_name
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
                        {{ vacation.direct_manager }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div>
                        {{ vacation.from_date }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div>
                        {{ vacation.to_date }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <span v-if="vacation.status == 1">
                        <Tag
                          severity="success"
                          :value="$t('status.approved')"
                          rounded
                        ></Tag>
                      </span>
                      <span v-if="vacation.status == 2">
                        <Tag
                          severity="danger"
                          :value="$t('status.rejected')"
                          rounded
                        ></Tag>
                      </span>
                      <span v-if="vacation.status == 3">
                        <Tag
                          severity="warning"
                          :value="$t('status.under_review')"
                          rounded
                        ></Tag>
                      </span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ vacation.reviewer_name }}</span>
                    </td>
                    <td class="align-middle">
                      <div
                        class="actions d-flex gap-2 justify-content-center"
                        v-if="vacation.status == 3"
                      >
                        <div>
                          <button
                            class="btn btn-pill btn-success-gradient btn-sm"
                            @click="openStatusDialogSingle(1, vacation.id)"
                          >
                            {{ $t("btns.approved") }}
                          </button>
                        </div>
                        <div>
                          <button
                            class="btn btn-pill btn-danger-gradient btn-sm"
                            @click="openStatusDialogSingle(2, vacation.id)"
                          >
                            {{ $t("btns.rejected") }}
                          </button>
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
      @save="upsert"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')"
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
                    {{ $t(`Vacation.key.${key}`) }}
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
<i18n src="@/lang/erp/vacations/Vacations.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import Form from "@/components/erp/HR/hr_vacations/Form";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";
import { urls } from "@/backend/urls.js";
export default {
  mixins: [pagination, toast],
  components: {
    Base,
    NoResults,
    Form,
    EditDialog,
    DeleteDialog,
    DetailsDialog,
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
    vacations() {
      if (this.listResponse) return this.listResponse.results;
      else return {};
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters("erp/hr/official_vacation", {
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
    ...mapActions("erp/hr/official_vacation", [
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
        for (let i in this.vacations) {
          this.selected.push(this.vacations[i].id);
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
        from_date: "",
        to_date: "",
        reason: "",
        description: "",
      }),
        this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
      this.isUpdating = false;
    },
    create() {
      this.$store
        .dispatch("erp/hr/official_vacation/create", this.form)
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
    openStatusDialogSingle(event, id) {
      this.statusAction = event;
      this.displayStatusDialog = true;
      this.selected = [];
      this.selected.push(id);
    },
    openStatusDialog(event) {
      if (this.selected.length) {
        this.statusAction = event;
        this.displayStatusDialog = true;
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
      this.selected = [];
      this.selectAll = false;
    },

    changeStatus() {
      this.$store
        .dispatch("erp/hr/official_vacation/changeStatus", {
          action: this.statusAction,
          selected: this.selected,
        })
        .then((res) => {
          this.closeStatusDialog();
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
        .dispatch("erp/hr/official_vacation/delete", this.selected)
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
      const { from_date, to_date, reason, description } = record;
      this.recordDetails = { from_date, to_date, reason, description };
      this.displayDetailsDialog = true;
    },
    list() {
      this.$store
        .dispatch("erp/hr/official_vacation/list", this.filterParams)
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
