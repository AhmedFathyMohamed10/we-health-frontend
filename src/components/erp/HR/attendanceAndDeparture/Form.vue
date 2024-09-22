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
            <label for="" class="form-label">{{
              $t("form.employee.label")
            }}</label>
            <Dropdown
              v-model="form.employee"
              :options="employeesOptions"
              optionLabel="name"
              optionValue="id"
              :filter="true"
              :placeholder="$t('form.employee.placeholder')"
              :class="{
                'p-invalid': $v.form.employee.$error,
              }"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="!$v.form.employee.required && $v.form.employee.$error"
              >
                {{ requiredError($t("form.employee.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.date_time.label")
            }}</label>
            <Calendar
              v-model="form.date_time"
              showTime
              hourFormat="12"
              dateFormat="yy-mm-dd"
              :placeholder="$t('form.date_time.placeholder')"
              :class="{
                'p-invalid': $v.form.date_time.$error,
              }"
            />
            <div
              v-if="!$v.form.date_time.required && $v.form.date_time.$error"
              class="p-error"
            >
              {{ requiredError($t("form.date_time.label")) }}
            </div>
            <div
              class="p-error"
              v-else-if="
                $v.form.date_time.$error && !$v.form.date_time.validDateTime
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
<i18n src="@/lang/erp/hr/attendanceAndDeparture/attendanceAndDeparture.json"></i18n>
  <script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required } from "vuelidate/lib/validators";
import { requiredError, timeDateError } from "@/validation/errors.js";
import moment from "moment";
import employeeOptions from "@/mixins/erp/employees/employeeOptions";

export default {
  mixins: [employeeOptions],
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
      employee: {
        required,
      },
      date_time: {
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
  