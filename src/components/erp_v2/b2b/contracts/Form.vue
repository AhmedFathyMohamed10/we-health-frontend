<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      @deleteRecord="deleteRecord"
      :isLoading="isLoading"
      :header="header"
      :icon="'pi pi-sitemap'"
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
      <div class="row">
            <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.number.label")
                }}</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="form.number"
                  :placeholder="$t('form.number.placeholder')"
                  :class="{
                    'is-invalid': $v.form.number.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.number.required && $v.form.number.$error"
                  >
                    {{ requiredError($t("form.number.label")) }}
                  </small>
                  <small
                  class="p-invalid"
                  v-if="!$v.form.number.maxLength && $v.form.number.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.number.label"),
                      $v.form.number.$params.maxLength.max
                    )
                  }}
                </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.number.notContainsHtmlTags && $v.form.number.$error
                    "
                  >
                    {{ htmlTagsError($t()) }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.total_cost.label")
                }}</label>
              
                <InputNumber
                v-model="form.total_cost"
                mode="currency"
                currency="EGP"
                :placeholder="$t('form.total_cost.placeholder')"
                :class="{
                  'is-invalid': $v.form.total_cost.$error,
                }"
              />
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!$v.form.total_cost.required && $v.form.total_cost.$error"
                >
                  {{ requiredError($t("form.total_cost.label")) }}
                </small>
              </div>
              </div>
            </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.start_date.label")
                  }}</label>
                  <Calendar
                    v-model="start_date"
                    @input="selectStartDate($event)"
                    :showIcon="true"
                    dateFormat="yy-mm-dd"
                    :placeholder="$t('form.start_date.placeholder')"
                    :class="{
                      'p-invalid': $v.form.start_date.$error,
                    }"
                  />
                  <div class="error">
                    <small
                    class="p-invalid"
                    v-if="!$v.form.start_date.required && $v.form.start_date.$error"
                  >
                    {{ requiredError($t("form.start_date.label")) }}
                  </small>
                    <small
                      class="p-invalid"
                      v-if="
                        !$v.form.start_date.validDateTime && $v.form.start_date.$error
                      "
                    >
                      {{ timeDateError($t()) }}
                    </small>
                  </div>
                </div>

              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.end_date.label")
                  }}</label>
                  <Calendar
                    v-model="end_date"
                    @input="selectEndDate($event)"
                    :showIcon="true"
                    dateFormat="yy-mm-dd"
                    :placeholder="$t('form.end_date.placeholder')"
                    :class="{
                      'p-invalid': $v.form.end_date.$error,
                    }"
                  />
                  <div class="error">
                    <small
                    class="p-invalid"
                    v-if="!$v.form.end_date.required && $v.form.end_date.$error"
                  >
                    {{ requiredError($t("form.end_date.label")) }}
                  </small>
                    <small
                      class="p-invalid"
                      v-if="
                        !$v.form.end_date.validDateTime && $v.form.end_date.$error
                      "
                    >
                      {{ timeDateError($t()) }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6 d-flex justify-content-between">
            <div class="col-10">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.type.label")
                }}</label>
                <Dropdown
                  v-model="form.type"
                  :options="contractTypeOptions"
                  :optionLabel="getOptionLabel "
                  dataKey="id"
                  optionValue="id"
                  :placeholder="$t('form.type.placeholder')"
                  :class="{
                    'p-invalid': $v.form.type.$error,
                  }"
                />
                
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.type.required && $v.form.type.$error"
                  >
                    {{ requiredError($t("form.type.label")) }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-2">
              <AddButton @add="addContractType"></AddButton>
            </div>
          </div>
            <div class="col-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.reason.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.reason"
                  :placeholder="$t('form.reason.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.reason.$error,
                  }"
                />
                <div class="error">
                    
                  <small
                  class="p-invalid"
                  v-if="!$v.form.reason.maxLength && $v.form.reason.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.reason.label"),
                      $v.form.reason.$params.maxLength.max
                    )
                  }}
                </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.reason.notContainsHtmlTags && $v.form.reason.$error
                    "
                  >
                    {{ htmlTagsError($t()) }}
                  </small>
                </div>
              </div>
            </div>
          </div>
           
            <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="" class="form-label">{{
                      $t("form.accurals.label")
                    }}</label>
                    <div
                      class="d-flex flex-wrap radio-button justify-content-between"
                    >
                      <div
                        v-for="option of accrualsOptions"
                        :key="option.id"
                        class="field-radiobutton d-flex gap-1 align-items-center"
                      >
                        <label class="mt-2">{{ option.name }} </label>
                        <RadioButton
                          :id="option.name"
                          name="option"
                          :value="option.id"
                          v-model="accruals"
                          @change="selectOption()"
                        />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            <div class="row" v-if="accruals == 2">
              <div class="col-6">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.accrual_amount.label")
                  }}</label>
                
                  <InputNumber
                  v-model="form.accrual_amount"
                  mode="currency"
                  currency="EGP"
                  :placeholder="$t('form.accrual_amount.placeholder')"
                 
                />
                </div>
              </div>
              <div class="col-6">

                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.every.label")
                  }}</label>
                  <Dropdown
                    v-model="form.every"
                    :options="everyOptions"
                    :optionLabel="locale"
                    optionValue="key"
                    :placeholder="$t('form.every.placeholder')"
                  />
                </div>
              </div>
             
            </div>
      </div>
    </Base>
    <FormContractType v-model="contractType" :isLoading="upsertLoading" :displayForm="displayContractTypeForm" :isUpdating="isUpdating"
    @close="resetForm" @cancel="resetForm" @save="createContractType" :error="upsertError"
   :header="isUpdating ? $t('dialog.header.Contract_type') : $t('dialog.header.Contract_type')">
 </FormContractType>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/b2b/contracts.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import { mapGetters, mapActions } from "vuex";
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import FormContractType from "@/components/erp_v2/b2b/companyType/Form.vue";
import departmentSuggestions from "@/mixins/erp_v2/hr/department/departmentSuggestions.js";
import moment from "moment";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
import toast from "@/mixins/global/toast";

export default {
  mixins: [toast, departmentSuggestions],
  components: {
    EditDialog,
    Base,
    AddButton,
    FormContractType
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
    isUpdating(value) {
      if(value){
        if(this.form.accrual_amount){
          this.accruals = 2
        }
        this.start_date = this.$moment(
        this.form.start_date
      ).format("YYYY-MM-DD");
      this.end_date = this.$moment(
        this.form.end_date
      ).format("YYYY-MM-DD");
      }
      
    },
  },
  data() {
    return {
      accruals: null,

      accrualsOptions: [
        { id:1,name: "Random", en: "Random", ar: "عشوائي",value:true},
        { id:2,name: "Accural Amount", en: "Accural Amount", ar: "القيمة المستحقة",value:true},
      ],
      contractType: {
          name_en: "",
          name_ar: "",
          serial_code: 11144,
          description: "",
        },
      displayContractTypeForm:false,
      // accrualsOptions:[
      //   {id: 1,en:"Accural Amount", ar:"قيمة الاستحقاق", key:"Accural_Amount"},
      //   {id:2, en:"Randomly", ar:"عشوائي", key:"Randomly"}
      // ],
      everyOptions: [
        {id: 1,en:"Day", ar:"يوم", key:"Day"},
        {id:2, en:"Week", ar:"اسبوع", key:"Week"},
        {id: 3,en:"Month", ar:"شهر", key:"Month"},
        {id:4, en:"Year", ar:"سنة", key:"Year"}
      ],
      typeOptions: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
      displayDeleteDialog: false,
      form: this.value,
      start_date:"",
      end_date : "",
    };
  },
  validations: {
    form: {
      number: { required,
        maxLength: maxLength(255),
          notContainsHtmlTags: (value) => {
            return notContainsHtmlTags(value);
          }, },
      type: {required},
      reason: {
        
          maxLength: maxLength(255),
          notContainsHtmlTags: (value) => {
            return notContainsHtmlTags(value);
          },
      },
      total_cost: {required},
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
 
computed:{

  getOptionLabel() {
    return this.locale === 'ar' ? 'name_ar' : 'name_en';
  },
  contractTypeOptions() {
      if (this.$store.getters["erp_v2/contract_type/getListResponse"])
        return this.$store.getters["erp_v2/contract_type/getListResponse"].results;
      else {
        return [];
      }
    },
    ...mapGetters("erp_v2/contract_type/", {
      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",
    }),
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
    
    if (!this.contractTypeOptions.Length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name_en: "" };
      this.$store.dispatch("erp_v2/contract_type/list", params);
    }
   
  },
  methods: {
    selectOption(){
      if(this.accurals == 1){
        this.form.randomly = true
      }
    },
    ...mapActions("erp_v2/contract_type/", ["setUpsertResponse", "setUpsertError"]),
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    selectEndDate(event) {
      this.form.end_date =
        this.$moment(event).format("YYYY-MM-DD");
    },
    selectStartDate(event) {
      this.form.start_date =
        this.$moment(event).format("YYYY-MM-DD");
    },
   
    addContractType() {
      this.displayContractTypeForm = true;
    
    },
    closeForm() {
      this.displayContractTypeForm = false;
    },
    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.$emit("save");
        this.$v.form.$reset();
      }
    },
    resetForm() {
      this.closeForm();
      
      this.contractType = {
        name_en: "",
        name_ar: "",
        serial_code: 11144,
        description: "",
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
    },
    /////////////////////////////
    openDeleteDialog() {
      this.displayDeleteDialog = true;
    },

    deleteRecord() {
      this.displayDeleteDialog = false;
      this.$emit("deleteGroup", this.form);
    },

    closeDeleteDialog() {
      this.displayDeleteDialog = false;
    },
    createContractType() {
      this.$store
        .dispatch("erp_v2/contract_type/create", this.contractType)
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
/deep/ .p-autocomplete {
    position: initial !important;
}
/deep/.p-input-icon-right .p-autocomplete-input {
    padding-left: 1rem;
}
/deep/.p-inputnumber{
  width: 100%;
}
</style>