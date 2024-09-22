<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :isLoading="isLoading"
      :header="header"
      :min-width="'80'"
      :max-width="'100'" 
      :icon="'pi pi-sitemap'"
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
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ key }} : {{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <div class="row">
        <div :class="isUpdating ? 'col-md-6 col-lg-4' : 'col-md-6'">
          <Base>
            <div class="row">
              <div class="col-10">
                <div class="form-group">
                  <label for="" class="form-label">{{ $t("form.employee.label")}}</label>
                  <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                    <i class="pi" :class="[typeof form.employee === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                    <AutoComplete
                    v-model="form.employee" 
                    :suggestions="employeeParams.suggestions"
                    field="name"
                    :placeholder="$t('form.employee.placeholder')"
                    @complete="searchEmployee($event, employeeParams)"
                    :forceSelection="true" 
                    :class="{ 'p-invalid': $v.form.employee.$error }" 
                    />
                  </span> 
                  <div class="error">
                    <small class="p-invalid" v-if="!$v.form.employee.required && $v.form.employee.$error">
                      {{ requiredError($t("form.employee.label")) }}
                    </small>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <Employee></Employee>
              </div>
            </div>
            <div class="row">
              <div class="col-10">
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.reward.label")}}</label>
                  <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                    <i class="pi" :class="[typeof form.reward === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                    <AutoComplete
                      v-model="form.reward"
                      :suggestions="rewardParams.suggestions"
                      field="reward_name"
                      :placeholder="$t('form.reward.placeholder')"
                      @complete="search($event, rewardParams)"
                      :class="{ 'p-invalid': $v.form.reward.$error }" 
                    />
                  </span>
                  <div class="error">
                    <small class="p-invalid" v-if="!$v.form.reward.required && $v.form.reward.$error">
                      {{ requiredError($t("form.reward.label")) }}
                    </small>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <Reward></Reward>
              </div>
            </div>
          </Base>
        </div>
        <div :class="isUpdating ? 'col-md-6 col-lg-4' : 'col-md-6'">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.total_amount.label")
                  }}</label>
                  <input
                    type="number"
                    v-model="form.total_amount"
                    :placeholder="$t('form.total_amount.placeholder')"
                    class="form-control"
                    :class="{'is-invalid':$v.form.total_amount.$error}"
                  />
                  <div class="p-error" v-if="!$v.form.total_amount.decimal && $v.form.total_amount.$invalid">
                    {{ inputError($t("form.total_amount.label"))}}
                  </div> 
                  <div class="p-error" v-else-if="!$v.form.total_amount.minValue && $v.form.total_amount.$invalid">
                    {{minValueError($t("form.total_amount.label"), $v.form.total_amount.$params.minValue.min )}}
                  </div>
                  <div class="p-error" v-else-if="!$v.form.total_amount.maxValue &&$v.form.total_amount.$invalid" >
                    {{maxValueError($t("form.total_amount.label"),$v.form.total_amount.$params.maxValue.max)}}
                  </div> 
                </div>
                <div class="form-group">
                  <label for="" class="form-label">{{ $t("form.due_date.label")}}</label>
                  <div class="d-flex flex-wrap custom-radio-button justify-content-between">
                    <div
                      v-for="option of due_date_options"
                      :key="option.id"
                      class="field-radiobutton d-flex gap-1 align-items-center"
                    >
                    <RadioButton
                    :id="option.id"
                    name="option"
                    :value="option.id"
                    v-model="form.due_date"
                    @input="inputDate"
                    />
                    <label class="mt-2">{{ option[locale]}} </label>
                    </div>
                  </div> 
                </div>
                <div class="form-group" v-if="form.due_date == 1">
                  <label for="" class="form-label">{{ $t("form.date.label")}}</label>
                  <Calendar 
                  v-model="form.date" 
                  :showIcon="true" dateFormat="yy-mm-dd"
                  :placeholder="$t('form.date.placeholder')" 
                  :class="{'p-invalid': $v.form.date.$error,}"
                  />
                  <div class="p-error" v-if="$v.form.date.$error && !$v.form.date.required">
                  {{ requiredError($t()) }}
                  </div>
                  <div class="p-error" v-else-if="$v.form.date.$error && !$v.form.date.validDateTime">
                  {{ timeDateError($t()) }}
                  </div>
                </div>

              </div>
            </div>
          </Base>
        </div>
        <div class="col-md-6 col-lg-4" v-if="isUpdating">
          <Base>
          <div class="row">
            <div class="col-12">

              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.account.label")
                }}</label>
                  <input
                    type="text"
                    v-model="form.account"
                    :placeholder="$t('form.account.placeholder')"
                    class="form-control"
                    disabled
                   />
                </div>
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.serial_code.label")
                }}</label>
                  <input
                    type="text"
                    v-model="form.serial_code"
                    :placeholder="$t('form.serial_code.placeholder')"
                    class="form-control"
                    disabled
                   />
                </div>
              </div>
          </div>
          </Base>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <Base>
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.notes.label")
                }}</label>
                  <textarea 
                    class="form-control"
                    rows="5" cols="30" 
                    v-model="form.notes"
                    :placeholder="$t('form.notes.placeholder')"
                    :class="{'is-invalid':$v.form.notes.$error}">
                  </textarea>
                  <div v-if="!$v.form.notes.minLength && $v.form.notes.$error" class="invalid-feedback">
                    {{maxLengthError($t("form.notes.label"),$v.form.notes.$params.minLength.min)}}
                  </div>
                  <div v-else-if="!$v.form.notes.maxLength && $v.form.notes.$error" class="invalid-feedback">
                    {{minLengthError($t("form.notes.label"),$v.form.notes.$params.maxLength.max) }}
                  </div>
                  <div v-else-if="!$v.form.notes.notContainsHtmlTags && $v.form.notes.$error" class="invalid-feedback">
                    {{ htmlTagsError($t("form.notes.label")) }}
                  </div>
              </div>
            </Base>
          </div>
      </div>
      <template #custom-footer>
        <Button
          class="btn btn-pill btn-secondary-gradient"
          :label="$t('dialog.header.send')"
          icon="pi pi-send"
          :iconPos="locale == 'ar' ? 'right' : 'left'"
          @click="sendToAccounting"
        />
      </template>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/hr/rewardRecord.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength, decimal, minValue, maxValue, requiredIf } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue";
import employeeSuggestions from "@/mixins/erp_v2/hr/employees/employeeSuggestions.js";
import rewardSuggestions from "@/mixins/erp_v2/hr/reward/rewardSuggestions.js";
import Reward from "@/components/erp_v2/hr/rewardRecord/formAddOptions/Reward";
import Employee from "@/components/erp_v2/hr/overTimeAndOverDueRecord/formAddOptions/Employee";
import moment from "moment";

import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
  maxValueError,
  inputError,
  minValueError,
  timeDateError,

} from "@/validation/errors.js";
import toast from "@/mixins/global/toast";

export default {
  mixins: [toast, employeeSuggestions, rewardSuggestions],
  components: {
    EditDialog,
    Base,
    Reward,
    Employee,
  },
  props: {
    displayForm: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    isUpdating: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    due_date_options: {
      type: Array,
      required: [],
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
    },
  },
  data() {
    return {
      form: this.value,
    };
  },
  validations: {
    form: {
      employee:{ 
        required,
      },
      reward:{
        required,
      },
      total_amount:{
        minValue:minValue(1),
        maxValue:maxValue(220),
        decimal,
      },
      due_date:{},
      date:{
        required: requiredIf(function () {
          if (this.form.due_date == 1) {
            return true;
          }
          return false;
        }),

        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      serial_code:{},
      notes: {
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
    },
  },

  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    maxValueError,
    inputError,
    minValueError,
  timeDateError,

    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.$emit("save");
        this.$v.form.$reset();
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
    },
    /////////////////////////////
    sendToAccounting() {
      console.log("sendToAccounting");
    },
    inputDate(){
      if (this.form.due_date == 2 ){
        this.form.date =null;
      }else if(this.form.due_date ==1){
        this.form.date =this.form.date;
      }
    }


  },
};
</script>