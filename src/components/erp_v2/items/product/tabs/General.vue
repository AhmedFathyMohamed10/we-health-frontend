<template>
  <div class="general">
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

    <Base :title="$t('general.permission')" :showBreadCrumb="false" :showToggleContent="false" :showFullScreen="false">
    <div class="row">
      <div class="col-md-6 col-s-12">
        <div class="row">
          <div class="col-10">
            <div class="mt-1">
              <label for="" class="form-label">{{$t("general.min_limit.label")}}</label>
              <input type="number" v-model="form.min_limit" :placeholder="$t('general.min_limit.placeholder')"

                class="form-control" />
            </div>
            <div class="form-group">
              <label for="" class="form-label">{{$t("general.max_limit.label")}}</label>
              <input type="number" v-model="form.max_limit" :placeholder="$t('general.max_limit.placeholder')"
                class="form-control" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-10">
            <div class="form-group">
              <label for="" class="form-label">{{$t("general.last_supplier.label")}}</label>
              <Dropdown v-model="form.last_supplier" :options="supplierOptions" optionLabel="name" optionValue="id"
                :placeholder="$t('general.last_supplier.placeholder')" :class="{
                  'p-invalid': v.last_supplier.$error,
                }" />
              <div v-if="!v.last_supplier.required && v.last_supplier.$error" class="p-error">
                {{ requiredError($t("general.last_supplier.label")) }}
              </div>
            </div>
          </div>
          <div class="col-2">
            <Supplier></Supplier>
            <!-- <AddButton @add="addUnit"></AddButton> -->
          </div>
        </div>
      </div>
      <div class="col-md-6 col-s-12">
        <div class="row">
          <div class="col-12">
            <div class="mt-4">
              <div class="field-checkbox d-flex">
                <Checkbox id="binary" 
                  class="me-2" 
                  v-model="form.in_active" 
                  :trueValue="true" 
                  :falseValue="false" 
                  :binary="true" 
                />
                <label for="binary">{{ $t("general.inActive.label") }}</label>
              </div>
            </div>
            <div class="mt-1">
              <div class="field-checkbox d-flex">
                <Checkbox id="binary" class="me-2" v-model="form.prevent_give_discount" :trueValue="true"
                  :falseValue="false" :binary="true" />
                <label for="binary">{{ $t("general.prevent_give_discount.label") }}</label>
              </div>
            </div>
            <div class="mt-1">
              <div class="field-checkbox d-flex">
                <Checkbox id="binary" class="me-2" v-model="form.prevent_negative_quantity_take_out" :binary="true"
                  :trueValue="true" :falseValue="false" />
                <label for="binary">{{ $t("general.prevent_negative_quantity_take_out.label") }}</label>
              </div>
            </div>
            <div class="mt-1">
              <div class="field-checkbox d-flex">
                <Checkbox id="binary" class="me-2" v-model="form.stop_selling" :trueValue="true" :falseValue="false"
                  :binary="true" />
                <label for="binary">{{ $t("general.stop_selling.label") }}</label>
              </div>
            </div>
            <div class="mt-1">
              <div class="field-checkbox d-flex">
                <Checkbox id="binary" class="me-2" v-model="form.prevent_price_modification" :trueValue="true"
                  :falseValue="false" :binary="true" />
                <label for="binary">{{ $t("general.prevent_price_modifications.label") }}</label>
              </div>
            </div>
            <div class="mt-1">
              <div class="field-checkbox d-flex">
                <Checkbox id="binary" class="me-2" v-model="form.tax_free" :trueValue="true" :falseValue="false"
                  :binary="true" />
                <label for="binary">{{ $t("general.tax_free.label") }}</label>
              </div>
            </div>
            <div class="mt-1 form-group">
              <div class="field-checkbox d-flex">
                <Checkbox id="binary" class="me-2 " v-model="form.alert_before_expiration_date" :trueValue="true"
                  :falseValue="false" :binary="true" />
                <label for="binary">{{ $t("general.alert_before_expiration_date.label") }}</label>
              </div>
            </div>
            <div class="form-group" v-if="form.alert_before_expiration_date">
              <InputGroupWrapper class="">
                <InputText v-model.trim="form.expiration_date_value" type="number" min="0"
                  :placeholder="$t('input.value.placeholder')" />
                  <Dropdown
                    v-model="form.expiration_date_selection"
                    :placeholder="$t('input.selection.placeholder')"
                    :options="periodOptions"
                    :optionLabel="locale" 
                    optionValue="id" 
                    />
              </InputGroupWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Base>
  </div>
</template>
<i18n src="@/lang/erp_v2/items/product.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import { requiredError, inputError } from "@/validation/errors.js";
// import AddButton from "@/components/global/utilities/AddButton.vue";
import Base from "@/components/global/utilities/Base.vue";
import InputGroupWrapper from '@/components/global/UI/inputs/InputGroupWrapper'

import Supplier from "@/components/erp_v2/items/product/addForm/Supplier.vue";

export default {
  props: {
    error: {
      type: Object,
    },
    v: {
      type: Object,
      required: true,
    },
  },
  components: {
    Supplier,
    Base,
    InputGroupWrapper,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters("erp_v2/items/product", {
      getGeneral: "getGeneral",
    }),

    form: {
      get() {
        return this.getGeneral;
      },
      set(value) {
        this.setGeneral(value);
      },
    },
    supplierOptions() {
      if (this.$store.getters["erp_v2/clients/getListResponse"])
        return this.$store.getters["erp_v2/clients/getListResponse"]
          .results;
      else return [];
    },
  },
    
  created() {
    if (!this.supplierOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "", group_id:"", category_filter:2 };
      this.$store.dispatch("erp_v2/clients/list", params);
    }
  },

  methods: {
    requiredError,
    inputError,
    ...mapActions("erp_v2/items/product", [
      "setGeneral",
    ]),
  },
};
</script>
  