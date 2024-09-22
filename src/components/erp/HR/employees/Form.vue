<template>
  
    <div class="form">
     
      <EditDialog
        :display="displayForm"
        @close="cancelForm"
        @cancel="cancelForm"
        @save="saveForm"
        :isLoading="isLoading"
        :header="header"
        :containerStyle="{ 'min-width': '100vw' }"
      >
        <div class="row row-cols-2">
          <div class="col-md-12">
          <slot></slot>
          <div class="row" v-if="error">
            <div class="col-12">
              <div class="errors" v-if="typeof error === 'object'">
                <Message
                  severity="error"
                  v-for="(value, key) in error"
                  :key="key"
                  :closable="false"
                >
                 <span v-if="key !='errors'" >{{ $t(`form.${key}.label`) }}: </span>
                  <span v-if="typeof value === 'string'">{{ value }}</span>
                  <span v-else>{{ value[0] }}</span>
                </Message>
              </div>
            </div>
          </div>
            <CustomTabs class="text-center" v-model="selectedTab" :tabs="tabs"
          :v="$v.form"
          :serializerError="serializerError"
          >
            </CustomTabs>
            <div class="selection-content tabs-content my-2">

                <MainInfo v-show="selectedTab == 'mainInfo'"
                :v="$v.form.mainInfo ? $v.form.mainInfo : {}"/>
                <EmploymentInformation v-show="selectedTab == 'empolymentInfo'"
                :v="$v.form.empolymentInfo ? $v.form.empolymentInfo : {}"/>
                <OtherInfo v-show="selectedTab == 'otherInfo'"
                :v="$v.form.otherInfo ? $v.form.otherInfo : {}"/>

            </div>
          </div>
        </div>
      </EditDialog>
    </div>
  </template>
  <i18n src="@/lang/erp/employees/employees.json"></i18n>
  
  <script>
  import EditDialog from "@/components/global/utilities/EditDialog.vue";
  import CustomTabs from "@/components/global/custom/CustomTabs.vue";
  // import CustomTabs from "@/components/global/erp/custom/CustomTabs.vue";


  import form from "@/mixins/erp/employees/validation";
  import MainInfo from "@/components/erp/HR/employees/tabs/MainInfo";
  import EmploymentInformation from "@/components/erp/HR/employees/tabs/EmploymentInformation";
  import OtherInfo from "@/components/erp/HR/employees/tabs/OtherInfo";
  export default {
    mixins: [form],
    components: {
      EditDialog,
      CustomTabs,
      MainInfo,
      EmploymentInformation,
      OtherInfo,
    },
    props: {
      displayForm: {
        type: Boolean,
        required: true,
        default() {
          return false;
        },
      },
      isLoading: {
        type: Boolean,
        default() {
          return false;
        },
      },
      error: {
        type: Object,
      },
      header: {
        type: String,
      },
    },
  
    data() {
      return {
        selectedTab: "mainInfo",
        tabs: [
        {
          id:1,
          en: "Main Information",
          ar: "البيانات الاساسية",
          key: "mainInfo",
        },
        {
          id:2,
          en: "Employment Information",
          ar: "بيانات التوظيف",
          key: "empolymentInfo",
        },
        {
          id:3,
          en: "Other Information",
          ar: "بيانات اخري",
          key: "otherInfo",
        },
      ],

      };
    },
  computed:{
    // <div class="errors" v-if="typeof error === 'object'">
    //             <Message
    //               severity="error"
    //               v-for="(value, key) in error"
    //               :key="key"
    //               :closable="false"
    //             >
    //              <span v-if="key !='errors'" >{{ $t(`form.${key}.label`) }}: </span>
    //               <span v-if="typeof value === 'string'">{{ value }}</span>
    //               <span v-else>{{ value[0] }}</span>
    //             </Message>
    //           </div>
    serializerError(){
      const serializerError = {}
      const mainInfoKeys =["name","mobile","dob","address","gender","email"]
      const empolymentInfoKeys =["role","username","salary","password","job_start_date","direct_manager","shift"]
      const otherInfoKeys =["emergency_numbers","files","education","status"]
      if(this.error){
        for(let item in this.error ){
         
          if (mainInfoKeys.includes(item)){
            serializerError['mainInfo'] = this.error[item]
          }
          else if(empolymentInfoKeys.includes(item)){
            serializerError['empolymentInf'] = this.error[item]
          }
          else if(otherInfoKeys.includes(item)){
            serializerError['otherInfo'] = this.error[item]
          }

        }
        
        return serializerError
      }else{
        return serializerError
      }
    }
  },
    methods: {
      saveForm() {
      

        // console.log("ءانلايبنل")
        this.$v.form.$touch();
        if (!this.$v.form.$invalid) {
          this.$emit("save");
          this.$v.form.$reset();
        }
      },
      cancelForm() {
        this.$emit("cancel");
        this.$v.form.$reset();
      },
    },
  };
  </script>
  