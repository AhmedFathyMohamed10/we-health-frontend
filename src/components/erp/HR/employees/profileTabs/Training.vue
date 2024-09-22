<template>
  <div class="Job">
    <div class="d-flex justify-content-between">
      <div>
        <i class="fa fa-graduation-cap fs-4 fc-green" aria-hidden="true"></i>
        <span class="mx-1 h4">{{ $t("tabs.Training") }}</span>
      </div>
      <span class="pt-1">Customize</span>
    </div>
    <hr />
    <div class="container pt-3 py-2 box">
      <div class="current">
        <div class="px-3">
          <span class="px-1 h4">{{$t("sections.current")}}</span>
        </div>
        <div class="border ms-3 my-2">
          <div class="col-12 mt-6" v-if="current.length > 0 ">
            <table class="table table-sm">
              <tbody>
                <tr class="" v-for="(value, index) in current" :key="index">
                  <td>
                    <div class="">
                      <span>{{ value.course_name }} </span>
                      <span class="text-success">{{
                        formate_date(value.start_date)
                      }}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
            <NoResults></NoResults>
          </div>
        </div>
      </div>
      <div class="upcomming">
        <div class="px-3">
          <span class="px-1 h4">{{$t("sections.upcoming_training")}}</span>
        </div>
        <div class="border ms-3 my-2">
          <div class="col-12 mt-6" v-if="upcomming.length > 0 ">
            <table class="table table-sm">
              <tbody>
                <tr class="" v-for="(value, index) in upcomming" :key="index">
                  <td>
                    <div class="">
                      <span>{{ value.course_name }} </span>
                      <span class="text-warning">{{
                        formate_date(value.start_date)
                      }}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else>
            <NoResults></NoResults>
          </div>
        </div>
      </div>
      <div class="completed">
        <div class="row d-flex ">
          <div class="col-xxl-6 col-lg-6 col-md-6 col-12">
            <span class=" h4 text-center px-3">{{$t("sections.completed")}}</span>
          </div>
            <div class="col-xxl-6 col-lg-6 col-md-6 col-12 form-group d-flex gap-1">
              <button
              class="btn btn-icon rounded-circle btn-success w-auto"
              @click="addRow"
            >
              <i class="fa fa-plus fa-md"></i>
            </button>
            
            <label for="" class="form-label font-size flex-shrink-0">{{
              $t("btns.addInternship")
            }}</label>
            </div>
          
        </div>
        <hr />
        <div class="col-12 " v-if="completed.length > 0">
          <table class="table table-borderless table-sm">
            <tbody>
              <tr class="" v-for="(value, index) in completed" :key="index">
                <td>
                  <div class="form-check">
                    <span class="text-decoration-line-through px-2"
                      >{{ value.course_name }}
                    </span>
                    <span class="text-secondary">
                      {{$t("sections.completed")}} {{ formate_date(value.end_date) }}</span
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <NoResults></NoResults>
        </div>
        <hr />
      </div>
    </div>
    <Form v-model="form" :isLoading="upsertLoading" :isProfileForm="isProfileForm" :displayForm="displayForm" @close="resetForm" @cancel="resetForm" @save="upsert" :error="upsertError" :header="$t('dialog.header.new')"> 
    </Form>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/employees/employees.json"></i18n>
<i18n src="@/lang/erp/employees/employeeProfile.json"></i18n>
<i18n src="@/lang/erp/internships/Internship.json"></i18n>

<script>
import { mapGetters, mapActions } from "vuex";
import clientsOptions from "@/mixins/erp/clients/clientsOptions";

// import Dropdown from "primevue/dropdown";
import whiteBackground from "@/assets/global/image-plugin-templates/White-Background.svg";
import ImageEditor from "@/components/global/image-plugin/ImageEditor.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import moment from "moment";
import Form from '@/components/erp/HR/internships/internships/Form.vue';
import {
  requiredError,
  minLengthError,
  maxLengthError,
  numericError,
  htmlTagsError,
  timeDateError,
  inputError,
} from "@/validation/errors.js";
export default {
  mixins: [clientsOptions],
  components: {
    Form,
    NoResults
  },
  props: {
    v: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      // upcomming :[],
      // completed : [],
      isUpdating : false,
      displayForm : false,
      isProfileForm : false,
      form: {
        course: "",
        employee: "",
        start_date: "",
        end_date: "",
      },
      status_en: [
        { name: "Active", value: 1 },
        { name: "suspended", value: 2 },
      ],
      status_ar: [
        { name: "نشط", value: 1 },
        { name: "غير نشط", value: 2 },
      ],
      dob: "",
      genderChoices_en: [
        { name: "Male", value: "Male" },
        { name: "Female", value: "Female" },
      ],
      genderChoices_ar: [
        { name: "ذكر", value: "Male" },
        { name: "انثي", value: "Female" },
      ],
      maritalStatusChoices_en: [
        { name: "Married", value: "Married" },
        { name: "Single", value: "Single" },
      ],
      maritalStatusChoices_ar: [
        { name: "متزوج", value: "Married" },
        { name: "اعزب", value: "Single" },
      ],

      ImageControls: {
        templateImage: whiteBackground,
      },
    };
  },
  computed: {
    ...mapGetters("erp/hr/internships", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",

      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",
    }),
    internships() {
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
    ...mapGetters("erp/hr/employees", {
      getEmployee: "getEmployee",
    }),
    employee: {
      get() {
        return this.getEmployee;
      },
      set(value) {
        this.setEmployee(value);
      },
    },
    status() {
      if (this.employee.status == 1) {
        return "Active";
      } else {
        return "Suspended";
      }
    },
    name() {
      let word = this.employee.name;
      word = word.split(" ");
      return word;
    },
    age() {
      var date = moment();
      var b = moment(this.employee.dob, "YYYY");
      var diff = date.diff(b, "years"); // calculates patient's age in years
      return diff; // this prints out the age
    },
    now() {
      let date = moment();
      return date;
    },
    current() {
      let arr = [];
      if (this.employee.internships) {
        this.employee.internships.forEach((element) => {
          let start_date = moment(element.start_date);
          let end_date = moment(element.end_date);
          console.log(this.now)
          console.log(start_date)
          console.log(end_date)
          if ( end_date > this.now && start_date < this.now) {
            arr.push(element);
          }
        });
      }
      return arr;
    },
    upcomming() {
      let arr = [];
      if (this.employee.internships) {
        this.employee.internships.forEach((element) => {
          let start_date = moment(element.start_date);
          let end_date = moment(element.end_date);
          console.log(this.now)
          console.log(start_date)
          console.log(end_date)
          if ( end_date > this.now && start_date > this.now) {
            arr.push(element);
          }
        });
      }
      return arr;
    },
    completed() {
      let arr = [];
      if (this.employee.internships) {
        this.employee.internships.forEach((element) => {
          let start_date = moment(element.start_date);
          let end_date = moment(element.end_date);
          if (end_date < this.now && start_date < this.now) {
            arr.push(element);
          }
        });
      }
      return arr;
    },
  },
    created(){
      if (!this.internships.Length > 0) {
      let params = { pageNumber:  1,
        rows: 10000,
        entity_name:  "",
        course_name: "",
        employee_name: "",
        department_name: "",};
      this.$store.dispatch("erp/hr/internships/list", params);
    }
    },
  methods: {
    ...mapActions("erp/hr/internships", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setStatusError",
    ]),
    formate_date(date) {
      let formate_date = this.$moment(date).format("MMM Do YYYY");
      return formate_date;
    },

    ...mapActions("erp/hr/employees", ["setEmployee"]),
    ////////// UPSERT ///////////////////
    addRow() {
      this.displayForm = true;
     
      this.form.employee = this.employee.id
    
      this.isProfileForm = true;
    },
    closeForm() {
      this.displayForm = false;
      this.isProfileForm = false;
    },
    openUpdate(item) {
      this.isUpdating = true;
      this.form = { ...item };
      this.openForm();
    },
    resetForm() {
      this.form = {
        course: "",
        employee: "",
        start_date: "",
        end_date: "",
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create(){
        this.form.end_date = this.$moment(this.form.end_date).format("YYYY-MM-DD");
        this.$store.dispatch("erp/hr/internships/create", this.form)
        .then((res) => {
          this.resetForm();
          console.log(res.data.data[0])
          this.employee.internships.unshift(res.data.data[0]) 
          const summery = res.statusText; 
          const details =  res.data.message;
          this.successToast(summery,details)
        })
        .catch((err) => {
          console.log(err)
          const summery = err.statusText; 
          const details =  err.data.message;
          this.errorToast(summery,details)
        })
      },
      update(){
        this.form.end_date = this.$moment(this.form.end_date).format("YYYY-MM-DD");
        this.$store.dispatch("erp/hr/internships/update", this.form)
        .then((res) => {
          this.resetForm();
          // console.log(res)
          const summery = res.statusText; 
          const details =  res.data.message;
          this.successToast(summery,details)
        })
        .catch((err) => {
          console.log(err)
          const summery = err.statusText; 
          const details =  err.data.message;
          this.errorToast(summery,details)
        })
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
<style>
.font-size{
font-size: small;
}
.table-borderless th {
  border: none !important;
}
.fc-green {
  color: green;
}
.input-cl {
  width: 100%;
  padding: 3px;
  border: 1px solid gray;
}
.box {
  border-top: 1px solid #e9edf4;
  border-left: 1px solid #e9edf4;
  border-bottom: 1px solid #e9edf4;
}
.border {
  border-right: 0px !important;
  border-top: 0px !important;
}
@media (max-width: 375px) {
  .flex-item {
    flex-basis: 100%; /* Make each item take up the full width */
  }
}
</style>
