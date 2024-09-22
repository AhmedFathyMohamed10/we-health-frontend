<template>
    <div class="form">
      <EditDialog 
        :display="displayForm" 
        @close="cancelForm" 
        @cancel="cancelForm" 
        @save="saveForm" 
        :isLoading="isLoading"
        :header="header"
        :minWidth=minWidth
        :maxWidth=maxWidth
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
              <label for="" class="form-label">{{ $t("form.name.label") }}</label>
              <input
                type="text"
                v-model="form.name"
                :placeholder="$t('form.name.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid':
                    $v.form.name.$error,
                }"
              />
              <div
                v-if="!$v.form.name.required && $v.form.name.$error"
                class="invalid-feedback"
              >
                {{ requiredError($t("form.name.label")) }}
              </div>
              <div
                v-else-if="!$v.form.name.maxLength && $v.form.name.$error"
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("form.name.label"),
                    $v.form.name.$params.maxLength.max
                  )
                }}
              </div>
              <div v-else-if="! $v.form.name.notContainsHtmlTags &&  $v.form.name.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.name.label'))}}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{ $t("form.entity_name.label") }}</label>
              <input
              type="text"
              v-model="form.entity_name"
              :placeholder="$t('form.entity_name.placeholder')"
              class="form-control"
              :class="{
                'is-invalid':
                  $v.form.entity_name.$error,
              }"
            />
              <div
                v-if="!$v.form.entity_name.required && $v.form.entity_name.$error"
                class="invalid-feedback"
              >
                {{ requiredError($t("form.entity_name.label")) }}
              </div>
              <div
              v-else-if="!$v.form.entity_name.maxLength && $v.form.entity_name.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.entity_name.label"),
                  $v.form.entity_name.$params.maxLength.max
                )
              }}
            </div>
              <div v-else-if="! $v.form.entity_name.notContainsHtmlTags &&  $v.form.entity_name.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.entity_name.label'))}}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{ $t("form.course_type.label") }}</label>
              <Dropdown
                  v-model="form.course_type"
                  :options="
                    [locale] == 'ar' ? TypeList_ar : TypeList_en
                  "
                  optionValue="value"
                  optionLabel="name"
                  :placeholder="$t('form.course_type.placeholder')"
                  :class="{
                    'p-invalid':
                     $v.form.course_type.$error
                  }"
                />
              
              <div
              v-if="!$v.form.course_type.maxLength && $v.form.course_type.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.course_type.label"),
                  $v.form.course_type.$params.maxLength.max
                )
              }}
            </div>
              <div v-else-if="! $v.form.course_type.notContainsHtmlTags &&  $v.form.course_type.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.course_type.label'))}}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{ $t("form.duration.label") }}  ({{$t('month')}})</label>
              <!-- <div class="d-flex"> -->
              <input
              type="text"
              v-model="form.duration"
              :placeholder="$t('form.duration.placeholder')"
              class="form-control"
              :class="{
                'is-invalid':
                  $v.form.duration.$error,
              }"
            />
               <!-- <label class="ms-2 mt-2">{{$t('month')}}</label>
             </div> -->
            
            <div
                v-if="!$v.form.duration.required && $v.form.duration.$error"
                class="invalid-feedback"
              >
                {{ requiredError($t("form.duration.label")) }}
              </div>
              <div v-else-if="! $v.form.duration.numeric &&  $v.form.duration.$error" class="invalid-feedback">
                {{numericError($t('form.duration.label'))}}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{ $t("form.hours.label") }}</label>
              <input
              type="text"
              v-model="form.hours"
              :placeholder="$t('form.hours.placeholder')"
              class="form-control"
              :class="{
                'is-invalid':
                  $v.form.hours.$error,
              }"
            />
          <div v-if="! $v.form.hours.numeric &&  $v.form.hours.$error" class="invalid-feedback">
            {{numericError($t('form.hours.label'))}}
          </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{ $t("form.price.label") }}</label>
              <input
              type="text"
              v-model="form.price"
              :placeholder="$t('form.price.placeholder')"
              class="form-control"
              :class="{
                'is-invalid':
                  $v.form.price.$error,
              }"
            />
            <div
            v-if="!$v.form.price.required && $v.form.price.$error"
            class="invalid-feedback"
          >
            {{ requiredError($t("form.price.label")) }}
          </div>
          <div v-else-if="! $v.form.price.numeric &&  $v.form.price.$error" class="invalid-feedback">
            {{numericError($t('form.price.label'))}}
          </div>
            </div>
          </div>
        </div>
      </EditDialog>
    </div>
  </template>
  <i18n src="@/lang/erp/courses/Course.json"></i18n>
  <script>
  import EditDialog from '@/components/global/utilities/EditDialog.vue';
  import { required, numeric, maxLength } from "vuelidate/lib/validators";
  import {notContainsHtmlTags} from "@/validation/customValidators";
  import {
    requiredError,
    minLengthError,
    maxLengthError,
    htmlTagsError,
    numericError,
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
      minWidth:{
        type:String,
      },
      maxWidth:
        {
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
        TypeList_en: [
        { name: "Indoor", value: "Indoor" },
        { name: "Outdoor", value: "Outdoor" },
        { name: "Online", value: "Online" }
      ],
      TypeList_ar: [
        { name: "داخلي", value: "Indoor" },
        { name: "خارجي", value: "Outdoor" },
        { name: "عن بعد", value: "Online" }
      ],
        form:this.value,
      };
    },
    validations: {
      form: {
        name: {
          required,
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
          }
        },
        entity_name: {
          required,
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
          }
        },
        duration: {
          required,
          numeric
        },
        course_type:{
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
          }
        },
        hours: {
          numeric
        },
        price: {
          required,
          numeric
        },
      },
    },
    methods: {
      requiredError,
      minLengthError,
      maxLengthError,
      htmlTagsError,
      numericError,
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
  