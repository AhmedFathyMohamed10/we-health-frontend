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
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{ $t("form.name.label") }}</label>
            <input
              type="text"
              v-model="form.name"
              :placeholder="$t('form.name.placeholder')"
              class="form-control"
              :class="{ 'is-invalid': $v.form.name.$error }"
            />
            <div
              v-if="!$v.form.name.required && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.name.label")) }}
            </div>
            <div
              v-else-if="!$v.form.name.minLength && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.name.label"),
                  $v.form.name.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="!$v.form.name.maxLength && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("form.name.label"),
                  $v.form.name.$params.maxLength.max
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
            <div
              class="invalid-feedback"
              v-if="$v.form.mobile.$error && !$v.form.mobile.numeric"
            >
              {{ numericError($t("form.mobile.label")) }}
            </div>
            <div
              v-else-if="!$v.form.mobile.notContainsHtmlTags && $v.form.mobile.$error"
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.mobile.label")) }}
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
              $t("form.website.label")
            }}</label>
            <input
              type="text"
              v-model="form.website"
              :placeholder="$t('form.website.placeholder')"
              class="form-control"
              :class="{ 'is-invalid': $v.form.website.$error }"
            />
            <div
              class="invalid-feedback"
              v-if="$v.form.website.$error && !$v.form.website.url"
            >
              {{ urlError($t("form.website.label")) }}
            </div>
            <div
              v-else-if="!$v.form.website.notContainsHtmlTags && $v.form.website.$error"
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.website.label")) }}
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
<i18n src="@/lang/erp/insuranceAgents/insuranceAgents.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import {
  notContainsHtmlTags,
} from "@/validation/customValidators";
import {
  required,
  minLength,
  maxLength,
  email,
  url,
  numeric,
} from "vuelidate/lib/validators";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
  numericError,
  emailError,
  urlError,
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
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      mobile: {
        numeric,
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
      website: {
        url,
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
    urlError,
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
