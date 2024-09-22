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
        <!-- ///////////Buttons///////////// -->
      <div class="d-flex justify-content-center align-items-center">
        <div class="">
         <button  @click="displayContentSpo2" class="btn btn-pill" :class="contentSpo2? 'btn-success-gradient':'btn-outline'"> {{ $t('form.spo2.value') }}</button>
        </div>
        <div class="">
         <button @click="displayContentBreathing" class="btn btn-pill"  :class="contentBreathing? 'btn-success-gradient':'btn-outline'"> {{ $t('form.breathing.value') }}</button>
        </div>
      </div>
      <!-- /////////////content Spo2/////////// -->
      <div  v-if="contentSpo2"  class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label for="" class="form-label">{{$t('form.spo2.label')}}</label>
            <input 
                type="number" 
                :placeholder="$t('form.spo2.placeholder')" 
                v-model="form.spo2"
                class="form-control" 
            > 
          </div>
        </div>
        <Divider></Divider>
        <div class="pulse-rate-result table-responsive">
          <table class="table table-borderless text-nowrap mb-0">
            <tbody>
              <tr>
                <td>{{$t("form.reference.title")}}</td>
                <td class="fw-bold text-success">{{$t("form.reference.valueSpo2")}}</td>
              </tr>
              <tr>
                <td>{{$t("form.reference.result")}}</td>
                <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResult(form.spo2).status) }">{{getBeatsResult(form.spo2).message}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
       <!-- /////////////content Breathing/////////// -->
       <div  v-if="contentBreathing"  class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label for="" class="form-label">{{$t('form.breathing.label')}}</label>
              <input 
                  type="number" 
                  :placeholder="$t('form.breathing.placeholder')" 
                  v-model="form.breathing"
                  class="form-control" 
              >
            </div>
          </div>
          <Divider></Divider>
          <div class="pulse-rate-result table-responsive">
            <table class="table table-borderless text-nowrap mb-0">
              <tbody>
                <tr>
                  <td>{{$t("form.reference.title")}}</td>
                  <td class="fw-bold text-success">{{$t("form.reference.valueBreathing")}}</td>
                </tr>
                <tr>
                  <td>{{$t("form.reference.result")}}</td>
                  <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResultBreathing(form.breathing,age).status) }">{{getBeatsResultBreathing(form.breathing,age).message}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
     
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/OxygenLevel.json"></i18n>
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
      contentSpo2:true,
      contentBreathing:false,
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
    displayContentSpo2(){
    this.contentSpo2 = true;
    this.contentBreathing = false;
    },
    displayContentBreathing(){
    this.contentBreathing = true;
    this.contentSpo2 = false;

    },
    /////////////contentspo2////////////
    getBeatsResult(spo2) {
      // ps : age in months //
      if(spo2){
          if (spo2 > 0 && spo2 <= 70 ) {
            return {status: 'danger', message:"Acute Danger"};
          }
          else if (spo2 >= 98 && spo2 <= 100) {
            return {status: 'success', message:"Normal"};
          }
          else if (spo2 >= 95 && spo2 <= 97) {
            return {status: 'danger', message:"Insufficient"};
          }
          else if (spo2 >= 90 && spo2 <= 94) {
            return {status: 'danger', message:"Decreased"};
          }
          else if (spo2 > 80 && spo2 < 90) {
            return {status: 'danger', message:"Critical"};
          }
          else if (spo2 > 70 && spo2 < 80) {
            return {status: 'danger', message:"Severe Hypoxia"};
          }
          else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
       
 
      }
      else {
        return {status: '', message:""};
      }
    },
    ////////////contentBreathing/////////////////
    getBeatsResultBreathing(spo2,age) {
      // ps : age in months //
      if(spo2&&age){
        if(age>0 &&age<=5){
          if (spo2 < 100) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (spo2 >= 100 && spo2 <= 160) {
            return {status: 'success', message:"Normal"};
          }else if (spo2 > 160 && spo2 < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>5 &&age<=12){
          if (spo2 < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (spo2 >= 80 && spo2 <= 150) {
            return {status: 'success', message:"Normal"};
          }else if (spo2 > 150 && spo2 < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>12 &&age<=36){
          if (spo2 < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (spo2 >= 80 && spo2 <= 130) {
            return {status: 'success', message:"Normal"};
          }else if (spo2 > 130 && spo2 < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>36 &&age<=60){
          if (spo2 < 80) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (spo2 >= 80 && spo2 <= 120) {
            return {status: 'success', message:"Normal"};
          }else if (spo2 > 120 && spo2 < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>60 &&age<=120){
          if (spo2 < 70) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (spo2 >= 70 && spo2 <= 110) {
            return {status: 'success', message:"Normal"};
          }else if (spo2 > 110 && spo2 < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>120 &&age<=216){
          if (spo2 < 60) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (spo2 >= 60 && spo2 <= 105) {
            return {status: 'success', message:"Normal"};
          }else if (spo2 > 105 && spo2 < 200) {
            return {status: 'danger', message:"Tachycardia"};
          }else {
            return {status: 'danger', message:"Please Slow Down Immediately !!"};
          }
        }
        else if(age>216){
          if (spo2 < 60) {
            return {status: 'danger', message:"Bradycardia"};
          }else if (spo2 >= 60 && spo2 <= 100) {
            return {status: 'success', message:"Normal"};
          }else if (spo2 > 100 && spo2 < 200) {
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
  table{
    .result-msg{
      color: white;
      border-radius:2rem;
    }
  }
</style>