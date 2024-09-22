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
          <label for="" class="form-label ">{{$t('form.averageSteps.label')}}</label>
          <input 
              type="number" 
              :placeholder="$t('form.averageSteps.placeholder')" 
              v-model="form.averageSteps"
              class="form-control" 
              :class="{'is-invalid':$v.form.averageSteps.$error}"
          >
          <div v-if="$v.form.averageSteps.$error && !$v.form.averageSteps.required " class="invalid-feedback">
            {{requiredError($t('form.averageSteps.label'))}}
          </div>
          <div v-else-if="$v.form.averageSteps.$error && !$v.form.averageSteps.numeric" class="invalid-feedback">
            {{numericError($t('form.averageSteps.label'))}}
          </div>
          <div v-else-if="$v.form.averageSteps.$error && !$v.form.averageSteps.maxValue" class="invalid-feedback">
            {{maxValueError($t('form.averageSteps.label'), $v.form.averageSteps.$params.maxValue.max)}}
          </div>
        </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <div class="form-group distant" >
              <CustomInputGroup 
                v-model="form.distant"
                :label="$t('form.distant.label')"
                :inputType="'number'" 
                :valuePlaceholder="$t('form.distant.placeholderValue')" 
                :placeholder="$t('form.distant.placeholder')"
                :options="distantOptions" 
                />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
          <label for="" class="form-label  my-0 ms-2">{{$t('form.speed.label')}}</label>
           <Dropdown 
              v-model="form.speed" 
              :options="speedOptions" 
              optionLabel="value" 
              optionValue="value" 
              placeholder="Select a Speed" 
            />
         </div>
        </div>
      
        <div class="col-md-6">
          <div class="form-group">
              <label class="form-label my-0 ms-2" for="binary">{{$t('form.time.label')}}</label>
              <Calendar 
                  :showTime="true" 
                  v-model="selectedTime"
                  :timeOnly="true" 
                  :placeholder="$t('form.time.placeholder')"
                   hourFormat="12" 
                  :timeFormat="timeFormat"
                  :class="{'p-invalid': $v.form.time.$error}"
              />
              <small
              class="p-invalid"
                  v-if="$v.form.time.$error && !$v.form.time.validTime"
                >
                  {{ timeError($t()) }}
            </small>
          </div>    
        </div>
        <div class="col-md-6">
          <div class="form-group">
          <label for="" class="form-label  my-0 ms-2">{{$t('form.caloriesBurnt.label')}}</label>
          <input 
              type="text" 
              :placeholder="$t('form.caloriesBurnt.placeholder')" 
              v-model="form.caloriesBurnt"
              class="form-control" 
              :class="{'is-invalid':$v.form.caloriesBurnt.$error}"
          >
          <div v-if="$v.form.caloriesBurnt.$error && !$v.form.caloriesBurnt.required " class="invalid-feedback">
            {{requiredError($t('form.caloriesBurnt.label'))}}
          </div>
       
        </div>
        </div>
       
      </div>
      <Divider></Divider>
      <div class="d-flex justify-content-center align-items-center">
        <div class="mx-4">
          <div class="">
            <i class=" pi pi-user fs-3 text-success-gradient"></i>
            <div class="fw-bold">{{$t('steps') }}</div>
          </div>
        
        </div>
        <div class="mx-4">
          <div class="my-3">
            <i class="pi pi-stopwatch fs-3 text-success-gradient"></i>
            <div class="fw-bold ">{{$t('valueSteps')}}</div> 
          </div>
     
        </div>
        <div class="mx-4">
          <div class=" ">
            <button class=" btn btn-success-gradient  text-white btn-pill">{{$t('kcal')}}</button>
            <div class="fw-bold text-center"> {{$t('valueKcal')}}</div> 
          </div>
         
        
        </div>
      
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/Steps.json"></i18n>
<script>
import EditDialog from '@/components/global/utilities/EditDialog.vue';
import Divider from "@/components/global/utilities/Divider.vue";
import CustomInputGroup from '@/components/global/custom/CustomInputGroup.vue'
import {requiredError,maxValueError,timeError, numericError} from "@/validation/errors";
import {numeric,required,maxValue} from "vuelidate/lib/validators";
import {validTime} from "@/validation/customValidators";
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
    CustomInputGroup,
  },
  data() {
    return {
      form:this.value,
      timeFormat: 'HH:mm',
      selectedTime:null,
      speedOptions:[
        {id:1,value:"Slow"},
        {id:2,value:"Normal"},
        {id:3,value:"Fast"}
      ],
      distantOptions:[
        {id:1,value:"Slow"},
        {id:2,value:"Normal"},
        {id:3,value:"Fast"}
      ],
    };
  },
  computed:{
    age(){
      return 217 ; // 216 month = 18 years 
    },
    formattedTime() {
      if (this.selectedTime) {
          if(this.$moment(this.selectedTime, this.selectedTime).isValid()){
              return this.$moment(this.selectedTime, this.timeFormat,true ).format('hh:mm A');
          }
          else {
              return this.selectedTime ;
          } 
      } 
      else {
          return '';
      }
  },
  },
  watch: {
    value(){
      this.form = this.value;
    },
    formattedTime(newVal, oldVal) {
      this.form.time = newVal;

    }, 
  },
  validations: {
    form:{
      averageSteps: {
        required,
        numeric,
        maxValue: maxValue(220),
      },
      
      time: { 
       validTime(value){
        return validTime(value);
       }
      },
      caloriesBurnt: {
        required,
       
      },
     
    },
  },
  mounted() {
    
  },

  methods: {
    requiredError,
    maxValueError,
    numericError,
    timeError,
    /////////////////
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
        this.selectedTime= null;
      }
    },
    cancelForm() {
      this.$emit('cancel');
      this.$v.form.$reset();
      this.selectedTime= null;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>