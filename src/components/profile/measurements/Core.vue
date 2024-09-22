<template>
  <div class="my-2">
    <div class="row">
      <div class="col-xl-9">
        <div class="row picked-charts">
          <div class="col-md-5 col-xl-5">
            <div class="my-2 chart-wrapper">
              <Base>
                <h6>{{$t('measurements.overAll.title')}}</h6>
                <P>{{$t('measurements.overAll.titleShort')}}</P>
              </Base>
            </div>
            <div class="my-2 chart-wrapper">
              <Base>
                <h6>{{$t('measurements.bloodPressure.title')}}</h6>
                <P>{{$t('measurements.bloodPressure.titleShort')}}</P>
              </Base>
            </div>
          </div>
          <div class="col-md-2 col-xl-2">
            <div class="img-wrapper">
              <img src="@/assets/profile/measurements/women.svg" alt="">
            </div>
          </div>
          <div class="col-md-5 col-xl-5">
            <div class="my-2 chart-wrapper">
              <Base>
                <PulseRate :data="measurements?measurements.pulseRate:null" :chartOnly="true"></PulseRate>
              </Base>
            </div>
            <div class="my-2 chart-wrapper">
              <Base>
                <h6>{{$t('measurements.weight.title')}}</h6>
                <P>{{$t('measurements.weight.titleShort')}}</P>
              </Base>
            </div>
          </div>
          <div class="col-12">
            <Divider></Divider>
          </div>
        </div>
        <div class="row">
          <div class="col-12 my-2">
            <Base>
              <div class="d-flex flex-wrap justify-content-between align-items-center">
                <h4 class="mb-0">{{$t('measurements.header')}}</h4>
                <div class="d-flex flex-wrap gap-2 justify-content-end my-2">
                  <div>
                    <Dropdown 
                      v-model="period" 
                      :options="periodOptions" 
                      optionLabel="value" 
                      optionValue="value" 
                      placeholder="Select a Period" 
                    />
                  </div>
                  <div>
                    <button class="btn btn-pill btn-warning-gradient" @click="editChartsOrder">
                      <span><i class="pi" :class="[isEditing?'pi-check':'pi-pencil']"></i></span>
                      <!-- <span class="mx-2">{{ isEditing?'Save':'Edit'}}</span> -->
                      <span class="mx-2">{{ isEditing?$t('measurements.btns.titelSave'):$t('measurements.btns.titelEdit')}}</span>
                    </button>
                  </div>
                </div>
              </div>
            </Base>
          </div>
        </div>
        <!-- :class="{'animate__animated animate__bounce':isEditing}" -->
        <draggable v-model="columns"  @start="isEditing = true" @end="drag=false" class="row" :disabled="!isEditing">
          <div v-for="element in columns" :key="element.id" class="my-2 col-md-6 col-xxl-4 " :style="{'cursor':'grab','height': 'fit-content'}" 
          :class="{'animate__animated animate__bounce':isEditing}">
            <Base>
              <div>
                {{element}}
                  {{element.id}}
                  <component :is="element.name" :data="measurements?measurements[element.key]:null"></component>
              </div>
            </Base>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>
<i18n src="@/lang/profile/measurements/Core.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import Divider from "@/components/global/utilities/Divider.vue";
import draggable from 'vuedraggable'
////////////////////////////////////////////////////////////////
import PulseRate from "./PulseRate.vue";
import BloodPressure from "./BloodPressure.vue";
import OxygenLevel from "./OxygenLevel.vue";
import BMI from "./BMI.vue";
import Length from "./Length.vue";
import Weight from "./Weight.vue";
import Temprature from "./Temprature.vue";
import Diabetes from "./Diabetes.vue";
import Tooth from "./Tooth.vue";
import EyeRefraction from "./EyeRefraction.vue";
import Period from "./Period.vue";
import Smoking from "./Smoking.vue";
import Steps from "./Steps.vue";
import SleepCalculator from "./SleepCalculator.vue";
import Calories from "./Calories.vue";
import GrowthChart from "./GrowthChart.vue";
import Inbody from "./Inbody.vue";
import PainChart from "./PainChart.vue";
////////////////////////////////////////////////////////////////

import { mapGetters,mapActions  } from 'vuex'

export default {
  name: 'MeasurementsCore',
  components:{
    Base,
    Divider,
    draggable,
    PulseRate,
    BloodPressure,
    OxygenLevel,
    BMI,
    Length,
    Weight,
    Temprature,
    Diabetes,
    Tooth,
    EyeRefraction,
    Period,
    Smoking,
    Steps,
    SleepCalculator,
    Calories,
    GrowthChart,
    Inbody,
    PainChart,
  },
  data() {
    return {
      period:'Default',
      periodOptions: [
        {id:1,value: 'Default'},
        {id:2,value: 'Week'},
        {id:3,value: 'Month'},
        {id:4,value: 'Quarter Year'},
        {id:5,value: 'Half Year'},
        {id:6,value: 'Year'},
        {id:7,value: 'All Time'},
      ],
      columns: [
        { id: 1, name: 'PulseRate',key:"pulseRate" },
        { id: 2, name: 'BloodPressure',key:"BloodPressure" },
        { id: 3, name: 'OxygenLevel',key:"OxygenLevel" },
        { id: 4, name: 'BMI',key:"BMI" },
        { id: 5, name: 'Length',key:"Length" },
        { id: 6, name: 'Weight',key:"Weight" },
        { id: 7, name: 'Temprature',key:"Temprature" },
        { id: 8, name: 'Diabetes',key:"Diabetes" },
        { id: 9, name: 'Tooth',key:"Tooth" },
        { id: 10, name: 'EyeRefraction',key:"EyeRefraction" },
        { id: 11, name: 'Period',key:"Period" },
        { id: 12, name: 'Smoking',key:"Smoking" },
        { id: 13, name: 'Steps',key:"Steps" },
        { id: 14, name: 'SleepCalculator',key:"SleepCalculator" },
        { id: 15, name: 'Calories',key:"Calories" },
        { id: 16, name: 'GrowthChart',key:"GrowthChart" },
        { id: 17, name: 'Inbody',key:"Inbody" },
        { id: 18, name: 'PainChart',key:"PainChart" },
       
      ],
      isEditing: false,
    };
  },
  computed:{
    ...mapGetters("measurements", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",
    }),
    measurements(){
      if(this.getListResponse){
        return this.getListResponse.data;
      }
      else return null;
    },
  },
  mounted() {
    
  },

  methods: {
    editChartsOrder(){
      if(this.isEditing){
        alert("Saved");
        this.isEditing=false;
      }
      else {
        this.isEditing=true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-height{
  height: fit-content;
}
.picked-charts{
  .img-wrapper{
    aspect-ratio: 1/1;
    img{
      width: 100%;
      text-align: center;
      object-fit: scale-down;
    }
  }  
}
</style>