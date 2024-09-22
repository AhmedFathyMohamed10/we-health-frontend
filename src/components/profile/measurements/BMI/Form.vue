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
          <div class="form-group height" >
            <CustomInputGroup 
              v-model="form.height"
              :label="$t('form.height.label')"
              :inputType="'number'" 
              :valuePlaceholder="$t('form.height.placeholderValue')" 
              :placeholder="$t('form.height.placeholder')"
              :options="heightOptions" 
              />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group weight" >
              <CustomInputGroup 
                v-model="form.weight"
                :label="$t('form.weight.label')"
                :inputType="'number'" 
                :valuePlaceholder="$t('form.weight.placeholderValue')" 
                :placeholder="$t('form.weight.placeholder')"
                :options="weightOptions" 
              />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
          <label for="" class="form-label">{{$t('form.bmi.label')}}</label>
          <input 
              type="number" 
              :placeholder="$t('form.bmi.placeholder')" 
              v-model="form.bmi"
              class="form-control" 
              :class="{'is-invalid':$v.form.bmi.$error}"
              disabled
          >
          <div v-if="$v.form.bmi.$error && !$v.form.bmi.required " class="invalid-feedback">
            {{requiredError($t('form.bmi.label'))}}
          </div>


          <div v-else-if="$v.form.bmi.$error && !$v.form.bmi.numeric" class="invalid-feedback">
            {{numericError($t('form.bmi.label'))}}
          </div>
          <div v-else-if="$v.form.bmi.$error && !$v.form.bmi.maxValue" class="invalid-feedback">
            {{maxValueError($t('form.bmi.label'), $v.form.bmi.$params.maxValue.max)}}
          </div>
          </div>
          <!-- ////////////////// -->
      
        <Divider></Divider>
        <!-- {{ form }} -->
        <div class="pulse-rate-result table-responsive">
          <table class="table table-borderless text-nowrap mb-0">
            <tbody>
              <tr>
                <td>{{$t('form.reference.title')}}</td>
                <td class="fw-bold text-success"> {{$t('form.reference.value')}} </td>
              </tr>
              <tr>
                <td>{{$t('form.reference.result')}}</td>
                <!-- <td class="result-msg "> {{getResultHightWeight}}</td> -->
                <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResult(this.form.bmi).status) }">{{getBeatsResult(this.form.bmi).message}}</td>
              </tr>
            </tbody>
          </table>
        </div>

        </div>
       
      </div>
    </EditDialog>
  </div>
</template>
<!-- <i18n src="@/lang/global/global.json"></i18n> -->
<i18n src="@/lang/profile/measurements/BMI.json"></i18n>
<script>
import EditDialog from '@/components/global/utilities/EditDialog.vue';
import Divider from "@/components/global/utilities/Divider.vue";
/////////////////////////////////////////
import CustomInputGroup from '@/components/global/custom/CustomInputGroup.vue'
 //////////////////////////////////////////////////
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
    CustomInputGroup,
  },
  data() {
    return {
      form:this.value,
      heightValue:null,
      weightValue:null,
      // bmiValue:"",
      ///////////////
      heightOptions: [
        {id:1, value:"Inch"},
        {id:2, value:"Cm"},
        {id:3, value:"Meter"},
      ],
      weightOptions: [
        {id:1, value:"Ib"},
        {id:2, value:"Kg"},
      ],
    };
  },
  computed:{
    age(){
      return 217 ; // 216 month = 18 years 
    },
    getResultHightWeight(){
      let bmi = (this.weightValue / (this.heightValue * this.heightValue ))
      console.log(bmi);
      return Math.round(bmi) ;
    },
    // getResultHightWeight(){
    //   let bmi = (this.form.weight.value /(this.heightValue * this.heightValue ))
    //   console.log(bmi)
    //   return this.form.bmi = Math.round(bmi) ;

    // },
 
    // getResultHightWeight(){
    //   let resultbmi = 0;
    //    if(this.form.height.selection.value=="Inch" && this.form.weight.selection.value=="Ib" ){
    //     // console.log(heightType)
    //     console.log(this.form.height.selection.value)
    //     let hightcm = this.form.height.value/100;
    //     let bmi = (this.form.weight.value /((hightcm * hightcm)*703))
    //     console.log(bmi)
    //     this.form.bmi =  Math.round(bmi) ;
    //    return this.form.bmi;
    //   }
    //  else if(this.form.height.selection.value=="Cm" && this.form.weight.selection.value=="Kg" ){
    //     //  console.log(heightType)
    //     //  let resultbmi = 0;
    //       console.log(this.form.height.selection.value)
    //       let hightcm = this.form.height.value/100;
    //       let bmi = (this.form.weight.value /(hightcm * hightcm ))
    //       console.log(bmi)
    //       return this.form.bmi =  Math.round(bmi) ;
    //  }
    // else{
    //   return this.form.bmi = resultbmi ;
    // }

    // },
  },
  watch: {
    value(){
      this.form = this.value;
    },
    // 'form.weight.selection.value'(){
    //   if(this.form.weight.selection.value =='Kg'){
    //     return this.form.height.selection ={id:1, value:"Cm"};
    //   }
    //   else if(this.form.weight.selection.value =='Ib'){
    //     return this.form.height.selection = {id:1, value:"Inch"};
    //   }
    //   else{
    //     return this.form.weight.selection =={id:1, value:"Cm"};
    //   }
     
    // },
    'form.weight.selection.value':{
        handler(newValue){
          console.log("newaVakue:",newValue)
        if(this.form.weight.selection.value =='Kg'){
          return this.weightValue = this.form.weight.value;

        }
        else if(this.form.weight.selection.value =='Ib'){
          return this.weightValue = this.form.weight.value / 2.2;
        }
        else{
          return this.weightValue = this.form.weight.value;
        }
    },
    deep:true
    },
    // 'form.weight.selection.value'(){
    //   if(this.form.weight.selection.value =='Kg'){
    //     return this.weightValue = this.form.weight.value;
    //   }
    //   else if(this.form.weight.selection.value =='Ib'){
    //     return this.weightValue = this.form.weight.value / 2.2;
    //   }
    //   else{
    //     return this.weightValue = this.form.weight.value;
    //   }
     
    // },
    'form.height.selection.value':{
      handler(newValue){
        console.log("newValue:",newValue)
        if(this.form.height.selection.value =='Cm'){
          return this.heightValue = this.form.height.value / 100;
        }
        else if(this.form.height.selection.value =='Inch'){
          return this.heightValue = this.form.height.value / 0.0254 ;
        }
        else if(this.form.height.selection.value =='Meter'){
          return this.heightValue = this.form.height.value;
        }
        else{
          return this.heightValue  = this.form.height.value;
        }
    },
    deep:true
     
    },
    weightValue(newWeight) {
    this.weightValue = newWeight;
   },
   heightValue(newHeight) {
    this.heightValue = newHeight;
   },
    getResultHightWeight(newBMI) {
     this.form.bmi = newBMI;
   },

    // 'form.height.selection.value'(){
    // this.form.height.selection.value = 'Cm';
      // this.form.height.selection.value = this.form.weight.selection.value;
       
      // console.log("hello from weight"+ this.form.height.selection.value)
    //   this.form.weight.selection.value =  this.form.height.selection.value;
    //   console.log("hello from height"+ this.form.height.selection.value)
    // }
    // weight: {
    //   handler(newVal) {
    //     this.form.weight.selection.id = this.form.height.selection.id;
    //     console.log("hello from watch"+ this.form.height.selection.id)
    //     console.log('Input Object Value:', newVal.value);
    //     console.log('Input Object ID:', newVal.id);

    //   },
    //   deep: true
    // },
  //  height(){
  //     this.form.weight.selection.id = this.form.height.selection.id;
  //     console.log(this.form.weight.selection.id)
  //     console.log("hello from watch"+ this.form.height.selection.id)
  //   },
  // height(){
  //   this.form.height.selection.id = this.form.weight.selection.id;
  // },
  },
  validations: {
    form:{
      bmi: {
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
    /////////////
   
    // getResultHightWeight(height,heightType,weight,weightType){
    // //  if(height){
    // //   if(heightType=="Inch"){
    // //      let valueMeter = height / 0.0254;
    // //      console.log(valueMeter);
    // //      return valueMeter ; 
    // //   }
    // //  else if(heightType=="Cm"){
    // //      let valueCm = height /2.5;
    // //      console.log(valueCm);
    // //      let valueMeter = 100 * valueCm;
    // //      console.log(valueMeter);
    // //      return valueMeter ; 
    // //   }
    // //  else if(heightType=="Meter"){
    // //      let valueMeter = height ;
    // //      console.log(valueMeter);
    // //      return valueMeter ; 
    // //   }
    // //   else{
    // //   return this.form.bmi  ;
    // // }
    // //  }
    // //  else if(weight){
    // //   if(weightType=="Kg"){
    // //      let valueKg = weight ;
    // //      console.log(valueKg);
    // //      return valueKg ; 
    // //   }
    // //  else if(weightType=="Ib"){
    // //      let valueIb = weight / 2.2;
    // //      console.log(Ib);
    // //      return valueIb ; 
    // //   }
    // //   else{
    // //   return this.form.bmi  ;
    // // }

    // //  }
    // ////////////////////////////////
    
    //    if(heightType=="Inch" && weightType=="Ib" ){
    //     console.log(heightType)
    //     console.log(height)
    //     let hightcm = height/100;
    //     let bmi = (weight /((hightcm * hightcm)*703))
    //     console.log(bmi)
    //     return this.form.bmi =  Math.round(bmi) ;
    //   }
    //  else if(heightType=="Cm" && weightType=="Kg" ){
    //      console.log(heightType)
    //       console.log(height)
    //       let hightcm = height/100;
    //       let bmi = (weight /(hightcm * hightcm ))
    //       console.log(bmi)
    //       return this.form.bmi =  Math.round(bmi) ;
    //  }
    // else{
    //   return this.form.bmi ;
    // }

    // },
    ////////////////////////////
    // getResultHightWeight(){
    //   if(this.form.height.selection.value == "Inch" && this.form.weight.selection.value == "Ib" ){
    //     console.log(this.form.height.selection.value);
    //     console.log(this.form.height.value);
    //     let hightcm = this.form.height.value/100;
    //     let bmi = (this.form.weight.value /((hightcm * hightcm)*703));
    //     console.log(bmi);
    //     return this.form.bmi =  Math.round(bmi) ;
    //   }
    //  else if(this.form.height.selection.value == "Cm" && this.form.weight.selection.value == "Kg" ){
    //      console.log(this.form.height.selection.value )
    //       console.log(this.form.height.value)
    //       let hightcm = this.form.height.value/100;
    //       let bmi = (this.form.weight.value /(hightcm * hightcm ))
    //       console.log(bmi)
    //       return this.form.bmi =  Math.round(bmi) ;
    //  }
    // else{
    //   return this.form.bmi ;
    // }
    // },
  

    /////////////////////
    getBeatsResult(bmi) {
      // ps : age in months //
    if(bmi){
        if(bmi<16){
          return {status: 'danger', message:"Severe Thickness"};
        }
        else if (bmi >=16 && bmi <= 16.9) {
          return {status: 'success', message:" Moderate Thickness"};
        }
        else if (bmi >= 17 && bmi <= 18.4) {
          return {status: 'danger', message:"Mild Thickness"};
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
          return {status: 'success', message:"Normal"};
        }
        else if (bmi >= 25 && bmi <= 29.9) {
          return {status: 'danger', message:"OverWeight"};
        }
        else if (bmi >= 30 && bmi <= 34.9) {
          return {status: 'danger', message:"Obesity Class1"};
        }
        else if (bmi >= 38 && bmi <= 39.9) {
          return {status: 'danger', message:"Obesity Class2"};
        }
        else if (bmi >= 40 ) {
          return {status: 'danger', message:" Extrem Obesity "};
        }
    
        else{
          return {status: 'danger', message:"Please Enter Height and Weight Correctly!!"}
        }
    
    }
    else if (bmi >= 1 && bmi <= 15 ) {
      return {status: 'danger', message:" Please Enter Height and Weight Correctly !!"};
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