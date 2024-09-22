<template>
  <div class="form">
    <EditDialog 
      :display="displayForm" 
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm" 
      :min-width="'80'"
      :max-width="'100'"
      :isLoading="isLoading" 
      :header="header"
    >
      <slot></slot>
      <div class="row" v-if="error">
        <div class="col-12">
          <div class="errors" v-if="typeof error === 'object'">
            <Message severity="error" v-for="(value, key) in error" :key="key" :closable="false">
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ key }} : {{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <Base>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.company_name_en.label")
                }}</label>
                <input type="text" v-model="form.company_name_en" :placeholder="$t('form.company_name_en.placeholder')"
                  class="form-control" :class="{
                    'is-invalid': $v.deliveryCompanyObject.company_name_en.$error,
                  }" />
                <div v-if="!$v.deliveryCompanyObject.company_name_en.required && $v.deliveryCompanyObject.company_name_en.$error" class="invalid-feedback">
                  {{ requiredError($t("form.company_name_en.label")) }}
                </div>
                <div v-else-if="!$v.deliveryCompanyObject.company_name_en.minLength && $v.deliveryCompanyObject.company_name_en.$error
                  " class="invalid-feedback">
                  {{
                    maxLengthError(
                      $t("form.company_name_en.label"),
                      $v.deliveryCompanyObject.company_name_en.$params.minLength.min
                    )
                  }}
                </div>
                <div v-else-if="!$v.deliveryCompanyObject.company_name_en.maxLength && $v.deliveryCompanyObject.company_name_en.$error
                    " class="invalid-feedback">
                  {{
                    minLengthError(
                      $t("form.company_name_en.label"),
                      $v.deliveryCompanyObject.company_name_en.$params.maxLength.max
                    )
                  }}
                </div>
                <div v-else-if="!$v.deliveryCompanyObject.company_name_en.notContainsHtmlTags &&
                    $v.deliveryCompanyObject.company_name_en.$error
                    " class="invalid-feedback">
                  {{ htmlTagsError($t("form.company_name_en.label")) }}
                </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.company_name_ar.label")
              }}</label>
              <input type="text" v-model="form.company_name_ar" 
              :placeholder="$t('form.company_name_ar.placeholder')"
            
                class="form-control" :class="{
                  'is-invalid': $v.deliveryCompanyObject.company_name_ar.$error,
                }"/>
              <div v-if="!$v.deliveryCompanyObject.company_name_ar.required && $v.deliveryCompanyObject.company_name_ar.$error" class="invalid-feedback">
                {{ requiredError($t("form.company_name_ar.label")) }}
              </div>
              <div v-else-if="!$v.deliveryCompanyObject.company_name_ar.minLength && $v.deliveryCompanyObject.company_name_ar.$error" class="invalid-feedback">
                {{
                  maxLengthError(
                    $t("form.company_name_en.label"),
                    $v.deliveryCompanyObject.company_name_ar.$params.minLength.min
                  )
                }}
              </div>
              <div v-else-if="!$v.deliveryCompanyObject.company_name_ar.maxLength && $v.deliveryCompanyObject.company_name_ar.$error
                  " class="invalid-feedback">
                {{
                  minLengthError(
                    $t("form.company_name_en.label"),
                    $v.deliveryCompanyObject.company_name_ar.$params.maxLength.max
                  )
                }}
              </div>
              <div v-else-if="!$v.deliveryCompanyObject.company_name_ar.notContainsHtmlTags &&
                  $v.deliveryCompanyObject.company_name_en.$error
                  " class="invalid-feedback">
                {{ htmlTagsError($t("form.company_name_en.label")) }}
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.serial.label")
              }}</label>
              <input
                type="text" 
                v-model="form.serial" 
                class="form-control"
                :placeholder="$t('form.serial.placeholder')"
              />
            </div>
          </div>
        </div>
      </Base>

      <div class="row">
        <div class="col-12">
          <CustomTabs 
            class="text-center" 
            v-model="selectedTab" 
            :tabs="tabs"  
            >
          </CustomTabs>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.city.label")}}</label>
              <Dropdown 
                v-model="form.city" 
                :options="cityOptions"
                optionLabel="name" 
                optionValue="id"
                :placeholder="$t('form.city.placeholder')" 
                :class="{'p-invalid': $v.deliveryCompanyObject.city.$error, }"
              />
              <div v-if="!$v.deliveryCompanyObject.city.required && $v.deliveryCompanyObject.city.$error" class="p-error">
                {{ requiredError($t("form.city.label")) }}
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <div class="form-label">{{$t('form.phone_number.label')}}</div>
                <PhoneNumberInput 
                  v-model="form.phone_number"
                  :class="{'p-invalid':$v.deliveryCompanyObject.phone_number.$error}"
                  default-country-code="EG"
                  />            
                  <!-- color="#56C596" -->
                  <!-- valid-color="#2B634B" -->
                  <!-- @update="resultsExample = $event"
                  :translations="translations[locale]" 
                  :error="hasError" -->

            <div class="errors">
              <small class="p-invalid" v-if="$v.deliveryCompanyObject.phone_number.$error && !$v.deliveryCompanyObject.phone_number.required">
              {{requiredError($t('form.phone.label')) }}
              </small>  
              <small class="p-invalid" v-else-if="$v.deliveryCompanyObject.phone_number.$invalid && !$v.deliveryCompanyObject.phone_number.maxLength">
                {{ $t('form.phone.hint.content') }}
              </small>  
            </div>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.email_address.label") }}</label>
              <input
                type="text"
                v-model="form.email_address"
                :placeholder="$t('form.email_address.placeholder')"
                class="form-control"
                :class="{ 'is-invalid': $v.deliveryCompanyObject.email_address.$error,  }"
              />
              <div class="error">
                <small class="p-invalid" v-if="$v.deliveryCompanyObject.email_address.$error && !$v.deliveryCompanyObject.email_address.email" >
                  {{ emailError($t("form.email.label")) }}
                </small>
                <small class="p-invalid"  v-else-if=" !$v.deliveryCompanyObject.email_address.notContainsHtmlTags && $v.deliveryCompanyObject.email_address.$error ">
                  {{ htmlTagsError($t()) }}
                </small>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.address.label") }}</label>
              <input
                type="text"
                v-model="form.address"
                :placeholder="$t('form.address.placeholder')"
                class="form-control"
                :class="{ 'is-invalid': $v.deliveryCompanyObject.address.$error,  }"
              />
              <div class="error">
                <small class="p-invalid" v-if="!$v.deliveryCompanyObject.address.maxLength && $v.deliveryCompanyObject.address.$error" >
                  {{ maxLengthError( $t("form.address.label"), $v.deliveryCompanyObject.address.$params.maxLength.max ) }}
                </small>
                <small class="p-invalid" v-if="!$v.deliveryCompanyObject.address.minLength && $v.deliveryCompanyObject.address.$error"  >
                  {{minLengthError( $t("form.name.label"),$v.deliveryCompanyObject.address.$params.minLength.min)}}
                </small>
                <small class="p-invalid"  v-else-if=" !$v.deliveryCompanyObject.address.notContainsHtmlTags && $v.deliveryCompanyObject.address.$error ">
                  {{ htmlTagsError($t()) }}
                </small>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.other_phone_number.label") }}</label>
              <input
                type="text"
                v-model="form.other_phone_number"
                :placeholder="$t('form.other_phone_number.placeholder')"
                class="form-control"
                :class="{ 'is-invalid': $v.deliveryCompanyObject.other_phone_number.$error,  }"
              />
              <div class="error">
                <small class="p-invalid" v-if="!$v.deliveryCompanyObject.other_phone_number.maxLength && $v.deliveryCompanyObject.other_phone_number.$error" >
                  {{ maxLengthError( $t("form.other_phone_number.label"), $v.deliveryCompanyObject.other_phone_number.$params.maxLength.max ) }}
                </small>
                <small class="p-invalid" v-if="!$v.deliveryCompanyObject.other_phone_number.minLength && $v.deliveryCompanyObject.other_phone_number.$error"  >
                  {{minLengthError( $t("form.name.label"),$v.deliveryCompanyObject.other_phone_number.$params.minLength.min)}}
                </small>
                <small  class="p-invalid" v-if="!$v.deliveryCompanyObject.other_phone_number.numeric && $v.deliveryCompanyObject.other_phone_number.$error " >
                  {{ numericError($t("form.other_phone_number.label")) }}
                </small>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Base :title="$t('delivery.vehicle_details')" :showAction="true">
        <div class="row">
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.vehicle_type.label")}}</label>
              <Dropdown 
                v-model="form.vehicle_type" 
                :options="vehicleTypeOptions"
                optionLabel="name" 
                optionValue="id"
                :placeholder="$t('form.vehicle_type.placeholder')" 
                :class="{'p-invalid': $v.deliveryCompanyObject.vehicle_type.$error, }"
              />
              <div v-if="!$v.deliveryCompanyObject.vehicle_type.required && $v.deliveryCompanyObject.vehicle_type.$error" class="p-error">
                {{ requiredError($t("form.vehicle_type.label")) }}
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.vehicle_license.label") }}</label>
              <input
                type="text"
                v-model="form.vehicle_license"
                :placeholder="$t('form.vehicle_license.placeholder')"
                class="form-control"
                :class="{ 'is-invalid': $v.deliveryCompanyObject.vehicle_license.$error,  }"
              />
              <div v-if="!$v.deliveryCompanyObject.vehicle_license.minLength && $v.deliveryCompanyObject.vehicle_license.$error" class="invalid-feedback">
                {{
                  maxLengthError(
                    $t("form.vehicle_license.label"),
                    $v.deliveryCompanyObject.vehicle_license.$params.minLength.min
                  )
                }}
              </div>
              <div v-else-if="!$v.deliveryCompanyObject.vehicle_license.maxLength && $v.deliveryCompanyObject.vehicle_license.$error
                  " class="invalid-feedback">
                {{
                  minLengthError(
                    $t("form.vehicle_license.label"),
                    $v.deliveryCompanyObject.vehicle_license.$params.maxLength.max
                  )
                }}
              </div>
              <div v-else-if="!$v.deliveryCompanyObject.vehicle_license.notContainsHtmlTags &&
                  $v.deliveryCompanyObject.vehicle_license.$error
                  " class="invalid-feedback">
                {{ htmlTagsError($t("form.vehicle_license.label")) }}
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.expiration_date.label") }}</label>
              <Calendar 
                v-model="form.expiration_date" 
                :showIcon="true"
                dateFormat="yy-mm-dd"
                :placeholder="$t('form.expiration_date.placeholder')" 
                :class="{'p-invalid': $v.deliveryCompanyObject.expiration_date.$error,}"
              />
              <div v-if="!$v.deliveryCompanyObject.expiration_date.required && $v.deliveryCompanyObject.expiration_date.$error" class="p-error">
                {{ requiredError($t("form.expiration_date.label")) }}
              </div>
              <div class="p-error" v-if="$v.deliveryCompanyObject.expiration_date.$error && !$v.deliveryCompanyObject.expiration_date.validDateTime">
                {{ timeDateError($t()) }}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.personal_license.label") }}</label>
              <input
                type="text"
                v-model="form.personal_license"
                :placeholder="$t('form.personal_license.placeholder')"
                class="form-control"
                :class="{ 'is-invalid': $v.deliveryCompanyObject.personal_license.$error,  }"
              />
              <div v-if="!$v.deliveryCompanyObject.personal_license.minLength && $v.deliveryCompanyObject.personal_license.$error" class="invalid-feedback">
                {{
                  maxLengthError(
                    $t("form.personal_license.label"),
                    $v.deliveryCompanyObject.personal_license.$params.minLength.min
                  )
                }}
              </div>
              <div v-else-if="!$v.deliveryCompanyObject.personal_license.maxLength && $v.deliveryCompanyObject.personal_license.$error
                  " class="invalid-feedback">
                {{
                  minLengthError(
                    $t("form.personal_license.label"),
                    $v.deliveryCompanyObject.personal_license.$params.maxLength.max
                  )
                }}
              </div>
              <div v-else-if="!$v.deliveryCompanyObject.personal_license.notContainsHtmlTags &&
                  $v.deliveryCompanyObject.personal_license.$error
                  " class="invalid-feedback">
                {{ htmlTagsError($t("form.personal_license.label")) }}
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.expiration_date.label") }}</label>
              <Calendar 
                v-model="form.expiration_date" 
                :showIcon="true"
                dateFormat="yy-mm-dd"
                :placeholder="$t('form.expiration_date.placeholder')" 
                :class="{'p-invalid': $v.deliveryCompanyObject.expiration_date.$error,}"
              />
              <div v-if="!$v.deliveryCompanyObject.expiration_date.required && $v.deliveryCompanyObject.expiration_date.$error" class="p-error">
                {{ requiredError($t("form.expiration_date.label")) }}
              </div>
              <div class="p-error" v-if="$v.deliveryCompanyObject.expiration_date.$error && !$v.deliveryCompanyObject.expiration_date.validDateTime">
                {{ timeDateError($t()) }}
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.national_id.label") }}</label>
              <input
                type="text"
                v-model="form.national_id"
                :placeholder="$t('form.national_id.placeholder')"
                class="form-control"
                :class="{ 'is-invalid': $v.deliveryCompanyObject.national_id.$error,  }"
              />
              <div v-if="!$v.deliveryCompanyObject.national_id.minLength && $v.deliveryCompanyObject.national_id.$error" class="invalid-feedback">
                {{
                  maxLengthError(
                    $t("form.national_id.label"),
                    $v.deliveryCompanyObject.national_id.$params.minLength.min
                  )
                }}
              </div>
              <div v-else-if="!$v.deliveryCompanyObject.national_id.maxLength && $v.deliveryCompanyObject.national_id.$error
                  " class="invalid-feedback">
                {{
                  minLengthError(
                    $t("form.national_id.label"),
                    $v.deliveryCompanyObject.national_id.$params.maxLength.max
                  )
                }}
              </div>
              <div v-else-if="!$v.deliveryCompanyObject.national_id.notContainsHtmlTags &&
                  $v.deliveryCompanyObject.national_id.$error
                  " class="invalid-feedback">
                {{ htmlTagsError($t("form.national_id.label")) }}
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.expiration_date.label") }}</label>
              <Calendar 
                v-model="form.expiration_date" 
                :showIcon="true"
                dateFormat="yy-mm-dd"
                :placeholder="$t('form.expiration_date.placeholder')" 
                :class="{'p-invalid': $v.deliveryCompanyObject.expiration_date.$error,}"
              />
              <div v-if="!$v.deliveryCompanyObject.expiration_date.required && $v.deliveryCompanyObject.expiration_date.$error" class="p-error">
                {{ requiredError($t("form.expiration_date.label")) }}
              </div>
              <div class="p-error" v-if="$v.deliveryCompanyObject.expiration_date.$error && !$v.deliveryCompanyObject.expiration_date.validDateTime">
                {{ timeDateError($t()) }}
              </div>
            </div>
          </div>
        </div>
      </Base>
  </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp_v2/invoices/deliveryCompany.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import Base from "@/components/global/utilities/Base.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";

import deliveryCompanyObject from "@/mixins/erp_v2/invoices/deliveryCompany/deliveryValidation.js";
import {
  htmlTagsError,
  requiredError,
  inputError,
  minLengthError,
  maxLengthError,
  numericError,
  emailError,
  timeDateError,
} from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
    Base,
    CustomTabs,
  },
  mixins: [deliveryCompanyObject],
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
    isUpdating: {
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
      selectedTab: "insert",
      tabs: [
        { en: "contact", ar: "أدخل", key: "insert" },
        { en: "contract", ar: "تحميل", key: "upload" },
      ],
    
      form: this.value,
    };
  },
   computed: {
    shiftOptions() {
      if (this.$store.getters["erp_v2/hr/shiftDefinition/getListResponse"]){
        return  this.$store.getters["erp_v2/hr/shiftDefinition/getListResponse"].results;
      }
      else return [];
    },
  },
  created() {
    if (!this.shiftOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp_v2/hr/shiftDefinition/list", params);
    }
  },
  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    inputError,
    numericError,
    emailError,
    timeDateError,
    saveForm() {
      this.$v.attendanceObject.$touch();
      if (!this.$v.attendanceObject.$invalid) {
        this.$emit("save");
        this.$v.attendanceObject.$reset();
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.attendanceObject.$reset();
    },
  },
};
</script>