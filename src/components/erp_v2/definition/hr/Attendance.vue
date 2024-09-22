<template>
  <div class="attendance">
    <EditDialog 
      :display="display" 
      @close="cancelForm"
      :min-width="'80'"
      :max-width="'100'"
      :header="header"
      :footer="false"
      >
      <Base>
        <div class="d-flex flex-wrap justify-content-between gap-2">
          <div class="d-flex gap-2 align-items-center">
            <label class=""> {{ $t("btns.search") }} </label>
            <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
              <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',]"></i>
              <InputText
                type="text"
                v-model="searchQuery.employee"
                :placeholder="$t('btns.search')"
                @keyup.enter="search"
              />
            </span>
            <div>
              <button class="btn btn-icon rounded-circle btn-success-gradient" @click.prevent="search" v-if="!isSearch">
                <i class="fa fa-search fa-md" aria-hidden="true"></i>
              </button>
              <button class="btn btn-icon rounded-circle btn-secondary-gradient" @click="fetchAll"  v-if="isSearch">
                <i class="pi pi-undo fa-md"></i>
              </button>
            </div>
            <div class="d-flex gap-1">
              <span>{{ $t("messages.resultsfound") }} </span>
              <Badge class="bg-success-gradient" :value="totalRecords"></Badge>
            </div>
          </div>
          <div class="">     
            <button class="btn btn-pill btn-success-gradient" @click="openForm">
              <span><i class="fa fa-plus fa-md"></i> </span>
              <span class="mx-2">{{ $t("btns.add") }}</span>
            </button>   
          </div>
        </div>
      </Base>
      <div class="table-wrapper">
        <Base>
          <div v-if="listLoading">
            <DataTable :value="[{}, {}, {}]">
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
          <div class="row" v-if="totalRecords ">
            <div class="col-12" v-if="selected.length > 0">
              <div class="d-flex justify-content-between flex-wrap">
                <div class="actions d-flex flex-wrap">
                  <div class="form-group me-2">
                    <button
                      class="btn btn-pill btn-danger-gradient"
                      @click="openDeleteDialogMultiple(4)"
                    >
                      <i class="fa fa-trash"></i>
                      {{ $t("btns.delete") }}
                    </button>
                  </div>
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
                      <th scope="col">{{ $t("form.shift.label") }}</th>
                      <th scope="col">{{ $t("form.date.label") }}</th>
                      <th scope="col">{{ $t("form.status.label") }}</th>
                      <th scope="col">{{ $t("table.thead.controls") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in attendance" :key="index">
                      <td class="align-middle">
                        <input
                          type="checkbox"
                          :value="item.code"
                          v-model="selected"
                          :binary="true"
                        />
                      </td>
                      <td class="align-middle">
                        {{ calculateTableIndexing(index) }}
                      </td>
                      <td class="align-middle">
                        <span>
                          <a
                            class="fw-bold"
                            href="javascript:void(0)"
                            @click="openDetailsDialog(item)"
                            >{{ item.employee_data.employee__name }}</a
                          >
                        </span>
                      </td>
                      <td class="align-middle">{{ item.shift_name }}</td>
                      <td class="align-middle">{{ item.date }}</td>
                      <td class="align-middle">{{ findLocaleOption(status_options, item.status) }}</td>
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
      :isUpdating="isUpdating"
      @close="resetForm"
      @cancel="resetForm"
      @save="upsert"
      :error="upsertError"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')"
    >
    </Form>

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
    >
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-borderless text-nowrap mb-0">
              <tbody>
                <tr v-for="(value, key) in recordDetails" :key="key">
                  <td class="">
                    {{ $t(`attendance.key.${key}`) }}
                  </td>
                  <td class="">
                    <span v-if="!value" class="text-muted">------</span>
                    <span
                      v-if="key != 'updated_at' && key != 'status'"
                      >{{ value }}</span
                    >
                    <span v-if="key == 'status'">{{
                      findLocaleOption(status_options, value)
                      }}</span>
                    <span v-if="key == 'updated_at'">{{
                      $moment(value).format("MMMM Do YYYY, h:mm:ss a")
                    }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DetailsDialog>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/hr/attendance.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import toast from "@/mixins/global/toast";
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import pagination from "@/mixins/global/pagination";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp_v2/hr/attendance/Form.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import {cloneDeep} from 'lodash';
export default {
  name: "attendance",
  mixins: [pagination, toast],
  props: {
    display: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    header: {
      type: String,
    },
  },
  watch: {
    display() {
      if(this.display){
        if (!this.attendance.length > 0) {
          this.list();
        }
      }
    }
  },
  components: {
    Base,
    NoResults,
    EditButton,
    DeleteButton,
    DeleteDialog,
    DetailsDialog,
    EditDialog,
    Form,
  },
  data() {
    return {
      status_options: [
        { en: "On time", ar: "في الوقت", id:1 },
        { en: "Late", ar: "متأخر", id:2 },
      ],
      displayForm: false,
      isUpdating: false,
      ////////////////////
      displayDeleteDialog: false,
      codeToDelete: null,
      selected: [],
      actionStatus:null,
      selectAll: false,
      displayStatusDialog: false,
      displayDetailsDialog: false,
      recordDetails: null,
      searchQuery: {
        name: "",
      },
      isPaginating: false,
      isSearching: false,
      isSearch: false,
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    attendance() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters("erp_v2/hr/attendance", {
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
    deletedPricingAndUnit: {
      get() {
        return this.getDeletedPricingAndUnit;
      },
    },
    deletedAlternative: {
      get() {
        return this.getDeletedAlternative;
      },
    },
    deletedAlternativeBarcode: {
      get() {
        return this.getDeletedAlternativeBarcode;
      },
    },

    filterParams() {
      return {
        pageNumber: this.pagination.pageNumber + 1,
        rows: this.pagination.rows,
        employee: this.isSearching
          ? this.searchQuery.employee
          : "",
      };
    },
  },
  // mounted() {
  //   if (!this.attendance.length > 0) {
  //     this.list();
  //   }
  // },
  methods: {
    ...mapActions("erp_v2/hr/attendance", [
      "setForm",
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setStatusError",
    ]),
    cancelForm(){
      this.$emit('close');
    },
    /////////////////////////////////////////
    findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value);
      if (item) return item[this.locale];
      else return value;
    },
    selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.attendance) {
          this.selected.push(this.attendance[i].code);
        }
      }
    },
    ////////// UPSERT ///////////////////
    openForm() {
      this.displayForm = true;
    },
    closeForm() {
      this.isUpdating = false;
      this.displayForm = false;
      this.$emit("closeFormItem");
    },
    openUpdate(item) {
      item.employee=item.employee_data
      item.shift=item.shift_code
      item.uploaded_files=[]
      item.deleted_files=[]
      this.form = { ...item };
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
      this.form={
        date:null,
        status:null,
        employee:null,
        shift:null,
        note:"",
        departed:null,
        note_departed:"",
        attended:null,
        note_attended:"",
        uploaded_files: [],
        saved_files: [],
        deleted_files: [],
      },
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      if (this.form.date) {
        this.form.date = this.$moment(this.form.date).format("YYYY-MM-DD");
      }
      if (this.$moment(this.form.departed, "hh:mm A", true).isValid()) {
        this.form.departed = this.$moment(this.form.departed).format("hh:mm A");
      }

      if (this.$moment(this.form.attended, "hh:mm A", true).isValid()) {
        this.form.attended = this.$moment(this.form.attended).format("hh:mm A");
      }
      let formData = new FormData();
      if (this.form.uploaded_files) {
        this.form.uploaded_files.forEach((element) => {
          formData.append("uploaded_files", element.file);
        });
      } else {
        formData.append("uploaded_files", []);
      }
      delete this.form.uploaded_files;
      delete this.form.saved_files;
      delete this.form.deleted_files;

      let data = JSON.stringify(this.form);
      formData.append("data", data);

      // this.$emit('setSelected', this.form.final_account);
      this.$store
        .dispatch("erp_v2/hr/attendance/create", formData)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
    update() {
      if (this.form.date) {
        this.form.date = this.$moment(this.form.date).format("YYYY-MM-DD" );
      }
      if(this.$moment(this.form.attended).isValid()){
        this.form.attended = this.$moment(this.form.attended, 'hh:mm:ss', true).format('hh:mm:ss');
      }
      if(this.$moment(this.form.departed).isValid()){
        this.form.departed = this.$moment(this.form.departed, 'hh:mm:ss', true).format('hh:mm:ss');
      }
      let formData = new FormData();
      if (this.form.uploaded_files) {
        this.form.uploaded_files.forEach((element) => {
          formData.append("uploaded_files", element.file);
        });
      }else{
        formData.append("uploaded_files", []);
      }

      let id = this.form.id;
      delete this.form.saved_files;
      delete this.form.uploaded_files;
      let data = JSON.stringify({...this.form});
      formData.append("data", data);
      this.$store
        .dispatch("erp_v2/hr/attendance/update", {id: id, data: formData })
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

    /////////// DELETE /////////////
    openDeleteDialog() {
      this.displayDeleteDialog = true;
    },
    closeDeleteDialog() {
      this.actionStatus = null;
      this.selected = [];
      this.displayDeleteDialog = false;
      this.$emit("closeDeleteItem");
    },
    openDeleteDialogSingle(code, action) {
      this.openDeleteDialog();
      this.selected.push(code);
      this.actionStatus = action;
    },
    openDeleteDialogMultiple(action) {
      if (this.selected.length) {
        this.actionStatus = action;
        this.openDeleteDialog();
      } else {
        this.infoToast(
          this.$t("toast.select.summery"),
          this.$t("toast.select.details")
        );
      }
    },
    deleteRecords() {
      this.$store
        .dispatch("erp_v2/hr/attendance/changeStatus", {
          action: this.actionStatus,
          selected: this.selected,
        })
        .then((res) => {
          this.closeDeleteDialog();
          this.selected = [];
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
    closeDetailsDialog() {
      this.recordDetails = null;
      this.displayDetailsDialog = false;
    },
    openDetailsDialog(record) {
      if(record.shift_name){
        record.shift=record.shift_name
      }
      if(record.employee_data){
        record.employee=record.employee_data.employee__name
      }
      const {
        date,
        status,
        employee,
        shift,
        departed,
        note_departed,
        attended,
        note_attended,
        note,
        updated_at,
      } = record;
      this.recordDetails = {
        date,
        status,
        employee,
        shift,
        departed,
        note_departed,
        attended,
        note_attended,
        note,
        updated_at,
      };
      this.displayDetailsDialog = true;
    },
    ////////////////////////////
    list() {
      this.$store
        .dispatch("erp_v2/hr/attendance/list", this.filterParams)
        .then(() => {
          if (this.getItems == true) {
            this.$emit("setItems");
          }
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
      this.isSearch = true;
      if (this.filterParams.employee) {
        this.filterParams.pageNumber = 1;
        this.list();
      } else {
        this.infoToast(
          this.$t("toast.search.summery"),
          this.$t("toast.search.details")
        );
      }
    },
    
    fetchAll() {
      this.isSearch = false;
      this.searchQuery = { account_name_en: "" };
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
