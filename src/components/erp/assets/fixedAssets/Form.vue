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
        <!-- number -->
        <div class="col-md-6 col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.number.label")
            }}</label>
            <input
              type="text"
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
        <!-- name -->
        <div class="col-md-6 col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.nameAssets.label")
            }}</label>
            <input
              type="text"
              v-model="form.name"
              :placeholder="$t('form.nameAssets.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.name.$error,
              }"
            />
            <div
              v-if="!$v.form.name.required && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.nameAssets.label")) }}
            </div>
            <div
              v-else-if="!$v.form.name.minLength && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.nameAssets.label"),
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
                  $t("form.nameAssets.label"),
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
              {{ htmlTagsError($t("form.nameAssets.label")) }}
            </div>
          </div>
        </div>
        <!-- site -->
        <div class="col-md-6 col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">{{ $t("form.site.label") }}</label>
            <input
              type="text"
              v-model="form.site"
              :placeholder="$t('form.site.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.site.$error,
              }"
            />
            <div
              v-if="!$v.form.site.notContainsHtmlTags && $v.form.site.$error"
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.site.label")) }}
            </div>
          </div>
        </div>
        <!-- group -->
        <div class="col-md-5 col-lg-3">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.group.label")
            }}</label>
            <Dropdown
              v-model="form.group"
              :options="groupOption"
              optionLabel="name"
              optionValue="id"
              :placeholder="$t('form.group.placeholder')"
              :class="{
                'p-invalid': $v.form.group.$error,
              }"
            />
            <div
              v-if="!$v.form.group.required && $v.form.group.$error"
              class="p-error"
            >
              {{ requiredError($t("form.group.label")) }}
            </div>
          </div>
        </div>
        <!-- add -->
        <div class="col-1 mx-auto">
          <AddButton @add="addRow"></AddButton>
        </div>
        <!-- originalAccount -->
        <div class="col-md-6 col-lg-4">
          <div class="form-group">
            <label class="form-label">{{
              $t("form.originalAccount.label")
            }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.form.originalAccount.$error }"
              >
                <i class="pi pi-search"></i>
              </span>
              <AutoComplete
                v-model="form.originalAccount"
                :suggestions="accountParams.suggestions"
                :class="{ 'p-invalid': $v.form.originalAccount.$error }"
                field="name"
                :placeholder="$t('form.originalAccount.placeholder')"
                @complete="search($event, accountParams)"
                :forceSelection="true"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.form.originalAccount.$error &&
                  !$v.form.originalAccount.required
                "
              >
                {{ requiredError($t("form.originalAccount.label")) }}
              </small>
            </div>
          </div>
        </div>
        <!-- starting_date -->
        <div class="col-md-6 col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.starting_date.label")
            }}</label>
            <Calendar
              v-model="form.starting_date"
              dateFormat="yy-mm-dd"
              :placeholder="$t('form.starting_date.placeholder')"
              :class="{
                'p-invalid': $v.form.starting_date.$error,
              }"
            />
            <div
              v-if="
                !$v.form.starting_date.required && $v.form.starting_date.$error
              "
              class="p-error"
            >
              {{ requiredError($t("form.starting_date.label")) }}
            </div>
            <div
              class="p-error"
              v-else-if="
                $v.form.starting_date.$error &&
                !$v.form.starting_date.validDateTime
              "
            >
              {{ timeDateError($t()) }}
            </div>
          </div>
        </div>
        <!-- Expiry_date -->
        <div class="col-md-6 col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.Expiry_date.label")
            }}</label>
            <Calendar
              v-model="form.Expiry_date"
              dateFormat="yy-mm-dd"
              :placeholder="$t('form.Expiry_date.placeholder')"
              :class="{
                'p-invalid': $v.form.Expiry_date.$error,
              }"
            />
            <div
              class="p-error"
              v-if="
                $v.form.Expiry_date.$error && !$v.form.Expiry_date.validDateTime
              "
            >
              {{ timeDateError($t()) }}
            </div>
          </div>
        </div>
        <!-- age_assets -->
        <div class="col-md-6 col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.age_assets.label")
            }}</label>
            <input
              type="number"
              v-model="form.age_assets"
              :placeholder="$t('form.age_assets.placeholder')"
              class="form-control"
            />
          </div>
        </div>
        <!-- total_cost -->
        <div class="col-md-6 col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.total_cost.label")
            }}</label>
            <input
              type="number"
              v-model="form.total_cost"
              :placeholder="$t('form.total_cost.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.total_cost.$error,
              }"
            />
            <div
              v-if="!$v.form.total_cost.required && $v.form.total_cost.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.total_cost.label")) }}
            </div>
          </div>
        </div>
        <!-- type_of_asset -->
        <div class="col-md-6 col-lg-4">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.type_of_asset.label")
            }}</label>
            <Dropdown
              v-model="form.type_of_asset"
              :options="typeAssetOptions"
              :optionLabel="locale"
              optionValue="id"
              :placeholder="$t('form.type_of_asset.placeholder')"
              :class="{
                'p-invalid': $v.form.type_of_asset.$error,
              }"
            />
            <div
              v-if="
                !$v.form.type_of_asset.required && $v.form.type_of_asset.$error
              "
              class="p-error"
            >
              {{ requiredError($t("form.type_of_asset.label")) }}
            </div>
          </div>
        </div>

        <!-- if condition type -->
        <!-- total_purchase_price -->
        <div class="col-md-6 col-lg-4" v-if="form.type_of_asset == '1'">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.total_purchase_price.label")
            }}</label>
            <input
              type="number"
              v-model="form.total_purchase_price"
              :placeholder="$t('form.total_purchase_price.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.total_purchase_price.$error,
              }"
            />
            <div
              v-if="!$v.form.total_purchase_price.decimal && $v.form.total_purchase_price.$error"
              class="invalid-feedback"
            >
              {{ numericError($t("form.total_purchase_price.label")) }}
            </div>
            <div
              v-else-if="!$v.form.total_purchase_price.required && $v.form.total_purchase_price.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.total_purchase_price.label")) }}
            </div>
          </div>
        </div>
        <!-- paid_from_the_purchase_price -->
        <div class="col-md-6 col-lg-4" v-if="form.type_of_asset == '1'">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.paid_from_the_purchase_price.label")
            }}</label>
            <input
              type="number"
              v-model="form.paid_from_the_purchase_price"
              :placeholder="$t('form.paid_from_the_purchase_price.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.paid_from_the_purchase_price.$error,
              }"
            />
            <div
              v-if="!$v.form.paid_from_the_purchase_price.decimal && $v.form.paid_from_the_purchase_price.$error"
              class="invalid-feedback"
            >
              {{ numericError($t("form.paid_from_the_purchase_price.label")) }}
            </div>
            <div
              v-else-if="!$v.form.paid_from_the_purchase_price.required && $v.form.paid_from_the_purchase_price.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.paid_from_the_purchase_price.label")) }}
            </div>
          </div>
        </div>
        <!-- value_of_installment -->
        <div
          class="col-md-6 col-lg-4"
          v-if="
            form.type_of_asset == '1' &&
            form.total_purchase_price - form.paid_from_the_purchase_price > 0
          "
        >
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.value_of_installment.label")
            }}</label>
            <input
              type="number"
              v-model="form.value_of_installment"
              :placeholder="$t('form.value_of_installment.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.value_of_installment.$error,
              }"
            />
            <div
              v-if="!$v.form.value_of_installment.decimal && $v.form.value_of_installment.$error"
              class="invalid-feedback"
            >
              {{ numericError($t("form.value_of_installment.label")) }}
            </div>
            <div
              v-else-if="!$v.form.value_of_installment.required && $v.form.value_of_installment.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.value_of_installment.label")) }}
            </div>
            
          </div>
        </div>
        <!-- regular_installments -->
        <div
          class="col-md-6 col-lg-4"
          v-if="
            form.type_of_asset == '1' &&
            form.total_purchase_price - form.paid_from_the_purchase_price > 0
          "
        >
          <div class="form-group period">
            <CustomInputGroup
              v-model="form.regular_installments"
              :label="$t('form.regular_installments.label')"
              :valueType="'number'"
              :options="periodOptions"
              :optionValue="'id'"
              :optionLabel="locale"
              :valuePlaceholder="$t('fixedAssets.key.value')"
              :placeholder="$t('fixedAssets.key.selection')"
              :invalidSelection="$v.form.regular_installments.selection.$error"
              :invalidValue="$v.form.regular_installments.value.$error"
            />
            <div class="error">
              <small
                class="d-block text-danger"
                v-if="
                  $v.form.regular_installments.value.$error &&
                  !$v.form.regular_installments.value.decimal
                "
              >
                {{ numericError($t("fixedAssets.key.value")) }}
              </small>

              <small
                class="p-invalid"
                v-else-if="
                  !$v.form.regular_installments.value.required &&
                  $v.form.regular_installments.value.$error
                "
              >
                {{ requiredError($t("fixedAssets.key.value")) }}
              </small>
              <small
                class="p-invalid"
                v-if="
                  !$v.form.regular_installments.selection.required &&
                  $v.form.regular_installments.selection.$error
                "
              >
                {{ requiredError($t("fixedAssets.key.selection")) }}
              </small>
            </div>
          </div>
        </div>
        <!-- Rent -->
        <!--value_rent  -->
        <div class="col-md-6 col-lg-4" v-if="form.type_of_asset == '2'">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.value_rent.label")
            }}</label>
            <input
              type="number"
              v-model="form.value_rent"
              :placeholder="$t('form.value_rent.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.value_rent.$error,
              }"
            />
            <div
              v-if="!$v.form.value_rent.decimal && $v.form.value_rent.$error"
              class="invalid-feedback"
            >
              {{ numericError($t("form.value_rent.label")) }}
            </div>
            <div
              v-else-if="!$v.form.value_rent.required && $v.form.value_rent.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.value_rent.label")) }}
            </div>
          </div>
        </div>
        <!--regular_rent  -->
        <div class="col-md-6 col-lg-4" v-if="form.type_of_asset == '2'">
          <div class="form-group period">
            <CustomInputGroup
              v-model="form.regular_rent"
              :label="$t('form.regular_rent.label')"
              :valueType="'number'"
              :options="periodOptions"
              :optionValue="'id'"
              :optionLabel="locale"
              :valuePlaceholder="$t('fixedAssets.key.value')"
              :placeholder="$t('fixedAssets.key.selection')"
              :invalidSelection="$v.form.regular_rent.selection.$error"
              :invalidValue="$v.form.regular_rent.value.$error"
            />
            <div class="error">
              <small
                class="d-block text-danger"
                v-if="
                  $v.form.regular_rent.value.$error &&
                  !$v.form.regular_rent.value.decimal
                "
              >
                {{ numericError($t("fixedAssets.key.value")) }}
              </small>

              <small
                class="p-invalid"
                v-else-if="
                  !$v.form.regular_rent.value.required &&
                  $v.form.regular_rent.value.$error
                "
              >
                {{ requiredError($t("fixedAssets.key.value")) }}
              </small>
              <small
                class="p-invalid"
                v-if="
                  !$v.form.regular_rent.selection.required &&
                  $v.form.regular_rent.selection.$error
                "
              >
                {{ requiredError($t("fixedAssets.key.selection")) }}
              </small>
            </div>
          </div>
        </div>
        <!-- regular_periodic_maintenance -->
        <div class="col-md-6 col-lg-4">
          <div class="regular_periodic_maintenance-dropdown form-group">
            <label for="" class="form-label">{{
              $t("form.regular_periodic_maintenance.label")
            }}</label>
            <MultiSelect
              v-model="form.regular_periodic_maintenance"
              :options="MaintenanceOptions"
              optionLabel="name"
              optionValue="code"
              dataKey="code"
              :placeholder="$t('form.regular_periodic_maintenance.placeholder')"
            />
          </div>
        </div>

        <!-- total_depreciation -->
        <div class="col-md-6 mt-6 col-lg-4">
          <div class="form-group">
            <div class="field-checkbox d-flex mt-2">
              <Checkbox
                inputId="binary"
                class="me-2"
                v-model="form.total_depreciation"
                :binary="true"
                :trueValue="1"
                :falseValue="2"
              />
              <label for="binary">{{
                $t("form.total_depreciation.label")
              }}</label>
            </div>
          </div>
        </div>
        <!-- description -->
        <div class="col-12">
          <div class="form-group">
            <label class="form-label">{{ $t("form.description.label") }}</label>
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
      </div>

      <Form
        v-model="assetsGroup"
        :isLoading="upsertLoading"
        :displayForm="displayFormGroup"
        @close="resetForm"
        :error="upsertErrorGroup"
        :parentGroupOptions="groupOption"
        @cancel="resetForm"
        @save="create"
        :header="$t('dialog.header.newGroup')"
      >
      </Form>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/assets/FixedAssets.json"></i18n>
<i18n src="@/lang/erp/assets/AssetsGroup.json"></i18n>
<i18n src="@/lang/erp/assets/DepreciationTable.json"></i18n>

<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Form from "@/components/erp/assets/assetsGroup/Form";
// import FormTable from "@/components/erp/assets/depreciationTable/Form";
import {
  required,
  minLength,
  requiredIf,
  decimal,
  maxLength,
} from "vuelidate/lib/validators";
import moment from "moment";
import AddButton from "@/components/global/utilities/AddButton.vue";
import CustomInputGroup from "@/components/global/custom/CustomInputGroup.vue";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  numericError,
  maxLengthError,
  timeDateError,
} from "@/validation/errors.js";
import { mapGetters, mapActions } from "vuex";
import toast from "@/mixins/global/toast";
import accountSuggestions from "@/mixins/erp/accounts/accountSuggestions.js";

export default {
  mixins: [toast, accountSuggestions],
  components: {
    EditDialog,
    Form,
    CustomInputGroup,
    // FormTable,
    AddButton,
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
    typeAssetOptions: {
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
      displayFormGroup: false,
      displayFormTable: false,

      form: this.value,
      assetsGroup: {
        name: "",
        description: "",
        parentGroup: "",
      },
   
    };
  },
  computed: {
    ...mapGetters("erp/Assets/AssetsGroup", {
      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertErrorGroup: "getUpsertError",
    }),
    upsertErrorGroup: {
      get() {
        return this.getUpsertErrorGroup;
      },
      set(value) {
        this.setUpsertErrorGroup(value);
      },
    },
    groupOption() {
      if (this.$store.getters["erp/Assets/AssetsGroup/getListResponse"])
        return this.$store.getters["erp/Assets/AssetsGroup/getListResponse"]
          .results;
      else return [];
    },
    MaintenanceOptions() {
      if (
        this.$store.getters[
          "erp/regularPeriodicMaintenance/Maintenance/getListResponse"
        ]
      )
        return this.$store.getters[
          "erp/regularPeriodicMaintenance/Maintenance/getListResponse"
        ].results;
      else return [];
    },
  },
  created() {
    if (!this.groupOption.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp/Assets/AssetsGroup/list", params);
    }
    if (!this.MaintenanceOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch(
        "erp/regularPeriodicMaintenance/Maintenance/list",
        params
      );
    }
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
      description: {
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      number: {
        required,
      },
      group: {
        required,
      },
      originalAccount: { required },
      site: {},
      age_assets: {},
      starting_date: {
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      Expiry_date: {
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      type_of_asset: {
        required,
      },
      total_cost: {
        required,
      },
      total_purchase_price: {
        decimal,
        required
        : requiredIf(function () {
            if (this.form.type_of_asset == 1) {
              return true
            }
            return false
          }),
      },
      paid_from_the_purchase_price: {
        decimal,
        required
        : requiredIf(function () {
            if (this.form.type_of_asset == 1 ) {
              return true
            }
            return false

          }),
      },



      regular_installments: {
        selection: {
          required: requiredIf(function () {
            if (
            this.form.type_of_asset == 1 &&
             (this.form.total_purchase_price > this.form.paid_from_the_purchase_price)
             ) {
              return true
            }
            return false

            
          }),
        },
        value: {
          decimal,
          required: requiredIf(function () {
            if (
              this.form.type_of_asset == 1 &&
               (this.form.total_purchase_price > this.form.paid_from_the_purchase_price)) {
              return true
            }
            return false
            
          }),
        },
      },
      value_of_installment: {
        required
        : requiredIf(function () {
            if (this.form.type_of_asset == 1 &&
             (this.form.total_purchase_price > this.form.paid_from_the_purchase_price)) {
              return true
            }
            return false

          }),
      },
      
      regular_rent: {
        selection: {
          required
          : requiredIf(function () {
            if (this.form.type_of_asset == 2) {
              return true
            } 
            return false

          }),
        },
        value: {
          decimal,
          required: requiredIf(function () {
            if (this.form.type_of_asset == 2) {
              return true
            }
            return false
            
          }),
        },
      },
      value_rent: {
        decimal,
          required: requiredIf(function () {
            if (this.form.type_of_asset == 2) {
              return true
            }
            return false
            
          }),
      },

      regular_periodic_maintenance: {},
      total_depreciation: {},
    },
  },

  methods: {
    ...mapActions("erp/Assets/AssetsGroup", ["setUpsertErrorGroup"]),
    // ...mapActions("DepreciationTable", ["setUpsertResponse", "setUpsertError"]),
    htmlTagsError,
    requiredError,
    minLengthError,
    numericError,
    maxLengthError,
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
    ////////// UPSERT ///////////////////
    addRow() {
      this.displayFormGroup = true;
    },
    closeForm() {
      this.upsertErrorGroup = null;
      this.displayFormGroup = false;
    },

    resetForm() {
      this.closeForm();
      this.assetsGroup = {
        name: "",
        description: "",
        parentGroup: "",
      };
    },
    create() {
      this.$store
        .dispatch("erp/Assets/AssetsGroup/create", this.assetsGroup)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          console.log(err);
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
    // ////////// UPSERT Table ///////////////////

    // addRowTable() {
    //   this.displayFormTable = true;
    // },
    // closeFormTable() {
    //   this.upsertErrorTable = null;
    //   this.displayFormTable = false;
    // },

    // resetFormTable() {
    //   this.closeFormTable();
    //   this.depreciationTable = {
    //     name: "",
    //     category: [],
    //   };
    // },
    // createDepreciationTable() {
    //   this.$store
    //     .dispatch("DepreciationTable/create", this.depreciationTable)
    //     .then((res) => {
    //       this.resetFormTable();
    //       const summery = res.statusText;
    //       const details = res.data.message;
    //       this.successToast(summery, details);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       const summery = err.statusText;
    //       const details = err.message;
    //       this.errorToast(summery, details);
    //     });
    // },
  },
};
</script>
