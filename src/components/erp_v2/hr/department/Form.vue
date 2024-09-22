<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      @deleteRecord="deleteRecord"
      :isLoading="isLoading"
      :header="header"
      :icon="'pi pi-sitemap'"
    >
      <slot></slot>
      <div class="row" v-if="error">
        <div class="col-12">
          <div class="errors" v-if="typeof error === 'object'">
            <Message
              severity="error"
              v-for="(value, key) in error"
              :key="key"
              :closable="false"
            >
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ key }} : {{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <div class="row">
        <div :class="isUpdating ? 'col-md-4' : 'col-md-6'" >
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.department_name.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.department_name"
                    :placeholder="$t('form.department_name.placeholder')"
                    class="form-control"
                    :class="{ 'is-invalid': $v.form.department_name.$error }"
                  />
                  <div
                    v-if="!$v.form.department_name.required && $v.form.department_name.$error"
                    class="invalid-feedback"
                  >
                    {{ requiredError($t("form.department_name.label")) }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.department_name.minLength && $v.form.department_name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      maxLengthError(
                        $t("form.department_name.label"),
                        $v.form.department_name.$params.minLength.min
                      )
                    }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.department_name.maxLength && $v.form.department_name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      minLengthError(
                        $t("form.department_name.label"),
                        $v.form.department_name.$params.maxLength.max
                      )
                    }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.department_name.notContainsHtmlTags &&
                      $v.form.department_name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{ htmlTagsError($t("form.department_name.label")) }}
                  </div>
                </div>
              </div>
            </div>
      
          </Base>
        </div>
        <div :class="isUpdating ? 'col-md-4' : 'col-md-6'">
          <Base>
          <div class="row">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.parent.label")
              }}</label>
              <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                <i class="pi" :class="[typeof form.parent === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                <AutoComplete
                  v-model="form.parent"
                  :suggestions="departmentParams.suggestions"
                  field="department_name"
                  :placeholder="$t('form.parent.placeholder')"
                  @complete="search($event, departmentParams)"
                  :forceSelection="true"
                />
              </span>
            </div>
          </div>
          </Base>
        </div>
        <div class="col-md-4" v-if="isUpdating">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{ $t("form.serial_code.label")}}</label>
                  <input
                    type="text"
                    v-model="form.serial_code"
                    :placeholder="$t('form.serial_code.placeholder')"
                    class="form-control"
                    disabled
                  />
                </div>
              </div>
            </div>
          </Base>
        </div>
      </div>
      <div class="row"> 
        <div class="col-md-12 col-lg-8">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.role.label")
                  }}</label>
                  <div class="d-flex flex-wrap custom-radio-button justify-content-between">
                    <div v-for="option of role_options" :key="option.id" class="field-radiobutton d-flex gap-1 align-items-center" >
                    <RadioButton
                      :id="option.id"
                      name="option"
                      :value="option.id"
                      v-model="form.role"
                    />
                    <label class="mt-2">{{ option[locale] }} </label>
                  </div>
                </div>
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
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/hr/department.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue";
import departmentSuggestions from "@/mixins/erp_v2/hr/department/departmentSuggestions.js";

import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
import toast from "@/mixins/global/toast";

export default {
  mixins: [toast, departmentSuggestions],
  components: {
    EditDialog,
    Base,
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
    role_options: {
      type: Array,
      required: [],
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
  },
  data() {
    return {
      displayDeleteDialog: false,
      form: this.value,
    };
  },
  validations: {
    form: {
      department_name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
    
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
