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
        <div class="row" v-if="upsertError">
          <div class="col-12">
            <div class="errors" v-if="(typeof upsertError ==='object')">
              <Message severity="error" v-for="(value, key) in upsertError" :key="key" :closable="false">
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
                v-if="!$v.form.reason.required && $v.form.reason.$error"
                class="invalid-feedback"
              >
                {{ requiredError($t("form.reason.label")) }}
              </div>
              <div
                v-else-if="!$v.form.reason.maxLength && $v.form.reason.$error"
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
              <label class="form-label">{{ $t("form.from_date.label") }}</label>
              <Calendar
              v-model="from_date"
              dateFormat="yy-mm-dd"
              @input="selectFromDate($event)"
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
        </div>
      </EditDialog>
    </div>
  </template>
  <i18n src="@/lang/erp/vacations/Vacations.json"></i18n>
  <script>
  import EditDialog from '@/components/global/utilities/EditDialog.vue';
  import { required, minLength, maxLength } from "vuelidate/lib/validators";
  import {notContainsHtmlTags} from "@/validation/customValidators";
  import { mapGetters,mapActions  } from 'vuex'
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
    validations: {
      form: {
        reason: {
          required,
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
          }
        },
        from_date: {
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
        to_date: {
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
      },
    },
    computed: {
    
    ...mapGetters("erp/hr/vacations", {
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
      ...mapActions("erp/hr/vacations",
      ["setUpsertResponse","setUpsertError"]),
      requiredError,
      minLengthError,
      maxLengthError,
      htmlTagsError,
      DateError,
      selectFromDate(event){
        this.form.from_date = this.$moment(event).format('YYYY-MM-DD')
      },
      selectToDate(event){
        this.form.to_date = this.$moment(event).format('YYYY-MM-DD')
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
  