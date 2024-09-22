<template>
  <div class="fixed-assets">
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
            <h4>{{ $t("fixedAssets.header") }}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 col-xxl-3">
            <div class="form-group">
              <label class="form-label">
                {{ $t("form.nameAssets.label") }}
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
                  v-model="searchQuery.name"
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
          <DataTable :value="[{}, {}, {}]">
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

            <Column field="number" header="Number">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="group" header="Group">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="site" header="site">
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
                    @click="openDeleteDialogMultiple(4)"
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
                    <th scope="col">{{ $t("form.nameAssets.label") }}</th>
                    <th scope="col">{{ $t("form.number.label") }}</th>
                    <th scope="col">{{ $t("form.group.label") }}</th>
                    <th scope="col">{{ $t("form.site.label") }}</th>
                    <th scope="col">{{ $t("form.type_of_asset.label") }}</th>

                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(fixedAsset, index) in fixedAssets" :key="index">
                    <td class="align-middle">
                      <input
                        type="checkbox"
                        :value="fixedAsset.code"
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
                          @click="openDetailsDialog(fixedAsset)"
                          >{{ fixedAsset.name }}</a
                        >
                      </span>
                    </td>

                    <td class="align-middle fw-bold">
                      <span>{{ fixedAsset.number }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ fixedAsset.group_name }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ fixedAsset.site }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ findLocaleOption(typeAssetOptions, fixedAsset.type_of_asset) }}</span>
                    </td>

                    <td class="align-middle">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <EditButton
                          class="me-2"
                          @edit="openUpdate(fixedAsset)"
                        ></EditButton>
                        <DeleteButton
                          @delete="openDeleteDialogSingle(fixedAsset.code, 4)"
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
      :periodOptions="periodOptions"
      :typeAssetOptions="typeAssetOptions"
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
                    {{ $t(`fixedAssets.key.${key}`) }}
                  </td>
                  <td class="">
                    <span v-if="!value" class="text-muted">------</span>
                    <span
                      v-if="
                        key !== 'starting_date' &&
                        key != 'Expiry_date' &&
                        key != 'updated_at' &&
                        key != 'total_depreciation' &&
                        key != 'originalAccount' &&
                        key != 'type_of_asset' &&
                        key != 'regular_installments' &&
                        key != 'regular_rent' &&
                        key != 'age_assets'
                      "
                      >{{ value }}</span
                    >
                    <span v-if="key == 'regular_installments'">
                      <span v-if="value.value"> {{ value.value }} / </span>
                      <span v-if="value.selection">
                        {{ findLocaleOption(periodOptions, value.selection) }}
                      </span>
                    </span>
                    <span v-if="key == 'regular_rent'">
                      <span v-if="value.value"> {{ value.value }} / </span>

                      <span v-if="value.selection">
                        {{ findLocaleOption(periodOptions, value.selection) }}
                      </span>
                    </span>
                    <span v-if="key == 'age_assets' && value"
                      >{{ value }} / {{ $t(`fixedAssets.age`) }}</span
                    >
                    <span v-if="key == 'type_of_asset' && value"
                      >{{ findLocaleOption(typeAssetOptions, value) }}
                    </span>
                    <span v-if="key == 'originalAccount'"
                      >{{ value.name }}
                    </span>
                    <span
                      v-if="key == 'depreciationTable_data' && value != null"
                      >{{ value.name }}
                    </span>

                    <div v-if="key == 'total_depreciation'">
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
                    <span
                      v-if="key == 'updated_at' || key == 'starting_date'"
                      >{{
                        $moment(value).format("MMMM Do YYYY, h:mm:ss a")
                      }}</span
                    >
                    <span v-if="key == 'Expiry_date' && value != null">{{
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
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/assets/FixedAssets.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp/assets/fixedAssets/Form.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";
import moment from "moment";
export default {
  mixins: [pagination, toast],
  components: {
    Base,
    NoResults,
    EditButton,
    DeleteButton,
    DeleteDialog,
    DetailsDialog,
    Form,
  },
  data() {
    return {
      displayForm: false,
      form: {
        number: "",
        name: "",
        group: null,
        site: "",
        starting_date: null,
        description: "",
        Expiry_date: null,
        type_of_asset: null,
        age_assets: null,
        originalAccount: null,
        total_cost: null,
        total_purchase_price: null,
        paid_from_the_purchase_price: null,
        regular_installments: { value: null, selection: null },
        value_of_installment: null,
        value_rent: null,
        regular_rent: { value: null, selection: null },
        regular_periodic_maintenance: null,
        total_depreciation: 2,
      },
      periodOptions: [
        { en: "Week", ar: "اسبوع", id: 1 },
        { en: "Month", ar: "شهر", id: 2 },
        { en: "year", ar: "سنه", id: 3 },
      ],
      typeAssetOptions: [
        { en: "property", ar: "ملكية", id: 1 },
        { en: "Rent", ar: "ايجار", id: 2 },
      ],
      isUpdating: false,
      ////////////////////
      displayDeleteDialog: false,
      codeToDelete: null,
      selected: [],
      statusAction: [],
      selectAll: false,
      displayStatusDialog: false,
      displayDetailsDialog: false,
      recordDetails: null,
      searchQuery: {
        name: "",
      },
      isPaginating: false,
      isSearching: false,
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    fixedAssets() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },

    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters("erp/Assets/FixedAssets", {
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
        name: this.isSearching ? this.searchQuery.name : "",
      };
    },
  },
  mounted() {
    if (!this.fixedAssets.length > 0) {
      this.list();
    }
  },
  methods: {
    ...mapActions("erp/Assets/FixedAssets", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setStatusError",
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
        for (let i in this.fixedAssets) {
          this.selected.push(this.fixedAssets[i].code);
        }
      }
    },

    ////////// UPSERT ///////////////////
    openForm() {
      this.displayForm = true;
    },
    closeForm() {
      // this.getUpsertError = null;
      this.isUpdating = false;
      this.displayForm = false;
    },
    openUpdate(item) {
      console.log(item);
      let newItem = [];
      for (let i in item.maintenance_data) {
        newItem.push(item.maintenance_data[i].code);
      }
      if (item.Expiry_date) {
        item["Expiry_date"] = this.$moment(item.Expiry_date).format(
          "YYYY-MM-DD"
        );
      }
      if (item.starting_date) {
        item["starting_date"] = this.$moment(item.starting_date).format(
          "YYYY-MM-DD"
        );
      }
      console.log(newItem);
      const {
        id,
        code,
        name,
        number,
        group,
        site,
        starting_date,
        Expiry_date,
        type_of_asset,
        age_assets,
        originalAccount = item.originalAccount_data,
        total_cost,
        total_purchase_price,
        paid_from_the_purchase_price,
        value_of_installment,
        value_rent,
        regular_periodic_maintenance = newItem,
        total_depreciation,
        description,
        updated_at,
        regular_installments,
        regular_rent,
      } = item;
      // starting_date : this.$moment(item.starting_date).format("YYYY-MM-DD"),
      this.form = {
        id,
        code,
        name,
        number,
        group,
        site,
        starting_date,
        Expiry_date,
        type_of_asset,
        age_assets,
        originalAccount,
        total_cost,
        total_purchase_price,
        paid_from_the_purchase_price,
        value_of_installment,
        value_rent,
        regular_periodic_maintenance,
        total_depreciation,
        description,
        updated_at,
        regular_installments,
        regular_rent,
      };
      console.log(this.form);
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
      this.form = {
        number: "",
        name: "",
        group: null,
        site: "",
        starting_date: null,
        description: "",
        Expiry_date: null,
        type_of_asset: null,
        age_assets: null,
        originalAccount: null,
        total_cost: null,
        total_purchase_price: null,
        paid_from_the_purchase_price: null,
        regular_installments: { value: null, selection: null },
        value_of_installment: null,
        value_rent: null,
        regular_rent: { value: null, selection: null },
        regular_periodic_maintenance: null,
        total_depreciation: 2,
      };
      this.closeForm();
      this.upsertError = null;
      this.upsertResponse = null;
    },
    create() {
      if (this.form.starting_date) {
        this.form.starting_date = this.$moment(this.form.starting_date).format(
          "YYYY-MM-DD"
        );
      }
      if (this.form.Expiry_date) {
        this.form.Expiry_date = this.$moment(this.form.Expiry_date).format(
          "YYYY-MM-DD"
        );
      }
      this.$store
        .dispatch("erp/Assets/FixedAssets/create", this.form)
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
      console.log("update");

      if (this.form.starting_date) {
        this.form.starting_date = this.$moment(this.form.starting_date).format(
          "YYYY-MM-DD"
        );
      }
      if (this.form.Expiry_date) {
        this.form.Expiry_date = this.$moment(this.form.Expiry_date).format(
          "YYYY-MM-DD"
        );
      }

      this.$store
        .dispatch("erp/Assets/FixedAssets/update", this.form)
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
      this.statusAction = [];
      this.displayDeleteDialog = false;
    },
    openDeleteDialogSingle(code, action) {
      this.openDeleteDialog();
      this.selected = [];
      this.selected.push(code);
      this.statusAction.push(action);
    },
    openDeleteDialogMultiple(action) {
      if (this.selected.length) {
        this.openDeleteDialog();
        this.statusAction.push(action);
      } else {
        this.infoToast(
          this.$t("toast.select.summery"),
          this.$t("toast.select.details")
        );
      }
    },
    deleteRecords() {
      this.$store
        .dispatch("erp/Assets/FixedAssets/delete", {
          action: this.statusAction,
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
      console.log(record);
      const {
        name,
        number,
        group,
        site,
        originalAccount = record.originalAccount_data,
        starting_date,
        Expiry_date,
        age_assets,
        total_cost,
        type_of_asset,
        regular_installments,
        total_purchase_price,
        paid_from_the_purchase_price,
        value_of_installment,
        value_rent,
        regular_rent,
        description,
        total_depreciation,
        regular_periodic_maintenance = record.maintenance_data,
        updated_at,
      } = record;
      this.recordDetails = {
        name,
        number,
        group: record.group_name,
        site,
        originalAccount,
        starting_date,
        Expiry_date,
        total_cost,
        age_assets,
        type_of_asset,
        regular_installments,
        total_purchase_price,
        paid_from_the_purchase_price,
        value_of_installment,
        value_rent,
        regular_rent,
        description,
        total_depreciation,
        regular_periodic_maintenance,
        updated_at,
      };
      console.log(this.recordDetails);
      this.displayDetailsDialog = true;
    },
    list() {
      this.$store
        .dispatch("erp/Assets/FixedAssets/list", this.filterParams)
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
      this.searchQuery = { name: "" };
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
