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
    <div class="row">
      <div class="col-5">
        <div class="form-group">
          <label for="" class="form-label">{{$t("pricing.price.label")}}</label>
          <!-- <MultiSelect
            v-model="pricing" 
            :options="priceOptions" 
            optionLabel="name_en" 
            dataKey="code"
            :placeholder="$t('pricing.pricing.placeholder')" 
            :class="{ 'p-invalid': $v.pricing.$error, }"
            display="chip"
          >
          </MultiSelect> -->

            <MultiSelect 
            v-model="form.price" 
            :options="priceOptions" 
            optionLabel="name_en"
            optionValue="code"
            dataKey="id"
            :placeholder="$t('pricing.price.placeholder')"
            :class="{ 'p-invalid': v.price.$error }"
            display="chip" />
        </div>
      </div>
      <div class="col-2">
        <Pricing></Pricing>
      </div>
      <!--   <AddButton @add="addPrice"></AddButton>
      </div> -->
      <div class="col-5">
        <div class="form-group">
          <label for="" class="form-label">{{
      $t("pricing.barcode.label")
    }}</label>
          <input type="text" v-model="form.barcode" :placeholder="$t('pricing.barcode.placeholder')"
            class="form-control" :class="{ 'is-invalid': v.barcode.$error }" />

            <div v-if="!v.barcode.minLength && v.barcode.$error" class="invalid-feedback">
              {{ maxLengthError($t("pricing.barcode.label"), v.barcode.$params.minLength.min) }}
            </div>
            <div v-else-if="!v.barcode.maxLength && v.barcode.$error" class="invalid-feedback">
              {{ minLengthError($t("pricing.barcode.label"), v.barcode.$params.maxLength.max) }}
            </div>
            <!-- <div v-else-if="!v.barcode.notContainsHtmlTags && v.barcode.$error" class="invalid-feedback">
              {{ htmlTagsError($t("pricing.barcode.label")) }}
            </div> -->
        </div>
      </div>


    </div>

  </div>
</template>
<i18n src="@/lang/erp_v2/assets/fixedAsset.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import {
  htmlTagsError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
import Pricing from "@/components/erp_v2/assets/fixedAsset/addForm/Pricing.vue";
export default {
  props: {
    error: {
      type: Object,
    },
    v: {
      type: Object,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
  },
  watch: {
    value() {
      this.form = this.value;
    },
  },
  components: {
    Pricing,
  },

  data() {
    return {
      form: this.value,
    };
  },
  computed: {
    priceOptions() {
      if (
        this.$store.getters[
        "erp_v2/assets/assetPrice/getListResponse"
        ]
      )
        return this.$store.getters[
          "erp_v2/assets/assetPrice/getListResponse"
        ].results;
      else return [];
    },
  },
  created() {
    if (!this.priceOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name_en: "" };
      this.$store.dispatch("erp_v2/assets/assetPrice/list", params);
    }
  },
  methods: {
    htmlTagsError,
    minLengthError,
    maxLengthError,
  }
};
</script>