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
        <div class="col-md-6 col-lg-4">
          <Base>
            <div class="row">
              <div class="col-10 col-lg-9">
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
              <div class="col-2 col-lg-3">
                <Employee></Employee>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-md-6 col-lg-4">
          <Base>
            <div class="row">
              <div class="col-10 col-lg-9">
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.allowance.label") }}</label>
                  <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                    <i class="pi" :class="[typeof form.allowance === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                    <AutoComplete
                    v-model="form.allowance" 
                    :suggestions="allowanceParams.suggestions"
                    :placeholder="$t('form.allowance.placeholder')"
                    @complete="searchAllowance($event, allowanceParams)"
                    field="allowance_name"
                    :forceSelection="true" 
                    :class="{ 'p-invalid': $v.form.allowance.$error }" 
                    />
                  </span>
                  <div class="error">
                    <small class="p-invalid" v-if="!$v.form.allowance.required && $v.form.allowance.$error">
                      {{ requiredError($t("form.allowance.label")) }}
                    </small>
                  </div>
                </div>
              </div>
              <div class="col-2 col-lg-3">
                <Allowance></Allowance>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-md-6 col-lg-4">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.amount.label")
                  }}</label>

                  <input
                    type="number"
                    v-model="form.amount"
                    :placeholder="$t('form.amount.placeholder')"
                    class="form-control"
                    :class="{'is-invalid':$v.form.amount.$error}"
                  />
                  <div class="p-error" v-if="!$v.form.amount.decimal && $v.form.amount.$invalid">
                    {{ inputError($t("form.amount.label"))}}
                  </div> 
                  <div class="p-error" v-else-if="!$v.form.amount.minValue && $v.form.amount.$invalid">
                    {{minValueError($t("form.amount.label"), $v.form.amount.$params.minValue.min )}}
                  </div>
                  <div class="p-error" v-else-if="!$v.form.amount.maxValue &&$v.form.amount.$invalid" >
                    {{maxValueError($t("form.amount.label"),$v.form.amount.$params.maxValue.max)}}
                  </div> 
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-md-6 col-lg-4">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{ $t("form.due_date.label") }}</label>
                  <Calendar 
                    v-model="form.due_date" 
                    :showIcon="true" 
                    dateFormat="yy-mm-dd"
                    :placeholder="$t('form.due_date.placeholder')" 
                    :class="{'p-invalid': $v.form.due_date.$error,}"
                    />
                  <div v-if="!$v.form.due_date.required && $v.form.due_date.$error" class="p-error">
                    {{ requiredError($t("form.due_date.label")) }}
                  </div>
                  <div class="p-error" v-if="$v.form.due_date.$error && !$v.form.due_date.validDateTime">
                    {{ timeDateError($t()) }}
                  </div>
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-md-12 col-lg-8">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.type.label")
                  }}</label>
                  <div
                      class="d-flex flex-wrap custom-radio-button justify-content-between"
                    >
                      <div
                        v-for="option of type_options"
                        :key="option.id"
                        class="field-radiobutton d-flex gap-1 align-items-center"
                      >
                      <RadioButton
                      :id="option.id"
                      name="option"
                      :value="option.id"
                      v-model="form.type"
                      />
                      <label class="mt-2">{{ option[locale] }} </label>
                      </div>
                    </div>
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
                  $t("form.description.label")
                }}</label>
                  <textarea 
                    class="form-control"
                    rows="5" cols="30" 
                    v-model="form.description"
                    :placeholder="$t('form.description.placeholder')"
                    :class="{'is-invalid':$v.form.description.$error}">
                  </textarea>
                  <div v-if="!$v.form.description.minLength && $v.form.description.$error" class="invalid-feedback">
                    {{maxLengthError($t("form.description.label"),$v.form.description.$params.minLength.min)}}
                  </div>
                  <div v-else-if="!$v.form.description.maxLength && $v.form.description.$error" class="invalid-feedback">
                    {{minLengthError($t("form.description.label"),$v.form.description.$params.maxLength.max) }}
                  </div>
                  <div v-else-if="!$v.form.description.notContainsHtmlTags && $v.form.description.$error" class="invalid-feedback">
                    {{ htmlTagsError($t("form.description.label")) }}
                  </div>
              </div>
            </Base>
          </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/hr/allowance.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import moment from "moment";
import { required, minLength, maxLength, decimal, minValue, maxValue } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue";
import employeeSuggestions from "@/mixins/erp_v2/hr/employees/employeeSuggestions.js";
import allowanceSuggestions from "@/mixins/erp_v2/hr/allowanceDefinition/allowanceSuggestions.js";
import Allowance from "@/components/erp_v2/hr/allowance/formAddOptions/Allowance.vue";
import Employee from "@/components/erp_v2/hr/overTimeAndOverDueRecord/formAddOptions/Employee";

import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
  timeDateError,
  maxValueError,
  inputError,
  minValueError,
} from "@/validation/errors.js";
import toast from "@/mixins/global/toast";

export default {
  mixins: [ toast, employeeSuggestions, allowanceSuggestions],
  components: {
    EditDialog,
    Base,
    Allowance,
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
    type_options: {
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
      displayDeleteDialog: false,
      form: this.value,
    };
  },
  validations: {
    form: {
      allowance: {
        required,
      },
      employee: {
        required,
      },
      amount: {
        minValue:minValue(1),
        maxValue:maxValue(220),
        decimal,
      },
      due_date: {
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      description: {
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
    timeDateError,
    maxValueError,
    inputError,
    minValueError,
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
  },
};
</script>
<!-- <style lang="scss" scoped>
/deep/ .p-autocomplete {
    position: initial !important;
}
/deep/.p-input-icon-right .p-autocomplete-input {
    padding-left: 1rem;
}
</style>
   -->