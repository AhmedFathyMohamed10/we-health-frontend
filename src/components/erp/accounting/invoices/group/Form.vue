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
        <div class="col-md-12">
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
            <div v-else-if="!$v.form.name.minLength && $v.form.name.$error"  class="invalid-feedback">
              {{ maxLengthError($t("form.name.label"),$v.form.name.$params.minLength.min) }}
            </div>
            <div v-else-if="!$v.form.name.maxLength && $v.form.name.$error" class="invalid-feedback">
              {{ minLengthError($t("form.name.label"),$v.form.name.$params.maxLength.max )}}
            </div>
            <div
              v-else-if="!$v.form.name.notContainsHtmlTags && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.name.label")) }}
            </div>
          </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
              <label class="form-label">{{ $t("form.description.label")}}</label>
              <textarea
                class="form-control"
                rows="5"
                cols="30"
                v-model="form.description"
                :placeholder="$t('form.description.placeholder')"
                :class="{'is-invalid': $v.form.description.$error}"
                ></textarea>
              <div v-if="!$v.form.description.notContainsHtmlTags && $v.form.description.$error" class="invalid-feedback">
                {{ htmlTagsError($t("form.description.label")) }}
              </div>
              <div v-else-if="!$v.form.description.minLength && $v.form.description.$error"  class="invalid-feedback">
                {{ maxLengthError($t("form.description.label"),$v.form.description.$params.minLength.min) }}
              </div>
            </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/accounting/invoices/group.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import {notContainsHtmlTags,} from "@/validation/customValidators";
import {htmlTagsError,requiredError,minLengthError,maxLengthError} from "@/validation/errors.js";
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
  computed:{  },
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
      description: {
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
    },
  },
  created() {  },
  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
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
