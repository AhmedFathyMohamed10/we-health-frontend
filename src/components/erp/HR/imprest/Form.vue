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
                <!-- <span v-if="key !='errors'" >{{ $t(`form.${key}.label`) }}: </span> -->
                <span v-if="(typeof value ==='string')">{{ value }}</span>
                <span v-else>{{ value[0] }}</span>
              </Message>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
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
              <!-- <div
                v-if="!$v.form.reason.required && $v.form.reason.$error"
                class="invalid-feedback"
              >
                {{ requiredError($t("form.reason.label")) }}
              </div> -->
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
              <label class="form-label">{{ $t("form.due_date.label") }}</label>
              <Calendar
              v-model="due_date"
              dateFormat="yy-mm-dd"
              @input="selectDueDate($event)"
              :placeholder="$t('form.due_date.placeholder')"
              :class="{
                'p-invalid':
                $v.form.due_date.$error 
              }"
            />
              <div
              v-if="!$v.form.due_date.required && $v.form.due_date.$error"
              class="p-error"
            >
              {{ requiredError($t("form.due_date.label")) }}
            </div>
            <div
            class="p-error"
            v-else-if="
            $v.form.due_date.$error&& !$v.form.due_date.validDateTime"
            >
            {{DateError($t()) }}
          </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{ $t("form.amount.label") }}</label>
              <input
                type="text"
                class="form-control"
                rows="5"
                cols="30"
                v-model="form.amount"
                :placeholder="$t('form.amount.placeholder')"
                :class="{
                  'is-invalid': $v.form.amount.$error,
                }"
              />
              <div
                v-if="!$v.form.amount.required && $v.form.amount.$error"
                class="error"
              >
                <small class="d-block text-danger">
                  {{ requiredError($t("form.amount.label")) }}
                </small>
              </div>
              <div
              v-else-if="
                !$v.form.amount.numeric && $v.form.amount.$error
              "
              class="invalid-feedback"
            >
              {{ numericError($t("form.amount.label")) }}
            </div>
            <div
            v-else-if="
              !$v.form.amount.maxLength && $v.form.amount.$error
            "
            class="invalid-feedback"
          >
            {{  maxLengthError(
              $t("form.amount.label"),
              $v.form.amount.$params.maxLength.max
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
  import { mapGetters, mapActions } from "vuex";
  import moment from "moment";
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
      displayForm(value){
        if(!value){
          this.due_date = ""
        }
      }
    },
    
    data() {
      return {
        due_date:"",
        amount:"",
        form:this.value,
      };
    },
    validations: {
      form: {
        reason: {
          // required,
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
          }
        },
        due_date: {
          required,
          validDateTime: (value) => {
            if(value == null || value == ""){
               return true;
              }
            else {
              return moment(value, "YYYY-MM-DD",true).isValid();
            }
        },
        },
        amount: {
        required,
        numeric,
        maxLength: maxLength(255),
        // notContainsHtmlTags(value) {
        //   return notContainsHtmlTags(value);
        // },
     
        },
      },
    },
    computed: {
    
    ...mapGetters("erp/hr/imprests", {
      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",
    }),
    upsertError: {
        get() {
          return this.getUpsertError;
        },
        set(value) {
          this.setUpsertError(value);
        },
      },
  },
    methods: {
      ...mapActions("erp/hr/imprests",
      ["setUpsertResponse","setUpsertError"]),
      requiredError,
      minLengthError,
      maxLengthError,
      htmlTagsError,
      numericError,
      DateError,
      selectDueDate(event){
        this.form.due_date = this.$moment(event).format('YYYY-MM-DD')
      },
      
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
  