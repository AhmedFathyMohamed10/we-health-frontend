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
        <!-- partner -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.partner.label")
            }}</label>
            <Dropdown
              v-model="form.partner"
              :options="partnerOptions"
              optionLabel="name"
              optionValue="id"
              :placeholder="$t('form.partner.placeholder')"
              :class="{
                'p-invalid': $v.form.partner.$error,
              }"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  !$v.form.partner.required &&
                  $v.form.partner.$error
                "
              >
                {{ requiredError($t("form.partner.label")) }}
              </small>
            </div>
          </div>
        </div>
        <!-- ratio -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.ratio.label")
            }}</label>
            <input
              type="number"
              v-model="form.ratio"
              :placeholder="$t('form.ratio.placeholder')"
              class="form-control"
              :class="{ 'is-invalid': $v.form.ratio.$error }"
            />
            <div
              v-if="
                !$v.form.ratio.decimal &&
                $v.form.ratio.$error
              "
              class="invalid-feedback"
            >
              {{ numericError($t("form.ratio.label")) }}
            </div>
            <div
              v-if="
                !$v.form.ratio.required &&
                $v.form.ratio.$error
              "
              class="invalid-feedback"
            >
              {{ requiredError($t("form.ratio.label")) }}
            </div>
          </div>
        </div>
        <!-- accounting Period -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.accountingPeriod.label")
            }}</label>
            <Dropdown
              v-model="form.accountingPeriod"
              :options="accountingPeriodOptions"
              optionLabel="name"
              optionValue="id"
              :placeholder="$t('form.accountingPeriod.placeholder')"
              :class="{
                'p-invalid': $v.form.accountingPeriod.$error,
              }"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  !$v.form.accountingPeriod.required &&
                  $v.form.accountingPeriod.$error
                "
              >
                {{ requiredError($t("form.accountingPeriod.label")) }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
  <i18n src="@/lang/erp/partnersAndRatios/PartnerRatios.json"></i18n>
  <script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";
import { required, minLength, maxLength, decimal } from "vuelidate/lib/validators";
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
    OptionOfAccount: {
      type: Array,
    },

    natureOfAccountOption: {
      type: Array,
    },
    typeAccountOption: {
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
  computed: {
    partnerOptions() {
      if (this.$store.getters["erp/PartnersAndRatios/Partner/getListResponse"])
        return this.$store.getters["erp/PartnersAndRatios/Partner/getListResponse"].results;
      else return [];
    },

    accountingPeriodOptions() {
      if (this.$store.getters["erp/Accounts/AccountingPeriod/getListResponse"])
        return this.$store.getters["erp/Accounts/AccountingPeriod/getListResponse"].results;
      else return [];
    },
  },
  created() {
  
    if (!this.partnerOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp/PartnersAndRatios/Partner/list", params);
    }
    if (!this.accountingPeriodOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp/Accounts/AccountingPeriod/list", params);
    }
  },

  validations: {
    form: {
      partner: {
        required,
      },
      ratio: {
        decimal,
        required,
      },
      accountingPeriod: {
        required,
      },
    },
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
  