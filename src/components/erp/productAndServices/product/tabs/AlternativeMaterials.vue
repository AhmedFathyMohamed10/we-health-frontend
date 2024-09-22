<template>
  <div class="form">
    <div class="row" v-if="error">
      <div class="col-12">
        <div class="errors" v-if="typeof error === 'object'">
          <Message
            severity="error"
            v-for="(value, key) in error.alternativeMaterial"
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
      <div class="col-md-10 col-lg-6">
            <div class="form-group treatment-program">
              <label class="form-label">{{
                $t("alternativeMaterial.material.label")
              }}</label>
              <div class="p-inputgroup">
                <span
                  class="p-inputgroup-addon"
                  :class="{ 'p-invalid': $v.rowToAdd.material.$error }"
                >
                  <i class="mdi mdi-pill"></i>
                </span>
                <AutoComplete
                  v-model="rowToAdd.material"
                  :suggestions="productParams.suggestions"
                  :class="{ 'p-invalid': $v.rowToAdd.material.$error  }"
                  field="name_en"
                  :placeholder="$t('alternativeMaterial.material.placeholder')"
                  @complete="search($event, productParams)"
                  :forceSelection="true"
                />
              </div>
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="
                    $v.rowToAdd.material.$error &&
                    !$v.rowToAdd.material.required
                  "
                >
                  {{ requiredError($t("alternativeMaterial.material.label")) }}
                </small>
              </div>
            </div>
          </div>
      <div class="col-md-2 me-0 d-flex">
        <div class="form-group">
          <AddButton @add="addRow"></AddButton>
        </div>
      </div>
    </div>
    <AlternativeMaterialDetails
      :value="form"
      :isControl="isControl"
    />
  </div>
</template>
<i18n src="@/lang/erp/productAndService/product.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import { required } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import productSuggestion from "@/mixins/erp/productAndServices/product/suggestions/productSuggestions";
import AlternativeMaterialDetails from "@/components/erp/productAndServices/product/details/AlternativeMaterialDetails.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";

import {
  requiredError,
  inputError,
} from "@/validation/errors.js";
export default {
  mixins: [productSuggestion],
  props: {
    error: {
      type: Object,
    },
  },
  components: {
    AlternativeMaterialDetails,
    AddButton,
  },
  computed: {
    ...mapGetters("erp/ProductAndService/productAndService/product", {
      getAlternativeMaterial: "getAlternativeMaterial",
    }),

    form: {
      get() {
        return this.getAlternativeMaterial;
      },
      set(value) {
        this.setAlternativeMaterial(value);
      },
    },
  },
  data() {
    return {
      isControl:true,
      rowToAdd: {
        material: null,
      },

    };
  },
  validations: {
    rowToAdd: {
      material: {
        required,
      },
    },
  },

  methods: {
    requiredError,
    inputError,
    ...mapActions("erp/ProductAndService/productAndService/product", [
      "setAlternativeMaterial",
    ]),
    resetForm() {
      this.rowToAdd = {
        material: null,
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
  },
};
</script>
