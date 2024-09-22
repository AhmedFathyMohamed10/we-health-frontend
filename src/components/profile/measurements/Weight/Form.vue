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
          <div class="form-group weight" >
              <CustomInputGroup 
                v-model="form.weight"
                :label="$t('form.weight.label')"
                :inputType="'number'" 
                :valuePlaceholder="$t('form.weight.placeholderValue')" 
                :dropdownPlaceholder="$t('form.weight.dropdownPlaceholder')"
                :options="weightOptions" 
                :invalidValue="$v.form.weight.value.$error"
              />
              <div class="error">
                <small class="p-invalid" v-if="$v.form.weight.value.$error &&! $v.form.weight.value.required">
                    {{requiredError($t('form.weight.label'))}}
                </small> 
              </div>
          
          </div>
        </div>
        <Divider></Divider>
        <!-- {{ form }} -->
        <div class="table-responsive">
          <table class="table table-borderless text-nowrap mb-0">
            <tbody>
              <tr>
                <td>{{$t("form.reference.title")}}</td>
                <td class="fw-bold text-success"> {{$t("form.reference.value")}}</td>
              </tr>
              <tr>
                <td>{{$t("form.reference.result")}}</td>
                <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResult(form.weight.value,age).status) }">{{getBeatsResult(form.weight.value,age).message}}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/Weight.json"></i18n>
<script>
import EditDialog from '@/components/global/utilities/EditDialog.vue';
import Divider from "@/components/global/utilities/Divider.vue";
/////////////////////////////////////////
import CustomInputGroup from '@/components/global/custom/CustomInputGroup.vue'
 //////////////////////////////////////////////////
import {requiredError,} from "@/validation/errors";
import {required,} from "vuelidate/lib/validators";
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
       /////////////
      weightOptions: [
        {id:1,value: 'kg'},
        {id:2,value: '50kg'},
        {id:3,value: '10kg'},
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
      weight: {
       value:{required} ,
      },
   
    },
  },
  mounted() {
    
  },

  methods: {
    requiredError,
    /////////////
    getBeatsResult(weight,age) {
      // ps : age in months //
      if(weight&&age){
        if(age>0 &&age<=5){
          if (weight < 100) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (weight >= 100 && weight <= 160) {
            return {status: 'success', message:"Normal"};
          }else if (weight > 160 && weight < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>5 &&age<=12){
          if (weight < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (weight >= 80 && weight <= 150) {
            return {status: 'success', message:"Normal"};
          }else if (weight > 150 && weight < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>12 &&age<=36){
          if (weight < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (weight >= 80 && weight <= 130) {
            return {status: 'success', message:"Normal"};
          }else if (weight > 130 && weight < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>36 &&age<=60){
          if (weight < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (weight >= 80 && weight <= 120) {
            return {status: 'success', message:"Normal"};
          }else if (weight > 120 && weight < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>60 &&age<=120){
          if (weight < 70) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (weight >= 70 && weight <= 110) {
            return {status: 'success', message:"Normal"};
          }else if (weight > 110 && weight < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>120 &&age<=216){
          if (weight < 60) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (weight >= 60 && weight <= 105) {
            return {status: 'success', message:"Normal"};
          }else if (weight > 105 && weight < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>216){
          if (weight < 60) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (weight >= 60 && weight <= 100) {
            return {status: 'success', message:"Normal"};
          }else if (weight > 100 && weight < 200) {
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