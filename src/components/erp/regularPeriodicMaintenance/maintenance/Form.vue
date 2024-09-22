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
        <div class="col-md-6">
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
        
        <!-- cost -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.cost.label")
            }}</label>
            <input
              type="number"
              v-model="form.cost"
              :placeholder="$t('form.cost.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.cost.$error,
              }"
            />
            <div
              v-if="!$v.form.cost.required && $v.form.cost.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.cost.label")) }}
            </div>
          </div>
        </div>
        <!-- period -->
        <div class="col-md-6">
          <div class="form-group period">
            <CustomInputGroup
              v-model="form.period"
              :label="$t('form.period.label')"
              :valueType="'number'"
              :options="periodOptions"
              :optionValue="'id'"
              :optionLabel="locale"
              :valuePlaceholder="$t('form.period.value.placeholder')"
              :invalidValue="$v.form.period.value.$error"
              :invalidSelection="$v.form.period.selection.$error"
            />

            <div class="error">
              <small
                class="d-block text-danger"
                v-if="
                  $v.form.period.value.$error &&
                  !$v.form.period.value.decimal
                "
              >
                {{ numericError($t("form.period.label")) }}
              </small>

              <small
                class="p-invalid"
                v-else-if="
                  !$v.form.period.value.required &&
                  $v.form.period.value.$error
                "
              >
                {{ requiredError($t("form.period.value.label")) }}
              </small>
              <small
                class="p-invalid"
                v-if="
                  !$v.form.period.selection.required &&
                  $v.form.period.selection.$error
                "
              >
                {{ requiredError($t("form.period.selection.label")) }}
              </small>
            </div>
          </div>
        </div>
        <!-- group -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.group.label")
            }}</label>
            <Dropdown
              v-model="form.maintenanceGroup"
              :options="groupOptions"
              optionLabel="name"
              optionValue="id"
              :placeholder="$t('form.group.placeholder')"
              :class="{
                'p-invalid': $v.form.maintenanceGroup.$error,
              }"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  !$v.form.maintenanceGroup.required &&
                  $v.form.maintenanceGroup.$error
                "
              >
                {{ requiredError($t("form.group.label")) }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
  <i18n src="@/lang/erp/regularPeriodicMaintenance/Maintenance.json"></i18n>
  <script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";
import CustomInputGroup from "@/components/global/custom/CustomInputGroup.vue";
import { required, minLength, maxLength, maxValue, decimal} from "vuelidate/lib/validators";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  numericError,
  maxValueError,
  maxLengthError,
} from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
    CustomInputGroup,
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
    periodOptions: {
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
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      cost: {
        required,
      },
      period: {
        value: {
          decimal,
          required,
        },
        selection: {
          required,
        },
      },
      maintenanceGroup: {
        required,
      },
    },
  },
  computed: {
    groupOptions() {
      if (this.$store.getters["erp/regularPeriodicMaintenance/MaintenanceGroup/getListResponse"])
        return this.$store.getters["erp/regularPeriodicMaintenance/MaintenanceGroup/getListResponse"].results;
      else return [];
    },
  },
  created() {
    if (!this.groupOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp/regularPeriodicMaintenance/MaintenanceGroup/list", params);
    }
  },
  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    maxValueError,
    numericError,
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
  