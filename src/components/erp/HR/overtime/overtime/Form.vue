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
              $t("form.reason.label")
            }}</label>
            <Dropdown
              v-model="form.reason"
              :options="categoriesOptions"
              optionValue="id"
              :value="form.reason"
              optionLabel="name"
              dataKey="id"
              :placeholder="$t('form.reason.placeholder')"
              :class="{
                'p-invalid': $v.form.reason.$error,
              }"
            />
            <div class="error">
              <small
                class="d-block text-danger"
                v-if="!$v.form.reason.required && $v.form.reason.$error"
              >
                {{ requiredError($t("form.reason.label")) }}
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
            <label class="form-label">{{ $t("form.amount.label") }}</label>
            <input
              type="text"
              class="form-control"
              rows="5"
              cols="30"
              v-model="form.amount"
              :placeholder="$t('form.amount.placeholder')"
              :class="{
                'is-invalid': $v.form.amount.$error,
              }"
            />
            <div
              v-if="!$v.form.amount.required && $v.form.amount.$error"
              class="error"
            >
              <small class="d-block text-danger">
                {{ requiredError($t("form.amount.label")) }}
              </small>
            </div>
            <div
            v-else-if="
              !$v.form.amount.numeric && $v.form.amount.$error
            "
            class="invalid-feedback"
          >
            {{ numericError($t("form.amount.label")) }}
          </div>
          <div
          v-else-if="
            !$v.form.amount.maxLength && $v.form.amount.$error
          "
          class="invalid-feedback"
        >
          {{  maxLengthError(
            $t("form.amount.label"),
            $v.form.amount.$params.maxLength.max
          ) }}
        </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.due_date.label")
            }}</label>
            <Calendar
              v-model="due_date"
              dateFormat="yy-mm-dd"
              @input="selectDate($event)"
              :placeholder="$t('form.due_date.placeholder')"
              :class="{
                'p-invalid': $v.form.due_date.$error,
              }"
            />
            <div
              v-if="!$v.form.due_date.required && $v.form.due_date.$error"
              class="p-error"
            >
              {{ requiredError($t("form.due_date.label")) }}
            </div>
            <div
              class="p-error"
              v-else-if="
                $v.form.due_date.$error && !$v.form.due_date.validDateTime
              "
            >
              {{ timeDateError($t()) }}
            </div>
          </div>
        </div>
      </div>
      <Form
        v-model="categoryForm"
        :isLoading="upsertLoading"
        :displayForm="displayFormCategory"
        :parentOptions="categoriesOptions"
        @close="resetForm"
        @cancel="resetForm"
        @save="upsert"
        :error="upsertError"
        :header="
          isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')
        "
      >
      </Form>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/overtime/overtime.json"></i18n>
<i18n src="@/lang/erp/categories/category.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength,numeric, maxLength } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Form from "@/components/erp/HR/overtime/categories/Form.vue";
import { mapGetters, mapActions } from "vuex";
import employeesOptions from "@/mixins/erp/employees/employeeOptions";
import EmployeeSuggestions from "@/mixins/erp/employees/EmployeeSuggestions"
import moment from "moment";
import {
  requiredError,
  minLengthError,
  maxLengthError,
  htmlTagsError,
  timeDateError,
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
      if(this.value.id){
        this.due_date = this.$moment(this.value.due_date).format("YYYY-MM-DD");
      }
    },
    displayForm(value){
        if(!value){
          this.due_date = ""
          // this.end_date = ""
        }
      }
  },
  data() {
    return {
      form: this.value,
      due_date: "",
      displayFormCategory: false,
      isUpdating: false,
      categoryForm: {
        name: "",
        parent: "",
        description: "",
      },
    };
  },
  computed: {
    
    ...mapGetters("erp/hr/categories", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",

      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",
    }),
    // employeeOptions() {
    //   if (this.$store.getters["erp/hr/employees/getListResponse"])
    //     return this.$store.getters["erp/hr/employees/getListResponse"].results;
    //   else {
    //     return [];
    //   }
    // },
    categoriesOptions() {
      if (this.$store.getters["erp/hr/categories/getListResponse"])
        return this.$store.getters["erp/hr/categories/getListResponse"].results;
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
    // if (this.form.id) {
    //   this.due_date = this.$moment(this.form.due_date).format("YYYY-MM-DD");
    // }
    if (!this.categoriesOptions.Length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp/hr/categories/list", params);
    }
    if (!this.employeesOptions.Length > 0) {
      this.$store.dispatch("erp/hr/employees/getOptions");
    }
  },
  validations: {
    form: {
      amount: {
        required,
        numeric,
        maxLength: maxLength(255),
        // notContainsHtmlTags(value) {
        //   return notContainsHtmlTags(value);
        // },
      },
      employee: {
        required,
      },
      reason: {
        required,
      },
      due_date: {
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
    ...mapActions("erp/hr/categories", [
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
    timeDateError,
    numericError,

    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.form.employee =  this.form.employee.id
        this.$emit("save");
        this.$v.form.$reset();
        // this.due_date = ""
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
      // this.due_date = ""
    },

    selectDate(event) {
      this.form.due_date = this.$moment(event).format("YYYY-MM-DD");
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
      this.categoryForm = { ...item };
      this.openForm();
    },
    resetForm() {
      this.categoryForm = {
        name: "",
        description: "",
        parent: "",
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp/hr/categories/create", this.categoryForm)
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
        .dispatch("erp/hr/categories/update", this.categoryForm)
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
