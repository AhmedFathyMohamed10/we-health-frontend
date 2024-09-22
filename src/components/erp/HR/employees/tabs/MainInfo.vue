<template>
    <div class="form">
      <div>
          <h4 class="mt-5">{{ $t("form.mainInfo") }}</h4>
          {{ v.mainInfo }}
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.name.label")
                }}</label>

                <AutoComplete
                v-if="!form.id"
                v-model="form.mainInfo.name"
                :suggestions="clientsParams.suggestions"
                :class="{
                  'p-invalid':
                    v.name.$error 
                }"               
                field="fullname"
                :placeholder="$t('form.name.placeholder')"
                @complete="search($event, clientsParams)"
                />

                <input
                  v-else
                  type="text"
                  v-model="form.mainInfo.name"
                  :placeholder="$t('form.name.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid':
                      v.name.$error}"
                />
               
                <div
                  v-if="!v.name.required && v.name.$error"
                  class="p-error"
                >
                  {{ requiredError($t("form.name.label")) }}
                  </div>
                <div
                v-else-if="!v.name.validator && v.name.$error"
                class="p-error"
              >
                {{
                  inputError(
                    $t("form.name.label")
                   
                  )
                }}
              </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.mobile.label")
                }}</label>
                <input
                  type="number"
                  v-model="form.mainInfo.mobile"
                  :placeholder="$t('form.mobile.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid':
                  
                      v.mobile.$error
                  }"
                />
            
                <div
                  v-if="
                    !v.mobile.required && v.mobile.$error
                  "
                  class="invalid-feedback"
                >
                  {{ requiredError($t("form.mobile.label")) }}
                </div>
                <div
                  v-else-if="
                    !v.mobile.minLength && v.mobile.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    minLengthError(
                      $t("form.mobile.label"),
                      v.mobile.$params.minLength.min
                    )
                  }}
                </div>
                <div
                  v-else-if="
                    !v.mobile.maxLength && v.mobile.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    maxLengthError(
                      $t("form.mobile.label"),
                      v.mobile.$params.maxLength.max
                    )
                  }}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.dob.label")
                }}</label>
                <Calendar
                  v-model="dob"
                  dateFormat="yy-mm-dd"
                  @input="selectDate($event)"
                  :placeholder="$t('form.dob.placeholder')"
                  :class="{
                    'p-invalid':
                    v.dob.$error 
                  }"
                />
                <div
                  v-if="!v.dob.required && v.dob.$error"
                  class="p-error"
                >
                  {{ requiredError($t("form.dob.label")) }}
                </div>
                <div
                class="p-error"
                v-else-if="
                v.dob.$error&& !v.dob.validDateTime"
                >
                {{timeDateError($t()) }}
              </div>
          
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.address.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.mainInfo.address"
                  :placeholder="$t('form.address.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid':
                    
                      v.address.$error 
                  }"
                />
               
                <div
                  v-if="
                     !v.address.required && v.address.$error
                  "
                  class="invalid-feedback"
                >
                  {{ requiredError($t("form.address.label")) }}
                </div>

              <div
                  v-else-if="
                    !v.address.minLength && v.address.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    maxLengthError(
                      $t("form.address.label"),
                      v.address.$params.minLength.min
                    )
                  }}
                </div>
                <div
                  v-else-if="
                    !v.address.maxLength && v.address.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    minLengthError(
                      $t("form.address.label"),
                      v.address.$params.maxLength.max
                    )
                  }}
                </div>
                <div v-else-if="! v.address.notContainsHtmlTags &&  v.address.$error" class="invalid-feedback">
                  {{htmlTagsError($t('form.address.label'))}}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.gender.label")
                }}</label>
                <Dropdown
                  v-model="form.mainInfo.gender"
                  :options="
                    [locale] == 'ar' ? genderChoices_ar : genderChoices_en
                  "
                  optionValue="value"
                  optionLabel="name"
                  :placeholder="$t('form.gender.placeholder')"
                  
                  :class="{
                    'p-invalid':
                
                     v.gender.$error
                  }"
                />
               
                <div
                  v-if="!v.gender.required && v.gender.$error"
                  class="p-error"
                >
                  {{ requiredError($t("form.gender.label")) }}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.email.label")
                }}</label>
                <input
                  type="email"
                  v-model="form.mainInfo.email"
                  :placeholder="$t('form.email.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid':
                     
                      v.email.$error
                  }"
                />
               
                <div
                  v-if="!v.email.required && v.email.$error"
                  class="invalid-feedback"
                >
                  {{ requiredError($t("form.email.label")) }}
                </div>
                <div class="invalid-feedback" v-if="!v.email.email && v.email.$error">
                  {{ $t("Enter a valid email address.")}}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.marital_status.label")
                }}</label>
                <Dropdown
                  v-model="form.mainInfo.marital_status"
                  :options="
                    [locale] == 'ar'
                      ? maritalStatusChoices_ar
                      : maritalStatusChoices_en
                  "
                  
                  optionValue="value"
                  optionLabel="name"
                  :placeholder="$t('form.marital_status.placeholder')"
                  :class="{
                    'p-invalid':
                    v.marital_status.$error 
                  }"
                />
                <div
                v-if="!v.marital_status.required && v.marital_status.$error"
                class="p-error"
              >
                {{ requiredError($t("form.marital_status.label")) }}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
            <div class="form-group col-md-6">
                <h4 class="text-center">{{ $t('form.image.label') }}</h4>
                <ImageEditor
                v-model="form.mainInfo.image"
                :editorControls="ImageControls"
                :staticRef="'Image'"
                :uploadOnly="false"
                
                >
                </ImageEditor>
            </div>       
        </div>
            </div>
          </div>
      </div>

    </div>
  </template>
<i18n src="@/lang/erp/employees/employees.json"></i18n>



<script>
import { mapGetters, mapActions } from "vuex";
import clientsOptions from "@/mixins/erp/clients/clientsOptions";

// import Dropdown from "primevue/dropdown";
import whiteBackground from "@/assets/global/image-plugin-templates/White-Background.svg"
import ImageEditor from '@/components/global/image-plugin/ImageEditor.vue'

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
      ImageEditor,
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
        getForm: "getForm",
      }),
  
      form: {
      get() {
        return this.getForm;
      },
      set(value) {
        this.setForm(value);
      },
    },
  },
  created(){
    if(this.form.id){
    
      this.dob=this.$moment(this.form.mainInfo.dob).format('YYYY-MM-DD');
    }
  },
  methods: {
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    htmlTagsError,
    timeDateError, 
    inputError,
      ...mapActions("erp/hr/employees",
      ["setForm"]),

    selectDate(event){
    
    this.form.mainInfo.dob = this.$moment(event).format('YYYY-MM-DD')
   
   
  }
}

  };
  </script>
  