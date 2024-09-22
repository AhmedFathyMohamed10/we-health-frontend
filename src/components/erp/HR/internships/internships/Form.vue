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
        <div class="col-md-6" v-if="!isProfileForm">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.employee.label")
            }}</label>
            <!-- <AutoComplete
                v-if="!form.id"
                v-model="form.employee"
                :suggestions="employeesParams.suggestions"
                :class="{
                  'p-invalid':
                    $v.form.employee.$error 
                }"   
                value="id"
                field="name"
                :placeholder="$t('form.employee.placeholder')"
                @complete="search($event, employeesParams)"
                /> -->
            <!-- <Dropdown
              v-model="form.employee"
              :options="employeesOptions"
              optionValue="id"
              :filter="true"
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
        <div :class="!isProfileForm ?'col-md-4' : 'col-md-10'">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.course.label")
            }}</label>
            <Dropdown
              v-model="form.course"
              :options="coursesOptions"
              optionValue="id"
              :value="form.course"
              optionLabel="name"
              dataKey="id"
              :placeholder="$t('form.course.placeholder')"
              :class="{
                'p-invalid': $v.form.course.$error,
              }"
            />
            <div class="error">
              <small
                class="d-block text-danger"
                v-if="!$v.form.course.required && $v.form.course.$error"
              >
                {{ requiredError($t("form.course.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div :class="!isProfileForm ?'col-md-2' : 'col-md-2'">
          <div class="form-group">
            <label for="" class="form-label invisible">{{
              $t("btns.addDep")
            }}</label>
            <button
              class="btn btn-icon rounded-circle btn-success"
              @click="addRow"
            >
              <i class="fa fa-plus fa-md"></i>
            </button>
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
              @input="selectStartDate($event)"
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
              {{ timeDateError($t()) }}
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.end_date.label")
            }}</label>
            <Calendar
              v-model="end_date"
              dateFormat="yy-mm-dd"
              @input="selectEndDate($event)"
              :placeholder="$t('form.end_date.placeholder')"
              :class="{
                'p-invalid': $v.form.end_date.$error,
              }"
            />
            <div
              v-if="!$v.form.end_date.required && $v.form.end_date.$error"
              class="p-error"
            >
              {{ requiredError($t("form.end_date.label")) }}
            </div>
            <div
              class="p-error"
              v-else-if="
                $v.form.end_date.$error && !$v.form.end_date.validDateTime
              "
            >
              {{ timeDateError($t()) }}
            </div>
          </div>
        </div>
      </div>
      <Form
        v-model="courseForm"
        :isLoading="upsertLoading"
        :displayForm="displayFormCategory"
        :parentOptions="coursesOptions"
        @close="resetForm"
        @cancel="resetForm"
        @save="upsert"
        :error="upsertError"
        :header="
          isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')
        "
      
      >
      </Form>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/internships/Internship.json"></i18n>
<i18n src="@/lang/erp/courses/Course.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import {
  required,
  minLength,
  numeric,
  maxLength,
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Form from "@/components/erp/HR/internships/courses/Form.vue";
import { mapGetters, mapActions } from "vuex";
import employeesOptions from "@/mixins/erp/employees/employeeOptions";
import EmployeeSuggestions from "@/mixins/erp/employees/EmployeeSuggestions"
import moment from "moment";
import {
  requiredError,
  minLengthError,
  maxLengthError,
  htmlTagsError,
  timeDateError,
  numericError,
} from "@/validation/errors.js";
export default {
  mixins: [employeesOptions,EmployeeSuggestions],
  components: {
    EditDialog,
    Form,
  },
  props: {
    displayForm: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    isProfileForm:{
      type: Boolean,
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
      if (this.value.id) {
        this.start_date = this.$moment(this.value.start_date).format("YYYY-MM-DD");
        // this.end_date = this.$moment(this.value.end_date).format("YYYY-MM-DD");
      }
    },
    end_date2(value){
        if(value){

          this.form.end_date = this.$moment(value).format("YYYY-MM-DD")
          this.end_date =  this.$moment(value).format("YYYY-MM-DD")
        }
    
    },
    displayForm(value){
        if(!value){
          this.start_date = ""
          this.end_date = ""
        }
      }
  },
  data() {
    return {
      form: this.value,
      start_date: "",
      end_date :"",
      displayFormCategory: false,
      isUpdating: false,
      courseForm: {
        name: "",
        entity_name: "",
        duration: "",
        hours: "",
        course_type: "",
      },
    };
  },
  computed: {
  
    end_date2(){
      
        let course =  this.coursesOptions.filter((element) => element.id == this.form.course)[0]
        let date = this.start_date
        let newDate = ""
      
        if (course && this.$moment(date).isValid()) {
          
          date = new Date(date)
          newDate = new Date(date.setMonth(date.getMonth() + course.duration))
            
        }
        return newDate
 
    },
    ...mapGetters("erp/hr/courses", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",

      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",
    }),

    coursesOptions() {
      if (this.$store.getters["erp/hr/courses/getListResponse"])
        return this.$store.getters["erp/hr/courses/getListResponse"].results;
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
    if (this.form.id) {
      this.start_date = this.$moment(this.form.start_date).format("YYYY-MM-DD");
    }
    if (!this.coursesOptions.Length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp/hr/courses/list", params);
    }
    if (!this.employeesOptions.Length > 0) {
      this.$store.dispatch("erp/hr/employees/getOptions");
    }
  },
  validations: {
    
    form: {
      employee: {
        required,
      },
      course: {
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
      end_date: {
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
    ...mapActions("erp/hr/courses", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setStatusError",
    ]),
    requiredError,
    minLengthError,
    maxLengthError,
    htmlTagsError,
    timeDateError,
    numericError,

    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.form.employee =  this.form.employee.id
        this.$emit("save");
        this.$v.form.$reset();
        // this.start_date = "";
        // this.end_date = "";
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
      // this.start_date = "";
      // this.end_date = "";
    },

    selectStartDate(event) {
      this.form.start_date = this.$moment(event).format("YYYY-MM-DD");
    },
    selectEndDate(event) {
      // this.form.end_date = this.$moment(event).format("YYYY-MM-DD");
      // this.start_date = ""
      this.form.end_date = event
      // this.end_date = event
    },

    ////////// UPSERT ///////////////////
    addRow() {
      this.displayFormCategory = true;
    },
    closeForm() {
      this.displayFormCategory = false;
    },
    openUpdate(item) {
      this.isUpdating = true;
      this.courseForm = { ...item };
      this.openForm();
    },
    resetForm() {
      this.courseForm = {
        name: "",
        entity_name: "",
        duration: "",
        hours: "",
        course_type: "",
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp/hr/courses/create", this.courseForm)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          const summery = err.statusText;
          const details = err.data.message;
          this.errorToast(summery, details);
        });
    },
    update() {
      this.$store
        .dispatch("erp/hr/courses/update", this.courseForm)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          const summery = err.statusText;
          const details = err.data.message;
          this.errorToast(summery, details);
        });
    },
    upsert() {
      if (this.isUpdating) {
        this.update();
      } else {
        this.create();
      }
    },
  },
};
</script>
