<template>
  <div class="contact">
    <div class="row" v-if="error">
      <div class="col-12">
        <div class="errors" v-if="typeof error === 'object'">
          <Message severity="error" v-for="(value, key) in error.Contact" :key="key" :closable="false">
            <span v-if="typeof value === 'string'">{{ value }}</span>
            <span v-else>{{ value[0] }}</span>
          </Message>
        </div>
      </div>
    </div>
    <div class="row"> 
      <div class="col-md-6">
        <Base>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.shift.label")
                }}</label>
              <CustomAutoCompleteGroup>
                <Dropdown 
                  v-model="rowToAdd.type_of_search" 
                  :options="search_options" 
                  :optionLabel="locale"
                  optionValue="id"
                  :placeholder="$t('form.shift.placeholder')" 
                  @input="ChooseSearch"
                  :class="{ 'p-invalid': v.type_of_search.$error }" 
                  />
            
                <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                  <i class="pi" :class="[typeof rowToAdd.employee_or_department === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                  <AutoComplete
                  v-model="rowToAdd.employee_or_department" 
                  :suggestions="rowToAdd.type_of_search === 1 ? employeeParams.suggestions : departmentParams.suggestions"
                  :field="field_name"
                  :placeholder="$t('form.employee.placeholder')"
                  @complete="executeSearch($event, rowToAdd.type_of_search)"
                  :forceSelection="true" 
                  :class="{ 'p-invalid': v.employee_or_department.$error }" 
                  :disabled="disabled"
                  />
                </span> 
              </CustomAutoCompleteGroup>
              <div class="error">
                  <small class="p-invalid" v-if="!v.type_of_search.required && v.type_of_search.$error">
                    {{ requiredError($t("form.shift.label")) }}
                  </small>
              </div>
              <div class="error">
                <small class="p-invalid" v-if="!v.employee_or_department.required && v.employee_or_department.$error">
                  {{ requiredError($t("form.employee.label")) }}
                </small>
              </div>
                
              </div>
            </div>
          </div>
        </Base>
      </div>  
      <div class="col-md-6">
        <Base>
          <div class="row">
            <div class="col-10">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.shift.label")
                }}</label>
                <Dropdown v-model="rowToAdd.shift" :options="shiftOptions" optionLabel="name" optionValue="code"
                  :placeholder="$t('form.shift.placeholder')" 
                  :class="{ 'p-invalid': v.shift.$error }" 
                  />
                <div class="error">
                  <small class="p-invalid" v-if="!v.shift.required && v.shift.$error">
                    {{ requiredError($t("form.shift.label")) }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <Shift></Shift>
            </div>
          </div>
        </Base>
      </div>  
    </div>
   
  </div>
</template>
<i18n src="@/lang/erp_v2/hr/shiftRecord.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import {  mapActions } from "vuex";
import { requiredError } from "@/validation/errors.js";
import Base from "@/components/global/utilities/Base.vue";
import employeeSuggestions from "@/mixins/erp_v2/hr/employees/employeeSuggestions.js";
import departmentSuggestions from "@/mixins/erp_v2/hr/department/departmentSuggestions.js";
import CustomAutoCompleteGroup from "@/components/global/UI/inputs/CustomAutoCompleteGroup.vue";
import Shift from "@/components/erp_v2/hr/shiftRecord/formAddOptions/Shift.vue";

export default {
  mixins:[employeeSuggestions, departmentSuggestions],
  props: {
    error: {
      type: Object,
    },
    value: {
      type: Object,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    search_options: {
      type: Array,
      required: [],
    },
    shiftOptions: {
      type: Array,
      required: [],
    },
    v: {
      type: Object,
      required: true,
    },
    isUpdating: {
      type: Boolean,
      default() {
        return false;
      },
    },
  
  },
  components: {
    Base,
    CustomAutoCompleteGroup,
    Shift,
  },
  watch: {
    value() {
      this.form = this.value;
    },
    data(value) {
      this.rowToAdd = value;
    },
  },
  data() {
    return {
      field_name:"",
      form: this.value,
      rowToAdd: this.data,
      disabled:true,
    };
  },
  created() {
    if (this.isUpdating) {
      if (this.type_of_search !== null){
        this.disabled = false;
      }
      if (this.rowToAdd.type_of_search == 1){
        this.field_name = "name";
      }
      else{
        this.field_name = "department_name";
      }
    }
  },
  methods: {
    requiredError,
    ...mapActions("erp_v2/hr/shiftRecord", [
      "setEmployeeOfChoose",
    ]),
  executeSearch(event, key) {
    switch (key) {
      case 1:
        this.field_name = "name";
        this.searchEmployee(event, this.employeeParams);
        break;
      case 2:
        this.search(event, this.departmentParams);
        this.field_name = "department_name";
        break;
      default:
        console.error('Invalid key:', key);
    }
    },
    ChooseSearch(){
      this.disabled=false;
      this.rowToAdd.employee_or_department = null;
    }
  },
};
</script>
<!-- <style lang="scss" scoped>
/deep/ .p-autocomplete {
    position: initial !important;
}
/deep/.p-input-icon-right .p-autocomplete-input {
    padding-left: 1rem;
}
</style> -->