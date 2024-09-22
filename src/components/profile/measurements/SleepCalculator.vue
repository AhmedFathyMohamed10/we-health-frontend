<template>
  <div class="pulse-rate">
    <div class="pulse-rate-header d-flex justify-content-between align-items-center">
      <div class="d-flex gap-2 align-items-center">
        <h4 class="mb-0"><i class="pi pi-fast-backward fs-2 text-success-gradient"></i></h4>
        <h4 class="mb-0">{{$t('header.title')}}</h4>
      </div>
    
    </div>
    <Divider></Divider>
    <div v-if="data.count>0">
      <div v-if="chartOnly&&chartData">
        <Chart type="line" :data="chartData" :options="fullyChartOptions" :width="200" :height="100" />
      </div>
      
      <div v-else class="d-flex justify-content-start align-items-center w-100">
        <div class="pulse-rate-form flex-grow-1 w-40" v-if="last">
          <LastResultNote
            :labelLast="$t('last')"
            :last="last.sleep"
            :labelNote="$t('form.note.label')"
            :note="last.Note"
          >
         </LastResultNote>
        </div>
        <div class="pulse-rate-chart w-60" v-if="chartData">
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
       <div class="row">
        <div class="col-md-12">
          <div class="pulse-rate-toggler d-flex gap-3 justify-content-between">
          <div class="">
            <h4><i class="pi pi-fast-backward fs-2 text-success-gradient"></i></h4>
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
                    <th scope="col">{{ $t("form.comment.label") }}</th>
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
                      <span>{{ val.comment }}</span>
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
            <div class="col-md-12">
              <div class="pulse-rate-chart">
                <Chart type="line" :data="chartData" :options="fullyChartOptions" :height="200" :width="100"  />
              </div>
            </div>
          </div>
          <div class="content">
            <Divider></Divider>
            <div class="row">
              <div class="col-md-6">
              <div class="form-group">
                  <label class="form-label my-0 ms-2" for="binary">{{$t('form.sleepDuration.label')}}</label>
                  <Calendar 
                      :showTime="true" 
                      v-model="selectedTimeSleep"
                      :timeOnly="true" 
                      :placeholder="$t('form.sleepDuration.placeholder')"
                      hourFormat="12" 
                      :timeFormat="timeFormat"
                      :class="{'p-invalid': $v.form.sleepDuration.$error}"
                  />
                  <small
                  class="p-invalid"
                      v-if="$v.form.sleepDuration.$error && !$v.form.sleepDuration.validTime"
                    >
                      {{ timeError($t("form.sleepDuration.label")) }}
                </small>
              </div>    
            </div>
            <div class="col-md-6">
              <div class="form-group">
              <label for="" class="form-label my-0 ms-2">{{$t('form.timeToFall.label')}}</label>
                  <Dropdown 
                    v-model="form.timeToFall" 
                    :options="timeToFallOptions" 
                    optionLabel="value" 
                    optionValue="value" 
                    :placeholder="$t('form.timeToFall.placeholder') " 
                  />
              </div>
            </div>
            </div>
           <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                  <label class="form-label my-0 ms-2" for="binary">{{$t('form.wakeUpTime.label')}}</label>
                  <Calendar 
                      :showTime="true" 
                      v-model="selectedTimeWake"
                      :timeOnly="true" 
                      :placeholder="$t('form.wakeUpTime.placeholder')"
                      hourFormat="12" 
                      :timeFormat="timeFormat"
                      :class="{'p-invalid': $v.form.wakeUpTime.$error}"
                  />
                  <small
                  class="p-invalid"
                      v-if="$v.form.wakeUpTime.$error && !$v.form.wakeUpTime.validTime"
                    >
                      {{ timeError($t("form.wakeUpTime.label")) }}
                </small>
            </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
              <label for="" class="form-label my-0 ms-2">{{$t('form.sleepQuality.label')}}</label>
              <input 
                  type="text" 
                  :placeholder="$t('form.sleepQuality.placeholder')" 
                  v-model="form.sleepQuality"
                  class="form-control" 
                  :class="{'is-invalid':$v.form.sleepQuality.$error}"
              >
              <div v-if="$v.form.sleepQuality.$error && !$v.form.sleepQuality.required " class="invalid-feedback">
                {{requiredError($t('form.sleepQuality.label'))}}
              </div>
        
            </div>
            </div>
           </div>
            <div class="row">
              <div class="col-md-3">
              <!-- <label for="" class="form-label invisible">{{$t('form.beats.label')}}</label> -->
              <button  @click="addForm" class="btn btn-icon rounded-circle btn-success-gradient" >
                <i class="fa fa-plus fa-md"></i>
              </button>
            </div>
          </div>
            </div>
        <Divider></Divider>
        <div class="row">
            <div class="col-md-12">
              <h5>{{$t('overallProgress')}}</h5>
            </div>
            <div class="col-md-4">
              <button class="btn btn-pill btn-success-gradient text-white"><i class="pi pi-eject"></i></button>
              <span class=" fw-bold mx-3">{{$t('qualityValue')}}</span><br/>
              <span class="fw-normal my-2 text-success"> {{$t('quality')}}</span>

            </div>
            <div class="col-md-4">
              <button class="btn btn-pill btn-success-gradient text-white"><i class=" pi pi-reddit"></i></button>
              <span class=" fw-bold mx-3">{{$t('good')}}</span><br/>
              <span class="fw-normal my-2 text-success"> {{$t('goodMood')}}</span>
            </div>
            <div class="col-md-4">
              <button class="btn btn-pill btn-success-gradient text-white"><i class=" pi pi-arrow-right"></i></button>
              <span class=" fw-bold mx-3">{{$t('num')}}</span><br/>
              <span class="fw-normal my-2 text-success"> {{$t('total')}}</span>
            </div>
        
        </div>

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
<i18n src="@/lang/profile/measurements/SleepCalculator.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import Divider from "@/components/global/utilities/Divider.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import LastResultNote from './customNote/LastResultNote.vue'
import {requiredError,timeError} from "@/validation/errors";
import {required,} from "vuelidate/lib/validators";
import {validTime} from "@/validation/customValidators";
import { mapGetters,mapActions  } from 'vuex'
import toast from "@/mixins/global/toast";
import pagination from "@/mixins/global/pagination";
export default {
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
      timeFormat: 'HH:mm',
      selectedTimeSleep:null,
      selectedTimeWake:null,
      ////////////////////
      timeToFallOptions: [
        {id:1,value: 'Dialy'},
        {id:2,value: 'Weekly'},
        {id:3,value: 'Monthly'},
      ],
      ////////////////////
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
       timeToFall:"",
       sleepDuration:null,
       sleepQuality:"",
       wakeUpTime:null,
      },
      isUpdating:false,
      /////////////////
      displayDeleteDialog:false,
      recordId:null,
    };
  },
  computed:{
    /////////////////////////
    formattedTimeSleep() {
        if (this.selectedTimeSleep) {
            if(this.$moment(this.selectedTimeSleep, this.selectedTimeSleep).isValid()){
                return this.$moment(this.selectedTimeSleep, this.timeFormat,true ).format('hh:mm A');
            }
            else {
                return this.selectedTimeSleep ;
            } 
        } 
        else {
            return '';
        }
     },
    formattedTimeWake() {
      if (this.selectedTimeWake) {
          if(this.$moment(this.selectedTimeWake, this.timeFormat).isValid()){
              return this.$moment(this.selectedTimeWake, this.timeFormat,true ).format('hh:mm A');
          }
          else {
              return this.selectedTimeWake ;
          } 
      } 
      else {
          return '';
      }
    },
    /////////////////////////
    ...mapGetters("measurements/SleepCalculator", {
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
     
     sleepDuration: {
       validTime(value) {
           return validTime(value);
       },
     },
     wakeUpTime: {
       validTime(value) {
           return validTime(value);
       },
     },
     sleepQuality:{
       required,
    
     }
  
   },
   },
  methods: {
    requiredError,
    timeError,
    ////////////////////////////////////
    addForm(){
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.resetForm();
      }
    },
    ///////////////////////////
    toggleView(){
      if(this.view==='chart')
        this.view='report';
      else
        this.view='chart';
    },
    ...mapActions("measurements/SleepCalculator",
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
        timeToFall:"",
       sleepDuration:null,
       sleepQuality:"",
       wakeUpTime:null,
    };
      this.closeForm();
      this.upsertResponse=null;
      this.upsertError=null;
    },
    create(){
      this.$store.dispatch("measurements/SleepCalculator/create", this.form)
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
      this.$store.dispatch("measurements/SleepCalculator/update", this.form)
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
      this.$store.dispatch("measurements/SleepCalculator/delete", this.recordId)
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
</style>
