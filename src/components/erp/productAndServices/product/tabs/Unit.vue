<template>
  <div class="form">
    <div class="row">
      <div class="col-md-12 mt-1">
        <label for="binary">{{ $t("unit.header") }}</label>
        <div class="row" v-if="error">
          <div class="col-12">
            <div class="errors" v-if="typeof error === 'object'">
              <Message
                severity="error"
                v-for="(value, key) in error.unit"
                :key="key"
                :closable="false"
              >
                <span v-if="typeof value === 'string'">{{ value }}</span>
                <span v-else>{{ value[0] }}</span>
              </Message>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xxl-6">
        <div class="form-group">
          <label class="form-label">{{ $t("unit.type.label") }}</label>
          <Dropdown
            v-model="action.type_of_order_unit"
            :options="typeActions"
            :optionLabel="locale"
            optionValue="id"
            dataKey="id"
            :disabled="disabled_type_of_order_unit"
            :placeholder="$t('unit.type.placeholder')"
            :class="{
              'p-invalid': $v.action.type_of_order_unit.$error,
            }"
          />
          <div
            v-if="
              !$v.action.type_of_order_unit.required &&
              $v.action.type_of_order_unit.$error
            "
            class="p-error"
          >
            {{ requiredError($t("unit.unit.label")) }}
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xxl-6" v-if="action.type_of_order_unit == 1">
        <div class="form-group">
          <label class="form-label">{{ $t("unit.unit.label") }}</label>
          <Dropdown
            v-model="rowToAdd.unit"
            :options="options"
            optionLabel="name"
            optionValue="id"
            dataKey="id"
            :placeholder="$t('unit.unit.placeholder')"
            :filter="true"
            :disabled="disabled_unit"
            :class="{
              'p-invalid': $v.rowToAdd.unit.$error,
            }"
          />
          <div
            v-if="!$v.rowToAdd.unit.required && $v.rowToAdd.unit.$error"
            class="p-error"
          >
            {{ requiredError($t("unit.unit.label")) }}
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xxl-6" v-else>
        <div class="form-group">
          <label class="form-label">{{ $t("unit.unit.label") }}</label>
          <Dropdown
            v-model="rowToAdd.unit"
            :options="productUnits"
            optionLabel="name"
            optionValue="id"
            dataKey="id"
            :placeholder="$t('unit.unit.placeholder')"
            :filter="true"
            :disabled="disabled_unit"
            :class="{
              'p-invalid': $v.rowToAdd.unit.$error,
            }"
          />
          <div
            v-if="!$v.rowToAdd.unit.required && $v.rowToAdd.unit.$error"
            class="p-error"
          >
            {{ requiredError($t("unit.unit.label")) }}
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xxl-6" v-if="action.type_of_order_unit == 1">
        <div class="form-group discount">
          <label class="form-label">{{
            $t("unit.equivalentQuantity_value.label")
          }}</label>
          <InputGroupWrapper>
            <InputText
              v-model.trim="rowToAdd.equivalentQuantity_value"
              type="number"
              min="0"
              :placeholder="$t('unit.equivalentQuantity_value.placeholder')"
              :class="{
                'p-invalid': $v.rowToAdd.equivalentQuantity_value.$error,
              }"
            />
            <Dropdown
              v-model="rowToAdd.equivalentQuantity_unit"
              :placeholder="$t('unit.equivalentQuantity_unit.placeholder')"
              :options="productUnits"
              optionLabel="name"
              optionValue="id"
              :disabled="disabled_equivalentQuantity_unit"
              :class="{
                'p-invalid': $v.rowToAdd.equivalentQuantity_unit.$error,
              }"
            />
          </InputGroupWrapper>
          <div class="error">
            <small
              class="p-invalid"
              v-if="
                $v.rowToAdd.equivalentQuantity_unit.$error &&
                !$v.rowToAdd.equivalentQuantity_unit.required
              "
            >
              {{ requiredError($t("form.discount.dropdownPlaceholder")) }}
            </small>
            <small
              class="p-invalid"
              v-if="
                $v.rowToAdd.equivalentQuantity_value.$error &&
                !$v.rowToAdd.equivalentQuantity_value.required
              "
            >
              {{ requiredError($t("form.discount.valuePlaceholder")) }}
            </small>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xxl-6" v-else>
        <div class="form-group discount">
          <label class="form-label">{{
            $t("unit.equivalentQuantity_value.label")
          }}</label>
          <InputGroupWrapper>
            <InputText
              v-model.trim="rowToAdd.equivalentQuantity_value"
              type="number"
              min="0"
              :disabled="disabled_equivalentQuantity_value"
              :placeholder="$t('unit.equivalentQuantity_value.placeholder')"
              :class="{
                'p-invalid': $v.rowToAdd.equivalentQuantity_value.$error,
              }"
            />
            <Dropdown
              v-model="rowToAdd.equivalentQuantity_unit"
              :placeholder="$t('unit.equivalentQuantity_unit.placeholder')"
              :options="options"
              optionLabel="name"
              optionValue="id"
              :disabled="disabled_equivalentQuantity_unit"
              :class="{
                'p-invalid': $v.rowToAdd.equivalentQuantity_unit.$error,
              }"
            />
          </InputGroupWrapper>
          <div class="error">
            <small
              class="p-invalid"
              v-if="
                $v.rowToAdd.equivalentQuantity_unit.$error &&
                !$v.rowToAdd.equivalentQuantity_unit.required
              "
            >
              {{ requiredError($t("form.discount.dropdownPlaceholder")) }}
            </small>
            <small
              class="p-invalid"
              v-if="
                $v.rowToAdd.equivalentQuantity_value.$error &&
                !$v.rowToAdd.equivalentQuantity_value.required
              "
            >
              {{ requiredError($t("form.discount.valuePlaceholder")) }}
            </small>
          </div>
        </div>
      </div>

      <div v-if="pricingPolicies.length > 0">
        <div v-for="(pricingPolicy, index) in pricingPolicies" :key="index">
          <div class="row">
            <div class="col-md-6 col-xxl-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  pricingPolicy.name
                }}</label>
                <input
                  type="number"
                  v-model="rowToAdd.price[index].value"
                  :placeholder="$t('unit.price.placeholder')"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-md-6 col-xxl-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("unit.profitRatio.label")
                }}</label>
                <input
                  type="number"
                  v-model="rowToAdd.price[index]['profitRatio']"
                  :placeholder="$t('unit.price.placeholder')"
                  class="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xxl-6">
        <div class="form-group">
          <label for="" class="form-label">{{
            $t("unit.lastPurchase.label")
          }}</label>
          <input
            type="text"
            v-model="rowToAdd.lastPurchase"
            :placeholder="$t('unit.lastPurchase.placeholder')"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-6 col-xxl-6">
        <div class="form-group">
          <label for="" class="form-label">{{
            $t("unit.barcode.label")
          }}</label>
          <input
            type="text"
            v-model="rowToAdd.barcode"
            :placeholder="$t('unit.barcode.placeholder')"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-6 my-2" v-if="isupdating">
        <button
          class="btn btn-pill btn-success-gradient w-100"
          @click.prevent="save_edite"
        >
          <!-- <span v-if="isLoading"
            ><i class="pi pi-spin pi-spinner" style="font-size: 1rem"></i
          ></span> -->
          <!-- <span :class="isLoading ? 'mx-2' : ''">{{ $t("btns.save") }}</span> -->
          <span>{{ $t("btns.save") }}</span>
        </button>
      </div>
      <div class="col-md-12 me-0 d-flex" v-else>
        <AddButton @add="addRow"></AddButton>
        <div class="error">
          <small
            class="d-block text-danger"
            v-if="$v.unit.$error && !$v.unit.required"
          >
            {{ maxRecordsError($t("unit.header")) }}
          </small>
        </div>
      </div>
    </div>
    <UnitDetails
      @openForm="openEditeForm"
      @delete_record="deletedata"
      :value="form"
      :productUnitOptions="productUnits"
      :isControl="isControl"
    />
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/productAndService/product.json"></i18n>
<script>
import AddButton from "@/components/global/utilities/AddButton.vue";
import InputGroupWrapper from "@/components/global/UI/inputs/InputGroupWrapper";
import { required, requiredIf, decimal } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import productSuggestion from "@/mixins/erp/productAndServices/product/suggestions/productSuggestions";
import UnitDetails from "@/components/erp/productAndServices/product/details/UnitDetails.vue";

import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxRecordsError,
  maxLengthError,
} from "@/validation/errors.js";
export default {
  mixins: [productSuggestion],

  components: {
    AddButton,
    InputGroupWrapper,
    UnitDetails,
  },
  props: {
    v: {
      type: Object,
      required: true,
    },
    error: {
      type: Object,
    },
    productUnits: {
      type: Array,
    },
    pricingPolicies: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters("erp/ProductAndService/productAndService/product", {
      getUnit: "getUnit",
      getForm: "getForm",
    }),
    action: {
      get() {
        return this.getForm;
      },
      set(value) {
        this.setForm(value);
      },
    },
    form: {
      get() {
        return this.getUnit;
      },
      set(value) {
        this.setFormUnit(value);
      },
    },
  },
  created() {
    this.destructPrice();
    if (this.action.type_of_order_unit != null) {
      this.disabled_type_of_order_unit = true;
    }
    if (this.action.type_of_order_unit == 1) {
      const last = this.form.slice(-1);
      this.rowToAdd.equivalentQuantity_unit = last[0].unit;
      this.disabled_equivalentQuantity_unit = true;
    }
    if (this.action.type_of_order_unit == 2) {
      const last = this.form.slice(-1);
      if (last[0].equivalentQuantity_unit == null) {
        this.disabled_equivalentQuantity_unit = true;
        this.disabled_equivalentQuantity_value = true;
        this.disabled_unit = true;
      } else {
        this.rowToAdd.unit = last[0].equivalentQuantity_unit;
        this.disabled_unit = true;
      }
    }
  },
  watch: {
    value() {
      this.options = this.productUnits;
    },
  },
  data() {
    return {
      isupdating: false,
      isControl: true,
      rowToAdd: {
        unit: null,
        equivalentQuantity_value: null,
        equivalentQuantity_unit: null,
        price: [],
        barcode: "",
        lastPurchase: "",
      },
      disabled_equivalentQuantity_value: false,
      options: this.productUnits,
      disabled_type_of_order_unit: false,
      disabled_equivalentQuantity_unit: false,
      disabled_unit: false,
      unit_data: null,
      equivalentQuantity_unit_data: null,
      arr_unit: [],
      typeActions: [
        { en: "Ascending", ar: "تصاعدي", id: 1 },
        { en: "Descending", ar: "تنازلي", id: 2 },
      ],
    };
  },
  validations: {
    unit: {
      required: requiredIf(function () {
        if (this.action.type_of_order_unit == 2 && this.rowToAdd.unit == null) {
          return true;
        }
        return false;
      }),
    },
    action: {
      type_of_order_unit: {
        required,
      },
    },

    rowToAdd: {
      unit: {
        required: requiredIf(function () {
          if (this.disabled_unit == false) {
            return true;
          }
          return false;
        }),
      },
      equivalentQuantity_value: {
        decimal,
        required: requiredIf(function () {
          if (
            (this.action.type_of_order_unit == 1 &&
              (this.rowToAdd.equivalentQuantity_value == null ||
                this.rowToAdd.equivalentQuantity_value == "") &&
              this.rowToAdd.equivalentQuantity_unit != null) ||
            (this.action.type_of_order_unit == 2 &&
              (this.rowToAdd.equivalentQuantity_value == null ||
                this.rowToAdd.equivalentQuantity_value == "") &&
              this.rowToAdd.equivalentQuantity_unit != null)
          ) {
            return true;
          }
          return false;
        }),
      },
      equivalentQuantity_unit: {
        required: requiredIf(function () {
          if (
            (this.action.type_of_order_unit == 1 &&
              this.rowToAdd.equivalentQuantity_value == null &&
              this.rowToAdd.equivalentQuantity_unit != null) ||
            (this.action.type_of_order_unit == 2 &&
              this.rowToAdd.equivalentQuantity_value == null &&
              this.rowToAdd.equivalentQuantity_unit != null)
          ) {
            return true;
          }
          return false;
        }),
      },
      equivalentQuantity: {
        value: {
          decimal,
        },
        selection: {},
      },
      barcode: {},
      lastPurchase: {},
    },
  },
  methods: {
    ...mapActions("erp/ProductAndService/productAndService/product", [
      "setFormUnit",
      "setForm",
    ]),
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    maxRecordsError,

    destructPrice() {
      this.pricingPolicies.forEach((element) => {
        const { id, name, code } = element;
        this.rowToAdd.price.push({
          pricingPolicy_id: id,
          pricingPolicy_name: name,
          pricingPolicy_code: code,
          value: null,
          profitRatio: null,
        });
      });
    },
    get_option() {
      this.options = this.productUnits.filter(
        (item) => !this.arr_unit.includes(item.id)
      );
      return this.options;
    },

    resetForm() {
      this.rowToAdd = {
        unit: null,
        equivalentQuantity_value: null,
        equivalentQuantity_unit: null,
        price: [],
        barcode: "",
        lastPurchase: "",
      };
      this.destructPrice();
      this.$v.rowToAdd.$reset();
      this.$v.$reset();
      this.rowToAdd.equivalentQuantity_unit = this.unit_data;
      this.rowToAdd.unit = this.equivalentQuantity_unit_data;
    },

    addRow() {
      // if (this.action.type_of_order_unit == 2 && this.rowToAdd.unit == null) {
      //   this.flag_descending = true;
      // }
      // this.disabled_type_of_order_unit = true;

      this.$v.unit.$touch();
      this.$v.action.type_of_order_unit.$touch();
      this.$v.rowToAdd.$touch();
      if (
        !this.$v.rowToAdd.$invalid &&
        !this.$v.action.type_of_order_unit.$invalid &&
        !this.$v.unit.$invalid
      ) {
        this.form.push({ ...this.rowToAdd });
        this.disabled_type_of_order_unit = true;

        // Ascending
        if (this.action.type_of_order_unit == 1) {
          this.unit_data = this.rowToAdd.unit;
          this.disabled_equivalentQuantity_unit = true;
          this.arr_unit.push(this.rowToAdd.unit);
          // this.get_option();
        }
        // Descending
        if (this.action.type_of_order_unit == 2) {
          this.equivalentQuantity_unit_data =
            this.rowToAdd.equivalentQuantity_unit;
          this.disabled_unit = true;
          this.arr_unit.push(this.rowToAdd.equivalentQuantity_unit);
          // if enter min unit in table in Descending
          if (this.rowToAdd.equivalentQuantity_unit == null) {
            this.disabled_equivalentQuantity_unit = true;
            this.disabled_equivalentQuantity_value = true;
            this.disabled_unit = true;
          }
          // this.arr_unit.push(this.rowToAdd.unit);
        }
        this.get_option();
        this.resetForm();
      }
    },
    openEditeForm(data_item) {
      this.rowToAdd = data_item;
      this.isupdating = true;
      if (this.action.type_of_order_unit == 2) {
        // if user went enter equivelent quantity to min unit
        if (this.rowToAdd.equivalentQuantity_unit == null) {
          this.disabled_equivalentQuantity_unit = false;
          this.disabled_equivalentQuantity_value = false;
        } else {
          this.disabled_equivalentQuantity_unit = true;
        }
      } else if (this.action.type_of_order_unit == 1) {
        if (this.rowToAdd.equivalentQuantity_unit == null) {
          this.disabled_equivalentQuantity_value = true;
        }
      }
      this.disabled_unit = true;
    },
    save_edite() {
      let index = this.form.findIndex((item) => item.id == this.rowToAdd.id);
      if (index > -1) {
        this.form[index] = this.rowToAdd;
      }
      const last = this.form.slice(-1);
      if (this.action.type_of_order_unit == 1) {
        this.unit_data = last[0].unit;
        this.disabled_equivalentQuantity_unit = true;
        this.disabled_unit = false;
      } else if (this.action.type_of_order_unit == 2) {
        // if enter min unit in table
        if (last[0].equivalentQuantity_unit == null) {
          this.disabled_equivalentQuantity_unit = true;
          this.disabled_equivalentQuantity_value = true;
        } else {
          this.equivalentQuantity_unit_data = last[0].equivalentQuantity_unit;
          this.disabled_equivalentQuantity_unit = false;
        }
        this.disabled_unit = true;
      }
      this.isupdating = false;
      this.resetForm();
      // this.setFormUnit(this.form);
    },

    deletedata(index) {
      if (index > 0) {
        if (this.action.type_of_order_unit == 2) {
          this.equivalentQuantity_unit_data =
            this.form[index - 1].equivalentQuantity_unit;
          this.disabled_unit = true;
          this.resetForm();
        } else if (this.action.type_of_order_unit == 1) {
          this.unit_data = this.form[index - 1].unit;
          this.disabled_equivalentQuantity_unit = true;
          this.resetForm();
        }
      }
      if (index == 0 && this.form.length == 0) {
        console.log("dfggshfsdfghklfrg  ");
        this.disabled_equivalentQuantity_unit = false;
        this.disabled_unit = false;
        this.equivalentQuantity_unit_data;
        this.unit_data = null;
        this.disabled_type_of_order_unit = false;
        this.resetForm();
      }
    },
  },
};
</script>