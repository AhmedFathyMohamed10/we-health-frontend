<template>
  <div class="pulse-rate">
    <div class="pulse-rate-header d-flex justify-content-between align-items-center">
      <div class="d-flex gap-2 align-items-center">
        <h4 class="mb-0"><i class="pi pi-sitemap  fs-2 text-success-gradient"></i></h4>
        <h4 class="mb-0">{{$t('header.title')}}</h4>
      </div>
    </div>
    <Divider></Divider>
    <div v-if="data.count>0">
      <div v-if="chartOnly&&chartData">
        <Chart type="line" :data="chartData" :options="fullyChartOptions" :height="100"  :width="200"/>
      </div>
      
      <div v-else class="d-flex justify-content-start align-items-center w-100">
        <div class="pulse-rate-form flex-grow-1 w-40" v-if="last">
          <LastResultNote
            :labelLast="$t('last')"
            :last="last.calories"
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
              <h4><i class="pi pi-sitemap fs-2 text-success-gradient"></i></h4>
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
          <div class="d-flex justify-content-center align-items-center">
            <div class="">
              <button  @click="displayContentExercies" class="btn btn-pill" :class="contentExercies? 'btn-success-gradient':'btn-outline'"> {{$t('exercies')}}</button>
            </div>
            <div class="">
              <button  @click="displayContentMeals" class="btn btn-pill" :class="contentsMeals? 'btn-success-gradient':'btn-outline'">{{$t('meals')}} </button>
            </div>
         
          </div>
          <Divider></Divider>
          <div class="row">
            <div class="col-md-12">
              <div class="pulse-rate-chart">
                <Chart type="line" :data="chartData" :options="fullyChartOptions" :height="200" :width="100" />
              </div>
              <Divider></Divider>
            </div>
          </div> 
          <div v-if="contentExercies" >
            <div class="row">
              <div class="col-md-6">
              <div class="form-group type">
                  <label class="form-label">{{$t('form.type.label')}}</label>
                  <div class="p-inputgroup"> 
                    <span 
                      class="p-inputgroup-addon bg-light">
                      <i class="pi pi-search"></i>
                    </span>         
                      <AutoComplete
                        v-model="form.type"
                        :suggestions="drugNameParams.suggestions"  
                        field="value"  
                        placeholder="Search" 
                        @complete="search($event,drugNameParams)"
                      />
                    
                  </div>
                
              </div>                 
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{$t('form.times.label')}}</label>
                  <Dropdown 
                    v-model="form.times" 
                    :options="timesOptions" 
                    optionLabel="value" 
                    optionValue="value" 
                    placeholder="Dialy/Weekly " 
                  />
              </div>
            </div>
            </div>
             <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                    <label class="form-label my-0 ms-2" for="binary">{{$t('form.duration.label')}}</label>
                    <Calendar 
                        :showTime="true" 
                        v-model="selectedTime"
                        :timeOnly="true" 
                        :placeholder="$t('form.duration.placeholder')"
                          hourFormat="12" 
                          :timeFormat="timeFormat"
                          :class="{'p-invalid': $v.form.duration.$error}"  
                    />
                    <small
                      class="p-invalid"
                          v-if="$v.form.duration.$error && !$v.form.duration.validTime"
                        >
                          {{ timeError($t("form.duration.label")) }}
                    </small>
                </div>
              </div>
              <div class="col-md-3 my-5">
              <button  @click="addForm" class="btn btn-icon rounded-circle btn-success-gradient" >
                <i class="fa fa-plus fa-md"></i>
              </button>
              </div>
             </div>
             <div class="row">
              <Divider></Divider>
              <div class="col-md-12">
                <h5>{{$t('overallProgress')}}</h5>
              </div>
      
              <div class="col-md-4">
                <button class="btn btn-pill btn-success-gradient text-white">{{$t('kcal')}}</button>
                <span class=" fw-bold mx-3">{{$t('kcalValue')}}</span><br/>
                <span class="fw-normal my-2 text-success"> {{$t('calories')}}</span>

              </div>
              <div class="col-md-4">
                <button class="btn btn-pill btn-success-gradient text-white"><i class=" pi pi-reddit"></i></button>
                <span class=" fw-bold mx-3">{{$t('valueWeight')}}</span><br/>
                <span class="fw-normal my-2 text-success"> {{$t('weight')}}</span>
              </div>
              <div class="col-md-4">
                <button class="btn btn-pill btn-success-gradient text-white"><i class=" pi pi-arrow-right"></i></button>
                <span class=" fw-bold mx-3">{{$t('num')}}</span><br/>
                <span class="fw-normal my-2 text-success"> {{$t('total')}}</span>
              </div>
             </div>
          </div>
          <div v-if="contentsMeals" >
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="" class="form-label">{{$t('form.beats.label')}}</label>
                  <input 
                      type="number" 
                      :placeholder="$t('form.beats.placeholder')" 
                      v-model="form.beats"
                      class="form-control" 
                  >
                </div>
              </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{$t('form.note.label')}}</label>
                <input 
                    type="text" 
                    :placeholder="$t('form.note.placeholder')" 
                    v-model="form.note"
                    class="form-control" 
                    :class="{'is-invalid':$v.form.note.$error}"
                >
                <div v-if="$v.form.note.$error && !$v.form.note.notContainsHtmlTags" class="invalid-feedback">
                  {{htmlTagsError($t('form.note.label'))}}
                </div>
                <div v-if="$v.form.note.$error && !$v.form.note.maxLength" class="invalid-feedback">
                  {{maxLengthError($t('form.note.label'), $v.form.note.$params.maxLength.max)}}
                </div>
              </div>
            </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <button  @click="addForm" class="btn btn-icon rounded-circle btn-success-gradient" >
                  <i class="fa fa-plus fa-md"></i>
                </button>
            </div>
            </div>
            <div class="row">
              <Divider></Divider>
              <div class="col-md-12">
                <h5>{{$t('overallProgress')}}</h5>
              </div>
      
              <div class="col-md-4">
                <button class="btn btn-pill btn-success-gradient text-white">{{$t('kcal')}}</button>
                <span class=" fw-bold mx-3">{{$t('kcalValue')}}</span><br/>
                <span class="fw-normal my-2 text-success"> {{$t('calories')}}</span>

              </div>
              <div class="col-md-4">
                <button class="btn btn-pill btn-success-gradient text-white"><i class=" pi pi-reddit"></i></button>
                <span class=" fw-bold mx-3">{{$t('valueWeight')}}</span><br/>
                <span class="fw-normal my-2 text-success"> {{$t('weight')}}</span>
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
<i18n src="@/lang/profile/measurements/Calories.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import Divider from "@/components/global/utilities/Divider.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import LastResultNote from './customNote/LastResultNote.vue'
import {htmlTagsError,maxLengthError,requiredError,maxValueError, numericError,timeError} from "@/validation/errors";
import {maxLength,} from "vuelidate/lib/validators";
import {notContainsHtmlTags,validTime} from "@/validation/customValidators";
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
      contentExercies:true,
      contentsMeals:false,
      /////////////////
      timeFormat: 'HH:mm',
      selectedTime: null,
      ///////////////
      timesOptions: [
        {id:1,value: 'Dialy'},
        {id:2,value: 'Weekly'},
        {id:3,value: 'Monthly'},
      ],
      drugNameParams:{
        url: "example/drugName",
        suggestions:[]
      },
      /////////////////////////
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
        duration:null,
        type:null,
        times: null,
      },
      isUpdating:false,
      /////////////////
      displayDeleteDialog:false,
      recordId:null,
    };
  },
  computed:{
     /////////////////////////
     formattedTime() {
        if (this.selectedTime) {
            if(this.$moment(this.selectedTime, this.timeFormat).isValid()){
                return this.$moment(this.selectedTime, this.timeFormat,true ).format('hh:mm A');
            }
            else {
                return this.selectedTime ;
            } 
        } 
        else {
            return '';
        }
    },
      ///////////////////////////
    ...mapGetters("measurements/Calories", {
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
  watch: {
    formattedTime(newVal, oldVal) {
      this.form.duration= newVal;
    }, 
  },
  validations: { 
    form:{
      duration: {
        validTime(value) {
            return validTime(value);
        },
      },
     note: {
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
    timeError,
    //////////
    displayContentExercies(){
      this.contentExercies=true,
      this.contentsMeals=false
    },
    displayContentMeals(){
      this.contentExercies=false,
      this.contentsMeals=true
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
    ...mapActions("measurements/Calories",
    ["setUpsertResponse","setUpsertError","setDeleteResponse","setDeleteError","setStatusResponse","setStatusError"]),
    /////////////////////////////////////////
    closeDetailsDialog(){
      this.displayDetailsDialog = false;
    },
    openDetailsDialog() {
      this.displayDetailsDialog = true;
    },
    ////////////////////////////
    async search(event,params) {
        console.log(event.query)
        try {
          await this.$store.dispatch('generalSuggestions/search',{url:params.url,s:event.query})
          .then((res) => {
              // console.log(res)
              params.suggestions = [...res]
          });
        }
        catch (error) {
          console.error(error)
        }
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
        duration:null,
        type:null,
        times: null,
    };
      // this.closeForm();
      this.selectedTime = null; 
      this.upsertResponse=null;
      this.upsertError=null;
    },
    create(){
      this.$store.dispatch("measurements/Calories/create", this.form)
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
      this.$store.dispatch("measurements/Calories/update", this.form)
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
      this.$store.dispatch("measurements/Calories/delete", this.recordId)
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
  table{
    .result-msg{
      color: white;
      border-radius:2rem;
    }
  }
</style>
