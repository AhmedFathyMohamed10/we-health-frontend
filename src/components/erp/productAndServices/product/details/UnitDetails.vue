<template>
  <div class="form">
    <div class="table-wrapper my-2" v-if="form_arr.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr class="border-bottom-custom">
                    <th scope="col">#</th>
                    <th scope="col">{{ $t("product.key.unit.name") }}</th>
                    <th scope="col">
                      {{ $t("product.key.unit.equivalentQuantity") }}
                    </th>
                    <th v-if="isControl" scope="col">
                      {{ $t("table.thead.controls") }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in form_arr" :key="index">
                    <td class="align-middle">
                      {{ parseInt(index) + 1 }}
                    </td>
                    <td class="align-middle">
                      <div>
                        <a
                          class="fw-bold"
                          href="javascript:void(0)"
                          @click="readDetails(val)"
                        >
                          {{ findLocaleOption(productUnitOptions, val.unit) }}
                        </a>
                      </div>
                    </td>
                    <td class="align-middle">
                      <span v-if="val.equivalentQuantity_value">
                        {{ val.equivalentQuantity_value }} /
                      </span>
                      <span v-if="val.equivalentQuantity_unit">
                        {{
                          findLocaleOption(
                            productUnitOptions,
                            val.equivalentQuantity_unit
                          )
                        }}
                      </span>
                    </td>
                    <td v-if="isControl" class="align-middle">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <EditButton
                          class="me-2"
                          @edit="openUpdate(val)"
                        ></EditButton>
                        <DeleteButton
                          @delete="openDeleteDialog(index, val)"
                        ></DeleteButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Base>
    </div>

    <DetailsDialog
      :display="displayDetailsDialog"
      @hide="closeDetailsDialog"
      :header="$t('dialog.header.unitDetails')"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-borderless text-nowrap mb-0">
              <tbody>
                <tr v-for="(value, key) in recordDetails" :key="key">
                  <td v-if="key !== 'price'" class="">
                    <span
                      v-if="
                        key !== 'price' &&
                        key !== 'equivalentQuantity_unit' &&
                        key !== 'equivalentQuantity_value'
                      "
                    >
                      {{ $t(`product.key.unit.${key}`) }}
                    </span>
                    <span v-if="key == 'equivalentQuantity_unit'">
                      {{ $t(`product.key.unit.equivalentQuantity`) }}
                    </span>
                  </td>
                  <td v-if="key == 'price'" class="text-start p-0">
                    <div v-for="(dict, index) in value" :key="index">
                      <tr v-for="(price, key) in dict" :key="key">
                        <td
                          v-if="
                            key !== 'status' &&
                            key !== 'value' &&
                            key !== 'name' &&
                            key !== 'id' &&
                            key !== 'pricingPolicy_code' &&
                            key !== 'code'
                          "
                          class=""
                        >
                          {{ $t(`product.key.unit.${key}`) }}
                        </td>

                        <td v-if="key == 'value'" class="">
                          {{ dict.name }}
                        </td>

                        <td
                          v-if="
                            key !== 'status' &&
                            key !== 'name' &&
                            key !== 'id' &&
                            key !== 'pricingPolicy_code' &&
                            key !== 'code'
                          "
                          class=""
                        >
                          {{ price }}
                        </td>
                      </tr>
                    </div>
                  </td>
                  <td class="">
                    <span v-if="!value" class="text-muted">------</span>
                    <span
                      v-if="
                        key != 'price' &&
                        key != 'unit' &&
                        key !== 'equivalentQuantity_unit' &&
                        key !== 'equivalentQuantity_value'
                      "
                      >{{ value }}</span
                    >
                    <span v-if="key == 'equivalentQuantity_unit'">
                      {{ recordDetails["equivalentQuantity_value"] }} /{{
                        findLocaleOption(productUnitOptions, value)
                      }}
                    </span>
                    <span v-if="key == 'unit'">
                      {{ findLocaleOption(productUnitOptions, value) }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DetailsDialog>
    <DeleteDialog
      :display="displayDeleteDialog"
      @cancel="closeDeleteDialog"
      @delete="deleteRow"
    ></DeleteDialog>
  </div>
</template>
  <i18n src="@/lang/erp/productAndService/product.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
  
<script>
import Base from "@/components/global/utilities/Base.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import { mapActions } from "vuex";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import { cloneDeep } from "lodash";

export default {
  components: {
    Base,
    DetailsDialog,
    DeleteDialog,
    EditButton,
    DeleteButton,
  },
  props: {
    value: {
      type: Array,
    },
    productUnitOptions: {
      type: Array,
    },
    isControl: {
      type: Boolean,
    },
  },
  watch: {
    value() {
      this.form_arr = this.value;
    },
  },
  data() {
    return {
      displayDeleteDialog: false,
      displayDetailsDialog: false,
      form_arr: this.value,
      recordDetails: {},
      deletedUnitArr: [],
      unitIsDeleted: {},
      indexToDelete: null,
      form: {},
    };
  },
  methods: {
    ...mapActions("erp/ProductAndService/productAndService/product", [
      "setDeletedUnit",
    ]),
    findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value || item.code == value);
      if (item) return item["name"];
      else return value;
    },
    ////////////////////////////////
    closeDetailsDialog() {
      this.recordDetails = null;
      this.displayDetailsDialog = false;
    },
    readDetails(record) {
      const {
        unit,
        equivalentQuantity_unit,
        equivalentQuantity_value,
        barcode,
        lastPurchase,
        price,
      } = record;
      this.recordDetails = {
        unit,
        equivalentQuantity_unit,
        equivalentQuantity_value,
        barcode,
        lastPurchase,
        price,
      };
      this.displayDetailsDialog = true;
    },
    ////////////////////////
    openDeleteDialog(index, record) {
      this.displayDeleteDialog = true;
      this.indexToDelete = index;
      this.unitIsDeleted = record;
    },
    deleteRow() {
      this.form_arr.splice(this.indexToDelete, 1);
      this.deletedUnitArr = [];
      if ("id" in this.unitIsDeleted) {
        this.deletedUnitArr.push(this.unitIsDeleted);
        this.setDeletedUnit(this.deletedUnitArr);
      }
      this.$emit("delete_record", this.indexToDelete);
      this.closeDeleteDialog();
    },

    closeDeleteDialog() {
      this.displayDeleteDialog = false;
      this.indexToDelete = null;
      this.unitIsDeleted = {};
      this.deletedUnitArr = [];
    },

    openUpdate(item) {
      const {
        unit,
        equivalentQuantity_unit,
        equivalentQuantity_value,
        lastPurchase,
        barcode,
        code,
        price,
        id,
      } = item;
      this.form = {
        unit,
        equivalentQuantity_unit,
        equivalentQuantity_value,
        lastPurchase,
        barcode,
        code,
        price,
        id,
      };
      this.$emit("openForm", this.form);
    },
  },
};
</script>
  