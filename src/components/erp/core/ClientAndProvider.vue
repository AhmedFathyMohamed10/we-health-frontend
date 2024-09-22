<template>
  <div class="definition">
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
            <h4 v-if="this.queryParam == 1">{{ $t("client.header") }}</h4>
            <h4 v-if="this.queryParam == 2">
              {{ $t("client.headerProvider") }}
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-xl-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.name.label")
              }}</label>
              <input
                type="text"
                v-model="searchQuery.name"
                :placeholder="$t('form.name.placeholder')"
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
                    $t("btns.newClient")
                  }}</span>
                  <span v-if="this.queryParam == 2" class="mx-2">{{
                    $t("btns.newProvider")
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
                    $t("btns.allClients")
                  }}</span>
                  <span v-if="this.queryParam == 2" class="mx-2">{{
                    $t("btns.allProviders")
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
            <Column field="name" header="Name">
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
                    <th scope="col">{{ $t("form.name.label") }}</th>
                    <th scope="col">{{ $t("form.mobile.label") }}</th>
                    <!-- <th scope="col">{{ $t("form.group.label") }}</th> -->
                    <!-- <th scope="col">{{ $t("form.address.label") }}</th> -->
                    <!-- <th scope="col">{{ $t("form.job_title.label") }}</th>/ -->
                    <th scope="col">{{ $t("form.category.label") }}</th>
                    <th scope="col">{{ $t("form.status.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in clientsAndProviders" :key="index">
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
                          >{{ item.name }}</a
                        >
                      </span>
                    </td>
                    <td class="align-middle">
                      {{ item.mobile }}
                    </td>
                    <!-- <td class="align-middle">
                      {{ item.group_name }}
                    </td>  -->
                    <!-- <td class="align-middle">
                      {{ item.address }}
                    </td> 

                  
                    <td class="align-middle">
                      {{ item.job_title }}
                    </td>  -->
                    <td class="align-middle">
                      {{ findLocaleOption(typeAction, item.category) }}
                    </td>
                    <!--  <td class="align-middle">
                      {{ item.category }}
                    </td>  -->
                    <!--<td class="align-middle">
                        {{ definition.customer_account_data.name?definition.customer_account_data.name:value }}
                    </td>
                    <td class="align-middle">
                        {{ definition.material_account_data.name?definition.material_account_data.name:value }}
                    </td>
                    <td class="align-middle">
                        {{ definition.discount_account_data.name?definition.discount_account_data.name:value }}
                    </td>

                    <td class="align-middle">
                      {{ findOptionNameById(pricingPolicies,id=definition.policy) }}
                    </td> -->
                    <td class="align-middle">
                      <span v-if="item.status == 1">
                        <Tag
                          severity="success"
                          :value="$t('status.active')"
                          rounded
                        ></Tag>
                      </span>
                      <span v-if="item.status == 2">
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

    <EditDialog
      :display="displayStatusDialog"
      @close="closeStatusDialog"
      @cancel="closeStatusDialog"
      @save="changeStatus"
      :isLoading="statusLoading"
      :header="formHeaderDetails"
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
                    {{ $t(`client.key.${key}`) }}
                  </td>
                  <td class="custom-text-wrap">
                    <span v-if="!value" class="text-muted">------</span>
                    <span
                      v-if="
                        key != 'updated_at' &&
                        key != 'category' &&
                        key != 'status'
                      "
                      >{{ value }}</span
                    >

                    <span v-if="key == 'category'">
                      {{ findLocaleOption(typeAction, value) }}
                    </span>
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
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<!-- <i18n src="@/lang/erp/providers/Provider.json"></i18n> -->
<i18n src="@/lang/erp/clients/client.json"></i18n>

<script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp/clientAndProvider/Form.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";

// import {findOptionNameById} from "@/helpers/utilities";
export default {
  name: "ClientAndProvider",
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
    EditDialog,
    DeleteDialog,
    DetailsDialog,
  },
  data() {
    return {
      displayForm: false,
      form: {
        name: "",
        mobile: "",
        address: "",
        group: "",
        discount_ratio: null,
        maximum_debt: null,
        job_title: "",
        pricing_pattern: "",
        status: 1,
        category: this.queryParam,
      },
      isUpdating: false,
      ////////////////////
      displayDeleteDialog: false,
      codeToDelete: null,
      selected: [],
      selectAll: false,
      displayStatusDialog: false,
      statusAction: null,
      displayDetailsDialog: false,
      recordDetails: null,
      searchQuery: {
        name: "",
      },
      isPaginating: false,
      isSearching: false,
      searching: false,
      typeAction: [
        { en: "Client", ar: "عميل", id: 1 },
        { en: "Provider", ar: "مورد", id: 2 },
        { en: "Client and provider", ar: "عميل و مورد", id: 3 },
      ],
    };
  },
  computed: {
    formHeader() {
      if (this.isUpdating) {
        if (this.queryParam === 1) {
          return this.$t("dialog.header.editClient");
        } else {
          return this.$t("dialog.header.editProvider");
        }
      } else {
        if (this.queryParam === 1) {
          return this.$t("btns.newClient");
        } else {
          return this.$t("btns.newProvider");
        }
      }
    },
    formHeaderDetails() {
      if (this.queryParam === 1) {
        return this.$t("dialog.header.detailsClient");
      } else {
        return this.$t("dialog.header.detailsProvider");
      }
    },
    ...mapGetters("erp/clientsAndProviders/clientAndprovider", {
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
    clientsAndProviders() {
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
        name: this.isSearching ? this.searchQuery.name : "",
        category: this.queryParam,
      };
    },
  },
  watch: {
    queryParam() {
      this.list();
      // this.$store.dispatch("erp/accounting/invoices/invoiceTypes/list",{category:this.category});
    },
  },

  created() {
    if (!this.clientsAndProviders.length > 0) {
      this.list();
    }
  },
  methods: {
    findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value);
      if (item) return item[this.locale];
      else return value;
    },
    // findOptionNameById,
    resetSearchQuery() {
      const searchQuery = {
        name: "",
        category: this.category,
      };
      return searchQuery;
    },
    ...mapActions("erp/clientsAndProviders/clientAndprovider", [
      "setUpsertResponse",
      "setUpsertError",
    ]),
    /////////////////////////////////////////
    selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.clientsAndProviders) {
          this.selected.push(this.clientsAndProviders[i].code);
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
      const {
        id,
        code,
        name,
        mobile,
        address,
        group = item.group_id,
        discount_ratio,
        maximum_debt,
        job_title,
        pricing_pattern,
        status,
        category,
        updated_at,
      } = item;
      this.form = {
        id,
        code,
        name,
        mobile,
        address,
        group,
        discount_ratio,
        maximum_debt,
        job_title,
        pricing_pattern,
        status,
        category,
        updated_at,
      };
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
      this.form = {
        name: "",
        mobile: "",
        address: "",
        group: "",
        discount_ratio: null,
        maximum_debt: null,
        job_title: "",
        pricing_pattern: "",
        status: 1,
        category: this.queryParam,
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.form["nameValue"] = this.form.name;
      if (typeof this.form.name === "object") {
        this.form.name = this.form.name.fullname;
      } else if (typeof this.form.name === "string") {
        this.form.name = this.form.name;
      }
      this.$store
        .dispatch("erp/clientsAndProviders/clientAndprovider/create", this.form)
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
      this.form["nameValue"] = this.form.name;
      if (typeof this.form.name === "object") {
        this.form.name = this.form.name.fullname;
      } else if (typeof this.form.name === "string") {
        this.form.name = this.form.name;
      }
      this.$store
        .dispatch("erp/clientsAndProviders/clientAndprovider/update", this.form)
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
        .dispatch("erp/clientsAndProviders/clientAndprovider/changeStatus", {
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
      const {
        name,
        mobile,
        address,
        // group=item.group_id,
        discount_ratio,
        maximum_debt,
        job_title,
        pricing_pattern,
        status,
        category,
        updated_at,
      } = record;
      this.recordDetails = {
        name,
        mobile,
        address,
        group: record.group_name,
        discount_ratio,
        maximum_debt,
        job_title,
        pricing_pattern,
        status,
        category,
        updated_at,
      };
      this.displayDetailsDialog = true;
    },
    list() {
      this.$store
        .dispatch(
          "erp/clientsAndProviders/clientAndprovider/list",
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
