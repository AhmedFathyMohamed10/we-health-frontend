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
      <Base>
        <div class="row">
          <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.name_en.label")
                }}</label>
                <input type="text" v-model="form.name_en" :placeholder="$t('form.name_en.placeholder')"
                  class="form-control" :class="{ 'is-invalid': $v.form.name_en.$error }" />
                <div v-if="!$v.form.name_en.required && $v.form.name_en.$error" class="invalid-feedback">
                  {{ requiredError($t("form.name_en.label")) }}
                </div>
                <div v-else-if="!$v.form.name_en.minLength && $v.form.name_en.$error
                  " class="invalid-feedback">
                  {{
                    maxLengthError(
                      $t("form.name_en.label"),
                      $v.form.name_en.$params.minLength.min
                    )
                  }}
                </div>
                <div v-else-if="!$v.form.name_en.maxLength && $v.form.name_en.$error
                    " class="invalid-feedback">
                  {{
                    minLengthError(
                      $t("form.name_en.label"),
                      $v.form.name_en.$params.maxLength.max
                    )
                  }}
                </div>
                <div v-else-if="!$v.form.name_en.notContainsHtmlTags &&
                    $v.form.name_en.$error
                    " class="invalid-feedback">
                  {{ htmlTagsError($t("form.name_en.label")) }}
                </div>
              </div>
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.name_ar.label")
                }}</label>
                <input type="text" v-model="form.name_ar" :placeholder="$t('form.name_ar.placeholder')"
                  class="form-control" :class="{ 'is-invalid': $v.form.name_ar.$error }" />
                <div v-if="!$v.form.name_ar.minLength && $v.form.name_ar.$error" class="invalid-feedback">
                  {{
                    maxLengthError(
                      $t("form.name_ar.label"),
                      $v.form.name_ar.$params.minLength.min
                    )
                  }}
                </div>
                <div v-else-if="!$v.form.name_ar.maxLength && $v.form.name_ar.$error
                    " class="invalid-feedback">
                  {{
                    minLengthError(
                      $t("form.name_ar.label"),
                      $v.form.name_ar.$params.maxLength.max
                    )
                  }}
                </div>
                <div v-else-if="!$v.form.name_ar.notContainsHtmlTags &&
                    $v.form.name_ar.$error
                    " class="invalid-feedback">
                  {{ htmlTagsError($t("form.name_ar.label")) }}
                </div>
              </div>
            </div>
          </div>
      </Base>
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
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
import toast from "@/mixins/global/toast";

export default {
  mixins: [toast],
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
  