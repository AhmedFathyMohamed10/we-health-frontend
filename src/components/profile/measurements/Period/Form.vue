<template>
  <div class="pulse-rate-form">
      <EditDialog 
        :display="displayForm" 
        @close="cancelForm" 
        @cancel="cancelForm" 
        @save="saveForm" 
        :isLoading="isLoading"
        :header="header"
      >
        <slot></slot>
        <div v-if="error">
          <div class="errors" v-if="(typeof error ==='object')">
            <Message severity="error" v-for="(value, key) in error" :key="key" :closable="false">
              <span v-if="(typeof value ==='string')">{{ value }}</span>
              <span v-else>{{ value[0] }}</span>
            </Message>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
            <label for="" class="form-label">{{$t('form.cycleDuration.label')}}</label>
            <input 
                type="number" 
                :placeholder="$t('form.cycleDuration.placeholder')" 
                v-model="form.cycleDuration"
                class="form-control" 
                :class="{'is-invalid':$v.form.cycleDuration.$error}"
            >
            <div v-if="$v.form.cycleDuration.$error && !$v.form.cycleDuration.required " class="invalid-feedback">
              {{requiredError($t('form.cycleDuration.label'))}}
            </div>
            <div v-else-if="$v.form.cycleDuration.$error && !$v.form.cycleDuration.numeric" class="invalid-feedback">
              {{numericError($t('form.cycleDuration.label'))}}
            </div>
            <div v-else-if="$v.form.cycleDuration.$error && !$v.form.cycleDuration.maxValue" class="invalid-feedback">
              {{maxValueError($t('form.cycleDuration.label'), $v.form.cycleDuration.$params.maxValue.max)}}
            </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
            <label for="" class="form-label">{{$t('form.periodDuration.label')}}</label>
            <input 
                type="number" 
                :placeholder="$t('form.periodDuration.placeholder')" 
                v-model="form.periodDuration"
                class="form-control" 
                :class="{'is-invalid':$v.form.periodDuration.$error}"
            >
            <div v-if="$v.form.periodDuration.$error && !$v.form.periodDuration.required " class="invalid-feedback">
              {{requiredError($t('form.periodDuration.label'))}}
            </div>
            <div v-else-if="$v.form.periodDuration.$error && !$v.form.periodDuration.numeric" class="invalid-feedback">
              {{numericError($t('form.periodDuration.label'))}}
            </div>
            <div v-else-if="$v.form.periodDuration.$error && !$v.form.periodDuration.maxValue" class="invalid-feedback">
              {{maxValueError($t('form.periodDuration.label'), $v.form.periodDuration.$params.maxValue.max)}}
            </div>
            </div>
          </div>
          <div class="col-md-6">
          <div class="form-group">
            <label class="form-label">{{ $t("form.lastPeriod.label") }}</label>
            <Calendar
              v-model="form.lastPeriod"
              :placeholder="$t('form.lastPeriod.placeholder')"
              :showIcon="true"
              :class="{'p-invalid': $v.form.lastPeriod.$error}"
              dateFormat="mm-dd-yy"
              @date-select="formateDate"
            />
            <small
              class="p-invalid"
              v-if="$v.form.lastPeriod.$error && !$v.form.lastPeriod.validDate"
            >
              {{ dateError($t("form.lastPeriod.label")) }}
            </small>
          </div>
          </div>
        </div>
        <Divider></Divider>
        
        <div class=" table-responsive">
          <h5>{{ $t('form.nextPeriod.title') }}</h5>
          <table class="table table-borderless text-nowrap mb-0">
 
            <tbody>
            <tr>
                <td>{{$t('form.firstDay.label')}}</td>
                <td class="fw-bold text-success">
                  <Calendar
                  v-model="form.firstDay"
                  :placeholder="$t('form.firstDay.placeholder')"
                  :showIcon="true"
                  :class="{'p-invalid': $v.form.firstDay.$error}"
                  dateFormat="mm-dd-yy"
                  @date-select="formateDateFirstDay"
                />
                <small
                  class="p-invalid"
                  v-if="$v.form.firstDay.$error && !$v.form.firstDay.validDate"
                >
                  {{ dateError($t("form.firstDay.label")) }}
                </small></td>
            </tr>
            <tr>
                <td>{{$t('form.lastDay.label')}}</td>
                <td class="fw-bold text-success">
                  <Calendar
                    v-model="form.lastDay"
                    :placeholder="$t('form.lastDay.placeholder')"
                    :showIcon="true"
                    :class="{'p-invalid': $v.form.lastDay.$error}"
                    dateFormat="mm-dd-yy"
                    @date-select="formateDateLastDay"
                />
                <small
                  class="p-invalid"
                  v-if="$v.form.lastDay.$error && !$v.form.lastDay.validDate"
                >
                  {{ dateError($t("form.lastDay.label")) }}
                </small></td>
            </tr>
            
            </tbody>
          </table>
        </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/Period.json"></i18n>
<script>
import EditDialog from '@/components/global/utilities/EditDialog.vue';
import Divider from "@/components/global/utilities/Divider.vue";
import { convertDate } from "@/helpers/utilities";
import {requiredError,maxValueError, numericError,dateError} from "@/validation/errors";
import {numeric,required,maxValue} from "vuelidate/lib/validators";
import {validDate} from "@/validation/customValidators";
   
export default {
  name: 'Form',
  props:{
    displayForm:{
      type:Boolean,
      required:true,
      default(){
        return false;
      },
    },
    isLoading:{
      type:Boolean,
      default(){
        return false;
      },
    },
    value:{
      type:Object,
      required:true,
    },
    error:{
      type:Object,
    },
    header:{
      type:String,
    },
  },
  components:{
    EditDialog,
    Divider,
  
},
  data() {
    return {
      form:this.value,
 
    };
  },
  computed:{
    age(){
      return 217 ; // 216 month = 18 years 
    },
  },
  watch: {
    value(){
      this.form = this.value;
    },
  },
  validations: {
    form:{ 
      cycleDuration: {
        required,
        numeric,
        maxValue: maxValue(220),
      },
      periodDuration: {
        required,
        numeric,
        maxValue: maxValue(220),
      },
      lastPeriod: {
        validDate(value){
          return validDate(value);
        }
      },
      firstDay: {
        validDate(value){
          return validDate(value)
        }
      },
      lastDay: {
        validDate(value){
          return validDate(value)
        }
      },
     
    },
  },
  mounted() {
    
  },
  methods: {
    requiredError,
    maxValueError,
    numericError,
    dateError,
    ///////////////////////////////
    formateDate() {
      this.form.lastPeriod = convertDate(
        this.form.lastPeriod 
      );
    },
    formateDateFirstDay() {
      this.form.firstDay = convertDate(
        this.form.firstDay 
      );
    },
    formateDateLastDay() {
      this.form.lastDay = convertDate(
        this.form.lastDay 
      );
    },
    /////////////////////////////
    getBeatsResult(beats,age) {
      // ps : age in months //
      if(beats&&age){
        if(age>0 &&age<=5){
          if (beats < 100) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (beats >= 100 && beats <= 160) {
            return {status: 'success', message:"Normal"};
          }else if (beats > 160 && beats < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>5 &&age<=12){
          if (beats < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (beats >= 80 && beats <= 150) {
            return {status: 'success', message:"Normal"};
          }else if (beats > 150 && beats < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>12 &&age<=36){
          if (beats < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (beats >= 80 && beats <= 130) {
            return {status: 'success', message:"Normal"};
          }else if (beats > 130 && beats < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>36 &&age<=60){
          if (beats < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (beats >= 80 && beats <= 120) {
            return {status: 'success', message:"Normal"};
          }else if (beats > 120 && beats < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>60 &&age<=120){
          if (beats < 70) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (beats >= 70 && beats <= 110) {
            return {status: 'success', message:"Normal"};
          }else if (beats > 110 && beats < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>120 &&age<=216){
          if (beats < 60) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (beats >= 60 && beats <= 105) {
            return {status: 'success', message:"Normal"};
          }else if (beats > 105 && beats < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>216){
          if (beats < 60) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (beats >= 60 && beats <= 100) {
            return {status: 'success', message:"Normal"};
          }else if (beats > 100 && beats < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
      }
      else {
        return {status: '', message:""};
      }
    },
    gradientBg(status) {
      if (status === 'success') {
        return 'linear-gradient(to right, #56C596, #96c93d)';
      } else if (status === 'warning') {
        return 'linear-gradient(to right, #FEC300, #96c93d)';
      } else if (status === 'danger') {
        return 'linear-gradient(to right, #FE0000, #ff9800)';
      } else {
        return 'none';
      }
    },
    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.$emit('save');
        this.$v.form.$reset();
      }
    },
    cancelForm() {
      this.$emit('cancel');
      this.$v.form.$reset();
    },
  },
};
</script>

<style lang="scss" scoped>

</style>