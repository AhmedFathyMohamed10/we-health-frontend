<template>
  <div class="Group-assets">
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
            <h4>{{ $t("withdrawalAndDeposit.header") }}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 col-xxl-3">
            <div class="form-group">
              <label class="form-label"> {{ $t("form.cabinet.label") }} </label>
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
                  v-model="searchQuery.cabinet"
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
          <DataTable :value="[{}, {}, {}, {}, {}, {}]">
            <Column field="id" header="#">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="cabinet" header="Cabinet">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="bond" header="Bond">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>    
            <Column field="operation" header="Operation">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="value" header="Value">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>

            <Column field="created_at" header="Created at">
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
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">{{ $t("form.cabinet.label") }}</th>
                    <th scope="col">{{ $t("form.bond.label") }}</th>

                    <th scope="col">
                      {{ $t("form.operation.label") }}
                    </th>
                    <th scope="col">{{ $t("form.value.label") }}</th>
                    <th scope="col">{{ $t("withdrawalAndDeposit.key.created_at") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(withdrawalAndDeposit, index) in withdrawalAndDeposits" :key="index">
                    <td class="align-middle">
                      {{ calculateTableIndexing(index) }}
                    </td>
                    <td class="align-middle">
                      <span>
                        <a
                          class="fw-bold"
                          href="javascript:void(0)"
                          @click="openDetailsDialog(withdrawalAndDeposit)"
                          >{{ withdrawalAndDeposit.cabinet_name }}</a
                        >
                      </span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ withdrawalAndDeposit.bond_number }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ findLocaleOption(operationOptions, withdrawalAndDeposit.operation) }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ withdrawalAndDeposit.value }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ $moment(withdrawalAndDeposit.created_at).format("MMMM Do YYYY, h:mm:ss a") }}</span>
                    </td>
                    <td class="align-middle">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
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
      :operationOptions="operationOptions"
      @close="resetForm"
      @cancel="resetForm"
      @save="upsert"
      :error="upsertError"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')"
    >
    </Form>
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
                    {{ $t(`withdrawalAndDeposit.key.${key}`) }}
                  </td>
                  <td class="">
                    <span v-if="!value" class="text-muted">------</span>
                    <span v-if="key != 'created_at'&& key != 'operation'">{{ value }}</span>
                    <span v-if="key == 'created_at'">{{
                      $moment(value).format("MMMM Do YYYY, h:mm:ss a")
                    }}</span>
                    <span v-if="key == 'operation'">{{
                      findLocaleOption(operationOptions, value)
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
  <i18n src="@/lang/erp/cabinets/WithdrawalAndDeposit.json"></i18n>
  <script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import Form from "@/components/erp/cabinets/withdrawalAndDeposit/Form.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";
export default {
  mixins: [pagination, toast],
  components: {
    Base,
    NoResults,
    DetailsDialog,
    Form,
  },
  data() {
    return {
      displayForm: false,
      form: {
        operation: null,
        value: null,
        cabinet: null,
        bond: null,
      },
      isUpdating: false,
      operationOptions: [
        { en: "Withdrawal", ar: "سحب", id: 1 },
        { en: "Deposit", ar: "ايداع", id: 2 },
      ],
      ////////////////////
      displayDetailsDialog: false,
      recordDetails: null,
      searchQuery: {
        cabinet: "",
      },
      isPaginating: false,
      isSearching: false,
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    withdrawalAndDeposits() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },

    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters("erp/Cabinets/WithdrawalAndDeposit", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",

      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",

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

    filterParams() {
      return {
        pageNumber: this.pagination.pageNumber + 1,
        rows: this.pagination.rows,
        cabinet: this.isSearching ? this.searchQuery.cabinet : "",
      };
    },
  },
  mounted() {
    if (!this.withdrawalAndDeposits.length > 0) {
      this.list();
    }
  },
  methods: {
    ...mapActions("erp/Cabinets/WithdrawalAndDeposit", [
      "setUpsertResponse",
      "setUpsertError"
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
        for (let i in this.withdrawalAndDeposits) {
          this.selected.push(this.withdrawalAndDeposits[i].code);
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
    resetForm() {
      this.form = {
        operation: null,
        value: null,
        cabinet: null,
        bond: null,
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp/Cabinets/WithdrawalAndDeposit/create", this.form)
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
   
    upsert() {
        this.create();
          },
    ///////////////// DETAILS /////////////////////////////
    closeDetailsDialog() {
      this.recordDetails = null;
      this.displayDetailsDialog = false;
    },
    openDetailsDialog(record) {
      const { bond_number, cabinet_name, operation, value, created_at } = record;
      this.recordDetails = {
        bond:record.bond_number,
        cabinet:record.cabinet_name, 
        operation, 
        value, 
        created_at
      };
      this.displayDetailsDialog = true;
    },
    list() {
      this.$store.dispatch("erp/Cabinets/WithdrawalAndDeposit/list", this.filterParams).then(() => {
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
      if (this.filterParams.cabinet) {
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
      this.searchQuery = { cabinet: "" };
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
  