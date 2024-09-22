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
          <label for="" class="form-label">{{$t('form.beats.label')}}</label>
          <input 
              type="number" 
              :placeholder="$t('form.beats.placeholder')" 
              v-model="form.beats"
              class="form-control" 
              :class="{'is-invalid':$v.form.beats.$error}"
          >
          <div v-if="$v.form.beats.$error && !$v.form.beats.required " class="invalid-feedback">
            {{requiredError($t('form.beats.label'))}}
          </div>
          <div v-else-if="$v.form.beats.$error && !$v.form.beats.numeric" class="invalid-feedback">
            {{numericError($t('form.beats.label'))}}
          </div>
          <div v-else-if="$v.form.beats.$error && !$v.form.beats.maxValue" class="invalid-feedback">
            {{maxValueError($t('form.beats.label'), $v.form.beats.$params.maxValue.max)}}
          </div>
        </div>
        </div>
       <div class="col-md-12">
        <div class="form-group">
          <label for="" class="form-label">{{$t('form.comment.label')}}</label>
          <input 
              type="text" 
              :placeholder="$t('form.comment.placeholder')" 
              v-model="form.comment"
              class="form-control" 
              :class="{'is-invalid':$v.form.comment.$error}"
          >
          <div v-if="$v.form.comment.$error && !$v.form.comment.notContainsHtmlTags" class="invalid-feedback">
            {{htmlTagsError($t('form.comment.label'))}}
          </div>
          <div v-if="$v.form.comment.$error && !$v.form.comment.maxLength" class="invalid-feedback">
            {{maxLengthError($t('form.comment.label'), $v.form.comment.$params.maxLength.max)}}
          </div>
        </div>
       </div>
      </div>
      <Divider></Divider>
      <div class="pulse-rate-result table-responsive">
        <table class="table table-borderless text-nowrap mb-0">
          <tbody>
            <tr>
              <td>Reference</td>
              <td class="fw-bold text-success">60 - 100 beat/minute</td>
            </tr>
            <tr>
              <td>Result</td>
              <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResult(form.beats,age).status) }">{{getBeatsResult(form.beats,age).message}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/GrowthChart.json"></i18n>
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
      beats: {
        required,
        numeric,
        maxValue: maxValue(220),
      },
      comment: {
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
  table{
    .result-msg{
      color: white;
      border-radius:2rem;
    }
  }
</style>