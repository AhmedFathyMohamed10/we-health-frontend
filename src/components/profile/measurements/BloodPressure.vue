<template>
  <div class="pulse-rate">
    <div class="pulse-rate-header d-flex justify-content-between align-items-center">
      <div class="d-flex gap-2 align-items-center">
        <h4 class="mb-0"><i class="pi pi-filter-fill fs-2 text-success-gradient"></i></h4>
        <h4 class="mb-0">{{$t("header.title")}}</h4>
      </div>
    </div>
    <Divider></Divider>
    <!-- {{ data }} -->
    <div v-if="data.count>0">
      <div v-if="chartOnly&&chartData">
        <Chart type="line" :data="chartData" :options="fullyChartOptions"  :height="100"  :width="200" />
      </div>
      
      <div v-else class="d-flex justify-content-start align-items-center w-100">
        <div class="pulse-rate-form flex-grow-1 w-40" v-if="last">
          <LastResultNote
            :labelLast="$t('last')"
            :last="last.systolic +'/'+last.diastolic"
            :labelNote="$t('form.note.label')"
            :note="last.Note"
          >
         </LastResultNote>
         
     
        </div>
        <div class="blood-pressure-chart w-60" v-if="chartData">
          <Base>
            <div class="d-flex justify-content-center align-items-center" >
              <Chart type="line" :data="chartData" :options="miniChartOptions" :height="100" :width="100" />
           </div>
          </Base>  
        </div>
      </div>
    </div>
    <div v-else>
      <NoResults></NoResults>
    </div>
    <div class="text-center mt-3">
      <button class="btn btn-pill btn-secondary-gradient w-50" @click.prevent="openDetailsDialog">
      {{$t('view')}}
      </button>
    </div>
    <DetailsDialog :display="displayDetailsDialog" @hide="closeDetailsDialog" :header="$t('header.title')" :maximizable="true">
        <div class="pulse-rate-toggler d-flex gap-3 justify-content-between">
          <div class="">
            <h4><i class="pi pi-filter-fill fs-2 text-success-gradient"></i></h4>
          </div>
          <div class="">
            <button class="btn btn-pill btn-secondary-gradient" @click.prevent="toggleView">
              {{ view=='report'?$t('chart'):$t("report") }}
            </button>
          </div>
        </div>
        <div class="report-view" v-if="view=='report'">
          <div class="table-wrapper my-2" v-if="reportData.length > 0">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">{{ $t("form.beats.label") }}</th>
                    <th scope="col">{{ $t("form.note.label") }}</th>
                    <th scope="col">{{ $t("Date") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in reportData" :key="index">
                    <td class="align-middle">{{ calculateTableIndexing(index) }}</td>
                    <td class="align-middle">
                      <span>{{ val.beats }}</span>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.Note }}</span>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.created_at }}</span>
                    </td>
                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <EditButton class="me-2" @edit="openUpdate(val, index)"></EditButton>
                        <DeleteButton @delete="openDeleteDialog(val.id)"></DeleteButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div :dir="[locale == 'ar' ? 'ltr' : '']">
            <Paginator
              :first.sync="pagination.offset"
              :rows.sync="pagination.rows"
              :totalRecords="totalRecords"
              :rowsPerPageOptions="pagination.rowsOptions"
              @page="onPage($event)"
            ></Paginator>
          </div>
        </div>
        <div class="chart-view" v-else>
            <div class="row">
              <div class="pulse-rate-chart">
               <Chart type="line" :data="chartData" :options="fullyChartOptions"  :height="400" />
              </div>
            </div>
            <div class="content">
              <Divider></Divider>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                  <label for="" class="form-label">{{$t('form.systolic.label')}}</label>
                  <input 
                      type="number" 
                      :placeholder="$t('form.systolic.placeholder')" 
                      v-model="form.systolic"
                      class="form-control" 
                      :class="{'is-invalid':$v.form.systolic.$error}"
                  >
                  <div v-if="$v.form.systolic.$error && !$v.form.systolic.required " class="invalid-feedback">
                    {{requiredError($t('form.systolic.label'))}}
                  </div>
                  <div v-else-if="$v.form.systolic.$error && !$v.form.systolic.numeric" class="invalid-feedback">
                    {{numericError($t('form.systolic.label'))}}
                  </div>
                  <div v-else-if="$v.form.systolic.$error && !$v.form.systolic.maxValue" class="invalid-feedback">
                    {{maxValueError($t('form.systolic.label'), $v.form.systolic.$params.maxValue.max)}}
                  </div>
                </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="" class="form-label">{{$t('form.diastolic.label')}}</label>
                    <input 
                        type="number" 
                        :placeholder="$t('form.diastolic.placeholder')" 
                        v-model="form.diastolic"
                        class="form-control" 
                        :class="{'is-invalid':$v.form.diastolic.$error}"
                    >
                    <div v-if="$v.form.diastolic.$error && !$v.form.diastolic.notContainsHtmlTags" class="invalid-feedback">
                      {{htmlTagsError($t('form.diastolic.label'))}}
                    </div>
                    <div v-if="$v.form.diastolic.$error && !$v.form.diastolic.maxLength" class="invalid-feedback">
                      {{maxLengthError($t('form.diastolic.label'), $v.form.diastolic.$params.maxLength.max)}}
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-12">
                  <button  @click="addForm" class="btn btn-icon rounded-circle btn-success-gradient" >
                    <i class="fa fa-plus fa-md"></i>
                  </button>
                </div>
              </div>
            </div>
          
           <Divider></Divider>
      <!-- {{ form }} -->
          <div class="pulse-rate-result table-responsive">
            <table class="table table-borderless text-nowrap mb-0">
              <tbody>
                <tr>
                  <td>{{$t('reference.title')}}</td>
                  <td class="fw-bold text-success">{{$t('reference.value')}}</td>
                  <!-- <td class="fw-bold text-success"> {{test()}}</td> -->
                </tr>
                <tr>
                  <!-- :style="{ background: gradientBg(getBeatsResult(form.systolic,form.diastolic,age).status) }" -->
                  <td>{{$t('reference.result')}}</td>
                  <!-- <td class="result-msg fw-bold text-center"> {{getBeatsResult(form.systolic,form.diastolic,age)}}</td> -->
                  <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResult(form.systolic,form.diastolic,age).status) }"> {{getBeatsResult(form.systolic,form.diastolic,age)["message"]}}</td>
                </tr>
              </tbody>
            </table>
          </div>


        </div>
        
    </DetailsDialog>
    <DeleteDialog
      :display="displayDeleteDialog"
      @cancel="closeDeleteDialog"
      @delete="deleteRecord"
      :isLoading="deleteLoading"
    />
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/BloodPressure.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import Divider from "@/components/global/utilities/Divider.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import LastResultNote from './customNote/LastResultNote.vue'

////////////////////////////////////////////
import {htmlTagsError,maxLengthError,requiredError,maxValueError, numericError} from "@/validation/errors";
import {maxLength,numeric,required,maxValue} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";

import { mapGetters,mapActions  } from 'vuex'
import toast from "@/mixins/global/toast";
import pagination from "@/mixins/global/pagination";
export default {
  name:"BloodPressure",
  mixins:[pagination,toast],
  props:{
    data:{
      type:Object,
    },
    chartOnly:{
      type:Boolean,
      default(){
        return false;
      },
    },
  },
  components:{
    Base,
    Divider,
    NoResults,
    LastResultNote,
    EditButton,
    DeleteButton,
    DetailsDialog,
    DeleteDialog,
  },
  data() {
    return {
      displayDetailsDialog:false,
      view:'chart', 
      miniChartOptions: {
          plugins: {
              datalabels:false,
              legend: {
                  display:false,
              }
          },
          scales: {
              x: {
                display: false,
                grid: {
                    display: false,
                }
              },
              y: {
                  display: false,
                  grid: {
                    display: false
                  }
              }
          },
          elements: {
            point: {
              radius: 0
            },
            line:{
              fill: false,
              tension:0.4
            }
          },
      },
      fullyChartOptions: {
          maintainAspectRatio:false,
          responsive: true,
          plugins: {
              datalabels:false,
              legend: {
                  display:false,
              }
          },
          scales: {
              x: {
                display: true,
                grid: {
                    display: true,
                }
              },
              y: {
                  display: true,
                  grid: {
                    display: true
                  }
              }
          },
          elements: {
            point: {
              radius: 0
            },
            line:{
            fill:true,
            backgroundColor: 'rgba(255,167,38,0.2)',
            tension:0.4,
            }
          },
      },
      ////////////////////
      displayForm:false,
      form:{
        systolic:"",
        diastolic: "",
      },
      isUpdating:false,
      /////////////////
      displayDeleteDialog:false,
      recordId:null,
    };
  },
  computed:{
    age(){
      return 217 ; // 216 month = 18 years 
    },
    /////////////////////
    ...mapGetters("measurements/BloodPressure", {
      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",

      getDeleteResponse: "getDeleteResponse",
      deleteLoading: "getDeleteLoading",
      getDeleteError: "getDeleteError",
    }),
    last(){
      if(this.data){
        if(this.data.data.length){
          return this.data.data[0]
        }
        else{
          return null
        }
      }
      else{
        return null
      }
    },
    list(){
      if(this.data)
        return this.data.data
      else return []
    },
    totalRecords(){
      if(this.data)
        return this.data.count
      else return 0
    },
    reportData(){
      if(this.list.length)
        return this.list.slice(this.pagination.offset,this.pagination.rows*(this.pagination.pageNumber+1))
      else return []
    },
    chartData(){
      const beats = this.list.map((item) => item.beats);
      const dates = this.list.map((item) => item.created_at);
      if(beats.length>0 && dates.length>0){
        return {
          labels: dates,
          datasets:[
            {
              label: 'Beats History',
              data:beats,
              borderColor: '#FFA726',
            }
          ],
        }
      }
      else return null;
    },

    upsertResponse: {
      get() {
        return this.getUpsertResponse;
      },
      set(value) {
        this.setUpsertResponse(value);
      },
    },
    upsertError: {
      get() {
        return this.getUpsertError;
      },
      set(value) {
        this.setUpsertError(value);
      },
    },
    
    deleteResponse: {
      get() {
        return this.getDeleteResponse;
      },
      set(value) {
        this.setDeleteResponse(value);
      },
    },
    deleteError: {
      get() {
        return this.getDeleteError;
      },
      set(value) {
        this.setDeleteError(value);
      },
    },
  },
  validations: {
    form:{
      systolic: {
        required,
        numeric,
        maxValue: maxValue(220),
      },
      diastolic: {
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
        },
      }
    },
  },
  methods: {
    htmlTagsError,
    maxLengthError,
    requiredError,
    maxValueError,
    numericError,
    //////////////////
    getBeatsResult(systolic,diastolic,age){
      if(systolic&&diastolic&&age){
            if(age>0 && age<=3){
              if( (systolic < 45) && (diastolic < 65) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }
              else if( (systolic >= 65 && systolic <= 85) && (diastolic >= 45 && diastolic <= 55) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 85 && diastolic > 55)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>3 && age<=6){
              if( (systolic < 70) && (diastolic < 50) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 70 && systolic <= 90) && (diastolic >= 50 && diastolic <= 65) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 90 && diastolic > 65)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>6 && age<=12){
              if( (systolic < 80) && (diastolic < 55) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 80 && systolic <= 100) && (diastolic >= 55 && diastolic <= 65) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 100 && diastolic > 65)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>12 && age<=36){
              if( (systolic < 90) && (diastolic < 55) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 90 && systolic <= 105) && (diastolic >= 55 && diastolic <= 70) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 105 && diastolic > 70)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>36 && age<=72){
              if( (systolic < 95) && (diastolic < 60) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 95 && systolic <= 110) && (diastolic >= 60 && diastolic <= 75) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 110 && diastolic > 75)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>72 && age<=144){
              if( (systolic < 100) && (diastolic < 60) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 100 && systolic <= 120) && (diastolic >= 60 && diastolic <= 75) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 120 && diastolic > 75)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>144 && age<=216){
              if( (systolic < 110) && (diastolic < 65) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 110 && systolic <= 120) && (diastolic >= 60 && diastolic <= 80) ){
                return {status: 'success', message:"Normal"};
              }else if( systolic > 110 && diastolic > 65)  {
                return {status: 'danger', message:"Hypertenstion"};
              }else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
            else if(age>216){
              if( (systolic < 110) && (diastolic < 65) ){
                return ({status: 'danger', message:"Hypotenstion"});
              }else if( (systolic >= 110 && systolic <= 120) && (diastolic >= 60 && diastolic <= 80) ){
                return {status: 'success', message:"Normal"};
              }else if( (systolic >= 121 && systolic <= 134) && (diastolic >= 81 && diastolic <= 84))  {
                return {status: 'danger', message:"Hypertenstion Stage 1"};

              }
              else if( (systolic >= 135 && systolic <= 139) && (diastolic >= 85 && diastolic <= 89))  {
                return {status: 'danger', message:"Hypertenstion Stage 2"};

              }
              else if( (systolic >= 140 && systolic < 180) && (diastolic >= 90 && diastolic <= 120))  {
                return {status: 'danger', message:"Hypertenstion "};

              }
              else if( systolic >= 180 && diastolic >= 120 )  {
                return {status: 'danger', message:"Hypertenstion CRISIS "};

              }
              else {
                return {status: 'danger', message:"Please Slow Down Immediately !!"};
              }
            }
           else{return  {status: 'danger', message:"Please Slow Down Immediately !!"}}
         
      }
      else{   
        return ({status: '', message:""});
      } 
  
    },
   gradientBg(status) {
      if (status === 'success') {
        return ' linear-gradient(to right, rgba(86, 197, 150, 0.82), rgba(86, 197, 150, 0.50), rgba(86, 197, 150, .30))';
        // return 'linear-gradient(0.25turn,#56C596,#fff)';
      } else if (status === 'warning') {
        return 'linear-gradient(to right, #FEC300, #96c93d)';
      } else if (status === 'danger') {
        // return ' linear-gradient(to right, rgba(86, 197, 150, 0.62), rgba(86, 197, 150, 0.30), rgba(86, 197, 150, .20))';
        return ' linear-gradient(to right, rgba(255, 0, 0, 0.50), rgba(186, 0,0, 0.30), rgba( 128,0,0, .0))';
      }  else {
        return 'none';
      }
      
    },
    ////////////////////////////////////
    addForm(){
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.resetForm();
      }
    },
  
    ///////////////////////
    toggleView(){
      if(this.view==='chart')
        this.view='report';
      else
        this.view='chart';
    },
    ...mapActions("measurements/BloodPressure",
    ["setUpsertResponse","setUpsertError","setDeleteResponse","setDeleteError","setStatusResponse","setStatusError"]),
    /////////////////////////////////////////
    closeDetailsDialog(){
      this.displayDetailsDialog = false;
    },
    openDetailsDialog() {
      this.displayDetailsDialog = true;
    },
    ////////// UPSERT ///////////////////
    openForm() {
      this.displayForm=true;
    },
    closeForm() {
      this.displayForm=false;
    },
    openUpdate(item){
      this.isUpdating=true;
      this.form={...item};
      this.openForm();
    },
    resetForm(){
      this.form = {systolic:"",diastolic: "",};
      // this.closeForm();
      this.upsertResponse=null;
      this.upsertError=null;
    },
    create(){
      this.$store.dispatch("measurements/BloodPressure/create", this.form)
      .then((res) => {
        // console.log(res)
        this.resetForm();
        const summery = res.statusText; 
        const details =  res.data.message;
        this.successToast(summery,details)
      })
      .catch((err) => {
        // console.log(err)
        const summery = err.statusText; 
        const details =  err.data.message;
        this.errorToast(summery,details)
      })
    },
    update(){
      this.$store.dispatch("measurements/BloodPressure/update", this.form)
      .then((res) => {
        // console.log(res)
        this.resetForm();
        const summery = res.statusText; 
        const details =  res.data.message;
        this.successToast(summery,details)
      })
      .catch((err) => {
        // console.log(err)
        const summery = err.statusText; 
        const details =  err.data.message;
        this.errorToast(summery,details)
      })
      .finally(() =>{
        this.isUpdating = false;
      });
    },
    upsert() {
      if(this.isUpdating){
        this.update();
      }
      else {
        this.create();
      }
    },
    /////////// DELETE /////////////
    openDeleteDialog(id) {
      this.recordId=id;
      this.displayDeleteDialog = true;
    },
    closeDeleteDialog() {
      this.recordId=null;
      this.displayDeleteDialog = false;
    },
    deleteRecord() {
      this.$store.dispatch("measurements/BloodPressure/delete", this.recordId)
      .then((res) => {
        // console.log(res)
        const summery = res.statusText; 
        const details =  res.data.message;
        this.successToast(summery,details)
      })
      .catch((err) => {
        // console.log(err)
        const summery = err.statusText; 
        const details =  err.data.message;
        this.errorToast(summery,details)
      })
      .finally(() => {
        this.closeDeleteDialog();
      });
    },
    onPage(event) {
      // this.isPaginating= true;
      this.pagination.pageNumber = event.page;
      // this.list();
    },
  },
};
</script>

<style lang="scss" scoped>
.result-msg{
  border-radius:2rem; 
}

</style>
