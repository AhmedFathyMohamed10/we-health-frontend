<template>
  <div class="gynecology">
    <div class="row">
      <div class="col-xl-9">
        <BusinessInfo></BusinessInfo>

        <CustomTabs 
          class="text-center"
          v-model="selectedTab" 
          :tabs="tabs" 
          :checkError="check_error" 
          :serializerError="serializer_error" 
          :v="$v.gynecologyObject">
        </CustomTabs>
        <div class="selection-content my-2">
              <Diagnosis
                :diagnosisData="diagnosisStaticData"
                v-show="selectedTab == 'diagnosis'"
                v-model="diagnosis"
                :v="$v.gynecologyObject.diagnosis"
                :check_error="check_error.diagnosis ? check_error.diagnosis : {}"
                :serializer_error="serializer_error.diagnosis? serializer_error.diagnosis: {}"
                />
                <Rx
                :rxOptions="rxOptions"
                v-show="selectedTab == 'rx'"
                v-model="rx"
                :v="$v.gynecologyObject.rx"
                :check_error="check_error.rx ? check_error.rx : {}"
                :serializer_error="serializer_error.rx? serializer_error.rx: {}"
                />
                <MedicalTest
                v-show="selectedTab == 'medicalTest'"
                v-model="medicalTest"
                :v="$v.gynecologyObject.medicalTest"
                :check_error="check_error.medicalTest ? check_error.medicalTest : {}"
                :serializer_error="serializer_error.medicalTest? serializer_error.medicalTest: {}"
                />
                <Diet
                :dietOptions="dietOptions"
                v-show="selectedTab == 'diet'"
                v-model="diet"
                :v="$v.gynecologyObject.diet"
                :check_error="check_error.diet ? check_error.diet : {}"
                :serializer_error="serializer_error.diet? serializer_error.diet: {}
                "
              />
              <PhysicalTherapy
              :physicalTherapyOptions="physicalTherapyOptions"
              v-show="selectedTab == 'physicalTherapy'"
              v-model="physicalTherapy"
              :v="$v.gynecologyObject.physicalTherapy"
              :check_error="check_error.physicalTherapy ? check_error.physicalTherapy : {}"
              :serializer_error="serializer_error.physicalTherapy? serializer_error.physicalTherapy: {}"
              />
              <Referral
              v-show="selectedTab == 'referral'"
              v-model="referral"
              :v="$v.gynecologyObject.referral"
              :check_error="check_error.referral ? check_error.referral : {}"
              :serializer_error="serializer_error.referral? serializer_error.referral : {}"
              />
              <Surgery
              v-show="selectedTab == 'surgery'"
              v-model="surgery"
              :v="$v.gynecologyObject.surgery"
                :check_error="check_error.surgery ? check_error.surgery : {}"
                :serializer_error="serializer_error.surgery ? serializer_error.surgery: {}"
              />
              <Form
                :formOptions="formOptionsData"
                v-show="selectedTab == 'form'"
                v-model="form"
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
                v-show="selectedTab == 'summery'"
                v-model="summery"
                :check_error="check_error.summery ? check_error.summery : {}"
                :serializer_error="serializer_error.summery ? serializer_error.summery : {}"
              />
              <Obstetric
                v-show="selectedTab == 'obstetric'"
                :v="$v.gynecologyObject.obstetric"
                :check_error="check_error.obstetric ? check_error.obstetric : {}"
                :serializer_error="serializer_error.obstetric? serializer_error.obstetric: {}"
              />
              <Gyn
                v-show="selectedTab == 'gyn'"
                :v="$v.gynecologyObject.gyn"
                :check_error="check_error.gyn ? check_error.gyn : {}"
                :serializer_error="serializer_error.gyn ? serializer_error.gyn : {}"
              />
              <Borns
                v-show="selectedTab == 'borns'"
                :v="$v.gynecologyObject.borns"
                :check_error="check_error.borns ? check_error.borns : {}"
                :serializer_error="serializer_error.borns ? serializer_error.borns : {}"
              />
              <USMedia
                v-show="selectedTab == 'usMedia'"
                :v="$v.gynecologyObject.usMedia"
                :check_error="check_error.usMedia ? check_error.usMedia : {}"
                :serializer_error="serializer_error.usMedia ? serializer_error.usMedia : {}"
              />
        </div>
        <div class="action-btn my-2">
          <Base>
            <div class="btns-wrapper justify-content-center justify-content-sm-end d-flex gap-2 flex-wrap">
              <button
                class="btn btn-success-gradient btn-pill w-md my-2 my-sm-0"
                @click="save"
              >
                Finish
              </button>
              <button class="btn btn-danger-gradient btn-pill w-md my-2 my-sm-0" @click.prevent="openResetDialog">
                Reset
              </button>
              <DeleteDialog
                    :display="displayRestDialog"
                    @delete="reset"
                    @cancel="closeResetDialog"
                    :message="$t('message')"
                >
              </DeleteDialog>
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
<i18n lang="json5"> 
  {
    "en":{
      "message":" Are You Sure You Want Reset Your Entry?",
      "save":"Save",
      "reset":"Reset"
    },
    "ar":{
      "message":" Are You Sure You Want Reset Your Entry?",
      "save":"Save",
      "reset":"Reset"
    }
  }  
  </i18n>
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
////////////////////////////////////////////////////
import Surgery from "@/components/mr/global/Surgery.vue";
import Form from "@/components/mr/global/Form.vue";
import Recall from "@/components/mr/global/Recall.vue";
import Summery from "@/components/mr/global/Summery.vue";
/////////////// Gynecology Components ///////////////////////////
import Obstetric from "@/components/mr/gynecology/tabs/Obstetric.vue";
import Gyn from "@/components/mr/gynecology/tabs/Gyn.vue";
import Borns from "@/components/mr/gynecology/tabs/Borns.vue";
import USMedia from "@/components/mr/gynecology/tabs/USMedia.vue";
import BusinessInfo from "@/components/global/mr/BusinessInfo.vue"   
import PatientInfo from "@/components/global/mr/PatientInfo.vue"  

///////////////////////////////////////////////////////////////
import axios from "axios";
import gynecologyObject from "@/mixins/mr/gynecology/validation/gynecologyObject";
/////////////////////////////////////////
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
///////////////////////////////
import { mapGetters } from 'vuex'
export default {
  
  mixins: [gynecologyObject],
  components: {
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
    /////////////// Obstetric Components ///////////
    Obstetric,
    Gyn,
    Borns,
    USMedia,
    DeleteDialog,
    BusinessInfo,
    PatientInfo
  },
  data() {
    return {
      clinicId:localStorage.getItem("clinicId") ? localStorage.getItem("clinicId") : "b6b8761a-3cd9-11ed-9164-0242ac120002",
      selectedTab:"usMedia",
      tabs: [
        { en: "Diagnosis",ar: "Diagnosis", id: 1, key: "diagnosis"},
        { en: "RX", ar: "RX", id: 2, key: "rx" },
        { en: "Medical Test", ar: "Medical Test", id: 3,key: "medicalTest" },
        { en: "Diet",ar: "Diet",id: 4,key: "diet"},
        { en: "Phy.Therapy", ar: "Phy.Therapy",id: 5,key: "physicalTherapy"},
        { en: "Obstetric", ar: "Obstetric",id: 6,key: "obstetric"},
        { en: "Gyn", ar: "Gyn",id: 7,key: "gyn"},
        { en: "Borns", ar: "Borns",id: 8,key: "borns"},
        { en: "US & Media", ar: "US & Media",id: 9,key: "usMedia"},
        { en: "Referral", ar: "Referral", id: 10, key: "referral" },
        { en: "Surgery Book", ar: "Surgery Book", id: 11, key: "surgery"},
        { en: "Form", ar: "Form", id: 12, key: "form"},
        { en: "Recall", ar: "Recall", id: 13, key: "recall"},
        { en: "Summery", ar: "Summery", id: 14, key: "summery"},
      ],
      isLoading: false,
      check_error: {},
      serializer_error: {},
      displayRestDialog:false,
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
  ///////////////////////////gynecologyStaticData//////////////////
    ...mapGetters("detailsGynecology/gynecologyStaticData", ["dietData","physicalTherapyData","rxData","diagnosisData","formData"]),
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
       formOptionsData: {
            get() {
                return this.formData;
            }
       },
 },
  mounted(){
    this.fetchStaticData();
  },
  methods: {
   ///////////////////////////////////
   async fetchStaticData() { 
     this.$store.dispatch('detailsGynecology/gynecologyStaticData/loadStaticData')
     .then((res) => {
       console.log(res);
       this.check_error = {};
       this.serializer_error = {};
      })  
      },

    reset(){
      this.$store.dispatch('detailsGynecology/gynecology/resetGynecology');
      this.closeResetDialog();
    },
    async save() {
      this.isLoading = true;
      await axios
        .post("/clinic/obstetric/createobstetric", this.gynecologyObject, 
        // {
        //   headers: {
        //     "clinic-id": this.clinicId,
        //   },
        // }
        )
        .then((res) => {
          console.log(res);
          this.reset();
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
    openResetDialog() {
      this.displayRestDialog = true;

    },
    closeResetDialog() {
      this.displayRestDialog = false;
      
    },

  },
};
</script>
<style lang="scss" scoped>
.gynecology {

}
</style>
