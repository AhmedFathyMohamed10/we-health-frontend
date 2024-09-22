<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      @deleteRecord="deleteRecord"
      :isLoading="isLoading"
      :header="header"
      :min-width="'80'"
      :max-width="'100'" 
      :icon="'pi pi-calendar'"
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
        <div class="col-md-4">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.employee.label")
                  }}</label>
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
                    <!-- <small class="p-invalid" v-else-if="!$v.form.employee.minLength && $v.form.employee.$error">
                      {{ maxLengthError($t("form.employee.label"),$v.form.employee.$params.minLength.min) }}
                    </small>
                    <small class="p-invalid" v-else-if="!$v.form.employee.maxLength && $v.form.employee.$error">
                      {{ minLengthError($t("form.employee.label"), $v.form.employee.$params.maxLength.max) }}
                    </small> -->
                    <!-- <small class="p-invalid" v-else-if="!$v.form.employee.notContainsHtmlTags && $v.form.employee.$error">
                      {{ htmlTagsError($t("form.employee.label")) }}
                    </small> -->
                  </div>
                </div>
              </div>
            </div>
      
          </Base>
        </div>
        <div class="col-md-4">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.new_salary.label")
                  }}</label>
                  <input
                    type="number"
                    v-model="form.new_salary"
                    :placeholder="$t('form.new_salary.placeholder')"
                    class="form-control"
                    :class="{'is-invalid': $v.form.new_salary.$error,}"
                  />
                  <div v-if="!$v.form.new_salary.required && $v.form.new_salary.$error" class="invalid-feedback">
                    {{ requiredError($t("form.new_salary.label")) }}
                  </div>
                  <div class="invalid-feedback" v-else-if="!$v.form.new_salary.decimal && $v.form.new_salary.$invalid">
                    {{ inputError($t("form.new_salary.label"))}}
                  </div> 
                  <div class="invalid-feedback" v-else-if="!$v.form.new_salary.minValue && $v.form.new_salary.$invalid">
                    {{minValueError($t("form.new_salary.label"), $v.form.new_salary.$params.minValue.min )}}
                  </div>
                  <div class="invalid-feedback" v-else-if="!$v.form.new_salary.maxValue &&$v.form.new_salary.$invalid" >
                    {{maxValueError($t("form.new_salary.label"),$v.form.new_salary.$params.maxValue.max)}}
                  </div> 
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-md-4">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.due_date.label")
                }}</label>
                <Calendar 
                  v-model="form.due_date" 
                  :showIcon="true" dateFormat="yy-mm-dd"
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
      </div>

      <div class="row">
        <div class="col-12">
          <Base>
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.reason.label")
                }}</label>
                  <textarea 
                    class="form-control"
                    rows="5" cols="30" 
                    v-model="form.reason"
                    :placeholder="$t('form.reason.placeholder')"
                    :class="{'is-invalid':$v.form.reason.$error}">
                  </textarea>
                  <div v-if="!$v.form.reason.minLength && $v.form.reason.$error" class="invalid-feedback">
                    {{maxLengthError($t("form.reason.label"),$v.form.reason.$params.minLength.min)}}
                  </div>
                  <div v-else-if="!$v.form.reason.maxLength && $v.form.reason.$error" class="invalid-feedback">
                    {{minLengthError($t("form.reason.label"),$v.form.reason.$params.maxLength.max) }}
                  </div>
                  <div v-else-if="!$v.form.reason.notContainsHtmlTags && $v.form.reason.$error" class="invalid-feedback">
                    {{ htmlTagsError($t("form.reason.label")) }}
                  </div>
              </div>
            </Base>
          </div>
      </div>
     
    </EditDialog>
 
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/hr/salaryRaise.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength, decimal, minValue, maxValue } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue";
import employeeSuggestions from "@/mixins/erp_v2/hr/employees/employeeSuggestions.js";

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
  mixins: [ toast, employeeSuggestions],
  components: {
    EditDialog,
    Base,
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
      employee: {
        required,
        // minLength: minLength(4),
        // maxLength: maxLength(255),
        // notContainsHtmlTags: (value) => {
        //   return notContainsHtmlTags(value);
        // },
      },
      new_salary: {
        required,
        minValue:minValue(1),
        maxValue:maxValue(5000),
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
      reason: {
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
    openDeleteDialog() {
      this.displayDeleteDialog = true;
    },

    deleteRecord() {
      this.displayDeleteDialog = false;
      this.$emit("deleteGroup", this.form);
    },

    closeDeleteDialog() {
      this.displayDeleteDialog = false;
    },
  },
};
</script>
