<template>
  <div class="AttendanceAndDeparture">
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
            <h4 v-if="this.queryParam == 1">
              {{ $t("attendanceAndDepartures.headerAttendance") }}
            </h4>
            <h4 v-if="this.queryParam == 2">
              {{ $t("attendanceAndDepartures.headerDeparture") }}
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-xl-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.employee.label")
              }}</label>
              <input
                type="text"
                v-model="searchQuery.employee"
                :placeholder="$t('form.employee.placeholder')"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-2 d-flex align-items-end">
            <div class="form-group">
              <button
                class="btn btn-pill btn-success-gradient"
                @click.prevent="filter"
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
                  <span v-if="this.queryParam == 1" class="mx-2">{{
                    $t("btns.newAttendance")
                  }}</span>
                  <span v-if="this.queryParam == 2" class="mx-2">{{
                    $t("btns.newDeparture")
                  }}</span>
                </button>
              </div>
              <div class="form-group mb-2 me-2">
                <button
                  class="btn btn-pill btn-secondary-gradient"
                  @click="fetchAll"
                >
                  <span><i class="bi bi-arrow-clockwise"></i></span>
                  <span v-if="this.queryParam == 1" class="mx-2">{{
                    $t("btns.allAttendance")
                  }}</span>
                  <span v-if="this.queryParam == 2" class="mx-2">{{
                    $t("btns.allDeparture")
                  }}</span>
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
          <DataTable :value="[{}]">
            <Column field="id" header="#">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="employee" header="Employee">
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
                    <th scope="col">{{ $t("form.employee.label") }}</th>
                    <th scope="col">{{ $t("form.date_time.label") }}</th>

                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in attendanceAndDepartures"
                    :key="index"
                  >
                    <td class="align-middle custom-width">
                      <input
                        type="checkbox"
                        :value="item.code"
                        v-model="selected"
                        :binary="true"
                      />
                    </td>
                    <td class="align-middle custom-width">
                      {{ calculateTableIndexing(index) }}
                    </td>
                    <td class="align-middle">
                      <span>
                        <a
                          class="fw-bold"
                          href="javascript:void(0)"
                          @click="openDetailsDialog(item)"
                          >{{ item.employee_name }}</a
                        >
                      </span>
                    </td>
                    <td class="align-middle custom-width">
                      {{
                        $moment(item.date_time).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )
                      }}
                    </td>
                    <td class="align-middle">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <EditButton
                          class="me-2"
                          @edit="openUpdate(item)"
                        ></EditButton>
                        <DeleteButton
                          @delete="openDeleteDialogSingle(item.code, 4)"
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
      v-model="form"
      :isLoading="upsertLoading"
      :displayForm="displayForm"
      @close="resetForm"
      @cancel="resetForm"
      @save="upsert"
      :error="upsertError"
      :header="formHeader"
      :queryParam="queryParam"
    >
    </Form>

    <DeleteDialog
      :display="displayDeleteDialog"
      @cancel="closeDeleteDialog"
      @delete="changeStatus"
      :isLoading="statusLoading"
    />

    <DetailsDialog
      :display="displayDetailsDialog"
      @hide="closeDetailsDialog"
      :header="formHeaderDetails"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive details-table">
            <table class="table table-borderless text-nowrap mb-0">
              <tbody>
                <tr v-for="(value, key) in recordDetails" :key="key">
                  <td class="">
                    {{ $t(`attendanceAndDepartures.key.${key}`) }}
                  </td>
                  <td class="custom-text-wrap">
                    <span v-if="!value" class="text-muted">------</span>
                    <span
                      v-if="
                        key != 'updated_at' &&
                        key != 'type' &&
                        key != 'date_time'
                      "
                      >{{ value }}</span
                    >
                    <span v-if="key == 'updated_at' || key == 'date_time'">{{
                      $moment(value).format("MMMM Do YYYY, h:mm:ss a")
                    }}</span>
                    <span v-if="key == 'type'">{{
                      findLocaleOption(typeAction, value)
                    }}</span>
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
<i18n src="@/lang/erp/hr/attendanceAndDeparture/attendanceAndDeparture.json"></i18n> 

<script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp/HR/attendanceAndDeparture/Form.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";

export default {
  name: "AttendanceAndDeparture",
  mixins: [pagination, toast],
  props: {
    queryParam: {
      type: Number,
    },
  },
  components: {
    Base,
    NoResults,
    EditButton,
    DeleteButton,
    Form,
    DeleteDialog,
    DetailsDialog,
  },
  data() {
    return {
      displayForm: false,
      form: {
        employee: null,
        date_time: null,
        type: this.queryParam,
      },
      isUpdating: false,
      ////////////////////
      displayDeleteDialog: false,
      selected: [],
      selectAll: false,
      displayStatusDialog: false,
      statusAction: null,
      displayDetailsDialog: false,
      recordDetails: null,
      searchQuery: {
        employee: null,
      },
      isPaginating: false,
      isSearching: false,
      searching: false,
      typeAction: [
        { en: "Attendance", ar: "حضور", id: 1 },
        { en: "Departure", ar: "إنصراف", id: 2 },
      ],
    };
  },
  computed: {
    formHeader() {
      if (this.isUpdating) {
        if (this.queryParam === 1) {
          return this.$t("dialog.header.editAttendance");
        } else {
          return this.$t("dialog.header.editDeparture");
        }
      } else {
        if (this.queryParam === 1) {
          return this.$t("btns.newAttendance");
        } else {
          return this.$t("btns.newDeparture");
        }
      }
    },
    formHeaderDetails() {
      if (this.queryParam === 1) {
        return this.$t("dialog.header.detailsAttendance");
      } else {
        return this.$t("dialog.header.detailsDeparture");
      }
    },
    ...mapGetters("erp/hr/attendanceAndDeparture", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",

      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",

      getStatusResponse: "getStatusResponse",
      statusLoading: "getStatusLoading",
      getStatusError: "getStatusError",
    }),
    listResponse() {
      return this.getListResponse;
    },
    attendanceAndDepartures() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
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

    filterParams() {
      return {
        pageNumber: this.pagination.pageNumber + 1,
        rows: this.pagination.rows,
        employee: this.isSearching ? this.searchQuery.employee : "",
        type: this.queryParam,
      };
    },
  },
  watch: {
    queryParam() {
      this.list();
    },
  },

  created() {
    if (!this.attendanceAndDepartures.length > 0) {
      this.list();
    }
  },
  methods: {
    ...mapActions("erp/hr/attendanceAndDeparture", [
      "setUpsertResponse",
      "setUpsertError",
    ]),

    findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value);
      if (item) return item[this.locale];
      else return value;
    },
    resetSearchQuery() {
      const searchQuery = {
        employee: null,
        type: this.type,
      };
      return searchQuery;
    },
    /////////////////////////////////////////
    selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.attendanceAndDepartures) {
          this.selected.push(this.attendanceAndDepartures[i].code);
        }
      }
    },
    ////////// UPSERT ///////////////////
    openForm() {
      this.displayForm = true;
    },
    closeForm() {
      (this.isUpdating = false), (this.displayForm = false);
    },
    openUpdate(item) {
      const { id, code, employee, date_time, type, updated_at } = item;
      this.form = {
        id,
        code,
        employee,
        date_time: this.$moment(item.date_time).format("YYYY-MM-DD HH:MM"),
        type,
        updated_at,
      };
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
      this.form = {
        employee: null,
        date_time: null,
        type: this.queryParam,
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.form.date_time = this.$moment(this.form.date_time).format(
        "YYYY-MM-DD HH:MM"
      );

      this.$store
        .dispatch("erp/hr/attendanceAndDeparture/create", this.form)
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
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
    update() {
      this.form.date_time = this.$moment(this.form.date_time).format(
        "YYYY-MM-DD HH:MM"
      );

      this.$store
        .dispatch("erp/hr/attendanceAndDeparture/update", this.form)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          const summery = err.statusText;
          const details = err.message;
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
      this.displayStatusDialog = false;
      this.selected = [];
      this.statusAction = null;
    },
    changeStatus() {
      this.$store
        .dispatch("erp/hr/attendanceAndDeparture/changeStatus", {
          action: this.statusAction,
          selected: this.selected,
        })
        .then((res) => {
          if (
            this.selected.length == this.pagination.rows &&
            this.action == 4
          ) {
            this.fetchAll();
          }
          this.closeStatusDialog();
          this.closeDeleteDialog();
          this.selected = [];
          this.statusAction = null;
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
          this.selectAll = false;
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
      this.statusAction = null;
    },
    openDeleteDialogSingle(code, action) {
      this.openDeleteDialog();
      this.selected.push(code);
      this.statusAction = action;
    },
    openDeleteDialogMultiple() {
      if (this.selected.length) {
        this.statusAction = 4;
        this.openDeleteDialog();
      } else {
        this.infoToast(
          this.$t("toast.select.summery"),
          this.$t("toast.select.details")
        );
      }
    },
    ///////////////// DETAILS /////////////////////////////
    closeDetailsDialog() {
      this.recordDetails = null;
      this.displayDetailsDialog = false;
    },
    openDetailsDialog(record) {
      const { employee, date_time, type, updated_at } = record;
      this.recordDetails = {
        employee: record.employee_name,
        date_time,
        type,
        updated_at,
      };
      this.displayDetailsDialog = true;
    },
    list() {
      this.$store
        .dispatch("erp/hr/attendanceAndDeparture/list", this.filterParams)
        .then(() => {
          if (!this.isPaginating) {
            this.pagination.offset = 0;
            this.pagination.pageNumber = 0;
          }
          this.isSearching = false;
          this.isPaginating = false;
        });
    },
    filter() {
      this.isSearching = true;
      const atLeastOneKeyHasValue = Object.values(this.searchQuery).some(
        (value) => value !== undefined && value !== null && value !== ""
      );
      if (atLeastOneKeyHasValue) {
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
      this.searchQuery = this.resetSearchQuery();
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
<style lang="scss">
.table {
  td {
    min-width: 10rem;
  }
  .custom-width {
    min-width: auto;
  }
}
.custom-text-wrap {
  max-width: 300px;
  text-wrap: wrap;
}
</style>
