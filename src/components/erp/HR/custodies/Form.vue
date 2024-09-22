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
              $t("form.title.label")
            }}</label>
            <input
              type="text"
              class="form-control"
              rows="5"
              cols="30"
              v-model="form.title"
              :placeholder="$t('form.title.placeholder')"
              :class="{
                'is-invalid': $v.form.title.$error,
              }"
            />

            <div
              v-if="!$v.form.title.required && $v.form.title.$error"
              class="error"
            >
              <small class="d-block text-danger">
                {{ requiredError($t("form.title.label")) }}
              </small>
            </div>
            <div
              v-else-if="!$v.form.title.maxLength && $v.form.title.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.title.label"),
                  $v.form.title.$params.maxLength.max
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.form.title.notContainsHtmlTags && $v.form.title.$error
              "
              class="invalid-feedback"
            >
              {{ notContainsHtmlTags($t("form.title.label")) }}
            </div>
          </div>
        </div>
        <div class="col-md-6">
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
              $t("form.type.label")
            }}</label>
            <Dropdown
              v-model="type"
              :options="typeOptions"
              optionValue="option_id"
              optionLabel="name"
              dataKey="option_id"
              :placeholder="$t('form.type.placeholder')"
              :class="{
                'p-invalid': $v.type.$error,
              }" 
              />
             
             <div class="error">
              <small
                class="d-block text-danger"
                v-if="!$v.type.required && $v.type.$error"
              >
                {{ requiredError($t("form.type.label")) }}
              </small>
            </div> 
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t(`form.${selectType}.label`)
            }}</label>
            
              <MultiSelect
                v-model="form.type[selectType]"
                :options="options[selectType]"
                :optionLabel="optionLabel "
                :optionValue="type == 2 ? 'invoice_data.code' : 'code' "
                :dataKey="type == 2 ? 'invoice_data.id' : 'id' "
                :class="{
                  'p-invalid': $v.form.type[selectType].$error,
                }" 
              ></MultiSelect>
           
             
             <div class="error">
              <small
                class="d-block text-danger"
                v-if="!$v.form.type[selectType].required && $v.form.type[selectType].$error"
              >
                {{ requiredError($t(`form.${selectType}.label`)) }}
              </small>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.receipt_date.label")
            }}</label>
            <Calendar
              v-model="receipt_date"
              dateFormat="yy-mm-dd"
              @input="selectReceiptDate($event)"
              :placeholder="$t('form.receipt_date.placeholder')"
              :class="{
                'p-invalid': $v.form.receipt_date.$error,
              }"
            />
            <div
              v-if="!$v.form.receipt_date.required && $v.form.receipt_date.$error"
              class="p-error"
            >
              {{ requiredError($t("form.receipt_date.label")) }}
            </div>
            <div
              class="p-error"
              v-else-if="
                $v.form.receipt_date.$error && !$v.form.receipt_date.validDateTime
              "
            >
              {{ DateError($t()) }}
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.delivery_date.label")
            }}</label>
            <Calendar
              v-model="delivery_date"
              dateFormat="yy-mm-dd"
              @input="selectDeliveryDate($event)"
              :placeholder="$t('form.delivery_date.placeholder')"
              :class="{
                'p-invalid': $v.form.delivery_date.$error,
              }"
            />
           
            <div
              class="p-error"
              v-if="
                $v.form.delivery_date.$error && !$v.form.delivery_date.validDateTime
              "
            >
              {{ DateError($t()) }}
            </div>
          </div>
        </div>
      </div>
      
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/hr/custodies/custodies.json"></i18n>
<!-- <i18n src="@/lang/erp/courses/Course.json"></i18n> -->
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import {
  required,
  minLength,
  numeric,
  maxLength,
  requiredIf 
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import { mapGetters, mapActions } from "vuex";
import employeesOptions from "@/mixins/erp/employees/employeeOptions"
import EmployeeSuggestions from "@/mixins/erp/employees/EmployeeSuggestions"
import moment from "moment";
import {
  requiredError,
  minLengthError,
  maxLengthError,
  htmlTagsError,
  DateError,
  numericError,
} from "@/validation/errors.js";
export default {
  mixins:[employeesOptions,EmployeeSuggestions],
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
      // console.log(this.form)
      if (this.value.id) {
        this.receipt_date = this.$moment(this.value.receipt_date).format("YYYY-MM-DD");
        this.delivery_date = this.$moment(this.value.delivery_date).format("YYYY-MM-DD");
        if(this.value.type.assets){
          this.type = 1
          // this.form.type[selectType] 
        }
        else if(this.value.type.invoice){
          this.type = 2
          // console.log( this.value.type[this.selectType][0].id)
          // this.form.type[this.selectType] = [this.value.type[this.selectType][0].id]
        }
        else if(this.value.type.bonds){
          this.type = 3
        }
      }
    },
    displayForm(value){
        if(!value){
          this.receipt_date = ""
          this.delivery_date = ""
          
    
        }
      }
  },
  data() {
    return {
      form: this.value,
      receipt_date: "",
      delivery_date :"",
      displayFormCategory: false,
      isUpdating: false,
      selectedOption :null,
     
      type : 1,
     
    };
  },
  computed: {
    // employeesOptions() {
    //   if (this.$store.getters["erp/hr/employees/getListResponse"])
    //     return this.$store.getters["erp/hr/employees/getListResponse"].results;
    //   else {
    //     return [];
    //   }
    // },
    optionLabel(){
      let optionLabel = ''
      if(this.type == 1){
        optionLabel = 'name'
      }else if (this.type == 2){
        optionLabel = 'invoice_data.number'
      }else{
        optionLabel = 'number'
      }
      return optionLabel
    },
    typeOptions() {
      if (this.$store.getters["erp/hr/custodies/getTypeOptions"])
        return this.$store.getters["erp/hr/custodies/getTypeOptions"];
      else {
        return [];
      }
      
    },
    assetsOptions(){
      if (this.$store.getters["erp/Assets/FixedAssets/getListResponse"])
        return this.$store.getters["erp/Assets/FixedAssets/getListResponse"].results;
      else {
        return [];
      }
    },
    invoicesOptions(){
      if (this.$store.getters["erp/accounting/invoices/invoice/getListResponse"])
        return this.$store.getters["erp/accounting/invoices/invoice/getListResponse"].results;
      else {
        return [];
      }
    },
    bondsOptions(){
      if (this.$store.getters["erp/Restrictions/Bond/getListResponse"])
        return this.$store.getters["erp/Restrictions/Bond/getListResponse"].results;
      else {
        return [];
      }
    },
    options(){
      return {'assets':this.assetsOptions,'invoice':this.invoicesOptions,'bonds':this.bondsOptions}
    },
    selectType(){
      let type = "assets";
      if (this.type == 1){
        
        type = 'assets'
        // return type
      }else if (this.type == 2){
        type = 'invoice'
        // return type
      }else if (this.type == 3){
        type = 'bonds'
        // return type
      }
      return type
    }
   
  },
  created() {
   
    if (!this.employeesOptions.Length > 0) {
      this.$store.dispatch("erp/hr/employees/getOptions");
    }
    if (!this.typeOptions.Length > 0) {
      this.$store.dispatch("erp/hr/custodies/getTypeOptions");
    };
    if (!this.assetsOptions.Length > 0) {
      
      let params = { pageNumber: 1, rows: 1000000, name: ""};
      this.$store.dispatch("erp/Assets/FixedAssets/list", params);
    };
    if (!this.invoicesOptions.Length > 0) {
      let params = { pageNumber: 1, rows: 1000000, invoice_type: ""};
      this.$store.dispatch("erp/accounting/invoices/invoice/list", params);
    };
    if (!this.bondsOptions.Length > 0) {
      
      let params = { pageNumber: 1, rows: 1000000, number: ""};
      this.$store.dispatch("erp/Restrictions/Bond/list", params);
    }

  },
  validations: {
    type :{
      required,
    },
    form: {
      title: {
        required,
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
      employee: {
        required,
      },
      type :{
        // validateType :(value)=>{
        //   if (value == 1){

        //   }
        // }
        // required:requiredIf(function () {
        //     if(!this.form.type) {
        //       return false
        //     }else{
        //       return true
        //     }
        //   }),
        assets :{
        
          required:requiredIf (function () {
            return (!this.form.type.invoice && !this.form.type.bonds );
          
          }),
        },
        invoice :{
          required:requiredIf (function () {
            return (!this.form.type.assets && !this.form.type.bonds  );
          }),
        },
        bonds :{
          required:requiredIf (function () {
            return (!this.form.type.invoice && !this.form.type.assets );
          }),
        }
      },
      receipt_date: {
        required,
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      delivery_date: {
       
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
    DateError,
    numericError,

    saveForm() {
      this.$v.form.$touch();
      this.$v.type.$touch();
      if (!this.$v.form.$invalid) {
        this.form.employee =  this.form.employee.id
        this.$emit("save");
        this.$v.form.$reset();
        this.$v.type.$reset();
        // this.receipt_date = "";
        // this.delivery_date = "";
        this.type = 1;
        this.form.type[this.selectType] = ""
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
      this.$v.type.$reset();
      // this.receipt_date = "";
      // this.delivery_date = "";
      this.type = 1;
      this.form.type[this.selectType] = ""
    },

    selectDeliveryDate(event) {
      this.form.delivery_date = this.$moment(event).format("YYYY-MM-DD");
      if(event == 'Invalid date'){
        event = ""
      }
     
    },
    selectReceiptDate(event) {
      this.form.receipt_date = this.$moment(event).format("YYYY-MM-DD");
      if(event == 'Invalid date'){
        event = ""
      }
    },

   
  },
};
</script>
