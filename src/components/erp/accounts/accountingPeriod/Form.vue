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
        <div class="col-12">
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
              v-else-if="
                !$v.form.name.notContainsHtmlTags && $v.form.name.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.name.label")) }}
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
          </div>
        </div>
        <!-- periodFrom -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.periodFrom.label")
            }}</label>
            <Calendar
              v-model="form.periodFrom"
              dateFormat="yy-mm-dd"
              :placeholder="$t('form.periodFrom.placeholder')"
              :class="{
                'p-invalid': $v.form.periodFrom.$error,
              }"
            />
            <!-- showTime hourFormat="12" -->
            <div
              v-if="
                !$v.form.periodFrom.required && $v.form.periodFrom.$error
              "
              class="p-error"
            >
              {{ requiredError($t("form.periodFrom.label")) }}
            </div>
            <div
              class="p-error"
              v-else-if="
                $v.form.periodFrom.$error &&
                !$v.form.periodFrom.validDateTime
              "
            >
              {{ timeDateError($t()) }}
            </div>
          </div>
        </div>
        <!-- periodTo -->
        <div class="col-md-6 ">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.periodTo.label")
            }}</label>
            <Calendar
              v-model="form.periodTo"
              dateFormat="yy-mm-dd"
              :placeholder="$t('form.periodTo.placeholder')"
              :class="{
                'p-invalid': $v.form.periodTo.$error,
              }"
            />
            <div
              v-if="!$v.form.periodTo.required && $v.form.periodTo.$error"
              class="p-error"
            >
              {{ requiredError($t("form.periodTo.label")) }}
            </div>
            <div
              class="p-error"
              v-else-if="
                $v.form.periodTo.$error && !$v.form.periodTo.validDateTime
              "
            >
              {{ timeDateError($t()) }}
            </div>
          </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/accounts/AccountingPeriod.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import moment from "moment";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
  timeDateError,
} from "@/validation/errors.js";
import { mapActions } from "vuex";

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
      periodTo: {
        required,
        validDateTime: (value, vm) => {
          if (value == null || value == "") {
            return true;
          } else {
            // return moment(value, "YYYY-MM-DD", true).isValid();
            return moment(value, "YYYY-MM-DD", true).isValid();

          }
          // &&
                // moment(value, "YYYY-MM-DD").isBefore(moment(vm.periodFrom, "YYYY-MM-DD"));
        }
      },
      periodFrom: {
        required,
        validDateTime: (value, vm) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();

            // return moment(value, "YYYY-MM-DD", true).isValid() ; 
          }
        }
      },

    },
  },
  methods: {
    timeDateError,
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
