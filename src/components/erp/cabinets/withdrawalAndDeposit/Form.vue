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
        <!-- cabinet -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.cabinet.label")
            }}</label>
            <Dropdown
              v-model="form.cabinet"
              :options="cabinetOptions"
              optionLabel="name"
              optionValue="id"
              :placeholder="$t('form.cabinet.placeholder')"
              :class="{
                'p-invalid': $v.form.cabinet.$error,
              }"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="!$v.form.cabinet.required && $v.form.cabinet.$error"
              >
                {{ requiredError($t("form.cabinet.label")) }}
              </small>
            </div>
          </div>
        </div>

        <!-- operation -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.operation.label")
            }}</label>
            <Dropdown
              v-model="form.operation"
              :options="operationOptions"
              :optionLabel="locale"
              optionValue="id"
              :placeholder="$t('form.operation.placeholder')"
              :class="{
                'p-invalid': $v.form.operation.$error,
              }"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="!$v.form.operation.required && $v.form.operation.$error"
              >
                {{ requiredError($t("form.operation.label")) }}
              </small>
            </div>
          </div>
        </div>

        <!-- value -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.value.label")
            }}</label>
            <input
              type="number"
              v-model="form.value"
              :placeholder="$t('form.value.placeholder')"
              class="form-control"
              :class="{ 'is-invalid': $v.form.value.$error }"
            />
            <div
              v-if="!$v.form.value.decimal && $v.form.value.$error"
              class="invalid-feedback"
            >
              {{ numericError($t("form.value.label")) }}
            </div>
            <div
              v-if="!$v.form.value.required && $v.form.value.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.value.label")) }}
            </div>
          </div>
        </div>
        <!-- bond -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{ $t("form.bond.label") }}</label>
            <Dropdown
              v-model="form.bond"
              :options="bondOptions"
              optionLabel="number"
              optionValue="id"
              :placeholder="$t('form.bond.placeholder')"
              :class="{
                'p-invalid': $v.form.bond.$error,
              }"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="!$v.form.bond.required && $v.form.bond.$error"
              >
                {{ requiredError($t("form.bond.label")) }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/cabinets/WithdrawalAndDeposit.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";
import {
  required,
  minLength,
  maxLength,
  decimal,
} from "vuelidate/lib/validators";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  numericError,
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
    operationOptions: {
      type: Array,
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
      operation: {
        required,
      },
      value: {
        required,
        decimal,
      },
      cabinet: {
        required,
      },
      bond: {
        required,
      },
    },
  },
  computed: {
    bondOptions() {
      if (this.$store.getters["erp/Restrictions/Bond/getListResponse"])
        return this.$store.getters["erp/Restrictions/Bond/getListResponse"].results;
      else return [];
    },
    cabinetOptions() {
      if (this.$store.getters["erp/Cabinets/Cabinet/getListResponse"])
        return this.$store.getters["erp/Cabinets/Cabinet/getListResponse"].results;
      else return [];
    },
  },
  created() {
    if (!this.bondOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, number: "" };
      this.$store.dispatch("erp/Restrictions/Bond/list", params);
    }
    if (!this.cabinetOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp/Cabinets/Cabinet/list", params);
    }
  },

  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    numericError,
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
  