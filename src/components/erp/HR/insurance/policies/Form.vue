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
              $t("form.title.label")
            }}</label>
            <input
              type="text"
              class="form-control"
              rows="5"
              cols="30"
              v-model="form.title"
              :placeholder="$t('form.title.placeholder')"
              :class="{
                'is-invalid': $v.form.title.$error,
              }"
            />

            <div
              v-if="!$v.form.title.required && $v.form.title.$error"
              class="error"
            >
              <small class="d-block text-danger">
                {{ requiredError($t("form.title.label")) }}
              </small>
            </div>
            <div
              v-else-if="!$v.form.title.maxLength && $v.form.title.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.title.label"),
                  $v.form.title.$params.maxLength.max
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.form.title.notContainsHtmlTags && $v.form.title.$error
              "
              class="invalid-feedback"
            >
              {{ notContainsHtmlTags($t("form.title.label")) }}
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.insurance_agent.label")
            }}</label>
            <Dropdown
              v-model="form.insurance_agent"
              :options="insuranceAgentOptions"
              optionValue="id"
              :value="form.insurance_agent"
              optionLabel="name"
              dataKey="id"
              :placeholder="$t('form.insurance_agent.placeholder')"
              :class="{
                'p-invalid': $v.form.insurance_agent.$error,
              }"
            />
            <div class="error">
              <small
                class="d-block text-danger"
                v-if="
                  !$v.form.insurance_agent.required &&
                  $v.form.insurance_agent.$error
                "
              >
                {{ requiredError($t("form.insurance_agent.label")) }}
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
            <label class="form-label">{{
              $t("form.insurance_amount.label")
            }}</label>
            <input
              type="text"
              class="form-control"
              rows="5"
              cols="30"
              v-model="form.insurance_amount"
              :placeholder="$t('form.insurance_amount.placeholder')"
              :class="{
                'is-invalid': $v.form.insurance_amount.$error,
              }"
            />
            <div
              v-if="
                !$v.form.insurance_amount.required &&
                $v.form.insurance_amount.$error
              "
              class="error"
            >
              <small class="d-block text-danger">
                {{ requiredError($t("form.insurance_amount.label")) }}
              </small>
            </div>
            <div
              v-else-if="
                !$v.form.insurance_amount.numeric &&
                $v.form.insurance_amount.$error
              "
              class="invalid-feedback"
            >
              {{ numericError($t("form.insurance_amount.label")) }}
            </div>
            <div
              v-else-if="
                !$v.form.insurance_amount.maxLength &&
                $v.form.insurance_amount.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.insurance_amount.label"),
                  $v.form.insurance_amount.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.type.label")
            }}</label>
            <input
              type="text"
              class="form-control"
              rows="5"
              cols="30"
              v-model="form.type"
              :placeholder="$t('form.type.placeholder')"
              :class="{
                'is-invalid': $v.form.type.$error,
              }"
            />

            <div
              v-if="!$v.form.type.required && $v.form.type.$error"
              class="error"
            >
              <small class="d-block text-danger">
                {{ requiredError($t("form.type.label")) }}
              </small>
            </div>
            <div
              v-else-if="!$v.form.type.maxLength && $v.form.type.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.type.label"),
                  $v.form.type.$params.maxLength.max
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.form.type.notContainsHtmlTags && $v.form.type.$error
              "
              class="invalid-feedback"
            >
              {{ notContainsHtmlTags($t("form.type.label")) }}
            </div>
          </div>
        </div>
      </div>
      <Form
      v-model="insuranceAgentForm"
      :isLoading="upsertLoading"
      :displayForm="displayinsuranceAgentForm"
      @close="resetForm"
      @cancel="resetForm"
      @save="upsert"
      :error="upsertError"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')"
    >
    </Form>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/insurance/policies.json"></i18n>
<i18n src="@/lang/erp/insuranceAgents/insuranceAgents.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import {
  required,
  minLength,
  numeric,
  maxLength,
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Form from "@/components/erp/insuranceAgence/Form.vue";
import { mapGetters, mapActions } from "vuex";
import {
  requiredError,
  minLengthError,
  maxLengthError,
  htmlTagsError,
  timeDateError,
  numericError,
} from "@/validation/errors.js";
export default {
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
     
    },
   
  },
  data() {
    return {
      form: this.value,
      displayinsuranceAgentForm: false,
      isUpdating: false,
      insuranceAgentForm: {
        name: "",
        mobile: "",
        email: "",
        website: "",
        status: 1,
      },
    };
  },
  computed: {
    ...mapGetters("erp/insuranceAgents", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",

      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",
    }),

    insuranceAgentOptions() {

      if (this.$store.getters["erp/insuranceAgents/getListResponse"])
        return this.$store.getters["erp/insuranceAgents/getListResponse"].results;
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
    if (!this.insuranceAgentOptions.Length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" ,mobile : ""};
      this.$store.dispatch("erp/insuranceAgents/list", params);
    }
  },
  validations: {
    form: {
      insurance_amount: {
        required,
        numeric,
        maxLength: maxLength(255),
        // notContainsHtmlTags(value) {
        //   return notContainsHtmlTags(value);
        // },
      },
      title: {
        required,
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
      insurance_agent: {
        required,
      },
      type: {
        required,
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
    },
  },

  methods: {
    ...mapActions("erp/insuranceAgents", [
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
        this.$emit("save");
        this.$v.form.$reset();
        this.due_date = "";
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
      this.due_date = "";
    },

    selectDate(event) {
      this.form.due_date = this.$moment(event).format("YYYY-MM-DD");
    },
    ////////// UPSERT ///////////////////
    addRow() {
      this.displayinsuranceAgentForm = true;
    },
    closeForm() {
      this.displayinsuranceAgentForm = false;
    },
    openUpdate(item) {
      this.isUpdating = true;
      this.insuranceAgentForm = { ...item };
      this.openForm();
    },
    resetForm() {
      this.insuranceAgentForm = {
        name: "",
        mobile: "",
        email: "",
        website: "",
        status: 1,
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp/insuranceAgents/create", this.insuranceAgentForm)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          console.log(err)
          const summery = err.statusText;
          const details = err.data.message;
          this.errorToast(summery, details);
        });
    },
    update() {
      this.$store
        .dispatch("erp/insuranceAgents/update", this.insuranceAgentForm)
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
