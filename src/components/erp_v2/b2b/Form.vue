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
     
      <div class="row">
        <div class="col-lg-4 col-sm-6">
          <Base>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.company_name_en.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.company_name_en"
                  :placeholder="$t('form.company_name_en.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.company_name_en.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.company_name_en.required && $v.form.company_name_en.$error"
                  >
                    {{ requiredError($t("form.company_name_en.label")) }}
                  </small>
                  <small
                  class="p-invalid"
                  v-if="!$v.form.company_name_en.maxLength && $v.form.company_name_en.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.company_name_en.label"),
                      $v.form.company_name_en.$params.maxLength.max
                    )
                  }}
                </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.company_name_en.notContainsHtmlTags && $v.form.company_name_en.$error
                    "
                  >
                    {{ htmlTagsError($t()) }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.company_name_ar.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.company_name_ar"
                  :placeholder="$t('form.company_name_ar.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.company_name_ar.$error,
                  }"
                />
                
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.company_name_ar.required && $v.form.company_name_ar.$error"
                  >
                    {{ requiredError($t("form.company_name_ar.label")) }}
                  </small>
                  <small
                  class="p-invalid"
                  v-if="!$v.form.company_name_ar.maxLength && $v.form.company_name_ar.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.company_name_ar.label"),
                      $v.form.company_name_ar.$params.maxLength.max
                    )
                  }}
                </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.company_name_ar.notContainsHtmlTags && $v.form.company_name_ar.$error
                    "
                  >
                    {{ htmlTagsError($t()) }}
                  </small>
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-lg-4 col-sm-6">
          <Base>
            <div class="row">
              <!-- group -->
              <div class="col-10">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.group.label")
                  }}</label>
                  <div class="autocomplete-container">
                    <AutoComplete
                      v-model="form.group"
                      :suggestions="groupParams.suggestions"
                      :forceSelection="true"
                      field="name_en"
                      complete-method="filter"
                      :placeholder="$t('form.company_type.placeholder')"
                      @complete="search($event, groupParams)"
                      :class="{ 'p-invalid': $v.form.group.$error }"
                    />
                    <i class="pi pi-search"></i>
                  </div>
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="!$v.form.group.required && $v.form.group.$error"
                    >
                      {{ requiredError($t("form.company_type.label")) }}
                    </small>
                    <small
                      class="p-invalid"
                      v-else-if="
                        !$v.form.group.invalidChoice && $v.form.group.$error
                      "
                    >
                      {{ invalidChoiceError($t()) }}
                    </small>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <AddButton @add="addGroup"></AddButton>
              </div>
              <div class="col-10">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.company_type.label")
                  }}</label>
                  <div class="autocomplete-container">
                    <AutoComplete
                      v-model="form.company_type"
                      :suggestions="companyTypeParams.suggestions"
                      :forceSelection="true"
                      field="name_en"
                      complete-method="filter"
                      :placeholder="$t('form.company_type.placeholder')"
                      @complete="searchCompanyType($event, companyTypeParams)"
                      :class="{ 'p-invalid': $v.form.company_type.$error }"
                    />
                    <i class="pi pi-search"></i>
                  </div>
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="!$v.form.company_type.required && $v.form.company_type.$error"
                    >
                      {{ requiredError($t("form.company_type.label")) }}
                    </small>
                    <small
                      class="p-invalid"
                      v-else-if="
                        !$v.form.company_type.invalidChoice && $v.form.company_type.$error
                      "
                    >
                      {{ invalidChoiceError($t()) }}
                    </small>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <AddButton @add="addCompanyType"></AddButton>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-lg-4 col-sm-6">
          <Base>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.company_code.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.code"
                  :placeholder="$t('form.company_code.placeholder')"
                  class="form-control"
                  disabled
                  
                />
              </div>
            </div>
          </Base>
        </div>
      </div>
      <Base
        :title="'Details'"
        :icon="'pi pi-check-square'"
        :showBreadCrumb="false"
        :showToggleContent="false"
        :showFullScreen="false"
      >
        <div>
          <CustomTabs
            class="text-center"
            v-model="selectedTab"
            :v="$v.form"
            :tabs="tabs"
            :serializerError="serializerError"
          >
          </CustomTabs>
          <div class="selection-content tabs-content my-2">
            <Contact
            :v="$v.form.contact ? $v.form.contact : {}"
              v-show="selectedTab == 'contact'"
              :error="error"
            />
            <Contract
            :v="$v.form.contract ? $v.form.contract : {} "
              v-show="selectedTab == 'contracts'"
              :error="error"
              
              />
              <Permissions
              :v="$v.form.permission ? $v.form.permission : {} "
              v-show="selectedTab == 'permission'"
              :error="error"
              :paymentMethodOptions="paymentMethodOptions"

            />
          </div>
        </div>
      </Base>
    </EditDialog>
    <Form
      v-model="group"
      :displayForm="displayFormGroup"
      :error="upsertError"
      :isUpdating="isUpdatingGroup"
      @close="resetForm"
      @cancel="resetForm"
      @save="create"
      :isLoading="upsertLoading"
      :header="$t('dialog.header.new')"
    >
    </Form>
    <FormCompanyType v-model="companyType" :isLoading="upsertLoading" :displayForm="displayCompanyTypeForm" :isUpdating="isUpdating"
           @close="resetForm" @cancel="resetForm" @save="createCompanyType" :error="upsertError"
          :header="isUpdating ? $t('dialog.company_type.edit') : $t('dialog.company_type.new')">
        </FormCompanyType>
  </div>
</template>
<i18n src="@/lang/erp_v2/b2b/b2b.json"></i18n>
<i18n src="@/lang/erp_v2/clients/group.json"></i18n>

<script>
const b2b_group = "erp_v2/b2b_group/"
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import form from "@/mixins/erp_v2/b2b/validation/b2bObject";
import Contact from "@/components/erp_v2/b2b/tabs/Contact.vue";
import Contract from "@/components/erp_v2/b2b/tabs/Contract.vue"
import Form from "@/components/erp_v2/clients/group/Form.vue";
import FormCompanyType from "@/components/erp_v2/b2b/companyType/Form.vue";
import Permissions from "@/components/erp_v2/b2b/tabs/Permissions.vue"
import { mapGetters, mapActions } from "vuex";
import groupSuggestions from "@/mixins/erp_v2/b2b/groupSuggestions.js";
import companyTypeSuggestions from "@/mixins/erp_v2/b2b/companyTypeSuggestions.js";
import toast from "@/mixins/global/toast";
const erp_b2b = "erp_v2/b2b/";
import {
  htmlTagsError,
  requiredError,
  inputError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
    Base,
    Contact,
    Contract,
    Permissions,
    AddButton,
    CustomTabs,
    Form,
    FormCompanyType,
  },
  mixins: [companyTypeSuggestions,groupSuggestions,form,toast],
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
    isUpdating: {
      type: Boolean,
      default() {
        return false;
      },
    },
    paymentMethodOptions: {
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
    // value() {
    //   this.form = this.value;
    // },
  },
  data() {
    return {
        displayCompanyTypeForm: false,
        companyType: {
          name_en: "",
          name_ar: "",
          serial_code: 11144,
          description: "",
        },
        companyTypeOptions: [
        { name: "Male", en: "Male", ar: "ذكر" },
        { name: "Female", en: "Female", ar: "انثي" },
      ],
      selectedTab: "contact",
      tabs: [
        { en: "Contact", ar: "اتصال", key: "contact" },
        {
          en: "Contracts",
          ar: "عقود",
          key: "contracts",
        },
        {
          en: "Permissions",
          ar: "الأذونات",
          key: "permission",
        },
      ],

      // form:this.value,
      displayFormGroup: false,
      group: {
        name_en: "",
        name_ar: "",
        serial: 12345678.333,
        parent: null,
      },
      typeAddGroup: 1,
      isUpdatingGroup: false,
    };
  },
 

  computed: {
    serializerError() {
      const serializerError = {};
      const contactKeys = ["phone_number", "other_phone_number", "industry_type","address","city","email"];
      const permissions = [
        "discount",
        "profit",
        "max_debit",
        "treat_as",
        "prevent_dealing",
        "alert_dealing",
        "prevent_give",
        "alert_give",
        "payment_method",
      ];
      if (this.error) {
        for (let item in this.error) {
          if (contactKeys.includes(item)) {
            serializerError["contact"] = this.error[item];
          } else if (permissions.includes(item)) {
            serializerError["permissions"] = this.error[item];
          } 
        }

        return serializerError;
      } else {
        return serializerError;
      }
    },
    ...mapGetters(`${erp_b2b}`, {
      getForm: "getForm",
      getReponse: "getListResponse",
      getOneEmployee : "getOneEmployee",
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
      return this.$store.getters[`${erp_b2b}getListResponse`];
    },
  
    b2bs() {
      if (this.getReponse) return this.getReponse.results;
      else return [];
    },
    ...mapGetters("erp_v2/b2b_group/", {
      getGroupListReponse: "getListResponse",
      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",
    }),
   groupListResponse:{
    get() {
        return this.getGroupListReponse;
      },
      set(value) {
        this.setGroupListResponse(value);
      },
   },
    upsertError: {
      get() {
        return this.getUpsertError;
      },
      set(value) {
        this.setGroupUpsertError(value);
      },
    },
  
  ...mapGetters("erp_v2/company_type/", {
      getCompanyTypeUpsertResponse: "getUpsertResponse",
      upsertComapnyTypeLoading: "getUpsertLoading",
      getCompanyTypeUpsertError: "getUpsertError",
    }),
    upsertComapnyTypeLoading: {
      get() {
        return this.getCompanyTypeUpsertError;
      },
      set(value) {
        this.setUpsertError(value);
      },
    },
  },

  // created() {
  // if(this.groupListResponse){
  //       this.$store.dispatch("erp_v2/b2b_group/list").then(() => {});
  //   }
  // },


  
  methods: {
    ...mapActions("erp_v2/company_type/", ["setUpsertResponse", "setUpsertError"]),
    ...mapActions("erp_v2/b2b_group/", {setGroupUpsertResponse:"setUpsertResponse",setGroupUpsertError: "setUpsertError",setGroupListResponse:"setListResponse"}),
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    inputError,
    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.user = null;
        this.$emit("save");
        this.$v.form.$reset();
      }
    },
    cancelForm() {
      this.user = null;
      this.$emit("cancel");
      this.$v.form.$reset();
    },
    removePath(index) {
      this.form.otherInfo.deleted_files.push(
        this.form.otherInfo.saved_files[index]
      );
      this.form.otherInfo.saved_files.splice(index, 1);
    },

    /////////////  GROUP  //////////////
    
    addGroup() {
      this.displayFormGroup = true;
      this.typeAddGroup = 1;
      this.isUpdatingGroup = false;
    },
    addCompanyType() {
      this.displayCompanyTypeForm = true;
      // this.displayFormGroup = true;
      // this.typeAddGroup = 2;
      // this.isUpdatingGroup = false;
    },
    closeForm() {
      this.upsertError = null;
      this.displayFormGroup = false;
      this.displayCompanyTypeForm = false;
    },

    resetForm() {
      this.closeForm();
      this.group = {
        name_en: "",
        name_ar: "",
        serial: 645645,
        parent: null,
      };
      this.companyType = {
        name_en: "",
        name_ar: "",
        serial_code: 11144,
        description: "",
      }
    },
    create() {
      this.$store
        .dispatch("erp_v2/b2b_group/create", this.group)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          console.log(err);
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
    createCompanyType() {
      this.$store
        .dispatch("erp_v2/company_type/create", this.companyType)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          console.log(err);
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
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
