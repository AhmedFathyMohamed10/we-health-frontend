<template>
  <div class="general">
    <div v-if="staticDataLoading">
      <Loader></Loader>
    </div>
    <div class="row" v-else>
      <div class="col-xl-9">
        <BusinessInfo></BusinessInfo>

        <CustomTabs class="text-center" v-model="selectedTab" :tabs="tabs" :checkError="check_error"
          :serializerError="serializer_error" :v="$v.generalObject">
        </CustomTabs>
        <div class="selection-content my-2">
          <Diagnosis 
            :diagnosisData="diagnosisStaticData"
            v-show="selectedTab == 'diagnosis'" v-model="diagnosis" :v="$v.generalObject.diagnosis"
            :check_error="check_error.diagnosis ? check_error.diagnosis : {}"
            :serializer_error="serializer_error.diagnosis ? serializer_error.diagnosis : {}" />
          <Rx
            :rxOptions="rxOptions" 
            v-show="selectedTab == 'rx'" v-model="rx" :v="$v.generalObject.rx"
            :check_error="check_error.rx ? check_error.rx : {}"
            :serializer_error="serializer_error.rx ? serializer_error.rx : {}" />
          <MedicalTest v-show="selectedTab == 'medicalTest'" v-model="medicalTest" :v="$v.generalObject.medicalTest"
            :check_error="check_error.medicalTest ? check_error.medicalTest : {}"
            :serializer_error="serializer_error.medicalTest ? serializer_error.medicalTest : {}" />
          <Diet 
            :dietOptions="dietOptions"
            v-show="selectedTab == 'diet'" v-model="diet" :v="$v.generalObject.diet"
            :check_error="check_error.diet ? check_error.diet : {}" :serializer_error="serializer_error.diet ? serializer_error.diet : {}
              " />
          <PhysicalTherapy
            :physicalTherapyOptions="physicalTherapyDataOption"
           v-show="selectedTab == 'physicalTherapy'" v-model="physicalTherapy"
            :v="$v.generalObject.physicalTherapy"
            :check_error="check_error.physicalTherapy ? check_error.physicalTherapy : {}"
            :serializer_error="serializer_error.physicalTherapy ? serializer_error.physicalTherapy : {}" />
          <Referral v-show="selectedTab == 'referral'" v-model="referral" :v="$v.generalObject.referral"
            :check_error="check_error.referral ? check_error.referral : {}"
            :serializer_error="serializer_error.referral ? serializer_error.referral : {}" />
          <Surgery v-show="selectedTab == 'surgery'" v-model="surgery" :v="$v.generalObject.surgery"
            :check_error="check_error.surgery ? check_error.surgery : {}"
            :serializer_error="serializer_error.surgery ? serializer_error.surgery : {}" />
          <Form 
            :formOptions="formOptionsData"
            v-show="selectedTab == 'form'" v-model="form" :v="$v.generalObject.form"
            :check_error="check_error.form ? check_error.form : {}"
            :serializer_error="serializer_error.form ? serializer_error.form : {}" />
          <Recall v-show="selectedTab == 'recall'" v-model="recall"
            :check_error="check_error.recall ? check_error.recall : {}"
            :serializer_error="serializer_error.recall ? serializer_error.recall : {}" />
          <Summery 
          v-show="selectedTab == 'summery'" v-model="summery"
            :check_error="check_error.summery ? check_error.summery : {}"
            :serializer_error="serializer_error.summery ? serializer_error.summery : {}" />
        </div>
        <div class="action-btn my-2">
          <Base>
          <div class="btns-wrapper justify-content-center justify-content-sm-end d-flex gap-2 flex-wrap">
            <button class="btn btn-success-gradient btn-pill w-md my-2 my-sm-0" @click="save">
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
  </div>
</template>
<script>
import Loader from "@/components/global/utilities/Loader.vue";
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
import BusinessInfo from "@/components/global/mr/BusinessInfo.vue"   
import PatientInfo from "@/components/global/mr/PatientInfo.vue"   
    
import axios from "axios";
import generalObject from "@/mixins/mr/general/validation/generalObject";
/////////////////////////////////////////
import { mapGetters } from 'vuex'
export default {
  mixins: [generalObject],
  components: {
    Loader,
    Base,
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
    BusinessInfo,
    PatientInfo  
  },
  data() {
    return {
      clinicId: localStorage.getItem("clinicId") ? localStorage.getItem("clinicId") : "b6b8761a-3cd9-11ed-9164-0242ac120002",
      selectedTab: "form",
      tabs: [
        { en: "Diagnosis", ar: "التشخيصات", key: "diagnosis" },
        { en: "RX", ar: "RX", key: "rx" },
        { en: "Medical Test", ar: "Medical Test", key: "medicalTest" },
        { en: "Diet", ar: "Diet", key: "diet" },
        { en: "Phy.Therapy", ar: "Phy.Therapy", key: "physicalTherapy" },
        { en: "Referral", ar: "Referral", key: "referral" },
        { en: "Surgery Book", ar: "Surgery Book", key: "surgery" },
        { en: "Form", ar: "Form", key: "form" },
        { en: "Recall", ar: "Recall", key: "recall" },
        { en: "Summery", ar: "Summery", key: "summery" },
      ],
      isLoading: false,
      check_error: {},
      serializer_error: {},
      
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters('detailsGeneral/generalStaticData', {
      'staticDataLoading': 'staticDataLoading',
    }),
    ...mapGetters('detailsGeneral/general', {
      'getDiagnosis': 'getDiagnosis',
      'getRx': 'getRx',
      'getMedicalTest': 'getMedicalTest',
      'getDiet': 'getDiet',
      'getPhysicalTherapy': 'getPhysicalTherapy',
      'getReferral': 'getReferral',
      'getSurgery': 'getSurgery',
      'getForm': 'getForm',
      'getRecall': 'getRecall',
      'getSummery': 'getSummery',
    
    }),
   ///////GeneralObject read data into summary tab/////////////////////// 
 
    diagnosis: {
      get() {
        return this.getDiagnosis;
      },
      set(value) {
        this.$store.dispatch('detailsGeneral/general/setDiagnosis', value);
      }
    },
    rx: {
      get() {
        return this.getRx;
      },
      set(value) {
        this.$store.dispatch('detailsGeneral/general/setRx', value);
      }
    },
    medicalTest: {
      get() {
        return this.getMedicalTest;
      },
      set(value) {
        this.$store.dispatch('detailsGeneral/general/setMedicalTest', value);
      }
    },
    diet: {
      get() {
        return this.getDiet;
      },
      set(value) {
        this.$store.dispatch('detailsGeneral/general/setDiet', value);
      }
    },
    physicalTherapy: {
      get() {
        return this.getPhysicalTherapy;
      },
      set(value) {
        this.$store.dispatch('detailsGeneral/general/setPhysicalTherapy', value);
      }
    },
    referral: {
      get() {
        return this.getReferral;
      },
      set(value) {
        this.$store.dispatch('detailsGeneral/general/setReferral', value);
      }
    },
    surgery: {
      get() {
        return this.getSurgery;
      },
      set(value) {
        this.$store.dispatch('detailsGeneral/general/setSurgery', value);
      }
    },
    form: {
      get() {
        return this.getForm;
      },
      set(value) {
        this.$store.dispatch('detailsGeneral/general/setForm', value);
      }
    },
    recall: {
      get() {
        return this.getRecall;
      },
      set(value) {
        this.$store.dispatch('detailsGeneral/general/setRecall', value);
      }
    },
    summery: {
      get() {
        return this.getSummery;
      },
      set(value) {
        this.$store.dispatch('detailsGeneral/general/setSummery', value);
      }
    },
    ////////////////////////generalStaticData/////////////
    ...mapGetters("detailsGeneral/generalStaticData",["dietData","physicalTherapyData","rxData","diagnosisData","formData",]),
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
    physicalTherapyDataOption: {
      get() {
          return this.physicalTherapyData;
      }
    },
    diagnosisStaticData: {
            get() {
                return this.diagnosisData;
            }
    },
    formOptionsData: {
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
      this.$store.dispatch('detailsGeneral/generalStaticData/loadStaticData');
    },
    async save() {
      this.isLoading = true;
      console.log(JSON.stringify(this.generalObject));
      await axios
        .post("/clinic/general/createGeneral", this.generalObject, {
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
.general {}
</style>


<!-- 
obj = { 
  "patientId": "ecf849ba-399d-11ed-b668-0242ac120002", 
  "diagnosis": 
  { "complaints": [{ "complaint": "Complaint Complaint ...", "date": "2023-05-02", "comment": "Comment Comment Comment .." }], 
  "diagnosis": [{ "diagnose": { "value": "New York", "id": 1 }, "type": { "id": 1, "value": "Chronic" }, "condition": { "id": 1, "value": "Chronic" }, "comment": "Comment Comment Comment ..." }] }, 
  "rx": [{ "drugName": { "value": "New York", "id": 1 }, "frequency": ["1 Time", "Every 3 Months", "Random"], "form": { "id": 1, "value": "Chronic" }, "route": { "id": 2, "value": "Acute" }, "strength": { "selection": { "id": 2, "value": "Acute" }, "value": "3/2" }, "dose": { "selection": { "id": 1, "value": "Chronic" }, "value": "3" }, "period": { "selection": { "id": 1, "value": "Chronic" }, "value": "3" }, "permission": { "id": 1, "value": "Replace" }, "note": "Comment Comment Comment." }], 
  "medicalTest": [{ "name": { "value": "Rome", "id": 2 }, "place": { "value": "Rome", "id": 2 }, "comment": "Comment Comment Comment ..." }], 
  "diet": [{ "dietContent": { "value": "New York", "id": 1 }, "meal": { "id": 1, "value": "Chronic" }, "period": { "selection": { "id": 1, "value": "Chronic" }, "value": "4" }, "comment": "Comment Comment Comment...", "status": "remaining", "evaluation": 2 }], 
  "physicalTherapy": [{ "treatmentProgram": { "value": "New York", "id": 1 }, "period": { "selection": { "id": 1, "value": "Chronic" }, "value": "4" }, "recommendedCenter": { "value": "New York", "id": 1 }, "comment": "Comment Comment Comment ..." }], 
  "referral": [{ "recommendation": { "value": "New York", "id": 1 }, "comment": "Comment Comment Comment..." }], "surgery": [{ "name": { "value": "Rome", "id": 2 }, "place": { "value": "Rome", "id": 2 }, "requirements": "Requirements Requirements", "comment": "Comment Comment Comment..." }], 
  "form": [{ "title": "Title Title Title", "section": { "id": 1, "value": "Chronic" }, "status": { "id": 1, "value": "Chronic" }, "comment": "Comment Comment Comment...", "file": "data:image/jpeg;base64" }], 
  "recall": [], 
  "summery": [], 
} -->















