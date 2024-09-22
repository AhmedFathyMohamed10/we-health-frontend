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
        <div :class="isUpdating ? 'col-md-6 col-lg-4' : 'col-md-6'">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.over_time_name.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.over_time_name"
                    :placeholder="$t('form.over_time_name.placeholder')"
                    class="form-control"
                    :class="{ 'is-invalid': $v.form.over_time_name.$error }"
                  />
                  <div
                    v-if="!$v.form.over_time_name.required && $v.form.over_time_name.$error"
                    class="invalid-feedback"
                  >
                    {{ requiredError($t("form.over_time_name.label")) }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.over_time_name.minLength && $v.form.over_time_name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      maxLengthError(
                        $t("form.over_time_name.label"),
                        $v.form.over_time_name.$params.minLength.min
                      )
                    }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.over_time_name.maxLength && $v.form.over_time_name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      minLengthError(
                        $t("form.over_time_name.label"),
                        $v.form.over_time_name.$params.maxLength.max
                      )
                    }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.over_time_name.notContainsHtmlTags &&
                      $v.form.over_time_name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{ htmlTagsError($t("form.over_time_name.label")) }}
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
        <div class="col-md-6 col-lg-4" v-if="isUpdating">
          <Base>
            <div class="row">
              <div class="col-12">
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
        <div :class="isUpdating ? 'col-md-6 col-lg-4' : 'col-md-6'">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.hour_equivalency.label")
                  }}</label>
                  <InputGroupWrapper>
                    <InputText 
                      v-model.trim="form.hour_equivalency" 
                      type="number" 
                      :placeholder="$t('input.value.placeholder')" 
                      :class="{'p-invalid': $v.form.hour_equivalency.$error}"
                      />
                    <InputText type="number" 
                      v-model="form.hour_equivalency_money" 
                      :placeholder="$t('form.hour_equivalency.label')"
                      :class="{'p-invalid': $v.form.hour_equivalency.$error}"
                      class="custom-group"
                      />
                    <!-- <InputText
                      type="number" 
                      v-model="form.hour_equivalency_money" 
                      :placeholder="$t('form.hour_equivalency.label')"
                      :class="{'p-invalid': $v.form.hour_equivalency.$error}"
                      class="form-control input-ratio" 
                    /> -->
                  </InputGroupWrapper>
                <div class="p-error" v-if="!$v.form.hour_equivalency.required && $v.form.hour_equivalency.$error">
                  {{ requiredError( $t("form.hour.label") ) }}
                </div>
                <div class="p-error" v-else-if="!$v.form.hour_equivalency.decimal && $v.form.hour_equivalency.$invalid">
                    {{ inputError($t("form.hour.label"))}}
                </div> 
                <div class="p-error" v-else-if="!$v.form.hour_equivalency.minValue && $v.form.hour_equivalency.$invalid">
                  {{minValueError($t("form.hour.label"), $v.form.hour_equivalency.$params.minValue.min )}}
                </div>
                <div class="p-error" v-else-if="!$v.form.hour_equivalency.maxValue &&$v.form.hour_equivalency.$invalid" >
                  {{maxValueError($t("form.hour.label"),$v.form.hour_equivalency.$params.maxValue.max)}}
                </div> 
                <div class="p-error" v-if="!$v.form.hour_equivalency_money.required && $v.form.hour_equivalency_money.$error">
                  {{ requiredError( $t("form.equivalency.label") ) }}
                </div>
                <div class="p-error" v-else-if="!$v.form.hour_equivalency_money.decimal && $v.form.hour_equivalency_money.$invalid">
                    {{ inputError($t("form.equivalency.label"))}}
                </div> 
                <div class="p-error" v-else-if="!$v.form.hour_equivalency_money.minValue && $v.form.hour_equivalency_money.$invalid">
                  {{minValueError($t("form.equivalency.label"), $v.form.hour_equivalency_money.$params.minValue.min )}}
                </div>
                <div class="p-error" v-else-if="!$v.form.hour_equivalency_money.maxValue &&$v.form.hour_equivalency_money.$invalid" >
                  {{maxValueError($t("form.equivalency.label"),$v.form.hour_equivalency_money.$params.maxValue.max)}}
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
<i18n src="@/lang/erp_v2/hr/overTimeAndOverDue.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength, decimal, minValue, maxValue} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue";
import departmentSuggestions from "@/mixins/erp_v2/hr/department/departmentSuggestions.js";
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
import InputGroupWrapper from '@/components/global/UI/inputs/InputGroupWrapper';

export default {
  mixins: [toast, departmentSuggestions],
  components: {
    EditDialog,
    InputGroupWrapper,
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
     
      hour_equivalency:{
        required,
        minValue:minValue(1),
        maxValue:maxValue(220),
        decimal,
      },
      hour_equivalency_money:{  
        required,
        minValue:minValue(1),
        maxValue:maxValue(220),
        decimal,
      },
      over_time_name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
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
  