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
            <h4>{{ $t("employee.header") }}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-xxl-3">
            <div class="form-group">
              <label class="form-label"> {{ $t("form.name.label") }} </label>
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
                  v-model="searchQuery.name"
                  :placeholder="$t('btns.search')"
                  @keyup.enter="search"
                />
              </span>
            </div>
          </div>
          <div class="col-md-4 col-xxl-3">
            <div class="form-group">
              <label class="form-label"> {{ $t("form.mobile.label") }} </label>
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
                  v-model="searchQuery.mobile"
                  :placeholder="$t('btns.search')"
                  @keyup.enter="search"
                />
              </span>
            </div>
          </div>
          <div class="col-md-4 d-flex align-items-end">
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
                  <span class="mx-2">{{ $t("btns.new") }}</span>
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
          <DataTable :value="[{}, {}, {}, {}, {}]">
            <Column field="id" header="#">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="name" header="Name">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="mobile" header="Mobile">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="email" header="Email">
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
            <div class="d-flex justify-content-between flex-wrap">
              <div class="actions d-flex flex-wrap">
                <div class="form-group me-2">
                  <button
                    class="btn btn-pill btn-danger-gradient"
                    @click="openDeleteDialogMultiple"
                  >
                    <i class="fa fa-trash"></i>
                    {{ $t("btns.delete") }}
                  </button>
                </div>
                <div class="form-group me-2">
                  <button
                    class="btn btn-pill btn-success-gradient"
                    @click="openStatusDialog(1)"
                  >
                    {{ $t("btns.active") }}
                  </button>
                </div>
                <div class="form-group me-2">
                  <button
                    class="btn btn-pill btn-warning-gradient"
                    @click="openStatusDialog(2)"
                  >
                    {{ $t("btns.suspended") }}
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
                    <th scope="col">{{ $t("form.image.label") }}</th>
                    <th scope="col">{{ $t("form.name.label") }}</th>
                    <th scope="col">{{ $t("form.mobile.label") }}</th>
                    <th scope="col">{{ $t("form.address.label") }}</th>
                    <th scope="col">{{ $t("form.dob.label") }}</th>
                    <th scope="col">{{ $t("form.gender.label") }}</th>
                    <th scope="col">{{ $t("form.email.label") }}</th>
                    <th scope="col">{{ $t("form.marital_status.label") }}</th>
                    <th scope="col">{{ $t("form.status.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(employee, index) in employees" :key="index">
                    <td class="align-middle">
                      <input
                        type="checkbox"
                        :value="employee.id"
                        v-model="selected"
                        :binary="true"
                      />
                    </td>
                    <td class="align-middle">
                      {{ calculateTableIndexing(index) }}
                    </td>
                    <td class="align-middle">
                      <div v-if="employee.image">
                        <img
                          class="avatar brround cover-image"
                          :src="'http://localhost:8085/media/' + employee.image"
                        />
                      </div>
                    </td>

                    <td class="align-middle">
                      <span>
                        <a
                          class="fw-bold"
                          href="javascript:void(0)"
                          @click="openDetailsDialog(employee)"
                          >{{ employee.name }}</a
                        >
                      </span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ employee.mobile }}</span>
                    </td>
                    <td class="align-middle">
                      <div>
                        {{ employee.address }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div>
                        {{ employee.dob }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div>
                        {{ $t(employee.gender) }}
                      </div>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ employee.email }}</span>
                    </td>
                    <td class="align-middle">
                      <div>
                        {{ $t(employee.marital_status) }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <span v-if="employee.status == 1">
                        <Tag
                          severity="success"
                          :value="$t('status.active')"
                          rounded
                        ></Tag>
                      </span>
                      <span v-if="employee.status == 2">
                        <Tag
                          severity="warning"
                          :value="$t('status.suspended')"
                          rounded
                        ></Tag>
                      </span>
                    </td>
                    <td class="align-middle">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <EditButton
                          class="me-2"
                          @edit="openUpdate(employee)"
                        ></EditButton>
                        <DeleteButton
                          @delete="openDeleteDialogSingle(employee.id)"
                        ></DeleteButton>
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
      :isLoading="upsertLoading"
      :displayForm="displayForm"
      @close="resetForm"
      @cancel="resetForm"
      @save="upsert"
      :error="upsertError"
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
                    {{ $t(`employee.key.${key}`) }}
                  </td>
                  <td class="">
                    <span v-if="!value" class="text-muted">------</span>
                    <span v-if="dateKeys.includes(key)">{{
                      $moment(value).format("YYYY-MM-DD")
                    }}</span>
                    <span v-if="key !== 'status' && !dateKeys.includes(key)">{{
                      value
                    }}</span>
                    <div v-if="key == 'status'">
                      <span v-if="value == '1'">
                        <Tag
                          severity="success"
                          :value="$t('status.active')"
                          rounded
                        ></Tag>
                      </span>
                      <span v-if="value == '2'">
                        <Tag
                          severity="warning"
                          :value="$t('status.suspended')"
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
<i18n src="@/lang/erp/employees/employees.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp/HR/employees/Form.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";
import { urls } from "@/backend/urls.js";
import vuerouter from "vue-router";
export default {
  mixins: [pagination, toast],
  components: {
    Base,
    NoResults,
    EditButton,
    DeleteButton,
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
      searchQuery: {
        name: "",
        mobile: "",
      },
      isPaginating: false,
      isSearching: false,
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    employees() {
      if (this.listResponse) return this.listResponse.results;
      else return {};
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters("erp/hr/employees", {
      getForm: "getForm",

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

    form: {
      get() {
        return this.getForm;
      },
      set(value) {
        this.setForm(value);
      },
    },

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
        name: this.isSearching ? this.searchQuery.name : "",
        mobile: this.isSearching ? this.searchQuery.mobile : "",
      };
    },
  },
  mounted() {
    if (!this.employees.length > 0) {
      this.list();
    }
  },
  methods: {
    ...mapActions("erp/hr/employees", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setStatusError",
      "setForm",
    ]),
    /////////////////////////////////////////
    selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.employees) {
          this.selected.push(this.employees[i].id);
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
    openUpdate(item) {
      // item["mainInfo"] = item.group_id
      console.log(item);
      let record = {};
      let basefiles = [];

      const {
        name,
        mobile,
        dob,
        address,
        gender,
        email,
        marital_status,
        image,
      } = item;
      const { username, salary, password, job_start_date } = item;
      const { saved_files, education, status } = item;
      record["mainInfo"] = {
        name,
        mobile,
        dob,
        address,
        gender,
        email,
        marital_status,
        image,
      };
      record["empolymentInfo"] = { username, salary, password, job_start_date };
      record["otherInfo"] = { saved_files, education, status };
      record["otherInfo"]["emergency_numbers"] = item.emergency_number;
      record["otherInfo"]["deleted_files"] = [];
      record["otherInfo"]["uploaded_files"] = [];
      record["empolymentInfo"]["shift"] = item.shift_id;
      record["empolymentInfo"]["role"] = item.role_id;
      record["empolymentInfo"]["direct_manager"] = item.direct_manager_id;
      record["id"] = item.id;

      if (item.image) {
        record.mainInfo.image = urls.auth.localmediaUrl + item.image;
      }

      this.isUpdating = true;
      this.form = record;
      this.openForm();
    },
    resetForm() {
      (this.form = {
        mainInfo: {
          name: "",
          mobile: "",
          dob: "",
          address: "",
          gender: "",
          email: "",
          marital_status: "",
          image: "",
        },
        empolymentInfo: {
          role: "",
          username: "",
          salary: "",
          password: "",
          job_start_date: "",
          direct_manager: "",
          shift: "",
        },
        otherInfo: {
          emergency_numbers: [],
          files: [],
          education: "",
          status: 1,
        },
      }),
        this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
      this.isUpdating = false;
    },
    create() {
      this.form.mainInfo["nameValue"] = this.form.mainInfo.name;
      if (typeof this.form.mainInfo.name === "object") {
        this.form.mainInfo.name = this.form.mainInfo.name.fullname;
      } else if (typeof this.form.mainInfo.name === "string") {
        this.form.mainInfo.name = this.form.mainInfo.name;
      }
      let formData = new FormData();
      if (this.form.otherInfo.uploaded_files) {
        this.form.otherInfo.uploaded_files.forEach((element) => {
          formData.append("uploaded_files", element.file);
        });
      }
      formData.append("uploaded_files", []);
      let employeeData = {
        ...this.form.mainInfo,
        ...this.form.empolymentInfo,
        ...this.form.otherInfo,
      };
      formData.append("image", this.form.mainInfo.image);
      delete employeeData.image;
      delete employeeData.deleted_files;
      delete employeeData.saved_files;
      delete employeeData.uploaded_files;
      let data = JSON.stringify(employeeData);
      formData.append("data", data);
      console.log(formData);
      this.$store
        .dispatch("erp/hr/employees/create", formData)
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
    update() {
      console.log(this.form);
      this.form.mainInfo.image = this.form.mainInfo.image.replace(
        urls.auth.localmediaUrl,
        ""
      );
      let formData = new FormData();
      if (this.form.otherInfo.uploaded_files) {
        this.form.otherInfo.uploaded_files.forEach((element) => {
          formData.append("uploaded_files", element.file);
        });
      }
      formData.append("uploaded_files", []);
      let id = this.form.id;
      let employeeData = {
        // id: this.form.id,
        ...this.form.mainInfo,
        ...this.form.empolymentInfo,
        ...this.form.otherInfo,
      };
      formData.append("image", this.form.mainInfo.image);
      delete employeeData.image;
      delete employeeData.uploaded_files;
      let data = JSON.stringify(employeeData);
      formData.append("data", data);
      this.$store
        .dispatch("erp/hr/employees/update", { id: id, data: formData })
        .then((res) => {
          this.resetForm();
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
    upsert() {
      if (this.isUpdating) {
        this.update();
      } else {
        this.create();
      }
    },
    //////////// STATUS /////////////////////
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
        .dispatch("erp/hr/employees/changeStatus", {
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
        .dispatch("erp/hr/employees/delete", this.selected)
        .then((res) => {
          if (this.selected.length == this.pagination.rows) {
            this.fetchAll();
          }
          this.closeDeleteDialog();
          this.selected = [];
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
          // this.fetchAll();
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
      this.$router.push({
        name: "employee-profile",
        params: { id: record.id },
      });
      const {
        name,
        mobile,
        address,
        email,
        salary,
        username,
        education,
        marital_status,
        gender,
        dob,
        job_start_date,
        status,
        created_at,
      } = record;
      this.recordDetails = {
        name,
        mobile,
        address,
        email,
        salary,
        username,
        education,
        marital_status,
        gender,
        dob,
        job_start_date,
        status,
        created_at,
      };
      this.recordDetails["role"] = record.role_obj.name;
      this.recordDetails["shift"] = record.shift_obj.name;
      this.displayDetailsDialog = true;
    },
    list() {
      this.$store
        .dispatch("erp/hr/employees/list", this.filterParams)
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
      if (this.filterParams.name || this.filterParams.mobile) {
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
      this.searchQuery = { name: "", mobile: "" };
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
<style></style>
