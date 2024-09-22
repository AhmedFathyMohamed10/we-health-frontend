<template>
    <div class="form">
      <EditDialog
        :display="displayForm"
        @close="cancelForm"
        @cancel="cancelForm"
        @save="saveForm"
        :isLoading="isLoading"
        :header="header"
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
                <span v-if="key != 'errors'"
                  >{{ $t(`form.${key}.label`) }}:
                </span>
                <span v-if="typeof value === 'string'">{{ value }}</span>
                <span v-else>{{ value[0] }}</span>
              </Message>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.employee.label")
              }}</label>
              <!-- <Dropdown
                v-model="form.employee"
                :options="employeesOptions"
                optionValue="id"
                dataKey="id"
                :value="form.employee"
                optionLabel="name"
                :placeholder="$t('form.employee.placeholder')"
                :class="{
                  'p-invalid': $v.form.employee.$error,
                }"
              /> -->
              <AutoComplete
              
              v-model="form.employee"
              :suggestions="employeeParams.suggestions"
              :class="{
                'p-invalid': $v.form.employee.$error,
              }"            
              field="name"
              :placeholder="$t('form.employee.placeholder')"
              @complete="search($event, employeeParams)"
              />
              <div class="error">
                <small
                  class="d-block text-danger"
                  v-if="!$v.form.employee.required && $v.form.employee.$error"
                >
                  {{ requiredError($t("form.employee.label")) }}
                </small>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.role.label")
              }}</label>
              <Dropdown
                v-model="form.role"
                :options="rolesOptions"
                optionValue="id"
                :value="form.role"
                optionLabel="name"
                dataKey="id"
                :placeholder="$t('form.role.placeholder')"
                :class="{
                  'p-invalid': $v.form.role.$error,
                }"
              />
              <div class="error">
                <small
                  class="d-block text-danger"
                  v-if="!$v.form.role.required && $v.form.role.$error"
                >
                  {{ requiredError($t("form.role.label")) }}
                </small>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{ $t("form.salary.label") }}</label>
              <input
                type="text"
                class="form-control"
                rows="5"
                cols="30"
                v-model="form.salary"
                :placeholder="$t('form.salary.placeholder')"
                :class="{
                  'is-invalid': $v.form.salary.$error,
                }"
              />
              <div
                v-if="!$v.form.salary.required && $v.form.salary.$error"
                class="error"
              >
                <small class="d-block text-danger">
                  {{ requiredError($t("form.salary.label")) }}
                </small>
              </div>
              <div
              v-else-if="
                !$v.form.salary.numeric && $v.form.salary.$error
              "
              class="invalid-feedback"
            >
              {{ numericError($t("form.salary.label")) }}
            </div>
              <div
                v-else-if="
                  !$v.form.salary.maxLength && $v.form.salary.$error
                "
                class="invalid-feedback"
              >
                {{  maxLengthError(
                  $t("form.salary.label"),
                  $v.form.salary.$params.maxLength.max
                ) }}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.start_date.label")
              }}</label>
              <Calendar
                v-model="start_date"
                dateFormat="yy-mm-dd"
                @input="selectDate($event)"
                :placeholder="$t('form.start_date.placeholder')"
                :class="{
                  'p-invalid': $v.form.start_date.$error,
                }"
              />
              <div
                v-if="!$v.form.start_date.required && $v.form.start_date.$error"
                class="p-error"
              >
                {{ requiredError($t("form.start_date.label")) }}
              </div>
              <div
                class="p-error"
                v-else-if="
                  $v.form.start_date.$error && !$v.form.start_date.validDateTime
                "
              >
                {{ dateError($t()) }}
              </div>
            </div>
          </div>
        </div>
       
      </EditDialog>
    </div>
  </template>
  <!-- <i18n src="@/lang/erp/overtime/overtime.json"></i18n> -->
  <i18n src="@/lang/erp/promotions/promotions.json"></i18n>
  <script>
  import EditDialog from "@/components/global/utilities/EditDialog.vue";
  import { required, minLength, numeric,maxLength } from "vuelidate/lib/validators";
  import { notContainsHtmlTags } from "@/validation/customValidators";
  import { mapGetters, mapActions } from "vuex";
  import employeesOptions from "@/mixins/erp/employees/employeeOptions";
  import EmployeeSuggestions from "@/mixins/erp/employees/EmployeeSuggestions"
  import moment from "moment";
  import {
    requiredError,
    minLengthError,
    maxLengthError,
    htmlTagsError,
    dateError,
    numericError,
  } from "@/validation/errors.js";
  export default {
    mixins: [employeesOptions,EmployeeSuggestions],
    components: {
      EditDialog,
      
    },
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
        if(this.value.id){
          this.start_date = this.$moment(this.value.start_date).format("YYYY-MM-DD");
        }
      },
      displayForm(value){
        if(!value){
          this.start_date = ""
          // this.end_date = ""
        }
      }
    },
    data() {
      return {
        form: this.value,
        start_date: "",
        displayFormCategory: false,
        isUpdating: false,
        categoryForm: {
          name: "",
          parent: "",
          description: "",
        },
      };
    },
    computed: {
      
      
      // employeeOptions() {
      //   console.log(this.$store.getters["erp/hr/employees/getListResponse"])
      //   if (this.$store.getters["erp/hr/employees/getListResponse"]){

      //     return this.$store.getters["erp/hr/employees/getListResponse"].results;
      //   }
      //   else {
      //     return [];
      //   }
      // },
      rolesOptions() {
        if (this.$store.getters["erp/hr/roles/getListResponse"]){

          return this.$store.getters["erp/hr/roles/getListResponse"].results;
        }
        else {
          return [];
        }
      },
      listResponse() {
        return this.getListResponse;
      },
      upsertResponse: {
        get() {
          return this.getUpsertResponse;
        },
        set(value) {
          this.setUpsertResponse(value);
        },
      },
      upsertError: {
        get() {
          return this.getUpsertError;
        },
        set(value) {
          this.setUpsertError(value);
        },
      },
    },
    created() {
      // if (this.form.id) {
      //   this.start_date = this.$moment(this.form.start_date).format("YYYY-MM-DD");
      // }
      if (!this.rolesOptions.Length > 0) {
        let params = { pageNumber: 1, rows: 1000000, name: "" };
        this.$store.dispatch("erp/hr/roles/list", params);
      }
      if (!this.employeesOptions.Length > 0) {
      this.$store.dispatch("erp/hr/employees/getOptions");
    }
    },
    validations: {
      form: {
        salary: {
          required,
          numeric,
          maxLength: maxLength(255),
          // notContainsHtmlTags(value) {
          //   return notContainsHtmlTags(value);
          // },
        },
        employee: {
          required,
        },
        role: {
          required,
        },
        start_date: {
          required,
          validDateTime: (value) => {
            if (value == null || value == "") {
              return true;
            } else {
              return moment(value, "YYYY-MM-DD", true).isValid();
            }
          },
        },
      },
    },
  
    methods: {
   
      requiredError,
      minLengthError,
      maxLengthError,
      htmlTagsError,
      dateError,
      numericError,
      
      selectDate(event) {
        this.form.start_date = this.$moment(event).format("YYYY-MM-DD");
      },
      saveForm() {
        this.$v.form.$touch();
        if (!this.$v.form.$invalid) {
          this.form.employee =  this.form.employee.id
          this.$emit("save");
          // this.start_date = ""
          this.$v.form.$reset();
        }
      },
      cancelForm() {
        this.$emit("cancel");
        // this.start_date = ""
        this.$v.form.$reset();
      },
  
    
    },
  };
  </script>
  