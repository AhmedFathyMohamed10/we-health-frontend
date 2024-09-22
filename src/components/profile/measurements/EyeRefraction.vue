<template>
  <div class="pulse-rate">
    <div class="pulse-rate-header d-flex justify-content-between align-items-center">
      <div class="d-flex gap-2 align-items-center">
        <h4 class="mb-0"><i class="pi pi-discord fs-2 text-success-gradient"></i></h4>
        <h4 class="mb-0">{{$t('header.title')}}</h4>
      </div>
    </div>
    <Divider></Divider>
    <div v-if="data.count>0">
      <div v-if="chartOnly&&chartData">
        <Chart type="line" :data="chartData" :options="fullyChartOptions" :height="200" />
      </div>
      
      <div v-else class="d-flex justify-content-start align-items-center w-100">
        <div class="pulse-rate-form flex-grow-1 w-40" v-if="last">
          <LastResultNote
            :labelLast="$t('last')"
            :last="last.date"
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
            <h4><i class="pi pi-discord fs-2 text-success-gradient"></i></h4>
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
            <div class="col-md-12">
              <!-- <div class="pulse-rate-chart">
                <Chart type="line" :data="chartData" :options="fullyChartOptions" :height="200" :width="100"  />
              </div> -->
            </div>
          </div>
          <div class="content">
            <div class="svg-wrapper">
                <img src="@/assets/profile/measurements/eyes.svg" alt="" class="w-100">
            </div>
            <div class="row">
            <div class="eyes-labels w-100 d-flex justify-content-between">
                <div class="label-wrapper flex-grow-1 d-flex justify-content-center"><h3>{{$t('form.od.label')}}</h3></div>
                <div class="label-wrapper flex-grow-1 d-flex justify-content-center"><h3>{{$t('form.os.label')}}</h3></div>
            </div>
            </div>
            <Divider></Divider>
              <!-- /////////////Doctors-name///////////////////////// -->
            <div class="row">
              <div class="col-md-7"> 
                  <div class="d-flex justify-content-start align-items-center my-2 ">
                    <label class="form-label mx-2">{{$t('form.doctors.title')}}</label>
                    <div class="d-flex justify-content-start  align-items-start text-success  custom-border " >
                      <Avatar :image="require('@/assets/global/logo/1.jpg')" class="m-1" shape="circle" />
                      <p class="m-auto px-2 ">{{$t('form.doctors.name')}}</p> 
                    </div>
                  </div>
              </div>
              <div class="col-md-5 ">
                <div class="d-flex justify-content-start align-items-center  my-2 "> 
                  <label class="form-label mx-2">{{$t('form.doctors.referal')}}</label> 
                  <InputText 
                  type="text" name="" id="" 
                  :placeholder="$t('form.doctors.nameCenter')"/> 
              </div>
              </div> 

            </div>

            <Divider></Divider>
            <!-- ///////////////////////// -->
            <div class="row">
                <div class="col-md-8 ">
                    <!-- Input Switch -->
                    <div class="row">
                      <div class="col-md-12">
                          <div class="d-flex align-items-center my-5">
                        <span class="me-2">{{ $t('measurementsLabels.near') }}</span>
                        <InputSwitch v-model="switchChecked" class="me-2" />
                        <span class="me-8">{{ $t('measurementsLabels.distant') }}</span>
                        <div class="d-flex align-items-center justify-content-center ">
                            <RadioButton inputId="simple" name="simple" value="simple" v-model="toggleSimpleOrAdvanced" />
                            <span class="ms-2 me-2"> {{ $t('measurementsLabels.simple') }}</span>
                            <span class="ms-2 me-2"></span>
                            <RadioButton inputId="advanced" name="advanced" value="advanced" v-model="toggleSimpleOrAdvanced" />
                            <span class="ms-2"> {{ $t('measurementsLabels.advanced') }}</span>
                        </div>
                        </div>
                      </div>
                      <div class="col-md-12">

                      </div>
                    </div>
                  
                    <!-- Near -->
                    <!-- Od Row -->
                    <div class="row" v-if="!switchChecked">

                        <h4>{{ $t('measurementsLabels.od') }}</h4>
                        <!-- Spherical -->
                        <div class="col-md-6 col-xxl-3"> 
                            <div class="form-group">
                                <!-- <Dropdown 
                                v-model="form.near.od.spherical" 
                                :options="sphericalOptions" 
                                optionLabel="value" 
                                optionValue="value" 
                                placeholder="Select" 
                                /> -->
                              
                                <CustomDropMenu 
                                    v-model="form.near.od.spherical"
                                    :label="$t('measurementsLabels.spherical')"
                                    :options="sphericalOptions"
                                    :excludeColumn="0"
                                    :invalid=" ($v.form.near.od.spherical.$error)"   
                                > 
                                <div 
                                    v-if="$v.form.near.od.spherical.$error && !$v.form.near.od.spherical.required"   class="invalid-feedback">
                                    {{requiredError($t('measurementsLabels.spherical'))}}
                                </div>
                                <!-- <div v-else-if="! v.near.od.spherical.minLength &&  v.near.od.spherical.$error" class="invalid-feedback">
                                        {{minLengthError($t('measurementsLabels.spherical'), v.near.od.spherical.$params.minLength.min)}}
                                </div>
                                <div v-else-if="! v.near.od.spherical.maxLength &&  v.near.od.spherical.$error" class="invalid-feedback">
                                        {{maxLengthError($t('measurementsLabels.spherical'), v.near.od.spherical.$params.maxLength.max)}}
                                </div>                  
                                    -->
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Cylindrical -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Cylindrical -->
                                <!-- <Dropdown 
                                v-model="form.near.od.cylindrical" 
                                :options="sphericalOptions" 
                                optionLabel="value" 
                                optionValue="value" 
                                placeholder="Select" 
                                /> -->
                                <CustomDropMenu 
                                    v-model="form.near.od.cylindrical"
                                    :label="$t('measurementsLabels.cylindrical')"
                                    :options="cylindricalOptions"
                                    :excludeColumn="0"
                                
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Axis -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Axis -->
                                <!-- <Dropdown 
                                v-model="form.near.od.axis" 
                                :options="sphericalOptions" 
                                optionLabel="value" 
                                optionValue="value" 
                                placeholder="Select" 
                                /> -->
                                <CustomDropMenu 
                                    v-model="form.near.od.axis"
                                    :label="$t('measurementsLabels.axis')"
                                    :options="axisOptions"
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Add -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Add -->
                        
                                <CustomDropMenu 
                                    v-model="form.near.od.add"
                                    :label="$t('measurementsLabels.add')"
                                    :options="addOptions"
                                >                    
                                
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Prism -->
                        <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                            <div class="form-group">
                            <!-- <label for=""> {{"$t('measurementsLabels.prism')"}}</label>
                                <Dropdown 
                                v-model="form.near.od.prism" 
                                :options="sphericalOptions" 
                                optionLabel="value" 
                                optionValue="value" 
                                placeholder="Select" 
                                /> -->
                                <CustomDropMenu 
                                    v-model="form.near.od.prism"
                                    :label="$t('measurementsLabels.prism')"
                                    :options="prismOptions"

                                >                    
                                
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- NVA -->
                        <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                            <div class="form-group">
                                <!-- NVA -->
                                <CustomDropMenu 
                                    v-model="form.near.od.nva"
                                    :label="$t('measurementsLabels.nva')"
                                    :options="nvaOptions"
                                
                                >                    
                                
                                </CustomDropMenu>
                            </div>
                        </div>
                    </div>
                    <!-- Copy Buttons -->
                    <div class="row mt-4" v-if="!switchChecked">
                        <div class="col-12" >
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="form-group mb-0 ">
                                    <button class="btn btn-icon rounded-circle btn-success me-3" @click="copyToOdNear">
                                        <i class="fa fa-angle-up fa-md"></i> 
                                    </button>
                                </div>
                                <div class="form-group mb-0">
                                    <button class="btn btn-icon rounded-circle btn-success" @click="copyToOsNear">
                                        <i class="fa fa-angle-down fa-md"></i>
                                    </button>
                                </div>
                            </div>
                        </div>                    
                    </div>    
                    <!-- Os Row -->
                    <div class="row" v-if="!switchChecked">
                        <h4>{{ $t('measurementsLabels.os') }}</h4>
                        <!-- Spherical -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <CustomDropMenu 
                                    v-model="form.near.os.spherical"
                                    :label="$t('measurementsLabels.spherical')"
                                    :options="sphericalOptions"
                                    :excludeColumn="0"
                                
                                >   
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Cylindrical -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Cylindrical -->
                                <CustomDropMenu 
                                    v-model="form.near.os.cylindrical"
                                    :label="$t('measurementsLabels.cylindrical')"
                                    :options="cylindricalOptions"
                                    :excludeColumn="0"
                                
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Axis -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Axis -->
                                <CustomDropMenu 
                                    v-model="form.near.os.axis"
                                    :label="$t('measurementsLabels.axis')"
                                    :options="axisOptions"    
                                >                    
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Add -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Add -->
                                <CustomDropMenu 
                                    v-model="form.near.os.add"
                                    :label="$t('measurementsLabels.add')"
                                    :options="addOptions"
                                
                                >                    
                                
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Prism -->
                        <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                            <div class="form-group">
                                <!-- Prism -->
                                <CustomDropMenu 
                                    v-model="form.near.os.prism"
                                    :label="$t('measurementsLabels.prism')"
                                    :options="prismOptions"
                                
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- NVA -->
                        <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                            <div class="form-group">
                                <!-- NVA -->
                                <CustomDropMenu 
                                    v-model="form.near.os.nva"
                                    :label="$t('measurementsLabels.nva')"
                                    :options="nvaOptions"
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                    </div>
                    <!-- Ou Row -->
                    <div class="row" v-if="!switchChecked">
                        <h4 class="mt-6">{{ $t('measurementsLabels.ou') }}</h4>
                        <!-- Dva -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Dva -->
                                <CustomDropMenu 
                                    v-model="form.near.ou.dva"
                                    :label="$t('measurementsLabels.dva')"
                                    :options="dvaOptions"
                                
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- NVA -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- NVA -->
                                <CustomDropMenu 
                                    v-model="form.near.ou.nva"
                                    :label="$t('measurementsLabels.nva')"
                                    :options="nvaOptions"
                                
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                    </div>
                    <!-- Distant -->
                    <!-- Od Row -->
                    <div class="row" v-if="switchChecked">
                        <h4>{{ $t('measurementsLabels.od') }}</h4>
                        <!-- Spherical -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <CustomDropMenu 
                                    v-model="form.distant.od.spherical"
                                    :label="$t('measurementsLabels.spherical')"
                                    :options="sphericalOptions"
                                    :excludeColumn="0"
                                
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Cylindrical -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Cylindrical -->
                                <CustomDropMenu 
                                    v-model="form.distant.od.cylindrical"
                                    :label="$t('measurementsLabels.cylindrical')"
                                    :options="cylindricalOptions"
                                    :excludeColumn="0"
                            
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Axis -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Axis -->
                                <CustomDropMenu 
                                    v-model="form.distant.od.axis"
                                    :label="$t('measurementsLabels.axis')"
                                    :options="axisOptions"
                                
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Add -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Add -->
                                <CustomDropMenu 
                                    v-model="form.distant.od.add"
                                    :label="$t('measurementsLabels.add')"
                                    :options="addOptions"
                                    
                                >                    
                                
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Prism -->
                        <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                            <div class="form-group">
                                <!-- Prism -->
                                <CustomDropMenu 
                                    v-model="form.distant.od.prism"
                                    :label="$t('measurementsLabels.prism')"
                                    :options="prismOptions"
                                    
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Dva -->
                        <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                            <div class="form-group">
                                <!-- Dva -->
                                <CustomDropMenu 
                                    v-model="form.distant.od.dva"
                                    :label="$t('measurementsLabels.dva')"
                                    :options="dvaOptions"
                                
                                >                    
                                
                                </CustomDropMenu>
                            </div>
                        </div>
                    </div>
                    <!-- Copy Buttons -->
                    <div class="row mt-4" v-if="switchChecked">
                        <div class="col-12" >
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="form-group mb-0 ">
                                    <button class="btn btn-icon rounded-circle btn-success me-2" @click="copyToOdDistant">
                                        <i class="fa fa-angle-up fa-md"></i> 
                                    </button>
                                </div>
                                <div class="form-group mb-0">
                                    <button class="btn btn-icon rounded-circle btn-success" @click="copyToOsDistant">
                                        <i class="fa fa-angle-down fa-md"></i>
                                    </button>
                                </div>
                            </div>
                        </div>                    
                    </div> 
                    <!-- Os Row -->
                    <div class="row" v-if="switchChecked">
                        <h4>{{ $t('measurementsLabels.os') }}</h4>
                        <!-- Spherical -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <CustomDropMenu 
                                    v-model="form.distant.os.spherical"
                                    :label="$t('measurementsLabels.spherical')"
                                    :options="sphericalOptions"
                                    :excludeColumn="0"
                                >                    
                                
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Cylindrical -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Cylindrical -->
                                <CustomDropMenu 
                                    v-model="form.distant.os.cylindrical"
                                    :label="$t('measurementsLabels.cylindrical')"
                                    :options="cylindricalOptions"
                                    :excludeColumn="0"
                                
                                >                    
                                
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Axis -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Axis -->
                                <CustomDropMenu 
                                    v-model="form.distant.os.axis"
                                    :label="$t('measurementsLabels.axis')"
                                    :options="axisOptions"
                                
                                >                    
                                
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Add -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Add -->
                                <CustomDropMenu 
                                    v-model="form.distant.os.add"
                                    :label="$t('measurementsLabels.add')"
                                    :options="addOptions"
                                
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Prism -->
                        <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                            <div class="form-group">
                                <!-- Prism -->
                                <CustomDropMenu 
                                    v-model="form.distant.os.prism"
                                    :label="$t('measurementsLabels.prism')"
                                    :options="prismOptions"
                                    
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- Dva -->
                        <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                            <div class="form-group">
                                <!-- Dva -->
                                <CustomDropMenu 
                                    v-model="form.distant.os.dva"
                                    :label="$t('measurementsLabels.dva')"
                                    :options="dvaOptions"
                                    
                                >                    
                                
                                </CustomDropMenu>
                            </div>
                        </div>
                    </div>
                    <!-- Ou Row -->
                    <div class="row" v-if="switchChecked">
                        <h4 class="mt-6">{{ $t('measurementsLabels.ou') }}</h4>
                        <!-- Dva -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- Dva -->
                                <CustomDropMenu 
                                    v-model="form.distant.ou.dva"
                                    :label="$t('measurementsLabels.dva')"
                                    :options="dvaOptions"
                                    
                                >                    
                                    
                                </CustomDropMenu>
                            </div>
                        </div>
                        <!-- NVA -->
                        <div class="col-md-6 col-xxl-3">
                            <div class="form-group">
                                <!-- NVA -->
                                <CustomDropMenu 
                                    v-model="form.distant.ou.nva"
                                    :label="$t('measurementsLabels.nva')"
                                    :options="nvaOptions"
                                
                                >                    
                                
                                </CustomDropMenu>
                            </div>
                        </div>
                    </div>

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
<i18n src="@/lang/profile/measurements/EyeRefraction.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import Divider from "@/components/global/utilities/Divider.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import LastResultNote from './customNote/LastResultNote.vue'
import CustomDropMenu from "@/components/global/custom/CustomDropMenu.vue";
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import { mapGetters,mapActions  } from 'vuex'
import {required,} from "vuelidate/lib/validators";

import toast from "@/mixins/global/toast";
import InputText from 'primevue/inputtext/InputText';
import pagination from "@/mixins/global/pagination";
export default {
  mixins:[pagination,toast,measurementsOptions],
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
    CustomDropMenu,
    InputText,
    
  },
  data() {
    return {
      switchChecked: false,
      toggleSimpleOrAdvanced: 'advanced',
      /////////////////////
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
        uploadeImage:'',
        near: {
          os: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
          },
          od: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "", 
          },
          ou: {
              dva: "",
              nva: "",
          }
        },
        distant: {
            os: {
                spherical: "",
                cylindrical: "",
                axis: "",
                prism: "",
                dva: "",
                add: "",
                nva: "",
            },
            od: {
                spherical: "",
                cylindrical: "",
                axis: "",
                prism: "",
                dva: "",
                add: "",
                nva: "", 
            },
            ou: {
                dva: "",
                nva: "",
            }
        },
      },
      isUpdating:false,
      /////////////////
      displayDeleteDialog:false,
      recordId:null,
    };
  },
  computed:{
    ...mapGetters("measurements/EyeRefraction", {
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
      uploadeImage:'', 
      near: {
          os: {
              spherical: {required},
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
          },
          od: {
              spherical: {required},
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "", 
          },
          ou: {
              dva: "",
              nva: "",
          }
      },
      distant: {
          os: {
              spherical:"",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
          },
          od: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "", 
          },
          ou: {
              dva: "",
              nva: "",
          }
      },
  
    },
   },
  methods: {
     ////////////////////////////////////
     addForm(){
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.resetForm();
      }
    },
     ///////////////////////////////
    copyToOdNear(){
        this.form.near.od=JSON.parse(JSON.stringify(this.form.near.os));
    },
    copyToOsNear(){
        this.form.near.os=JSON.parse(JSON.stringify(this.form.near.od));
    },
    copyToOdDistant(){
            this.form.distant.od=JSON.parse(JSON.stringify(this.form.distant.os));
    },
    copyToOsDistant(){
        this.form.distant.os=JSON.parse(JSON.stringify(this.form.distant.od));
    },
    ////////////////////
    toggleView(){
      if(this.view==='chart')
        this.view='report';
      else
        this.view='chart';
    },
    ...mapActions("measurements/EyeRefraction",
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
      uploadeImage:'', 
      near: {
          os: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
          },
          od: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "", 
          },
          ou: {
              dva: "",
              nva: "",
          }
      },
      distant: {
          os: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
          },
          od: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "", 
          },
          ou: {
              dva: "",
              nva: "",
          }
      },
    };
      this.closeForm();
      this.upsertResponse=null;
      this.upsertError=null;
    },
    create(){
      this.$store.dispatch("measurements/EyeRefraction/create", this.form)
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
      this.$store.dispatch("measurements/EyeRefraction/update", this.form)
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
      this.$store.dispatch("measurements/EyeRefraction/delete", this.recordId)
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
.pulse-rate {
  .custom-zindex{
  z-index: 9999;
}
.custom-border{
    border:1px solid #56C596;
    border-radius:2rem;
 }

}
</style>
