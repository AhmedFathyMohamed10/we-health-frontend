<template>
  <div class="inventory-management">
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
            <h4>{{ $t("inventory.header") }}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-xxl-3">
            <div class="form-group">
              <label class="form-label"> {{ $t("form.product.label") }} </label>
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
                  v-model="searchQuery.product"
                  :placeholder="$t('btns.search')"
                  @keyup.enter="search"
                />
              </span>
            </div>
          </div>
          <div class="col-md-4 col-xxl-3">
            <div class="form-group">
              <label class="form-label"> {{ $t("form.unit.label") }} </label>
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
                <Dropdown
                  v-model="searchQuery.unit"
                  :options="productUnits"
                  optionLabel="name"
                  optionValue="name"
                  dataKey="id"
                  :placeholder="$t('unit.unit.placeholder')"
                />
                <!-- <InputText
                  type="text"
                  v-model="searchQuery.unit"
                  :placeholder="$t('btns.search')"
                  @keyup.enter="search"
                /> -->
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
        <div class="row mt-5" v-if="inventoryManagements.length > 0">
          <div class="col-md-12">
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
                      <th scope="col">{{ $t("form.product.label") }}</th>
                      <th scope="col">{{ $t("form.unit.label") }}</th>

                      <th scope="col">{{ $t("table.thead.controls") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in inventoryManagements"
                      :key="index"
                    >
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
                          {{ item.name_en }}
                        </span>
                      </td>
                      <td class="align-middle">
                        <span v-if="item.unit.length > 0">
                          {{
                            findOptionNameById(productUnits, item.unit[0].unit)
                          }}
                        </span>
                        <span v-else> </span>
                      </td>

                      <td class="align-middle">
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <EditButton
                            class="me-2"
                            @edit="openUpdate(item)"
                          ></EditButton>
                          <AddButton
                            class="me-0 d-flex"
                            @add="addRow(item)"
                          ></AddButton>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Base>
    </div>
    <div class="table-wrapper">
      <Base>
        <SkeletonTable
          v-if="listLoading"
          :columns="[
            $t('table.thead.count'),
            $t('form.product.label'),
            $t('form.unit.label'),
          ]"
          :rows="5"
        />
        <div class="row" v-if="arr.length > 0">
          <div class="col-12">
            <div class="d-flex justify-content-between flex-wrap">
              <div class="result">
                <span>{{ $t("messages.resultsfound") }} </span>
                <Badge severity="success" :value="arr.length"></Badge>
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
                    <th scope="col">{{ $t("form.product.label") }}</th>
                    <th scope="col">{{ $t("form.unit.label") }}</th>

                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, index) in inventoryManagements"
                    :key="index"
                  >
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
                          >{{ item.name_en }}</a
                        >
                      </span>
                    </td>
                    <td class="align-middle">
                      <span v-if="item.unit.length > 0">
                        {{
                          findOptionNameById(productUnits, item.unit[0].unit)
                        }}
                      </span>
                      <span v-else> </span>
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
                          class="me-0 d-flex"
                          @add="addRow(item)"
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
      :productUnits="productUnits"
      :isUpdating="isUpdating"
      :error="upsertError"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')"
    >
    </Form>
  </div>
</template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/erp/productAndService/inventoryManagement.json"></i18n>
  <script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import SkeletonTable from "@/components/global/UI/skeleton/SkeletonTable.vue";
import Form from "@/components/erp/productAndServices/inventoryManagement/Form.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";
import AddButton from "@/components/global/utilities/AddButton.vue";
import productUnit from "@/mixins/erp/productAndServices/productUnit/productUnit";
import { findOptionNameById } from "@/helpers/utilities";

export default {
  mixins: [pagination, toast, productUnit],
  components: {
    Base,
    NoResults,
    EditButton,
    DeleteButton,
    SkeletonTable,
    AddButton,
    Form,
  },
  data() {
    return {
      displayForm: false,
      form: {
        name_en: null,
        name_ar: null,
        unit: {
          value: null,
          unit: null,
        },
      },
      isUpdating: false,
      ////////////////////
      displayDeleteDialog: false,
      codeToDelete: null,
      selected: [],
      actionStatus: [],
      selectAll: false,
      displayStatusDialog: false,
      displayDetailsDialog: false,
      recordDetails: null,
      searchQuery: {
        product: "",
        unit: "",
      },
      arr: [],
      isPaginating: false,
      isSearching: false,
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    inventoryManagements() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters("erp/ProductAndService/inventoryManagement", {
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
        product: this.isSearching ? this.searchQuery.product : "",
        unit: this.isSearching ? this.searchQuery.unit : "",
      };
    },
  },
  mounted() {
    if (!this.inventoryManagements.length > 0) {
      this.list();
    }
  },
  methods: {
    ...mapActions("erp/ProductAndService/inventoryManagement", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setStatusError",
      "setListResponse",
    ]),
    findOptionNameById,
    /////////////////////////////////////////

    selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.bonds) {
          this.selected.push(this.bonds[i].code);
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
      const { id, name_en, name_ar, code, unit, updated_at } = item;
      this.form = {
        id,
        name_en,
        name_ar,
        code,
        unit,
        updated_at,
      };
      console.log(this.form);
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
      this.form = {};
      this.upsertError = null;
      this.closeForm();
      this.upsertResponse = null;
    },
    update() {
      this.$store
        .dispatch("erp/ProductAndService/inventoryManagement/update", this.form)
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
      if (this.isUpdating) this.update();
    },
    /////////// DELETE /////////////
    openDeleteDialog() {
      this.displayDeleteDialog = true;
    },
    closeDeleteDialog() {
      this.actionStatus = [];
      this.displayDeleteDialog = false;
    },
    openDeleteDialogSingle(codes, action) {
      this.openDeleteDialog();
      this.selected = [];
      this.selected.push(codes);
      this.actionStatus.push(action);
    },
    openDeleteDialogMultiple(action) {
      if (this.selected.length) {
        this.actionStatus.push(action);
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
        .dispatch("erp/ProductAndService/inventoryManagement", {
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
    ///////////////// DETAILS /////////////////////////////
    closeDetailsDialog() {
      this.recordDetails = null;
      this.displayDetailsDialog = false;
    },
    openDetailsDialog(record) {
      const { updated_at } = record;
      this.recordDetails = {
        updated_at,
      };
      this.displayDetailsDialog = true;
    },
    list() {
      this.$store
        .dispatch(
          "erp/ProductAndService/inventoryManagement/list",
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
      console.log("sdgfsdgfsdjf");
      this.isSearching = true;
      if (this.filterParams.product || this.filterParams.unit) {
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
      this.searchQuery = { product: "", unit: "" };
      this.list();
    },
    onPage(event) {
      this.isPaginating = true;
      this.pagination.pageNumber = event.page;
      this.list();
    },

    addRow(data) {
      this.arr.push(data);
      this.searchQuery = { product: "", unit: "" };
      // this.setListResponse([]);
    },
  },
};
</script>
  <style></style>
  