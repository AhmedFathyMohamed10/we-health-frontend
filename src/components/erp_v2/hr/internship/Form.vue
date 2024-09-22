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
        <div class="col-md-6">
          <Base>
            <div class="row">
              <div class="col-10">
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.trainee.label") }}</label>
                  <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                    <i class="pi" :class="[typeof form.trainee === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                    <AutoComplete
                    v-model="form.trainee" 
                    :suggestions="employeeParams.suggestions"
                    field="name"
                    :placeholder="$t('form.trainee.placeholder')"
                    @complete="searchEmployee($event, employeeParams)"
                    :forceSelection="true" 
                    :class="{ 'p-invalid': $v.form.trainee.$error }" 
                    />
                  </span>
                  <div class="error">
                    <small class="p-invalid" v-if="!$v.form.trainee.required && $v.form.trainee.$error">
                      {{ requiredError($t("form.trainee.label")) }}
                    </small>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <Employee></Employee>
              </div>
        
            </div>
            <div class="row">
              <div class="col-10">
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.course.label")}}</label>
                  <Dropdown 
                    v-model="form.course" 
                    :options="courseOptions"
                    optionLabel="name" 
                    optionValue="id"
                    :placeholder="$t('form.course.placeholder')" 
                    :class="{'p-invalid': $v.form.course.$error, }"
                  />
                  <div v-if="!$v.form.course.required && $v.form.course.$error" class="p-error">
                    {{ requiredError($t("form.course.label")) }}
                  </div>
                </div>
              </div>
              <div class="col-2">
                <Course></Course>
              </div>
            </div>
          </Base>
        </div>

        <div class="col-md-6">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.start_date.label")}}</label>
                    <Calendar 
                      v-model="form.start_date" 
                      :showIcon="true" dateFormat="yy-mm-dd"
                      :placeholder="$t('form.start_date.placeholder')" 
                      :class="{'p-invalid': $v.form.start_date.$error,}"
                    />
                    <div v-if="!$v.form.start_date.required && $v.form.start_date.$error" class="p-error">
                      {{ requiredError($t("form.start_date.label")) }}
                    </div>
                    <div class="p-error" v-if="$v.form.start_date.$error && !$v.form.start_date.validDateTime">
                      {{ timeDateError($t()) }}
                    </div>
                </div>
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.end_date.label")}}</label>
                    <Calendar 
                      v-model="form.end_date" 
                      :showIcon="true" dateFormat="yy-mm-dd"
                      :placeholder="$t('form.end_date.placeholder')" 
                      :class="{'p-invalid': $v.form.end_date.$error,}"
                    />
                    <div v-if="!$v.form.end_date.required && $v.form.end_date.$error" class="p-error">
                      {{ requiredError($t("form.end_date.label")) }}
                    </div>
                    <div class="p-error" v-if="$v.form.end_date.$error && !$v.form.end_date.validDateTime">
                      {{ timeDateError($t()) }}
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
<i18n src="@/lang/erp_v2/hr/internship.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue";
import employeeSuggestions from "@/mixins/erp_v2/hr/employees/employeeSuggestions.js";
import Course from "@/components/erp_v2/hr/internship/formAddOptions/Course";
import Employee from "@/components/erp_v2/hr/overTimeAndOverDueRecord/formAddOptions/Employee";

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
  mixins: [ toast, employeeSuggestions],
  components: {
    EditDialog,
    Base,
    Course,
    Employee,
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
  computed: {
    courseOptions() {
      if (this.$store.getters["erp_v2/hr/courses/getListResponse"]){
        return  this.$store.getters["erp_v2/hr/courses/getListResponse"].results;
      }
      else return [];
    },
  },
  created() {
    if (!this.courseOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp_v2/hr/courses/list", params);
    }
  },
  validations: {
    form: {
      trainee: {
        required,
      },
      course: {
        required,
      },
      start_date:{ 
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      end_date:{ 
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      description:{
        minLength: minLength(4),
            maxLength: maxLength(255),
            notContainsHtmlTags: (value) => {
              return notContainsHtmlTags(value);
            },
      }
    },
  },

  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    timeDateError,
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
  },
};
</script>
<!-- <style lang="scss" scoped>
/deep/ .p-autocomplete {
    position: initial !important;
}
/deep/.p-input-icon-right .p-autocomplete-input {
    padding-left: 1rem;
}
</style>
   -->