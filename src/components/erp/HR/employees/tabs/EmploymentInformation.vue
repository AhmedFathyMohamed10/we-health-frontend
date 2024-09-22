<template>
  <div class="form">
    <div class="row">
      <h4 class="mt-5">{{ $t("form.employmentInfo") }}</h4>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.role.label")
            }}</label>
            <Dropdown v-model="form.empolymentInfo.role" :options="RoleOptions" optionValue="id" optionLabel="name"
              dataKey="id" :placeholder="$t('form.role.placeholder')" :class="{
                'p-invalid':
                  v.role.$error
              }" />

            <div v-if="!v.role.required && v.role.$error" class="p-error">
              {{ requiredError($t("form.role.label")) }}
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.username.label")
            }}</label>
            <input type="text" v-model="form.empolymentInfo.username" :placeholder="$t('form.username.placeholder')"
              class="form-control" :class="{
                'is-invalid':

                  v.username.$error
              }" />

            <div v-if="!v.username.required &&
              v.username.$error
              " class="invalid-feedback">
              {{ requiredError($t("form.username.label")) }}
            </div>
            <div v-else-if="!v.username.minLength &&
              v.username.$error
              " class="invalid-feedback">
              {{
                minLengthError(
                  $t("form.username.label"),
                  v.username.$params.minLength.min
                )
              }}
            </div>
            <div v-else-if="!v.username.maxLength &&
                v.username.$error
                " class="invalid-feedback">
              {{
                maxLengthError(
                  $t("form.username.label"),
                  v.username.$params.maxLength.max
                )
              }}
            </div>
            <div v-else-if="!v.username.notContainsHtmlTags && v.username.$error" class="invalid-feedback">
              {{ htmlTagsError($t('form.username.label')) }}
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.salary.label")
            }}</label>
            <input type="number" v-model="form.empolymentInfo.salary" :placeholder="$t('form.salary.placeholder')"
              class="form-control" :class="{
                'is-invalid':

                  v.salary.$error
              }" />

            <div v-if="!v.salary.required && v.salary.$error
              " class="invalid-feedback">
              {{ requiredError($t("form.salary.label")) }}
            </div>
            <div v-if="!v.salary.minLength && v.salary.$error
              " class="invalid-feedback">
              {{
                minLengthError(
                  $t("form.salary.label"),
                  v.salary.$params.minLength.min
                )
              }}
            </div>
            <div v-if="!v.salary.maxLength && v.salary.$error
                " class="invalid-feedback">
              {{
                maxLengthError(
                  $t("form.salary.label"),
                  v.salary.$params.maxLength.max
                )
              }}
            </div>
            <!-- <div v-else-if="! v.salary.notContainsHtmlTags &&  v.salary.$error" class="invalid-feedback">
                    {{htmlTagsError($t('form.salary.label'))}}
                  </div> -->
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.password.label")
            }}</label>
            <input type="password" v-model="form.empolymentInfo.password" :placeholder="$t('form.password.placeholder')"
              class="form-control" :class="{
                'is-invalid':
                  (v.password.$invalid &&
                    v.password.$anyDirty &&
                    v.password.$error)
              }" />

            <div v-if="!v.password.required &&
              v.password.$error
              " class="invalid-feedback">
              {{ requiredError($t("form.password.label")) }}
            </div>
            <div v-if="!v.password.minLength &&
              v.password.$error
              " class="invalid-feedback">
              {{
                minLengthError(
                  $t("form.password.label"),
                  v.password.$params.minLength.min
                )
              }}
            </div>
            <div v-if="!v.password.maxLength &&
                v.password.$error
                " class="invalid-feedback">
              {{
                maxLengthError(
                  $t("form.password.label"),
                  v.password.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.job_start_date.label")
            }}</label>
            <Calendar v-model="job_start_date" @input="selectDate($event)" dateFormat="yy-mm-dd"
              :placeholder="$t('form.job_start_date.placeholder')" :class="{
                'p-invalid':
                  v.job_start_date.$error

              }" />
            <div v-if="!v.job_start_date.required &&
              v.job_start_date.$error
              " class="p-error">
              {{ requiredError($t("form.job_start_date.label")) }}
            </div>
            <div class="p-error" v-else-if="v.job_start_date.$error && !v.job_start_date.validDateTime">
              {{ timeDateError($t()) }}
            </div>

          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.direct_manager.label")
            }}</label>
            <Dropdown v-model="form.empolymentInfo.direct_manager" :options="employeeOptions" optionValue="id"
              optionLabel="name" dataKey="id" :placeholder="$t('form.direct_manager.placeholder')" />

          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.shift.label")
            }}</label>
            <Dropdown v-model="form.empolymentInfo.shift" :options="ShiftOptions" optionValue="id" optionLabel="name"
              dataKey="id" :placeholder="$t('form.shift.placeholder')" :class="{
                'p-invalid':
                  v.shift.$error

              }" />
            <div v-if="!v.shift.required && v.shift.$error" class="p-error">
              {{ requiredError($t("form.shift.label")) }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<i18n src="@/lang/erp/employees/employees.json"></i18n>

<script>
import { mapGetters, mapActions } from "vuex";
import { uniqBy } from 'lodash'
import {
  requiredError,
  minLengthError,
  maxLengthError,
  numericError,
  htmlTagsError,
  timeDateError,
} from "@/validation/errors.js";
export default {
  components: {
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
      Managers: [],
      job_start_date: ""
    }
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
    ...mapGetters("erp/hr/employees", {
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

    customItemTemplate() {
      return (option) => {
        return `${option.name} (id: ${option.id})`;
      };
    },
    employeeOptions() {
      if (this.$store.getters["erp/hr/employees/getListResponse"])
        return (this.$store.getters["erp/hr/employees/getListResponse"].results)
      else {
        return []
      }
    },
    RoleOptions() {
      if (this.$store.getters["erp/hr/roles/getListResponse"])
        return (this.$store.getters["erp/hr/roles/getListResponse"].results)
      else {
        return []
      }
    },
    ShiftOptions() {
      if (this.$store.getters["erp/hr/shifts/getListResponse"])
        return (this.$store.getters["erp/hr/shifts/getListResponse"].results)
      else {
        return []
      }
    },
  },

  created() {
    if (!this.employeeOptions.Length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "", mobile: "" };
      this.$store.dispatch("erp/hr/employees/list", params)
    }
    if (!this.RoleOptions.Length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp/hr/roles/list", params)
    }
    if (!this.ShiftOptions.Length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp/hr/shifts/list", params)
    }
    if (this.form.id) {

      this.job_start_date = this.$moment(this.form.empolymentInfo.job_start_date).format('YYYY-MM-DD');
    }
  },
  methods: {
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    htmlTagsError,
    timeDateError,
    ...mapActions("erp/hr/employees",
      ["setForm"]),
    selectDate(event) {

      this.form.empolymentInfo.job_start_date = this.$moment(event).format('YYYY-MM-DD')


    }
  }
};
</script>
  