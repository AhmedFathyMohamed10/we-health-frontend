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
              <label for="" class="form-label">{{ $t("form.custody.label") }}</label>
              <Dropdown
              v-model="form.custody"
              :options="custodiesOptions"
              optionValue="id"
              optionLabel="title"
              dataKey="id"
              :placeholder="$t('form.custody.placeholder')"
              :class="{
                'p-invalid': $v.form.custody.$error,
              }" 
              />
              <div class="error">
                <small
                  class="d-block text-danger"
                  v-if="!$v.form.custody.required && $v.form.custody.$error"
                >
                  {{ requiredError($t("form.custody.label")) }}
                </small>
              </div> 
              
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.location_name.label") }}</label>
              <input
                type="text"
                v-model="form.location_name"
                :placeholder="$t('form.location_name.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid':
                    $v.form.location_name.$error,
                }"
              />
              <div
                v-if="!$v.form.location_name.required && $v.form.location_name.$error"
                class="invalid-feedback"
              >
                {{ requiredError($t("form.location_name.label")) }}
              </div>
              <div
                v-else-if="!$v.form.location_name.maxLength && $v.form.location_name.$error"
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("form.location_name.label"),
                    $v.form.location_name.$params.maxLength.max
                  )
                }}
              </div>
              
              <div v-else-if="! $v.form.location_name.notContainsHtmlTags &&  $v.form.location_name.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.location_name.label'))}}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.location.label") }}</label>
              <input
                type="text"
                v-model="form.location"
                :placeholder="$t('form.location.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid':
                    $v.form.location.$error,
                }"
              />
              <div
                v-if="!$v.form.location.maxLength && $v.form.location.$error"
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("form.location.label"),
                    $v.form.location.$params.maxLength.max
                  )
                }}
              </div>
              
              <div v-else-if="! $v.form.location.notContainsHtmlTags &&  $v.form.location.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.location.label'))}}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{ $t("form.from_date.label") }}</label>
              <Calendar
              v-model="from_date"
              dateFormat="yy-mm-dd"
              @input="selectFromDate($event)"
              :showTime="true"
              :placeholder="$t('form.from_date.placeholder')"
              :class="{
                'p-invalid':
                $v.form.from_date.$error 
              }"
            />
              <div
              v-if="!$v.form.from_date.required && $v.form.from_date.$error"
              class="p-error"
            >
              {{ requiredError($t("form.from_date.label")) }}
            </div>
            <div
            class="p-error"
            v-else-if="
            $v.form.from_date.$error&& !$v.form.from_date.validDateTime"
            >
            {{DateError($t()) }}
          </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{ $t("form.to_date.label") }}</label>
              <Calendar
              v-model="to_date"
              dateFormat="yy-mm-dd"
              @input="selectToDate($event)"
              :showTime="true"
              :placeholder="$t('form.to_date.placeholder')"
              :class="{
                'p-invalid':
                $v.form.to_date.$error 
              }"
            />

              <div
              v-if="!$v.form.to_date.required && $v.form.to_date.$error"
              class="p-error"
            >
              {{ requiredError($t("form.to_date.label")) }}
            </div>
            <div
            class="p-error"
            v-else-if="
            $v.form.to_date.$error&& !$v.form.to_date.validDateTime"
            >
            {{DateError($t()) }}
          </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.reason.label") }}</label>
              <input
                type="text"
                v-model="form.reason"
                :placeholder="$t('form.reason.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid':
                    $v.form.reason.$error,
                }"
              />
              
              <div
                v-if="!$v.form.reason.maxLength && $v.form.reason.$error"
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("form.reason.label"),
                    $v.form.reason.$params.maxLength.max
                  )
                }}
              </div>
              
              <div v-else-if="! $v.form.reason.notContainsHtmlTags &&  $v.form.reason.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.reason.label'))}}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.result.label") }}</label>
              <input
                type="text"
                v-model="form.result"
                :placeholder="$t('form.result.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid':
                    $v.form.result.$error,
                }"
              />
              
              <div
                v-if="!$v.form.result.maxLength && $v.form.result.$error"
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("form.result.label"),
                    $v.form.result.$params.maxLength.max
                  )
                }}
              </div>
              
              <div v-else-if="! $v.form.result.notContainsHtmlTags &&  $v.form.result.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.result.label'))}}
              </div>
            </div>
          </div>
        </div>
      </EditDialog>
    </div>
  </template>
  <i18n src="@/lang/erp/hr/errands/errands.json"></i18n>
  <script>
  import EditDialog from '@/components/global/utilities/EditDialog.vue';
  import { required, minLength, maxLength } from "vuelidate/lib/validators";
  import {notContainsHtmlTags} from "@/validation/customValidators";
  import moment from "moment";
  import {
    requiredError,
    minLengthError,
    maxLengthError,
    htmlTagsError,
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
        if(this.form.id){
          this.to_date = this.form.to_date
          this.from_date = this.form.from_date
        }
        
      },
      displayForm(value){
        if(!value){
          this.from_date = ""
          this.to_date = ""
        }
      }
    },
    data() {
      return {
        from_date:"",
        to_date:"",
        form:this.value,
      };
    },
    computed: {
      custodiesOptions() {
      if (this.$store.getters["erp/hr/custodies/getListResponse"])
        return this.$store.getters["erp/hr/custodies/getListResponse"].results;
      else {
        return [];
      }
    },
  },
  created() {
   
    
   if (!this.custodiesOptions.Length > 0) {
     let params = { pageNumber: 1, rows: 1000000, employee_name: "",pk:""};
     this.$store.dispatch("erp/hr/custodies/list", params);
   };
  },
    validations: {
      form: {
        location_name: {
          required,
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
          }
        },
        location: {
          
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
          }
        },
        result: {
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
          }
        },
        reason: {
         maxLength: maxLength(255),
         notContainsHtmlTags(value) {
               return notContainsHtmlTags(value);
         }
       },
        custody :{
          required,
        },
        from_date: {
          required,
          validDateTime: (value) => {
            if(value == null || value == ""){
               return true;
              }
            else {
              return moment(value, "YYYY-MM-DD HH:mm:ss",true).isValid();
            }
        },
        },
        to_date: {
          required,
          validDateTime: (value) => {
            if(value == null || value == ""){
               return true;
              }
            else {
              return moment(value, "YYYY-MM-DD HH:mm:ss",true).isValid();
            }
        },
        },
      },
    },
    methods: {
      requiredError,
      minLengthError,
      maxLengthError,
      htmlTagsError,
      DateError,
      selectFromDate(event){
        this.form.from_date = this.$moment(event).format("YYYY-MM-DD HH:mm:ss")
      },
      selectToDate(event){
        this.form.to_date = this.$moment(event).format("YYYY-MM-DD HH:mm:ss")
      },
      saveForm() {
        this.$v.form.$touch();
        if (!this.$v.form.$invalid) {
          this.$emit('save');
          this.$v.form.$reset();
          // this.to_date = "",
          // this.from_date = ""
        }
      },
      cancelForm() {
        this.$emit('cancel');
        this.$v.form.$reset();
        // this.to_date = "",
        // this.from_date = ""
      },
    },
  };
  </script>
  