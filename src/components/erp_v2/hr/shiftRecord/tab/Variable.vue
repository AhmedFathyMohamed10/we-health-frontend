<template>
  <div class="variable">
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
      <div :class="report_type ? 'col-md-6' : 'col-12'">
        <Base v-if="!isUpdating">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{$t("form.report_type.label")}}</label>
                <div class="d-flex flex-wrap custom-radio-button justify-content-between">
                  <div
                    v-for="option of report_type_options"
                    :key="option.id"
                    class="field-radiobutton d-flex gap-1 align-items-center"
                  >
                    <RadioButton
                      :id="option.id"
                      name="option"
                      :value="option.id"
                      v-model="report_type"
                      @input="selectTypeOfShift(report_type)"
                    />
                    <label class="mt-2">{{ option[locale] }} </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Base>
      </div>
      <!-- days -->
      <div :class="!isUpdating?'col-md-6' : 'col-12'" v-if="report_type==1">
        <Base>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{$t("form.date.label")}}</label>
                  <Calendar 
                    v-model="date_of_day" 
                    @input="dateDay"
                    :showIcon="true"
                    dateFormat="yy-mm-dd"
                    :placeholder="$t('form.date.placeholder')" 
                  />
              </div>
            </div>
          </div>
        </Base>
      </div>
      <!-- weeks -->
      <div :class="!isUpdating?'col-md-6' : 'col-12'" v-if="report_type==2">
        <Base>
          <div class="row">
            <div class="col-md-5">
              <div class="form-group">
                <label for="" class="form-label">{{$t("form.validation_from.label")}}</label>
                  <Calendar 
                    v-model="rowToAdd.validation_from" 
                    :showIcon="true" dateFormat="yy-mm-dd"
                    :placeholder="$t('form.validation_from.placeholder')" 
                    @input="getWeekDayNames"
                    :disabled="disabled_week"
                    />
              </div>
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <label for="" class="form-label">{{$t("form.validation_to.label")}}</label>
                  <Calendar 
                    v-model="rowToAdd.validation_to" 
                    :showIcon="true" dateFormat="yy-mm-dd"
                    :placeholder="$t('form.validation_to.placeholder')" 
                    disabled
                    />
              </div>
            </div>
            
            <div class="col-md-2 mt-1">
              <label for="" class="invisible">reset</label>
              <ResetButton @reset="openResetConfirm"></ResetButton>
            </div>
          </div>
        </Base>
      </div>
      <!-- months -->
      <div :class="!isUpdating?'col-md-6' : 'col-12'" v-if="report_type == 3">
        <Base>
          <div class="row">
            <div class="col-md-10">
              <div class="form-group">
                <label for="" class="form-label">{{$t("form.validation_from.label")}}</label>
                  <Calendar 
                    view="year" 
                    dateFormat="yy" 
                    :yearNavigator="true"
                    v-model="validation_year" 
                    :showIcon="true"
                    :placeholder="$t('form.validation_from.placeholder')" 
                    @input="getMonthName"
                    :disabled="disabled_year"
                  />
              </div>
            </div>
            <div class="col-md-2 mt-1">
              <label for="" class="invisible">reset</label>
              <ResetButton @reset="openResetConfirm"></ResetButton>
            </div>
          </div>
        </Base>
      </div>
    </div> 
    <!-- <Button @click="confirm" icon="pi pi-check" label="Confirm"></Button> -->


   
    <!-- weeks -->
    <div  v-if="report_type == 2" >
      <div class="row">
        <div class="col-12">
          <Base v-if="rowToAdd.validation_from">
            <div class="d-flex justify-content-center gap-1" >
              <Chip
                class="btn btn-background btn-pill mt-1"
                :class="[rowToAdd.date == item.date  ?`btn-success-gradient text-white `:'btn-background']"
                v-for="item in dayNames" :key="item.date"
              >
              <div class="chip-content"  @click="selectedDayOrMonth(item.date)">
                <Badge :value="item.len" 
                :class="{ 'btn-background': rowToAdd.date === item.date, 'p-badge-success': rowToAdd.date !== item.date }"
                ></Badge>
                <span class="day-name" v-if="locale =='en'">{{ item.en }}</span>
                <span class="day-name" v-if="locale =='ar'">{{ item.ar }}</span>
                <span class="date">{{ item.date }}</span>
              </div>
              </Chip>
            </div>
          </Base>
        </div>
      </div>
    </div> 
    <!-- months  -->
    <div v-if="report_type == 3">
      <div class="row" >
        <div class="col-12">
          <Base v-if="validation_year">
            <div class="d-flex justify-content-center gap-1 flex-wrap" >
              <Chip
                class="btn btn-background btn-pill mt-1"
                :class="[rowToAdd.date == item.date  ?`btn-success-gradient text-white `:'btn-background']"
                v-for="item in monthNames" :key="item.date"
              >
              <div class="chip-content"  @click="selectedDayOrMonth(item.date)">
                <Badge :value="item.len" 
                :class="{ 'btn-background': rowToAdd.date === item.date, 'p-badge-success': rowToAdd.date !== item.date }"
                ></Badge>
                <span class="day-name" >{{ item[locale] }}</span>
                <span class="date">{{ item.date }}</span>
              </div>
              </Chip>
            </div>
          </Base>
        </div>
      </div>
    </div>

    <Base v-if="(report_type == 1 && date_of_day)||(report_type == 2 && selected_tab && rowToAdd.validation_from)||(report_type == 3 && rowToAdd.date &&validation_year)" >
      <div class="row">
        <div class="col-md-4">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{ $t("form.employee.label") }}</label>
                  <CustomAutoCompleteGroup>
                    <Dropdown 
                      v-model="rowToAdd.type_of_search" 
                      :options="search_options" 
                      :optionLabel="locale"
                      optionValue="id"
                      :placeholder="$t('form.shift.placeholder')" 
                      @input="ChooseSearch"
                      :class="{ 'p-invalid': $v.rowToAdd.type_of_search.$error }" 
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
                        :class="{ 'p-invalid': $v.rowToAdd.employee_or_department.$error }" 
                        :disabled="disabled"
                      />
                    </span> 
                  </CustomAutoCompleteGroup>
                  <div class="error">
                    <small class="p-invalid" v-if="!$v.rowToAdd.type_of_search.required && $v.rowToAdd.type_of_search.$error">
                      {{ requiredError($t("form.shift.label")) }}
                    </small>
                  </div> 
                  <div class="error">
                    <small class="p-invalid" v-if="!$v.rowToAdd.employee_or_department.required && $v.rowToAdd.employee_or_department.$error">
                      {{ requiredError($t("form.employee.label")) }}
                    </small>
                  </div> 
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-md-4">
          <Base>
            <div class="row">
              <div class="col-md-10">
                <div class="form-group">
                  <label for="" class="form-label">{{ $t("form.shift.label")}}</label>
                  <Dropdown v-model="rowToAdd.shift" :options="shiftOptions" optionLabel="name" optionValue="code"
                    :placeholder="$t('form.shift.placeholder')" 
                    :class="{ 'p-invalid': $v.rowToAdd.shift.$error }" 
                    />
                  <div class="error">
                    <small class="p-invalid" v-if="!$v.rowToAdd.shift.required && $v.rowToAdd.shift.$error">
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
        <div class="col-md-4 align-self-end">
          <ConfirmPopup ></ConfirmPopup>
          <Button class="mb-4" :label="$t('btns.add')" icon="pi pi-plus" :iconPos="locale == 'ar' ? 'right' : 'left'" @click="addRow"/>
        </div>
      </div>  
    </Base>  
 
    
    <div class="row" v-if="selectedArr.length > 0" >
      <div v-if="selectedArr.length > 0" class="table-responsive">
        <table class="table table-sm text-center">
          <thead>
            <tr>
              <th scope="col">{{ $t("form.employee.label") }}</th>
              <th scope="col">{{ $t("form.shift.label") }}</th>
              <th scope="col">{{ $t("form.date.label") }}</th>
              <th scope="col">{{ $t("table.thead.controls") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in selectedArr" :key="index">
              <td class="align-middle fw-bold">
                <span v-if="item.type_of_search==1">{{ item.employee_or_department.name }}</span>
                <span v-else>{{ item.employee_or_department.department_name }}</span>
              </td>
              <td class="align-middle fw-bold"><span>{{ findLocaleOption(shiftOptions, item.shift) }}</span></td>
              <td class="align-middle fw-bold"><span>{{ item.date }}</span></td>
              <td class="align-middle">
                <div class="d-flex justify-content-center align-items-center">
                  <DeleteButton @delete="openDeleteRow(item, index)"></DeleteButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>
    <DeleteDialog :display="displayResetConfirm" @cancel="closeResetDialog" @delete="resetSift"></DeleteDialog>
  </div>
</template>
<i18n src="@/lang/erp_v2/hr/shiftRecord.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import { mapActions } from "vuex";
import { requiredError, inputError } from "@/validation/errors.js";
import Base from "@/components/global/utilities/Base.vue";
import { required,  } from "vuelidate/lib/validators";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import employeeSuggestions from "@/mixins/erp_v2/hr/employees/employeeSuggestions.js";
import CustomAutoCompleteGroup from "@/components/global/UI/inputs/CustomAutoCompleteGroup.vue"
import departmentSuggestions from "@/mixins/erp_v2/hr/department/departmentSuggestions.js";
import Chip from 'primevue/chip';
import Shift from "@/components/erp_v2/hr/shiftRecord/formAddOptions/Shift.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
// import ConfirmDialog  from "@/components/global/utilities/ConfirmDialog .vue";
import moment from "moment";
import ConfirmPopup from 'primevue/confirmpopup';
import toast  from '@/mixins/global/toast'

export default {

  mixins:[employeeSuggestions, departmentSuggestions, toast],
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
    shiftOptions: {
      type: Array,
      required: [],
    },
    search_options: {
      type: Array,
      required: [],
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
    Chip,
    DeleteButton,
    CustomAutoCompleteGroup,
    DeleteDialog,
    Shift,
    ResetButton,
    // ConfirmDialog ,
    ConfirmPopup,
  },
  watch: {
    value() {
      this.form = this.value;
    },
    data() {
      this.rowToAdd = this.data;
    },
  },
  mounted() {
    if(this.isUpdating){
      this.report_type= this.form.x
      this.selectTypeOfShift(this.report_type)
    }
  },
  data() {
    return {
      displayResetConfirm:false,
      showPopup: false,
      report_type :null,
      field_name:"",
      disabled:true,
      form: this.value,
      rowToAdd: this.data,
      selectedArr:[],
      selected_tab:null,
      date_of_day:null,
      validation_year:null,
      dayNames:[],
      monthNames:[],
      disabled_week:false,
      disabled_year:false,
      displayDeleteDialog:false,
      deleteRecord:null,
      deleted:[],
      indexToDelete:null,
      is_exists:false,
      report_type_options: [
        { en: "Day", ar: "يوم", id: 1 },
        { en: "Week", ar: "اسبوع", id: 2 },
        { en: "Month", ar: "شهري", id: 3 },
      ],
    };
  },
  validations: {
    rowToAdd:{
      validation_to:{ },
      validation_from:{},
      employee_or_department:{
        required
      },
      type_of_search:{required,},

      shift:{
        required,
      },
    },
  },
  methods: {

    requiredError,
    inputError,
    ...mapActions("erp_v2/hr/shiftRecord", [
      "setDeletedShiftVariableShift",
    ]),
    findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value || item.code == value);
      if (item) return item["reason"];
      else return value;
    },
    //////////////////// get name of days and name of month  ///////
    getWeekDayNames() {
    
      this.rowToAdd.validation_from = this.$moment(this.rowToAdd.validation_from).format("YYYY-MM-DD");
      this.rowToAdd.validation_to = this.$moment(this.rowToAdd.validation_from).add(7, 'days').format("YYYY-MM-DD");
      const providedDate = this.$moment(this.rowToAdd.validation_from);
      this.dayNames = [];
      const arabicDayNames = {
        'Monday': 'الاثنين',
        'Tuesday': 'الثلاثاء',
        'Wednesday': 'الأربعاء',
        'Thursday': 'الخميس',
        'Friday': 'الجمعة',
        'Saturday': 'السبت',
        'Sunday': 'الأحد'
      };
      // Loop through each day of the week
      if (moment(this.rowToAdd.validation_from, "YYYY-MM-DD").isValid()){
        this.disabled_week = true;
        for (let i = 0; i < 7; i++) {
        // Add the day name to the array
        const dayName = providedDate.clone().add(i, 'days').format('dddd');
        const arabicDayName = arabicDayNames[dayName];
        const date = providedDate.clone().add(i, 'days').format('YYYY-MM-DD');
        const dayObject = {
          en: dayName,
          ar: arabicDayName,
          date: date,
          len:0,
        };
          const arr = this.form.arr.filter(item => item.date === dayObject.date);
          dayObject.len = arr.length
          this.dayNames.push(dayObject);
      }
    }
      // this.rowToAdd.validation_to = this.$moment(this.rowToAdd.validation_to).format("YYYY-MM-DD");
    },
    getMonthName(){
      this.validation_year = this.$moment(this.validation_year).format("YYYY");
      const providedDate = this.$moment(this.validation_year);
      this.monthNames = [];
      const arabicMonthNames = {
        'January':'يناير',
        'February':'فبراير',
        'March':'مارس',
        'April':'أبريل',
        'May':'مايو',
        'June':'يونيو',
        'July':'يوليو',
        'August':'أغسطس',
        'September':'سبتمبر',
        'October':'أكتوبر',
        'November':'نوفمبر',
        'December':'ديسمبر',
      };
      if (moment(this.validation_year, "YYYY").isValid()){
        this.disabled_year = true;

        for (let i = 0; i < 12; i++) {
          // Add the day name to the array
          const monthName  = providedDate.clone().add(i, 'months').format('MMMM');
          const arabicMonthName = arabicMonthNames[monthName];
          const date = providedDate.clone().add(i, 'months').format('YYYY-MM-DD');
          const dayObject = {
            en: monthName ,
            ar: arabicMonthName ,
            date: date,
            len:0,

          };
            const arr = this.form.arr.filter(item => item.date === dayObject.date);
            dayObject.len = arr.length
            this.monthNames.push(dayObject);
        }
      }

    },
    /////////////////// define type of search employee of department ///
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
    },
    ////////////////////
    resetForm(){
      this.rowToAdd= {
        employee_or_department:null,
        type_of_search:null,
        shift:null,
        date:this.rowToAdd.date,
        report_type:null,
        validation_from:this.rowToAdd.validation_from,
        validation_to:this.rowToAdd.validation_to,
      },
      this.$v.rowToAdd.$reset();
      this.disabled = true;
      this.is_exists = false;
    },
    addRow(event) {
      this.$v.rowToAdd.$touch();
      if(this.report_type==1){
          this.rowToAdd.date = this.$moment(this.date_of_day).format("YYYY-MM-DD");
      }
      this.is_exists = this.form.arr.some(obj => obj.date === this.rowToAdd.date  && obj.shift === this.rowToAdd.shift && obj.employee_or_department.code === this.rowToAdd.employee_or_department.code )
      if(this.is_exists)
      {   this.$confirm.require({
                target: event.currentTarget,
                message: 'This Shift record is already exists.',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                  this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});
                },
                reject: () => {
                  this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
      });}
      if (!this.$v.rowToAdd.$invalid && !this.is_exists) {
        this.rowToAdd.report_type = this.report_type
        this.form.arr.push(this.rowToAdd);
        if(this.report_type==1){
          this.selectTypeOfShift(this.report_type)
        }
        if(this.report_type==2 || this.report_type==3){
          this.selectedDayOrMonth(this.rowToAdd.date)
          if(this.report_type==2){
            const obj = this.dayNames.filter(item => item.date === this.rowToAdd.date);
            obj[0].len = obj[0].len + 1
          }
          if(this.report_type==3){
            const obj = this.monthNames.filter(item => item.date === this.rowToAdd.date);
            obj[0].len = obj[0].len + 1
          }
        }
        this.resetForm();
      }
    },

    selectedDayOrMonth(date){
      this.selected_tab = date;
      this.rowToAdd.date = date;
      this.selectedArr = this.form.arr.filter(item => item.date === date);
      this.resetForm()
    },
    selectTypeOfShift(){
      this.selectedArr = this.form.arr.filter(item => item.report_type === this.report_type);
      if(this.report_type == 2 || this.report_type == 3) {
        this.rowToAdd.date=null;
        if(this.selectedArr.length > 0){
          this.selectedDayOrMonth(this.selectedArr[0].date)
          if(this.report_type === 2){
            if(this.isUpdating) {
              this.rowToAdd.validation_from=this.selectedArr[0].validation_from
            }
            this.getWeekDayNames()
          }else if(this.report_type ===3){
            if(this.isUpdating){
              this.validation_year=this.$moment(this.selectedArr[0].date).format("YYYY")
            }
            this.getMonthName() 
          }
        }
        else {
          this.selectedArr = []
        }
        // this.selected_tab = null;
        // this.rowToAdd.date = null;
      }
      this.resetForm()
      this.$v.rowToAdd.$reset();
    },
  //////////////////// Delete //////////////////////
  openDeleteRow(value, index) {
      this.displayDeleteDialog = true;
      this.deleteRecord =value;
      this.indexToDelete = index
    },
    deleteRow(){
        // this.deleted = [];
        const index = this.form.arr.indexOf(this.deleteRecord);
        this.form.arr.splice(index, 1);
        this.selectedArr.splice(index, 1);
        if ("id" in this.deleteRecord) {
          this.deleted.push(this.deleteRecord);
          this.setDeletedShiftVariableShift(this.deleted);
        }
        if(this.report_type==2){
          const obj = this.dayNames.filter(item => item.date === this.rowToAdd.date);
          obj[0].len = obj[0].len - 1
        }
        if(this.report_type==3){
          const obj = this.monthNames.filter(item => item.date === this.rowToAdd.date);
          obj[0].len = obj[0].len - 1
        }
        this.closeDeleteDialog();
    },
    closeDeleteDialog() {
      this.displayDeleteDialog = false;
      this.deleteRecord =null;
      this.indexToDelete = null
    },
  /////////////////// Reset  ///////////////////
  openResetConfirm(){
  
    this.displayResetConfirm = true;

  },
  closeResetDialog() {
    this.displayResetConfirm = false;
  },
  resetSift() {
    this.displayResetConfirm = false;
    if(this.report_type ==2){
      this.rowToAdd.validation_from = null;
      this.rowToAdd.validation_to = null;
      this.disabled_week = false;
    }
    if(this.report_type == 3){
      this.validation_year = null;
      this.disabled_year = false;
    }
    this.deleteRecord = this.form.arr.filter(item => item.report_type === this.report_type)
    for (let i = 0; i < this.deleteRecord.length ; i++){
      this.form.arr.splice(this.deleteRecord[i], 1);
      this.selectedArr.splice(this.deleteRecord[1], 1);
      if ("id" in this.deleteRecord[i]) {
        this.deleted.push(this.deleteRecord[i]);
        this.setDeletedShiftVariableShift(this.deleted);
      }
    }
    this.selectedArr = [];
  },
  dateDay(){
    this.date_of_day = this.$moment(this.date_of_day).format("YYYY-MM-DD");
    // this.selectTypeOfShift()

} 
 },
};
</script>

<style lang="scss" scoped>
  // /deep/.p-autocomplete {
  //     position: initial !important;
  // }
  // /deep/.p-input-icon-right .p-autocomplete-input {
  //     padding-left: 1rem;
  // }
  .chip-content {
    padding: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>