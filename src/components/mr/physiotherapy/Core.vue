<template>
  <div class="physiotherapy">
    <div class="row">
      <div class="col-xl-9">
        <BusinessInfo></BusinessInfo>

        <CustomTabs
          class="text-center"
          v-model="selectedTab"
          :tabs="tabs"
          :checkError="check_error"
          :serializerError="serializer_error"
          :v="$v.physiotherapyObject"
        >
        </CustomTabs>
        <div class="selection-content my-2">
          <Diagnosis
            :diagnosisData="diagnosisStaticData" 
            v-show="selectedTab == 'diagnosis'"
            v-model="diagnosis"
            :v="$v.physiotherapyObject.diagnosis"
            :check_error="check_error.diagnosis ? check_error.diagnosis : {}"
            :serializer_error="
              serializer_error.diagnosis ? serializer_error.diagnosis : {}
            "
          />
         
          <Rx
            :rxOptions="rxOptions"
            v-show="selectedTab == 'rx'"
            v-model="rx"
            :v="$v.physiotherapyObject.rx"
            :check_error="check_error.rx ? check_error.rx : {}"
            :serializer_error="serializer_error.rx ? serializer_error.rx : {}"
          />
          <Referral
            v-show="selectedTab == 'referral'"
            v-model="referral"
            :v="$v.physiotherapyObject.referral"
            :check_error="check_error.referral ? check_error.referral : {}"
            :serializer_error="
              serializer_error.referral ? serializer_error.referral : {}
            "
          />
          <Form
            :form-options="formStaticData"
            v-show="selectedTab == 'form'"
            v-model="form"
            :v="$v.physiotherapyObject.form"
            :check_error="check_error.form ? check_error.form : {}"
            :serializer_error="
              serializer_error.form ? serializer_error.form : {}
            "
          />
          <Recall
            v-show="selectedTab == 'recall'"
            v-model="recall"
            :check_error="check_error.recall ? check_error.recall : {}"
            :serializer_error="
              serializer_error.recall ? serializer_error.recall : {}
            "
          />
          <Summery
            v-show="selectedTab == 'summery'"
            v-model="summery"
            :check_error="check_error.summery ? check_error.summery : {}"
            :serializer_error="
              serializer_error.summery ? serializer_error.summery : {}
            "
          />
          <ChiefComplaint
            v-show="selectedTab == 'chiefComplaint'"
            :v="
              $v.physiotherapyObject.chiefComplaint
                ? $v.physiotherapyObject.chiefComplaint
                : {}
            "
            :check_error="
              check_error.chiefComplaint ? check_error.chiefComplaint : {}
            "
            :serializer_error="
              serializer_error.chiefComplaint
                ? serializer_error.chiefComplaint
                : {}
            "
          />
          <EntranceTest
            v-show="selectedTab == 'entranceTest'"
            :v="
              $v.physiotherapyObject.entranceTest
                ? $v.physiotherapyObject.entranceTest
                : {}
            "
            :check_error="
              check_error.entranceTest ? check_error.entranceTest : {}
            "
            :serializer_error="
              serializer_error.entranceTest ? serializer_error.entranceTest : {}
            "
          />
          <Planning
            v-show="selectedTab == 'planning'"
            :v="
              $v.physiotherapyObject.planning
                ? $v.physiotherapyObject.planning
                : {}
            "
            :check_error="check_error.planning ? check_error.planning : {}"
            :serializer_error="
              serializer_error.planning ? serializer_error.planning : {}
            "
          />
          <Procedures
            v-show="selectedTab == 'procedures'"
            :v="
              $v.physiotherapyObject.procedures
                ? $v.physiotherapyObject.procedures
                : {}
            "
            :check_error="check_error.procedures ? check_error.procedures : {}"
            :serializer_error="
              serializer_error.procedures ? serializer_error.procedures : {}
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
              <button
                class="btn btn-danger-gradient btn-pill w-md my-2 my-sm-0"
              >
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

import Base from "@/components/global/utilities/Base.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";

/////////////// Global Components ///////////////////////////
import Diagnosis from "@/components/mr/global/Diagnosis.vue";
import Rx from "@/components/mr/global/Rx.vue";
import Referral from "@/components/mr/global/Referral.vue";
import Form from "@/components/mr/global/Form.vue";
import Recall from "@/components/mr/global/Recall.vue";
import Summery from "@/components/mr/global/Summery.vue";

import ChiefComplaint from "@/components/mr/physiotherapy/tabs/ChiefComplaint.vue";
import EntranceTest from "@/components/mr/physiotherapy/tabs/EntranceTest.vue";
import Planning from "@/components/mr/physiotherapy/tabs/Planning.vue";
import Procedures from "@/components/mr/physiotherapy/tabs/Procedures.vue";
import BusinessInfo from "@/components/global/mr/BusinessInfo.vue"   
import PatientInfo from "@/components/global/mr/PatientInfo.vue"  

////////////////////////////////////////////////////////////////////////////////
import axios from "axios";
import physiotherapyObject from "@/mixins/mr/physiotherapy/validation/physiotherapyObject";
/////////////////////////////////////////////////////
import {mapActions, mapGetters } from "vuex";
export default {
  mixins: [physiotherapyObject],
  components: {
    Base,
    CustomTabs,
    /////////////// Global Components ///////////////
    Diagnosis,
    Rx,
    Referral,
    Form,
    Recall,
    Summery,
    ////////////////////////////////
    ChiefComplaint,
    EntranceTest,
    Planning,
    Procedures,
    BusinessInfo,
    PatientInfo  
  },
  data() {
    return {
      clinicId: localStorage.getItem("clinicId")
        ? localStorage.getItem("clinicId")
        : "b6b8761a-3cd9-11ed-9164-0242ac120002",
      selectedTab: "procedures",
      tabs: [
        { en: "Diagnosis", ar: "Diagnosis", key: "diagnosis" },
        { en: "RX", ar: "RX", key: "rx" },
        { en: "Referral", ar: "Referral", key: "referral" },
        { en: "Form", ar: "Form", key: "form" },
        { en: "Recall", ar: "Recall", key: "recall" },
        { en: "Summery", ar: "Summery", key: "summery" },
        /////////////////////////////////////////////////////////////////////
        { en: "Chief Complaint", ar: "Chief Complaint", key: "chiefComplaint" },
        { en: "History", ar: "History", key: "history" },
        { en: "Entrance Test", ar: "Entrance Test", key: "entranceTest" },
        { en: "Planning", ar: "Planning", key: "planning" },
        { en: "Procedures", ar: "Procedures", key: "procedures" },
      ],
      isLoading: false,
      check_error: {},
      serializer_error: {},
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters("detailsGeneral/general", {
      getDiagnosis: "getDiagnosis",
      getRx: "getRx",
      getReferral: "getReferral",
      getForm: "getForm",
      getRecall: "getRecall",
      getSummery: "getSummery",
      // getSummery: "getSummery",
    }),
    diagnosis: {
      get() {
        return this.getDiagnosis;
      },
      set(value) {
        this.$store.dispatch("detailsGeneral/general/setDiagnosis", value);
      },
    },
    rx: {
      get() {
        return this.getRx;
      },
      set(value) {
        this.$store.dispatch("detailsGeneral/general/setRx", value);
      },
    },
    referral: {
      get() {
        return this.getReferral;
      },
      set(value) {
        this.$store.dispatch("detailsGeneral/general/setReferral", value);
      },
    },
    form: {
      get() {
        return this.getForm;
      },
      set(value) {
        this.$store.dispatch("detailsGeneral/general/setForm", value);
      },
    },
    recall: {
      get() {
        return this.getRecall;
      },
      set(value) {
        this.$store.dispatch("detailsGeneral/general/setRecall", value);
      },
    },
    summery: {
      get() {
        return this.getSummery;
      },
      set(value) {
        this.$store.dispatch("detailsGeneral/general/setSummery", value);
      },
    },
    ////////////////////"dietData","physicalTherapyData",///
    ...mapGetters("detailsPhysiotherapy/physiotherapyStaticData", ["diagnosisData","rxData","formData"]),
    rxOptions: {
      get() {
          return this.rxData;
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
    ...mapActions("layout", ["changeLoaderVisibility"]),
    
    async fetchStaticData() {
      this.$store.dispatch('detailsPhysiotherapy/physiotherapyStaticData/loadStaticData');
    },
    async save() {
      // this.isLoading = true;
      this.$v.physiotherapyObject.$touch();
      // this.$v.physiotherapyObject.$touch();

      await axios
        .post(
          "/clinic/physiotherapy/createPhysiotherapy",
          this.physiotherapyObject,
          {
            headers: {
              "clinic-id": this.clinicId,
            },
          }
        )
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
  beforeRouteUpdate(to, from) {
    console.log("changeLoaderVisibility");
    this.changeLoaderVisibility(true);
    setTimeout(() => this.changeLoaderVisibility(false), 2000);
  },
};
</script>
<style lang="scss" scoped>
.physiotherapy {
}
</style>
