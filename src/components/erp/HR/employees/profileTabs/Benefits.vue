<template>
    <div class="Job">
        <div class="d-flex">
            
            <i class="fa fa-briefcase fs-4 fc-green" aria-hidden="true"></i>
            <h4 class="mx-2 mt-1">{{ $t("tabs.Benefits") }}</h4>
        </div>
        <hr>
        <!-- <div v-for="(value,key) in employee" :key="key"> -->
          <CustomTabs 
         v-model="selectedTab"
         :tabs="tabs"
         >

        </CustomTabs>
         <Table v-if="selectedTab == 'overtime'" :data="this.employee.overtime"  :header="'overtime'" @onPage="onPage"></Table>
        <Table v-if="selectedTab == 'imprests'" :data="this.employee.imprests"  :header="'imprests'" @onPage="onPage"></Table>
        <Table v-if="selectedTab == 'liabilities'" :data="this.employee.liabilities"  :header="'liabilities'" @onPage="onPage"></Table> -->
        <Table v-if="selectedTab == 'bonus'" :data="this.employee.bonus"  :header="'bonus'" @onPage="onPage"></Table>
         <Table v-if="selectedTab == 'promotions'" :data="this.employee.promotions"  :header="'promotions'" @onPage="onPage"></Table>
        <Table v-if="selectedTab == 'insurances'" :data="this.employee.insurances"  :header="'insurances'" @onPage="onPage"></Table> 
        
        </div>
      
      
      
      <!-- </div> -->
  </template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/employees/employees.json"></i18n>
<i18n src="@/lang/erp/employees/employeeProfile.json"></i18n>


<script>
import { mapGetters, mapActions } from "vuex";
import clientsOptions from "@/mixins/erp/clients/clientsOptions";
import Table from "@/components/erp/HR/employees/profileTabs/Table.vue"
import pagination from "@/mixins/global/pagination";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
// import Dropdown from "primevue/dropdown";
import whiteBackground from "@/assets/global/image-plugin-templates/White-Background.svg"
import ImageEditor from '@/components/global/image-plugin/ImageEditor.vue'
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
    // mixins: [pagination, toast],
    components: {
        Table,
        CustomTabs,
    },
    props: {
  
      v: {
        type: Object,
        default() {
          return {};
        },
      },
      // error: {
      //   type: Object,
      // },
 
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
      selectedTab: "overtime",
     tabs:[
      
        {
          id:1,
          en: "overtime",
          ar: "الوقت الأَضافي",
          key: "overtime",
        },
        {
          id:2,
          en: "imprests",
          ar: "السلف",
          key: "imprests",
        },
        {
          id:3,
          en: "liabilities",
          ar: "الخصومات",
          key: "liabilities",
        },
        {
          id:4,
          en: "bonus",
          ar: "المكافأت",
          key: "bonus",
        },
        {
          id:5,
          en: "promotions",
          ar: "الترقيات",
          key: "promotions",
        },
        {
          id:6,
          en: "insurances",
          ar: "التأمينات",
          key: "insurances",
        },
       
      
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
    tabsKeys(){
  // const keys = Object.keys(object)
  let tabsKeys = []
  const keys = this.tabs.forEach(element => {
    tabsKeys.push(element.key)
  });
  console.log(tabsKeys)
  return tabsKeys
},
    
    status(){
      if(this.employee.status == 1)
      {return "Active" }
      else{
        return "Suspended"
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
      list_bouns() {
        let params = { 
          pageNumber:this.pagination.pageNumber+1,
          rows:this.pagination.rows,
          employee: "",
          due_date :"",
          pk :this.employee.id,
         
        }
        
         this.$store.dispatch("erp/hr/bonus/list", params)
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
       list(header,params) {
        let fun = 'list'
        if(header === 'imprests'){
          fun = 'get_employee_imprests'
        }
         this.$store.dispatch(`erp/hr/${header}/${fun}`, params)
         .then((res) => { 
          console.log(res)
          // let arr = []
          this.employee[header].results= res.results
          if (!this.isPaginating){
            this.pagination.offset = 0;
            this.pagination.pageNumber = 0;
          }
            this.isSearching = false;
            this.isPaginating= false;
         });
       },
      //  list_imprests(header,params) {
        
      //   console.log(params)
      //   this.$store.dispatch(`erp/hr/imprests/get_employee_imprests`, params)
      //   .then((res) => { 
      //    console.log(res.results)
      //    // let arr = []
      //    console.log(this.employee[header])
      //    this.employee[header].results= res.results
      //    if (!this.isPaginating){
      //      this.pagination.offset = 0;
      //      this.pagination.pageNumber = 0;
      //    }
      //      this.isSearching = false;
      //      this.isPaginating= false;
      //   });
      // },
      onPage(header,event){
        this.pagination.pageNumber = event.page;
        let params = { 
        pageNumber:this.pagination.pageNumber+1,
        rows:this.pagination.rows,
        pk :this.employee.id,
        due_date :"",
        employee : ""
      }
       if(header == 'insurances'){

         params = {
          pageNumber:this.pagination.pageNumber+1,
          rows:this.pagination.rows,
          pk :this.employee.id,
          policy :"",
          employee : ""
        }
       }
       if(header == 'promotions'){
        params={

          pageNumber:this.pagination.pageNumber+1,
           rows:this.pagination.rows,
           employee: "",
           start_date :"",
           pk :this.employee.id
        }
       }
      //  if(header !="imprests" || header !="promotions"||header !="insurances"){

      //    this.list(header,params)
      //  }
       if(header == 'imprests'){
        console.log(header)
        params={

          pageNumber:this.pagination.pageNumber+1,
          rows:this.pagination.rows,
          pk :this.employee.id,
          }
          // this.list_imprests(header,params)
       }
       this.list(header,params)
        }
       
      }

//     selectDate(event){
    
//     this.form.mainInfo.dob = this.$moment(event).format('YYYY-MM-DD')
   
   
//   }


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
  