<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :min-width="'80'"
      :max-width="'100'"
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
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ key }} : {{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <Base>
        <div class="d-flex flex-wrap justify-content-between">
          <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
        </div>
      </Base>
      <div class="row">
        <div class="col-lg-5 col-sm-6">
          <Base>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.searchUser.label")
                }}</label>
                <div class="autocomplete-container">
                  <AutoComplete
                    v-model="user"
                    :suggestions="userParams.suggestions"
                    field="fullname"
                    :placeholder="$t('form.searchUser.placeholder')"
                    @complete="searchUser($event, userParams)"
                  />
                  <i class="pi pi-search"></i>
                </div>
                <!-- <AutoComplete
                
                v-model="user"
                :suggestions="userParams.suggestions"
                field="fullname"
                :placeholder="$t('form.searchUser.placeholder')"
                @complete="searchUser($event, userParams)"
              /> -->
              </div>
            </div>
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
                  :class="{
                    'is-invalid': $v.form.name.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.name.required && $v.form.name.$error"
                  >
                    {{ requiredError($t("form.name.label")) }}
                  </small>
                  <small
                    class="p-invalid"
                    v-if="!$v.form.name.minLength && $v.form.name.$error"
                  >
                    {{
                      minLengthError(
                        $t("form.name.label"),
                        $v.form.name.$params.minLength.min
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="!$v.form.name.maxLength && $v.form.name.$error"
                  >
                    {{
                      maxLengthError(
                        $t("form.name.label"),
                        $v.form.name.$params.maxLength.max
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.name.notContainsHtmlTags && $v.form.name.$error
                    "
                  >
                    {{ htmlTagsError($t("form.name.label")) }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.phone_number.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.phone_number"
                  :placeholder="$t('form.phone_number.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.phone_number.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="
                      !$v.form.phone_number.required &&
                      $v.form.phone_number.$error
                    "
                  >
                    {{ requiredError($t("form.phone_number.label")) }}
                  </small>
                  <small
                    class="p-invalid"
                    v-if="
                      !$v.form.phone_number.numeric &&
                      $v.form.phone_number.$error
                    "
                  >
                    {{ numericError($t("form.phone_number.label")) }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.phone_number.minLength &&
                      $v.form.phone_number.$error
                    "
                  >
                    {{
                      minLengthError(
                        $t("form.phone_number.label"),
                        $v.form.phone_number.$params.minLength.min
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.phone_number.maxLength &&
                      $v.form.phone_number.$error
                    "
                  >
                    {{
                      maxLengthError(
                        $t("form.phone_number.label"),
                        $v.form.phone_number.$params.maxLength.max
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.phone_number.notContainsHtmlTags &&
                      $v.form.phone_number.$error
                    "
                  >
                    {{ htmlTagsError($t("form.phone_number.label")) }}
                  </small>
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-lg-5 col-sm-6">
          <Base>
            <div class="row">
              <!-- group -->
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.code.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.code"
                    class="form-control"
                    :placeholder="$t('form.code.placeholder')"
                    :disabled="true"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.accounting_code.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.accounting_code"
                    :placeholder="$t('form.accounting_code.placeholder')"
                    class="form-control"
                    :disabled="true"
                  />
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-lg-2 col-sm-6">
          <Base
            :title="'Name Client'"
            :showBreadCrumb="false"
            :showToggleContent="false"
            :showFullScreen="false"
          >
            <div class="d-flex justify-content-center">
              <Avatar
                :image="require('@/assets/global/logo/tempImg.jpg')"
                class=""
                size="xlarge"
                shape="circle"
              />
            </div>
          </Base>
        </div>
      </div>
      <Base
        :title="'Basic Information'"
        :icon="'pi pi-check-square'"
        :showBreadCrumb="false"
        :showToggleContent="false"
        :showFullScreen="false"
      >
        <div class="row">
          <div class="col-4">
            <Base>
              <!-- gender -->
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.gender.label")
                }}</label>
                <Dropdown
                  v-model="form.gender"
                  :options="genderOptions"
                  :optionLabel="locale"
                  optionValue="name"
                  :placeholder="$t('form.gender.placeholder')"
                  :class="{
                    'p-invalid': $v.form.gender.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.gender.required && $v.form.gender.$error"
                  >
                    {{ requiredError($t("form.gender.label")) }}
                  </small>
                </div>
              </div>
              <!-- dob -->
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.dob.label")
                }}</label>

                <Calendar
                  v-model="dob"
                  :showIcon="true"
                  dateFormat="yy-mm-dd"
                  @input="selectDate($event)"
                  :placeholder="$t('form.dob.placeholder')"
                  :class="{
                    'p-invalid': $v.form.dob.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.dob.required && $v.form.dob.$error"
                  >
                    {{ requiredError($t("form.dob.label")) }}
                  </small>
                  <small
                    class="p-invalid"
                    v-if="!$v.form.dob.validDateTime && $v.form.dob.$error"
                  >
                    {{ timeDateError($t()) }}
                  </small>
                </div>
                <!-- <div class="error">
                  <small
                    class="p-invalid"
                    v-if="$v.form.dob.error && !$v.form.dob.validDateTime"
                  >
                  {{timeDateError($t()) }}
                  </small>
                 
                </div> -->
                <!-- <small
                class="p-invalid"
                v-else-if="$v.form.dob.error && !$v.form.dob.validDateTime"
              >
              {{timeDateError($t()) }}
              </small> -->
                <!-- <div
                v-if="!$v.form.dob.required && $v.form.dob.$error"
                class="p-error"
              >
              
                {{ requiredError($t("form.dob.label")) }}
              </div> -->
                <!-- <div
              class="p-error"
              v-else-if="$v.form.dob.error && !$v.form.dob.validDateTime"
              
              >
              {{timeDateError($t()) }}
            </div> -->
                <!-- <div
                  v-if="!$v.form.dob.required && $v.form.dob.$error"
                  class="p-error"
                >
                  {{ requiredError($t("form.dob.label")) }}
                </div> -->
              </div>
              <!-- profession -->
              <!-- <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.profession.label")
                }}</label>
                <inputText
                  v-model="form.profession"
                  :placeholder="$t('form.profession.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.profession.$error
                  }"
                />
                <div class="error">
                  <small
                  class="p-invalid"
                  v-if="
                  !$v.form.profession.maxLength &&
                  $v.form.profession.$error
                "
                >
                {{
                  maxLengthError(
                    $t("form.profession.label"),
                    $v.form.profession.$params.maxLength.max
                  )
                }}
                </small>
                <small
                class="p-invalid"
                v-else-if="
                !$v.form.profession.notContainsHtmlTags &&
                $v.form.profession.$error
              "
              >
             
                {{htmlTagsError($t('form.profession.label'))}}
             
              </small>
               
                </div>
              </div> -->
              <!-- marital_status -->
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.marital_status.label")
                }}</label>
                <Dropdown
                  v-model="form.marital_status"
                  :options="maritalStatusOptions"
                  :optionLabel="locale"
                  optionValue="name"
                  :placeholder="$t('form.marital_status.placeholder')"
                  :class="{
                    'p-invalid': $v.form.marital_status.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="
                      !$v.form.marital_status.required &&
                      $v.form.marital_status.$error
                    "
                  >
                    {{ requiredError($t("form.marital_status.label")) }}
                  </small>
                </div>
                <!-- :class="{
                  'p-invalid': $v.form.marital_status.$error,
                }"
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!$v.form.marital_status.required && $v.form.marital_status.$error"
                >
                  {{ requiredError($t("form.marital_status.label")) }}
                </small>
              </div> -->
              </div>
            </Base>
          </div>
          <div class="col-4">
            <Base>
              <div class="row">
                <div class="form-group col-10">
                  <label for="" class="form-label">{{
                    $t("form.role.label")
                  }}</label>
                  <div class="autocomplete-container">
                    <AutoComplete
                      v-model="form.role"
                      :suggestions="roleParams.suggestions"
                      :forceSelection="true"
                      field="role_name"
                      complete-method="filter"
                      :placeholder="$t('form.role.placeholder')"
                      @complete="searchRole($event, roleParams)"
                      :class="{ 'p-invalid': $v.form.role.$error }"
                    />
                    <i class="pi pi-search"></i>
                  </div>
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="!$v.form.role.required && $v.form.role.$error"
                    >
                      {{ requiredError($t("form.role.label")) }}
                    </small>
                  </div>
                </div>
                <div class="col-2">
                  <AddButton @add="addRole"></AddButton>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-10">
                  <label for="" class="form-label">{{
                    $t("form.department.label")
                  }}</label>
                  <div class="autocomplete-container">
                    <AutoComplete
                      v-model="form.department"
                      :suggestions="departmentParams.suggestions"
                      :forceSelection="true"
                      field="department_name"
                      complete-method="filter"
                      :placeholder="$t('form.department.placeholder')"
                      @complete="search($event, departmentParams)"
                      :class="{ 'p-invalid': $v.form.department.$error }"
                    />
                    <i class="pi pi-search"></i>
                  </div>
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="
                        !$v.form.department.required &&
                        $v.form.department.$error
                      "
                    >
                      {{ requiredError($t("form.department.label")) }}
                    </small>
                  </div>
                </div>
                <div class="col-2">
                  <AddButton @add="addDep"></AddButton>
                </div>
              </div>
            </Base>
          </div>
          <div class="col-4">
            <Base>
              <!-- address -->
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.address.label")
                }}</label>
                <inputText
                  type="text"
                  v-model="form.address"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.address.$error,
                  }"
                  :placeholder="$t('form.address.placeholder')"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.address.maxLength && $v.form.address.$error"
                  >
                    {{
                      maxLengthError(
                        $t("form.address.label"),
                        $v.form.address.$params.maxLength.max
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.address.notContainsHtmlTags &&
                      $v.form.address.$error
                    "
                  >
                    {{ htmlTagsError($t("form.address.label")) }}
                  </small>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.email.label")
                }}</label>
                <input
                  type="email"
                  v-model="form.email"
                  :placeholder="$t('form.email.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.email.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.email.email && $v.form.email.$error"
                  >
                    {{ $t("Enter a valid email address.") }}
                  </small>
                </div>
              </div>
            </Base>
          </div>
        </div>
      </Base>
      <div class="row">
      
        <div class="col-12">
          <CustomTabs
            class="text-center"
            v-model="selectedTab"
            :tabs="tabs"
            :v="$v.form"
            :serializerError="serializerError"
          >
          </CustomTabs>
          <div class="selection-content tabs-content my-2">
            <EmploymentInformation
              v-show="selectedTab == 'empolymentInfo'"
              :v="$v.form.empolymentInfo ? $v.form.empolymentInfo : {}"
            />
            <Contract
              v-show="selectedTab == 'contract'"
              :v="$v.form.contract ? $v.form.contract : {}"
            />
            <OtherInfo
              v-show="selectedTab == 'otherInfo'"
              :v="$v.form.otherInfo ? $v.form.otherInfo : {}"
            />
          </div>
         
        </div>
  
      </div>
    </EditDialog>
    <Form
      v-model="dep"
      :isLoading="upsertLoading"
      :isUpdating="isUpdating"
      :displayForm="displayFormDep"
      :role_options="role_options"
      @close="resetForm"
      @cancel="resetForm"
      @save="create"
      :error="upsertError"
      :header="$t('dialog.header.newDep')"
    >
    </Form>
    <RoleForm
      v-model="roleForm"
      :isLoading="upsertLoading"
      :isUpdating="isUpdating"
      :displayForm="displayFormRole"
      :role_options="role_options"
      @close="resetForm"
      @cancel="resetForm"
      @save="create"
      :error="upsertError"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')"
    >
    </RoleForm>
  </div>
</template>
<i18n src="@/lang/erp_v2/hr/employees/employee.json"></i18n>
<i18n src="@/lang/erp_v2/hr/department.json"></i18n>
<i18n src="@/lang/erp_v2/hr/roles.json"></i18n>

<script>
const erp_employees = "erp_v2/hr/employees/";
const erp_employeeDepartment = "erp_v2/hr/employeeDepartment/";
const erp_employeeRole = "erp_v2/hr/employeeRole/";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";
import moment from "moment";
import {
  required,
  minLength,
  numeric,
  maxLength,
  email,
  requiredIf,
} from "vuelidate/lib/validators";
import roleSuggestions from "@/mixins/erp_v2/hr/role/roleSuggestions.js";
import departmentSuggestions from "@/mixins/erp_v2/hr/department/departmentSuggestions.js";
import Base from "@/components/global/utilities/Base.vue";
import Chip from "primevue/chip";
import Divider from "@/components/global/utilities/Divider.vue";
import InputNumber from "primevue/inputnumber";
import userSuggestions from "@/mixins/erp_v2/users/userSuggestions";
import UploadFile from "@/components/erp/HR/employees/UploadFile.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import Form from "@/components/erp_v2/hr/department/Form.vue";
import RoleForm from "@/components/erp_v2/hr/role/Form.vue";
import { urls } from "@/backend/urls";
import { mapGetters, mapActions } from "vuex";
import toast from "@/mixins/global/toast";
import Contract from "@/components/erp_v2/hr/employees/employee/tabs/Contract";
import EmploymentInformation from "@/components/erp_v2/hr/employees/employee/tabs/EmploymentInformation";
import OtherInfo from "@/components/erp_v2/hr/employees/employee/tabs/OtherInfo";
import form from "@/mixins/erp_v2/hr/employees/validation";
import {
  htmlTagsError,
  requiredError,
  inputError,
  minLengthError,
  maxLengthError,
  numericError,
  timeDateError,
  invalidChoiceError,
} from "@/validation/errors.js";
export default {
  mixins: [
    form,
    toast,
    userSuggestions,
    roleSuggestions,
    departmentSuggestions,
  ],
  components: {
    EditDialog,
    Base,
    // Chip,
    // UploadFile,
    RoleForm,
    AddButton,
    Form,
    CustomTabs,
    Contract,
    EmploymentInformation,
    OtherInfo,
  },
  // mixins: [, ],
  // mixins: [],
  props: {
    treat_as: {
      type: Number,
    },
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
    isUpdating: {
      type: Boolean,
      default() {
        return false;
      },
    },
    genderOptions: {
      type: Array,
    },
    paymentMethodOptions: {
      type: Array,
    },
    maritalStatusOptions: {
      type: Array,
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
    isUpdating(value){
      if(value){
        this.dob = this.$moment(this.form.dob).format("YYYY-MM-DD");
      }
    },
    value() {
      this.form = this.value;
      this.dob = this.$moment(this.form.dob).format("YYYY-MM-DD");
    },
    // displayForm(value){
    //   if(value === true){
    //     if (!this.employees.length > 0) {
    //    let params = { pageNumber: 1, rows: 1, name: "", Dep_id: null };
    //    this.$store.dispatch(`${erp_employees}list`, params);
    //  }
    //   }
    // },
    user(value) {
      this.form.userdata = value;
      this.form.phone_number = value.mobile;
      this.form.dob = this.$moment(value.dob).format("YYYY-MM-DD");
      this.dob = this.$moment(value.dob).format("YYYY-MM-DD");

      this.form.name = value.fullname;
      this.form.gender = value.gender;
    },
  },
  data() {
    return {
      roleForm: {
        role_name: "",
        department: null,
        serial_code: 111141,
        description: "",
      },
      role_options: [
        { en: "Management", ar: "منتجي", id: 1 },
        { en: "Supplier", ar: "خدمي", id: 2 },
        { en: "Cashier", ar: "خدمي", id: 3 },
      ],
      selectedTab: "empolymentInfo",
      tabs: [
        {
          en: "Employment Information",
          ar: "بيانات التوظيف",
          key: "empolymentInfo",
        },
        {
          en: "Contract",
          ar: "العقد",
          key: "contract",
        },

        {
          en: "Other Information",
          ar: "بيانات اخري",
          key: "otherInfo",
        },
      ],
      user: null,
      dob: "",
      mediaUrl: urls.business.mediaUrl,
      cityOptions: [
        { name: "New York", code: "NY", id: 1 },
        { name: "Rome", code: "RM", id: 2 },
        { name: "London", code: "LDN", id: 3 },
        { name: "Istanbul", code: "IST", id: 4 },
        { name: "Paris", code: "PRS", id: 5 },
      ],
      basicData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "#42A5F5",
            tension: 0.4,
          },
          {
            label: "Second Dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: "#FFA726",
            tension: 0.4,
          },
        ],
      },
      // form: this.value,
      displayFormDep: false,
      displayFormRole: false,
      breadcrumbHome: { icon: "pi pi-home", to: "/" },
      breadcrumbItems: [
        { label: "Computer" },
        { label: "Notebook" },
        { label: "Accessories" },
      ],
      dep: {
        department_name: "",
        parent: null,
        serial_code: 11144,
        role: null,
        description: "",
      },
      typeAddDep: 1,
      isUpdatingDep: false,
      isUpdatingRole: false,
    };
  },
// mounted(){
//  if (!this.employees.length > 0) {
//       let params = { pageNumber: 1, rows: 1, name: "", Dep_id: null };
//       this.$store.dispatch(`${erp_employees}list`, params);
//     }
// },
  created() {
    if (this.form.id) {
      console.log("id", this.form.id);
      console.log("dob", this.dob);
      this.dob = this.$moment(this.form.dob).format("YYYY-MM-DD");
    }

   
    if (!this.roles.length > 0) {
      let params = { pageNumber: 1, rows: 1, name: "", Dep_id: null };
      this.$store.dispatch(`${erp_employeeRole}list`, params);
    }
    if (!this.oneEmployee.length > 0) {
       let params = { pageNumber: 1, rows: 1, name: "", Dep_id: null };
       this.$store.dispatch(`${erp_employees}listOneEmployee`, params);
     }
      
  },
  computed: {
    ...mapGetters(`${erp_employees}`, {
      getForm: "getForm",
      getReponse: "getListResponse",
      getOneEmployee : "getOneEmployee"
    }),
    form: {
      get() {
        return this.getForm;
      },
      set(value) {
        this.setForm(value);
      },
    },
    getReponse() {
      return this.$store.getters[`${erp_employees}getListResponse`];
    },

    getOneEmployee(){
      return this.$store.getters[`${erp_employees}getOneEmployee`];
    },
    oneEmployee(){
      if (this.getOneEmployee) return this.getOneEmployee.results;
      else return [];
    },
    employees() {
      if (this.getReponse) return this.getReponse.results;
      else return [];
    },
    serializerError() {
      const serializerError = {};
      const contractKeys = ["job_start_date", "job_end_date", "contract_files"];
      const empolymentInfoKeys = [
        "username",
        "password",
        "salary",
        "hourly_pay",
        "direct_manager",
        "weekend_days",
        "annual_increase",
      ];
      const otherInfoKeys = [
        "profession",
        "treat_as",
        "prevent_dealing",
        "alert_dealin,",
        "prevent_give",
        "alert_give",
        "serial",
        "graduation_date",
        "files",
        "emergency_numbers",
      ];

      if (this.error) {
        for (let item in this.error) {
          if (contractKeys.includes(item)) {
            serializerError["contract"] = this.error[item];
          } else if (empolymentInfoKeys.includes(item)) {
            serializerError["empolymentInf"] = this.error[item];
          } else if (otherInfoKeys.includes(item)) {
            serializerError["otherInfo"] = this.error[item];
          }
        }

        return serializerError;
      } else {
        return serializerError;
      }
    },
    ...mapGetters(`${erp_employeeDepartment}`, {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",
      getTreeNodes: "getTreeNodes",
      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",

      getDeleteResponse: "getDeleteResponse",
      deleteLoading: "getDeleteLoading",
      getDeleteError: "getDeleteError",
    }),
    ...mapGetters(`${erp_employeeRole}`, {
      getRoleListResponse: "getListResponse",
      RolelistLoading: "getListLoading",
      getRoleListError: "getListError",
      getRoleUpsertResponse: "getUpsertResponse",
      upsertRoleLoading: "getUpsertLoading",
      getUpsertRoleError: "getUpsertError",

      getRoleDeleteResponse: "getDeleteResponse",
      roleDeleteLoading: "getDeleteLoading",
      getRoleDeleteError: "getDeleteError",
    }),
    // ...mapGetters("erp_v2/groups", {
    //   getUpsertResponse: "getUpsertResponse",
    //   upsertLoading: "getUpsertLoading",
    //   getUpsertError: "getUpsertError",
    // }),
    upsertRoleResponse: {
      get() {
        return this.getRoleUpsertResponse;
      },
      set(value) {
        this.setUpsertResponse(value);
      },
    },
    upsertRoleError: {
      get() {
        return this.getUpsertRoleError;
      },
      set(value) {
        this.setUpsertError(value);
      },
    },

    roles() {
      if (this.getRoleListResponse) return this.getRoleListResponse;
      else return [];
    },
    departments() {
      if (this.getListResponse) return this.getListResponse;
      else return [];
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
    nodes: {
      get() {
        return this.getTreeNodes;
      },
      set(value) {
        this.setTreeNodes(value);
      },
    },
  },

  methods: {
    ...mapActions(`${erp_employees}`, ["setForm"]),
    ...mapActions(`${erp_employeeRole}`, [
      "setUpsertResponse",
      "setUpsertError",
    ]),
    ...mapActions(`${erp_employeeDepartment}`, [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setTreeNodes",
    ]),
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    inputError,
    timeDateError,
    numericError,
    invalidChoiceError,
    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.user = null;
        this.dob = null;
        this.$emit("save");
        this.$v.form.$reset();
      }
    },
    cancelForm() {
      this.user = null;
      this.dob = null;
      this.$emit("cancel");
      this.$v.form.$reset();
    },
    // removePath(index) {
    //   this.form.deleted_files.push(this.form.saved_files[index]);
    //   this.form.saved_files.splice(index, 1);
    // },

    /////////////  Department  //////////////
    addDep() {
      this.displayFormDep = true;
      console.log("addDep", this.displayFormDep);
      this.isUpdatingDep = false;
    },

    addRole() {
      console.log("addRole", this.displayFormRole);
      this.displayFormRole = true;
      this.isUpdatingRole = false;
    },
    closeForm() {
      this.upsertError = null;
      this.displayFormDep = false;
      this.displayFormRole = false;
    },

    resetForm() {
      this.closeForm();
      this.dep = {
        department_name: "",
        parent: null,
        serial_code: 11144,
        role: null,
        description: "",
      };
      this.roleForm = {
        role_name: "",
        department: null,
        serial_code: 111141,
        description: "",
      };
    },
    create() {
      console.log("emit create");
      let moduleName = erp_employeeDepartment;
      let form = this.dep;
      if (this.displayFormRole) {
        moduleName = erp_employeeRole;
        form = this.roleForm;
      }
      this.$store
        .dispatch(`${moduleName}create`, form)
        .then((res) => {
          // this.nodes = this.departments
          console.log(this.departments);
          if (this.displayFormDep) {
            this.nodes = this.departments;
          }
          this.resetForm();
          const summery = res.statusText;
          // const details = res.message;
          // this.successToast(summery);
        })
        .catch((err) => {
          console.log(err);
          const summery = err.statusText;
          // const details = err.message;
          // this.errorToast(summery, details);
        });
    },

    selectDate(event) {
      this.form.dob = this.$moment(event).format("YYYY-MM-DD");
    },
    selectExpirationDate(event) {
      this.form.expiration_date = this.$moment(event).format("YYYY-MM-DD");
    },
  },
};
</script>

<!-- .search-icon {
  position: relative;
  display: inline-block;
}
.search-icon .pi-search {
  position: absolute;
  top: 50%;
  right: 10px;
  color: #ccc;
} -->
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
/deep/.p-chip {
  background: $primary;
  justify-content: center;
  height: 23px;
  .p-chip-text {
    color: white;
  }
}
.chip {
  background: $secondary-gradient;
  height: auto;
}
.current-balance {
  border: 1px solid #bec7be;
  border-radius: 17px;
}

.radio-button {
  border: 1px solid $primary;
  border-radius: 1rem;
  padding: 0.5rem;
}
:dir(rtl) .autocomplete-container .pi-search {
  left: 15px;
  right : unset;
 
}
</style>
