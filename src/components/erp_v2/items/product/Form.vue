<template>
  <div class="form">
    <EditDialog :display="displayForm" @close="cancelForm" @cancel="cancelForm" @save="saveForm" :min-width="'80'"
      :max-width="'100'" :isLoading="isLoading" :header="header">
      <slot></slot>
      <div class="row" v-if="error">
        <div class="col-12">
          <div class="errors" v-if="typeof error === 'object'">
            <Message severity="error" v-for="(value, key) in error" :key="key" :closable="false">
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ key }} : {{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <Base>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.name_en.label")
                }}</label>
                <input type="text" v-model="form.name_en" :placeholder="$t('form.name_en.placeholder')"
                  class="form-control" :class="{
                    'is-invalid': $v.productObject.name_en.$error,
                  }" />
                <div v-if="!$v.productObject.name_en.required && $v.productObject.name_en.$error" class="invalid-feedback">
                  {{ requiredError($t("form.name_en.label")) }}
                </div>
                <div v-else-if="!$v.productObject.name_en.minLength && $v.productObject.name_en.$error
                  " class="invalid-feedback">
                  {{
                    maxLengthError(
                      $t("form.name_en.label"),
                      $v.productObject.name_en.$params.minLength.min
                    )
                  }}
                </div>
                <div v-else-if="!$v.productObject.name_en.maxLength && $v.productObject.name_en.$error
                    " class="invalid-feedback">
                  {{
                    minLengthError(
                      $t("form.name_en.label"),
                      $v.productObject.name_en.$params.maxLength.max
                    )
                  }}
                </div>
                <div v-else-if="!$v.productObject.name_en.notContainsHtmlTags &&
                    $v.productObject.name_en.$error
                    " class="invalid-feedback">
                  {{ htmlTagsError($t("form.name_en.label")) }}
                </div>
              </div>
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.name_ar.label")
                }}</label>
                <input type="text" v-model="form.name_ar" 
                :placeholder="$t('form.name_ar.placeholder')"
              
                  class="form-control" :class="{
                    'is-invalid': $v.productObject.name_ar.$error,
                  }"/>
                <div v-if="!$v.productObject.name_ar.required && $v.productObject.name_ar.$error" class="invalid-feedback">
                  {{ requiredError($t("form.name_ar.label")) }}
                </div>
                <div v-else-if="!$v.productObject.name_ar.minLength && $v.productObject.name_ar.$error" class="invalid-feedback">
                  {{
                    maxLengthError(
                      $t("form.name_en.label"),
                      $v.productObject.name_ar.$params.minLength.min
                    )
                  }}
                </div>
                <div v-else-if="!$v.productObject.name_ar.maxLength && $v.productObject.name_ar.$error
                    " class="invalid-feedback">
                  {{
                    minLengthError(
                      $t("form.name_en.label"),
                      $v.productObject.name_ar.$params.maxLength.max
                    )
                  }}
                </div>
                <div v-else-if="!$v.productObject.name_ar.notContainsHtmlTags &&
                    $v.productObject.name_en.$error
                    " class="invalid-feedback">
                  {{ htmlTagsError($t("form.name_en.label")) }}
                </div>
              </div>
            </div>
          
          </div>
          </Base>
        </div>
        <div class="col-lg-4 col-sm-6">
          <Base>
          <div class="row">
            <div class="col-10">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.group.label")
                }}</label>
                <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                  <i class="pi" :class="[typeof form.group === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                  <AutoComplete
                  v-model="form.group" 
                  :suggestions="groupParams.suggestions"
                  field="name_en"
                  :placeholder="$t('form.group.placeholder')"
                  @complete="search($event, groupParams)"
                  :forceSelection="true" 
                  :class="{ 'p-invalid': $v.productObject.group.$error }" 
                  />
                </span> 
                <div class="error">
                  <small class="p-invalid" v-if="!$v.productObject.group.required && $v.productObject.group.$error">
                    {{ requiredError($t("form.group.label")) }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-2">
              <Group></Group>
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.location.label")
                }}</label>
                <Dropdown v-model="form.location" :options="locationOptions" optionLabel="name_en" optionValue="id"
                  :placeholder="$t('form.location.placeholder')" />

              </div>
            </div>
            <div class="col-2">
              <Location></Location>
            </div>
          </div>
          </Base>
        </div>
        <div class="col-lg-4 col-sm-6">
          <Base>
          <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.item_type.label")}}</label>
              <Dropdown v-model="form.item_type" :options="itemTypeOption" :optionLabel="locale" optionValue="id"
                :placeholder="$t('form.item_type.placeholder')" 
                :class="{'p-invalid': $v.productObject.item_type.$error,}"
                />
                <div v-if="!$v.productObject.item_type.required && $v.productObject.item_type.$error" class="p-error">
                  {{ requiredError($t("form.item_type.label")) }}
                </div>
            </div>
            <div class="form-group" v-if="isUpdating">
              <label for="" class="form-label">{{
                $t("form.serial.label")
              }}</label>
              <input type="text" v-model="form.serial" :placeholder="$t('form.serial.placeholder')"
                class="form-control" :disabled="true" />
            </div>     
            <div class="form-group" v-if="isUpdating">
              <label for="" class="form-label">{{
                $t("form.accounting_code.label")
              }}</label>
              <input type="text" v-model="form.accounting_code" :placeholder="$t('form.accounting_code.placeholder')"
                class="form-control" :disabled="true" />
            </div>
          </div>
          </div>
          </Base>
        </div>
      </div> 
      <div class="row">
        <div class="col-12">
          <Base>
          <UploadFile v-model="form.uploaded_files" :saved_files="form.saved_files" @removePath="removePath"
          :mediaUrl="mediaUrl"></UploadFile>
        </Base>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <Base :title="$t('itemOperations')" :icon="'pi pi-check-square'" :showBreadCrumb="false"
            :showToggleContent="false" :showFullScreen="false">
          <CustomTabs class="text-center" v-model="selectedTab" :tabs="tabs" :v="$v.productObject" />
          <Pricing :v="$v.productObject.pricing ? $v.productObject.pricing : {}" v-show="selectedTab == 'pricing'"
          :unitOptions="unitOptions"
            :error="error" />
          <General 
            :v="$v.productObject.general ? $v.productObject.general : {}"
            v-show="selectedTab == 'general'"
            :error="error"
          />
          <Alternatives :v="$v.productObject.alternatives ? $v.productObject.alternatives : {}" v-show="selectedTab == 'alternatives'"
            :error="error" />
          <AlternativeBarcode :v="$v.productObject.alternative_barcode ? $v.productObject.alternative_barcode : {}" v-show="selectedTab == 'alternativeBarcode'"
            :error="error" />
          <MIC :v="$v.productObject.mic ? $v.productObject.mic : {}" v-show="selectedTab == 'mic'"
            :error="error" />
          <Status :v="$v.productObject.status ? $v.productObject.status : {}" v-show="selectedTab == 'status'"
            :error="error" />
          </Base>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp_v2/items/product.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>

<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import itemGroupSuggestions from "@/mixins/erp_v2/items/itemGroupSuggestions.js";
import productObject from "@/mixins/erp_v2/products/productObject.js";
import Base from "@/components/global/utilities/Base.vue";
import UploadFile from "@/components/global/utilities/UploadFile.vue";
import { urls } from "@/backend/urls";
import Pricing from "@/components/erp_v2/items/product/tabs/Pricing.vue";
import General from "@/components/erp_v2/items/product/tabs/General.vue";
import Alternatives from "@/components/erp_v2/items/product/tabs/Alternatives.vue";
import AlternativeBarcode from "@/components/erp_v2/items/product/tabs/AlternativeBarcode.vue";
import MIC from "@/components/erp_v2/items/product/tabs/MIC.vue";
import Status from "@/components/erp_v2/items/product/tabs/Status.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import Group from "@/components/erp_v2/items/product/addForm/Group.vue";
import Location from "@/components/erp_v2/items/product/addForm/Location.vue";

import {
  htmlTagsError,
  requiredError,
  inputError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
    Base,
    CustomTabs,
    UploadFile,
    // AddButton,
    Pricing,
    General,
    Alternatives,
    AlternativeBarcode,
    MIC,
    Status,
    Group,
    Location,
  },
  mixins: [itemGroupSuggestions,productObject],
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
    value: {
      type: Object,
      required: true,
    },
    itemTypeOption: {
      type: Array,
      required: [],
    },
    error: {
      type: Object,
    },
    header: {
      type: String,
    },
  },
  watch: {
    value() {
      this.form = this.value;
    },
  },
  data() {
    return {
      mediaUrl: urls.business.mediaUrl,
      selectedTab: "pricing",
      tabs: [
        { en: "Pricing", ar: "التسعير", key: "pricing" },
        { en: "General", ar: "عام", key: "general" },
        { en: "Alternatives", ar: "البدايل", key: "alternatives" },
        { en: "Alternative Barcode", ar: "الباركود البديل", key: "alternativeBarcode" },
        { en: "MIC", ar: "الطبيه", key: "mic" },
        { en: "Status", ar: "الحاله", key: "status" },
      ],
      form: this.value,
   
    };
  },

  computed: {
    locationOptions() {
      if (this.$store.getters["erp_v2/items/location/getListResponse"])
        return this.$store.getters["erp_v2/items/location/getListResponse"].results;
      else return [];
    },
    unitOptions() {
      if (this.$store.getters["erp_v2/items/unit/getListResponse"]){
        return  this.$store.getters["erp_v2/items/unit/getListResponse"].results;
      }
      else return [];
    },
  },
  created() {
    if (!this.locationOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name_en: "" };
      this.$store.dispatch("erp_v2/items/location/list", params);
    }
    if (!this.unitOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name_en: "" };
      this.$store.dispatch("erp_v2/items/unit/list", params);
    }
  },
  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    inputError,
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
    removePath(data, index) {
      this.form.deleted_files.push(data);
      this.form.saved_files.splice(index, 1);
    },

  },
};
</script>