<template>
  <div class="invoice-statement">
    <div class="company-wrapper my-2">
      <Base class="my-2">
        <div class="row">
          <div class="col-12 test">
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
            <h4>{{ $t("invoiceStatement.header") }}</h4>
          </div>
        </div>
        <div class="row">        
          <div class="col-md-6 col-lg-4 col-xxl-3">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.start_date.label") }}</label>
              <Calendar
                  v-model="start_date"
                  :showIcon="true" 
                  icon="pi pi-calendar"  
                  :placeholder="$t('form.start_date.placeholder')"
              />
            </div>            
          </div>
          <div class="col-md-6 col-lg-4 col-xxl-3">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.end_date.label") }}</label>
              <Calendar
                  v-model="end_date"
                  :showIcon="true" 
                  icon="pi pi-calendar"  
                  :placeholder="$t('form.end_date.placeholder')"
              />
            </div>            
          </div>      
          <div class="col-md-6 col-lg-4 col-xxl-3 d-flex align-items-end">
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
      </Base>
    </div>
    <div class="table-wrapper">
      <Base>
        <SkeletonTable 
        v-if="listLoading" 
          :columns="[
            $t('table.thead.count'),
            $t('form.invoice_type.label'),
            $t('form.definition.label'),
            $t('form.provider_account.label'),
            $t('form.store.label'),
            $t('form.number.label'),
            $t('form.date.label'),
            $t('form.discount_value.label'),
            $t('form.discount_method.label'),
            $t('form.total.label'),
            $t('form.paid.label')
          ]" 
          :rows="5"
        />
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
                    <th scope="col">{{ $t("form.invoice_type.label") }}</th>
                    <th scope="col">{{ $t("form.definition.label") }}</th>
                    <th scope="col">{{ $t("form.provider_account.label") }}</th>
                    <th scope="col">{{ $t("form.store.label") }}</th>
                    <th scope="col">{{ $t("form.number.label") }}</th>
                    <th scope="col">{{ $t("form.date.label") }}</th>
                    <th scope="col">{{$t('form.discount_value.label')}}</th>
                    <th scope="col">{{$t('form.discount_method.label')}}</th>
                    <th scope="col">{{ $t("form.total.label") }}</th>
                    <th scope="col">{{ $t("form.paid.label") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item,index) in statements"
                    :key="item.id"
                  > 
                    <td class="align-middle custom-width">
                      {{ calculateTableIndexing(index) }}
                    </td>
                    <td class="align-middle">
                      {{ item.invoice_type_name }}
                    </td>
                    <td class="align-middle">
                      {{ item.definition_name }}
                    </td>
                    <td class="align-middle">
                      {{ item.provider_account_name}}
                    </td>
                    <td class="align-middle">
                      {{ item.store_name }}
                    </td>
                    <td class="align-middle">
                        {{ item.number }}
                    </td>                 
                    <td class="align-middle">
                        {{ $moment(item.date).format('YYYY-MM-DD, h:mm:ss a') }}
                    </td>
                    <td class="align-middle">
                        {{ item.discount_value }} 
                    </td>
                    <td class="align-middle">
                        {{ item.discount_method_name }}
                    </td>
                    <td class="align-middle">
                        {{ item.total }}
                    </td>
                    <td class="align-middle">
                        {{ item.paid }}
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
        <NoResults v-if="!totalRecords && !listLoading"></NoResults>
      </Base>
    </div>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/accounting/balances/invoiceStatement.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";
import invoiceTypes from "@/mixins/erp/accounting/invoices/invoice-types/invoiceTypes"
import SkeletonTable from "@/components/global/UI/skeleton/SkeletonTable.vue"
export default {
  name:'InvoiceStatement',
  mixins: [pagination, toast,invoiceTypes],
  props: {
    queryParam: { 
      type:Number,
    },
    invoices_type: { 
      type:Number,
    },
  },  
  components: {
    Base,
    NoResults,
    SkeletonTable,
  },
  data() {
    return {
      start_date:this.$moment(new Date()).subtract(3, 'month').format("YYYY-MM-DD"),
      end_date:this.$moment(new Date()).format("YYYY-MM-DD"),
      searchQuery: {
        statement_type: this.queryParam,
        invoices_type: this.invoices_type,
        start_date:this.start_date,
        end_date:this.end_date,
      },
      isPaginating: false,
      isSearching: false,
    };
  },
  computed: {
    ...mapGetters("erp/accounting/balances/invoiceStatement", {
      listResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",
    }),
    statements() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    invoicesTotal(){
      let total = 0
      if(this.statements.length > 0){
        this.statements.forEach(element => {
          total += element.total;
        });
      }
      return total;
    },
    invoicesTotalPaid(){
      let total = 0
      if(this.statements.length > 0){
        this.statements.forEach(element => {
          total += element.paid;
        });
      }
      return total;
    },    
    formattedStartDate() {
      let start_date = "";
      if(this.$moment(this.start_date).isValid()){
        start_date = this.$moment(this.start_date).format('YYYY-MM-DD');
      }
      return start_date;
    },
    formattedEndDate() {
      let end_date = "";
      if(this.$moment(this.end_date).isValid()){
        end_date = this.$moment(this.end_date).format('YYYY-MM-DD');
      }
      return end_date;
    },
    lastAccountingPeriod() {
      let period = null;
      if (this.$store.getters['erp/Accounts/AccountingPeriod/getListResponse']) {
        const {periodFrom:start_date,periodTo:end_date} = this.$store.getters['erp/Accounts/AccountingPeriod/getListResponse']['results'][0];
        period = {start_date,end_date}
      }
      return period;
    },    
    filterParams() {
      return {
        pageNumber: this.pagination.pageNumber + 1,
        rows: this.pagination.rows,
        statement_type: this.searchQuery.statement_type,
        invoices_type: this.searchQuery.invoices_type,
        end_date: this.searchQuery.end_date ? this.searchQuery.end_date : "",
        start_date: this.searchQuery.start_date ? this.searchQuery.start_date : "",
      };
    },
  },
  watch:{
    formattedStartDate(newVal, oldVal){
      this.searchQuery.start_date = newVal;
    },    
    formattedEndDate(newVal, oldVal){
      this.searchQuery.end_date = newVal;
    },   
    queryParam(){
      this.list()
    }, 
    invoices_type(){
      this.list()
    }, 
  },
  async created() {
    // init last accounting period
    if (!this.lastAccountingPeriod) {
      let params = { pageNumber:1, rows:1 ,name:"" };
      await this.$store.dispatch("erp/Accounts/AccountingPeriod/list",params)
      .then(res=>{
        this.start_date = this.lastAccountingPeriod.start_date;
        this.end_date = this.lastAccountingPeriod.end_date;
      })
    }
  },
  methods: {
    list() {
      this.$store.dispatch("erp/accounting/balances/invoiceStatement/list", this.filterParams).then(() => {
        if (!this.isPaginating) {
          this.pagination.offset = 0;
          this.pagination.pageNumber = 0;
        }
        this.isSearching = false;
        this.isPaginating = false;
      })
      .catch(err=>{
        console.log(err);
        const summery = err.statusText; 
        const details =  err.data.errors;
        this.errorToast(summery,details)
      })
    },
    filter() {
      this.isSearching = true;
      this.filterParams.pageNumber = 1,
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
