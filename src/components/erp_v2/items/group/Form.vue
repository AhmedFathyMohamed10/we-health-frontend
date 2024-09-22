<template>
  <div class="form">
    <EditDialog :display="displayForm" @close="cancelForm" @cancel="cancelForm" @save="saveForm"
      @deleteRecord="deleteRecord" :isLoading="isLoading" :header="header">
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
        <div :class="flagType == 2 || isUpdating ? 'col-md-6' : 'col-md-12'" >
          <Base>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("form.name_en.label")}}</label>
                <input type="text" v-model="form.name_en" :placeholder="$t('form.name_en.placeholder')"
                  class="form-control" :class="{ 'is-invalid': $v.form.name_en.$error }" />
                <div v-if="!$v.form.name_en.required && $v.form.name_en.$error" class="invalid-feedback">
                  {{ requiredError($t("form.name_en.label")) }}
                </div>
                <div v-else-if="!$v.form.name_en.minLength && $v.form.name_en.$error " class="invalid-feedback">
                  {{maxLengthError( $t("form.name_en.label"),$v.form.name_en.$params.minLength.min) }}
                </div>
                <div v-else-if="!$v.form.name_en.maxLength && $v.form.name_en.$error " class="invalid-feedback">
                  {{minLengthError($t("form.name_en.label"),$v.form.name_en.$params.maxLength.max)}}
                </div>
                <div v-else-if="!$v.form.name_en.notContainsHtmlTags && $v.form.name_en.$error" class="invalid-feedback">
                  {{ htmlTagsError($t("form.name_en.label")) }}
                </div>
              </div>
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.name_ar.label")
                }}</label>
                <input type="text" 
                  v-model="form.name_ar" 
                  :placeholder="$t('form.name_ar.placeholder')"
                  class="form-control" 
                  :class="{ 'is-invalid': $v.form.name_ar.$error }" />
                <div v-if="!$v.form.name_ar.required && $v.form.name_ar.$error" class="invalid-feedback">
                  {{ requiredError($t("form.name_ar.label")) }}
                </div>
                <div v-else-if="!$v.form.name_ar.minLength && $v.form.name_ar.$error" class="invalid-feedback">
                  {{ maxLengthError( $t("form.name_ar.label"),$v.form.name_ar.$params.minLength.min)}}
                </div>
                <div v-else-if="!$v.form.name_ar.maxLength && $v.form.name_ar.$error " class="invalid-feedback">
                  {{ minLengthError( $t("form.name_ar.label"), $v.form.name_ar.$params.maxLength.max) }}
                </div>
                <div v-else-if="!$v.form.name_ar.notContainsHtmlTags && $v.form.name_ar.$error " class="invalid-feedback">
                  {{ htmlTagsError($t("form.name_ar.label")) }}
                </div>
              </div>
            </div>
          </div>
          </Base>
        </div>
        <div :class="flagType == 2 || isUpdating ? 'col-md-6' : 'col-md-12'" v-if="flagType == 2 || isUpdating" >
          <Base>
          <div class="row">
            <div class="col-12">
              <div class="form-group" >
                <label for="" class="form-label">{{$t("form.parent.label")}}</label>
                <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                  <i class="pi" :class="[typeof form.parent === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                  <AutoComplete 
                    v-model="form.parent" 
                    :suggestions="groupParams.suggestions" 
                    field="name_en"
                    :placeholder="$t('form.parent.placeholder')"
                    @complete="search($event, groupParams)" 
                    :forceSelection="true" 
                  />
                </span> 
              </div>
         
            </div>
          </div>
          </Base>
        </div>
        <div class="col-md-6" v-if="isUpdating">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.account.label")}}</label>
                  <input type="text"
                    v-model="form.account" 
                    :placeholder="$t('form.account.placeholder')"
                    class="form-control" 
                    :class="{ 'is-invalid': $v.form.account.$error }" 
                    disabled/>
                </div>
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.code.label")}}</label>
                  <input type="text" v-model="form.serial" :placeholder="$t('form.code.placeholder')" class="form-control"
                    disabled />
                </div>
              
              </div>
            </div>
          </Base>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <Base>
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.description.label")
              }}</label>
                <textarea 
                  class="form-control"
                  rows="5" cols="30" 
                  v-model="form.description"
                  :placeholder="$t('form.description.placeholder')"
                  :class="{'is-invalid':$v.form.description.$error}">
                </textarea>
                <div v-if="!$v.form.description.minLength && $v.form.description.$error" class="invalid-feedback">
                  {{maxLengthError($t("form.description.label"),$v.form.description.$params.minLength.min)}}
                </div>
                <div v-else-if="!$v.form.description.maxLength && $v.form.description.$error" class="invalid-feedback">
                  {{minLengthError($t("form.description.label"),$v.form.description.$params.maxLength.max) }}
                </div>
                <div v-else-if="!$v.form.description.notContainsHtmlTags && $v.form.description.$error" class="invalid-feedback">
                  {{ htmlTagsError($t("form.description.label")) }}
                </div>
            </div>
          </Base>
        </div>
      </div>
      <template #custom-footer v-if="isUpdating">
        <Button class="p-button-danger" :label="$t('btns.delete')" icon="pi pi-times"
          :iconPos="locale == 'ar' ? 'right' : 'left'" :loading="isLoading" @click="openDeleteDialog" />
      </template>
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRecord" />
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/group/group.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue";
import itemGroupSuggestions from "@/mixins/erp_v2/items/itemGroupSuggestions";

import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
import toast from "@/mixins/global/toast";

export default {
  mixins: [toast,itemGroupSuggestions],
  components: {
    EditDialog,
    Base,
    DeleteDialog,
  },
  props: {
    displayForm: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    isUpdating: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    typeAdd: {
      type: Number,
      default() {
        return 1;
      },
    },
    isLoading: {
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
    typeAdd() {
      this.flagType = this.typeAdd;
    },
  },
  data() {
    return {
      displayDeleteDialog: false,
      flagType: this.typeAdd,
      form: this.value,
    };
  },
  validations: {
    form: {
      name_en: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      name_ar: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      parent: {},
      serial: {},
      account: {},
      description: {
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
    },
  },

  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.$emit("save");
        this.$v.form.$reset();
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
    },
    /////////////////////////////
    openDeleteDialog() {
      this.displayDeleteDialog = true;
    },

    deleteRecord() {
      this.displayDeleteDialog = false;
      this.$emit("deleteGroup", this.form);
    },

    closeDeleteDialog() {
      this.displayDeleteDialog = false;
    },
  },
};
</script>
  