<template>
  <div class="account">
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
                v-model="searchQuery.company_name_en"
                :placeholder="$t('btns.search')"
                @keyup.enter="search"
              />
            </span>
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
                v-model="searchQuery.company_name_ar"
                :placeholder="$t('btns.search')"
                @keyup.enter="search"
              />
            </span>
            <div>
              <button class="btn btn-icon rounded-circle btn-success-gradient" @click.prevent="search" v-if="!isSearching">
                <i class="fa fa-search fa-md" aria-hidden="true"></i>
              </button>
              <button class="btn btn-icon rounded-circle btn-secondary-gradient" @click="fetchAll"  v-if="isSearching">
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
      <div v-if="totalRecords">
        <div class="row">
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
                    <th @click="toggleSort('id')">
                      {{ $t("form.company_name_en.label")
                      }}<i
                        class="p-sortable-column-icon pi pi-fw pi-sort-amount-up-alt"
                      ></i>
                    </th>

                    <th scope="col">{{ $t("form.company_name_ar.label") }}</th>
                    
                    <th scope="col">{{ $t("form.phone_number.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(b2b, index) in b2bs" :key="index">
                    <td class="align-middle">
                      <input
                        type="checkbox"
                        :value="b2b.code"
                        v-model="selected"
                        :binary="true"
                      />
                    </td>
                    <td class="align-middle">
                      {{ calculateTableIndexing(index) }}
                    </td>
                    <td class="align-middle">
                      <span>
                        {{ b2b.company_name_en }}
                      </span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ b2b.company_name_ar }}</span>
                    </td>
                   
                   
                    <td class="align-middle fw-bold">
                      <span> {{ b2b.phone_number }} </span>
                    </td>

                    <td class="align-middle">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <EditButton
                          class="me-2"
                          @edit="openUpdate(b2b)"
                        ></EditButton>
                        <DeleteButton
                          @delete="openDeleteDialogSingle(b2b.code, 4)"
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
      </div>
      <div v-if="!totalRecords && !listLoading">
        <NoResults></NoResults>
      </div>
    </Base>
    </div>
    <Form
        v-model="form"
        :isLoading="upsertLoading"
        :isUpdating="isUpdating"
        :displayForm="displayForm" 
        :paymentMethodOptions="paymentMethodOptions" 
        @close="resetForm"
        @cancel="resetForm"
        @save="upsert"
        :error="upsertError"
       
        :header="isUpdating ? $t('dialog.header.editB2B') : $t('dialog.header.newB2B')">
      >
      </Form>

    <DeleteDialog
      :display="displayDeleteDialog"
      @cancel="closeDeleteDialog"
      @delete="deleteRecords"
      :isLoading="deleteLoading"
    />
    <Move
      :isLoading="upsertLoading"
      :displayForm="displayFormMove"
      :header="$t('dialog.header.move')"
      @cancelMove="closeMoveItem"
      @saveMove="moveItem"
    >
    </Move>
  </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/b2b/b2b.json"></i18n>
<script>
const erp_b2b= "erp_v2/b2b/";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp_v2/b2b/Form.vue";
import Move from "@/components/erp_v2/b2b/Move.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import Base from "@/components/global/utilities/Base.vue";
import { cloneDeep } from "lodash";
import toast from "@/mixins/global/toast";
import moment from 'moment';
export default {
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
    displayFormItem: {
      type: Boolean,
      default() {
        return false;
      },
    },
    isDeleteItem: {
      type: Boolean,
      default() {
        return false;
      },
    },
    isMovingItem:{
      type: Boolean,
      default() {
        return false;
      },
    },
    selectedNodeKey: {
      type: Object,
    },
    getItems: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  watch: {
   
    displayFormItem(value) {
      if (value == true) {
          if (this.selectedNodeKey !== null && typeof this.selectedNodeKey === "object") {
              this.form.group = this.selectedNodeKey;
          }
          this.openForm();
        }
    },
    isDeleteItem() {
      if (this.isDeleteItem == true) {
        this.openDeleteDialogMultiple(4);
      }
    },
    isMovingItem(value) {
      if (value == true) {
        this.openMoveDialog();
      }
    },
    selectedNodeKey(value) {
      if (value !== null && typeof value === "object") {
          this.group_selected_id = value.id;
          this.list();
      } else {
        this.group_selected_id = "";
        this.b2bs = []
      }
    },
    getItems(value) {
      if (value == true) {
        this.list();
      }
    },
  },
  components: {
    NoResults,
    EditButton,
    DeleteButton,
    DeleteDialog,
    Form,
    Move,
    EditDialog,
    Base,
  },
  data() {
    return {
      displayFormMove: false,
      group_selected_id:"",
      displayForm: false,
      isUpdating: false,
      ////////////////////
      displayDeleteDialog: false,
      codeToDelete: null,
      selected: [],
      actionStatus: null,
      selectAll: false,
      displayStatusDialog: false,
      displayDetailsDialog: false,
      recordDetails: null,
      searchQuery: {
        company_name_en: "",
        company_name_ar:"",
      },
      isPaginating: false,
      isSearching: false,
      sortKey: null,
      sortOrder: 1, 
      genderOptions: [
        { name: "Male", en: "Male", ar: "ذكر" },
        { name: "Female", en: "Female", ar: "انثي" },
      ],
      paymentMethodOptions: [
        { name: "Credit", en: "Credit", ar: "دائن" },
        { name: "Debit", en: "Debit", ar: "مدين" },
        { name: "Both", en: "Both", ar: "كلاهما" },
      ],
      maritalStatusOptions: [
        { name: "Married", en: "Married", ar: "متزوج مغفل" },
        { name: "Single", en: "Single", ar: "ملهوش كتكوته" },
        { name: "Divorced", en: "Divorced", ar: "ملهي علي عينه" },
        
        { name: "Other", en: "Other", ar: "خنزير" },
      ],
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    b2bs() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters(`${erp_b2b}`, {
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
  //   form() {
  //   return this.$store.getters[`${erp_b2b}getForm`];
  // },
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
    filterParams() {
      return {
        pageNumber: this.pagination.pageNumber + 1,
        rows: this.pagination.rows,
        company_name_en: this.isSearching ? this.searchQuery.company_name_en : "",
        company_name_ar: this.isSearching ? this.searchQuery.company_name_ar : "",
        group_id: this.group_selected_id,
      };
    },
  },
  methods: {
    ...mapActions(`${erp_b2b}`, [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setForm",
    ]),
    /////////////////////////////////////////
  
    findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value);
      if (item) return item[this.locale];
      else return value;
    },

    selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.b2bs) {
          this.selected.push(this.b2bs[i].code);
        }
      }
    },

    ////////// UPSERT ///////////////////
    cancelForm(){
      this.$emit('close');
    },
    openForm() {
      this.displayForm = true;
    },
    closeForm() {
      this.isUpdating = false;
      this.displayForm = false;
      this.$emit("closeFormItem");
    },
    openUpdate(item) {
    let record = {}
    const{city,address,email,phone_number,other_phone_number,industry_type} = item
    const{discount,profit,max_debit,treat_as,prevent_dealing,alert_dealing,prevent_give,alert_give,
      payment_method} = item;
    const {id,company_name_en,company_name_ar,code} = item
   
    record["contact"] = {city,address,email,phone_number,other_phone_number,industry_type}
    record["permissions"] = {discount,profit,max_debit,treat_as,prevent_dealing,alert_dealing,prevent_give,alert_give,
      payment_method};
    record["group"] = item.group_data;
    record["company_type"] = item.company_type_data;
    record["contracts"]= item.contract;
      this.form = {...record,id,company_name_en,company_name_ar,code};
      // console.log(t)
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
        this.form = {
         
      company_name_en: null,
      company_name_ar: null,
      company_type: null,
      group: null,
      code: null,

      contact: {
        city: null,
        address: "",
        email: "",
        phone_number: null,
        other_phone_number: null,
        industry_type: "",
      },
      permissions: {
        discount: null,
        profit: null,
        max_debit: null,
        treat_as: null,
        prevent_dealing: false,
        alert_dealing: false,
        prevent_give: false,
        alert_give: false,
        payment_method: null,
      },

      contracts: [],
    }
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$emit('setSelected', this.form.group);
      if (typeof this.form.group === "object") {
        this.form.group = this.form.group;
        // this.filterParams.group_id =  this.form.group;
        // this.list()
      } 
      const {
      company_name_en,
      company_name_ar,
      company_type,
      group,
      code,
      contracts,
    } = this.form;
      let b2bData = {
    company_name_en,
    company_name_ar,
    company_type,
    group,
    code,
    contracts,
      ...this.form.contact,
      ...this.form.permission,
    };
      this.$store
        .dispatch(`${erp_b2b}create`, b2bData)
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
      const {
        id,
      company_name_en,
      company_name_ar,
      company_type,
      group,
      code,
      contracts,
    } = this.form;
      let b2bData = {
        id,
    company_name_en,
    company_name_ar,
    company_type,
    group,
    code,
    contracts,
      ...this.form.contact,
      ...this.form.permission,
    };
      this.$store
        .dispatch(`${erp_b2b}update`, b2bData)
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
      this.actionStatus=action;
    },
    openDeleteDialogMultiple(action) {
      console.log("delete multi")
      if (this.selected.length) {
        this.actionStatus=action;
                this.openDeleteDialog();
      } else {
        this.$emit("closeDeleteItem");
        this.infoToast(
          this.$t("toast.select.summery"),
          this.$t("toast.select.details")
        );
      }
    },
    deleteRecords() {
      this.$store
        .dispatch(`${erp_b2b}delete`, {
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
    ////////// move items //////
    closeMoveItem() {
      this.selected = [];
      this.displayFormMove = false;
      this.$emit("closemoveItems");
    },
    openMoveDialog() {
      if (this.selected.length) {
        this.displayFormMove = true;
        // this.$emit("closemoveItems");
      } else {
        this.$emit("closemoveItems");
        this.infoToast(
          this.$t("toast.select.summery"),
          this.$t("toast.select.details")
        );
      }
    },
    moveItem(data) {
      console.log("moveItem")
      this.$store
        .dispatch(`${erp_b2b}move`, {
          group: data,
          selected: this.selected,
        }).then((res) => {
          this.closeMoveItem();
          this.selected = [];
          this.selectAll = false;
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
    ///////////////// LIST /////////////////////////////
    list() {
      this.$store
        .dispatch(`${erp_b2b}list`, this.filterParams)
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
      if (this.filterParams.name) {
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
      this.searchQuery = { company_name_en: "", company_name_ar:"" };
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