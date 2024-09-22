<template>
    <div class="Personal">
        <div class="d-flex">
            <i class="fa fa-address-card fs-4 fc-green" aria-hidden="true"></i>
            <h4 class="mx-2 mt-1">{{ $t("tabs.Personal") }}</h4>
        </div>
        <hr>
      <div class="d-flex ">
        <i class="fa fa-user-circle fs-4 fc-green" aria-hidden="true"></i>
        <h4 class="mx-2 mt-1 ">{{ $t("sections.basic_information") }}</h4>
      </div>
      <div class="row my-3">
        <div class="col-xxl-3 col-lg-4 col-md-6 col-12">
         <label>{{
          $t("form.employee.label")
        }}#</label>
         <span class="d-block px-3 fw-bold">{{employee.id}}</span>
        </div>
        <div class="col-xxl-3 col-lg-4 col-md-6 col-12">
          <label class="d-block">{{
            $t("form.status.label")
          }}</label>
          <input v-model="status" class="fw-bold d-block input-cl"/>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-xxl-3 col-lg-4 col-md-6 col-4">
         <label>{{
          $t("form.name.label")
        }}</label>
         <span class="d-block px-3 fw-bold " v-if="name">{{name[0]}}</span>
        </div>
        <div class="col-xxl-3 col-lg-4 col-md-6 col-12 ">
          <label class="text-nowrap">{{
            $t("form.preferred_name.label")
          }}</label>
          <span class="d-block px-3 fw-bold" v-if="name">{{name[1]}}</span>
         </div>
       
      </div>
      <div class="my-3">
         <label class="d-block"> {{$t("form.dob.label")}}</label>
        <div class="row">
           <div class="col-xxl-3 col-lg-4 col-md-6 col-7">
            <span class="px-3 fw-bold">{{employee.dob}}</span>
            
          </div>
           <div class="col-xxl-3 col-lg-4 col-md-6 col-5">
             <label class=" ">{{$t("form.age.label")}}:</label>
             <span class="px-1 fw-bold">{{age}}</span>
           </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-3 col-lg-4 col-md-6 col-12">
         <label>{{$t("form.gender.label")}}</label>
         <input v-model="employee.gender" class="fw-bold d-block input-cl "/>
        </div>
        <div class="col-xxl-3 col-lg-4 col-md-6 col-12">
          <label class="">{{$t("form.marital_status.label")}}</label>
          <input v-model="employee.marital_status" class=" fw-bold d-block input-cl"/>
         </div>
       
      </div>
      <hr>
      <div class="row">
        <div class="col-12">
        <i class="fa fa-home fs-4 fc-green" aria-hidden="true"></i>
        <h4 class=" d-inline-block mx-2 mt-1">{{ $t("sections.address") }}</h4>
        </div>
        <div class="col-xxl-3 col-lg-4 col-md-6 col-12" v-if="employee.address">
          <span class="px-3 fw-bold">{{employee.address}}</span>
        </div>
        <div class=" col-xxl-3 col-lg-4 col-md-6 col-12 " v-else> <span class="px-3 fw-bold">----</span></div>
      </div>
      <hr>
      <div class="row">
        <div class="col-12">
          <i class="fa fa-mobile fs-4 fc-green" aria-hidden="true"></i>
          <h4 class=" d-inline-block mx-2 mt-1">{{ $t("sections.contact") }}</h4>
        </div>
        <div class=" col-12">
          <h6 class=" d-inline-block  mt-1">{{$t("form.mobile.label")}}</h6>
          <div>
            <i data-v-2a5c4c3c="" aria-hidden="true" class="fa fa-building-o fs-6 mx-2"></i>
            <span class="px-3 fw-bold">{{employee.mobile}}</span>
          </div>
        </div>
        <div class="my-4 col-12 " v-if="employee.emergency_numbers ">
          <h6 class=" d-inline-block  mt-1">{{$t("form.emergency_numbers.label")}}</h6>
          <div v-for="(num,index) in employee.emergency_numbers " :key="index">
            
            <i data-v-2a5c4c3c="" aria-hidden="true" class="fa fa-phone fs-6 mx-2"></i>
            <span v-if="num" class="px-3 fw-bold">{{num}}</span>
            <span v-else class="px-3 fw-bold">---</span>
          </div>
        </div>
        <div class="my-4 col-12">
          <h6 class=" d-inline-block  mt-1">{{$t("form.email.label")}}</h6>
          <div>
            <i data-v-2a5c4c3c="" aria-hidden="true" class="fa fa-envelope fs-6 mx-2"></i>
            <span class="px-3 fw-bold">{{employee.email}}</span>
          </div>
        </div>
        <div class="my-4 col-12">
          <h6 class=" d-inline-block  mt-1">{{$t("form.education.label")}}</h6>
          <div>
            <i data-v-2a5c4c3c="" aria-hidden="true" class="fa fa-university fs-6 mx-2"></i>
            <span class="px-3 fw-bold" v-if="employee.education">{{employee.education}}</span>
            <span class="px-3 fw-bold" v-else>---</span>
          </div>
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
    if (typeof word === 'string') {
    word = word.split(" ")
  }
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
.fc-green{
    color:green
}
.input-cl{
  width:100% ;
  padding: 3px;
  border: 1px solid gray;
}

</style>
  