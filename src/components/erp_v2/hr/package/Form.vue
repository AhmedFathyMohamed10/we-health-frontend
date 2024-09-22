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
                    $t("form.package_name.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.package_name"
                    :placeholder="$t('form.package_name.placeholder')"
                    class="form-control"
                    :class="{ 'is-invalid': $v.form.package_name.$error }"
                  />
                  <div
                    v-if="!$v.form.package_name.required && $v.form.package_name.$error"
                    class="invalid-feedback"
                  >
                    {{ requiredError($t("form.package_name.label")) }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.package_name.minLength && $v.form.package_name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      maxLengthError(
                        $t("form.package_name.label"),
                        $v.form.package_name.$params.minLength.min
                      )
                    }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.package_name.maxLength && $v.form.package_name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      minLengthError(
                        $t("form.package_name.label"),
                        $v.form.package_name.$params.maxLength.max
                      )
                    }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.package_name.notContainsHtmlTags &&
                      $v.form.package_name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{ htmlTagsError($t("form.package_name.label")) }}
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
          </div>
          </Base>
        </div>
        <div class="col-md-6 col-lg-4">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.money_per_employee.label")
                  }}</label>

                  <input
                    type="number"
                    v-model="form.money_per_employee"
                    :placeholder="$t('form.money_per_employee.placeholder')"
                    class="form-control"
                    :class="{'is-invalid':$v.form.money_per_employee.$error}"
                  />
                  <div class="p-error" v-if="!$v.form.money_per_employee.required && $v.form.money_per_employee.$error">
                  {{ requiredError( $t("form.money_per_employee.label") ) }}
                </div>
                <div class="p-error" v-else-if="!$v.form.money_per_employee.decimal && $v.form.money_per_employee.$invalid">
                  {{ inputError($t("form.money_per_employee.label"))}}
                </div> 
                <div class="p-error" v-else-if="!$v.form.money_per_employee.minValue && $v.form.money_per_employee.$invalid">
                  {{minValueError($t("form.money_per_employee.label"), $v.form.money_per_employee.$params.minValue.min )}}
                </div>
                <div class="p-error" v-else-if="!$v.form.money_per_employee.maxValue &&$v.form.money_per_employee.$invalid" >
                  {{maxValueError($t("form.money_per_employee.label"),$v.form.money_per_employee.$params.maxValue.max)}}
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
                    $t("form.employee_no.label")
                  }}</label>
                  <input
                    type="number"
                    v-model="form.employee_no"
                    :placeholder="$t('form.employee_no.placeholder')"
                    class="form-control"
                    :class="{'is-invalid': $v.form.employee_no.$error}"
                  />
                <div class="p-error" v-if="!$v.form.employee_no.required && $v.form.employee_no.$error">
                  {{ requiredError( $t("form.employee_no.label") ) }}
                </div>
                <div class="p-error" v-else-if="!$v.form.employee_no.decimal && $v.form.employee_no.$invalid">
                    {{ inputError($t("form.employee_no.label"))}}
                </div> 
                <div class="p-error" v-else-if="!$v.form.employee_no.minValue && $v.form.employee_no.$invalid">
                  {{minValueError($t("form.employee_no.label"), $v.form.employee_no.$params.minValue.min )}}
                </div>
                <div class="p-error" v-else-if="!$v.form.employee_no.maxValue &&$v.form.employee_no.$invalid" >
                  {{maxValueError($t("form.employee_no.label"),$v.form.employee_no.$params.maxValue.max)}}
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
<i18n src="@/lang/erp_v2/hr/package.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength, decimal, minValue, maxValue} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
  maxValueError,
  inputError,
  minValueError,
} from "@/validation/errors.js";
import toast from "@/mixins/global/toast";

export default {
  mixins: [toast],
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
      package_name:{
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      money_per_employee:{  
        required,
        minValue:minValue(1),
        maxValue:maxValue(220),
        decimal,
      },
      employee_no: {
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
    /////////////////////////////
  },
};
</script>
  