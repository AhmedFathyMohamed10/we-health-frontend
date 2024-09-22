<template>
  <div class="variable-shift">
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
            <!-- <div class="me-auto"> -->
              <div class="d-flex align-items-center gap-2 ">
                <div class="d-flex align-items-center gap-2 flex-sm-wrap flex-md-nowrap">
                  <label class=""> {{ $t("btns.search") }} </label>
                  <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                    <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',]"></i>
                    <InputText
                      type="text"
                      v-model="searchQuery.employee_or_department"
                      :placeholder="$t('btns.search')"
                      @keyup.enter="search"
                    />
                  </span>
                </div>
                <div class="d-flex align-items-center">
                  <button class="btn btn-icon rounded-circle btn-success-gradient" @click.prevent="search"  v-if="!isSearch">
                    <i class="fa fa-search fa-md" aria-hidden="true"></i>
                  </button>
                  <button class="btn btn-icon rounded-circle btn-secondary-gradient" @click="fetchAll"  v-if="isSearch">
                    <i class="pi pi-undo fa-md"></i>
                    <!-- <span class="mx-2">{{ $t("btns.clear") }}</span> -->
                  </button>
                </div>
                <div class="d-flex gap-1">
                  <span>{{ $t("messages.resultsfound") }} </span>
                  <Badge class="bg-success-gradient" :value="totalRecords"></Badge>
                </div>
              </div>
            <!-- </div> -->
            <div class="">        
              <button class="btn btn-pill btn-success-gradient" @click="openForm">
                <span><i class="fa fa-plus fa-md"></i> </span>
                <span class="mx-2">{{ $t("btns.add") }}</span>
              </button>             </div>
          </div>
        </Base>
        <Base>
          <div class="d-flex align-items-center gap-2 flex-wrap">
            <div>
              <label for=""> {{ $t("dialog.header.status") }}</label>
            </div>
            <div class="d-flex custom-radio-button justify-content-between">
              <div
                v-for="option of report_type_options"
                :key="option.id"
                class="field-radiobutton d-flex gap-1  align-items-center"
              >
                <RadioButton
                  :id="option.id"
                  name="option"
                  :value="option.id"
                  v-model="type_of_shift"
                  @input="list"
                  />
                <label class="me-2 mt-2">{{ option[locale] }} </label>
              </div>
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
                <Column field="Shift" header="Shift">
                  <template #body>
                    <Skeleton></Skeleton>
                  </template>
                </Column>
                <Column field="type Shift" header="Type Shift">
                  <template #body>
                    <Skeleton></Skeleton>
                  </template>
                </Column>
              </DataTable>
            </div>
            <div class="row" v-if="totalRecords && shifts[0].arr.length > 0">
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
                        <th scope="col">{{ $t("form.type.label") }}</th>
                        <th scope="col">{{ $t("table.thead.controls") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in shifts" :key="index">
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
                          <span v-if="item.arr[0].type_of_search==1">
                            <a
                              class="fw-bold"
                              href="javascript:void(0)"
                              @click="openDetailsDialog(item)"
                              >{{ item.arr[0].employee_or_department.name }}</a
                            >
                          </span>
                          <span v-else>
                            <a
                              class="fw-bold"
                              href="javascript:void(0)"
                              @click="openDetailsDialog(item)"
                              >{{ item.arr[0].employee_or_department.department_name }}</a
                            >
                          </span>
                        </td>
                        <td class="align-middle">{{ item.arr[0].shift_name }}</td>
                        <td class="align-middle">{{ findLocaleOption(report_type_options, item.arr[0].report_type) }}</td>
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
          :report_type="report_type"
          :shiftOptions="shiftOptions"
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
                    {{ $t(`shiftRecord.key.${key}`) }}
                  </td>
                  <td class="">
                    <span v-if="!value" class="text-muted">------</span>
                    <span
                      v-if="key != 'updated_at'"
                      >{{ value }}</span
                    >
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
<i18n src="@/lang/erp_v2/hr/shiftRecord.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import toast from "@/mixins/global/toast";
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import pagination from "@/mixins/global/pagination";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp_v2/hr/shiftRecord/Form.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import {cloneDeep} from 'lodash';
export default {
  name: "variableShiftRecord",
  mixins: [pagination, toast],
  props: {
    type_shift: {
      type: Number,
    },
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
    type_shift() {
      this.form.type = this.type_shift;
    },
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
      report_type_options: [
        { en: "Day", ar: "يوم", id: 1 },
        { en: "Week", ar: "اسبوع", id: 2 },
        { en: "Month", ar: "شهري", id: 3 },
        { en: "All", ar: "شهري", id: 4 },
      ],
      displayForm: false,
      isUpdating: false,
      type_of_shift:"",
      report_type:1,
      ////////////////////
      form:{
        type:this.type_shift,
        arr:[],
      },
      displayDeleteDialog: false,
      codeToDelete: null,
      selected: [],
      actionStatus:null,
      selectAll: false,
      displayStatusDialog: false,
      displayDetailsDialog: false,
      recordDetails: null,
      searchQuery: {
        employee_or_department: "",
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
    shifts() {
      if (this.listResponse) {
        let filteredResults = this.listResponse.results.filter(result => result.arr.length > 0);
        return filteredResults;
      }
      else return [];
    },
    totalRecords() {
      if (this.listResponse){
        let filteredResults = this.listResponse.results.filter(result => result.arr.length > 0);
        return filteredResults.length ;
      }
      else return 0;
    },
    ...mapGetters("erp_v2/hr/shiftRecord", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",

      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",

      getDeleteResponse: "getDeleteResponse",
      deleteLoading: "getDeleteLoading",
      getDeleteError: "getDeleteError",
      
      getRowToAdd: "getRowToAdd",
    }),
    rowToAdd: {
      get() {
        return this.getRowToAdd;
      },
      set(value) {
        this.setRowToAdd(value);
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
        type: this.type_shift,
        type_of_shift: this.type_of_shift,
        employee_or_department: this.isSearching? this.searchQuery.employee_or_department: "",
      };
    },
    shiftOptions() {
      if (this.$store.getters["erp_v2/hr/shiftDefinition/getListResponse"]){
        return  this.$store.getters["erp_v2/hr/shiftDefinition/getListResponse"].results;
      }
      else return [];
    },
  },
  created() {
    if (!this.shiftOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp_v2/hr/shiftDefinition/list", params);
    }
  },

  // mounted() {
  //   if (!this.shifts.length > 0) {
  //     this.list();
  //   }
  // },
  methods: {
    ...mapActions("erp_v2/hr/shiftRecord", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setStatusError",
      "setEmployeeOfChoose",
      "setRowToAdd"
    ]),
    cancelForm(){
      this.$emit('close');
    },
    findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value);
      if (item) return item[this.locale];
      else return value;
    },
    /////////////////////////////////////////
    selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.shifts) {
          this.selected.push(this.shifts[i].code);
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
      // this.$emit("closeFormItem");
    },
    openUpdate(item) {
      this.form={...item}
      if (item.type == 2)
      {    if (item.arr.some(item => item.report_type === 1))
      {
        this.report_type = 1;
      }
      else if (item.arr.some(item => item.report_type === 2)){
        this.report_type = 2;
      }
      else if (item.arr.some(item => item.report_type === 3)){
        this.report_type = 3;
      }}
      this.form.x=this.report_type
      if(item.type == 1){
        this.rowToAdd = item.arr[0]
      }
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
      this.form={
        type:this.type_shift,
        arr:[],
      },
      this.rowToAdd= {
        employee_or_department:null,
        type_of_search:null,
        shift:null,
        date:this.rowToAdd.date,
        report_type:null,
        validation_from:null,
        validation_to:null,
      },
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp_v2/hr/shiftRecord/create", this.form)
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
      this.$store
        .dispatch("erp_v2/hr/shiftRecord/update", this.form)
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
        .dispatch("erp_v2/hr/shiftRecord/changeStatus", {
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
      let newItem = cloneDeep(record);
      newItem.group = record.group_data;
      this.recordDetails = { ...newItem };
      this.displayDetailsDialog = true;
    },
    ////////////////////////////
    list() {
      this.$store
        .dispatch("erp_v2/hr/shiftRecord/list", this.filterParams)
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
      if (this.filterParams.employee_or_department) {
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
      this.searchQuery = { employee_or_department: "" };
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



