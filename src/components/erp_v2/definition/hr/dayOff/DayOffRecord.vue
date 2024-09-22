<template>
  <div class="day-off-record">
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
                  v-model="searchQuery.reason"
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
        <Base>
          <div class="d-flex align-items-center gap-2 flex-wrap">
            <div>
              <label for=""> {{ $t("dialog.header.status") }} </label>
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
                  v-model="type_of_report"
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
                <Column field="day_off_name" header="Day Off Name">
                  <template #body>
                    <Skeleton></Skeleton>
                  </template>
                </Column>
                <Column field="day_off_type" header="Day Off Type">
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
                        <th scope="col">{{ $t("form.reason.label") }}</th>
                        <th scope="col">{{ $t("form.period_from.label") }}</th>
                        <th scope="col">{{ $t("form.period_to.label") }}</th>
                        <th scope="col">{{ $t("table.thead.controls") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in daysOff" :key="index">
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
                              >{{ item.reason }}</a
                            >
                          </span>
                        </td>
                        <td class="align-middle">{{ item.period_from }}</td>
                        <td class="align-middle">{{ item.period_to }}</td>
                        <td class="align-middle">
                          <div
                            class="d-flex justify-content-center align-items-center"
                          >
                            <ReviewOrderButton class=""/>
                            <EditButton class="" @edit="openUpdate(item)"/>
                            <DeleteButton @delete="openDeleteDialogSingle(item.code, 4)"/>
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
        :dayOffDefinitionOptions="dayOffDefinitionOptions"
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
                      {{ $t(`employeeDayOff.key.${key}`) }}
                    </td>
                    <td class="">
                      <span v-if="!value" class="text-muted">------</span>
                      <span
                        v-if="key != 'updated_at' && key != 'type_day_off'"
                        >{{ value }}</span
                      >
                      <span v-if="key == 'type_day_off'">{{
                        findLocaleOption(dayOffDefinitionOptions , value)
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
<i18n src="@/lang/erp_v2/hr/employeeDayOff.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import toast from "@/mixins/global/toast";
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import pagination from "@/mixins/global/pagination";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp_v2/hr/employeeDayOff/Form.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import ReviewOrderButton from "@/components/global/utilities/ReviewOrderButton.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
export default {
  name: "day-off-record",
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
        if (!this.daysOff.length > 0) {
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
    ReviewOrderButton,
  },
  data() {
    return {
      displayForm: false,
      form: {
        reason:"",
        type_day_off:null,
        period_from:null,
        period_to:null,
      },
      type_of_report:"",
      report_type_options: [
        { en: "All", ar: "الجميع", id: 1 },
        { en: "Sent", ar: "مرسل", id: 2 },
        { en: "Pending", ar: "قيد الانتظار", id: 3 },
      ],
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
        reason: "",
      },
      isPaginating: false,
      isSearching: false,
      isSearch: false,
    };
  },
  computed: {
    dayOffDefinitionOptions() {
      if (this.$store.getters["erp_v2/hr/dayOffDefinition/getListResponse"]){
        return  this.$store.getters["erp_v2/hr/dayOffDefinition/getListResponse"].results;
      }
      else return [];
    },
 
    listResponse() {
      return this.getListResponse;
    },
    daysOff() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters("erp_v2/hr/employeeDayOff", {
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
    filterParams() {
      return {
        pageNumber: this.pagination.pageNumber + 1,
        rows: this.pagination.rows,
        type_of_report: this.type_of_report,
        reason: this.isSearching ? this.searchQuery.reason : "",
      };
    },
  },
  created() {
    if (!this.dayOffDefinitionOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, day_off_name: "" };
      this.$store.dispatch("erp_v2/hr/dayOffDefinition/list", params);
    }
  },
  // mounted() {
  //   if (!this.daysOff.length > 0) {
  //     this.list();
  //   }
  // },
  methods: {
    ...mapActions("erp_v2/hr/employeeDayOff", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setStatusError",
    ]),
    findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value);
      if (item) return item['day_off_name'];
      else return value;
    },
    /////////////////////////////////////////  
    cancelForm(){
      this.$emit('close');
    },
    selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.daysOff) {
          this.selected.push(this.daysOff[i].code);
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
    },
    openUpdate(item) {
      item.type_day_off = item['type_day_off_id']
      const {
        id,
        code,
        reason,
        type_day_off,
        period_from,
        period_to,
        updated_at,
      } = item;
      this.form = {
        id,
        code,
        reason,
        type_day_off,
        period_from,
        period_to,
        updated_at,
      };
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
      this.form = {
        reason:"",
        type_day_off:null,
        period_from:null,
        period_to:null,

      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      if (this.form.period_from) {
        this.form.period_from = this.$moment(this.form.period_from).format(
          "YYYY-MM-DD"
        );
      }
      if (this.form.period_to) {
        this.form.period_to = this.$moment(this.form.period_to).format(
          "YYYY-MM-DD"
        );
      }
      this.$store
        .dispatch("erp_v2/hr/employeeDayOff/create", this.form)
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
      if (this.form.period_from) {
        this.form.period_from = this.$moment(this.form.period_from).format(
          "YYYY-MM-DD"
        );
      }
      if (this.form.period_to) {
        this.form.period_to = this.$moment(this.form.period_to).format(
          "YYYY-MM-DD"
        );
      }
      this.$store
        .dispatch("erp_v2/hr/employeeDayOff/update", this.form)
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
      this.actionStatus=null
      this.displayDeleteDialog = false;
    },
    openDeleteDialogSingle(codes, action) {
      this.openDeleteDialog();
      this.selected = [];
      this.selected.push(codes);
      this.actionStatus = action
    },
    openDeleteDialogMultiple(action) {
      if (this.selected.length) {
        this.actionStatus = action
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
        .dispatch("erp_v2/hr/employeeDayOff/changeStatus", {"action":this.actionStatus,"selected":this.selected})
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
    ///////////////// DETAILS /////////////////////////////
    closeDetailsDialog() {
      this.recordDetails = null;
      this.displayDetailsDialog = false;
    },
    openDetailsDialog(record) {
      if(record.type_day_off_id){
        record.type_day_off=record.type_day_off_id
      }
      const {
        reason,
        type_day_off,
        period_from,
        period_to,
        updated_at,
      } = record;
      this.recordDetails = {
        reason,
        type_day_off,
        period_from,
        period_to,
        updated_at,
      };
      this.displayDetailsDialog = true;
    },
    list() {
      this.$store.dispatch("erp_v2/hr/employeeDayOff/list", this.filterParams).then(() => {
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
      this.isSearch= true;
      if (this.filterParams.reason) {
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
      this.isSearch= false;
      this.searchQuery = { reason: "" };
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
