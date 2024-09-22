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
              <label class="form-label my-0 ms-2" for="binary">{{$t('form.sleepDuration.label')}}</label>
              <Calendar 
                  :showTime="true" 
                  v-model="selectedTimeSleep"
                  :timeOnly="true" 
                  :placeholder="$t('form.sleepDuration.placeholder')"
                   hourFormat="12" 
                  :timeFormat="timeFormat"
                  :class="{'p-invalid': $v.form.sleepDuration.$error}"
              />
              <small
              class="p-invalid"
                  v-if="$v.form.sleepDuration.$error && !$v.form.sleepDuration.validTime"
                >
                  {{ timeError($t("form.sleepDuration.label")) }}
            </small>
          </div>    
        </div>
        <div class="col-md-6">
          <div class="form-group">
          <label for="" class="form-label my-0 ms-2">{{$t('form.timeToFall.label')}}</label>
              <Dropdown 
                v-model="form.timeToFall" 
                :options="timeToFallOptions" 
                optionLabel="value" 
                optionValue="value" 
                :placeholder="$t('form.timeToFall.placeholder') " 
              />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
              <label class="form-label my-0 ms-2" for="binary">{{$t('form.wakeUpTime.label')}}</label>
              <Calendar 
                  :showTime="true" 
                  v-model="selectedTimeWake"
                  :timeOnly="true" 
                  :placeholder="$t('form.wakeUpTime.placeholder')"
                  hourFormat="12" 
                  :timeFormat="timeFormat"
                  :class="{'p-invalid': $v.form.wakeUpTime.$error}"
              />
              <small
              class="p-invalid"
                  v-if="$v.form.wakeUpTime.$error && !$v.form.wakeUpTime.validTime"
                >
                  {{ timeError($t("form.wakeUpTime.label")) }}
            </small>
         </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
          <label for="" class="form-label my-0 ms-2">{{$t('form.sleepQuality.label')}}</label>
          <input 
              type="text" 
              :placeholder="$t('form.sleepQuality.placeholder')" 
              v-model="form.sleepQuality"
              class="form-control" 
              :class="{'is-invalid':$v.form.sleepQuality.$error}"
          >
          <div v-if="$v.form.sleepQuality.$error && !$v.form.sleepQuality.required " class="invalid-feedback">
            {{requiredError($t('form.sleepQuality.label'))}}
          </div>
    
        </div>
        </div>
      </div>
      <Divider></Divider>
      <div class="row">
        <div class="col-md-12">
          <h5>{{$t('overallProgress')}}</h5>
        </div>
        <div class="col-md-4">
           <button class="btn btn-pill btn-success-gradient text-white"><i class="pi pi-eject"></i></button>
           <span class=" fw-bold mx-3">{{$t('qualityValue')}}</span><br/>
           <span class="fw-normal my-2 text-success"> {{$t('quality')}}</span>

        </div>
        <div class="col-md-4">
          <button class="btn btn-pill btn-success-gradient text-white"><i class=" pi pi-reddit"></i></button>
           <span class=" fw-bold mx-3">{{$t('good')}}</span><br/>
           <span class="fw-normal my-2 text-success"> {{$t('goodMood')}}</span>
        </div>
        <div class="col-md-4">
          <button class="btn btn-pill btn-success-gradient text-white"><i class=" pi pi-arrow-right"></i></button>
           <span class=" fw-bold mx-3">{{$t('num')}}</span><br/>
           <span class="fw-normal my-2 text-success"> {{$t('total')}}</span>
        </div>
       
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/SleepCalculator.json"></i18n>
<script>
import EditDialog from '@/components/global/utilities/EditDialog.vue';
import Divider from "@/components/global/utilities/Divider.vue";


import {requiredError,timeError} from "@/validation/errors";
import {required,} from "vuelidate/lib/validators";
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
  },
  data() {
    return {
      form:this.value,
      timeFormat: 'HH:mm',
      selectedTimeSleep:null,
      selectedTimeWake:null,
      ////////////////////
      timeToFallOptions: [
        {id:1,value: 'Dialy'},
        {id:2,value: 'Weekly'},
        {id:3,value: 'Monthly'},
      ],
     
    };
  },
  computed:{
    age(){
      return 217 ; // 216 month = 18 years 
    },
     /////////////////////////
     formattedTimeSleep() {
        if (this.selectedTimeSleep) {
            if(this.$moment(this.selectedTimeSleep, this.selectedTimeSleep).isValid()){
                return this.$moment(this.selectedTimeSleep, this.timeFormat,true ).format('hh:mm A');
            }
            else {
                return this.selectedTimeSleep ;
            } 
        } 
        else {
            return '';
        }
     },
    formattedTimeWake() {
      if (this.selectedTimeWake) {
          if(this.$moment(this.selectedTimeWake, this.timeFormat).isValid()){
              return this.$moment(this.selectedTimeWake, this.timeFormat,true ).format('hh:mm A');
          }
          else {
              return this.selectedTimeWake ;
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
    formattedTimeSleep(newVal, oldVal) {
      this.form.sleepDuration = newVal;

    }, 
    formattedTimeWake(newVal, oldVal) {
      this.form.wakeUpTime = newVal;

    }, 
  },
  validations: {
    form:{
     
      sleepDuration: {
        validTime(value) {
            return validTime(value);
        },
      },
      wakeUpTime: {
        validTime(value) {
            return validTime(value);
        },
      },
      sleepQuality:{
        required,
     
      }
   
    },
  },
  mounted() {
    
  },
  methods: {
    requiredError,
    timeError,
    //////////
  
    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.$emit('save');
        this.$v.form.$reset();
        this.selectedTimeSleep= null,
        this.selectedTimeWake= null
        
      }
    },
    cancelForm() {
      this.$emit('cancel');
      this.$v.form.$reset();
      this.selectedTimeSleep= null,
      this.selectedTimeWake= null
    },
 
  },
};
</script>

<style lang="scss" scoped>
</style>