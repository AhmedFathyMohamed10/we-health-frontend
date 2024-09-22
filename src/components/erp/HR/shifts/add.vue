<template>
  <Page>
    <Dialog
      :header="$t('dialog.header.new')"
      :visible.sync="displayNewModal"
      :closable="false"
      :containerStyle="{ 'min-width': '50vw' }"
    >
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("shift.name.label")
            }}</label>
            <input
              type="text"
              v-model="shift.name"
              :placeholder="$t('shift.name.placeholder')"
              class="form-control"
              :class="{
                'is-invalid':
                  $v.shift.name.$invalid &&
                  $v.shift.name.$anyDirty &&
                  $v.shift.name.$anyError,
              }"
            />
            <div
              v-if="!$v.shift.name.required && $v.shift.name.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("shift.name.label")) }}
            </div>
            <div
              v-if="!$v.shift.name.minLength && $v.shift.name.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("shift.name.label"),
                  $v.shift.name.$params.minLength.min
                )
              }}
            </div>
            <div
              v-if="!$v.shift.name.maxLength && $v.shift.name.$error"
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("shift.name.label"),
                  $v.shift.name.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("shift.days.label")
            }}</label>
            <MultiSelect
             
              v-model="selectedDays"
              :options="[locale] == 'ar' ? days_ar : days"
              optionLabel="name"
              :placeholder="$t('shift.days.placeholder')"
             
            />
            <!-- <MultiSelect
             
              v-model="selectedDays"
              :options="days_ar"
              optionLabel="name"
              :placeholder="$t('shift.days.placeholder')"
            /> -->

            <!-- <div
              v-if="!$v.depart.required && $v.depart.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("shift.department.label")) }}
            </div> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-label">{{ $t("shift.startHour.label") }}</label>
            <Calendar
              v-model="shift.startHour"
              :showTime="true"
              :timeOnly="true"
              :placeholder="$t('shift.startHour.placeholder')"
              hourFormat="12"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-label">{{ $t("shift.endHour.label") }}</label>
            <Calendar
              v-model="shift.endHour"
              :showTime="true"
              :timeOnly="true"
              :placeholder="$t('shift.endHour.placeholder')"
              hourFormat="12"
            />
          </div>
        </div>
      </div>
      <template #footer>
        <div class="row">
          <!-- <div class="col-md-6"></div> -->
          <div class="offset-md-4 col-md-8 offset-lg-6 col-lg-6">
            <div class="row">
              <div class="col-md-6">
                <button
                  class="btn btn-pill btn-success-gradient w-100"
                  @click.prevent="saveNewshift"
                >
                  {{ $t("btns.save") }}
                </button>
              </div>
              <div class="col-md-6">
                <button
                  class="btn btn-pill btn-danger-gradient mb-3 w-100"
                  @click.prevent="closeNew"
                >
                  {{ $t("btns.cancel") }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Dialog>
  </Page>
</template>
<i18n src="@/lang/erp/shifts/Shift.json"></i18n>
<script>
import { mapActions } from "vuex";
/////////////////////////////////////////////////////////////////////////
import {
  required,
  minLength,
  maxLength,
  decimal,
} from "vuelidate/lib/validators";
import {
  requiredError,
  minLengthError,
  maxLengthError,
  numericError,
} from "@/validation/errors.js";
////////////////////////////////////////////////////////////////////////
import Page from "@/components/global/layout/Page.vue";
import Dropdown from "primevue/dropdown";
export default {
  components: {
    Page,
  },
  props: ["modelStatus", "departs"],
  watch: {
    modelStatus: function (newVal, oldVal) {
      // console.log(newVal);
      this.displayNewModal = newVal;
    },
    selectedDays: function (newVal, oldVal) {
      console.log(newVal)
      // days=newVal
      for (var day in newVal) {
        this.shift.days.push(newVal[day].value);
      }
    },
    departs: function (newVal, oldVal) {
      this.departments = newVal;
    },
  },
  data() {
    return {
      // value1:"",      value:"",
      selectedDays:"",
      days: [
        { name: "Saturday", value: "Saturday" },
        { name: "Sunday", value: "Sunday" },
        { name: "Monday", value: "Monday" },
        { name: "Tuesday", value: "Tuesday" },
        { name: "Wednesday", value: "Wednesday" },
        { name: "Thursday", value: "Thursday" },
        { name: "Friday", value: "Friday" },
      ],
      days_ar: [
        { name: "السبت", value: "Saturday" },
        { name: "الحد", value: "Sunday" },
        { name: "الاثتنين", value: "Monday" },
        { name: "الثلاثاء", value: "Tuesday" },
        { name: "الاربعاء", value: "Wednesday" },
        { name: "الخميس", value: "Thursday" },
        { name: "الجمعة", value: "Friday" },
      ],
      requiredError,
      minLengthError,
      maxLengthError,
      numericError,
      displayNewModal: false,
      shiftMobile: "",
      depart: "",
      departments: [],
      searchQuery: {
        name: "",
      },
      flag: "",
      mobileError: {},

      shift: {
        name: "",
        startHour: "",
        endHour: "",
        days: [],
      },
    };
  },
  validations: {
    shift: {
      name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(255),
      },
    },
  },
  computed: {
    error() {
      return this.$store.state.shifts.error;
    },
    // getDepartments(){
    //     return this.$store.getters["shifts/getDepartments"];
    //   },
    //   departs(){
    //     // console.log(this.getDepartments.Departments)
    //     //  this.departments=departs;
    //     return this.getDepartments.Departments;
    //   },
  },
  // mounted() {
  //    this.fetchDepartments();

  //   },
  methods: {
    // setDepartments(){
    //   // this.departments=departs;
    //   console.log(this.departs)

    // },

    ///////// Create a new shift Methods ////////////////////
    // fetchDepartments() {

    //     this.$store.dispatch("shifts/fetchDepartments").then(() => {
    //       this.departments=this.departs

    //     });

    //   },
    closeNew(flag) {
      (this.selectedDays = ""),
        (this.shift = {
          name: "",
          startHour: "",
          endHour: "",
          days: "",
        });

      this.$v.shift.$reset();
      // this.$v.selectedDays.$reset();
      this.displayNewModal = false;
      this.$emit("addEmit", { status: false, flag: flag });
    },
//   convertDate(date){
//     var dateString = new Date(date).toLocaleString();
// // dateString = dateString.split(' ').slice(0, 4).join(' ');
// // console.log(dateString);
//     return dateString;
//   },
    saveNewshift() {
      console.log(this.shift)
      this.$v.shift.$touch();
      // this.$v.selectedDays.$touch();
      if (!this.$v.shift.$invalid) {
        this.$store
          .dispatch("shifts/add", this.shift)
          .then(() => {
            if (JSON.stringify(this.error) === "{}") {
              this.flag = 1;
              this.closeNew(this.flag);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
<style scoped></style>
