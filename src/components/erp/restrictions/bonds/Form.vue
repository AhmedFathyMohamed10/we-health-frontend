<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :isLoading="isLoading"
      :header="header"
      :minWidth="'50vw'"
      :maxWidth="'50vw'"
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
        <!-- number -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.number.label")
            }}</label>
            <input
              type="number"
              v-model="form.number"
              :placeholder="$t('form.number.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.number.$error,
              }"
            />
            <div
              v-if="!$v.form.number.required && $v.form.number.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.number.label")) }}
            </div>
          </div>
        </div>
        <!-- date time -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.time_date.label")
            }}</label>
            <Calendar
              v-model="form.time_date"
              showTime
              hourFormat="12"
              dateFormat="yy-mm-dd"
              :placeholder="$t('form.time_date.placeholder')"
              :class="{
                'p-invalid': $v.form.time_date.$error,
              }"
            />
            <div
              v-if="!$v.form.time_date.required && $v.form.time_date.$error"
              class="p-error"
            >
              {{ requiredError($t("form.time_date.label")) }}
            </div>
            <div
              class="p-error"
              v-else-if="
                $v.form.time_date.$error && !$v.form.time_date.validDateTime
              "
            >
              {{ timeDateError($t()) }}
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
              :class="{
                'is-invalid': $v.form.value.$error,
              }"
            />
            <div
              v-if="!$v.form.value.required && $v.form.value.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.value.label")) }}
            </div>
          </div>
        </div>
        <!-- type of restrictions  -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.type_of_restriction.label")
            }}</label>
            <Dropdown
              v-model="form.type_of_restriction"
              :options="typeOfRestrictionOption"
              optionLabel="bondName"
              optionValue="id"
              :placeholder="$t('form.type_of_restriction.placeholder')"
              :class="{
                'p-invalid': $v.form.type_of_restriction.$error,
              }"
            />
            <div
              v-if="
                !$v.form.type_of_restriction.required &&
                $v.form.type_of_restriction.$error
              "
              class="p-error"
            >
              {{ requiredError($t("form.type_of_restriction.label")) }}
            </div>
          </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/restrictions/Bond.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required } from "vuelidate/lib/validators";
import moment from "moment";

import { requiredError, timeDateError } from "@/validation/errors.js";
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
      value: {
        required,
      },
      number: {
        required,
      },
      type_of_restriction: {
        required,
      },
      time_date: {
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD HH:MM", true).isValid();

            // return moment(value, "MM-DD-YYYY h:mm A", true).isValid();
          }
        },
      },
    },
  },

  computed: {
    typeOfRestrictionOption() {
      if (
        this.$store.getters[
          "erp/Restrictions/TypesOfRestrictions/getListResponse"
        ]
      )
        return this.$store.getters[
          "erp/Restrictions/TypesOfRestrictions/getListResponse"
        ].results;
      else return [];
    },
  },
  created() {
    if (!this.typeOfRestrictionOption.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, bondName: "" };
      this.$store.dispatch("erp/Restrictions/TypesOfRestrictions/list", params);
    }
  },

  methods: {
    requiredError,
    timeDateError,
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
