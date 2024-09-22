<template>
  <div class="product">
    <div class="table-wrapper">
      <div class="search-wrapper" v-if="products">
        <div class="d-flex align-items-center flex-wrap flex-sm-nowrap justify-content-between gap-2 my-2">
          <label for="" class="mb-0">{{ $t('btns.search') }}</label>
          <span :class="[
            locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
          ]">
            <i class="pi" :class="[
              isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',
            ]"></i>
            <InputText type="text" v-model="searchQuery.name_en" :placeholder="$t('btns.search')"
              @keyup.enter="search" />
          </span>

          <button class="btn btn-icon rounded-circle btn-success-gradient" @click.prevent="search">
            <i class="fa fa-search fa-md" aria-hidden="true"></i>
          </button>
          <div class="result d-flex align-items-center gap-1">
            <span>{{ $t("messages.resultsfound") }} </span>
            <Badge class="bg-success-gradient" :value="totalRecords"></Badge>
          </div>
        </div>
      </div>
      <div v-if="totalRecords">
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">
                      <input type="checkbox" v-model="selectAll" @click="selectAllRecords" :binary="true" />
                    </th>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th>
                      {{ $t("form.name_en.label")
                      }}
                    </th>

                    <th scope="col">{{ $t("form.name_ar.label") }}</th>
                    <th scope="col">
                      {{ $t("form.group.label") }}
                    </th>
                    <th scope="col">{{ $t("form.location.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(product, index) in products" :key="index">
                    <td class="align-middle">
                      <input type="checkbox" :value="product.code" v-model="selected" :binary="true" />
                    </td>
                    <td class="align-middle">
                      {{ calculateTableIndexing(index) }}
                    </td>
                    <td class="align-middle">
                      <span>
                        <a class="fw-bold" href="javascript:void(0)" @click="openDetailsDialog(product)">{{
                          product.name_en }}</a>
                      </span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{product.name_ar}}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ product.group_data.name_en }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span> {{ product.location_name }} </span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <EditButton class="" @edit="openUpdate(product)"></EditButton>
                        <DeleteButton @delete="openDeleteDialogSingle(product.code, 4)"></DeleteButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-12" :dir="[locale == 'ar' ? 'ltr' : '']">
            <Paginator :first.sync="pagination.offset" :rows.sync="pagination.rows" :totalRecords="totalRecords"
              :rowsPerPageOptions="pagination.rowsOptions" @page="onPage($event)"></Paginator>
          </div>
        </div>
      </div>
      <div v-if="!totalRecords && !listLoading">
        <NoResults></NoResults>
      </div>
    </div>
    <Form 
      v-model="form" 
      :isLoading="upsertLoading" 
      :isUpdating="isUpdating" 
      :displayForm="displayForm" 
      :itemTypeOption="itemTypeOption" 
      @close="resetForm"
      @cancel="resetForm" 
      @save="upsert" 
      :error="upsertError"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')"
    />

    <DeleteDialog 
      :display="displayDeleteDialog"
      @cancel="closeDeleteDialog" 
      @delete="deleteRecords"
      :isLoading="deleteLoading" 
      />
      <DetailsProduct
      :display="displayDetailsDialog"
      @hide="closeDetailsDialog"
      :recordDetails="recordDetails"
      :header="$t('dialog.header.details')"
    >
    </DetailsProduct>
    <Move
      :isLoading="upsertLoading"
      :displayForm="displayFormMove"
      :header="$t('dialog.header.moveGroup')"
      @cancelMove="closeMoveItem"
      @saveMove="moveItem"
    >
    </Move>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/items/product.json"></i18n>
<script>
import { cloneDeep } from "lodash";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp_v2/items/product/Form.vue";
import DetailsProduct from "@/components/erp_v2/items/product/DetailsProduct.vue";
import Move from "@/components/erp_v2/items/product/Move.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";
export default {
  mixins: [pagination, toast],
  props: {
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
    selectedNodeKey: {
      type: Object,
    },
    getItems: {
      type: Boolean,
      default() {
        return false;
      },
    },
    isMovingItem: {
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
    isDeleteItem(value) {
      if (value == true) {
        this.openDeleteDialogMultiple(4);
      }
    },
    selectedNodeKey(value) {
      if (value !== null && typeof value === "object") {
          this.group_selected_id = value.id;
          this.list();
      } else {
        this.group_selected_id = "";
      }
    },
    getItems(value) {
      if (value == true) {
        this.list();
      }
    },
    isMovingItem(value) {
      if (value == true) {
        this.openMoveDialog();
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
    DetailsProduct,
  },
  data() {
    return {
      displayFormMove:false,
      group_selected_id:"",
      displayForm: false,
      isUpdating: false,
      ////////////////////
      displayDeleteDialog: false,
      selected: [],
      actionStatus: null,
      selectAll: false,
      displayDetailsDialog: false,
      recordDetails: null,
      searchQuery: {
        name_en: "",
      },
      isPaginating: false,
      isSearching: false,
      itemTypeOption: [
        { en: "product", ar: "منتجي", id: "1" },
        { en: "service", ar: "خدمي", id: "2" },
      ],
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    products() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters("erp_v2/items/product", {
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

      getDeletedPricingAndUnit: "getDeletedPricingAndUnit",
      getDeletedAlternative: "getDeletedAlternative",
      getDeletedAlternativeBarcode: "getDeletedAlternativeBarcode",
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
        name_en: this.isSearching
          ? this.searchQuery.name_en
          : "",
          group: this.group_selected_id,
      };
    },
  },
  methods: {
    ...mapActions("erp_v2/items/product", [
      "setForm",
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
        for (let i in this.products) {
          this.selected.push(this.products[i].code);
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
      let newItem = cloneDeep(item);
      newItem.uploaded_files=[]
      newItem.deleted_files=[]
      newItem.account = item.account_name;
      newItem.group = item.group_data;
      this.form = { ...newItem };
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
      this.form = {
        name_en: "",
        name_ar: "",
        group: null,
        location: null,
        serial: 111111,
        accounting_code: 1111,
        status: 1,
        item_type:null,
        file: null,
        general: {
          min_limit: null,
          max_limit: null,
          last_supplier: null,
          in_active: false,
          prevent_give_discount: false,
          prevent_negative_quantity_take_out: false,
          stop_selling: false,
          prevent_price_modification: false,
          tax_free: false,
          alert_before_expiration_date: false,
          expiration_date_value: null,
          expiration_date_selection: null,
        },
        mic: {
          indication: "",
          pharmaceutical_group: "",
          dose: "",
          contra_indication: "",
          pharmacological_group: "",
          other: "",
          precaution: "",
          side_effect: "",
          active_ingredient: "",
          pregnancy: "",
        },
        pricing_and_unit: [],
        alternatives: [],
        alternative_barcode: [],
      },
        this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.form.group.parent = this.form.group.parent_data
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
      let data = JSON.stringify(this.form);
      formData.append("data", data);

      // this.$emit('setSelected', this.form.final_account);
      this.$store
        .dispatch("erp_v2/items/product/create", formData)
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
      let formData = new FormData();
      let objectDeleted = {
          'delete_pricing_and_unit': this.deletedPricingAndUnit,
          'delete_alternative_material': this.deletedAlternative,
          'delete_alternative_barcode': this.deletedAlternativeBarcode,
        }
      if (this.form.uploaded_files) {
        this.form.uploaded_files.forEach((element) => {
          formData.append("uploaded_files", element.file);
        });
      }else{
        formData.append("uploaded_files", []);
      }

      let id = this.form.id;
      this.form['deleted_row']=objectDeleted
      delete this.form.saved_files;
      delete this.form.uploaded_files;
      let data = JSON.stringify({...this.form});
      formData.append("data", data);
      this.$store
        .dispatch("erp_v2/items/product/update", {id: id, data: formData })
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
        .dispatch("erp_v2/items/product/changeStatus", {
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
        ///////////////// Move /////////////////////////////
    closeMoveItem() {
      this.displayFormMove = false;
      this.$emit("closeMoveItems");
    },
    openMoveDialog() {
      if (this.selected.length) {
        this.displayFormMove = true;
        this.$emit("closeMoveItems");
      } else {
        this.$emit("closeMoveItems");
        this.infoToast(
          this.$t("toast.select.summery"),
          this.$t("toast.select.details")
        );
      }
    },
    moveItem(data) {
      this.$store.dispatch("erp_v2/items/product/move", {group: data, selected: this.selected,})
        .then((res) => {
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
    ////////////////////////////
    list() {
      this.$store
        .dispatch("erp_v2/items/product/list", this.filterParams)
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
      if (this.filterParams.account_name_en) {
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
<style lang="scss">
.table>thead {
  background: $success-gradient;
}

.table>thead>tr>td,
.table>thead>tr>th {
  color: white;
}
</style>