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
        <div class="col-md-4">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.name.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.name"
                    :placeholder="$t('form.name.placeholder')"
                    class="form-control"
                    :class="{'is-invalid': $v.form.name.$error,}"
                  />
                  <div v-if="!$v.form.name.required && $v.form.name.$error" class="invalid-feedback">
                    {{ requiredError($t("form.name.label")) }}
                  </div>
                </div>
              </div>
            </div>
          </Base>
        </div>

        <div class="col-md-4">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.shift_day_from.label")}}</label>
                    <Calendar 
                      v-model="form.shift_day_from" 
                      :showIcon="true"
                      dateFormat="yy-mm-dd"
                      :placeholder="$t('form.shift_day_from.placeholder')" 
                      :class="{'p-invalid': $v.form.shift_day_from.$error,}"
                    />
                    <div v-if="!$v.form.shift_day_from.required && $v.form.shift_day_from.$error" class="p-error">
                      {{ requiredError($t("form.shift_day_from.label")) }}
                    </div>
                    <div class="p-error" v-if="$v.form.shift_day_from.$error && !$v.form.shift_day_from.validDateTime">
                      {{ timeDateError($t()) }}
                    </div>
                </div>
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.shift_day_to.label")}}</label>
                    <Calendar 
                      v-model="form.shift_day_to" 
                      :showIcon="true" dateFormat="yy-mm-dd"
                      :placeholder="$t('form.shift_day_to.placeholder')" 
                      :class="{'p-invalid': $v.form.shift_day_to.$error,}"
                    />
                    <div v-if="!$v.form.shift_day_to.required && $v.form.shift_day_to.$error" class="p-error">
                      {{ requiredError($t("form.shift_day_to.label")) }}
                    </div>
                    <div class="p-error" v-if="$v.form.shift_day_to.$error && !$v.form.shift_day_to.validDateTime">
                      {{ timeDateError($t()) }}
                    </div>
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-md-4">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.work_hour_from.label")
                  }}</label>
                  
                    <Calendar 
                    :timeOnly="true"
                    hourFormat="24"
                    v-model="form.work_hour_from" 
                    :showIcon="true" 
                    :showSeconds="true"
                    :placeholder="$t('form.work_hour_from.placeholder')" 
                    :class="{'p-invalid': $v.form.work_hour_from.$error,}"
                    />
                    <div v-if="!$v.form.work_hour_from.required && $v.form.work_hour_from.$error" class="p-error">
                      {{ requiredError($t("form.work_hour_from.label")) }}
                    </div>
                    <div class="p-error" v-if="$v.form.work_hour_from.$error && !$v.form.work_hour_from.validDateTime">
                      {{ timeDateError($t()) }}
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">{{$t("form.work_hour_to.label")}}</label>
                    <Calendar 
                    :timeOnly="true"
                    hourFormat="24"
                    v-model="form.work_hour_to" 
                    :showIcon="true"
                    :showSeconds="true"
                    :placeholder="$t('form.work_hour_to.placeholder')" 
                    :class="{'p-invalid': $v.form.work_hour_to.$error,}"
                    />
                    <div v-if="!$v.form.work_hour_to.required && $v.form.work_hour_to.$error" class="p-error">
                      {{ requiredError($t("form.work_hour_to.label")) }}
                    </div>
                    <div class="p-error" v-if="$v.form.work_hour_to.$error && !$v.form.work_hour_to.validDateTime">
                      {{ timeDateError($t()) }}
                    </div>
                </div>
              </div>
            </div>
          </Base>
        </div>
      </div>

    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/hr/shiftDefinition.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue";
import moment from "moment";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
  timeDateError,
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
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      shift_day_from:{ 
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      shift_day_to:{ 
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      work_hour_from:{
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "hh:mm:ss", true).isValid();
          }
        },
      },
      work_hour_to:{
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "hh:mm:ss", true).isValid();
          }
        },
      }
     
    },
  },

  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    timeDateError,
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
  },
};
</script>
