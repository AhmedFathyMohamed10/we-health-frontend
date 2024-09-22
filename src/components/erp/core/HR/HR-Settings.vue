
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
                <label class="form-label"> {{ $t("form.salary_due_date.label") }} ({{ $t("in_month") }}) </label>
                <!-- <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" > -->
                  <!-- <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i> -->
                  <input
                type="text"
                v-model="form.salary_due_date"
                :placeholder="$t('form.salary_due_date.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid':
                    $v.form.salary_due_date.$error,
                }"
              />
                <!-- </span> -->
                <div
                v-if="
                  !$v.form.salary_due_date.numeric &&
                  $v.form.salary_due_date.$error
                "
                class="invalid-feedback"
              >
                {{ numericError($t("form.salary_due_date.label")) }}
              </div>

              <div
              v-else-if="!$v.form.salary_due_date.maxLength && $v.form.salary_due_date.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.salary_due_date.label"),
                  $v.form.salary_due_date.$params.maxLength.max
                )
              }}
            </div>


              </div>
            </div>
            <div class="col-md-5 col-xxl-3">
                <div class="form-group">
                  <label class="form-label"> {{ $t("form.reminder_salary_due_Date.label") }} ({{$t("day")}})</label>
                  <!-- <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" > -->
                    <!-- <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i> -->
                    <input
                  type="text"
                  v-model="form.reminder_salary_due_Date"
                  :placeholder="$t('form.reminder_salary_due_Date.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid':
                      $v.form.reminder_salary_due_Date.$error,
                  }"
                />
                  <!-- </span> -->
                  <div
                  v-if="
                    !$v.form.reminder_salary_due_Date.numeric &&
                    $v.form.reminder_salary_due_Date.$error
                  "
                  class="invalid-feedback"
                >
                  {{ numericError($t("form.reminder_salary_due_Date.label")) }}
                </div>
                <div
                v-else-if="!$v.form.reminder_salary_due_Date.maxLength && $v.form.reminder_salary_due_Date.$error"
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("form.reminder_salary_due_Date.label"),
                    $v.form.reminder_salary_due_Date.$params.maxLength.max
                  )
                }}
              </div>
  
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
              <div class="col-md-5 col-xxl-3">
                <div class="form-group">
                  <label class="form-label"> {{ $t("form.report_apperance_duration.label") }} </label>
                  <!-- <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" > -->
                    <!-- <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i> -->
                    <input
                  type="text"
                  v-model="form.report_apperance_duration"
                  :placeholder="$t('form.report_apperance_duration.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid':
                      $v.form.report_apperance_duration.$error,
                  }"
                />
                  <!-- </span> -->
                  <div
                  v-if="
                    !$v.form.report_apperance_duration.numeric &&
                    $v.form.report_apperance_duration.$error
                  "
                  class="invalid-feedback"
                >
                  {{ numericError($t("form.report_apperance_duration.label")) }}
                </div>

                <div
                v-else-if="!$v.form.report_apperance_duration.maxLength && $v.form.report_apperance_duration.$error"
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("form.report_apperance_duration.label"),
                    $v.form.report_apperance_duration.$params.maxLength.max
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
  <i18n src="@/lang/erp/hr/settings/Settings.json"></i18n>
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
} from "@/validation/errors.js";
  import Base from "@/components/global/utilities/Base.vue";

 
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
        displayForm:false,
        isUpdating:false,
      };
    },
    validations: {
    form: {
      salary_due_date: {
        numeric,
        maxLength: maxLength(255),
      },
      reminder_salary_due_Date: {
        numeric,
        maxLength: maxLength(255),
      },
      annual_vacations_days: {
        numeric,
        maxLength: maxLength(255),
      },
      report_apperance_duration: {
        numeric,
        maxLength: maxLength(255),
      },
      
    }
  },
    computed: {
      ...mapGetters("erp/hr/settings", {
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
      ...mapGetters("erp/hr/settings", {
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
      ...mapActions("erp/hr/settings",
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
      update(){
        console.log(this.form)
        this.$v.form.$touch();
        if (!this.$v.form.$invalid) {
        this.$store.dispatch("erp/hr/settings/update", this.form)
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
         this.$store.dispatch("erp/hr/settings/list")
         .then(() => {});
       },
       
      fetchAll() {
         this.list();
      },
     
  
    },
  };
  </script>
  <style></style>
  
  