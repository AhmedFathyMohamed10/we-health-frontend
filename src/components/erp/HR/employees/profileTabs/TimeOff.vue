<template>
    <div class="Job">
        <div class="d-flex">
            <i class="fa fa-clock-o fs-4 fc-green" aria-hidden="true"></i>
            <h4 class="mx-2 mt-1">{{ $t("tabs.TimeOff") }}</h4>
        </div>
        <hr>
      
      <div class="row my-3">
        <div class=" col-xxl-4  col-lg-6 text-center ">
          <label class=" fw-bold ">{{ $t("sections.vacation") }} </label>
        <div class="">

          <i class="fas fa-plane-departure fs-3 fc-green"></i>
         <span class=" px-3 fw-bold h3 fc-green">{{num_of_vacation}}</span>
        </div>
        <span class="d-block py-3 fc-green">{{ $t("days_used") }}</span>
        </div>
        <div class=" col-xxl-4  col-lg-6 text-center">
          <label class=" fw-bold"> {{ $t("available") }}  </label>
          <div class="">

            <i class="fas fa-plane-departure fs-3 fc-green"></i>
           <span class=" px-3 fw-bold h3 fc-green">{{employee.annual_vacations_days - num_of_vacation}}</span>
          </div>
          <span class="d-block py-3 fc-green"> {{ $t("days_available") }}</span>
        </div>
        <div class=" col-xxl-4  col-lg-6 text-center">
          <label class=" fw-bold">{{ $t("annual_vacation_days") }} </label>
          <div class="mx-4 m-auto">

            <i class="fas fa-plane-departure fs-3 fc-green"></i>
           <span class="px-3 fw-bold h3 fc-green">{{employee.annual_vacations_days}}</span>
          </div>
          <span class="d-block py-3 fc-green"> {{ $t("annual_days_scheduled") }}</span>
        </div>
       
      </div>
    
      <div class="row mt-3">
        <div class=" col-12 mt-6">
            <table class="table">
              <thead>
                <tr>
                 
                  <th scope="col ">
                    <i class="fa fa-clock-o fs-4 fc-green" aria-hidden="true"></i>
                    <span class=" ps-2 h4">Upcoming Time Off </span>
                  </th>
                </tr>
              </thead>
                <tbody>
                    <tr v-for="value,index in employee.upcomming " :key="index">
                     
                      <td scope=""> <i class="fas fa-plane-departure fs-6 fc-green"></i>  {{formateDate(value)}}</td>
                    </tr>
                    
                 
                </tbody>
              </table>
         </div>
      </div>
      
     
      </div>
  </template>
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
  },
  num_of_vacation(){
    let lenth = 0
    if(this.employee.vacations){
      lenth = this.employee.vacations.length
    }
    return lenth
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
formateDate (record){
  // scope.date = 
  // let date = new Date(record.from_date);
  // from_day = date.getDate
  var formattedDate = moment(record.from_date).format("MMM D") + " – " + moment(record.to_date).format("D");
  return formattedDate
}
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
  