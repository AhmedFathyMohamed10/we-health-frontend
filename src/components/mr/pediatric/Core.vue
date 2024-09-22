<template>
  <div class="pediatric">
    <!-- v-if="!staticDataLoading&&!staticDataError"  -->
      <div   class="row">
        <div class="col-xl-9">
          <BusinessInfo></BusinessInfo>
          <CustomTabs 
            class="text-center"
            v-model="selectedTab" 
            :tabs="tabs" 
            :checkError="check_error" 
            :serializerError="serializer_error" 
            :v="$v.pediatricObject">
          </CustomTabs>
          <div class="selection-content my-2">
          <Diagnosis
            :diagnosisData="diagnosisStaticData"
            v-show="selectedTab == 'diagnosis'"
            v-model="diagnosis"
            :v="$v.pediatricObject.diagnosis"
            :check_error="check_error.diagnosis ? check_error.diagnosis : {}"
            :serializer_error="serializer_error.diagnosis? serializer_error.diagnosis: {}"
        />
          <Rx
          :rxOptions="rxOptions"
          v-show="selectedTab == 'rx'"
          v-model="rx"
          :v="$v.pediatricObject.rx"
          :check_error="check_error.rx ? check_error.rx : {}"
          :serializer_error="serializer_error.rx? serializer_error.rx: {}"
          />
          <MedicalTest
          v-show="selectedTab == 'medicalTest'"
          v-model="medicalTest"
          :v="$v.pediatricObject.medicalTest"
          :check_error="check_error.medicalTest ? check_error.medicalTest : {}"
          :serializer_error="serializer_error.medicalTest? serializer_error.medicalTest: {}"
          />
          <Diet
          :dietOptions="dietOptions"
          v-show="selectedTab == 'diet'"
          v-model="diet"
          :v="$v.pediatricObject.diet"
          :check_error="check_error.diet ? check_error.diet : {}"
          :serializer_error="serializer_error.diet? serializer_error.diet: {}
          "
        />
        <PhysicalTherapy
        :physicalTherapyOptions="physicalTherapyOptions"
        v-show="selectedTab == 'physicalTherapy'"
        v-model="physicalTherapy"
        :v="$v.pediatricObject.physicalTherapy"
        :check_error="check_error.physicalTherapy ? check_error.physicalTherapy : {}"
        :serializer_error="serializer_error.physicalTherapy? serializer_error.physicalTherapy: {}"
        />
        <Referral
        v-show="selectedTab == 'referral'"
        v-model="referral"
        :v="$v.pediatricObject.referral"
        :check_error="check_error.referral ? check_error.referral : {}"
        :serializer_error="serializer_error.referral? serializer_error.referral : {}"
        />
        <Surgery
        v-show="selectedTab == 'surgery'"
        v-model="surgery"
        :v="$v.pediatricObject.surgery"
          :check_error="check_error.surgery ? check_error.surgery : {}"
          :serializer_error="serializer_error.surgery ? serializer_error.surgery: {}"
        />
        <Form
            :formOptions="formStaticData"
            v-show="selectedTab == 'form'"
            v-model="form"
            :v="$v.pediatricObject.form"
            :check_error="check_error.form ? check_error.form : {}"
            :serializer_error="serializer_error.form ? serializer_error.form : {}"
        />
        <Recall
          v-show="selectedTab == 'recall'"
          v-model="recall"
          :check_error="check_error.recall ? check_error.recall : {}"
          :serializer_error="serializer_error.recall ? serializer_error.recall : {}"
        />
        <Summery
          :readData="pediatricObject"
          v-show="selectedTab == 'summery'"
          v-model="summery"
          :check_error="check_error.summery ? check_error.summery : {}"
          :serializer_error="serializer_error.summery ? serializer_error.summery : {}"
        />  
        <GrowthCharts
          :v="$v.pediatricObject.growthCharts ? $v.pediatricObject.growthCharts : {}
            "
          v-show="selectedTab == 'growthCharts'"
          :check_error="
            check_error.growthCharts ? check_error.growthCharts : {}
          "
          :serializer_error="
            serializer_error.growthCharts
              ? serializer_error.growthCharts
              : {}
          "
        />   
        <BilirubinChart
        :v="$v.pediatricObject.bilirubinChart ? $v.pediatricObject.bilirubinChart : {}
          "
          v-show="selectedTab == 'bilirubinChart'"
          :check_error="
            check_error.bilirubinChart ? check_error.bilirubinChart : {}
          "
          :serializer_error="
            serializer_error.bilirubinChart
              ? serializer_error.bilirubinChart
              : {}
          "
        />   
        <Feeding
          v-show="selectedTab == 'feeding'"
          :v="
            $v.pediatricObject.feeding ? $v.pediatricObject.feeding : {}
          "
          :check_error="
            check_error.feeding ? check_error.feeding : {}
          "
          :serializer_error="
            serializer_error.feeding
              ? serializer_error.feeding
              : {}
          "
        />   
        <Vaccination
          v-show="selectedTab == 'vaccination'"
          :v="
            $v.pediatricObject.vaccination ? $v.pediatricObject.vaccination : {}
          "
          :check_error="
            check_error.vaccination ? check_error.vaccination : {}
          "
          :serializer_error="
            serializer_error.vaccination
              ? serializer_error.vaccination
              : {}
          "
        />   
        <PhysicalExam
          v-show="selectedTab == 'physicalExam'"
          :v="
            $v.pediatricObject.physicalExam ? $v.pediatricObject.physicalExam : {}
          "
          :check_error="
            check_error.physicalExam ? check_error.physicalExam : {}
          "
          :serializer_error="
            serializer_error.physicalExam
              ? serializer_error.physicalExam
              : {}
          "
        />   
          </div>
          <div class="action-btn my-2">
            <Base>
              <div
                class="btns-wrapper justify-content-center justify-content-sm-end d-flex gap-2 flex-wrap"
              >
                <button
                  class="btn btn-success-gradient btn-pill w-md my-2 my-sm-0"
                  @click="save"
                >
                  Finish
                </button>
                <button class="btn btn-danger-gradient btn-pill w-md my-2 my-sm-0">
                  Reset
                </button>
              </div>
            </Base>
          </div>
        </div>
        <div class="col-xl-3">
        <PatientInfo></PatientInfo>
      </div>      
      </div>
      <!-- <div  v-else class="Skeleton my-2">
        <SkeletonClinics />
     </div> -->
 </div>
</template>
<script>
import Base from "@/components/global/utilities/Base.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";        
/////////////// Global Components ///////////////////////////
import Diagnosis from "@/components/mr/global/Diagnosis.vue";
import Rx from "@/components/mr/global/Rx.vue";
import MedicalTest from "@/components/mr/global/MedicalTest.vue";
import Diet from "@/components/mr/global/Diet.vue";
import PhysicalTherapy from "@/components/mr/global/PhysicalTherapy.vue";
import Referral from "@/components/mr/global/Referral.vue";
import Surgery from "@/components/mr/global/Surgery.vue";
import Form from "@/components/mr/global/Form.vue";
import Recall from "@/components/mr/global/Recall.vue";
import Summery from "@/components/mr/global/Summery.vue";

import GrowthCharts from "@/components/mr/pediatric/tabs/GrowthCharts.vue";
import BilirubinChart from "@/components/mr/pediatric/tabs/BilirubinChart.vue";
import Feeding from "@/components/mr/pediatric/tabs/Feeding.vue";
import Vaccination from "@/components/mr/pediatric/tabs/Vaccination.vue";
import PhysicalExam from "@/components/mr/pediatric/tabs/PhysicalExam.vue";
import axios from "axios";
import pediatricObject from "@/mixins/mr/pediatric/validation/pediatricObject";
///////////////////////////////////////
import SkeletonClinics from "@/components/global/UI/SkeletonClinics/SkeletonClinics";
import BusinessInfo from "@/components/global/mr/BusinessInfo.vue"   
import PatientInfo from "@/components/global/mr/PatientInfo.vue"  
/////////////////////////////////////////
import { mapGetters } from 'vuex'
export default {
  mixins: [pediatricObject],
  components: {
    Base,
    /////////////
    // SkeletonClinics,
    CustomTabs,
    /////////////// Global Components ///////////
    Diagnosis,
    Rx,
    MedicalTest,
    Diet,
    PhysicalTherapy,
    Referral,
    Surgery,
    Form,
    Recall,
    Summery,
    GrowthCharts,
    BilirubinChart,
    Feeding,
    Vaccination,
    PhysicalExam,
    BusinessInfo,
    PatientInfo      
  },
  data() {
    return {
      clinicId:localStorage.getItem("clinicId") ? localStorage.getItem("clinicId") : "b6b8761a-3cd9-11ed-9164-0242ac120002",
      selectedTab:"physicalExam",
      tabs: [
        { en: "Diagnosis",ar: "Diagnosis", key: "diagnosis"},
        { en: "RX", ar: "RX",  key: "rx" },
        { en: "Medical Test", ar: "Medical Test",key: "medicalTest" },
        { en: "Diet",ar: "Diet",key: "diet"},
        { en: "Phy.Therapy", ar: "Phy.Therapy",key: "physicalTherapy"},
        { en: "Referral", ar: "Referral",key: "referral" },
        { en: "Surgery Book", ar: "Surgery Book", id: 7, key: "surgery"},
        { en: "Form", ar: "Form", key: "form"},
        { en: "Recall", ar: "Recall",key: "recall"},
        { en: "Summery", ar: "Summery",key: "summery"},
        ////////////////////////////////////////////////////////////////////////////////
        { en: "Growth Charts", ar: "Growth Charts",key: "growthCharts"},
        { en: "Bilirubin Chart", ar: "Bilirubin Chart",key: "bilirubinChart"},
        { en: "Feeding", ar: "Feeding",key: "feeding"},
        { en: "Vaccination", ar: "Vaccination", key: "vaccination"},
        { en: "Physical Exam", ar: "Physical Exam", key: "physicalExam"},
      ],
      isLoading: false,
      check_error: {},
      serializer_error: {},
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters('detailsGeneral/general',{
        'getDiagnosis':'getDiagnosis',
        'getRx':'getRx',
        'getMedicalTest':'getMedicalTest',
        'getDiet':'getDiet',
        'getPhysicalTherapy':'getPhysicalTherapy',
        'getReferral':'getReferral',
        'getSurgery':'getSurgery',
        'getForm':'getForm',
        'getRecall':'getRecall',
        'getSummery':'getSummery',
    }),
    diagnosis:{
      get() {
          return this.getDiagnosis;
      },
      set(value) {
          this.$store.dispatch('detailsGeneral/general/setDiagnosis', value);
      }
    },
    rx:{
      get() {
          return this.getRx;
      },
      set(value) {
          this.$store.dispatch('detailsGeneral/general/setRx', value);
      }
    },
    medicalTest:{
      get() {
          return this.getMedicalTest;
      },
      set(value) {
          this.$store.dispatch('detailsGeneral/general/setMedicalTest', value);
      }
    },
    diet:{
      get() {
          return this.getDiet;
      },
      set(value) {
          this.$store.dispatch('detailsGeneral/general/setDiet', value);
      }
    },
    physicalTherapy:{
      get() {
          return this.getPhysicalTherapy;
      },
      set(value) {
          this.$store.dispatch('detailsGeneral/general/setPhysicalTherapy', value);
      }
    },
    referral:{
      get() {
          return this.getReferral;
      },
      set(value) {
          this.$store.dispatch('detailsGeneral/general/setReferral', value);
      }
    },
    surgery:{
      get() {
          return this.getSurgery;
      },
      set(value) {
          this.$store.dispatch('detailsGeneral/general/setSurgery', value);
      }
    },
    form:{
      get() {
          return this.getForm;
      },
      set(value) {
          this.$store.dispatch('detailsGeneral/general/setForm', value);
      }
    },
    recall:{
      get() {
          return this.getRecall;
      },
      set(value) {
          this.$store.dispatch('detailsGeneral/general/setRecall', value);
      }
    },
    summery:{
      get() {
          return this.getSummery;
      },
      set(value) {
          this.$store.dispatch('detailsGeneral/general/setSummery', value);
      }
    },
    ///////////////////////////////////////
    ...mapGetters("detailsPediatric/pediatric", ["getPediatricObject"]),
    pediatricObject: {
      get() {
          return this.getPediatricObject;
      }
    },

/////////////////////pediatricStaticData///////////////
...mapGetters("detailsPediatric/pediatricStaticData", ["dietData","rxData","physicalTherapyData","diagnosisData","staticDataLoading","staticDataError","formData"]),
    dietOptions: {
      get() {
          return this.dietData;
      }
    },
    rxOptions: {
      get() {
          return this.rxData;
      }
    },
    physicalTherapyOptions: {
      get() {
          return this.physicalTherapyData;
      }
    },
    diagnosisStaticData: {
      get() {
          return this.diagnosisData;
      }
    },
    formStaticData: {
      get() {
          return this.formData;
      }
    },

  },
  mounted() {
    this.fetchStaticData();
  },
  methods: {
   async fetchStaticData() {
      this.$store.dispatch('detailsPediatric/pediatricStaticData/loadStaticData');
    },
    async save() {
      this.isLoading = true;
      this.$v.pediatricObject.$touch();
      await axios
        .post("/clinic/pediatric/createPediatric", this.pediatricObject, {
          headers: {
            "clinic-id": this.clinicId,
          },
        })
        .then((res) => {
          console.log(res);
          this.check_error = {};
          this.serializer_error = {};
        })
        .catch((err) => {
          console.log(err);
          if (err.data)
            if (err.data.check_error) {
              this.check_error = err.data.check_error;
            }
          if (err.data)
            if (err.data.serializer_error) {
              this.serializer_error = err.data.serializer_error;
            }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    reset() {
      console.log("Reset");
    },
  },
};
</script>
<style lang="scss" scoped>
.pediatric {

}
</style>
