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
      <Base>
        <div class="d-flex flex-wrap justify-content-between">
          <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
        </div>
      </Base>
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <Base>
            <!-- name_en -->
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.account_name_en.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.account_name_en"
                  :placeholder="$t('form.account_name_en.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.account_name_en.$error,
                  }"
                />
                <div
                  v-if="
                    !$v.form.account_name_en.required &&
                    $v.form.account_name_en.$error
                  "
                  class="invalid-feedback"
                >
                  {{ requiredError($t("form.account_name_en.label")) }}
                </div>
                <div
                  v-else-if="
                    !$v.form.account_name_en.minLength &&
                    $v.form.account_name_en.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    maxLengthError(
                      $t("form.account_name_en.label"),
                      $v.form.account_name_en.$params.minLength.min
                    )
                  }}
                </div>
                <div
                  v-else-if="
                    !$v.form.account_name_en.maxLength &&
                    $v.form.account_name_en.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    minLengthError(
                      $t("form.account_name_en.label"),
                      $v.form.account_name_en.$params.maxLength.max
                    )
                  }}
                </div>

                <div
                  v-else-if="
                    !$v.form.account_name_en.notContainsHtmlTags &&
                    $v.form.account_name_en.$error
                  "
                  class="invalid-feedback"
                >
                  {{ htmlTagsError($t("form.account_name_en.label")) }}
                </div>
              </div>
            </div>
            <!-- name_ar -->
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.account_name_ar.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.account_name_ar"
                  :placeholder="$t('form.account_name_ar.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.account_name_ar.$error,
                  }"
                />
                <div
                  v-if="
                    !$v.form.account_name_ar.required &&
                    $v.form.account_name_ar.$error
                  "
                  class="invalid-feedback"
                >
                  {{ requiredError($t("form.account_name_ar.label")) }}
                </div>
                <div
                  v-else-if="
                    !$v.form.account_name_ar.minLength &&
                    $v.form.account_name_ar.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    maxLengthError(
                      $t("form.account_name_ar.label"),
                      $v.form.account_name_ar.$params.minLength.min
                    )
                  }}
                </div>
                <div
                  v-else-if="
                    !$v.form.account_name_ar.maxLength &&
                    $v.form.account_name_ar.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    minLengthError(
                      $t("form.account_name_ar.label"),
                      $v.form.account_name_ar.$params.maxLength.max
                    )
                  }}
                </div>

                <div
                  v-else-if="
                    !$v.form.account_name_ar.notContainsHtmlTags &&
                    $v.form.account_name_ar.$error
                  "
                  class="invalid-feedback"
                >
                  {{ htmlTagsError($t("form.account_name_ar.label")) }}
                </div>
              </div>
            </div>
            <!-- code -->
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.account_code.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.account_code"
                  :disabled="true"
                  :placeholder="$t('form.account_code.placeholder')"
                  class="form-control"
                />
              </div>
            </div>
          </Base>
        </div>
        <div class="col-lg-4 col-sm-6">
          <Base>
            <!-- parent Account -->
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.parent_account.label")
                }}</label>
                <AutoComplete
                  v-model="form.parent_account"
                  :suggestions="accountParams.suggestions"
                  field="account_name_en"
                  :placeholder="$t('form.parent_account.placeholder')"
                  @complete="search($event, accountParams)"
                />
              </div>
            </div>
            <!-- final Account -->
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.final_account.label")
                }}</label>
                <AutoComplete
                  v-model="form.final_account"
                  :suggestions="finalAccountParams.suggestions"
                  field="name_en"
                  :placeholder="$t('form.final_account.placeholder')"
                  @complete="search($event, finalAccountParams)"
                  :class="{ 'p-invalid': $v.form.final_account.$error }"
                />

                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="
                      $v.form.final_account.$error &&
                      !$v.form.final_account.required
                    "
                  >
                    {{ requiredError($t("form.final_account.label")) }}
                  </small>
                </div>
              </div>
            </div>
          </Base>
        </div>

        <div class="col-lg-4 col-sm-6">
          <Base>
            <!-- Account Type -->
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.account_type.label")
                }}</label>

                <div
                  class="d-flex flex-wrap radio-button justify-content-between"
                >
                  <div
                    v-for="category of account_type_options"
                    :key="category.id"
                    class="field-radiobutton d-flex gap-1 align-items-center"
                  >
                    <label class="mt-2">{{ category.name }} </label>
                    <RadioButton
                      :id="category.id"
                      name="category"
                      :value="category.id"
                      v-model="form.account_type"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- account Disposition -->
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.account_disposition.label")
                }}</label>
                <div
                  class="d-flex flex-wrap radio-button justify-content-around"
                >
                  <div
                    v-for="category of account_disposition_options"
                    :key="category.locale"
                    class="field-radiobutton d-flex gap-1 align-items-center"
                  >
                    <label class="mt-2" :for="category.key">{{
                      category.name
                    }}</label>
                    <RadioButton
                      :id="category.id"
                      name="category"
                      :value="category.id"
                      v-model="form.account_disposition"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-12">
          <Base>
            <div class="col-md-12">
              <div class="form-group">
                <label class="form-label">{{
                  $t("form.description.label")
                }}</label>
                <textarea
                  class="form-control"
                  rows="5"
                  cols="30"
                  v-model="form.description"
                  :placeholder="$t('form.description.placeholder')"
                  :class="{
                    'is-invalid': $v.form.description.$error,
                  }"
                ></textarea>
                <div
                  v-if="
                    !$v.form.description.notContainsHtmlTags &&
                    $v.form.description.$error
                  "
                  class="invalid-feedback"
                >
                  {{ htmlTagsError($t("form.description.label")) }}
                </div>
              </div>
            </div>
          </Base>
        </div>
      </div>
      <div class="row" v-if="isUpdating">
        <div class="col-12">
          <Base
            :title="'Final Account'"
            :icon="'pi pi-check-square'"
            :showBreadCrumb="false"
            :showToggleContent="false"
            :showFullScreen="false"
          >
            <div class="d-flex flex-wrap justify-content-between">
              <div class="d-grid">
                <h5>Accounting Code</h5>
                <h5 class="">Invoices</h5>
                <h5 class="">Total Operations</h5>
              </div>
              <div class="d-grid">
                <!-- <div class="flex align-items-center"> -->
                <Chip label="Action" class="custom-chip" />
                <Chip label="Onyama Limba" icon="" class="custom-chip" />
                <Chip label="Apple" icon="" class="custom-chip" />
                <!-- </div> -->
              </div>
              <div class="d-grid current-balance">
                <label class="form-label">Current Balance</label>
                <Chip label="Action" class="custom-chip chip" />
              </div>
            </div>
            <!-- <Chart type="bar" :data="chartData" :options="chartOptions" /> -->

            <template v-slot:footer>
              <div class="d-flex justify-content-center">
                <h5>Log</h5>
              </div>
            </template>
          </Base>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/accounts/account.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import accountParams from "@/mixins/erp/accounts/accountSuggestions";
import finalAccountSuggestions from "@/mixins/erp/accounts/finalAccountSuggestions";
import Base from "@/components/global/utilities/Base.vue";
import Chip from "primevue/chip";

import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
    Base,
    Chip,
  },
  mixins: [accountParams, finalAccountSuggestions],
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
    isUpdating: {
      type: Boolean,
      default() {
        return false;
      },
    },
    // selectedNodeKey: {
    //   type: Object,
    // },
    account_type_options: {
      type: Array,
    },
    account_disposition_options: {
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
      // chartData: {
      //   labels: [
      //     "January",
      //     "February",
      //     "March",
      //     "April",
      //     "May",
      //     "June",
      //     "July",
      //   ],
      //   datasets: [
      //     {
      //       type: "line",
      //       label: "Dataset 1",
      //       borderColor: "#42A5F5",
      //       borderWidth: 2,
      //       fill: false,
      //       data: [50, 25, 12, 48, 56, 76, 42],
      //     },
      //     {
      //       type: "bar",
      //       label: "Dataset 2",
      //       backgroundColor: "#66BB6A",
      //       data: [21, 84, 24, 75, 37, 65, 34],
      //       borderColor: "white",
      //       borderWidth: 2,
      //     },
      //     {
      //       type: "bar",
      //       label: "Dataset 3",
      //       backgroundColor: "#FFA726",
      //       data: [41, 52, 24, 74, 23, 21, 32],
      //     },
      //   ],
      // },
      form: this.value,

      breadcrumbHome: { icon: "pi pi-home", to: "/" },
      breadcrumbItems: [
        { label: "Computer" },
        { label: "Notebook" },
        { label: "Accessories" },
      ],
    };
  },
  validations: {
    form: {
      account_name_en: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      account_name_ar: {
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      account_code: {},
      parent_account: {},
      final_account: {
        required,
      },
      account_type: {},
      account_disposition: {},

      description: {
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
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


<style lang="scss" scoped>
/deep/.p-chip {
  background: $primary;
  justify-content: center;
  height: 23px;
  .p-chip-text {
    color: white;
  }
}
.chip {
  background: $secondary-gradient;
  height: auto;
}
.current-balance {
  border: 1px solid #bec7be;
  border-radius: 17px;
}

.radio-button {
  border: 1px solid $primary;
  border-radius: 1rem;
  padding: 0.5rem;
}
</style>


