<template>
  <div class="form">
    <div class="row" v-if="error">
      <div class="col-12">
        <div class="errors" v-if="typeof error === 'object'">
          <Message
            severity="error"
            v-for="(value, key) in error.alternativeBarcode"
            :key="key"
            :closable="false"
          >
            <span v-if="typeof value === 'string'">{{ value }}</span>
            <span v-else>{{ value[0] }}</span>
          </Message>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-lg-5">
        <div class="form-group">
          <label for="" class="form-label">{{
            $t("alternativeBarcode.unit.label")
          }}</label>
          <Dropdown
            v-model="rowToAdd.unit"
            :options="productUnits"
            :optionValue="'code'"
            optionLabel="name"
            dataKey="id"
            :placeholder="$t('alternativeBarcode.unit.placeholder')"
            :class="{ 'p-invalid': $v.rowToAdd.unit.$error }"
          />
          <div
            v-if="!$v.rowToAdd.unit.required && $v.rowToAdd.unit.$error"
            class="p-error"
          >
            {{ requiredError($t("alternativeBarcode.unit.label")) }}
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-5">
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

      <div class="col-md-2 me-0 d-flex">
        <div class="form-group">
          <AddButton @add="addRow"></AddButton>
          <!-- <label data-v-2a5c4c3c="" for="" class="form-label invisible"
            >Add</label
          >
          <button
            class="btn btn-icon rounded-circle btn-success"
            @click="addRow"
          >
            <i class="fa fa-plus fa-md"></i>
          </button> -->
        </div>
      </div>
    </div>
    <AlternativeBarcodeDetails
        :value="form"
        :productUnitOptions="productUnits"
        :isControl="isControl"
      />
  </div>
</template>
<i18n src="@/lang/erp/productAndService/product.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import { requiredError, inputError } from "@/validation/errors.js";
import AlternativeBarcodeDetails from "@/components/erp/productAndServices/product/details/AlternativeBarcodeDetails.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";

export default {
  mixins: [ ],
  props: {
    error: {
      type: Object,
    },
    productUnits:{
      type: Array,
    },
  },
  components: {
    AlternativeBarcodeDetails,
    AddButton
  },

  data() {
    return {
      isControl:true,
      recordDetails: null,
      displayDetailsDialog: false,
      displayDeleteDialog: false,
      indexToDelete: null,
      rowToAdd: {
        barcode: null,
        unit: null,
      },
      dataOfIndexDeleted: [],
      dataObject: {},
    };
  },
  computed: {
    ...mapGetters("erp/ProductAndService/productAndService/product", {
      getAlternativeBarcode: "getAlternativeBarcode",
    }),

    form: {
      get() {
        return this.getAlternativeBarcode;
      },
      set(value) {
        this.setAlternativeBarcode(value);
      },
    },
  },
  created() {},
  validations: {
    rowToAdd: {
      unit: {
        required,
      },
      barcode: {},
    },
  },

  methods: {
    requiredError,
    inputError,

    ...mapActions("erp/ProductAndService/productAndService/product", [
      "setAlternativeBarcode",
      "setDeletedAlternatevBarcode",
    ]),

    findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value || item.code == value);
      if (item) return item["name"];
      else return value;
    },

    resetForm() {
      this.rowToAdd = {
        barcode: null,
        unit: null,
      };
      this.$v.rowToAdd.$reset();
      this.$v.$reset();
    },
    reset() {
      this.resetForm();
      this.form = [];
    },
    addRow() {
      this.$v.rowToAdd.$touch();
      if (!this.$v.rowToAdd.$invalid) {
        this.form.push({ ...this.rowToAdd });
        this.resetForm();
      }
    },
    // ////////////////////////
    // openDeleteDialog(index, val) {
    //   this.displayDeleteDialog = true;
    //   this.dataObject = val;
    //   this.indexToDelete = index;
    // },
    // closeDeleteDialog() {
    //   this.displayDeleteDialog = false;
    //   this.indexToDelete = null;
    // },
    // deleteRow() {
    //   this.form.splice(this.indexToDelete, 1);
    //   if ("id" in this.dataObject) {
    //     this.dataOfIndexDeleted.push(this.dataObject);
    //     this.setDeletedAlternatevBarcode(this.dataOfIndexDeleted);
    //   }
    //   this.dataObject = {};
    //   this.closeDeleteDialog();
    // },
  },
};
</script>
  