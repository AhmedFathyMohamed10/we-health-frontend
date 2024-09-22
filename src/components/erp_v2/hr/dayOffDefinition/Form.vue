<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :isLoading="isLoading"
      :header="header"
      :min-width="'80'"
      :max-width="'100'"
      :icon="'pi pi-calendar'"
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
        <div :class="isUpdating ? 'col-md-6' : 'col-md-12'">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.day_off_name.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.day_off_name"
                    :placeholder="$t('form.day_off_name.placeholder')"
                    class="form-control"
                    :class="{ 'is-invalid': $v.form.day_off_name.$error }"
                  />
                  <div
                    v-if="!$v.form.day_off_name.required && $v.form.day_off_name.$error"
                    class="invalid-feedback"
                  >
                    {{ requiredError($t("form.day_off_name.label")) }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.day_off_name.minLength && $v.form.day_off_name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      maxLengthError(
                        $t("form.day_off_name.label"),
                        $v.form.day_off_name.$params.minLength.min
                      )
                    }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.day_off_name.maxLength && $v.form.day_off_name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      minLengthError(
                        $t("form.day_off_name.label"),
                        $v.form.day_off_name.$params.maxLength.max
                      )
                    }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.day_off_name.notContainsHtmlTags &&
                      $v.form.day_off_name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{ htmlTagsError($t("form.day_off_name.label")) }}
                  </div>
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
                  <label for="" class="form-label">{{
                    $t("form.day_off_code.label")
                  }}</label>

                  <input
                    type="text"
                    v-model="form.day_off_code"
                    :placeholder="$t('form.day_off_code.placeholder')"
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
        <div class="col-12">
          <Base>
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.day_off_type.label")
              }}</label>
              <div
                  class="d-flex flex-wrap custom-radio-button justify-content-between gap-2"
                >
                  <div
                    v-for="option of day_off_options"
                    :key="option.id"
                    class="field-radiobutton d-flex gap-1 align-items-center"
                  >
                  <RadioButton
                  :id="option.id"
                  name="option"
                  :value="option.id"
                  v-model="form.day_off_type"
                  />
                  <label class="mt-2">{{ option[locale] }} </label>
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
<i18n src="@/lang/erp_v2/hr/dayOffDefinition.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
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
  mixins: [ toast],
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
    day_off_options: {
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
      form: this.value,
    };
  },
  validations: {
    form: {
      day_off_name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      day_off_code: {},
      day_off_type: {},
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
  },
};
</script>
  