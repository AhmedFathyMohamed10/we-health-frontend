<template>
    <div class="Job">
        <div class="d-flex">
            <i class="fa fa-id-card-o fs-4 fc-green" aria-hidden="true"></i>
            <h4 class="mx-2 mt-1">{{ $t("tabs.Assets") }}</h4>
        </div>
        <hr>
      <div class="row mt-3 ">
        <div class="col-12">

          <i class="fa fa-id-card-o fs-4 fc-green" aria-hidden="true"></i>
            <h4 class=" d-inline-block mx-2 mt-1">{{ $t("sections.assets") }}
            </h4>
        </div>
        <div class="col-12  mt-6 overflow-auto">
            <table class="table table-borderless ">
             
                <tbody >
                    <tr>
                        <td scope="col fw-bold">{{ $t("table_headers.asset_category") }}
                            </td>
                        <td scope="col fw-bold">{{ $t("table_headers.asset_description") }}</td>
                        <td scope="col fw-bold">{{ $t("table_headers.serial") }} #</td>
                        <td scope="col fw-bold">{{ $t("table_headers.date_assigned") }}</td>
                    </tr>
                    
                  <tr class="mt-4" v-for="value,index in employee.custodies " :key="index">
                    <td >
                      <span v-for="data,index in value.type.assets" :key="index">
                        {{data.name}} , 
                      </span>
                    
                    </td>
                    <td >
                      <span >
                        {{value.title}} 
                      </span>
                    
                    </td>
                    <td >
                      <span v-for="data,index in value.type.assets" :key="index">
                        {{data.number}} 
                      </span>
                    
                    </td>
                    <td >
                      <span v-for="data,index in value.type.assets" :key="index">
                        {{data.starting_date}} ,
                      </span>
                    
                    </td>
                    
                   
                  </tr>
                </tbody>
              </table>
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
    mixins: [clientsOptions],
    components: {
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
//   created(){
//     if(this.form.id){
    
//       this.dob=this.$moment(this.form.mainInfo.dob).format('YYYY-MM-DD');
//     }
//   },
  methods: {
//     requiredError,
//     minLengthError,
//     maxLengthError,
//     numericError,
//     htmlTagsError,
//     timeDateError, 
//     inputError,
      ...mapActions("erp/hr/employees",
      ["setEmployee"]),

//     selectDate(event){
    
//     this.form.mainInfo.dob = this.$moment(event).format('YYYY-MM-DD')
   
   
//   }
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
  