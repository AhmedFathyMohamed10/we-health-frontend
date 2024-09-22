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
            <h4>{{ $t("definition.header") }}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-xl-4">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.name.label") }}</label>
              <input
                type="text"
                v-model="searchQuery.name"
                :placeholder="$t('form.name.placeholder')"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="form-group">
              <label for="" class="form-label">
                {{$t("form.invoice_type.label")}}
              </label>
              <Dropdown
                v-model="searchQuery.invoice_type"
                :options="invoiceTypes"
                optionLabel="name"
                optionValue="id"
                :placeholder="$t('form.invoice_type.placeholder')"
              />
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="form-group">
              <label for="" class="form-label">
                {{$t("form.group.label")}}
              </label>
              <Dropdown
                v-model="searchQuery.group"
                :options="groups"
                optionLabel="name"
                optionValue="id"
                dataKey="id"
                :placeholder="$t('form.group.placeholder')"
              />
            </div>
          </div>
          <div class="col-md-6 col-xl-4">                
            <div class="form-group">
                <label class="form-label">{{$t('form.customer_account.label')}}</label>
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-search"></i>
                    </span>
                    <AutoComplete
                        v-model="searchQuery.customer_account"
                        :suggestions="accountParams.suggestions"
                        field="name"  
                        :placeholder="$t('form.customer_account.placeholder')" 
                        @complete="search($event,accountParams)"
                        :forceSelection="true"
                    />
                </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">                
            <div class="form-group">
                <label class="form-label">{{$t('form.cash_account.label')}}</label>
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-search"></i>
                    </span>
                    <AutoComplete
                        v-model="searchQuery.cash_account"
                        :suggestions="accountParams.suggestions"
                        field="name"  
                        :placeholder="$t('form.cash_account.placeholder')" 
                        @complete="search($event,accountParams)"
                        :forceSelection="true"
                    />
                </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">                
            <div class="form-group">
                <label class="form-label">{{$t('form.material_account.label')}}</label>
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-search"></i>
                    </span>
                    <AutoComplete
                        v-model="searchQuery.material_account"
                        :suggestions="accountParams.suggestions"
                        field="name"  
                        :placeholder="$t('form.material_account.placeholder')" 
                        @complete="search($event,accountParams)"
                        :forceSelection="true"
                    />
                </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">                
            <div class="form-group">
                <label class="form-label">{{$t('form.discount_account.label')}}</label>
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-search"></i>
                    </span>
                    <AutoComplete
                        v-model="searchQuery.discount_account"
                        :suggestions="accountParams.suggestions"
                        field="name"  
                        :placeholder="$t('form.discount_account.placeholder')" 
                        @complete="search($event,accountParams)"
                        :forceSelection="true"
                    />
                </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="form-group">
              <label for="" class="form-label">
                {{$t("form.policy.label")}}
              </label>
              <Dropdown
                v-model="searchQuery.policy"
                :options="pricingPolicies"
                optionLabel="name"
                optionValue="id"
                :placeholder="$t('form.policy.placeholder')"
              />
            </div>
          </div>
          <div class="col-md-6 col-xl-4">
            <div class="form-group">
              <label for="" class="form-label">
                {{$t("form.method.label")}}
              </label>
              <Dropdown
                v-model="searchQuery.method"
                :options="paymentMethods"
                optionLabel="name"
                optionValue="id"
                :placeholder="$t('form.method.placeholder')"
              />
            </div>
          </div>
          <div class="col-md-2 d-flex align-items-end">
              <div class="form-group">
                <button class="btn btn-pill btn-success-gradient" @click.prevent="filter">
                  <span>
                      <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i>
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
                    <th scope="col">{{ $t("form.invoice_type.label") }}</th>
                    <th scope="col">{{ $t("form.group.label") }}</th>
                    <th scope="col">{{ $t("form.customer_account.label") }}</th>
                    <th scope="col">{{ $t("form.cash_account.label") }}</th>
                    <th scope="col">{{ $t("form.material_account.label") }}</th>
                    <th scope="col">{{ $t("form.discount_account.label") }}</th>
                    <th scope="col">{{ $t("form.policy.label") }}</th>
                    <th scope="col">{{ $t("form.method.label") }}</th>
                    <th scope="col">{{ $t("form.status.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(definition, index) in definitions"
                    :key="index"
                  >
                    <td class="align-middle custom-width">
                      <input
                        type="checkbox"
                        :value="definition.code"
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
                          @click="openDetailsDialog(definition)"
                          >{{ definition.name }}</a
                        >
                      </span>
                    </td>
                    <td class="align-middle">
                      {{ findOptionNameById(invoiceTypes,id=definition.invoice_type) }}
                    </td>
                    <td class="align-middle">
                      {{ findOptionNameById(groups,id=definition.group) }}
                    </td>
                    <td class="align-middle">
                        {{ definition.customer_account_data.name?definition.customer_account_data.name:value }}
                    </td>
                    <td class="align-middle">
                        {{ definition.cash_account_data.name?definition.cash_account_data.name:value }}
                    </td>
                    <td class="align-middle">
                        {{ definition.material_account_data.name?definition.material_account_data.name:value }}
                    </td>
                    <td class="align-middle">
                        {{ definition.discount_account_data.name?definition.discount_account_data.name:value }}
                    </td>

                    <td class="align-middle">
                      {{ findOptionNameById(pricingPolicies,id=definition.policy) }}
                    </td>
                    <td class="align-middle">
                      {{ findOptionNameById(paymentMethods,id=definition.method) }}
                    </td>
                    <td class="align-middle">
                      <span v-if="definition.status == 1">
                        <Tag severity="success" :value="$t('status.active')" rounded></Tag>
                      </span>
                      <span v-if="definition.status == 2">
                        <Tag severity="warning" :value="$t('status.suspended')" rounded></Tag>
                      </span>
                    </td>
                    <td class="align-middle">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <EditButton
                          class="me-2"
                          @edit="openUpdate(definition)"
                        ></EditButton>
                        <DeleteButton
                          @delete="openDeleteDialogSingle(definition.code,4)"
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

    <DeleteDialog
      :display="displayDeleteDialog"
      @cancel="closeDeleteDialog"
      @delete="changeStatus"
      :isLoading="statusLoading"
    />

    <DetailsDialog
      :display="displayDetailsDialog"
      @hide="closeDetailsDialog"
      :header="$t('dialog.header.details')"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive details-table">
            <table class="table table-borderless text-nowrap mb-0">
              <tbody>
                <tr v-for="(value, key) in recordDetails" :key="key">
                  <td class="">
                    {{ $t(`form.${key}.label`) }}
                  </td>
                  <td class="custom-text-wrap">
                    <span v-if="!value" class="text-muted">------</span>
                    <span v-if="['name','start_code','description'].includes(key)">
                      {{ value}}
                    </span>
                    <span v-if="['customer_account','cash_account','material_account','discount_account','tax_account'].includes(key) ">
                      {{ value.name?value.name:value }}
                    </span>
                    <span v-if=" key === 'group'">
                      {{ findOptionNameById(groups,id=value) }}
                    </span>
                    <span v-if=" key === 'invoice_type'">
                      {{ findOptionNameById(invoiceTypes,id=value) }}
                    </span>
                    <span v-if=" key === 'policy'">
                      {{ findOptionNameById(pricingPolicies,id=value) }}
                    </span>
                    <span v-if=" key === 'method'">
                      {{ findOptionNameById(paymentMethods,id=value) }}
                    </span>
                    <span v-if=" key === 'updated_at'">
                      {{ $moment(value).format('YYYY-MM-DD')}}
                    </span>
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
<i18n src="@/lang/erp/accounting/invoices/definition.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp/accounting/invoices/definition/Form.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";
import groups from "@/mixins/erp/accounting/invoices/group/groups";
import pricingPolicy from "@/mixins/erp/productAndServices/PricingPolicy/pricingPolicy";
import accountSuggestions from "@/mixins/erp/accounts/accountSuggestions"

import {findOptionNameById} from "@/helpers/utilities";
export default {
  name: "Definition",
  mixins: [pagination, toast,groups,pricingPolicy,accountSuggestions],
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
        invoice_type: null,
        category:this.queryParam,
        group: null,
        customer_account:null,
        cash_account:null,
        material_account:null,
        discount_account:null,
        tax_account:null,
        policy:null,
        method:null,
        start_code: "",
        description: "",
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
        invoice_type: "",
        group: "",
        customer_account:"",
        cash_account:"",
        material_account:"",
        discount_account:"",
        policy:"",
        method:"",
      },
      isPaginating: false,
      isSearching: false,
      searching: false,
    };
  },
  computed: {
    ...mapGetters("erp/accounting/invoices/definition", {
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
    definitions() {
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
        invoice_type: this.isSearching ? this.searchQuery.invoice_type : "",
        group: this.isSearching ? this.searchQuery.group : "",
        customer_account: this.isSearching ? this.searchQuery.customer_account : "",
        cash_account: this.isSearching ? this.searchQuery.cash_account : "",
        material_account: this.isSearching ? this.searchQuery.material_account : "",
        discount_account: this.isSearching ? this.searchQuery.discount_account : "",
        policy: this.isSearching ? this.searchQuery.policy : "",
        method: this.isSearching ? this.searchQuery.method : "",
      };
    },
    invoiceTypes() {
      let list = [] 
      list = this.$store.getters["erp/accounting/invoices/invoiceTypes/invoiceTypes"]
      const destructuredList = list.map(item => {
        const {name,type_id:id} = item
        return {name,id}
      })
      return destructuredList
    },
    paymentMethods(){
      let list = this.$store.getters["erp/accounting/invoices/paymentMethods/paymentMethods"]
      return list.map(item => {
        return {name:item.name,id:item.id}
      })
    },
  },
  watch:{
    queryParam(){
      this.form.category=this.queryParam;
      this.list();
      this.$store.dispatch("erp/accounting/invoices/invoiceTypes/list",{category:this.queryParam});
    },
  },
  created() {
    this.form.category=this.queryParam;
    if (!this.definitions.length>0){
        this.list();
    }
    if(!this.paymentMethods.length > 0) {
      this.$store.dispatch("erp/accounting/invoices/paymentMethods/list")
    }
    if(!this.invoiceTypes.length > 0) {
      this.$store.dispatch("erp/accounting/invoices/invoiceTypes/list",{category:this.queryParam})
    }
    
  },
  methods: {
    findOptionNameById,
    resetSearchQuery(){
      const searchQuery = {
            name: "",
            invoice_type: "",
            category: this.queryParam,
            group: "",
            customer_account:"",
            cash_account:"",
            material_account:"",
            discount_account:"",
            policy:"",
            method:""
      }
      return searchQuery 
    },
    ...mapActions("erp/accounting/invoices/definition", [
      "setUpsertResponse",
      "setUpsertError",
    ]),
    /////////////////////////////////////////
    selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.definitions) {
          this.selected.push(this.definitions[i].code);
        }
      }
    },
    ////////// UPSERT ///////////////////
    openForm() {
      this.displayForm = true;
    },
    closeForm() {
      this.isUpdating= false,
      this.displayForm = false;
    },
    openUpdate(item) {
      const {
        id,
        name,
        invoice_type,
        category,
        group,
        customer_account_data:customer_account,
        cash_account_data:cash_account,
        material_account_data:material_account,
        discount_account_data:discount_account,
        tax_account_data:tax_account,
        policy,
        method,
        start_code,
        description
      } = item
      this.form = { 
        id,
        name,
        invoice_type,
        category,
        group,
        customer_account,
        cash_account,
        material_account,
        discount_account,
        tax_account,
        policy,
        method,
        start_code,
        description
      };
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
      this.form = {
        name: "",
        invoice_type: null,
        category:this.queryParam,
        group: null,
        customer_account:null,
        cash_account:null,
        material_account:null,
        discount_account:null,
        tax_account:null,
        policy:null,
        method:null,
        start_code: "",
        description: "",
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp/accounting/invoices/definition/create", this.form)
        .then((res) => {
          this.resetForm();
          // console.log(res)
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          console.log(err)
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
    update() {
      this.$store
        .dispatch("erp/accounting/invoices/definition/update", this.form)
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
    openStatusDialog(status) {
      if (this.selected.length) {
        this.statusAction = status;
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
      this.statusAction=null;
    },
    changeStatus() {
      this.$store
        .dispatch("erp/accounting/invoices/definition/changeStatus", {action: this.statusAction,selected: this.selected})
        .then((res) => {
          if(this.selected.length==this.pagination.rows && this.action==4) {
            this.fetchAll();
          }
          this.closeStatusDialog();
          this.closeDeleteDialog();
          this.selected = [];
          this.statusAction=null; 
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
          this.selectAll=false;
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
      this.statusAction=null;
    },
    openDeleteDialogSingle(code,action) {
      this.openDeleteDialog();
      this.selected = []
      this.selected.push(code);
      this.statusAction=action;
    },
    openDeleteDialogMultiple() {
      if (this.selected.length) {
        this.statusAction=4;
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
        invoice_type, 
        group, 
        customer_account_data:customer_account,
        cash_account_data:cash_account,
        material_account_data:material_account,
        discount_account_data:discount_account,
        tax_account_data:tax_account,
        policy,
        method,
        start_code,
        description,
        updated_at 
      } = record;
      this.recordDetails = { 
        name, 
        invoice_type, 
        group, 
        customer_account,
        cash_account,
        material_account,
        discount_account,
        tax_account,
        policy,
        method,
        start_code,
        description,
        updated_at 
       };
      this.displayDetailsDialog = true;
    },
    list() {
      this.$store.dispatch("erp/accounting/invoices/definition/list", this.filterParams).then(() => {
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
      const atLeastOneKeyHasValue  = Object.values(this.searchQuery).some((value) => value !== undefined && value !== null && value !== '');
      if (atLeastOneKeyHasValue ) {
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
.table{
  td{
    min-width: 10rem;
  }
  .custom-width{
    min-width: auto;
  }
}
.custom-text-wrap {
  max-width: 300px;
  text-wrap: wrap;
}

</style>
