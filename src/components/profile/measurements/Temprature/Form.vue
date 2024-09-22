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
          <div class="form-group degree" >
              <CustomInputGroup 
                v-model="form.degree"
                :label="$t('form.degree.label')"
                :inputType="'number'" 
                :valuePlaceholder="$t('form.degree.placeholderValue')" 
                :dropdownPlaceholder="$t('form.degree.dropdownPlaceholder')"
                :options="degreeOptions" 
                :invalidValue="$v.form.degree.value.$error"
              />
              <div class="error">
                <small class="p-invalid" v-if="$v.form.degree.value.$error &&! $v.form.degree.value.required">
                    {{requiredError($t('form.degree.label'))}}
                </small> 
              </div>
          
          </div>
        </div>
        <Divider></Divider>
        <!-- {{ form }} -->
        <div class=" table-responsive">
          <table class="table table-borderless text-nowrap mb-0">
            <tbody>
              <tr>
                <td>{{$t('form.reference.title')}}</td>
                <td class="fw-bold text-success">{{$t('form.reference.value')}}</td>
              </tr>
              <tr>
                <td>{{$t('form.reference.result')}}</td>
                <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResult(form.degree.value,form.degree.selection.value).status)}">{{getBeatsResult(form.degree.value,form.degree.selection.value).message}}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/Temprature.json"></i18n>
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
      ////////////////
      degreeOptions: [
        {id:1,value: '°C'},
        {id:2,value: '°F'},
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
      degree: {
       value:{required} ,
      },
   
    },
  },
  mounted() {
    
  },

  methods: {
    requiredError,
    //////////////
    getBeatsResult(degree,typeDegree) {
      // ps : age in months //
      if(typeDegree=="°F"){
        console.log(typeDegree)
        console.log(degree)
        let degreeValue = (degree-32)/1.8;
        console.log(degreeValue)
          if(degreeValue){
       
            if (degreeValue < 95) {
              return {status: 'danger', message:"Hypothermia"};
            }else if (degreeValue >= 97.5 && degreeValue <= 99.5) {
              return {status: 'success', message:"Normal"};
            }
            else if (degreeValue > 99.6 && degreeValue < 100.9) {
              return {status: 'danger', message:"Fever"};
            }
            else if (degreeValue >101 && degreeValue < 104) {
              return {status: 'danger', message:"Hyperthermia"};
            }
            else if (degreeValue > 104.1) {
              return {status: 'danger', message:"Hyperthermia"};
            }
            else {
              return {status: 'danger', message:"Please Slow Down Immediately !!"};
            }
          }
          else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
      }
      else if(typeDegree=="°C"){
        console.log(typeDegree)
        console.log(degree)
        let degreeValue = (1.8*degree)+32;
        console.log(degreeValue)
        if(degreeValue){
          if (degreeValue <= 35) {
            return {status: 'danger', message:"Hypothermia"};
          }else if (degreeValue >= 36.5 && degreeValue <= 37.5) {
            return {status: 'success', message:"Normal"};
          }
          else if (degreeValue >= 37.6 && degreeValue <= 38.3) {
            return {status: 'danger', message:"Fever"};
          }
          else if (degreeValue >= 38.4 && degreeValue <= 40) {
            return {status: 'danger', message:"Hyperthermia"};
          }
          else if (degreeValue >= 40.1) {
            return {status: 'danger', message:"Hyperpyrexia"};
          }
          else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
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