<template>
    <div class="Job">
        <div class="d-flex">
            <i class="fa fa-file fs-4 fc-green" aria-hidden="true"></i>
            <h4 class="mx-2 mt-1">{{ $t("tabs.Documents") }}</h4>
        </div>
        <hr>
        <UploadFile v-model="employee.uploaded_files" :saved_files="employee.saved_files" @removePath="removePath" :mediaUrl="mediaUrl"></UploadFile>
      </div>
  </template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/employees/employees.json"></i18n>
<i18n src="@/lang/erp/employees/employeeProfile.json"></i18n>


<script>
import { mapGetters, mapActions } from "vuex";
import clientsOptions from "@/mixins/erp/clients/clientsOptions";
import UploadFile from "../UploadFile.vue";
import { urls } from '@/backend/urls';
// import Dropdown from "primevue/dropdown";
import whiteBackground from "@/assets/global/image-plugin-templates/White-Background.svg"
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
    UploadFile
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
       
        mediaUrl:urls.business.mediaUrl,
 
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
 
},  

  methods: {

      ...mapActions("erp/hr/employees",
      ["setEmployee"]),

      removePath(index){
        this.employee['deleted_files'] = []
      this.employee.deleted_files.push(this.employee.saved_files[index])
      this.employee.saved_files.splice(index,1)
    }
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
  