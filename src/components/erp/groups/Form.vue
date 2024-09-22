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
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.name.label")}}</label>
              <input
                type="text"
                v-model="form.name"
                :placeholder="$t('form.name.placeholder')"
                class="form-control"
                :class="{'is-invalid': $v.form.name.$error}"
              />
              <div v-if="!$v.form.name.required && $v.form.name.$error " class="invalid-feedback">
                {{ requiredError($t("form.name.label")) }}
              </div>
              <div v-else-if="!$v.form.name.minLength && $v.form.name.$error" class="invalid-feedback" >
                {{minLengthError($t("form.name.label"),$v.form.name.$params.minLength.min)}}
              </div>
              <div v-else-if=" !$v.form.name.maxLength && $v.form.name.$error " class="invalid-feedback" >
                {{ maxLengthError($t("form.name.label"),$v.group.name.$params.maxLength.max)}}
              </div>
              <div v-else-if="! $v.form.name.notContainsHtmlTags &&  $v.form.name.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.name.label'))}}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.discount_percentage.label")}}</label>
              <input
                type="number"
                v-model="form.discount_percentage"
                :placeholder="$t('form.discount_percentage.placeholder')"
                class="form-control"
                :class="{'is-invalid': $v.form.discount_percentage.$error}"
              />
              <div v-if="!$v.form.discount_percentage.decimal && $v.form.discount_percentage.$error" class="invalid-feedback">
                {{numericError($t('form.discount_percentage.label'))}}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.description.label")
              }}</label>
              <!-- <input
                type="description"
                v-model="form.description"
                :placeholder="$t('form.description.placeholder')"
                class="form-control"
                :class="{'is-invalid': $v.form.description.$error}"
              /> -->
              <textarea
              class="form-control"
              rows="5"
              cols="30"
              v-model="form.description"
              :placeholder="$t('form.description.placeholder')"
              :class="{
                'is-invalid': $v.form.description.$error,
              }"
            ></textarea>
              <div v-if="! $v.form.description.notContainsHtmlTags &&  $v.form.description.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.description.label'))}}
        </div>
            </div>
          </div>
        </div>
      </EditDialog>
    </div>
  </template>
  <i18n src="@/lang/erp/groups/Group.json"></i18n>
  <script>
  import EditDialog from '@/components/global/utilities/EditDialog.vue';
  import { required, minLength, maxLength, decimal} from "vuelidate/lib/validators";
  import {notContainsHtmlTags} from "@/validation/customValidators";
  import {
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    htmlTagsError,
    
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
        form:this.value,
      };
    },
    validations: {
      form: {
        name: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            }
        },
        discount_percentage:{
            decimal,
        },
        description:{
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            }
        }
      },
    },
    
    methods: {
      requiredError,
      minLengthError,
      maxLengthError,
      numericError,
      htmlTagsError,
    
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
  