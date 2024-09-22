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
        <!-- /////////// Buttons///////////// -->
      <div class="d-flex justify-content-center align-items-center">
        <div class="">
         <button  @click="displayContentRandom" class="btn btn-pill" :class="contentRandom? 'btn-success-gradient':'btn-outline'"> {{$t('form.random.value')}}</button>
        </div>
        <div class="">
         <button @click="displayContentFasting" class="btn btn-pill"  :class="contentFasting? 'btn-success-gradient':'btn-outline'"> {{$t('form.fasting.value')}} </button>
        </div>
        <div class="">
         <button @click="displayContentA1C" class="btn btn-pill"     :class="contentA1C? 'btn-success-gradient':'btn-outline'"> {{$t('form.a1c.value')}}</button>
        </div>
        <div class="">
         <button @click="displayContentGlucose" class="btn btn-pill"   :class="contentGlucose?  'btn-success-gradient':'btn-outline'"> {{$t('form.glucose.value')}}</button>
        </div>
      </div>
        <!-- /////////////contentRandom/////////// -->
        <div  v-if="contentRandom"  class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="" class="form-label">{{$t('form.random.label')}}</label>
              <input 
                  type="number" 
                  :placeholder="$t('form.random.placeholder')" 
                  v-model="form.random"
                  class="form-control" 
              >
            </div>
          </div>
          <Divider></Divider>
          <div class=" table-responsive">
            <table class="table table-borderless text-nowrap mb-0">
              <tbody>
                <tr>
                  <td>{{$t('form.reference.title')}}</td>
                  <td class="fw-bold text-success">{{$t('form.reference.valueRandom')}}</td>
                </tr>
                <tr>
                  <td>{{$t('form.reference.result')}}</td>
                  <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResultRandom(form.random).status) }">{{getBeatsResultRandom(form.random).message}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- /////////////contentFasting/////////// -->
        <div  v-if="contentFasting"  class="row">
            <div class="col-md-12">
              <div class="form-group">
                <label for="" class="form-label">{{$t('form.fasting.label')}}</label>
                <input 
                    type="number" 
                    :placeholder="$t('form.fasting.placeholder')" 
                    v-model="form.fasting"
                    class="form-control" 
                >
              </div>
            </div>
            <Divider></Divider>
            <div class=" table-responsive">
              <table class="table table-borderless text-nowrap mb-0">
                <tbody>
                  <tr>
                    <td>{{$t('form.reference.title')}}</td>
                    <td class="fw-bold text-success">{{$t('form.reference.valueFasting')}}</td>
                  </tr>
                  <tr>
                    <td>{{$t('form.reference.result')}}</td>
                    <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResultFasting(form.fasting).status) }">{{getBeatsResultFasting(form.fasting).message}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
            <!-- /////////////contentA1C/////////// -->
        <div  v-if="contentA1C"  class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="" class="form-label">{{$t('form.a1c.label')}}</label>
              <input 
                  type="number" 
                  :placeholder="$t('form.a1c.placeholder')" 
                  v-model="form.a1c"
                  class="form-control" 
              >
            </div>
          </div>
          <Divider></Divider>
          <div class=" table-responsive">
            <table class="table table-borderless text-nowrap mb-0">
              <tbody>
                <tr>
                  <td>{{$t('form.reference.title')}}</td>
                  <td class="fw-bold text-success">{{$t('form.reference.valueA1c')}}</td>
                </tr>
                <tr>
                  <td>{{$t('form.reference.result')}}</td>
                  <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResultA1C(form.a1c).status) }">{{getBeatsResultA1C(form.a1c).message}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
            <!-- /////////////contentGlucose////////glucose/// -->
        <div v-if="contentGlucose"  class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="" class="form-label">{{$t('form.glucose.label')}}</label>
              <input 
                  type="number" 
                  :placeholder="$t('form.glucose.placeholder')" 
                  v-model="form.glucose"
                  class="form-control" 
              >
            </div>
          </div>
          <Divider></Divider>
          <div class="table-responsive">
            <table class="table table-borderless text-nowrap mb-0">
              <tbody>
                <tr>
                  <td>{{$t('form.reference.title')}}</td>
                  <td class="fw-bold text-success">{{$t('form.reference.valueGlucose')}}</td>
                </tr>
                <tr>
                  <td>{{$t('form.reference.result')}}</td>
                  <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResultGlucose(form.glucose).status) }">{{getBeatsResultGlucose(form.glucose).message}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
     
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/Diabetes.json"></i18n>
<script>
import EditDialog from '@/components/global/utilities/EditDialog.vue';
import Divider from "@/components/global/utilities/Divider.vue";

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
      contentRandom:true,
      contentFasting:false,
      contentA1C:false,
      contentGlucose:false,
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
    },
  },
  mounted() {
    
  },

  methods: {

    displayContentRandom(){
      this.contentRandom = true;
      this.contentFasting = false;
      this.contentA1C = false;
      this.contentGlucose = false;
    },
    displayContentFasting(){
      this.contentFasting = true;
      this.contentRandom  = false;
      this.contentA1C = false;
      this.contentGlucose = false;
    },
    displayContentA1C(){
      this.contentFasting = false;
      this.contentA1C = true;
      this.contentRandom  = false;
      this.contentGlucose = false;
    },
    displayContentGlucose(){
      this.contentA1C = false;
      this.contentGlucose = true;
      this.contentRandom  = false;
      this.contentFasting = false;
    },
    ////////random////////
    getBeatsResultRandom(random) {
      // ps : age in months //
      if(random){
          if (random <= 70) {
            return {status: 'danger', message:"Hypoglycemia"};
          }
         else if (random  >= 71 && random  <= 140) {
          return {status: 'success', message:"Normal"};
         }
         else if (random  >= 141 && random  <= 199) {
          return {status: 'danger', message:"Prediabetic"};
         }
         else if (random  >= 200 ) {
          return {status: 'danger', message:"Hyperglycemia"};
         }
          else{
            return {status: 'danger', message:"!!!!!!!!!!!!!!!!!"}
          }
        }
      
      else {
        return {status: '', message:""};
      }
    },
    ////////getBeatsResultFasting///////
    getBeatsResultFasting(fasting) {
      // ps : age in months //
      if(fasting){
          if (fasting <= 0 && fasting <= 89) {
            return {status: 'danger', message:"Hypoglycemia"};
          }
         else if (fasting  >= 90 && fasting  <= 99) {
          return {status: 'success', message:"Normal"};
         }
         else if (fasting  >= 100 && fasting  <= 125) {
          return {status: 'danger', message:"Prediabetic"};
         }
         else if (fasting  >= 126 ) {
          return {status: 'danger', message:"Hyperglycemia"};
         }
          else{
            return {status: 'danger', message:"!!!!!!!!!!!!!!!!!"}
          }
        }
      
      else {
        return {status: '', message:""};
      }
    },
    ////////getBeatsResultFasting///////
    getBeatsResultA1C(a1c) {
      if(a1c){
          if (a1c <= 0 && a1c <= 4.9) {
            return {status: 'danger', message:"Hypoglycemia"};
          }
         else if (a1c  >= 5 && a1c  <= 5.5) {
          return {status: 'success', message:"Normal"};
         }
         else if (a1c  >= 5.8 && a1c  <= 6.4) {
          return {status: 'danger', message:"Prediabetic"};
         }
         else if (a1c  >= 6.5 ) {
          return {status: 'danger', message:"Hyperglycemia"};
         }
          else{
            return {status: 'danger', message:"!!!!!!!!!!!!!!!!!"}
          }
        }
      
      else {
        return {status: '', message:""};
      }
    },
    ////////getBeatsResultGlucose///////
    getBeatsResultGlucose(glucose) {
      if(glucose){
          if (glucose <= 130 ) {
            return {status: 'danger', message:"Hypoglycemia"};
          }
         else if (glucose  >= 130 && glucose  <= 140) {
          return {status: 'success', message:"Normal"};
         }
         else if (glucose  >= 141 && glucose  <= 199) {
          return {status: 'danger', message:"Prediabetic"};
         }
         else if (glucose  >= 200 ) {
          return {status: 'danger', message:"Hyperglycemia"};
         }
          else{
            return {status: 'danger', message:"!!!!!!!!!!!!!!!!!"}
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
  table{
    .result-msg{
      color: white;
      border-radius:2rem;
    }
  }
</style>