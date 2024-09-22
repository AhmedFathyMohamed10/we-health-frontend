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
          <label for="" class="form-label">{{$t('form.cm.label')}}</label>
          <input 
              type="number" 
              :placeholder="$t('form.cm.placeholder')" 
              v-model="form.cm"
              class="form-control" 
              :class="{'is-invalid':$v.form.cm.$error}"
          >
          <div v-if="$v.form.cm.$error && !$v.form.cm.required " class="invalid-feedback">
            {{requiredError($t('form.cm.label'))}}
          </div>
          <div v-else-if="$v.form.cm.$error && !$v.form.cm.numeric" class="invalid-feedback">
            {{numericError($t('form.cm.label'))}}
          </div>
          <div v-else-if="$v.form.cm.$error && !$v.form.cm.maxValue" class="invalid-feedback">
            {{maxValueError($t('form.cm.label'), $v.form.cm.$params.maxValue.max)}}
          </div>
        </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
          <label for="" class="form-label">{{$t('form.ft.label')}}</label>
          <input 
              type="number" 
              :placeholder="$t('form.ft.placeholder')" 
              v-model="form.ft"
              class="form-control" 
              :class="{'is-invalid':$v.form.ft.$error}"
          >
          <div v-if="$v.form.ft.$error && !$v.form.ft.required " class="invalid-feedback">
            {{requiredError($t('form.ft.label'))}}
          </div>
          <div v-else-if="$v.form.ft.$error && !$v.form.ft.numeric" class="invalid-feedback">
            {{numericError($t('form.ft.label'))}}
          </div>
          <div v-else-if="$v.form.ft.$error && !$v.form.ft.maxValue" class="invalid-feedback">
            {{maxValueError($t('form.ft.label'), $v.form.ft.$params.maxValue.max)}}
          </div>
        </div>
        </div>
      </div>
      <Divider></Divider>
      <div class="pulse-rate-result table-responsive">
        <table class="table table-borderless text-nowrap mb-0">
          <tbody>
            <tr>
              <td>{{$t('form.reference.title')}}</td>
              <td class="fw-bold text-success">{{$t('form.reference.value')}}</td>
            </tr>
            <tr>
              <td>{{$t('form.reference.result')}}</td>
              <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResult(form.cm,age).status) }">{{getBeatsResult(form.cm,age).message}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/Length.json"></i18n>
<script>
import EditDialog from '@/components/global/utilities/EditDialog.vue';
import Divider from "@/components/global/utilities/Divider.vue";
import {requiredError,maxValueError, numericError} from "@/validation/errors";
import {numeric,required,maxValue} from "vuelidate/lib/validators";
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
      cm: {
        required,
        numeric,
        maxValue: maxValue(220),
      },
      ft: {
        required,
        numeric,
        maxValue: maxValue(220),
      },
   
    },
  },
  mounted() {
    
  },

  methods: {
    requiredError,
    maxValueError,
    numericError,
    ///////////////////
    getBeatsResult(cm,age) {
      // ps : age in months //
      if(cm&&age){
        if(age>0 &&age<=5){
          if (cm < 100) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (cm >= 100 && cm <= 160) {
            return {status: 'success', message:"Normal"};
          }else if (cm > 160 && cm < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>5 &&age<=12){
          if (cm < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (cm >= 80 && cm <= 150) {
            return {status: 'success', message:"Normal"};
          }else if (cm > 150 && cm < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>12 &&age<=36){
          if (cm < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (cm >= 80 && cm <= 130) {
            return {status: 'success', message:"Normal"};
          }else if (cm > 130 && cm < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>36 &&age<=60){
          if (cm < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (cm >= 80 && cm <= 120) {
            return {status: 'success', message:"Normal"};
          }else if (cm > 120 && cm < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>60 &&age<=120){
          if (cm < 70) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (cm >= 70 && cm <= 110) {
            return {status: 'success', message:"Normal"};
          }else if (cm > 110 && cm < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>120 &&age<=216){
          if (cm < 60) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (cm >= 60 && cm <= 105) {
            return {status: 'success', message:"Normal"};
          }else if (cm > 105 && cm < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>216){
          if (cm < 60) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (cm >= 60 && cm <= 100) {
            return {status: 'success', message:"Normal"};
          }else if (cm > 100 && cm < 200) {
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