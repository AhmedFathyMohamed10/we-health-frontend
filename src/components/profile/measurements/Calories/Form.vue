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

        <div class="d-flex justify-content-center align-items-center">
          <div class="">
             <button  @click="displayContentExercies" class="btn btn-pill" :class="contentExercies? 'btn-success-gradient':'btn-outline'"> {{$t('exercies')}}</button>
          </div>
          <div class="">
             <button  @click="displayContentMeals" class="btn btn-pill" :class="contentsMeals? 'btn-success-gradient':'btn-outline'">{{$t('meals')}} </button>
          </div>
         
        </div>
        <!-- {{$v.form.duration}} -->

      <div v-if="contentExercies" class="row">
        <div class="col-md-6  ">
          <div class="form-group type">
              <label class="form-label">{{$t('form.type.label')}}</label>
              <div class="p-inputgroup"> 
                <span 
                  class="p-inputgroup-addon bg-light">
                  <i class="pi pi-search"></i>
                </span>         
                  <AutoComplete
                    v-model="form.type"
                    :suggestions="drugNameParams.suggestions"  
                    field="value"  
                    placeholder="Search" 
                    @complete="search($event,drugNameParams)"
                  />
                
              </div>
            
          </div>                 
        </div>
        <div class="col-md-6">
          <div class="form-group">
          <label for="" class="form-label">{{$t('form.times.label')}}</label>
              <Dropdown 
                v-model="form.times" 
                :options="timesOptions" 
                optionLabel="value" 
                optionValue="value" 
                placeholder="Dialy/Weekly " 
              />
              
        
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
           
              <label class="form-label my-0 ms-2" for="binary">{{$t('form.duration.label')}}</label>
              <Calendar 
                  :showTime="true" 
                  v-model="selectedTime"
                  :timeOnly="true" 
                  :placeholder="$t('form.duration.placeholder')"
                    hourFormat="12" 
                    :timeFormat="timeFormat"
                    :class="{'p-invalid': $v.form.duration.$error}"   

              />
              <small
                class="p-invalid"
                    v-if="$v.form.duration.$error && !$v.form.duration.validTime"
                  >
                    {{ timeError($t("form.duration.label")) }}
              </small>
         </div>
       
         
        </div>
      

     
      </div>
      <div v-if="contentsMeals" class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="" class="form-label">{{$t('form.beats.label')}}</label>
            <input 
                type="number" 
                :placeholder="$t('form.beats.placeholder')" 
                v-model="form.beats"
                class="form-control" 
            >
        
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
      
     

      <div class="row">
        <div class="col-md-12">
          <h5>Overall Progress</h5>
        </div>
        <div class="col-md-4">
           <button class="btn btn-pill btn-success-gradient text-white">Kcal</button>
           <span class=" fw-bold mx-3">843</span><br/>
           <span class="fw-normal my-2 text-success"> Calories Bumt</span>

        </div>
        <div class="col-md-4">
          <button class="btn btn-pill btn-success-gradient text-white"><i class=" pi pi-bookmark-fill"></i></button>
           <span class=" fw-bold mx-3">1.6 kg</span><br/>
           <span class="fw-normal my-2 text-success"> Weight Loss</span>
        </div>
        <div class="col-md-4">
          <button class="btn btn-pill btn-success-gradient text-white"><i class=" pi pi-arrow-right"></i></button>
           <span class=" fw-bold mx-3">21</span><br/>
           <span class="fw-normal my-2 text-success"> Total Days</span>
        </div>
       
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/Calories.json"></i18n>
<script>
import EditDialog from '@/components/global/utilities/EditDialog.vue';
import Divider from "@/components/global/utilities/Divider.vue";

import {htmlTagsError,maxLengthError,requiredError,maxValueError, numericError,timeError} from "@/validation/errors";
import {maxLength,numeric,required,maxValue} from "vuelidate/lib/validators";
import {notContainsHtmlTags,validTime} from "@/validation/customValidators";
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
      contentExercies:true,
      contentsMeals:false,
      /////////////////
      timeFormat: 'HH:mm',
      selectedTime: null,
      ///////////////
      timesOptions: [
        {id:1,value: 'Dialy'},
        {id:2,value: 'Weekly'},
        {id:3,value: 'Monthly'},
      ],
      drugNameParams:{
        url: "example/drugName",
        suggestions:[]
      }
    };
  },
  computed:{
    age(){
      return 217 ; // 216 month = 18 years 
    },
     /////////////////////////
     formattedTime() {
            if (this.selectedTime) {
                if(this.$moment(this.selectedTime, this.timeFormat).isValid()){
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
      this.form.duration= newVal;
    }, 
  },
  validations: {
    form:{
      duration: {
        validTime(value) {
            return validTime(value);
        },
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
    timeError,
    //////////
    displayContentExercies(){
      this.contentExercies=true,
      this.contentsMeals=false
    },
    displayContentMeals(){
      this.contentExercies=false,
      this.contentsMeals=true
    },
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
        this.selectedTime = null; 
      }
    },
    cancelForm() {
      this.$emit('cancel');
      this.$v.form.$reset();
      this.selectedTime = null; 
    },
    async search(event,params) {
        console.log(event.query)
        try {
          await this.$store.dispatch('generalSuggestions/search',{url:params.url,s:event.query})
          .then((res) => {
              // console.log(res)
              params.suggestions = [...res]
          });
        }
        catch (error) {
          console.error(error)
        }
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