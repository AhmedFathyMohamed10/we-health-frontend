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
      :icon="'pi pi-gift'"
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
                    :class="{ 'is-invalid': $v.form.name.$error }"
                  />
                  <div
                    v-if="!$v.form.name.required && $v.form.name.$error"
                    class="invalid-feedback"
                  >
                    {{ requiredError($t("form.name.label")) }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.name.minLength && $v.form.name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      maxLengthError(
                        $t("form.name.label"),
                        $v.form.name.$params.minLength.min
                      )
                    }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.name.maxLength && $v.form.name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      minLengthError(
                        $t("form.name.label"),
                        $v.form.name.$params.maxLength.max
                      )
                    }}
                  </div>
                  <div
                    v-else-if="
                      !$v.form.name.notContainsHtmlTags &&
                      $v.form.name.$error
                    "
                    class="invalid-feedback"
                  >
                    {{ htmlTagsError($t("form.name.label")) }}
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
                    $t("form.course_type.label")
                  }}</label>
                  <Dropdown v-model="form.course_type" :options="course_type_options" :optionLabel="locale" optionValue="id"
                    :placeholder="$t('form.course_type.placeholder')" />
                </div>
              </div>
            </div>
          </Base>
        </div> 
        <div class="col-md-4 ">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.duration.label")
                  }}</label>

                  <input
                    type="text"
                    v-model="form.duration"
                    :placeholder="$t('form.duration.placeholder')"
                    class="form-control"
                    :class="{'is-invalid': $v.form.duration.$error}"
                  />
                  <div v-if="!$v.form.duration.minLength && $v.form.duration.$error" class="invalid-feedback">
                    {{maxLengthError($t("form.duration.label"),$v.form.duration.$params.minLength.min)}}
                  </div>
                  <div v-else-if="!$v.form.duration.maxLength && $v.form.duration.$error" class="invalid-feedback">
                    {{minLengthError($t("form.duration.label"),$v.form.duration.$params.maxLength.max) }}
                  </div>
                  <div v-else-if="!$v.form.duration.notContainsHtmlTags && $v.form.duration.$error" class="invalid-feedback">
                    {{ htmlTagsError($t("form.duration.label")) }}
                  </div>
                </div>
              </div>
            </div>
          </Base>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-lg-8">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.payment_type.label")
                  }}</label>
                  <div
                      class="d-flex flex-wrap custom-radio-button justify-content-between"
                    >
                      <div
                        v-for="option of payment_type_options"
                        :key="option.id"
                        class="field-radiobutton d-flex gap-1 align-items-center"
                      >
                      <RadioButton
                      :id="option.id"
                      name="option"
                      :value="option.id"
                      v-model="form.payment_type"
                      />
                      <label class="mt-2">{{ option[locale] }} </label>
                      </div>
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
                    $t("form.entity_name.label")
                  }}</label>

                  <input
                    type="text"
                    v-model="form.entity_name"
                    :placeholder="$t('form.entity_name.placeholder')"
                    class="form-control"
                    :class="{'is-invalid': $v.form.entity_name.$error}"
                  />
                  <div v-if="!$v.form.entity_name.minLength && $v.form.entity_name.$error" class="invalid-feedback">
                    {{maxLengthError($t("form.entity_name.label"),$v.form.entity_name.$params.minLength.min)}}
                  </div>
                  <div v-else-if="!$v.form.entity_name.maxLength && $v.form.entity_name.$error" class="invalid-feedback">
                    {{minLengthError($t("form.entity_name.label"),$v.form.entity_name.$params.maxLength.max) }}
                  </div>
                  <div v-else-if="!$v.form.entity_name.notContainsHtmlTags && $v.form.entity_name.$error" class="invalid-feedback">
                    {{ htmlTagsError($t("form.entity_name.label")) }}
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
<i18n src="@/lang/erp_v2/hr/courses.json"></i18n>
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
  mixins: [toast],
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
    payment_type_options: {
      type: Array,
      required: [],
    },
    course_type_options: {
      type: Array,
      required: [],
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
  computed: {
    shiftOptions() {
      if (this.$store.getters["erp_v2/hr/shiftDefinition/getListResponse"]){
        return  this.$store.getters["erp_v2/hr/shiftDefinition/getListResponse"].results;
      }
      else return [];
    },
  },
  created() {
    if (!this.shiftOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp_v2/hr/shiftDefinition/list", params);
    }
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
      course_type: {},
      payment_type: {},
      entity_name: {
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
      duration: {
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
  