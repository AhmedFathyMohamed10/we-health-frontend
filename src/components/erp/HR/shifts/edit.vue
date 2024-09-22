<template>
  <Page>
    <Dialog
      :header="$t('dialog.header.edit')"
      :visible.sync="displayEditModal"
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
              v-model="shiftToEdit.name"
              :placeholder="$t('shift.name.placeholder')"
              class="form-control"
              :class="{
                'is-invalid':
                  $v.shiftToEdit.name.$invalid &&
                  $v.shiftToEdit.name.$anyDirty &&
                  $v.shiftToEdit.name.$anyError,
              }"
            />
            <div
              v-if="!$v.shiftToEdit.name.required && $v.shiftToEdit.name.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("shift.name.label")) }}
            </div>
            <div
              v-if="
                !$v.shiftToEdit.name.minLength && $v.shiftToEdit.name.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("shift.name.label"),
                  $v.shift.shiftToEdit.$params.minLength.min
                )
              }}
            </div>
            <div
              v-if="
                !$v.shiftToEdit.name.maxLength && $v.shiftToEdit.name.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("shift.name.label"),
                  $v.shiftToEdit.name.$params.maxLength.max
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
              v-model="startDate"
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
              v-model="endDate"
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
                  class="btn btn-pill btn-danger-gradient mb-3 w-100"
                  @click.prevent="closeEdit"
                >
                  {{ $t("btns.cancel") }}
                </button>
              </div>
              <div class="col-md-6">
                <button
                  class="btn btn-pill btn-success-gradient w-100"
                  @click.prevent="saveEditedshift"
                >
                  {{ $t("btns.edite") }}
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
  //   name: "Add",
  components: {
    Page,
  },
  props: ["modelStatus", "shiftData"],
  watch: {
    modelStatus: function (newVal, oldVal) {
      // watch it
      this.displayEditModal = newVal;
    },
    shiftData: function (newVal, oldVal) {
      this.shiftToEdit = newVal;
      // this.startDate=newVal.startHour
      // this.endDate=newVal.startHour
      // endDate=this.shiftToEdit.endHour
      
      this.startDate = this.convertDate(newVal.startHour);
      this.endDate = this.convertDate(newVal.endHour);
      for (var day in this.shiftToEdit.days) {
        this.selectedDays.push({
          name: this.$t(this.shiftToEdit.days[day]),
          value: this.shiftToEdit.days[day],
        });
      }

      // console.log(this.selectedDays);
      // this.depart.name = this.shiftToEdit.department_name;
      // this.depart.id = this.shiftToEdit.department_id;
    },

    startDate: function (newVal, oldVal) {
      if (newVal == this.convertDate(this.shiftToEdit.startHour)) {
        this.shiftToEdit.startHour = this.shiftToEdit.startHour;
      } else {
        this.shiftToEdit.startHour = newVal;
      }
    },
    endDate: function (newVal, oldVal) {
      if (newVal == this.convertDate(this.shiftToEdit.endHour)) {
        this.shiftToEdit.endHour = this.shiftToEdit.endHour;
      } else {
        this.shiftToEdit.endHour = newVal;
      }
    },
    selectedDays:function(newVal,oldVal){
      this.shiftToEdit.days=[]
      // console.log(oldVal)
      for (var day in newVal) {
        this.shiftToEdit.days.push(newVal[day].value);
      }
    }
    // },
    // endDate: function (newVal, oldVal) {
    //   this.shiftToEdit.endHour=newVal;
    // },
    // departsData: function (newVal, oldVal) {
    //   this.shiftsDeparts = newVal;
    // },
  },
  data() {
    return {
      // newstartDate:
      // newEndDate
      
      startDate: "",
      endDate: "",
      value1: null,
      value: null,
      selectedDays: [],
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
        { name: "الاحد", value: "Sunday" },
        { name: "الاثنين", value: "Monday" },
        { name: "الثلاثاء", value: "Tuesday" },
        { name: "الاربعاء", value: "Wednesday" },
        { name: "الخميس", value: "Thursday" },
        { name: "الجمعة", value: "Friday" },
      ],
      requiredError,
      minLengthError,
      maxLengthError,
      numericError,
      flag: "",
      depart: { name: "", id: "" },
      shiftsDeparts: [],
      displayEditModal: false,
      selectedGroup: null,
      shiftDetail: {},
      shiftToEdit: {},
    };
  },
  validations: {
    // depart: {
    //   required,
    // },
    shiftToEdit: {
      name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(255),
      },
      // department_id: {
      //   required,
      // },
      // description: {
      //   maxLength: maxLength(600),
      // },
    },
  },
  computed: {
    error() {
      // this.mobileError=this.$store.state.error;
      return this.$store.state.shifts.error;
    },
  },
  methods: {
    ///////// Edit a shift Methods ////////////////////
    convertDate(date) {
      // console.log(date)
      if (date) {
        var d = new Date(date);
        var hours =
          d.getHours().toString().length == 2
            ? d.getHours().toString()
            : "0" + d.getHours().toString();
        var minutes =
          (parseInt(d.getMinutes() / 5) * 5).toString().length == 2
            ? (parseInt(d.getMinutes() / 5) * 5).toString()
            : "0";
        var sec = (parseInt(d.getMinutes() / 5) * 5).toString();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + " " + this.$t(ampm);
        return strTime;
      } else {
        return null;
      }
      // var hour = d.toLocaleString("default", { hour: "2-digit" });
      //   var min = d.toLocaleString("default", { min: "2-digit" });
      //   var sec = d.toLocaleString("default", { sec: "2-digit" });
      // var time = hour + ":" + min + ":" + sec;
      // return time
    },
    closeEdit(flag) {
      // this.depart="",
      (this.startDate = ""), (this.endDate = ""), (this.selectedDays = []);
      this.shiftToEdit = {
        name: "",
        days: [],
        startHour: "",
        endHour: "",
      };
      this.$v.shiftToEdit.$reset();
      // this.$v.depart.$reset();
      // this.$v.shiftMobile.$reset();
      this.$emit("status", { status: false, flag: flag });
    },

    saveEditedshift() {
      console.log(this.shiftToEdit);
      this.$v.shiftToEdit.$touch();
      // this.$v.depart.$touch();
      if (!this.$v.shiftToEdit.$invalid) {
        this.$store.dispatch("shifts/update", this.shiftToEdit).then(() => {
          if (JSON.stringify(this.error) === "{}") {
            this.flag = 1;
            this.closeEdit(this.flag);
            this.shiftToEdit = {};
          }
          // this.closeEdit();
        });
      }
    },
  },
};
</script>
<style scoped></style>
