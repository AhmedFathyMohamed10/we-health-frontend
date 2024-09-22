<template>
  <div class="invoice">
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
            <h4>{{ $t("invoice.header") }}</h4>
          </div>
        </div>
        <!-- <div class="row">
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
        </div> -->
        
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
        <div class="row" v-if="totalRecords && !listLoading">
          <div class="col-12">
            <div class="d-flex justify-content-between flex-wrap mb-5">
              <div class="result">
                <span>{{ $t("messages.resultsfound") }} </span>
                <Badge severity="success" :value="totalRecords"></Badge>
              </div>
              <div class="result">
                <span>{{ $t("messages.invoicesTotal") }} </span>
                <Badge severity="success" :value="invoicesTotal"></Badge>
              </div>
              <div class="result">
                <span>{{ $t("messages.invoicesTotalPaid") }} </span>
                <Badge severity="success" :value="invoicesTotalPaid"></Badge>
              </div>
              <div class="result">
                <span>{{ $t("messages.difference") }} </span>
                <Badge severity="success" :value="Math.abs(invoicesTotalPaid-invoicesTotal)"></Badge>
                <span>
                  {{
                  (invoicesTotalPaid-invoicesTotal) >= 0 ?
                  ((invoicesTotalPaid-invoicesTotal) >0? $t('messages.forThem'):'') :
                  $t('messages.forUs') 
                  }}
                </span>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">{{ $t("form.definition.label") }}</th>
                    <th scope="col">{{ $t("form.provider_account.label") }}</th>
                    <th scope="col">{{ $t("form.store.label") }}</th>
                    <th scope="col">{{ $t("form.number.label") }}</th>
                    <th scope="col">{{ $t("form.date.label") }}</th>
                    <th scope="col">{{$t('form.discount_value.label')}}</th>
                    <th scope="col">{{$t('form.discount_method.label')}}</th>
                    <th scope="col">{{ $t("form.total.label") }}</th>
                    <th scope="col">{{ $t("form.paid.label") }}</th>
                    <th scope="col">{{ $t("form.status.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item,index) in invoices"
                    :key="item.invoice_data.id"
                  > 
                    <td class="align-middle custom-width">
                      {{ calculateTableIndexing(index) }}
                    </td>
                    <td class="align-middle">
                      {{ findOptionNameById(definitions,id=item.invoice_data.definition) }}
                    </td>
                    <td class="align-middle">
                      {{ item.invoice_data.provider_account.name }}
                    </td>
                    <td class="align-middle">
                      {{ findOptionNameById(stores,id=item.invoice_data.store) }}
                    </td>
                    <!-- <td class="align-middle">
                        {{ item.invoice_data.number }}
                    </td> -->
                    <td class="align-middle">
                      <span>
                        <a
                          class="fw-bold"
                          href="javascript:void(0)"
                          @click="openDetailsDialog(item.invoice_data)"
                          >{{ item.invoice_data.number }}</a
                        >
                      </span>
                    </td>                    
                    <td class="align-middle">
                        {{ $moment(item.invoice_data.date).format('YYYY-MM-DD, h:mm:ss a') }}
                    </td>
                    <td class="align-middle">
                        {{ item.invoice_data.discount_value }} 
                    </td>
                    <td class="align-middle">
                        {{ findOptionNameById(discountMethods,id=item.invoice_data.discount_method) }}
                    </td>
                    <td class="align-middle">
                        {{ item.invoice_data.total }}
                    </td>
                    <td class="align-middle">
                        {{ item.invoice_data.paid }}
                    </td>

                    <td class="align-middle">
                      <span v-if="item.invoice_data.status == 1">
                        <Tag severity="success" :value="$t('status.active')" rounded></Tag>
                      </span>
                      <span v-if="item.invoice_data.status == 2">
                        <Tag severity="warning" :value="$t('status.suspended')" rounded></Tag>
                      </span>
                      <span v-if="item.invoice_data.status == 3">
                        <Tag severity="info" :value="$t('Under Review')" rounded></Tag>
                      </span>
                    </td>
                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <button v-if="item.invoice_data.status===3" 
                          class="btn btn-icon rounded-circle btn-success-gradient me-2"
                          title="Approve" 
                          @click="openStatusDialog(item.invoice_data.id)">
                          <i class="pi pi-check"></i>
                        </button>
                        <EditButton 
                          v-if="item.invoice_data.status===3" 
                          class="me-2" 
                          @edit="openUpdate(item.invoice_data)"
                        ></EditButton>
                        <DeleteButton 
                          @delete="openDelete(item.invoice_data.id,item.invoice_data.status===3?null:4)"
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
      @save="approve"
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
      @delete="deleteInvoice"
      :isLoading="statusLoading"
    />
    <DetailsDialog
      :display="displayDetailsDialog"
      @hide="closeDetailsDialog"
      :header="$t('dialog.header.details')"
    >
      <div class="table-responsive details-table" v-if="recordDetails">
        <table class="table table-borderless text-nowrap mb-0">
          <tbody>
            <tr v-for="(value, key) in recordDetails" :key="key">
              <th class="" v-if=" key != 'products'">
                {{ $t(`form.${key}.label`) }}
              </th>
              <td class="custom-text-wrap">
                <span v-if="!value && value!=0" class="text-muted">------</span>
                <span v-if="key=='provider_account'">
                  {{ value.name?value.name:value }}
                </span>
                <span v-if=" key === 'date'">
                  {{ $moment(value).format('YYYY-MM-DD / hh:mm:ss A') }}
                </span> 
                <span v-if=" key === 'updated_at'">
                  {{ $moment(value).format('YYYY-MM-DD')}}
                </span> 
                <span v-if=" key === 'store'">
                  {{ findOptionNameById(stores,id=value) }}
                </span>
                <span v-if=" key === 'definition'">
                  {{ findOptionNameById(definitions,id=value) }}
                </span>
                <span v-if=" key === 'discount_method'">
                  {{ findOptionNameById(discountMethods,id=value) }}
                </span>
                <span v-if="!['date','provider_account','updated_at','store','definition','discount_method','products'].includes(key)">
                  {{ value }}
                </span>
              </td>
            </tr>
            <tr>
              <th>{{$t('form.products.label')}}</th>
              <td class="custom-text-wrap">
                <div class="table-responsive">
                    <table class="table table-sm text-center">
                        <thead>
                            <tr>
                                <th scope="col">{{$t('table.thead.count')}}</th>
                                <th scope="col">{{$t('form.product.label')}}</th>
                                <th scope="col">{{$t('form.unit.label')}}</th>
                                <th scope="col">{{$t('form.unit_price.label')}}</th>
                                <th scope="col">{{$t('form.quantity.label')}}</th>
                                <th scope="col">{{$t('form.expiration_date.label')}}</th>
                                <th scope="col">{{$t('form.discount_value.label')}}</th>
                                <th scope="col">{{$t('form.discount_method.label')}}</th>
                                <th scope="col">{{$t('form.total_price.label')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(val, index) in recordDetails.products" :key="index">
                                <td class="align-middle custom-width">{{parseInt(index)+1}}</td>
                                <td class="align-middle">
                                  {{val.product[`name_${locale}`]}}
                                </td>
                                <td class="align-middle">
                                  <span v-if="val.product.unit_data">
                                    {{ findOptionNameById(val.product.unit_data,id=val.unit) }}
                                  </span>
                                </td>
                                <td class="align-middle">
                                  {{val.unit_price}}
                                </td>
                                <td class="align-middle">
                                  {{val.quantity}}
                                </td>
                                <td class="align-middle">
                                  {{val.expiration_date}}
                                </td>
                                <td class="align-middle">
                                    {{ val.discount_value }} 
                                </td>
                                <td class="align-middle">
                                    {{ findOptionNameById(discountMethods,id=val.discount_method) }}
                                </td>
                                <td class="align-middle">
                                  {{val.total_price}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>                   
              </td>                  
            </tr>
          </tbody>
        </table>
      </div>
    </DetailsDialog>    
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/accounting/invoices/product.json"></i18n>
<i18n src="@/lang/erp/accounting/invoices/invoice.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp/accounting/invoices/invoice/Form.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";
import {findOptionNameById} from "@/helpers/utilities";
import pricingPolicy from "@/mixins/erp/productAndServices/PricingPolicy/pricingPolicy";
import clientsOptions from "@/mixins/erp/clients/clientsOptions"
import definition from "@/mixins/erp/accounting/invoices/definition/definition"
import store from "@/mixins/erp/productAndServices/store/store"
import discountMethods from "@/mixins/erp/accounting/invoices/invoice/discountMethods"
export default {
  name: "Invoice",
  mixins:[pagination, toast,pricingPolicy,clientsOptions,definition,store,discountMethods],
  props: {
    queryParam: { 
      type:Number,
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
      isUpdating: false,
      ////////////////////
      invoiceId:null,
      displayDeleteDialog: false,
      codeToDelete: null,
      selected: [],
      displayStatusDialog: false,
      statusAction: null,
      displayDetailsDialog: false,
      recordDetails: null,
      searchQuery: {
        invoice_type: "",
      },
      isPaginating: false,
      isSearching: false,
      searching: false,
    };
  },
  computed: {
    ...mapGetters("erp/accounting/invoices/invoice", {
      getForm: "getForm",

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
    form:{
      get(){
        return this.getForm;
      },
      set(value){
        return this.setForm(value);
      },
    },
    listResponse() {
      return this.getListResponse;
    },
    invoices() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    invoicesTotal(){
      let total = 0
      if(this.invoices.length > 0){
        this.invoices.forEach(element => {
          total += element.invoice_data.total;
        });
      }
      return total;
    },
    invoicesTotalPaid(){
      let total = 0
      if(this.invoices.length > 0){
        this.invoices.forEach(element => {
          total += element.invoice_data.paid;
        });
      }
      return total;
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
        invoice_type: this.queryParam,
      };
    },
  },
  watch:{ 
    queryParam(){
      this.form.invoice_type=this.queryParam;
    },
  },
  created() {
    this.form.invoice_type=this.queryParam;
    if (!this.invoices.length>0){
        this.list();
    }
  },
  methods: {
    findOptionNameById,
    resetSearchQuery(){
      const searchQuery = {
        invoice_type: "",
      }
      return searchQuery 
    },
    ...mapActions("erp/accounting/invoices/invoice", [
      "setForm",

      "setUpsertResponse",
      "setUpsertError",
    ]),
    /////////////////////////////////////////
    ////////// UPSERT ///////////////////
    openForm() {
      this.displayForm = true;
    },
    closeForm() {
      this.isUpdating= false,
      this.displayForm = false;
    },
    openUpdate(item) {
      item['deleted_products']=[];
      console.log(item);
      this.form = {...item};
      this.isUpdating = true;
      console.log(this.form);
      this.openForm();
    },
    resetForm() {
      this.form = {
        invoice_type:this.queryParam,
        definition:null,
        store:null,
        number:null,
        date:this.$moment(new Date()).format('YYYY-MM-DDTHH:mm:ssZ'),
        provider_account:null,
        discount_method:1,
        discount_value:0,
        total:null,
        paid:null,
        returned_from:null,
        products:[],
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp/accounting/invoices/invoice/create", this.form)
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
      if(!this.form.deleted_products.length>0){
        delete(this.form.deleted_products);
      }
      this.$store
        .dispatch("erp/accounting/invoices/invoice/update", this.form)
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
    openStatusDialog(id) {
      this.invoiceId = id;
      this.displayStatusDialog = true;
    },
    closeStatusDialog() {
      this.displayStatusDialog = false;
      this.statusAction=null;
      this.invoiceId=null;
    },
    /////////// DELETE /////////////
    openDelete(id,action){
      this.invoiceId = id;
      this.statusAction = action;
      this.openDeleteDialog();
    },
    openDeleteDialog() {
      this.displayDeleteDialog = true;
    },
    closeDeleteDialog() {
      this.invoiceId = null;
      this.statusAction = null;
      this.displayDeleteDialog = false;
    },
    deleteInvoice(){
      if(this.statusAction==4){
        this.changeStatus();
      }
      else {
        this.deleteInvoicePermanently();
      }
    },
    changeStatus() {
      this.$store
        .dispatch("erp/accounting/invoices/invoice/changeStatus", {action: this.statusAction,id: this.invoiceId})
        .then((res) => {
          this.closeStatusDialog();
          this.closeDeleteDialog();
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
    deleteInvoicePermanently(){
      this.$store.dispatch("erp/accounting/invoices/invoice/delete", this.invoiceId)
      .then((res) => {
        this.closeDeleteDialog();
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
    //////////////////Approve /////////////////////////////
    approve(){
      this.$store.dispatch("erp/accounting/invoices/invoice/approve",this.invoiceId)
        .then((res) => {
          this.closeStatusDialog();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          // console.log(err.response.data.errors);
          const summery = err.response.statusText;
          const details = err.response.data.errors;
          this.errorToast(summery, details);
        });
    },
    ///////////////// DETAILS /////////////////////////////
    closeDetailsDialog() {
      this.recordDetails = null;
      this.displayDetailsDialog = false;
    },
    openDetailsDialog(record) {
      const {
          date,
          definition,
          store,
          number,
          provider_account,
          discount_method,
          discount_value,
          total,paid,
          products,
          updated_at
        } = record
        this.recordDetails = {
          date,
          definition,
          store,
          number,
          provider_account,
          discount_method,
          discount_value,
          total,paid,
          products,
          updated_at
        }      
      this.recordDetails
      this.displayDetailsDialog = true;
    },
    list() {
      this.$store.dispatch("erp/accounting/invoices/invoice/list", this.filterParams).then(() => {
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
  max-width: 500px;
  text-wrap: wrap;
}

</style>
