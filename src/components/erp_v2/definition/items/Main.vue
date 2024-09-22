<template>
  <div>
    <div class="container d-flex gap-3 flex-wrap justify-content-start">
      <BaseWrapper
        :title="$t('header.product')"
        :icon="'fa-solid fa-list'"
        :showBreadCrumb="false"
        :showToggleContent="true"
        :showFullScreen="false"
      >
        <div class="d-flex gap-3 flex-wrap justify-content-center">
          <a @click="openGroup">
              <BaseItem :title="$t('header.group')" icon="fa-solid fa-layer-group" :active="displayGroup" />
          </a>
          <a @click="openProduct">
              <BaseItem :title="$t('header.product')" icon="fa-brands fa-unity" :active="displayProduct" />
          </a>
          <a @click="openItemPricing">
            <BaseItem :title="$t('header.itemPricing')" icon="fa-solid fa-money-bill-1" :active="displayItemPricing" />
          </a>
          <a @click="openItemLocation">
            <BaseItem :title="$t('header.location')" icon="fa-solid fa-location-dot" :active="displayItemLocation" />
          </a>
          <a @click="openItemUnit">
            <BaseItem :title="$t('header.units')" icon="fa-solid fa-list-ul" :active="displayItemUnit" />
          </a>
        </div>
      </BaseWrapper>  



    </div>
    <ProductAdd :display="displayProduct" @close="closeProduct" />
    <Groups :header="$t('header.productGroup')" :display="displayGroup" @close="closeGroup" />
    <Pricing :header="$t('header.itemPricing')" :display="displayItemPricing" @close="closeItemPricing" />
    <Location :header="$t('header.location')" :display="displayItemLocation" @close="closeItemLocation" />
    <Unit :header="$t('header.units')" :display="displayItemUnit" @close="closeItemUnit" />
  
  </div>
</template>

<i18n src="@/lang/erp_v2/definition.json"></i18n>

<script>
import BaseWrapper from "@/components/global/UI/base/BaseWrapper";
import BaseItem from "@/components/global/UI/base/BaseItem.vue";
import toast from "@/mixins/global/toast";

import Groups from "@/components/erp_v2/definition/items/Groups.vue";
import Pricing from "@/components/erp_v2/definition/items/Pricing.vue";
import Location from "@/components/erp_v2/definition/items/Location.vue";
import Unit from "@/components/erp_v2/definition/items/Unit.vue";
import ProductAdd from "@/components/erp_v2/definition/items/ProductAdd.vue";

export default {
  mixins: [toast],
  components: {
    BaseWrapper,
    BaseItem,
    Groups,
    ProductAdd,
    Pricing,
    Location,
    Unit,
  },
  data() {
    return {

      displayProduct:false,
      displayGroup:false,
      displayItemPricing:false,
      displayItemLocation:false,
      displayItemUnit:false,
    };
  },
  methods: {
    ///////////////////// Item //////////////////
    openItemUnit() {
      this.displayItemUnit = true;
    },
    closeItemUnit() {
      this.displayItemUnit = false;
    },
    openItemLocation() {
      this.displayItemLocation = true;
    },
    closeItemLocation() {
      this.displayItemLocation = false;
    },
    openItemPricing() {
      this.displayItemPricing = true;
    },
    closeItemPricing() {
      this.displayItemPricing = false;
    },
    openGroup() {
      this.displayGroup = true;
    },
    closeGroup() {
      this.displayGroup = false;
    },
    openProduct() {
      this.displayProduct = true;
    },
    closeProduct() {
      this.displayProduct = false;
    },
  },
};
</script>
