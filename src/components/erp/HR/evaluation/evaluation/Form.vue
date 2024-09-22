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
        <!-- employee -->
        <div class="col-md-6 col-lg-6">
          <div class="form-group">
            <label class="form-label">{{ $t("form.employee.label") }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.form.employee.$error }"
              >
                <i class="pi pi-search"></i>
              </span>
              <AutoComplete
                v-model="form.employee"
                :suggestions="employeeParams.suggestions"
                :class="{ 'p-invalid': $v.form.employee.$error }"
                field="name"
                :placeholder="$t('form.employee.placeholder')"
                @complete="search($event, employeeParams)"
                :forceSelection="true"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="$v.form.employee.$error && !$v.form.employee.required"
              >
                {{ requiredError($t("form.employee.label")) }}
              </small>
            </div>
          </div>
        </div>
        <!-- period -->
        <div class="col-md-6 col-lg-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.period.label")
            }}</label>
            <Dropdown
              v-model="form.period"
              :options="evaluationperiodOption"
              optionLabel="title"
              optionValue="id"
              :placeholder="$t('form.period.placeholder')"
              :class="{
                'p-invalid': $v.form.period.$error,
              }"
            />
            <div
              v-if="!$v.form.period.required && $v.form.period.$error"
              class="p-error"
            >
              {{ requiredError($t("form.period.label")) }}
            </div>
          </div>
        </div>
      
        <div
          class="table-wrapper my-2"
          v-if="form.degree.length > 0"
        >
          <div class="row my-2">
            <div class="col-12">
              <div class="table-responsive">
                <table class="table table-sm text-center">
                  <thead>
                    <tr class="border-bottom-custom">
                      <th scope="col">#</th>
                      <th scope="col">{{ $t("form.title.label") }}</th>
                      <th scope="col">{{ $t("form.degree.label") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(val, index) in form.degree"
                      :key="index"
                    >
                    <td class="align-middle">
                      {{ parseInt(index) + 1 }}
                    </td>
                    <td class="align-middle">
                      {{ val.title }}
                    </td>
                      <td class="align-middle">
                        <div class="d-flex justify-content-center">
                          <div>
                            <Rating
                              v-model="val.degree"
                              :cancel="false"
                              />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/hr/evaluation/EvaluationPeriod.json"></i18n>
<i18n src="@/lang/erp/hr/evaluation/Evaluation.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required } from "vuelidate/lib/validators";
import { requiredError } from "@/validation/errors.js";
import { mapGetters, mapActions } from "vuex";
import toast from "@/mixins/global/toast";
import EmployeeSuggestions from "@/mixins/erp/employees/EmployeeSuggestions.js";

export default {
  mixins: [toast, EmployeeSuggestions],
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
      displayFormperiod: false,
      form: this.value,
    };
  },
  computed: {
    evaluationperiodOption() {
      if (this.$store.getters["erp/hr/Evaluation/EvaluationPeriod/getListResponse"])
        return this.$store.getters["erp/hr/Evaluation/EvaluationPeriod/getListResponse"].results;
      else return [];
    },
  },

  created() {
    if (!this.evaluationperiodOption.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp/hr/Evaluation/EvaluationPeriod/list", params);
    }
  },
  validations: {
    form: {
      employee: {
        required,
      },
      period: {
        required,
      },
    },
  },

  methods: {
    // ...mapActions("EvaluationPeriod", ["setUpsertError"]),
    requiredError,
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
