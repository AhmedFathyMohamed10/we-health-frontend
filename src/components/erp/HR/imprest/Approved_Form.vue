<template>
    <div class="form">
      <EditDialog 
        :display="displayForm" 
        @close="cancelForm" 
        @cancel="cancelForm" 
        @save="saveForm" 
        :isLoading="isLoading"
        :header="header"
        
      >
        <slot></slot>
        <div class="row" v-if="error">
          <div class="col-12">
            <div class="errors" v-if="(typeof error ==='object')">
              <Message severity="error" v-for="(value, key) in error" :key="key" :closable="false">
                <span v-if="key !='errors'" >{{ $t(`form.${key}.label`) }}: </span>
                <span v-if="(typeof value ==='string')">{{ value }}</span>
                <span v-else>{{ value[0] }}</span>
              </Message>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label class="form-label">{{ $t("form.liability_amount.label") }}  ({{($t("monthly"))}})</label>
              <input
                type="text"
                class="form-control"
                rows="5"
                cols="30"
                v-model="form.liability_amount"
                :placeholder="$t('form.liability_amount.placeholder')"
                :class="{
                  'is-invalid': $v.form.liability_amount.$error,
                }"
              />
              <div
                v-if="!$v.form.liability_amount.required && $v.form.liability_amount.$error"
                class="error"
              >
                <small class="d-block text-danger">
                  {{ requiredError($t("form.liability_amount.label")) }}
                </small>
              </div>
              <div
              v-else-if="
                !$v.form.liability_amount.numeric && $v.form.liability_amount.$error
              "
              class="invalid-feedback"
            >
              {{ numericError($t("form.liability_amount.label")) }}
            </div>
            <div
            v-else-if="
              !$v.form.liability_amount.maxLength && $v.form.liability_amount.$error
            "
            class="invalid-feedback"
          >
            {{  maxLengthError(
              $t("form.liability_amount.label"),
              $v.form.liability_amount.$params.maxLength.max
            ) }}
          </div>
            </div>
          </div>
        </div>
      </EditDialog>
    </div>
  </template>
  <i18n src="@/lang/erp/hr/imprest/imprests.json"></i18n>
  <script>
  import EditDialog from '@/components/global/utilities/EditDialog.vue';
  import { required, minLength,numeric, maxLength } from "vuelidate/lib/validators";
  import {notContainsHtmlTags} from "@/validation/customValidators";
  import {
    requiredError,
    minLengthError,
    maxLengthError,
    htmlTagsError,
    numericError,
    DateError
  } from "@/validation/errors.js";
  export default {
    components: { 
      EditDialog,
     },
    props:{
      displayForm:{
        type:Boolean,
        required:true,
        default(){
          return false;
        },
      },
      isLoading:{
        type:Boolean,
        default(){
          return false;
        },
      },
      value:{
        type:Object,
        required:true,
      },
      error:{
        type:Object,
      },
      header:{
        type:String,
      },
  
    },
    watch: {
      value(){
        this.form = this.value;
      },
    },
    data() {
      return {
        // due_date:"",
        // amount:"",
        form:this.value,
      };
    },
    validations: {
      form: {
        liability_amount: {
        required,
        numeric,
        maxLength: maxLength(255),
        // notContainsHtmlTags(value) {
        //   return notContainsHtmlTags(value);
        // },
     
        },
      },
    },
    methods: {
      requiredError,
      minLengthError,
      maxLengthError,
      htmlTagsError,
      numericError,
      DateError,
     
      saveForm() {
        this.$v.form.$touch();
        if (!this.$v.form.$invalid) {
          this.$emit('save');
          this.$v.form.$reset();
        }
      },
      cancelForm() {
        this.$emit('cancel');
        this.$v.form.$reset();
      },
    },
  };
  </script>
  