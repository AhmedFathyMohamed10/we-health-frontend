<template>
  <div class="pulse-rate">
    <div class="pulse-rate-header d-flex justify-content-between align-items-center">
      <div class="d-flex gap-2 align-items-center">
        <h4 class="mb-0"><i class="pi pi-ban fs-2 text-success-gradient"></i></h4>
        <h4 class="mb-0"> {{$t('header.title')}} </h4>
      </div>
     
    </div>
    <Divider></Divider>
    <!-- {{ data }} -->
    <div v-if="data.count>0">
      <div v-if="chartOnly&&chartData">
        <Chart type="line" :data="chartData" :options="fullyChartOptions" :width="200" :height="100" />
      </div>
      
      <div v-else class="d-flex justify-content-start align-items-center w-100">
        <div class="pulse-rate-form flex-grow-1 w-40" v-if="last">
          <LastResultNote
            :labelLast="$t('last')"
            :last="last.smoking"
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
            <h4><i class="pi pi-ban fs-2 text-success-gradient"></i></h4>
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
            <div class="d-flex justify-content-center align-items-center">
              <div class="">
              <button  @click="displayContentSmoking" class="btn btn-pill" :class="contentSmoking? 'btn-success-gradient':'btn-outline'"> {{$t('form.smoking.value')}}</button>
              </div>
              <div class="">
              <button @click="displayContentRecovery" class="btn btn-pill"  :class="contentRecovery? 'btn-success-gradient':'btn-outline'"> {{$t('form.unitRecovery.value')}}</button>
              </div>
            
            </div>
            <Divider></Divider>
            <div class="row">
              <div class="pulse-rate-chart">
                <Chart type="line" :data="chartData" :options="fullyChartOptions" :height="200" :width="100"   />
              </div>
            </div>
               <!-- /////////////contentSmoking/////////// -->
            <div  v-if="contentSmoking" >
              <Divider></Divider>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="" class="form-label">{{$t('form.smoking.label')}}</label>
                        <Dropdown 
                          v-model="form.smoking" 
                          :options="smokingOptions" 
                          optionLabel="value" 
                          optionValue="value" 
                          placeholder="Extracted " 
                    
                        />
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form-group">
                    <label for="" class="form-label">{{$t('form.unit.label')}}</label>
                        <Dropdown 
                          v-model="form.unit" 
                          :options="unitOptions" 
                          optionLabel="value" 
                          optionValue="value" 
                          :placeholder="$t('form.unit.placeholder') " 
                    
                        />
                  </div>
              </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ $t("form.duration.labelFrom") }}</label> 
                      <Calendar
                        v-model="form.durationFrom"
                        :placeholder="$t('form.duration.placeholderOne')"
                        :showIcon="true"
                        :class="{'p-invalid': $v.form.durationFrom.$error}"
                        dateFormat="mm-dd-yy"
                        @date-select="formateDateFrom"
                      />
                      <small
                        class="p-invalid"
                        v-if="$v.form.durationFrom.$error && !$v.form.durationFrom.validDate"
                      >
                        {{ dateError($t("form.duration.labelFrom")) }}
                      </small>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{ $t("form.duration.labelTo") }}</label> 
                      <Calendar
                        v-model="form.durationTo"
                          :placeholder="$t('form.duration.placeholderTwo')"
                          :showIcon="true"
                          :class="{'p-invalid': $v.form.durationTo.$error}"
                          dateFormat="mm-dd-yy"
                          @date-select="formateDateTo"
                      />
                      <small
                        class="p-invalid"
                        v-if="$v.form.durationTo.$error && !$v.form.durationTo.validDate"
                      >
                        {{ dateError($t("form.duration.labelTo")) }}
                      </small>
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
             
              <Divider></Divider>
            </div>
            <!-- /////////////contentRecovery/////////// -->
            <div  v-if="contentRecovery"  >
              <Divider></Divider>
                 <div class="row">
                  <div class="col-md-7">
                    <div class="form-group">
                      <label for="" class="form-label">{{$t('form.unitRecovery.label')}}</label>
                    <div class="custom-input-group">
                      <input 
                          type="text" 
                          :placeholder="$t('form.unitRecovery.placeholderOne')" 
                          v-model="form.unitRecovery"
                          class="form-control" 
                      >
                    
                    </div>
                    </div>
                  </div>
                 </div>
                  <div class="row">
                    <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label">{{ $t("form.smokingScince.label") }}</label> 
                          <Calendar
                            v-model="form.smokingScince"
                            :placeholder="$t('form.smokingScince.placeholder')"
                            :showIcon="true"
                            :class="{'p-invalid': $v.form.smokingScince.$error}"
                            dateFormat="mm-dd-yy"
                            @date-select="formateDateScince"
                          />
                          <small
                            class="p-invalid"
                            v-if="$v.form.smokingScince.$error && !$v.form.smokingScince.validDate"
                          >
                            {{ dateError($t("form.smokingScince.label")) }}
                          </small>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="form-label">{{ $t("form.quittedOn.label") }}</label> 
                          <Calendar
                            v-model="form.quittedOn"
                              :placeholder="$t('form.quittedOn.placeholder')"
                              :showIcon="true"
                              :class="{'p-invalid': $v.form.quittedOn.$error}"
                              dateFormat="mm-dd-yy"
                              @date-select="formateDateOn"
                          />
                          <small
                            class="p-invalid"
                            v-if="$v.form.quittedOn.$error && !$v.form.quittedOn.validDate"
                          >
                            {{ dateError($t("form.quittedOn.label")) }}
                          </small>
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
                  <Divider></Divider>
                  <div class="row">
                    <div class="col-md-12">
                    <h5>{{ $t('overallProgress')}} <i class="pi pi-thumbs-up-fill text-success"></i></h5>
                  </div>
                  <div class="col-md-4">
                    <P class="text-success"> {{ $t('months')}}</P>
                    <Divider></Divider>

                  </div>
                  <div class="col-md-4">
                        <P class="text-success"> {{ $t('days')}}</P>
                        <Divider></Divider>
                  </div>
                  <div class="col-md-4">
                        <P class="text-success">{{$t('hours')}}</P>
                        <Divider></Divider>
                  </div>
                  </div>
              
              
                  <div class="col-md-7">
                    <div class="form-group">
                    <label for="" class="form-label">{{$t('form.lifeGained.label')}}</label>
                        <Dropdown 
                          v-model="form.lifeGained" 
                          :options="lifeGainedOptions" 
                          optionLabel="value" 
                          optionValue="value" 
                        :placeholder="$t('form.lifeGained.placeholder') " 
                        />
                        
                  
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
<i18n src="@/lang/profile/measurements/Smoking.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import Divider from "@/components/global/utilities/Divider.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import LastResultNote from './customNote/LastResultNote.vue'
import { convertDate } from "@/helpers/utilities";
import {dateError } from "@/validation/errors";
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
    EditButton,
    DeleteButton,
    DetailsDialog,
    DeleteDialog,
    LastResultNote,
  },
  data() {
    return {
      contentSmoking:true,
      contentRecovery:false,
      /////////////////
      smokingOptions: [
        {id:1,value: 'Daily '},
        {id:2,value: 'Monthly'},
      ],
      unitOptions: [
        {id:1,value: 'Cigarette'},
        {id:2,value: 'Implant'},
      ],
      lifeGainedOptions: [
        {id:1,value: 'Months'},
        {id:2,value: 'Years'},
      ],
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
        smoking:null,
        unit:null,
        durationFrom: "",
        durationTo: "",
        smokingScince:"",
        unitRecovery:"",
        quittedOn:"",
        
      },
      isUpdating:false,
      /////////////////
      displayDeleteDialog:false,
      recordId:null,
    };
  },
  computed:{
    ...mapGetters("measurements/Smoking", {
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
      durationFrom: {
        validDate(value) {
              return validDate(value);
            },
      },
      durationTo: {
        validDate(value) {
              return validDate(value);
            },
      },
      smokingScince: {
        validDate(value) {
              return validDate(value);
            },
      },
      quittedOn: {
        validDate(value) {
              return validDate(value);
            },
      },

    },
   },
  methods: {
    dateError ,
    //////////////////////
    formateDateFrom() {
      this.form.durationFrom = convertDate(
        this.form.durationFrom 
      );
    },
    formateDateTo() {
      this.form.durationTo = convertDate(
        this.form.durationTo 
      );
    },
    formateDateScince() {
      this.form.smokingScince = convertDate(
        this.form.smokingScince 
      );
    },
    formateDateOn() {
      this.form.quittedOn = convertDate(
        this.form.quittedOn 
      );
    },
   ///////////////////////
    displayContentSmoking(){
      this.contentSmoking= true;
      this.contentRecovery = false;
    },
    displayContentRecovery(){
      this.contentRecovery = true;
      this.contentSmoking = false;
    },
    addForm(){
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.resetForm();
      }
    },
    //////////
    toggleView(){
      if(this.view==='chart')
        this.view='report';
      else
        this.view='chart';
    },
    ...mapActions("measurements/Smoking",
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
        smoking:null,
        unit:null,
        lifeGained:null,
        durationFrom: "",
        durationTo: "",
        smokingScince:"",
        unitRecovery:"",
        quittedOn:"",
      };
      this.closeForm();
      this.upsertResponse=null;
      this.upsertError=null;
    },
    create(){
      this.$store.dispatch("measurements/Smoking/create", this.form)
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
      this.$store.dispatch("measurements/Smoking/update", this.form)
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
      this.$store.dispatch("measurements/Smoking/delete", this.recordId)
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
