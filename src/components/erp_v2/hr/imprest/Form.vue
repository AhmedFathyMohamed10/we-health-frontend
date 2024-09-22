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
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.imprest_reason.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.imprest_reason"
                    :placeholder="$t('form.imprest_reason.placeholder')"
                    class="form-control"
                    :class="{ 'is-invalid': $v.form.imprest_reason.$error }"
                  />
                  <div
                    v-if="!$v.form.imprest_reason.required && $v.form.imprest_reason.$error"
                    class="invalid-feedback"
                  >
                    {{ requiredError($t("form.imprest_reason.label")) }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.imprest_reason.minLength && $v.form.imprest_reason.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      maxLengthError(
                        $t("form.imprest_reason.label"),
                        $v.form.imprest_reason.$params.minLength.min
                      )
                    }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.imprest_reason.maxLength && $v.form.imprest_reason.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      minLengthError(
                        $t("form.imprest_reason.label"),
                        $v.form.imprest_reason.$params.maxLength.max
                      )
                    }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.imprest_reason.notContainsHtmlTags &&
                      $v.form.imprest_reason.$error
                    "
                    class="invalid-feedback"
                  >
                    {{ htmlTagsError($t("form.imprest_reason.label")) }}
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
                  <label for="" class="form-label">{{$t("form.due_date.label")}}</label>
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
        <div class="col-md-6 col-lg-4">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.imprest_amount.label")
                  }}</label>

                  <input
                    type="number"
                    v-model="form.imprest_amount"
                    :placeholder="$t('form.imprest_amount.placeholder')"
                    class="form-control"
                    :class="{'is-invalid':$v.form.imprest_amount.$error}"
                  />
                  <div class="p-error" v-if="!$v.form.imprest_amount.required && $v.form.imprest_amount.$error">
                  {{ requiredError( $t("form.imprest_amount.label") ) }}
                </div>
                <div class="p-error" v-else-if="!$v.form.imprest_amount.decimal && $v.form.imprest_amount.$invalid">
                  {{ inputError($t("form.imprest_amount.label"))}}
                </div> 
                <div class="p-error" v-else-if="!$v.form.imprest_amount.minValue && $v.form.imprest_amount.$invalid">
                  {{minValueError($t("form.imprest_amount.label"), $v.form.imprest_amount.$params.minValue.min )}}
                </div>
                <div class="p-error" v-else-if="!$v.form.imprest_amount.maxValue &&$v.form.imprest_amount.$invalid" >
                  {{maxValueError($t("form.imprest_amount.label"),$v.form.imprest_amount.$params.maxValue.max)}}
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
                  <label for="" class="form-label">{{ $t("form.employee.label") }}</label>
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
            </div>
          </Base>
        </div>
        <div class="col-md-6 col-lg-4" v-if="isUpdating">
          <Base>
          <div class="row">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.saved_account.label")
              }}</label>
                <input
                  type="text"
                  v-model="form.account"
                  :placeholder="$t('form.saved_account.placeholder')"
                  class="form-control"
                  disabled
                  />
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
<i18n src="@/lang/erp_v2/hr/imprest.json"></i18n>

<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength, decimal, minValue, maxValue} from "vuelidate/lib/validators";
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
  timeDateError,
  minValueError,
} from "@/validation/errors.js";
import toast from "@/mixins/global/toast";

export default {
  mixins: [toast, employeeSuggestions],
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
      imprest_reason:{
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      employee:{
        required,
      },
      due_date:{ 
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      imprest_amount:{  
        required,
        minValue:minValue(1),
        maxValue:maxValue(220),
        decimal,
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
    maxValueError,
    inputError,
    timeDateError,
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
    sendToAccounting() {
      console.log("pass")
    },
    /////////////////////////////
  },
};
</script>
<!-- <style lang="scss" scoped>
/deep/ .p-autocomplete {
    position: initial !important;
}
/deep/.p-input-icon-right .p-autocomplete-input {
    padding-left: 1rem;
} -->
<!-- </style> -->