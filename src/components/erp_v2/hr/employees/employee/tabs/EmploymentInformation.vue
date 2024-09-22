<template>
  <div class="form">
    <div class="row">
      <div class="col-lg-4 col-sm-6">
        <Base>
          <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.username.label")
              }}</label>
              <input
                type="text"
                v-model="form.empolymentInfo.username"
                :placeholder="$t('form.username.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid': v.username.$error,
                }"
              />
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!v.username.required && v.username.$error"
                >
                  {{ requiredError($t("form.username.label")) }}
                </small>
                <small
                  class="p-invalid"
                  v-if="!v.username.minLength && v.username.$error"
                >
                  {{
                    minLengthError(
                      $t("form.username.label"),
                      v.username.$params.minLength.min
                    )
                  }}
                </small>
                <small
                  class="p-invalid"
                  v-else-if="!v.username.maxLength && v.username.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.username.label"),
                      v.username.$params.maxLength.max
                    )
                  }}
                </small>
                <small
                  class="p-invalid"
                  v-else-if="
                    !v.username.notContainsHtmlTags && v.username.$error
                  "
                >
                  {{ htmlTagsError($t("form.username.label")) }}
                </small>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.password.label")
              }}</label>
              <input
                type="password"
                v-model="form.empolymentInfo.password"
                :placeholder="$t('form.password.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid':
                    v.password.$invalid &&
                    v.password.$anyDirty &&
                    v.password.$error,
                }"
              />
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!v.password.required && v.password.$error"
                >
                  {{ requiredError($t("form.password.label")) }}
                </small>
                <small
                  class="p-invalid"
                  v-if="!v.password.minLength && v.password.$error"
                >
                  {{
                    minLengthError(
                      $t("form.password.label"),
                      v.password.$params.minLength.min
                    )
                  }}
                </small>
                <small
                  class="p-invalid"
                  v-if="!v.password.maxLength && v.password.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.password.label"),
                      v.password.$params.maxLength.max
                    )
                  }}
                </small>
                <small
                  class="p-invalid"
                  v-else-if="
                    !v.password.notContainsHtmlTags && v.password.$error
                  "
                >
                  {{ htmlTagsError($t("form.password.label")) }}
                </small>
              </div>
            </div>
          </div>
        </Base>
      </div>
      <div class="col-lg-4 col-sm-6">
        <Base>
          <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.salary.label")
              }}</label>
              <input
                type="number"
                v-model="form.empolymentInfo.salary"
                :placeholder="$t('form.salary.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid': v.salary.$error,
                }"
              />
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!v.salary.required && v.salary.$error"
                >
                  {{ requiredError($t("form.salary.label")) }}
                </small>
                <small
                  class="p-invalid"
                  v-if="!v.salary.minLength && v.salary.$error"
                >
                  {{
                    minLengthError(
                      $t("form.salary.label"),
                      v.salary.$params.minLength.min
                    )
                  }}
                </small>
                <small
                  class="p-invalid"
                  v-else-if="!v.salary.maxLength && v.salary.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.salary.label"),
                      v.salary.$params.maxLength.max
                    )
                  }}
                </small>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.hourly_pay.label")
              }}</label>
              <input
                type="number"
                v-model="form.empolymentInfo.hourly_pay"
                :placeholder="$t('form.hourly_pay.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid': v.hourly_pay.$error,
                }"
              />
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!v.hourly_pay.maxLength && v.hourly_pay.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.hourly_pay.label"),
                      v.hourly_pay.$params.maxLength.max
                    )
                  }}
                </small>
              </div>
            </div>
          </div>
        </Base>
      </div>
      <div class="col-lg-4 col-sm-6">
        <Base>
          <!-- <div class="col-12">

          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.target.label")
            }}</label>
            <input type="number" v-model="form.empolymentInfo.target" :placeholder="$t('form.target.placeholder')"
              class="form-control" :class="{
                'is-invalid':
  
                  v.target.$error
              }" />
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!v.target.required && v.target.$error"
                >
                  {{ requiredError($t("form.target.label")) }}
                </small>
                 <small
                  class="p-invalid"
                  v-if="
                  !v.target.minLength &&
                  v.target.$error
                "
                >
                {{
                  minLengthError(
                    $t("form.target.label"),
                    v.target.$params.minLength.min
                  )
                }}
                </small>
                <small
                class="p-invalid"
                v-else-if="
                !v.target.maxLength &&
                v.target.$error
              "
              >
              {{
                maxLengthError(
                  $t("form.target.label"),
                  v.target.$params.maxLength.max
                )
              }}
              </small>
             
             
              </div>
  
          
          </div>
        </div> -->

          <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.direct_manager.label")
              }}</label>

              <div class="autocomplete-container">
                <AutoComplete
                  v-model="form.empolymentInfo.direct_manager"
                  :suggestions="employeeParams.suggestions"
                  field="name"
                  :placeholder="$t('form.direct_manager.placeholder')"
                  @complete="searchEmployee($event, employeeParams)"
                  :class="{
                    'p-invalid': v.direct_manager.$error,
                  }"
                />
                <i class="pi pi-search"></i>
              </div>
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!v.direct_manager.required && v.direct_manager.$error"
                >
                  {{ requiredError($t("form.direct_manager.label")) }}
                </small>
              </div>
            </div>
          </div>
        </Base>
      </div>
      <div class="col-lg-4 col-sm-6">
        <Base>
          <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.weekend_days.label")
              }}</label>
              <MultiSelect
                v-model="form.empolymentInfo.weekend_days"
                :options="
                  [locale] == 'ar'
                    ? weekendDaysChoices_ar
                    : weekendDaysChoices_en
                "
                optionLabel="name"
                optionValue="value"
                :placeholder="$t('form.weekend_days.placeholder')"
                :class="{
                  'p-invalid': v.weekend_days.$error,
                }"
              />
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!v.weekend_days.required && v.weekend_days.$error"
                >
                  {{ requiredError($t("form.weekend_days.label")) }}
                </small>
              </div>
            </div>
          </div>
          <!-- <div class="col-12">
  
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.hourly_pay.label")
            }}</label>
            <input type="number" v-model="form.empolymentInfo.hourly_pay" :placeholder="$t('form.hourly_pay.placeholder')"
              class="form-control" :class="{
                'is-invalid':
  
                  v.hourly_pay.$error
              }" />
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!v.hourly_pay.required && v.hourly_pay.$error"
                >
                  {{ requiredError($t("form.hourly_pay.label")) }}
                </small>
                 <small
                  class="p-invalid"
                  v-if="
                  !v.hourly_pay.minLength &&
                  v.hourly_pay.$error
                "
                >
                {{
                  minLengthError(
                    $t("form.hourly_pay.label"),
                    v.hourly_pay.$params.minLength.min
                  )
                }}
                </small>
                <small
                class="p-invalid"
                v-else-if="
                !v.hourly_pay.maxLength &&
                v.hourly_pay.$error
              "
              >
              {{
                maxLengthError(
                  $t("form.hourly_pay.label"),
                  v.hourly_pay.$params.maxLength.max
                )
              }}
              </small>
             
             
              </div>
  
          
          </div>
        </div> -->
        </Base>
      </div>
      <div class="col-lg-4 col-sm-6">
        <Base>
          <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.annual_increase.label")
              }}</label>
              <InputNumber
                v-model="form.empolymentInfo.annual_increase"
                suffix="%"
                :placeholder="$t('form.annual_increase.placeholder')"
                :class="{
                  'p-invalid': v.annual_increase.$error,
                }"
              />
              <div class="error">
                <small
                class="p-invalid"
                v-if="
                !v.annual_increase.maxLength &&
                v.annual_increase.$error
              "
              >
              {{
                maxLengthError(
                  $t("form.annual_increase.label"),
                  v.annual_increase.$params.maxLength.max
                )
              }}
              </small>
              </div>
              <!-- :locale="en-US" -->

              <!-- <input
                  type="number"
                  v-model="form.annual_increase"
                  :placeholder="$t('form.annual_increase.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.annual_increase.$error,
                  }"
                /> -->
            </div>
          </div>
        </Base>
      </div>
    </div>
    <div class="row"></div>
  </div>
</template>
<i18n src="@/lang/erp_v2/hr/employees/employee.json"></i18n>

<script>
const erp_employees = "erp_v2/hr/employees/";
import Base from "@/components/global/utilities/Base.vue";
import { mapGetters, mapActions } from "vuex";
import employeeSuggestions from "@/mixins/erp_v2/hr/employees/employeeSuggestions";
import { uniqBy } from "lodash";
import {
  requiredError,
  minLengthError,
  maxLengthError,
  numericError,
  htmlTagsError,
  timeDateError,
} from "@/validation/errors.js";
export default {
  mixins: [employeeSuggestions],
  components: {
    Base,
  },
  props: {
    v: {
      type: Object,
      default() {
        return {};
      },
    },
    // error: {
    //   type: Object,
    // },
  },
  data() {
    return {
      weekendDaysChoices_en: [
        { name: "Saturday", value: "Saturday" },
        { name: "Sunday", value: "Sunday" },
        { name: "Monday", value: "Monday" },
        { name: "Tuesday", value: "Tuesday" },
        { name: "Wednesday", value: "Wednesday" },
        { name: "Thursday", value: "Thursday" },
        { name: "Friday", value: "Friday" },
      ],
      weekendDaysChoices_ar: [
        { name: "السبت", value: "Saturday" },
        { name: "الاحد", value: "Sunday" },
        { name: "الاثتنين", value: "Monday" },
        { name: "الثلاثاء", value: "Tuesday" },
        { name: "الاربعاء", value: "Wednesday" },
        { name: "الخميس", value: "Thursday" },
        { name: "الجمعة", value: "Friday" },
      ],
      Managers: [],
      job_start_date: "",
    };
  },
  computed: {
    ///// Shifts list
    // ...mapGetters("Shifts", {
    //   getShifts: "getListResponse",
    //   listLoading: "getListLoading",
    //   getListError: "getListError"
    // }),

    // listShiftResponse() {
    //   return this.getShifts;
    // },
    // Shifts() {
    //   if (this.listShiftResponse) {
    //     return (this.listShiftResponse.results);
    //   }
    //   else return {};
    // },

    ///// Roles list
    // ...mapGetters("Role", {
    //   getListResponse: "getListResponse",
    //   listLoading: "getListLoading",
    //   getListError: "getListError"
    // }),

    // listResponse() {
    //   return this.getListResponse;
    // },
    // Roles() {
    //   if (this.listResponse) {
    //     // let rolesArr = []
    //     // // let obj ={}
    //     // this.listResponse.results.forEach(element => {
    //     //   rolesArr.push({id:element.id,name:element.name})
    //     // });
    //     // console.log(rolesArr)
    //     return this.listResponse.results;

    //   }
    //   else return {};
    // },
    ////// empolyees

    // ...mapGetters("Employees", {
    //   getEmployees: "getListResponse",
    //   listLoading: "getListLoading",
    //   getListError: "getListError"
    // }),

    // listEmployees() {
    //   return this.getEmployees;
    // },
    // employees() {
    //   if (this.listEmployees) {
    //     return (this.listEmployees.results);
    //   }
    //   else return {};
    // },
    ///// Form list
    ...mapGetters(`${erp_employees}`, {
      getForm: "getForm",
    }),
    form: {
      get() {
        return this.getForm;
      },
      set(value) {
        this.setForm(value);
      },
    },

    // customItemTemplate() {
    //   return (option) => {
    //     return `${option.name} (id: ${option.id})`;
    //   };
    // },
    // employeeOptions() {
    //   if (this.$store.getters["erp/hr/employees/getListResponse"])
    //     return (this.$store.getters["erp/hr/employees/getListResponse"].results)
    //   else {
    //     return []
    //   }
    // },
    // RoleOptions() {
    //   if (this.$store.getters["erp/hr/roles/getListResponse"])
    //     return (this.$store.getters["erp/hr/roles/getListResponse"].results)
    //   else {
    //     return []
    //   }
    // },
    // ShiftOptions() {
    //   if (this.$store.getters["erp/hr/shifts/getListResponse"])
    //     return (this.$store.getters["erp/hr/shifts/getListResponse"].results)
    //   else {
    //     return []
    //   }
    // },
  },

  created() {
    // if (!this.employeeOptions.Length > 0) {
    //   let params = { pageNumber: 1, rows: 1000000, name: "", mobile: "" };
    //   this.$store.dispatch("erp/hr/employees/list", params)
    // }
    // if (!this.RoleOptions.Length > 0) {
    //   let params = { pageNumber: 1, rows: 1000000, name: "" };
    //   this.$store.dispatch("erp/hr/roles/list", params)
    // }
    // if (!this.ShiftOptions.Length > 0) {
    //   let params = { pageNumber: 1, rows: 1000000, name: "" };
    //   this.$store.dispatch("erp/hr/shifts/list", params)
    // }
    if (this.form.id) {
      this.job_start_date = this.$moment(
        this.form.empolymentInfo.job_start_date
      ).format("YYYY-MM-DD");
    }
  },
  methods: {
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    htmlTagsError,
    timeDateError,
    ...mapActions("erp/hr/employees", ["setForm"]),
    selectDate(event) {
      this.form.empolymentInfo.job_start_date =
        this.$moment(event).format("YYYY-MM-DD");
    },
  },
};
</script>
<style lang="scss" scoped>
.autocomplete-container {
  position: relative;
}

.autocomplete-container .pi-search {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  color: #ccc;
  z-index: 1;
}
:dir(rtl) .autocomplete-container .pi-search {
  left: 15px;
  right : unset;
 
}
</style>
