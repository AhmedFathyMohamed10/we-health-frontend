<template>
  <div class="Tabel">
    <div class="row mt-3 m-1">
      <div class="col-12">
        <i aria-hidden="true" class="fa fa-pencil-square-o fs-4 fc-green"></i>
        <h4 class="d-inline-block mx-2 mt-1">{{ $t(`sections.${header}`) }}</h4>
      </div>
      <div class=" col-12 table-responsive" v-if="totalRecords > 0">
        <table class="table table-borderless">
          <tbody>
            <tr>
              <td class="align-middle">
                #
              </td>
              <td
                v-for="(value, key) in tableHeaders"
                :key="key"
                scope="col fw-bold"
                
              >
              <span class="fw-bold"> {{ $t(`table_headers.${key}`) }}</span>
              </td>
            </tr>

            <tr class="mt-4" v-for="(item,index) in this.data.results" :key="item.id">
              <td class="align-middle">
                {{ calculateTableIndexing(index) }}
              </td>
              <td v-for="(value, key) in item" :key="key">
                
                {{ value }}
              
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <NoResults></NoResults>
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
    <hr />
  </div>
</template>
<i18n src="@/lang/erp/employees/employeeProfile.json"></i18n>

<script>
import NoResults from "@/components/global/utilities/NoResults.vue";
import pagination from "@/mixins/global/pagination";
import { mapGetters, mapActions } from "vuex";
export default {
  mixins: [pagination],
  props: {
    header: {
      required: true,
      type: String,
      default() {
        return "Table Header";
      },
    },
    data: {
      required: true,
      default() {
        return [];
      },
    },
  },
components:{
    NoResults
},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("erp/hr/employees", {
  getEmployee: "getEmployee",
}),
employee: {
      get() {
        return this.getEmployee;
      },
      set(value) {
        // this.setForm(value);
      },
    },

    totalRecords(){
      return this.data.count
    },
    tableHeaders() {
      let value = {};
      if (this.data.results.length != 0) {
        value = this.data.results[0];
      }
      // else if(this.employee.bonus.results !=0){
      //   value = this.employee.bonus.results[0];
      // }
      return value;
    },
  },

  methods:{
    
       list_custodies() {
        let params = { 
          pageNumber: this.pagination.pageNumber + 1,
        rows: this.pagination.rows,
        employee_name: "",
        pk :this.employee.id
         
        }
        
         this.$store.dispatch("erp/hr/custodies/list", params)
         .then((res) => { 
          console.log(res.results)
          // let arr = []
          this.employee.bonus.results = res.results
          if (!this.isPaginating){
            this.pagination.offset = 0;
            this.pagination.pageNumber = 0;
          }
            this.isSearching = false;
            this.isPaginating= false;
         });
       },
    onPage(event) {
      
      this.isPaginating = true;
      this.pagination.pageNumber = event.page;
      this.$emit('onPage',this.header,event)
    
     
    

    },
  }
};
</script>
<style>
.table-borderless th {
  border: none !important;
}
.fc-green {
  color: green;
}
</style>
