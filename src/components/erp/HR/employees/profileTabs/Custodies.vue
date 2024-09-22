<template>
  <div class="Job">
      <div class="d-flex">
          <i class="fa fa-id-card-o fs-4 fc-green" aria-hidden="true"></i>
          <h4 class="mx-2 mt-1">{{ $t("tabs.Custodies") }}</h4>
      </div>
      <hr>
    <div class="row mt-3 ">
      <div class="col-12">

        <i class="fa fa-id-card-o fs-4 fc-green" aria-hidden="true"></i>
          <h4 class=" d-inline-block mx-2 mt-1">{{ $t("sections.custodies") }}
          </h4>
      </div>
      <div class="col-12" v-if="totalRecords > 0">
        <div class="table-responsive">
          <table class="table table-sm text-center">
            <thead>
              <tr>
                
                <th scope="col">#</th>
                <th scope="col">{{ $t("table_headers.title") }}</th>
                <th scope="col">{{ $t("table_headers.assets") }}</th>
                <th scope="col">{{ $t("table_headers.invoice") }}</th>
                <th scope="col">{{ $t("table_headers.bonds") }}</th>
                <th scope="col">{{ $t("table_headers.receipt_date") }}</th>
                <th scope="col">{{ $t("table_headers.delivery_date") }}</th>
               
              </tr>
            </thead>
            <tbody>
              <tr v-for="(custody, index) in custodies" :key="index">
               
                
                <td class="align-middle">
                  {{ calculateTableIndexing(index) }}
                </td>
                <td class="align-middle fw-bold">
                  <span>{{ custody.title }}</span>
                </td>
                <td class="align-middle fw-bold">
                  <span
                    v-for="(asset, index) in custody.type.assets"
                    :key="index"
                  >
                   
                  {{ asset.name }}
                  </span>
                </td>
                <td class="align-middle fw-bold">
                  <span
                    v-for="(invoice, index) in custody.type.invoice"
                    :key="index"
                  >
                  {{ invoice.number}}
                  </span>
                </td>

                <td class="align-middle fw-bold">
                  <span
                    v-for="(bond, index) in custody.type.bonds"
                    :key="index"
                  >
                    {{ bond.number }}
                  </span>
                </td>

                <td class="align-middle fw-bold">
                  <span>{{ custody.receipt_date }}</span>
                </td>
                <td class="align-middle fw-bold">
                  <span>{{ custody.delivery_date }}</span>
                </td>

               
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else>
        <NoResults></NoResults>
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
    </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/employees/employees.json"></i18n>
<i18n src="@/lang/erp/employees/employeeProfile.json"></i18n>



<script>
import { mapGetters, mapActions } from "vuex";
import clientsOptions from "@/mixins/erp/clients/clientsOptions";
import NoResults from "@/components/global/utilities/NoResults.vue";

// import Dropdown from "primevue/dropdown";
import whiteBackground from "@/assets/global/image-plugin-templates/White-Background.svg"
import ImageEditor from '@/components/global/image-plugin/ImageEditor.vue'
import pagination from "@/mixins/global/pagination";
import moment from "moment";
import {
  requiredError,
  minLengthError,
  maxLengthError,
  numericError,
  htmlTagsError,
  timeDateError,
  inputError
  
} from "@/validation/errors.js";
export default {
  mixins: [clientsOptions,pagination],
  components: {
    NoResults
  },
  props: {

    v: {
      type: Object,
      default() {
        return {};
      },
    },
  
  },

  data(){
    return{
      status_en: [
      { name: "Active", value: 1 },
      { name: "suspended", value: 2 },
    ],
    status_ar: [
      { name: "نشط", value: 1 },
      { name: "غير نشط", value: 2 },
    ],
      dob:"",
      genderChoices_en: [
      { name: "Male", value: "Male" },
      { name: "Female", value: "Female" },
    ],
    genderChoices_ar: [
      { name: "ذكر", value: "Male" },
      { name: "انثي", value: "Female" },
    ],
    maritalStatusChoices_en: [
      { name: "Married", value: "Married" },
      { name: "Single", value: "Single" },
    ],
    maritalStatusChoices_ar: [
      { name: "متزوج", value: "Married" },
      { name: "اعزب", value: "Single" },
    ],

    ImageControls:{
          templateImage:whiteBackground,
      },

    }
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
      this.setEmployee(value);
    },
  },
  status(){
    if(this.employee.status == 1)
    {return "Active" }
    else{
      return "Suspended"
    }
  },
  listResponse() {
        return this.employee.custodies;
      },
  custodies(){
    if(this.listResponse){
      return this.employee.custodies.results
    }else{
      return []
    }
  },
  totalRecords(){
    if(this.listResponse){

      return this.employee.custodies.count
    }else{
      return 0
    }
    },
name(){
  let word = this.employee.name
  word = word.split(" ")
  return word

},
age(){
  var date = moment();
var b = moment(this.employee.dob, 'YYYY');
var diff = date.diff(b, 'years'); // calculates patient's age in years
return diff; // this prints out the age
}
},  
methods: {

    ...mapActions("erp/hr/employees",
    ["setEmployee"]),
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
          this.employee.custodies.results = res.results
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
     this.list_custodies
    
     
    

    },
}

};
</script>
<style>
.table-borderless th {
  border: none !important;
}
.fc-green{
  color:green
}
.input-cl{
width:100% ;
padding: 3px;
border: 1px solid gray;
}

</style>
