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
        <div class="col-lg-6 col-md-12">
          <div class="form-group">
            <label for="" class="form-label">{{ $t("form.name.label") }}</label>
            <input
              type="text"
              v-model="form.name"
              :placeholder="$t('form.name.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.name.$error,
              }"
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
              v-else-if="
                !$v.form.name.notContainsHtmlTags && $v.form.name.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.name.label")) }}
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.address.label")
            }}</label>
            <input
              type="text"
              v-model="form.address"
              :placeholder="$t('form.address.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.address.$error,
              }"
            />
            <div
              v-if="!$v.form.address.required && $v.form.address.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.address.label")) }}
            </div>
            <div
              v-else-if="!$v.form.address.minLength && $v.form.address.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.address.label"),
                  $v.form.address.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="!$v.form.address.maxLength && $v.form.address.$error"
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("form.address.label"),
                  $v.form.address.$params.maxLength.max
                )
              }}
            </div>

            <div
              v-else-if="
                !$v.form.address.notContainsHtmlTags && $v.form.address.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.address.label")) }}
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="employee-dropdown form-group">
            <label for="" class="form-label">{{ $t("form.employee.label") }}</label>
            <MultiSelect
              v-model="form.employee"
              :options="employeeOptions"
              optionLabel="name"
              optionValue="code"
              dataKey="code"
              :placeholder="$t('form.employee.placeholder')"
              :class="{ 'p-invalid': $v.form.employee.$error }"
              />
            <div class="errors">
              <small
                class="p-invalid"
                v-if="$v.form.employee.$error && !$v.form.employee.required"
              >
                {{ requiredError($t("form.employee.label")) }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
  <i18n src="@/lang/erp/productAndService/Store.json"></i18n>
  <script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
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
      address: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      employee: {
        required,
      },
    },
  },
  computed: {
    employeeOptions() {
      if (this.$store.getters["erp/hr/employees/getListResponse"])
        return this.$store.getters["erp/hr/employees/getListResponse"].results;
      else return [];
    },
  },

  created() {
    if (!this.employeeOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" ,mobile:""};
      this.$store.dispatch("erp/hr/employees/list", params);
    }
  },

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
  