<template>
  <div class="form">
    <DetailsDialog
      :display="display"
      @close="cancelForm"
      @hide="cancelForm"
      :header="header"
      :minWidth="'100vw'"
      :maxWidth="'100vw'"
    >
      <div class="row">
        <CustomTabs class="text-center" v-model="selectedTab" :tabs="tabs">
        </CustomTabs>

        <div v-show="selectedTab == 'product'">
          <div class="row">
            <div class="col-md-8">
              <div class="table-responsive">
                <table class="table table-borderless text-nowrap mb-0">
                  <tbody>
                    <tr v-for="(value, key) in recordDetails" :key="key">
                      <td
                        v-if="
                          key != 'alternativeMaterial' &&
                          key != 'general' &&
                          key != 'unit' &&
                          key != 'materialPicture'&&
                          key != 'alternativeBarcode'&&
                          key != 'medical'

                        "
                        class=""
                      >
                        {{ $t(`product.key.mainData.${key}`) }}
                      </td>
                      <td class="">
                        <span v-if="!value" class="text-muted">------</span>
                        <span
                          v-if="
                            key != 'status' &&
                            key != 'alternativeMaterial' &&
                            key != 'general' &&
                            key != 'unit' &&
                            key != 'materialPicture'&&
                            key != 'alternativeBarcode'&&
                            key != 'updated_at'&&
                            key != 'medical'
                          "
                          >{{ value }}</span
                        >
                        <div v-if="key == 'status'">
                          <span v-if="value == '1'">
                            <Tag
                              severity="success"
                              :value="$t('status.active')"
                              rounded
                            ></Tag>
                          </span>
                          <span v-if="value == '2'">
                            <Tag
                              severity="warning"
                              :value="$t('status.suspended')"
                              rounded
                            ></Tag>
                          </span>
                        </div>
                       <span v-if="key == 'updated_at'">{{
                        $moment(value).format("MMMM Do YYYY, h:mm:ss a")
                      }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-md-4">
              <div v-if="recordDetails" class="table-responsive">
                <div
                  v-for="(value, key) in recordDetails.materialPicture"
                  :key="key"
                >
                  <h6>{{ value.title }}</h6>
                  <h6>{{ value.comment }}</h6>

                  <img
                    :src="`${urls.business.mediaUrl}` + value.file"
                    alt="Image of product"
                    width="100%"
                    height="200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="selectedTab == 'general'">
          <div v-if="recordDetails" class="col-md-12">
            <div class="table-responsive">
              <table class="table table-borderless text-nowrap mb-0">
                <tbody>
                  <tr v-for="(value, key) in recordDetails.general" :key="key">
                    <td v-if="key != 'id' && key != 'code'">
                      {{ $t(`product.key.general.${key}`) }}
                    </td>
                    <td class="">
                      <span v-if="!value" class="text-muted">------</span>
                      <span
                        v-if="
                          key != 'id' &&
                          key != 'code' &&
                          key != 'provider' &&
                          key != 'stopSelling' &&
                          key != 'negativeDrawPrevention' &&
                          key != 'checkExpiryDate'
                        "
                        >{{ value }}</span
                      >
                      <div v-if="key == 'provider'">
                        {{ value.name }}
                      </div>

                      <div
                        v-if="
                          key == 'checkExpiryDate' ||
                          key == 'stopSelling' ||
                          key == 'negativeDrawPrevention'
                        "
                      >
                        <span v-if="value == '1'">
                          <Tag
                            severity="success"
                            :value="$t('status.active')"
                            rounded
                          ></Tag>
                        </span>
                        <span v-if="value == '2'">
                          <Tag
                            severity="warning"
                            :value="$t('status.suspended')"
                            rounded
                          ></Tag>
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div v-show="selectedTab == 'unit'">
          <div v-if="recordDetails" class="row">
            <div class="col-md-12">
              <div class="table-wrapper">
                <div
                  class="table-wrapper my-2"
                  v-if="recordDetails.unit.length > 0"
                >
                  <UnitDetails
                    :value="recordDetails.unit"
                    :productUnitOptions="productUnitOptions"
                    :isControl="isControl"
                  />
                </div>
                <div v-else>
                  <NoResults></NoResults>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="selectedTab == 'alternativeMaterial'">
          <div v-if="recordDetails" class="row">
            <div class="col-md-12">
              <div class="table-wrapper">
                <div
                  class="table-wrapper my-2"
                  v-if="recordDetails.alternativeMaterial.length > 0"
                >
                  <AlternativeMaterialDetails
                    :value="recordDetails.alternativeMaterial"
                    :isControl="isControl"
                  />
                </div>
                <div v-else>
                  <NoResults></NoResults>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="selectedTab == 'alternativeBarcode'">
          <div v-if="recordDetails" class="row">
            <div class="col-md-12">
              <div class="table-wrapper">
                <div
                  class="table-wrapper my-2"
                  v-if="recordDetails.alternativeBarcode.length > 0"
                >
                  <AlternativeBarcodeDetails
                    :value="recordDetails.alternativeBarcode"
                    :productUnitOptions="productUnitOptions"
                    :isControl="isControl"
                  />
                </div>
                <div v-else>
                  <NoResults></NoResults>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="selectedTab == 'medical'">
          <div v-if="recordDetails" class="row">
            <div class="col-md-8">
              <div class="table-responsive">
                <table class="table table-borderless text-nowrap mb-0">
                  <tbody>
                    <tr v-for="(value, key) in recordDetails.medical" :key="key">
                      <td
                        v-if="
                            key != 'id' &&
                            key != 'code' &&
                            key != 'status'                      "
                      >
                        {{ $t(`product.key.medical.${key}`) }}
                      </td>
                      <td class="">
                        <span v-if="!value" class="text-muted">------</span>
                        <span
                          v-if="
                            key != 'status' &&
                            key != 'id' &&
                            key != 'code' 
                          "
                          >{{ value }}</span
                        >

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </DetailsDialog>
  </div>
</template>
  <i18n src="@/lang/erp/productAndService/product.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
  
<script>
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import { urls } from "@/backend/urls";
import UnitDetails from "@/components/erp/productAndServices/product/details/UnitDetails.vue";
import AlternativeMaterialDetails from "@/components/erp/productAndServices/product/details/AlternativeMaterialDetails.vue";
import AlternativeBarcodeDetails from "@/components/erp/productAndServices/product/details/AlternativeBarcodeDetails.vue";

import NoResults from "@/components/global/utilities/NoResults.vue";

export default {
  components: {
    DetailsDialog,
    CustomTabs,
    UnitDetails,
    AlternativeMaterialDetails,
    AlternativeBarcodeDetails,
    NoResults,
  },
  props: {
    display: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    header: {
      type: String,
    },
    recordDetails: {
      type: Object,
    },
    productUnitOptions: {
      type: Array,
    },
  },

  data() {
    return {
      isControl: false,
      urls,
      selectedTab: "product",
      tabs: [
        { en: "Product", ar: "المنتج", key: "product" },
        { en: "Unit", ar: "الوحده", key: "unit" },

        { en: "General", ar: "عام", key: "general" },
        {
          en: "Alternative materials",
          ar: "المواد البديله",
          key: "alternativeMaterial",
        },
        {
          en: "Alternative barcode",
          ar: "الباركود البديل",
          key: "alternativeBarcode",
        },
        { en: "Medical", ar: "طبيه", key: "medical" },
      ],
    };
  },
  methods: {
    cancelForm() {
      this.$emit("hide");
    },
  },
};
</script>
  