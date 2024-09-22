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
              <span v-if="key != 'errors'"
                >{{ $t(`form.${key}.label`) }}:
              </span>
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.employee.label")
            }}</label>
            <!-- <AutoComplete
                v-if="!form.id"
                v-model="form.employee"
                :suggestions="employeesParams.suggestions"
                :class="{
                  'p-invalid':
                    $v.form.employee.$error 
                }"   
                value="id"
                field="name"
                :placeholder="$t('form.employee.placeholder')"
                @complete="search($event, employeesParams)"
                /> -->
            <!-- <Dropdown
              v-model="form.employee"
              :options="employeesOptions"
              optionValue="id"
              :filter="true"
              dataKey="id"
              :value="form.employee"
              optionLabel="name"
              :placeholder="$t('form.employee.placeholder')"
              :class="{
                'p-invalid': $v.form.employee.$error,
              }"
            /> -->
            <AutoComplete
              
            v-model="form.employee"
            :suggestions="employeeParams.suggestions"
            :class="{
              'p-invalid': $v.form.employee.$error,
            }"            
            field="name"
            :placeholder="$t('form.employee.placeholder')"
            @complete="search($event, employeeParams)"
            />
            <div class="error">
              <small
                class="d-block text-danger"
                v-if="!$v.form.employee.required && $v.form.employee.$error"
              >
                {{ requiredError($t("form.employee.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.policy.label")
            }}</label>
            <Dropdown
              v-model="form.policy"
              :options="policiesOptions"
              optionValue="id"
              :value="form.policy"
              optionLabel="title"
              dataKey="id"
              :placeholder="$t('form.policy.placeholder')"
              :class="{
                'p-invalid': $v.form.policy.$error,
              }"
            />
            <div class="error">
              <small
                class="d-block text-danger"
                v-if="!$v.form.policy.required && $v.form.policy.$error"
              >
                {{ requiredError($t("form.policy.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-2 d-flex">
          <div class="form-group">
            <label for="" class="form-label invisible">{{
              $t("btns.addDep")
            }}</label>
            <button
              class="btn btn-icon rounded-circle btn-success"
              @click="addRow"
            >
              <i class="fa fa-plus fa-md"></i>
            </button>
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.start_date.label")
            }}</label>
            <Calendar
              v-model="start_date"
              dateFormat="yy-mm-dd"
              @input="selectStartDate($event)"
              :placeholder="$t('form.start_date.placeholder')"
              :class="{
                'p-invalid': $v.form.start_date.$error,
              }"
            />
            <div
              v-if="!$v.form.start_date.required && $v.form.start_date.$error"
              class="p-error"
            >
              {{ requiredError($t("form.start_date.label")) }}
            </div>
            <div
              class="p-error"
              v-else-if="
                $v.form.start_date.$error && !$v.form.start_date.validDateTime
              "
            >
              {{ DateError($t()) }}
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.end_date.label")
            }}</label>
            <Calendar
              v-model="end_date"
              dateFormat="yy-mm-dd"
              @input="selectEndDate($event)"
              :placeholder="$t('form.end_date.placeholder')"
              :class="{
                'p-invalid': $v.form.end_date.$error,
              }"
            />
            <div
              v-if="!$v.form.end_date.required && $v.form.end_date.$error"
              class="p-error"
            >
              {{ requiredError($t("form.end_date.label")) }}
            </div>
            <div
              class="p-error"
              v-else-if="
                $v.form.end_date.$error && !$v.form.end_date.validDateTime
              "
            >
              {{ DateError($t()) }}
            </div>
          </div>
        </div>
      </div>
      <Form
        v-model="policyForm"
        :isLoading="upsertLoading"
        :displayForm="displayFormCategory"
        :parentOptions="policiesOptions"
        @close="resetForm"
        @cancel="resetForm"
        @save="upsert"
        :error="upsertError"
        :header="
          isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')
        "
        :minWidth="'100vw'"
        :maxWidth="'100vw'"
      >
      </Form>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/insurance/insurances.json"></i18n>
<i18n src="@/lang/erp/insurance/policies.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import {
  required,
  minLength,
  numeric,
  maxLength,
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Form from '@/components/erp/HR/insurance/policies/Form.vue';
import { mapGetters, mapActions } from "vuex";
import employeesOptions from "@/mixins/erp/employees/employeeOptions"
import EmployeeSuggestions from "@/mixins/erp/employees/EmployeeSuggestions"
import moment from "moment";
import {
  requiredError,
  minLengthError,
  maxLengthError,
  htmlTagsError,
  DateError,
  numericError,
} from "@/validation/errors.js";
export default {
  mixins: [employeesOptions,EmployeeSuggestions],
  components: {
    EditDialog,
    Form,
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
      if (this.value.id) {
        this.start_date = this.$moment(this.value.start_date).format("YYYY-MM-DD");
        this.end_date = this.$moment(this.value.end_date).format("YYYY-MM-DD");
      }
    },
    displayForm(value){
        if(!value){
          this.start_date = ""
          this.end_date = ""
        }
      }
   
  },
  data() {
    return {
      form: this.value,
      start_date: "",
      end_date :"",
      displayFormCategory: false,
      isUpdating: false,
      policyForm: {
        title: "",
        insurance_agent: "",
        type: "",
        insurance_amount: "",
      },
    };
  },
  computed: {
    
    
    ...mapGetters("erp/hr/policies", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",

      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",
    }),

    policiesOptions() {
      if (this.$store.getters["erp/hr/policies/getListResponse"])
        return this.$store.getters["erp/hr/policies/getListResponse"].results;
      else {
        return [];
      }
    },
    listResponse() {
      return this.getListResponse;
    },
    upsertResponse: {
      get() {
        return this.getUpsertResponse;
      },
      set(value) {
        this.setUpsertResponse(value);
      },
    },
    upsertError: {
      get() {
        return this.getUpsertError;
      },
      set(value) {
        this.setUpsertError(value);
      },
    },
  },
  created() {
    if (this.form.id) {
      this.start_date = this.$moment(this.form.start_date).format("YYYY-MM-DD");
    }
    if (!this.policiesOptions.Length > 0) {
      let params = { pageNumber: 1, rows: 1000000, title: "", insurance_agent: "" };
      this.$store.dispatch("erp/hr/policies/list", params);
    }
    if (!this.employeesOptions.Length > 0) {
      this.$store.dispatch("erp/hr/employees/getOptions");
    }
  },
  validations: {
    
    form: {
      employee: {
        required,
      },
      policy: {
        required,
      },
      start_date: {
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      end_date: {
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
    },
  },

  methods: {
    ...mapActions("erp/hr/policies", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setStatusError",
    ]),
    requiredError,
    minLengthError,
    maxLengthError,
    htmlTagsError,
    DateError,
    numericError,

    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.form.employee =  this.form.employee.id
        this.$emit("save");
        this.$v.form.$reset();
        // this.start_date = "";
        // this.end_date = "";
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
      // this.start_date = "";
      // this.end_date = "";
    },

    selectStartDate(event) {
      this.form.start_date = this.$moment(event).format("YYYY-MM-DD");
    },
    selectEndDate(event) {
      this.form.end_date = this.$moment(event).format("YYYY-MM-DD");
      // this.start_date = ""
      // this.form.end_date = event
    },

    ////////// UPSERT ///////////////////
    addRow() {
      this.displayFormCategory = true;
    },
    closeForm() {
      this.displayFormCategory = false;
    },
    openUpdate(item) {
      this.isUpdating = true;
      this.policyForm = { ...item };
      this.openForm();
    },
    resetForm() {
      this.policyForm = {
        title: "",
        insurance_agent: "",
        type: "",
        insurance_amount: "",
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp/hr/policies/create", this.policyForm)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          const summery = err.statusText;
          const details = err.data.message;
          this.errorToast(summery, details);
        });
    },
    update() {
      this.$store
        .dispatch("erp/hr/policies/update", this.policyForm)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          const summery = err.statusText;
          const details = err.data.message;
          this.errorToast(summery, details);
        });
    },
    upsert() {
      if (this.isUpdating) {
        this.update();
      } else {
        this.create();
      }
    },
  },
};
</script>
