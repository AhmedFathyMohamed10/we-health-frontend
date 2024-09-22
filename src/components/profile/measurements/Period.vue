<template>
  <div class="pulse-rate">
    <div class="pulse-rate-header d-flex justify-content-between align-items-center">
      <div class="d-flex gap-2 align-items-center">
        <h4 class="mb-0"><i class="pi pi-inbox fs-2 text-success-gradient"></i></h4>
        <h4 class="mb-0">{{$t('header.title')}}</h4>
      </div>

    </div>
    <Divider></Divider>
    <div v-if="data.count>0">
      <div v-if="chartOnly&&chartData">
        <Chart type="line" :data="chartData" :options="fullyChartOptions" :height="100" :width="200"/>
      </div>
      
      <div v-else  class="d-flex justify-content-start align-items-center w-100">
        <div class="pulse-rate-form flex-grow-1 w-40" v-if="last">
          <LastResultNote
            :labelLast="$t('last')"
            :last="last.period"
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
            <h4><i class="pi pi-inbox fs-2 text-success-gradient"></i></h4>
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
          <div class="row">
            <div class="col-md-6">
              <!-- <div class="pulse-rate-chart">
                <Chart type="line" :data="chartData" :options="fullyChartOptions" :height="200" :width="100" />
              </div> -->
            </div>
            <div class="content">
             <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                <label for="" class="form-label">{{$t('form.cycleDuration.label')}}</label>
                <input 
                    type="number" 
                    :placeholder="$t('form.cycleDuration.placeholder')" 
                    v-model="form.cycleDuration"
                    class="form-control" 
                    :class="{'is-invalid':$v.form.cycleDuration.$error}"
                >
                <div v-if="$v.form.cycleDuration.$error && !$v.form.cycleDuration.required " class="invalid-feedback">
                  {{requiredError($t('form.cycleDuration.label'))}}
                </div>
                <div v-else-if="$v.form.cycleDuration.$error && !$v.form.cycleDuration.numeric" class="invalid-feedback">
                  {{numericError($t('form.cycleDuration.label'))}}
                </div>
                <div v-else-if="$v.form.cycleDuration.$error && !$v.form.cycleDuration.maxValue" class="invalid-feedback">
                  {{maxValueError($t('form.cycleDuration.label'), $v.form.cycleDuration.$params.maxValue.max)}}
                </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                <label for="" class="form-label">{{$t('form.periodDuration.label')}}</label>
                <input 
                    type="number" 
                    :placeholder="$t('form.periodDuration.placeholder')" 
                    v-model="form.periodDuration"
                    class="form-control" 
                    :class="{'is-invalid':$v.form.periodDuration.$error}"
                >
                <div v-if="$v.form.periodDuration.$error && !$v.form.periodDuration.required " class="invalid-feedback">
                  {{requiredError($t('form.periodDuration.label'))}}
                </div>
                <div v-else-if="$v.form.periodDuration.$error && !$v.form.periodDuration.numeric" class="invalid-feedback">
                  {{numericError($t('form.periodDuration.label'))}}
                </div>
                <div v-else-if="$v.form.periodDuration.$error && !$v.form.periodDuration.maxValue" class="invalid-feedback">
                  {{maxValueError($t('form.periodDuration.label'), $v.form.periodDuration.$params.maxValue.max)}}
                </div>
                </div>
              </div>
             </div>
             <div class="row">
              <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">{{ $t("form.lastPeriod.label") }}</label>
                <Calendar
                  v-model="form.lastPeriod"
                  :placeholder="$t('form.lastPeriod.placeholder')"
                  :showIcon="true"
                  :class="{'p-invalid': $v.form.lastPeriod.$error}"
                  dateFormat="mm-dd-yy"
                  @date-select="formateDate"
                />
                <small
                  class="p-invalid"
                  v-if="$v.form.lastPeriod.$error && !$v.form.lastPeriod.validDate"
                >
                  {{ dateError($t("form.lastPeriod.label")) }}
                </small>
              </div>
              </div>
              <div class="col-md-3">
                <label for="" class="form-label invisible">{{$t('form.beats.label')}}</label>
                <button  @click="addForm" class="btn btn-icon rounded-circle btn-success-gradient" >
                  <i class="fa fa-plus fa-md"></i>
                </button>
              </div>
             </div>
           </div>
        <Divider></Divider>
        
        <div class=" table-responsive">
          <h5>{{ $t('form.nextPeriod.title') }}</h5>
          <table class="table table-borderless text-nowrap mb-0">
 
            <tbody>
            <tr>
                <td>{{$t('form.firstDay.label')}}</td>
                <td class="fw-bold text-success">
                 <div class="">
                  <Calendar
                  v-model="form.firstDay"
                  :placeholder="$t('form.firstDay.placeholder')"
                  :showIcon="true"
                  :class="{'p-invalid': $v.form.firstDay.$error}"
                  dateFormat="mm-dd-yy"
                  @date-select="formateDateFirstDay"
                  />
                  <small
                    class="p-invalid"
                    v-if="$v.form.firstDay.$error && !$v.form.firstDay.validDate"
                  >
                    {{ dateError($t("form.firstDay.label")) }}
                  </small>
                 </div>
              </td>
            </tr>
            <tr>
                <td>{{$t('form.lastDay.label')}}</td>
                <td class="fw-bold text-success">
                  <Calendar
                    v-model="form.lastDay"
                    :placeholder="$t('form.lastDay.placeholder')"
                    :showIcon="true"
                    :class="{'p-invalid': $v.form.lastDay.$error}"
                    dateFormat="mm-dd-yy"
                    @date-select="formateDateLastDay"
                />
                <small
                  class="p-invalid"
                  v-if="$v.form.lastDay.$error && !$v.form.lastDay.validDate"
                >
                  {{ dateError($t("form.lastDay.label")) }}
                </small></td>
            </tr>
            
            </tbody>
          </table>
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
<i18n src="@/lang/profile/measurements/Period.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import Divider from "@/components/global/utilities/Divider.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
// import AddButton from "@/components/global/utilities/AddButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import LastResultNote from './customNote/LastResultNote.vue'
import { convertDate } from "@/helpers/utilities";
import {requiredError,maxValueError, numericError,dateError} from "@/validation/errors";
import {numeric,required,maxValue} from "vuelidate/lib/validators";
import {validDate} from "@/validation/customValidators";
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
    // AddButton,
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
      ////////////////////
      displayForm:false,
      form:{
       cycleDuration:"",
       periodDuration:"",
       lastPeriod:"",
       firstDay:"",
       lastDay:"",
      },
      isUpdating:false,
      /////////////////
      displayDeleteDialog:false,
      recordId:null,
    };
  },
  computed:{
    ...mapGetters("measurements/Period", {
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
      cycleDuration: {
        required,
        numeric,
        maxValue: maxValue(220),
      },
      periodDuration: {
        required,
        numeric,
        maxValue: maxValue(220),
      },
      lastPeriod: {
        validDate(value){
          return validDate(value);
        }
      },
      firstDay: {
        validDate(value){
          return validDate(value)
        }
      },
      lastDay: {
        validDate(value){
          return validDate(value)
        }
      },
     
    },
  },
  methods: {
    ///////////////
    requiredError,
    maxValueError,
    numericError,
    dateError,
    ////////////////////////////////////
    addForm(){
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.resetForm();
      }
   },
    ///////////////////////////////
    formateDate() {
      this.form.lastPeriod = convertDate(
        this.form.lastPeriod 
      );
    },
    formateDateFirstDay() {
      this.form.firstDay = convertDate(
        this.form.firstDay 
      );
    },
    formateDateLastDay() {
      this.form.lastDay = convertDate(
        this.form.lastDay 
      );
    },
    toggleView(){
      if(this.view==='chart')
        this.view='report';
      else
        this.view='chart';
    },
    ...mapActions("measurements/Period",
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
        cycleDuration:"",
        periodDuration:"",
        lastPeriod:"",
        firstDay:"",
        lastDay:"",
    };
      this.closeForm();
      this.upsertResponse=null;
      this.upsertError=null;
    },
    create(){
      this.$store.dispatch("measurements/Period/create", this.form)
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
      this.$store.dispatch("measurements/Period/update", this.form)
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
      this.$store.dispatch("measurements/Period/delete", this.recordId)
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
