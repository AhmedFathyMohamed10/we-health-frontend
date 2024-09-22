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
        <div :class="isUpdating ? 'col-lg-4 col-sm-6' : 'col-md-6'">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.item_name_en.label")
                  }}</label>
                  <input type="text" v-model="form.name_en" :placeholder="$t('form.item_name_en.placeholder')"
                    class="form-control" :class="{
                      'is-invalid': $v.fixedAssetObject.name_en.$error,
                    }" />
                    <div v-if="!$v.fixedAssetObject.name_en.required && $v.fixedAssetObject.name_en.$error" class="invalid-feedback">
                      {{ requiredError($t("form.item_name_en.label")) }}
                    </div>
                    <div v-else-if="!$v.fixedAssetObject.name_en.minLength && $v.fixedAssetObject.name_en.$error
                      " class="invalid-feedback">
                      {{
                        maxLengthError(
                          $t("form.item_name_en.label"),
                          $v.fixedAssetObject.name_en.$params.minLength.min
                        )
                      }}
                    </div>
                    <div v-else-if="!$v.fixedAssetObject.name_en.maxLength && $v.fixedAssetObject.name_en.$error
                        " class="invalid-feedback">
                      {{
                        minLengthError(
                          $t("form.item_name_en.label"),
                          $v.fixedAssetObject.name_en.$params.maxLength.max
                        )
                      }}
                    </div>
                    <div v-else-if="!$v.fixedAssetObject.name_en.notContainsHtmlTags &&
                        $v.fixedAssetObject.name_en.$error
                        " class="invalid-feedback">
                      {{ htmlTagsError($t("form.item_name_en.label")) }}
                    </div>
                </div>
              
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.item_name_ar.label")
                  }}</label>
                  <input type="text" v-model="form.name_ar" :placeholder="$t('form.item_name_ar.placeholder')"
                    class="form-control" 
                    :class="{
                      'is-invalid': $v.fixedAssetObject.name_ar.$error,
                    }" />
                  <div v-if="!$v.fixedAssetObject.name_ar.required && $v.fixedAssetObject.name_ar.$error" class="invalid-feedback">
                      {{ requiredError($t("form.item_name_ar.label")) }}
                    </div>
                    <div v-else-if="!$v.fixedAssetObject.name_ar.minLength && $v.fixedAssetObject.name_ar.$error
                      " class="invalid-feedback">
                      {{
                        maxLengthError(
                          $t("form.item_name_ar.label"),
                          $v.fixedAssetObject.name_ar.$params.minLength.min
                        )
                      }}
                    </div>
                    <div v-else-if="!$v.fixedAssetObject.name_ar.maxLength && $v.fixedAssetObject.name_ar.$error
                        " class="invalid-feedback">
                      {{
                        minLengthError(
                          $t("form.item_name_ar.label"),
                          $v.fixedAssetObject.name_ar.$params.maxLength.max
                        )
                      }}
                    </div>
                    <div v-else-if="!$v.fixedAssetObject.name_ar.notContainsHtmlTags &&
                        $v.fixedAssetObject.name_ar.$error
                        " class="invalid-feedback">
                      {{ htmlTagsError($t("form.item_name_ar.label")) }}
                    </div>
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div :class="isUpdating ? 'col-lg-4 col-sm-6' : 'col-md-6'">
          <Base>
            <div class="row">
              <div class="col-10">
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.group.label")}}</label>
                    <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                      <i class="pi" :class="[typeof form.group === 'string' && form.group !== '' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                      <AutoComplete
                        v-model="form.group" 
                        :suggestions="groupParams.suggestions"
                        field="name_en"
                        :placeholder="$t('form.group.placeholder')"
                        @complete="search($event, groupParams)"
                        :forceSelection="true" 
                        :class="{ 'p-invalid': $v.fixedAssetObject.group.$error }" 
                      />
                    <div class="error">
                      <small class="p-invalid" v-if="!$v.fixedAssetObject.group.required && $v.fixedAssetObject.group.$error">
                        {{ requiredError($t("form.group.label")) }}
                      </small>
                    </div>
                  </span>
                </div>
              </div>
              <div class="col-2">
                <Group></Group>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{ $t("form.location.label")}}</label>
                  <input type="text"
                    v-model="form.location" 
                    class="form-control"
                    :placeholder="$t('form.location.placeholder')"
                    :class="{'is-invalid':$v.fixedAssetObject.location.$error}"
                  />
                  <div v-if="!$v.fixedAssetObject.location.minLength && $v.fixedAssetObject.location.$error
                      " class="invalid-feedback">
                      {{     maxLengthError(
                          $t("form.item_location.label"),
                          $v.fixedAssetObject.location.$params.minLength.min
                        )
                      }}
                  </div>
                  <div v-else-if="!$v.fixedAssetObject.location.maxLength && $v.fixedAssetObject.location.$error
                      " class="invalid-feedback">
                    {{
                      minLengthError(
                        $t("form.item_location.label"),
                        $v.fixedAssetObject.location.$params.maxLength.max
                      )
                    }}
                  </div>
                  <div v-else-if="!$v.fixedAssetObject.location.notContainsHtmlTags &&
                      $v.fixedAssetObject.location.$error
                      " class="invalid-feedback">
                    {{ htmlTagsError($t("form.item_location.label")) }}
                  </div>
                </div>
              </div>
            </div>
          </Base>
        </div>

        <div class="col-lg-4 col-sm-6" v-if="isUpdating">
          <Base>
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.serial.label")
              }}</label>
              <input type="text" v-model="form.serial" :placeholder="$t('form.serial.placeholder')"
                class="form-control" :disabled="true" />
            </div>
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.account.label")
              }}</label>
              <input type="text" v-model="form.account" :placeholder="$t('form.account.placeholder')"
                class="form-control" :disabled="true" />
            </div>
          </Base>
        </div>
      </div>
    

      <div class="row">
        <div class="col-lg-6 col-sm-12">
          <div class="row">
            <div class="col-12">
              <Base :title="$t('form.asset.assetOperations')" :icon="'pi pi-check-square'" :showBreadCrumb="false"
                :showToggleContent="false" :showFullScreen="false">

              <CustomTabs class="text-center" v-model="selectedTab" :tabs="tabs" />

              <Pricing :value="form" :v="$v.fixedAssetObject ? $v.fixedAssetObject : {}" v-show="selectedTab == 'pricing'"
                :error="error" />
              <Warranty :value="form" :v="$v.fixedAssetObject ? $v.fixedAssetObject : {}"
                v-show="selectedTab == 'warranty'" :error="error" />
              <Maintenance :value="form" :v="$v.fixedAssetObject ? $v.fixedAssetObject : {}"
                v-show="selectedTab == 'maintenance'" :error="error" />
              </Base>
            </div>
            <div class="col-12">
              <Base>
              <UploadFile 
                v-model="form.uploaded_files"
                :saved_files="form.saved_files"
                @removePath="removePath"
                :mediaUrl="mediaUrl">
              </UploadFile>
              </Base>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12">
              <Base :title="$t('form.asset.assetStatus')" :icon="'pi pi-check-square'" :showBreadCrumb="false"
                :showToggleContent="false" :showFullScreen="false">
                <div class="row d-flex align-items-center">
                  <div class="col-md-5">
                    <div class="form-group">
                      <div class="field-checkbox d-flex justify-content-between">
                        <label for="binary">
                          {{ $t("form.in_active.label") }}
                        </label>
                        <Checkbox id="binary" class="me-2" v-model="form.in_active" :trueValue="true" :falseValue="false" :binary="true" />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="field-checkbox d-flex justify-content-between">
                        <label for="binary">{{
                          $t("form.in_maintenance.label")
                        }}</label>
                        <Checkbox id="binary" class="me-2" v-model="form.in_maintenance" :trueValue="true"
                          :falseValue="false" :binary="true" />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="field-checkbox d-flex justify-content-between">
                        <label for="binary">{{
                          $t("form.total_destruction.label")
                        }}</label>
                        <Checkbox id="binary" class="me-2" v-model="form.total_destruction" :binary="true" :trueValue="true"
                          :falseValue="false" />
                      </div>
                    </div>

                  </div>
                    <Divider class="vertical"></Divider>
                  <div class="col-md-5">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group">
                          <label for="" class="form-label">{{
                            $t("form.purchasing_date.label")
                          }}</label>
                          <Calendar v-model="form.purchasing_date" :showIcon="true" dateFormat="yy-mm-dd"
                            :placeholder="$t('form.purchasing_date.placeholder')" :class="{
                              'p-invalid': $v.fixedAssetObject.purchasing_date.$error,
                            }" />
                        </div>
                        <div class="form-group">
                          <label for="" class="form-label">{{
                            $t("form.expiration_date.label")
                          }}</label>
                          <Calendar v-model="form.expiration_date" :showIcon="true" dateFormat="yy-mm-dd"
                            :placeholder="$t('form.expiration_date.placeholder')" :class="{
                              'p-invalid': $v.fixedAssetObject.expiration_date.$error,
                            }" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Base>
              <Base>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="" class="form-label">{{
                        $t("form.last_supplier.label")
                      }}</label>
                        <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                          <i class="pi" :class="[typeof form.last_supplier === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                          <AutoComplete 
                            v-model="form.last_supplier" 
                            :suggestions="supplierParams.suggestions" 
                            field="name"
                            :placeholder="$t('form.last_supplier.placeholder')"
                            @complete="searchSuppliers($event, supplierParams)" 
                          />
                        </span>
                    </div>
                    <div class="form-group">
                      <label for="" class="form-label">{{$t("form.employee_custody.label")}}</label>
                      <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                        <i class="pi" :class="[typeof form.employee_custody === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                        <AutoComplete 
                          v-model="form.employee_custody" 
                          :suggestions="employeeParams.suggestions"
                          field="name"
                          :placeholder="$t('form.employee_custody.placeholder')"
                          @complete="searchEmployee($event, employeeParams)"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Base>
        </div>
      </div>
      <Base>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label class="form-label">{{
                $t("form.description.label")
              }}</label>
              <textarea class="form-control" rows="5" cols="30" v-model="form.description"
                :placeholder="$t('form.description.placeholder')" :class="{
                  'is-invalid': $v.fixedAssetObject.description.$error,
                }"></textarea>
              <div v-if="!$v.fixedAssetObject.description.notContainsHtmlTags &&
                $v.fixedAssetObject.description.$error
                " class="invalid-feedback">
                {{ htmlTagsError($t("form.description.label")) }}
              </div>
            </div>
          </div>
        </div>
      </Base>
    </EditDialog>
    <!-- <Form v-model="group" :displayForm="displayFormGroup" :error="upsertError"
      :isUpdating="isUpdatingGroup" @close="resetForm" @cancel="resetForm" @save="create" :isLoading="upsertLoading"
      :header="$t('dialog.header.new')">
    </Form> -->
  </div>
</template>
<i18n src="@/lang/erp_v2/assets/fixedAsset.json"></i18n>

<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import Divider from "@/components/global/utilities/Divider.vue";
import Base from "@/components/global/utilities/Base.vue";
import Pricing from "@/components/erp_v2/assets/fixedAsset/tabs/Pricing";
import Warranty from "@/components/erp_v2/assets/fixedAsset/tabs/Warranty.vue"
import Maintenance from "@/components/erp_v2/assets/fixedAsset/tabs/Maintenance.vue"
import UploadFile from "@/components/global/utilities/UploadFile.vue";
import { urls } from "@/backend/urls";

import groupSuggestions from "@/mixins/erp_v2/assets/group/groupSuggestions.js";
import fixedAssetObject from "@/mixins/erp_v2/assets/validation/fixedAssetObject";
import supplierSuggestions from "@/mixins/erp_v2/suppliers/supplierSuggestions.js";
import employeeSuggestions from "@/mixins/erp_v2/hr/employees/employeeSuggestions.js";

import Group from "@/components/erp_v2/assets/fixedAsset/addForm/Group.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
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
    Divider,
    Pricing,
    Warranty,
    Maintenance,
    Group,
  },
  mixins: [groupSuggestions, fixedAssetObject, supplierSuggestions, employeeSuggestions],
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
    // isUpdating(){
    //   if (this.form.saved_files.includes(null)) {
    // console.log("Array contains null.");
    //   } else {
    //       console.log("Array does not contain null.");
    //   }
    // }
  },
  data() {
    return {
      mediaUrl: urls.business.mediaUrl,
      selectedTab: "pricing",
      tabs: [
        { en: "Pricing", ar: "التسعير", key: "pricing" },
        {
          en: "Warranty",
          ar: "ضمان",
          key: "warranty",
        },
        {
          en: "Maintenance",
          ar: "صيانة",
          key: "maintenance",
        },
      ],
      form: this.value,
      displayFormGroup: false,
  
    };
  },

  computed: {
  },
  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    inputError,
    saveForm() {
      this.$v.fixedAssetObject.$touch();
      if (!this.$v.fixedAssetObject.$invalid) {
        this.$emit("save");
        this.$v.fixedAssetObject.$reset();
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.fixedAssetObject.$reset();
    },
    removePath(data,index) {
      console.log("remove",data,index);
      this.form.deleted_files.push(
        data
      );
      this.form.saved_files.splice(index, 1);
    },

  },
};
</script>