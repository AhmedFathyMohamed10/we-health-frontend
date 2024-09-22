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
          <label for="" class="form-label">{{$t('form.status.label')}}</label>
              <Dropdown 
                v-model="form.status" 
                :options="statusOptions" 
                optionLabel="value" 
                optionValue="value" 
                :placeholder="$t('form.status.dropdownPlaceholder') " 
              :class="{'p-invalid':$v.form.status.$error}"
              />
               <small v-if="$v.form.status.$error && !$v.form.status.required " class="p-invalid">
                {{requiredError($t('form.status.label'))}}
               </small>
        
          </div>
        </div>
        <!-- ////////Q invisible////////////// -->
       <div class="col-md-12 invisible ">
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
     
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/Tooth.json"></i18n>
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
     statusOptions: [
        {id:1,value: 'Extracted'},
        {id:2,value: 'Implant'},
        {id:3,value: 'Filling'},
        {id:4,value: 'Crown'},
        {id:5,value: 'Treated'},
     
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
      status: {
        required,
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
    ///////////////
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