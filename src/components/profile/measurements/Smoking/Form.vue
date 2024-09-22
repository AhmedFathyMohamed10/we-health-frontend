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
        <!-- ///////////content Buttons///////////// -->
      <div class="d-flex justify-content-center align-items-center">
        <div class="">
         <button  @click="displayContentSmoking" class="btn btn-pill" :class="contentSmoking? 'btn-success-gradient':'btn-outline'"> {{$t('form.smoking.value')}}</button>
        </div>
        <div class="">
         <button @click="displayContentRecovery" class="btn btn-pill"  :class="contentRecovery? 'btn-success-gradient':'btn-outline'"> {{$t('form.unitRecovery.value')}}</button>
        </div>
      
      </div>
        <!-- /////////////contentSmoking/////////// -->
        <div  v-if="contentSmoking"  class="row">
          <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{$t('form.smoking.label')}}</label>
                    <Dropdown 
                      v-model="form.smoking" 
                      :options="smokingOptions" 
                      optionLabel="value" 
                      optionValue="value" 
                      placeholder="Extracted " 
                
                    />
              </div>
          </div>
          <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{$t('form.unit.label')}}</label>
                    <Dropdown 
                      v-model="form.unit" 
                      :options="unitOptions" 
                      optionLabel="value" 
                      optionValue="value" 
                      :placeholder="$t('form.unit.placeholder') " 
                
                    />
              </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{ $t("form.duration.labelFrom") }}</label> 
                  <Calendar
                    v-model="form.durationFrom"
                    :placeholder="$t('form.duration.placeholderOne')"
                    :showIcon="true"
                    :class="{'p-invalid': $v.form.durationFrom.$error}"
                    dateFormat="mm-dd-yy"
                    @date-select="formateDateFrom"
                  />
                  <small
                    class="p-invalid"
                    v-if="$v.form.durationFrom.$error && !$v.form.durationFrom.validDate"
                  >
                    {{ dateError($t("form.duration.labelFrom")) }}
                  </small>
             </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{ $t("form.duration.labelTo") }}</label> 
                  <Calendar
                     v-model="form.durationTo"
                      :placeholder="$t('form.duration.placeholderTwo')"
                      :showIcon="true"
                      :class="{'p-invalid': $v.form.durationTo.$error}"
                      dateFormat="mm-dd-yy"
                      @date-select="formateDateTo"
                  />
                  <small
                    class="p-invalid"
                    v-if="$v.form.durationTo.$error && !$v.form.durationTo.validDate"
                  >
                    {{ dateError($t("form.duration.labelTo")) }}
                  </small>
             </div>
          </div>
          <div class="col-md-3">
            <label for="" class="form-label invisible">{{$t('form.beats.label')}}</label>
            <button  @click="addForm" class="btn btn-icon rounded-circle btn-success-gradient" >
              <i class="fa fa-plus fa-md"></i>
            </button>
          </div>
          <Divider></Divider>
        </div>
        <!-- /////////////contentRecovery/////////// -->
        <div  v-if="contentRecovery"  class="row">
              <div class="col-md-7">
                <div class="form-group">
                  <label for="" class="form-label">{{$t('form.unitRecovery.label')}}</label>
                <div class="custom-input-group">
                  <input 
                      type="text" 
                      :placeholder="$t('form.unitRecovery.placeholderOne')" 
                      v-model="form.unitRecovery"
                      class="form-control" 
                  >
               
                </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ $t("form.smokingScince.label") }}</label> 
                      <Calendar
                        v-model="form.smokingScince"
                        :placeholder="$t('form.smokingScince.placeholder')"
                        :showIcon="true"
                        :class="{'p-invalid': $v.form.smokingScince.$error}"
                        dateFormat="mm-dd-yy"
                        @date-select="formateDateScince"
                      />
                      <small
                        class="p-invalid"
                        v-if="$v.form.smokingScince.$error && !$v.form.smokingScince.validDate"
                      >
                        {{ dateError($t("form.smokingScince.label")) }}
                      </small>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ $t("form.quittedOn.label") }}</label> 
                      <Calendar
                        v-model="form.quittedOn"
                          :placeholder="$t('form.quittedOn.placeholder')"
                          :showIcon="true"
                          :class="{'p-invalid': $v.form.quittedOn.$error}"
                          dateFormat="mm-dd-yy"
                          @date-select="formateDateOn"
                      />
                      <small
                        class="p-invalid"
                        v-if="$v.form.quittedOn.$error && !$v.form.quittedOn.validDate"
                      >
                        {{ dateError($t("form.quittedOn.label")) }}
                      </small>
                </div>
              
              </div>
              <div class="col-md-3">
                <label for="" class="form-label invisible">{{$t('form.beats.label')}}</label>
                <button  @click="addForm" class="btn btn-icon rounded-circle btn-success-gradient" >
                  <i class="fa fa-plus fa-md"></i>
                </button>
              </div>

              <Divider></Divider>
              <div class="col-md-12">
                <h5> Overall Progress <i class="pi pi-thumbs-up-fill text-success"></i></h5>
              </div>
              <div class="col-md-4">
                <P class="text-success"> 3 Months</P>
                <Divider></Divider>

              </div>
              <div class="col-md-4">
                    <P class="text-success"> 17 Days</P>
                    <Divider></Divider>
              </div>
              <div class="col-md-4">
                    <P class="text-success"> 12 Hours</P>
                    <Divider></Divider>
              </div>
          
              <div class="col-md-7">
                <div class="form-group">
                <label for="" class="form-label">{{$t('form.lifeGained.label')}}</label>
                    <Dropdown 
                      v-model="form.lifeGained" 
                      :options="lifeGainedOptions" 
                      optionLabel="value" 
                      optionValue="value" 
                    :placeholder="$t('form.lifeGained.placeholder') " 
                    />
                    
              
                </div>
              </div>
              
        </div>
      
      
         
         
     
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/Smoking.json"></i18n>
<script>
import EditDialog from '@/components/global/utilities/EditDialog.vue';
import Divider from "@/components/global/utilities/Divider.vue";
import { convertDate } from "@/helpers/utilities";

import {dateError } from "@/validation/errors";
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
      contentSmoking:true,
      contentRecovery:false,
      /////////////////
      smokingOptions: [
        {id:1,value: 'Daily '},
        {id:2,value: 'Monthly'},
      ],
      unitOptions: [
        {id:1,value: 'Cigarette'},
        {id:2,value: 'Implant'},
      ],
      lifeGainedOptions: [
        {id:1,value: 'Months'},
        {id:2,value: 'Years'},
      ],
     
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
      durationFrom: {
        validDate(value) {
              return validDate(value);
            },
      },
      durationTo: {
        validDate(value) {
              return validDate(value);
            },
      },
      smokingScince: {
        validDate(value) {
              return validDate(value);
            },
      },
      quittedOn: {
        validDate(value) {
              return validDate(value);
            },
      },

    },
  },
  mounted() {
    
  },

  methods: {
      dateError ,
    //////////////////////
    formateDateFrom() {
      this.form.durationFrom = convertDate(
        this.form.durationFrom 
      );
    },
    formateDateTo() {
      this.form.durationTo = convertDate(
        this.form.durationTo 
      );
    },
    formateDateScince() {
      this.form.smokingScince = convertDate(
        this.form.smokingScince 
      );
    },
    formateDateOn() {
      this.form.quittedOn = convertDate(
        this.form.quittedOn 
      );
    },
   ///////////////////////
    displayContentSmoking(){
      this.contentSmoking= true;
      this.contentRecovery = false;
    },
    displayContentRecovery(){
      this.contentRecovery = true;
      this.contentSmoking = false;
    },
    //////////
    getBeatsResult(random ,age) {
      // ps : age in months //
      if(random &&age){
        if(age>0 &&age<=5){
          if (random  < 100) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (random  >= 100 && random  <= 160) {
            return {status: 'success', message:"Normal"};
          }else if (random  > 160 && random  < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>5 &&age<=12){
          if (random  < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (random  >= 80 && random  <= 150) {
            return {status: 'success', message:"Normal"};
          }else if (random  > 150 && random  < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>12 &&age<=36){
          if (random  < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (random  >= 80 && random  <= 130) {
            return {status: 'success', message:"Normal"};
          }else if (random  > 130 && random  < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>36 &&age<=60){
          if (random  < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (random  >= 80 && random  <= 120) {
            return {status: 'success', message:"Normal"};
          }else if (random  > 120 && random  < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>60 &&age<=120){
          if (random  < 70) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (random  >= 70 && random  <= 110) {
            return {status: 'success', message:"Normal"};
          }else if (random  > 110 && random  < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>120 &&age<=216){
          if (random  < 60) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (random  >= 60 && random  <= 105) {
            return {status: 'success', message:"Normal"};
          }else if (random  > 105 && random  < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>216){
          if (random  < 60) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (random  >= 60 && random  <= 100) {
            return {status: 'success', message:"Normal"};
          }else if (random  > 100 && random  < 200) {
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
      console.log('save form')
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