<template>
  <div class="pulse-rate">
    <div class="pulse-rate-header d-flex justify-content-between align-items-center">
      <div class="d-flex gap-2 align-items-center">
        <h4 class="mb-0"><i class="pi pi-tablet fs-2 text-success-gradient"></i></h4>
        <h4 class="mb-0"> {{$t('header.title')}}</h4>
      </div>
  
    </div>
    <Divider></Divider>
    <!-- {{ data }} -->
    <div v-if="data.count>0">
      <div v-if="chartOnly&&chartData">
        <Chart type="line" :data="chartData" :options="fullyChartOptions" :height="100" :width="200"  />
      </div>
      
      <div v-else class="d-flex justify-content-start align-items-center w-100">
        <div class="pulse-rate-form flex-grow-1 w-40" v-if="last">
          <div class="form-group">
            <LastResultNote
            :labelLast="$t('last')"
            :last="last.diabetes"
            :labelNote="$t('form.note.label')"
            :note="last.Note"
          >
         </LastResultNote>
        </div>
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
        <div class="pulse-rate-toggler d-flex gap-3 justify-content-between ">
          <div class="">
            <h4><i class="pi pi-tablet fs-2 text-success-gradient"></i></h4>
          </div>
          <div class="">
            <button class="btn btn-pill btn-secondary-gradient" @click.prevent="toggleView">
              {{ view=='report'?$t('chart'):$t('report') }}
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
              <!-- /////////// Buttons///////////// -->
          <div class="d-flex justify-content-center align-items-center flex-wrap">
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
          <Divider></Divider>
         <div class="row">
          <div class="col-md-12">
            <div class="pulse-rate-chart">
              <Chart type="line" :data="chartData" :options="fullyChartOptions" :height="200" :width="100"   />
            </div>
          </div>
          </div>
              <!-- /////////////contentRandom/////////// -->
          <div  v-if="contentRandom"  >
            <Divider></Divider>
             <div class="row">
              <div class="col-md-8">
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
            <div class="col-md-4 my-5">
              <!-- <label for="" class="form-label invisible">{{$t('form.beats.label')}}</label> -->
              <button  @click="addForm" class="btn btn-icon rounded-circle btn-success-gradient my-2" >
                <i class="fa fa-plus fa-md"></i>
              </button>
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
                    <td ><span class="result-msg fw-bold text-start text-white px-3 py-1" :style="{ background: gradientBg(getBeatsResultRandom(form.random).status) }">{{getBeatsResultRandom(form.random).message}}</span></td>

                    <!-- <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResultRandom(form.random).status) }">{{getBeatsResultRandom(form.random).message}}</td> -->
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- /////////////contentFasting/////////// -->
          <div  v-if="contentFasting"  >
            <Divider></Divider>
            <div class="row">
              <div class="col-md-8">
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
              <div class="col-md-4 my-5">
              <!-- <label for="" class="form-label invisible">{{$t('form.beats.label')}}</label> -->
              <button  @click="addForm" class="btn btn-icon rounded-circle btn-success-gradient my-2" >
                <i class="fa fa-plus fa-md"></i>
              </button>
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
                    <td ><span class="result-msg fw-bold text-start text-white px-3 py-1" :style="{ background: gradientBg(getBeatsResultFasting(form.fasting).status) }">{{getBeatsResultFasting(form.fasting).message}}</span></td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
              <!-- /////////////contentA1C/////////// -->
          <div  v-if="contentA1C"  >
            <Divider></Divider>
             <div class="row">
              <div class="col-md-8">
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
              <div class="col-md-4 my-5">
                <!-- <label for="" class="form-label invisible">{{$t('form.beats.label')}}</label> -->
                <button  @click="addForm" class="btn btn-icon rounded-circle btn-success-gradient my-2" >
                  <i class="fa fa-plus fa-md"></i>
                </button>
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

                    <td ><span class="result-msg fw-bold text-start text-white px-3 py-1" :style="{ background: gradientBg(getBeatsResultA1C(form.a1c).status) }">{{getBeatsResultA1C(form.a1c).message}}</span></td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
              <!-- /////////////contentGlucose////////glucose/// -->
          <div v-if="contentGlucose" >
            <Divider></Divider>
             <div class="row">
              <div class="col-md-8">
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
              <div class="col-md-4 my-5">
                <!-- <label for="" class="form-label invisible">{{$t('form.beats.label')}}</label> -->
                <button  @click="addForm" class="btn btn-icon rounded-circle btn-success-gradient my-2" >
                  <i class="fa fa-plus fa-md"></i>
                </button>
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
                    <td ><span class="result-msg fw-bold text-start text-white px-3 py-1" :style="{ background: gradientBg(getBeatsResultGlucose(form.glucose).status) }">{{getBeatsResultGlucose(form.glucose).message}}</span></td>

                    <!-- <td class="result-msg fw-bold text-center" :style="{ background: gradientBg(getBeatsResultGlucose(form.glucose).status) }">{{getBeatsResultGlucose(form.glucose).message}}</td> -->
                  </tr>
                </tbody>
              </table>
            </div>
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
<i18n src="@/lang/profile/measurements/Diabetes.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import Divider from "@/components/global/utilities/Divider.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import LastResultNote from './customNote/LastResultNote.vue'

import { mapGetters,mapActions  } from 'vuex'
import toast from "@/mixins/global/toast";
import pagination from "@/mixins/global/pagination";
export default {
  name:"Diabetes",
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
    EditButton,
    DeleteButton,
    DetailsDialog,
    DeleteDialog,
    LastResultNote,
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
      ///////////////////////
      contentRandom:true,
      contentFasting:false,
      contentA1C:false,
      contentGlucose:false,
      ////////////////////
      displayForm:false,
      form:{
        random:"",
        fasting: "",
        a1c: "",
        glucose: "",
      },
      isUpdating:false,
      /////////////////
      displayDeleteDialog:false,
      recordId:null,
    };
  },
  computed:{
    ...mapGetters("measurements/Diabetes", {
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
  validations: { },
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
    //////////////////////////////
    toggleView(){
      if(this.view==='chart')
        this.view='report';
      else
        this.view='chart';
    },
    ...mapActions("measurements/Diabetes",
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
      this.form = { 
       random:"",
        fasting: "",
        a1c: "",
        glucose: "",
      };
      this.closeForm();
      this.upsertResponse=null;
      this.upsertError=null;
    },
    create(){
      this.$store.dispatch("measurements/Diabetes/create", this.form)
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
      this.$store.dispatch("measurements/Diabetes/update", this.form)
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
      this.$store.dispatch("measurements/Diabetes/delete", this.recordId)
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
