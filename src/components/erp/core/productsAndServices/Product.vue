<template>
  <div class="product service">
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
            <h4>{{ $t("product.header") }}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-xxl-3">
            <div class="form-group">
              <label class="form-label">
                {{ $t("mainData.name_en.label") }}
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
                  v-model="searchQuery.name_en"
                  :placeholder="$t('btns.search')"
                  @keyup.enter="search"
                />
              </span>
            </div>
          </div>
          <div class="col-md-4 col-xxl-3">
            <div class="form-group">
              <label class="form-label">
                {{ $t("mainData.name_ar.label") }}
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
                  v-model="searchQuery.name_ar"
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
            <Column field="name_ar" header="Name_ar">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="name_en" header="Name_en">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="codeProduct" header="CodeProduct">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="subcategory" header="subcategory">
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
                    <th scope="col">
                      {{ $t("product.key.mainData.name_ar") }}
                    </th>
                    <th scope="col">
                      {{ $t("product.key.mainData.name_en") }}
                    </th>
                    <th scope="col">
                      {{ $t("product.key.mainData.codeProduct") }}
                    </th>
                    <th scope="col">
                      {{ $t("product.key.mainData.subCategory") }}
                    </th>
                    <th scope="col">
                      {{ $t("product.key.general.provider") }}
                    </th>
                    <th scope="col">{{ $t("product.key.mainData.status") }}</th>

                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(product, index) in productAndServices"
                    :key="index"
                  >
                    <td class="align-middle">
                      <input
                        type="checkbox"
                        :value="product.code"
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
                          @click="openDetailsDialog(product)"
                          >{{ product.name_ar }}</a
                        >
                      </span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ product.name_en }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ product.codeProduct }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ product.subCategory_name }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ product.general.provider.name }}</span>
                    </td>
                    <td class="align-middle">
                      <span v-if="product.status == 1">
                        <Tag
                          severity="success"
                          :value="$t('status.active')"
                          rounded
                        ></Tag>
                      </span>
                      <span v-if="product.status == 2">
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
                          @edit="openUpdate(product)"
                        ></EditButton>
                        <DeleteButton
                          @delete="openDeleteDialogSingle(product.code, 4)"
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
      :isUpdating="isUpdating"
      :productUnits="productUnits"
      :pricingPolicies="pricingPolicyOptions"
      :subCategoryOptions="subCategoryOptions"
      :productClassificationOptions="productClassificationOptions"
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
    <DetailsProduct
      :display="displayDetailsDialog"
      @hide="closeDetailsDialog"
      :recordDetails="recordDetails"
      :productUnitOptions="productUnits"
      :header="$t('dialog.header.details')"
    >
    </DetailsProduct>

    <DeleteDialog
      :display="displayDeleteDialog"
      @cancel="closeDeleteDialog"
      @delete="changeStatus"
      :isLoading="deleteLoading"
    />
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/productAndService/product.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";

import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import { mapGetters, mapActions } from "vuex";
import { cloneDeep } from "lodash";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";

import Form from "@/components/erp/productAndServices/product/Form.vue";
import DetailsProduct from "@/components/erp/productAndServices/product/details/DetailsProduct.vue";
import productUnit from "@/mixins/erp/productAndServices/productUnit/productUnit";
import pricingPolicyOptions from "@/mixins/erp/productAndServices/PricingPolicy/pricingPolicy";
import subCategoryOptions from "@/mixins/erp/productAndServices/categories/subCategory/subCategory";
import productClassificationOptions from "@/mixins/erp/productAndServices/productClassification/productClassification";
import productSuggestion from "@/mixins/erp/productAndServices/product/suggestions/productSuggestions";

export default {
  mixins: [
    pagination,
    toast,
    productSuggestion,
    productUnit,
    pricingPolicyOptions,
    subCategoryOptions,
    productClassificationOptions,
  ],
  components: {
    Base,
    NoResults,
    EditButton,
    DeleteButton,
    Form,
    DetailsProduct,
    DeleteDialog,
    EditDialog,
  },
  data() {
    return {
      displayForm: false,
      isUpdating: false,
      displayStatusDialog: false,
      displayDeleteDialog: false,
      ////////////////////
      selected: [],
      selectAll: false,
      searchQuery: {
        name_ar: "",
        name_en: "",
      },
      isPaginating: false,
      isSearching: false,
      searching: false,
      statusAction: null,
      displayDetailsDialog: false,
      recordDetails: null,
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    productAndServices() {
      if (this.listResponse) return this.listResponse.results;
      else return {};
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters("erp/ProductAndService/productAndService/product", {
      getForm: "getForm",
      getDeletedUnit: "getDeletedUnit",
      getDeletedMaterialPicture: "getDeletedMaterialPicture",
      getDeletedAlternatevMaterial: "getDeletedAlternatevMaterial",
      getDeletedAlternatevBarcode: "getDeletedAlternatevBarcode",

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
    indexOfAlternatevMaterial: {
      get() {
        return this.getDeletedAlternatevMaterial;
      },
      set(value) {
        this.setDeletedAlternatevMaterial(value);
      },
    },
    indexOfAlternatevBarcode: {
      get() {
        return this.getDeletedAlternatevBarcode;
      },
      set(value) {
        this.setDeletedAlternatevBarcode(value);
      },
    },
    indexOfMaterialPicture: {
      get() {
        return this.getDeletedMaterialPicture;
      },
      set(value) {
        this.setDeletedMaterialPicture(value);
      },
    },
    indexOfUnit: {
      get() {
        return this.getDeletedUnit;
      },
      set(value) {
        this.setDeletedUnit(value);
      },
    },
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
        name_ar: this.isSearching ? this.searchQuery.name_ar : "",
        name_en: this.isSearching ? this.searchQuery.name_en : "",
      };
    },
  },
  mounted() {
    this.list();
  },
  methods: {
    ...mapActions("erp/ProductAndService/productAndService/product", [
      "setDeletedUnit",
      "setDeletedMaterialPicture",
      "setDeletedAlternatevMaterial",
      "setDeletedAlternatevBarcode",
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setForm",
      "setStatusResponse",
      "setStatusError",
    ]),
    /////////////////////////////////////////
    selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.productAndServices) {
          this.selected.push(this.productAndServices[i].code);
        }
      }
    },
    ////////// UPSERT ///////////////////
    openForm() {
      this.displayForm = true;
    },
    closeForm() {
      this.displayForm = false;
      this.indexOfUnit = [];
      this.indexOfAlternatevMaterial = [];
      this.indexOfAlternatevBarcode = [];
      this.indexOfMaterialPicture = [];
    },
    openUpdate(item) {
      let newItem = cloneDeep(item);
      this.form = { ...newItem };
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
      this.closeForm();
      (this.form = {
        name_en: "",
        name_ar: "",
        codeProduct: "",
        productClassification: null,
        subcategory: "",
        status: 1,
        type_of_order_unit: null,
        general: {
          provider: "",
          mainCompany: "",
          materialType: "",
          shortcutKey: "",
          checkExpiryDate: 2,
          negativeDrawPrevention: 2,
          stopSelling: 2,
        },
        materialPicture: [],
        alternativeMaterial: [],
        unit: [],
        medical: {
          indications: "",
          sideEffects: "",
          chemicalComposition: "",
        },
        alternativeBarcode: [],
      }),
        (this.upsertResponse = null);
      this.upsertError = null;
      this.isUpdating = false;
    },
    create() {
      this.$store
        .dispatch(
          "erp/ProductAndService/productAndService/product/create",
          this.form
        )
        .then((res) => {
          this.resetForm();
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
      this.$store
        .dispatch(
          "erp/ProductAndService/productAndService/product/update",
          this.form
        )
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
        .dispatch(
          "erp/ProductAndService/productAndService/product/changeStatus",
          {
            action: this.statusAction,
            selected: this.selected,
          }
        )
        .then((res) => {
          if (
            this.selected.length == this.pagination.rows &&
            this.statusAction == 4
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

    // deleteRecords() {
    //   this.statusAction = 4;
    //   this.$store
    //     .dispatch(
    //       "erp/ProductAndService/productAndService/product/changeStatus",
    //       { action: this.statusAction, selected: this.selected }
    //     )
    //     .then((res) => {
    //       this.closeDeleteDialog();
    //       this.selected = [];
    //       const summery = res.statusText;
    //       const details = res.data.message;
    //       this.successToast(summery, details);
    //     })
    //     .catch((err) => {
    //       const summery = err.statusText;
    //       const details = err.data.message;
    //       this.errorToast(summery, details);
    //     });
    // },
    ///////////////// DETAILS /////////////////////////////
    closeDetailsDialog() {
      this.recordDetails = null;
      this.displayDetailsDialog = false;
    },
    openDetailsDialog(record) {
      let newRecord = cloneDeep(record);
      const {
        name_en,
        name_ar,
        subCategory,
        codeProduct,
        updated_at,
        status,
        materialPicture,
        general,
        alternativeMaterial,
        unit,
        medical,
        alternativeBarcode,
      } = newRecord;
      this.recordDetails = {
        name_en,
        name_ar,
        subCategory: record.subCategory_name,
        codeProduct,
        updated_at,
        status,
        materialPicture,
        general,
        alternativeMaterial,
        unit,
        medical,
        alternativeBarcode,
      };

      this.displayDetailsDialog = true;
    },
    ///////////////////////////////////////////
    list() {
      this.$store
        .dispatch(
          "erp/ProductAndService/productAndService/product/list",
          this.filterParams
        )
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
      if (this.filterParams.name_ar || this.filterParams.name_en) {
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
      this.searchQuery = { name_ar: "", name_en: "" };
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
