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
        <div class="col-md-12">
          <div class="form-group">
          <label for="" class="form-label">{{$t('form.systolic.label')}}</label>
          <input 
              type="number" 
              :placeholder="$t('form.systolic.placeholder')" 
              v-model="form.systolic"
              class="form-control" 
              :class="{'is-invalid':$v.form.systolic.$error}"
          >
          <div v-if="$v.form.systolic.$error && !$v.form.systolic.required " class="invalid-feedback">
            {{requiredError($t('form.systolic.label'))}}
          </div>
          <div v-else-if="$v.form.systolic.$error && !$v.form.systolic.numeric" class="invalid-feedback">
            {{numericError($t('form.systolic.label'))}}
          </div>
          <div v-else-if="$v.form.systolic.$error && !$v.form.systolic.maxValue" class="invalid-feedback">
            {{maxValueError($t('form.systolic.label'), $v.form.systolic.$params.maxValue.max)}}
          </div>
        </div>
        </div>
       <div class="col-md-12">
        <div class="form-group">
          <label for="" class="form-label">{{$t('form.diastolic.label')}}</label>
          <input 
              type="number" 
              :placeholder="$t('form.diastolic.placeholder')" 
              v-model="form.diastolic"
              class="form-control" 
              :class="{'is-invalid':$v.form.diastolic.$error}"
          >
          <div v-if="$v.form.diastolic.$error && !$v.form.diastolic.notContainsHtmlTags" class="invalid-feedback">
            {{htmlTagsError($t('form.diastolic.label'))}}
          </div>
          <div v-if="$v.form.diastolic.$error && !$v.form.diastolic.maxLength" class="invalid-feedback">
            {{maxLengthError($t('form.diastolic.label'), $v.form.diastolic.$params.maxLength.max)}}
          </div>
        </div>
       </div>
      </div>
      <Divider></Divider>
      <!-- {{ form }} -->
      <div class="pulse-rate-result table-responsive">
        <table class="table table-borderless text-nowrap mb-0">
          <tbody>
            <tr>
              <td>{{$t('reference.title')}}</td>
              <td class="fw-bold text-success">{{$t('reference.value')}}</td>
              <!-- <td class="fw-bold text-success"> {{test()}}</td> -->
            </tr>
            <tr>
              <!-- :style="{ background: gradientBg(getBeatsResult(form.systolic,form.diastolic,age).status) }" -->
              <td>{{$t('reference.result')}}</td>
              <!-- <td class="result-msg fw-bold text-center"> {{getBeatsResult(form.systolic,form.diastolic,age)}}</td> -->
              <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResult(form.systolic,form.diastolic,age).status) }"> {{getBeatsResult(form.systolic,form.diastolic,age)["message"]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/BloodPressure.json"></i18n>
<script>
import EditDialog from '@/components/global/utilities/EditDialog.vue';
import Divider from "@/components/global/utilities/Divider.vue";

import {htmlTagsError,maxLengthError,requiredError,maxValueError, numericError} from "@/validation/errors";
import {maxLength,numeric,required,maxValue} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
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
      systolic: {
        required,
        numeric,
        maxValue: maxValue(220),
      },
      diastolic: {
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
        },
      }
    },
  },
  mounted() {
    
  },

  methods: {
    htmlTagsError,
    maxLengthError,
    requiredError,
    maxValueError,
    numericError,
    //////////////////
    getBeatsResult(systolic,diastolic,age){
      if(systolic&&diastolic&&age){
            if(age>0 && age<=3){
              if( (systolic < 45) && (diastolic < 65) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }
              else if( (systolic >= 65 && systolic <= 85) && (diastolic >= 45 && diastolic <= 55) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 85 && diastolic > 55)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>3 && age<=6){
              if( (systolic < 70) && (diastolic < 50) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 70 && systolic <= 90) && (diastolic >= 50 && diastolic <= 65) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 90 && diastolic > 65)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>6 && age<=12){
              if( (systolic < 80) && (diastolic < 55) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 80 && systolic <= 100) && (diastolic >= 55 && diastolic <= 65) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 100 && diastolic > 65)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>12 && age<=36){
              if( (systolic < 90) && (diastolic < 55) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 90 && systolic <= 105) && (diastolic >= 55 && diastolic <= 70) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 105 && diastolic > 70)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>36 && age<=72){
              if( (systolic < 95) && (diastolic < 60) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 95 && systolic <= 110) && (diastolic >= 60 && diastolic <= 75) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 110 && diastolic > 75)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>72 && age<=144){
              if( (systolic < 100) && (diastolic < 60) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 100 && systolic <= 120) && (diastolic >= 60 && diastolic <= 75) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 120 && diastolic > 75)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>144 && age<=216){
              if( (systolic < 110) && (diastolic < 65) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 110 && systolic <= 120) && (diastolic >= 60 && diastolic <= 80) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 110 && diastolic > 65)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>216){
              if( (systolic < 110) && (diastolic < 65) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 110 && systolic <= 120) && (diastolic >= 60 && diastolic <= 80) ){
                return {status: 'success', message:"Normal"};
              }else if( (systolic >= 121 && systolic <= 134) && (diastolic >= 81 && diastolic <= 84))  {
                return {status: 'danger', message:"Hypertenstion Stage 1"};

              }
              else if( (systolic >= 135 && systolic <= 139) && (diastolic >= 85 && diastolic <= 89))  {
                return {status: 'danger', message:"Hypertenstion Stage 2"};

              }
              else if( (systolic >= 140 && systolic < 180) && (diastolic >= 90 && diastolic <= 120))  {
                return {status: 'danger', message:"Hypertenstion "};

              }
              else if( systolic >= 180 && diastolic >= 120 )  {
                return {status: 'danger', message:"Hypertenstion CRISIS "};

              }
              else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
           else{return  {status: 'danger', message:"Please Slow Down Immediately !!"}}
         
      }
      else{   
        return ({status: '', message:""});
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
  table{
    .result-msg{
      color: white;
      border-radius:2rem;
    }
  }
</style>