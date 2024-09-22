<template>
  <div class="account-statement">
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
            <h4>{{ $t("accountStatement.header") }}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 col-lg-4 col-xxl-3">
            <div class="form-group">
              <label class="form-label">{{$t('form.account.label')}}</label>
              <div class="p-inputgroup">
                  <span class="p-inputgroup-addon">
                      <i class="pi pi-search"></i>
                  </span>
                  <AutoComplete
                      v-model="searchQuery.account"
                      :suggestions="accountParams.suggestions"
                      field="name"  
                      :placeholder="$t('form.account.placeholder')" 
                      @complete="search($event,accountParams)"
                      :forceSelection="true"
                  />
              </div>
            </div>            
          </div>
          <div class="col-md-5 col-lg-4 col-xxl-3">
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
          <div class="col-md-5 col-lg-4 col-xxl-3">
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
      </Base>
    </div>
    <div class="table-wrapper">
      <Base>
        <SkeletonTable 
          v-if="listLoading" 
          :columns="[
            $t('table.thead.count'),
            $t('form.account.label'), 
            $t('form.creditor.label'), 
            $t('form.debtor.label'), 
            $t('form.statement.label'),
            $t('form.created_at.label'),
            $t('form.balance.label'),
          ]" 
          :rows="5"
        />
        <div class="row" v-if="totalRecords && !listLoading">
          <div class="col-12">
            <div class="d-flex justify-content-between flex-wrap mb-5">
              <div class="mb-2"><h4>{{ $t("accountStatement.header") }}</h4></div>
              <div class="result mb-2" v-if="searchQuery.statement_type==2">
                <span>{{ $t("messages.creditor") }} </span>
                <Badge severity="success" :value="totalCreditor"></Badge>
              </div>
              <div class="result mb-2" v-if="searchQuery.statement_type==2">
                <span>{{ $t("messages.debtor") }} </span>
                <Badge severity="success" :value="totalDebtor"></Badge>
              </div>
              <div class="result mb-2" v-if="searchQuery.statement_type==2">
                <span>{{ $t("messages.balance") }} </span>
                <Badge severity="success" :value="totalBalance"></Badge>
                <span> {{totalCreditor == 0 ? $t('form.forUs.label') : $t('form.forThem.label') }}</span>
              </div>
              <div class="result mb-2" v-if="searchQuery.statement_type==2">
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
                    <th scope="col">{{ $t("form.account.label") }}</th>
                    <th scope="col">{{ $t("form.creditor.label") }}</th>
                    <th scope="col">{{ $t("form.debtor.label") }}</th>
                    <th scope="col" v-if="searchQuery.statement_type==2">{{ $t("form.statement.label") }}</th>
                    <th scope="col" v-if="searchQuery.statement_type==2">{{ $t("form.created_at.label") }}</th>
                    <th scope="col">{{ $t("form.balance.label") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(statement, index) in statements" :key="index">
                    <td class="align-middle">
                      {{ calculateTableIndexing(index) }}
                    </td>
                    <td class="align-middle">
                      {{ statement.account_name }}
                    </td>
                    <td class="align-middle">
                      {{ statement.creditor }}
                    </td>
                    <td class="align-middle">
                      {{ statement.debtor }}
                    </td>
                    <td class="align-middle text-wrap" style="width:16rem;" v-if="searchQuery.statement_type==2">
                      {{ statement.statement }}
                    </td>
                    <td class="align-middle" v-if="searchQuery.statement_type==2">
                      {{$moment(statement.created_at).format('YYYY-MM-DD, h:mm:ss a')}}
                    </td>
                    <td class="align-middle">
                      {{ statement.balance}} 
                      {{statement.totalCreditor == 0 ? $t('form.forUs.label') : $t('form.forThem.label') }}
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
<i18n src="@/lang/erp/accounting/balances/accountStatement.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";
import accountSuggestions from "@/mixins/erp/accounts/accountSuggestions"
import SkeletonTable from "@/components/global/UI/skeleton/SkeletonTable.vue"

export default {
  name:'AccountStatement',
  mixins: [pagination, toast,accountSuggestions],
  props: {
    queryParam: { 
      type:Number,
    },
  },  
  components: {
    Base,
    NoResults,
    SkeletonTable
  },
  data() {
    return {
      start_date:this.$moment(new Date()).subtract(3, 'month').format("YYYY-MM-DD"),
      end_date:this.$moment(new Date()).format("YYYY-MM-DD"),
      searchQuery: {
        account: "",
        statement_type: this.queryParam,
        start_date:this.start_date,
        end_date:this.end_date,
      },
      isPaginating: false,
      isSearching: false,
    };
  },
  computed: {
    ...mapGetters("erp/accounting/balances/accountStatement", {
      listResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",
    }),
    statements() {
      if(this.listResponse){
        if (this.searchQuery.statement_type==1){
          const {account_name,balance,debtor,creditor} = this.listResponse
          console.log(account_name,balance,debtor,creditor);
          return [{account_name,balance,debtor,creditor}]
        }
        else {
          return this.listResponse.results;
        }
      }
      else return [];
      // if (this.listResponse) return this.listResponse.results;
      // else return [];
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    totalCreditor() {
      if (this.listResponse) return this.listResponse.creditor;
      else return 0;
    },
    totalDebtor() {
      if (this.listResponse) return this.listResponse.debtor;
      else return 0;
    },
    totalBalance() {
      if (this.listResponse) return this.listResponse.balance;
      else return 0;
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
        account_id: this.searchQuery.account ? this.searchQuery.account['id']: "",
        statement_type: this.searchQuery.statement_type,
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
      this.$store.dispatch("erp/accounting/balances/accountStatement/list", this.filterParams).then(() => {
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
      if (this.filterParams.account_id) {
        this.filterParams.pageNumber = 1,
        this.list();
      } else {
        this.infoToast(
          this.$t("toast.search.summery"),
          this.$t("toast.search.details")
        );
        this.isSearching = false;
      }
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
