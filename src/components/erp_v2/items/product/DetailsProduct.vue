<template>
  <div class="form">
    <DetailsDialog :display="display" @close="cancelForm" @hide="cancelForm" :header="header" :minWidth="'80vw'"
      :maxWidth="'100vw'">
      <Base>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <Base v-if="form">
          <!-- <div > -->

          <Avatar :image="require('@/assets/global/logo/mohamed-khaled.jpg')" class="w-100 h-100" size="xlarge" shape="circle" />
            <h5>{{ form.name_en }}</h5>
            <h5>{{ form.name_en }}</h5>
            <h5>{{ form.location_name }}</h5>
          </Base>
        </div>
        <div class="col-lg-4 col-md-6">
          <Base>
          <div class="d-flex justify-content-around">
            <div class="bg-white custom-rounded">
              <i class="pi pi-users text-success m-2 icon-size"></i>
            </div>
            <div>
              <label for=""> Group</label>
              <h5 v-if="form">{{ form.group.name_en }}</h5>
            </div>
          </div>


          </Base>
        </div>
        <div class="col-lg-4 col-md-6">
          <Base>
          <div class="d-flex justify-content-around">
            <div class="bg-white custom-rounded">
              <i class="pi pi-clone text-success m-2 icon-size"></i>
            </div>
            <div>
              <label for=""> Item Code</label>
              <h5 v-if="form">{{ form.serial }}</h5>
            </div>
          </div>
          </Base>
        </div>


      </div>
      </Base>
      <Base :title="$t('itemOperations')" :icon="'pi pi-check-square'" :showBreadCrumb="false"
        :showToggleContent="false" :showFullScreen="false">
      <CustomTabs class="text-center" v-model="selectedTab" :tabs="tabs">
      </CustomTabs>
      <Mic :value="form" v-show="selectedTab == 'mic'" />
      <General :value="form" v-show="selectedTab == 'general'" />
      <Alternatives :value="form? form.alternatives :[]" v-show="selectedTab == 'alternatives'" />
      <AlternativeBarcode :value="form ?form.alternative_barcode:[]" v-show="selectedTab == 'alternativeBarcode'" />
      </Base>
    </DetailsDialog>
  </div>
</template>

<i18n src="@/lang/erp_v2/items/product.json"></i18n>

<i18n src="@/lang/global/global.json"></i18n>

<script>
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import Base from "@/components/global/utilities/Base.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";

// import Pricing from "@/components/erp_v2/items/product/tabs/Pricing.vue";
// import General from "@/components/erp_v2/items/product/tabs/General.vue";
import Alternatives from "@/components/erp_v2/items/product/details/Alternatives.vue";
import AlternativeBarcode from "@/components/erp_v2/items/product/details/AlternativeBarcode.vue";
import General from "@/components/erp_v2/items/product/details/General.vue";
import Mic from "@/components/erp_v2/items/product/details/Mic.vue";
// import Status from "@/components/erp_v2/items/product/tabs/Status.vue";

// import Group from "@/components/erp_v2/items/product/addForm/Group.vue";
// import Location from "@/components/erp_v2/items/product/addForm/Location.vue";
export default {
  components: {
    DetailsDialog,
    Base,
    CustomTabs,
    // UploadFile,
    // // AddButton,
    // Pricing,
    General,
    Alternatives,
    AlternativeBarcode,
    Mic,

    // Status,
    // Group,
    // Location,
  },
  props: {
    display: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    recordDetails: {
      type: Object,
    },
    header: {
      type: String,
    },
  },
  watch: {
    recordDetails() {
      this.form = this.recordDetails;
    },
  },
  data() {
    return {
      selectedTab: "pricing",
      tabs: [
        { en: "Pricing", ar: "التسعير", key: "pricing" },
        { en: "General", ar: "عام", key: "general" },
        { en: "Alternatives", ar: "البدايل", key: "alternatives" },
        { en: "AlternativeBarcode", ar: "الباركود البديل", key: "alternativeBarcode" },
        { en: "MIC", ar: "الطبيه", key: "mic" },
        { en: "Status", ar: "الحاله", key: "status" },
      ],
      form: this.recordDetails,

    };
  },


  methods: {
    cancelForm() {
      this.$emit("hide");
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-rounded {
  border-radius: 1rem;
}
</style>