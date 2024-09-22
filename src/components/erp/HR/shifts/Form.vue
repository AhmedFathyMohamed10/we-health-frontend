<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      :containerStyle="{ 'min-height': '90vw'}" 
      @cancel="cancelForm"
      @save="saveForm"
      :isLoading="isLoading"
      :header="header"
    >
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
                'is-invalid': $v.form.name.$error,
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
            <div
              v-else-if="!$v.form.name.minLength && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("form.name.label"),
                  $v.form.name.$params.minLength.min
                )
              }}
            </div>
            <div 
            v-else-if="!$v.form.name.notContainsHtmlTags && $v.form.name.$error"
            class="invalid-feedback"
          >
              {{ htmlTagsError($t("form.name.label")) }}
          </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{ $t("form.days.label") }}</label>
            <MultiSelect
              v-model="form.days"
              :options="[locale] == 'ar' ? days_ar : days"
              optionLabel="name"
              optionValue="value"
              :placeholder="$t('form.days.placeholder')"
              :class="{
                'p-invalid':
                $v.form.days.$error,
            }"
            />
            <div class="error">
              <small 
                  class="d-block text-danger" 
                  v-if="!$v.form.days.required && $v.form.days.$error">
                   {{ requiredError($t("form.days.label")) }}
              </small>
          </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label class="form-label">{{ $t("form.start_hour.label") }}</label>
            <Calendar
              v-model="start_hour"
              :showTime="true"
              :timeOnly="true"
              :placeholder="$t('form.start_hour.placeholder')"
              hourFormat="12"
              @date-select="selectStart($event)"
              :class="{
                'p-invalid':
                $v.start_hour.$invalid
            }"
            />
            <small
                class="p-invalid"
                v-if="
                $v.start_hour.$invalid && !$v.start_hour.validDateTime"
                >
                {{timeDateError($t()) }}
            </small>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-label">{{ $t("form.end_hour.label") }}</label>
            <Calendar
              v-model="end_hour"
              :showTime="true"
              :timeOnly="true"
              :placeholder="$t('form.end_hour.placeholder')"
              hourFormat="12"
              @date-select="selectEnd($event)"
              :class="{
                'p-invalid':
                $v.end_hour.$invalid
            }"
            />
            <small
                class="p-invalid"
                v-if="
                $v.end_hour.$invalid && !$v.end_hour.validDateTime"
                >
                {{timeDateError($t()) }}
            </small>
          </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/shifts/Shift.json"></i18n>
<script>
import moment from "moment";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";
import {
  required,
  minLength,
  maxLength,

} from "vuelidate/lib/validators";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
  timeDateError,

} from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
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
    value: {
      type: Object,
      required: true,
    },
    error: {
      type: Object,
    },
    header: {
      type: String,
    },
  },
  watch: {
    value() {
      this.form = this.value;
      if(this.value.id){
        if(!this.value.start_hour == null || !this.value.start_hour == ""){
          this.start_hour=this.$moment(this.value.start_hour).format('h:mm:ss a');
        }else{
          this.start_hour="";
        }

        if(!this.value.end_hour == null || !this.value.end_hour == ""){
        this.end_hour=this.$moment(this.value.end_hour).format('h:mm:ss a');
        }else{
          this.end_hour="";
        }
        
      }else{
          this.start_hour="";
          this.end_hour="";
        }
    },
    
  },
  data() {
    return {
      form: this.value,
      start_hour:"",
      end_hour:"",
      days: [
        { name: "Saturday", value: "Saturday" }, 
        { name: "Sunday", value: "Sunday" },
        { name: "Monday", value: "Monday" },
        { name: "Tuesday", value: "Tuesday" },
        { name: "Wednesday", value: "Wednesday" },
        { name: "Thursday", value: "Thursday" },
        { name: "Friday", value: "Friday" },
      ],
      days_ar: [
        { name: "السبت", value: "Saturday" },
        { name: "الحد", value: "Sunday" },
        { name: "الاثتنين", value: "Monday" },
        { name: "الثلاثاء", value: "Tuesday" },
        { name: "الاربعاء", value: "Wednesday" },
        { name: "الخميس", value: "Thursday" },
        { name: "الجمعة", value: "Friday" },
      ],
    };
  },
  validations: {
    start_hour: { 
        validDateTime: (value) => {
              if(value == null || value == ""){
                 return true;
                }
              else {
                return moment(value,'h:mm:ss a',true).isValid();
              }
          },
          },
    end_hour: { 
        validDateTime: (value) => {
              if(value == null || value == ""){
                 return true;
                }
              else {
                return moment(value,'h:mm:ss a', true).isValid();
              }
          },
          },
    form: {
    
      name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },

      days: {
        required,
      },
    },
  },
  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    timeDateError,
    selectStart(event){
      this.$v.start_hour.$touch();
     
      if (!this.$v.start_hour.$invalid) {
        this.form.start_hour =this.$moment(event).format();  }
    },
    selectEnd(event){
       this.$v.end_hour.$touch();
      if (!this.$v.end_hour.$invalid) {
        this.form.end_hour =this.$moment(event).format();  
      }
    },
    saveForm() {
      this.$v.start_hour.$touch();
      this.$v.end_hour.$touch();
      this.$v.form.$touch();
      if (!this.$v.form.$invalid && !this.$v.start_hour.$invalid &&!this.$v.end_hour.$invalid) {
        this.$emit("save");
        this.$v.start_hour.$reset();
        this.$v.end_hour.$reset();
        this.$v.form.$reset();
        
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.start_hour.$reset();
      this.$v.end_hour.$reset();
      this.$v.form.$reset();
      
    },
  },
};
</script>
