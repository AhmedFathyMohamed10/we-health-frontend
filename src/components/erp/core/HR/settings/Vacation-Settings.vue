
<template>
    <div class="Settings">
      <div class="company-wrapper my-2">
        <Base class="my-2">
          <div class="row">
            <div class="col-12">
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
              <h4>{{ $t('settings.header') }}</h4>
            </div>
          </div>
          <div class="row" v-if="upsertError">
            <div class="col-12">
              <div class="errors" v-if="typeof upsertError === 'object'">
                <Message
                  severity="error"
                  v-for="(value, key) in upsertError"
                  :key="key"
                  :closable="false"
                >
                  <span v-if="key != 'errors'"
                    >{{ $t(`form.${key}.label`) }}:
                  </span>
                  <span v-if="typeof value === 'string'">{{ value }}</span>
                  <span v-else>{{ value[0] }}</span>
                </Message>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5 col-xxl-3">
              <div class="form-group">
                <label class="form-label"> {{ $t("form.from_date.label") }} </label>
                <!-- <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" > -->
                  <!-- <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i> -->
                  <Calendar   v-model="from_date" @input="selectFromDate($event)" mask="99/99" dateFormat="dd-mm"
                  :placeholder="$t('form.from_date.placeholder')" :class="{
                    'p-invalid':
                      $v.form.from_date.$error
    
                  }" />
                <!-- </span> -->
              </div>
              <div
              class="p-error"
              v-if="
              $v.form.from_date.$error&& !$v.form.from_date.validDateTime"
              >
              {{DateError($t()) }}
            </div>
            </div>
            <div class="col-md-5 col-xxl-3">
              <div class="form-group">
                <label class="form-label"> {{ $t("form.to_date.label") }} </label>
                <!-- <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" > -->
                  <!-- <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i> -->
                  <Calendar v-model="to_date" @input="selectDate($event)"  mask="99/99" dateFormat="dd-mm"
                  :placeholder="$t('form.to_date.placeholder')" :class="{
                    'p-invalid':
                      $v.form.to_date.$error
    
                  }" />
                  <!-- </span> -->
                </div>
                <div
                class="p-error"
                v-if="
                $v.form.to_date.$error&& !$v.form.to_date.validDateTime"
                >
                {{DateError($t()) }}
              </div>
            </div>
              <div class="col-md-5 col-xxl-3">
                <div class="form-group">
                  <label class="form-label"> {{ $t("form.annual_vacations_days.label") }} </label>
                  <!-- <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" > -->
                    <!-- <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i> -->
                    <input
                  type="text"
                  v-model="form.annual_vacations_days"
                  :placeholder="$t('form.annual_vacations_days.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid':
                      $v.form.annual_vacations_days.$error,
                  }"
                />
                  <!-- </span> -->
                  <div
                  v-if="
                    !$v.form.annual_vacations_days.numeric &&
                    $v.form.annual_vacations_days.$error
                  "
                  class="invalid-feedback"
                >
                  {{ numericError($t("form.annual_vacations_days.label")) }}
                </div>

                <div
                v-else-if="!$v.form.annual_vacations_days.maxLength && $v.form.annual_vacations_days.$error"
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("form.annual_vacations_days.label"),
                    $v.form.annual_vacations_days.$params.maxLength.max
                  )
                }}
              </div>
                </div>
              </div>
            
            <div class="col-md-2 d-flex align-items-end">
              <div class="form-group">
                <button  class="btn btn-pill btn-success-gradient" @click.prevent="upsert">
                    <!-- <span>
                      <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i>         
                    </span> -->
                    <span class="mx-2">{{$t('btns.save')}}</span>
                </button>
              </div>
            </div>
          </div>
          
        </Base>
      </div>
      

   
      
     
    </div>
  </template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/erp/hr/settings/vacations_settings.json"></i18n>
  <script>
  import {
  required,
  minLength,
  numeric,
  maxLength,
} from "vuelidate/lib/validators";
import {
  requiredError,
  minLengthError,
  maxLengthError,
  htmlTagsError,
  timeDateError,
  numericError,
  DateError,
} from "@/validation/errors.js";
  import Base from "@/components/global/utilities/Base.vue";
  import moment from "moment";
 
  import { mapGetters,mapActions  } from 'vuex'
  import pagination from "@/mixins/global/pagination";
  import toast from "@/mixins/global/toast";
  export default {
    mixins:[pagination,toast],
    components: {
      Base,
    },
    data() {
      return {
        from_date:"",
        to_date:"",
        displayForm:false,
        isUpdating:false,
      };
    },
    validations: {
    form: {
      from_date: {
        validDateTime: (value) => {
            if(value == null || value == ""){
               return true;
              }
            else {
              return moment(value,"DD-MM",true).isValid();
            }
        },
      },
      to_date: {
        validDateTime: (value) => {
            if(value == null || value == ""){
               return true;
              }
            else {
              return moment(value,"DD-MM",true).isValid();
            }
        },
      },
      annual_vacations_days: {
        numeric,
        maxLength: maxLength(255),
      },
    
    }
  },
    computed: {
      ...mapGetters("erp/hr/vacation_settings", {
        getForm:"getform"
      }),
      listResponse() {
        return this.getListResponse;
      },
      settings() {
        if(this.listResponse)
         return this.listResponse.results;
        else return {};
      },
      totalRecords() {
        if(this.listResponse)
          return this.listResponse.count;
        else return 0
      },
      ...mapGetters("erp/hr/vacation_settings", {
        getForm:"getform",
        getListResponse: "getListResponse",
        listLoading: "getListLoading",
        getListError: "getListError",
  
        getUpsertResponse: "getUpsertResponse",
        upsertLoading: "getUpsertLoading",
        getUpsertError: "getUpsertError",
  
        getDeleteResponse: "getDeleteResponse",
        deleteLoading: "getDeleteLoading",
        getDeleteError: "getDeleteError",
  
      }),
      form:{
        get(){
          return this.getForm
        },
        set(value){
          console.log(value)
          this.setformResponse(value)
        }
      },
      upsertResponse: {
        get() {
          return this.getUpsertResponse;
        },
        set(value) {
          this.setUpsertResponse(value);
        },
      },
      upsertError: {
        get() {
          return this.getUpsertError;
        },
        set(value) {
          this.setUpsertError(value);
        },
      },
      
      deleteResponse: {
        get() {
          return this.getDeleteResponse;
        },
        set(value) {
          this.setDeleteResponse(value);
        },
      },
      deleteError: {
        get() {
          return this.getDeleteError;
        },
        set(value) {
          this.setDeleteError(value);
        },
      },
    },
    mounted() { 
      this.list();
      
    },
    methods: {
      requiredError,
    minLengthError,
    maxLengthError,
    htmlTagsError,
    timeDateError,
    numericError,
    DateError,
      ...mapActions("erp/hr/vacation_settings",
      ["setformResponse","setUpsertResponse","setUpsertError","setDeleteResponse","setDeleteError"]),
      /////////////////////////////////////////
      ////////// UPSERT ///////////////////
    
      openUpdate(item){
        this.isUpdating=true;
        this.form={...item};
        this.update();
      },
     
    //   create(){
    //     // this.$v.form.$touch();
    //     if (!this.$v.form.$invalid) {
    //     this.$store.dispatch("Settings/create", this.form)
    //     .then((res) => {
    //       this.$v.form.$reset();
    //       const summery = res.statusText; 
    //       const details =  res.data.message;
    //       this.successToast(summery,details)
    //     })
    //     .catch((err) => {
    //       // console.log(err)
    //       const summery = err.statusText; 
    //       const details =  err.data.message;
    //       this.errorToast(summery,details)
    //     }
    //     )
    //   }
    // },
    selectFromDate(event){
        this.form.from_date = this.$moment(event).format("DD-MM")
      },
      selectDate(event){
        this.form.to_date = this.$moment(event).format("DD-MM")
      },
      update(){
        console.log(this.form)
        this.$v.form.$touch();
        if (!this.$v.form.$invalid) {
        this.$store.dispatch("erp/hr/vacation_settings/update", this.form)
        .then((res) => {
       
          const summery = res.statusText; 
          const details =  res.data.message;
          this.successToast(summery,details)
        })
        .catch((err) => {
         
          const summery = err.statusText; 
          const details =  err.data.message;
          this.errorToast(summery,details)
        })
      }},
      upsert() {
        this.update();
        // if(this.form.id){
        // }
        // else {
        //   this.create();
        // }
      },
  
       list() {
         this.$store.dispatch("erp/hr/vacation_settings/list")
         .then((
          res
         ) => {
          console.log(res.data[0])  
          let data = res.data[0]
          this.to_date =data.to_date
          this.from_date =data.from_date
        });
       },
       
      fetchAll() {
         this.list();
      },
     
  
    },
  };
  </script>
  <style>
  .p-datepicker-year{
    display: none;
  }
</style>
  
  