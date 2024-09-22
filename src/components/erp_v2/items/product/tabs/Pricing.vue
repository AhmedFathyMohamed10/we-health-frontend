<template>
  <div class="contact">
    <div class="row" v-if="error">
      <div class="col-12">
        <div class="errors" v-if="typeof error === 'object'">
          <Message severity="error" v-for="(value, key) in error.Contact" :key="key" :closable="false">
            <span v-if="typeof value === 'string'">{{ value }}</span>
            <span v-else>{{ value[0] }}</span>
          </Message>
        </div>
      </div>
    </div>

    <Base :title="$t('pricing.pricingUnits')" :icon="'pi pi-check-square'" :showBreadCrumb="false"
      :showToggleContent="false" :showFullScreen="false">
      <div class="row" v-if="product.item_type == 1">
        <div class="col-lg-4 col-sm-6">
          <Base :title="$t('pricing.units')">
          <div class="row">
            <div class="col-10">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("pricing.unit.label") }}</label>
                <Dropdown v-model="rowToAdd.unit" :options="arr_unit" optionLabel="name_en" optionValue="id"
                  :placeholder="$t('pricing.unit.placeholder')" :class="{ 'p-invalid': $v.rowToAdd.unit.$error, }" />
                <div v-if="!$v.rowToAdd.unit.required && $v.rowToAdd.unit.$error" class="p-error">
                  {{ requiredError($t("pricing.unit.label")) }}
                </div>
              </div>
            </div>
            <div class="col-2">
              <Unit></Unit>
            </div>
          </div>
          <div class="row">

            <div class="col-10">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("pricing.equivalent_to.label") }}</label>
                <InputGroupWrapper>
                  <InputText v-model.trim="rowToAdd.equivalent_to_value" type="number" min="0"
                    :placeholder="$t('input.value.placeholder')"
                    :class="{ 'p-invalid': $v.rowToAdd.equivalent_to_value.$error }" :disabled="disable_equivalent_to" />
                  <Dropdown v-model="rowToAdd.equivalent_to_selection" :placeholder="$t('input.selection.placeholder')"
                    disabled :options="unitOptions" optionLabel="name_en" optionValue="id"
                    :class="{ 'p-invalid': $v.rowToAdd.equivalent_to_selection.$error }" />
                </InputGroupWrapper>
                <div v-if="!$v.rowToAdd.equivalent_to_value.required &&  $v.rowToAdd.equivalent_to_value.$error " class="p-error">
                  {{ requiredError($t("pricing.equivalent_to.label")) }}
                </div>
                <div v-if="!$v.rowToAdd.equivalent_to_selection.required && $v.rowToAdd.equivalent_to_selection.$error " class="p-error">
                  {{ requiredError($t("pricing.equivalent_to.label")) }}
                </div>


              </div>
            </div>
            <div class="col-10">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("pricing.unit_barcode.label") }}</label>
                <input type="text" v-model="rowToAdd.unit_barcode" :placeholder="$t('pricing.unit_barcode.placeholder')"
                  class="form-control" />
              </div>
            </div>

          </div>
          </Base>
        </div>
        <div class="col-lg-4 col-sm-6">
          <Base :title="$t('pricing.purchasing')">
          <div class="row">
            <div class="col-10">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("pricing.purchase.label") }}</label>
                <input type="text" v-model="rowToAdd.purchase" :placeholder="$t('pricing.purchase.placeholder')"
                  class="form-control" />
              </div>
            </div>
            <div class="col-10">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("pricing.last_purchase.label") }}</label>
                <input type="text" v-model="rowToAdd.last_purchase" class="form-control"
                  :placeholder="$t('pricing.last_purchase.placeholder')" />
              </div>
            </div>
          </div>
          </Base>
        </div>
        <div class="col-lg-4 col-sm-6">
          <Base :title="$t('pricing.pricingPolicies')">

          <div class="row">
            <div class="col-10">
              <div class="form-group">
                <label for="" class="form-label">{{$t("pricing.pricing.label") }}</label>
                <MultiSelect
                    v-model="pricing" 
                    :options="priceOptions" 
                    optionLabel="name_en" 
                    dataKey="code"
                    :placeholder="$t('pricing.pricing.placeholder')" 
                    :class="{ 'p-invalid': $v.pricing.$error, }"
                    display="chip" @before-hide="addPricing"
                >
                </MultiSelect>
                <div v-if="!$v.pricing.required && $v.pricing.$error" class="p-error">
                  {{ requiredError($t("pricing.unit.label")) }}</div>
              </div>
              <div v-if="duplicateMessage" class="p-error">
                {{ duplicateMessage }}
              </div>
            </div>
            <div class="col-2">
              <Pricing></Pricing>
            </div>
          </div>
          <div v-if="rowToAdd.pricing" class="row ">
            <div class="col-12">
              <div v-for="(item, index) in rowToAdd.pricing" :key="index">
                <div class="form-group">
                  <label for="" class="form-label">{{ item.pricing_name }}</label>
                  <InputGroupWrapper>
                    <InputText v-model.trim="item.value" type="number" min="0" @input="index_of_pricing(index)"
                      :placeholder="$t('input.value.placeholder')" />
                    <InputText type="number" v-model="item.profitRatio" :placeholder="$t('pricing.profitRatio.label')"
                      @input="index_of_pricing(index)" class="custom-group" />
                    <!-- <InputNumber v-model="item.profitRatio" prefix="%" @input="index_of_pricing(index)" /> -->
                  </InputGroupWrapper>
                </div>
              </div>
            </div>
          </div>
          </Base>
        </div>
      </div>
      <div v-if="product.item_type == 2">
        <div class="row">
          <div class="col-12">
            <Base>
              <div class="form-group">
                <label for="" class="form-label">{{ $t("pricing.ServicePrice.label") }}</label>
                <input type="text" v-model="rowToAdd.purchase" :placeholder="$t('pricing.purchase.placeholder')"
                  class="form-control" />
              </div>
            </Base>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="custom-footer d-flex justify-content-end">

          <Button :label="isUpdating ? $t('btns.save') : $t('btns.add')" :icon="isUpdating ? 'pi pi-check' : 'pi pi-plus'"
            :iconPos="locale == 'ar' ? 'right' : 'left'" @click="isUpdating ? save_edit() : addPricingAndUnit()" />

        </div>
      </template>
    </Base>

    <Base v-if="form.length > 0" :title="$t('product.product_pricing_sheet')">
    <div class="row">
      <div class="table-responsive">
        <table class="table table-sm text-center">
          <thead>
            <tr>
              <th scope="col">{{ $t("pricing.unit.label") }}</th>
              <th scope="col">{{ $t("pricing.equivalent_to.label") }}</th>
              <th scope="col">{{ $t("pricing.unit_barcode.label") }}</th>
              <th scope="col">{{ $t("pricing.purchase.label") }}</th>
              <th scope="col">{{ $t("pricing.last_purchase.label") }}</th>
              <th scope="col" v-for="item in arrPricing" :key="item.id">
                {{ $t(item.pricing_name) }}</th>
              <th scope="col">{{ $t("table.thead.controls") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in form" :key="index">
              <td class="align-middle fw-bold">
                <span>{{ findLocaleOption(unitOptions, item.unit) }}</span>
              </td>

              <td class="align-middle">
                <span v-if="item.equivalent_to_value">
                  {{ item.equivalent_to_value }} /
                </span>
                <span v-if="item.equivalent_to_selection">
                  {{ findLocaleOption(unitOptions, item.equivalent_to_selection) }}
                </span>
              </td>
              <td class="align-middle fw-bold">
                <span>{{ item.unit_barcode }}</span>
              </td>
              <td class="align-middle fw-bold">
                <span>{{ item.purchase }}</span>
              </td>
              <td class="align-middle fw-bold">
                <span>{{ item.last_purchase }}</span>
              </td>
              <td class="align-middle fw-bold" v-for="i in arrPricing" :key="i.id">
                <div v-for="item_pricing in item.pricing" :key="item_pricing.pricing_id">
                  <span v-if="i.pricing_id === item_pricing.pricing_id">{{ item_pricing.value }} LE</span>
                  <span v-else></span>

                </div>
              </td>



              <td class="align-middle">
                <div class="d-flex justify-content-center align-items-center gap-1">
                  <i v-if="index !== 0" class="pi pi-sort-alt text-success font-size-16"
                    @click="equalPricingUnit(index)" />
                  <EditButton @edit="openEditPricingAndUnit(item, index)"></EditButton>
                  <DeleteButton v-if="form.length == index + 1" @delete="openDeleteRow(item, index)"></DeleteButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    </Base>

    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>

  </div>
</template>
<i18n src="@/lang/erp_v2/items/product.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import Base from "@/components/global/utilities/Base.vue";
import InputGroupWrapper from '@/components/global/UI/inputs/InputGroupWrapper';
import Unit from "@/components/erp_v2/items/product/addForm/Unit.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
// import AddButton from "@/components/global/utilities/AddButton.vue";
import { required, requiredIf } from "vuelidate/lib/validators";
import { requiredError } from "@/validation/errors.js";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Pricing from "@/components/erp_v2/items/product/addForm/Pricing.vue";

export default {
  props: {
    error: {
      type: Object,
    },
    unitOptions: {
      type: Array,
      default() {
        return [];
      },
    },
    v: {
      type: Object,
      required: true,
    },
  },
  components: {
    Base,
    InputGroupWrapper,
    Unit,
    // AddButton,
    EditButton,
    DeleteButton,
    Pricing,
    DeleteDialog
  },
  data() {
    return {
      value_of_pricing: null,
      profitRatio_of_pricing: null,
      disable_equivalent_to: true,
      data_of_equivalent_to: null,
      displayDeleteDialog: false,
      indexToDelete: null,
      index_of_edit_row: null,
      deleteRecord: null,
      deletedUnitArr: [],
      isUpdating: false,
      isDuplicate: false,
      duplicateMessage: '',
      pricing: null,
      rowToAdd: {
        unit: null,
        equivalent_to_selection: null,
        equivalent_to_value: null,
        unit_barcode: null,
        purchase: null,
        last_purchase: null,
        pricing: [],
      },
      arrPricing: [],
      arr_unit: this.unitOptions,
      unit_is_choose: [],
      arr: [],
    };
  },
  computed: {
    ...mapGetters("erp_v2/items/product", {
      getPricingAndUnit: "getPricingAndUnit",
      product: "getForm",
    }),

    form: {
      get() {
        return this.getPricingAndUnit;
      },
      set(value) {
        this.setPricingAndUnit(value);
      },
    },

    priceOptions() {
      if (this.$store.getters["erp_v2/items/price/getListResponse"])
        return this.$store.getters["erp_v2/items/price/getListResponse"]
          .results;
      else return [];
    },
  },
  created() {

    if (!this.priceOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name_en: "" };
      this.$store.dispatch("erp_v2/items/price/list", params);
    }
  },
  validations: {
    rowToAdd: {
      unit: { required },
      equivalent_to_selection: {
        required: requiredIf(function () {
          if (this.rowToAdd.equivalent_to_value !== null) {
            return true;
          }
          return false;
        }),
      },
      equivalent_to_value: {
        required: requiredIf(function () {
          if (this.rowToAdd.equivalent_to_selection !== null) {
            return true;
          }
          return false;
        }),
      },
      unit_barcode: {},
      purchase: {},
      last_purchase: {},
      pricing: {},
    },
    pricing: {
      required
    }
  },
  methods: {
    requiredError,
    ...mapActions("erp_v2/items/product", [
      "setPricingAndUnit",
      "setDeletedPricingAndUnit",
    ]),
    findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value || item.code == value);
      if (item) return item["name_en"];
      else return value;
    },
    addPricing() {



      this.pricing.forEach((item) => {
        const found = this.rowToAdd.pricing.find(i => i.pricing_id === item.id)
        if (!found) {
          this.rowToAdd.pricing.push({
            pricing_id: item.id,
            pricing_name: item.name_en,
            pricing_code: item.code,
            value: null,
            profitRatio: null,
          })
        }
      })

      const result = this.rowToAdd.pricing.filter(obj => !this.pricing.some(item => item.id === obj.pricing_id));
      for (let i = 0; i < result.length; i++) {
        this.rowToAdd.pricing.splice(result[i], 1)
      }

    },
    resetForm() {
      this.rowToAdd = {
        unit: null,
        equivalent_to_selection: this.data_of_equivalent_to,
        equivalent_to_value: null,
        unit_barcode: null,
        purchase: null,
        last_purchase: null,
        pricing: [],
      };
      this.$v.rowToAdd.$reset();
      this.$v.$reset();
    },
    addPricingAndUnit() {
      this.$v.rowToAdd.$touch();
      if (!this.$v.rowToAdd.$invalid) {
        this.rowToAdd.pricing.forEach(item => {
          this.isDuplicate = this.arrPricing.some(i => i.pricing_id === item.pricing_id);
          if (!this.isDuplicate) { this.arrPricing.push({ pricing_id: item.pricing_id, pricing_name: item.pricing_name }); };
        });
        this.form.push({ ...this.rowToAdd });
        if (this.form.length >= 1) {
          this.disable_equivalent_to = false;
          this.data_of_equivalent_to = this.rowToAdd.unit;
        }
        this.unit_is_choose.push(this.rowToAdd.unit);
        this.arr_unit = this.unitOptions.filter((item) => !this.unit_is_choose.includes(item.id));
        this.resetForm();
      }
    },
    openEditPricingAndUnit(data, index) {
      this.rowToAdd = data;
      this.index_of_edit_row = index;
      this.isUpdating = true;
    },
    save_edit() {
      this.form[this.index_of_edit_row] = this.rowToAdd;
      this.data_of_equivalent_to = this.form[this.form.length - 1].unit;
      this.isUpdating = false;
      this.resetForm();
    },
    openDeleteRow(record, index) {
      this.displayDeleteDialog = true;
      this.indexToDelete = index;
      this.deleteRecord = record;
    },
    deleteRow() {
      this.form.splice(this.indexToDelete, 1);
      this.rowToAdd.equivalent_to_selection = this.deleteRecord.equivalent_to_selection
      const unit_deleted = this.unitOptions.filter(item => item.id === this.deleteRecord.unit)
      this.arr_unit.push(unit_deleted[0])
      this.deletedUnitArr = [];
      if ("id" in this.deleteRecord) {
        this.deletedUnitArr.push(this.deleteRecord);
        this.setDeletedPricingAndUnit(this.deletedUnitArr);
      }
      this.closeDeleteDialog();
    },
    closeDeleteDialog() {
      this.displayDeleteDialog = false
      this.indexToDelete = null;
      this.deleteRecord = null;
    },
    index_of_pricing(index) {
      if (this.rowToAdd.last_purchase) {
        if (this.rowToAdd.pricing[index].value) {
          this.rowToAdd.pricing[index].profitRatio = ((this.rowToAdd.pricing[index].value * 100) / this.rowToAdd.last_purchase) - 100;
        }
        else if (this.rowToAdd.pricing[index].profitRatio) {
          this.rowToAdd.pricing[index].value = (this.rowToAdd.pricing[index].profitRatio * this.rowToAdd.last_purchase) / 100;
        }
      }
      else if (this.rowToAdd.purchase) {
        if (this.rowToAdd.pricing[index].value) {
          this.rowToAdd.pricing[index].profitRatio = ((this.rowToAdd.pricing[index].value * 100) / this.rowToAdd.purchase) - 100;
        }
        else if (this.rowToAdd.pricing[index].profitRatio) {
          this.rowToAdd.pricing[index].value = (this.rowToAdd.pricing[index].profitRatio * this.rowToAdd.purchase) / 100;
        }
        // this.rowToAdd.pricing[index].profitRatio = (this.rowToAdd.pricing[index].value/this.rowToAdd.purchase)*100;
      }
    },
    equalPricingUnit(index) {
      this.form[index].pricing.forEach((item) => {
        const is_found = this.form[index - 1].pricing.filter(i => i.pricing_id === item.pricing_id)
        if (is_found) {
          item.value = is_found[0].value * this.form[index].equivalent_to_value
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
  color: var(--success-color-2) !important;
  background: var(--gray) !important;
}

/deep/.p-multiselect-close-icon {
  display: none;
}

/deep/.p-multiselect-close {
  width: 0rem !important;
  height: 0rem !important;

}
</style>