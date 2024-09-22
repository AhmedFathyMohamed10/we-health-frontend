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
          <div class="col-md-6 col-lg-6">
            <div class="form-group treatment-program">
              <label class="form-label">{{
                $t("form.name.label")
              }}</label>
              <div class="p-inputgroup">
                <span
                  class="p-inputgroup-addon"
                  :class="{ 'p-invalid': $v.form.name.$error }"
                >
                  <i class="mdi mdi-pill"></i>
                </span>
                <AutoComplete
                  v-model="form.name"
                  :suggestions="providersParams.suggestions"
                  :class="{ 'p-invalid': $v.form.name.$error  }"
                  field="fullname"
                  :placeholder="$t('form.name.placeholder')"
                  @complete="search($event, providersParams)"
                />
              </div>
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="
                    $v.form.name.$error &&
                    !$v.form.name.validator
                  "
                >
                  {{ inputError($t("form.name.label")) }}
                </small>
                <small
                class="p-invalid"
                v-if="
                  $v.form.name.$error &&
                  !$v.form.name.maxLength
                "
              >
                {{ maxLengthError($t("form.name.label"),$v.form.name.$params.maxLength.max) }}
              </small>   
               <small
              class="p-invalid"
              v-if="
                $v.form.name.$error &&
                !$v.form.name.minLength
              "
            >
            {{
              minLengthError(
                $t("form.job_title.label"),
                $v.form.name.$params.minLength.min
              )
            }}
            </small>
                <small
                  class="p-invalid"
                  v-else-if="
                    $v.form.name.$error &&
                    !$v.form.name.required
                  "
                >
                  {{ requiredError($t("form.name.label")) }}
                </small>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.mobile.label")
              }}</label>
              <input
                type="tel"
                v-model="form.mobile"
                :placeholder="$t('form.mobile.placeholder')"
                class="form-control"
                :class="{ 'is-invalid': $v.form.mobile.$error }"
              />
              <div class="invalid-feedback"
                v-if="$v.form.mobile.$error && !$v.form.mobile.numeric" >
                {{ numericError($t("form.mobile.label")) }}
              </div>
              <div v-else-if="!$v.form.mobile.notContainsHtmlTags && $v.form.mobile.$error"
               class="invalid-feedback"
              >
                {{ htmlTagsError($t("form.mobile.label")) }}
              </div>
              <div
              v-else-if="!$v.form.mobile.required && $v.form.mobile.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.mobile.label")) }}
            </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.email.label")
              }}</label>
              <input
                type="email"
                v-model="form.email"
                :placeholder="$t('form.email.placeholder')"
                class="form-control"
                :class="{ 'is-invalid': $v.form.email.$error }"
              />
              <div
                class="invalid-feedback"
                v-if="$v.form.email.$error && !$v.form.email.email"
              >
                {{ emailError($t("form.email.label")) }}
              </div>
              <div
                v-else-if="!$v.form.email.notContainsHtmlTags && $v.form.email.$error"
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("form.email.label")) }}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.address.label")
              }}</label>
              <input
                type="text"
                v-model="form.address"
                :placeholder="$t('form.address.placeholder')"
                class="form-control"
                :class="{ 'is-invalid': $v.form.address.$error }"
              />
              <div
                v-if="!$v.form.address.notContainsHtmlTags && $v.form.address.$error"
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("form.address.label")) }}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <div class="field-checkbox d-flex">
                <Checkbox
                  inputId="binary"
                  class="me-2"
                  v-model="form.status"
                  :binary="true"
                  :trueValue="1"
                  :falseValue="2"
                />
                <label for="binary">{{ $t("form.status.label") }}</label>
              </div>
            </div>
          </div>
        </div>
      </EditDialog>
    </div>
  </template>
  <i18n src="@/lang/erp/providers/Provider.json"></i18n>
  <script>
  import EditDialog from "@/components/global/utilities/EditDialog.vue";
  import ProviderOptions from "@/mixins/erp/providers/ProviderOptions.js";
  import {
    notContainsHtmlTags,
  } from "@/validation/customValidators";
  import {
    required,
    minLength,
    maxLength,
    email,
    numeric,
  } from "vuelidate/lib/validators";
  import {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    emailError,
  } from "@/validation/errors.js";

  export default {
    mixins: [ProviderOptions],
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
      },
    },
    data() {
      return {
        form: this.value,
      };
    },
    validations: {
      form: {
        name: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(255),
          validator: (value) => {
                if (typeof value == "object" || value == null || value == "")
                  return true;
                else {
                  return (
                    value.length > 0 &&
                    value.length < 255 &&
                    required &&
                    notContainsHtmlTags(value)
                  );
                }
              },
        },
        mobile: {
          numeric,
          required,
          notContainsHtmlTags: (value) => {
            return notContainsHtmlTags(value);
          },
        },
        email: {
          email,
          notContainsHtmlTags: (value) => {
            return notContainsHtmlTags(value);
          },
        },
        address: {
          notContainsHtmlTags: (value) => {
            return notContainsHtmlTags(value);
          },
        },
        status: {},
      },
    },
  
    methods: {
      htmlTagsError,
      requiredError,
      minLengthError,
      maxLengthError,
      numericError,
      emailError,
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
  