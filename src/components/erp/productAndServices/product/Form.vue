<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :isLoading="isLoading"
      :header="header"
      :minWidth="'100vw'"
      :maxWidth="'100vw'"
    >
      <div class="row row-cols-2">
        <div class="col-md-6">
          <Product :v="$v.productObject" :error="error" 
          :subCategoryOptions="subCategoryOptions"
          :productClassificationOptions="productClassificationOptions"
          />
          <Divider class="mt-0"></Divider>
          <CustomTabs class="text-center" v-model="selectedTab" :tabs="tabs"
          :v="$v.productObject">
          </CustomTabs>
          <Divider class="mt-0"></Divider>
          <!-- :v="$v.productObject" -->
          <div class="selection-content tabs-content my-2">
            <General
              v-show="selectedTab == 'general'"
              :v="$v.productObject.general ? $v.productObject.general : {}"
              :error="error"
            />
            <AlternativeMaterials
              v-show="selectedTab == 'alternativeMaterial'"
              :v="$v.productObject.alternativeMaterial ? $v.productObject.alternativeMaterial : {}"
              :error="error"
            />
            <AlternativeBarcode
              v-show="selectedTab == 'alternativeBarcode'"
              :productUnits="productUnits"
              :v="$v.productObject.alternativeBarcode? $v.productObject.alternativeBarcode: {}"
            />
            <Medical
              v-show="selectedTab == 'medical'"
              :v="$v.productObject.medical? $v.productObject.medical: {}"
              :error="error"
            />
            <MaterialPicture
              v-show="selectedTab == 'materialPicture'"
              :v="$v.productObject.materialPicture? $v.productObject.materialPicture: {}"
              :isUpdating="isUpdating"
            />
          </div>
        </div>
        <div class="col-md-6">
          <Unit 
          :v="$v.productObject.unit ? $v.productObject.unit : {}" 
          :productUnits="productUnits"
          :pricingPolicies="pricingPolicies"

          :error="error"/>
        </div> 
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/productAndService/product.json"></i18n>

<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import Divider from "@/components/global/utilities/Divider.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import productObject from "@/mixins/erp/productAndServices/product/validation/productObject";

import General from "@/components/erp/productAndServices/product/tabs/General";
import AlternativeMaterials from "@/components/erp/productAndServices/product/tabs/AlternativeMaterials.vue";
import Unit from "@/components/erp/productAndServices/product/tabs/Unit.vue";
import MaterialPicture from "@/components/erp/productAndServices/product/tabs/MaterialPicture.vue";
import Product from "@/components/erp/productAndServices/product/tabs/Product.vue";
import Medical from "@/components/erp/productAndServices/product/tabs/Medical.vue"
import AlternativeBarcode from "@/components/erp/productAndServices/product/tabs/AlternativeBarcode.vue"
export default {
 
  mixins: [productObject],

  components: {
    EditDialog,
    Product,
    Unit,
    General,
    AlternativeMaterials,
    Divider,
    CustomTabs,
    MaterialPicture,
    AlternativeBarcode,
    Medical,
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
    isUpdating: {
      type: Boolean,
      default() {
        return false;
      },
    },
    error: {
      type: Object,
    },
    header: {
      type: String,
    },
    productUnits:{
      type: Array,
    },
    pricingPolicies:{
      type:Array,
    },
    subCategoryOptions:{
      type: Array,
    },
    productClassificationOptions:{
      type: Array,
    },
  },

  data() {
    return {
      selectedTab: "general",
      tabs: [
        { en: "General", ar: "عام", key: "general" },
        {
          en: "Alternative materials",
          ar: "المواد البديله",
          key: "alternativeMaterial",
        },
        {
          en: "Material picture",
          ar: "صوره الماده",
          key: "materialPicture",
        },
        {
          en: "Alternative barcode",
          ar: "الباركود البديل",
          key: "alternativeBarcode",
        },
        { en: "Medical", ar: "طبيه",key: "medical" },
      ],
    };
  },
  methods: {
    saveForm() {
      this.$v.productObject.$touch();
      if (!this.$v.productObject.$invalid) {
        this.$emit("save");
        this.$v.productObject.$reset();
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.productObject.$reset();
    },
  },
};
</script>
