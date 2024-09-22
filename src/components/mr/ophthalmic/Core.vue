<template>
  <div class="ophthalmic">
    <div class="row">
      <div class="col-xl-9">
        <BusinessInfo></BusinessInfo>
        <CustomTabs 
          class="text-center"
          v-model="selectedTab" 
          :tabs="tabs" 
          :checkError="check_error" 
          :serializerError="serializer_error" 
          :v="$v.ophthalmicObject">
        </CustomTabs>
        <div class="selction-content my-2">
              <ChiefComplaint
                v-show="selectedTab == 'chiefComplaint'"
                :v="$v.ophthalmicObject.chiefComplaint"
                :check_error=" check_error.chiefComplaint ? check_error.chiefComplaint : {}"
                :serializer_error="serializer_error.chiefComplaint? serializer_error.chiefComplaint: {}"
              />
              <History
                v-show="selectedTab == 'history'"
                :v="$v.ophthalmicObject.history"
                :check_error="
                  check_error.history ? check_error.history : {}
                "
                :serializer_error="
                  serializer_error.history
                    ? serializer_error.history
                    : {}
                "
              />
              <EntranceTesting
                v-show="selectedTab == 'entranceTesting'"
                :v="$v.ophthalmicObject.entranceTesting"
                :check_error="
                  check_error.entranceTesting ? check_error.entranceTesting : {}
                "
                :serializer_error="
                  serializer_error.entranceTesting
                    ? serializer_error.entranceTesting
                    : {}
                "
              />
              <VisionTest
                v-show="selectedTab == 'visionTest'"
                :v="$v.ophthalmicObject.visionTest"
                :check_error="
                  check_error.visionTest ? check_error.visionTest : {}
                "
                :serializer_error="
                  serializer_error.visionTest
                    ? serializer_error.visionTest
                    : {}
                "
              />
              <AnteriorExam
                v-show="selectedTab == 'anteriorExam'"
                :v="$v.ophthalmicObject.anteriorExam"
                :check_error="
                  check_error.anteriorExam ? check_error.anteriorExam : {}
                "
                :serializer_error="
                  serializer_error.anteriorExam
                    ? serializer_error.anteriorExam
                    : {}
                "
              />
              <PosteriorExam
                v-show="selectedTab == 'posteriorExam'"
                :v="$v.ophthalmicObject.posteriorExam"
                :check_error="
                  check_error.posteriorExam ? check_error.posteriorExam : {}
                "
                :serializer_error="
                  serializer_error.posteriorExam
                    ? serializer_error.posteriorExam
                    : {}
                "
              />
              <CL
                v-show="selectedTab == 'contactLength'"
                :v="$v.ophthalmicObject.contactLength"
                :check_error="
                  check_error.contactLength ? check_error.contactLength : {}
                "
                :serializer_error="
                  serializer_error.contactLength
                    ? serializer_error.contactLength
                    : {}
                "
              />
              <!-- <Form
                v-show="selectedTab == 'form'"
                :v="$v.ophthalmicObject.form"
                :check_error="
                  check_error.form ? check_error.form : {}
                "
                :serializer_error="
                  serializer_error.form
                    ? serializer_error.form
                    : {}
                "
              /> -->
              <FinalRx
                v-show="selectedTab == 'finalRx'"
                :v="$v.ophthalmicObject.finalRx"
                :check_error="
                  check_error.finalRx ? check_error.finalRx : {}
                "
                :serializer_error="
                  serializer_error.finalRx
                    ? serializer_error.finalRx
                    : {}
                "
              />
              <MedicalRx
                v-show="selectedTab == 'medicalRx'"
                :v="$v.ophthalmicObject.medicalRx"
                :check_error="
                  check_error.medicalRx ? check_error.medicalRx : {}
                "
                :serializer_error="
                  serializer_error.medicalRx
                    ? serializer_error.medicalRx
                    : {}
                "
              />
              
            <Form 
              :formOptions="formStaticData"
              v-show="selectedTab == 'form'"
              v-model="form" 
              :v="$v.ophthalmicObject.form"
              :check_error="check_error.form ? check_error.form : {}"
              :serializer_error="serializer_error.form ? serializer_error.form : {}" 
            />
            <Recall v-show="selectedTab == 'recall'" v-model="recall"
              :check_error="check_error.recall ? check_error.recall : {}"
              :serializer_error="serializer_error.recall ? serializer_error.recall : {}"
             />
            <Summery v-show="selectedTab == 'summery'" v-model="summery"
              :check_error="check_error.summery ? check_error.summery : {}"
              :serializer_error="serializer_error.summery ? serializer_error.summery : {}" 
            />
        </div>
          <!-- </Base> -->
        <div class="action-btn my-2">
          <Base>
            <div class="btns-wrapper justify-content-center justify-content-sm-end d-flex gap-2 flex-wrap">
              <button class="btn btn-success-gradient btn-pill w-md my-2 my-sm-0"  @click="save">
                {{ $t("save") }}
              </button>
              <button class="btn btn-danger-gradient btn-pill w-md my-2 my-sm-0" @click.prevent="openResetDialog">
                {{ $t("reset") }}
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
    "save":"Finish",
    "reset":"Reset"
  },
  "ar":{
    "message":" هل أنت متأكد من أنك تريد إعادة تعيين إدخالك؟",
    "save":"حفظ",
    "reset":"إعادة ضبط"
  }
}  
</i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import ChiefComplaint from "@/components/mr/ophthalmic/tabs/ChiefComplaint.vue";
import History from "@/components/mr/ophthalmic/tabs/History.vue";
import EntranceTesting from "@/components/mr/ophthalmic/tabs/EntranceTesting.vue";
import VisionTest from "@/components/mr/ophthalmic/tabs/VisionTest.vue";
import AnteriorExam from "@/components/mr/ophthalmic/tabs/AnteriorExam.vue";
import PosteriorExam from "@/components/mr/ophthalmic/tabs/PosteriorExam.vue";
import CL from "@/components/mr/ophthalmic/tabs/CL.vue";
// import Form from "@/components/mr/ophthalmic/tabs/Form.vue";
import FinalRx from "@/components/mr/ophthalmic/tabs/FinalRx.vue";
import MedicalRx from "@/components/mr/ophthalmic/tabs/MedicalRx.vue";
import axios from "axios";
import ophthalmicObject from "@/mixins/mr/ophthalmic/validation/ophthalmicObject";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import Form from "@/components/mr/global/Form.vue";
import Recall from "@/components/mr/global/Recall.vue";
import Summery from "@/components/mr/global/Summery.vue";
////////////////////////////////////////////////
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";

import { mapGetters } from 'vuex'
import BusinessInfo from "@/components/global/mr/BusinessInfo.vue"   
import PatientInfo from "@/components/global/mr/PatientInfo.vue"   
export default {
  mixins: [ophthalmicObject],
  components: {
    Base,
    ChiefComplaint,
    History,
    EntranceTesting,
    VisionTest,
    AnteriorExam,
    History,
    PosteriorExam,
    CL,
    // Form,
    FinalRx,
    MedicalRx,
    CustomTabs,
    Form,
    Recall,
    Summery,
    DeleteDialog,
    BusinessInfo,
    PatientInfo
  },
  data() {
    return {
      clinicId: localStorage.getItem("clinicId")
        ? localStorage.getItem("clinicId")
        : "b6b8761a-3cd9-11ed-9164-0242ac120002",
      selectedTab:"medicalRx",
      tabs: [
        {
          en: "Chief Complaint",
          ar: "Chief Complaint",
          key: "chiefComplaint",
        },
        { en: "History", ar: "History", key: "history" },
        {
          en: "Entrance Testing",
          ar: "Entrance Testing",
          key: "entranceTesting",
        },
        {
          en: "Vision Test",
          ar: "Vision Test",
          key: "visionTest",
        },
        {
          en: "Anterior Exam",
          ar: "Anterior Exam",
          key: "anteriorExam",
        },
        {
          en: "Posterior Exam",
          ar: "Posterior Exam",
          key: "posteriorExam",
        },
        { en: "CL", ar: "CL",  key: "contactLength" },
        { en: "Form", ar: "Form", key: "form" },
        { en: "Final Rx", ar: "Final Rx", key: "finalRx" },
        {
          en: "Medical Rx",
          ar: "Medical Rx",
          key: "medicalRx",
        },
        { en: "Billing", ar: "Billing", key: "billing" },
        { en: "Recall", ar: "Recall",  key: "recall" },
        { en: "Summery", ar: "Summery", key: "summery" },
      ],
      isLoading: false,
      //   ophthalmicObject: {},
      check_error: {},
      serializer_error: {},
      displayRestDialog:false,
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters('detailsGeneral/general', {
      'getForm': 'getForm',
      'getRecall': 'getRecall',
      'getSummery': 'getSummery',
    }),
   
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
    //////////////////////////////////////////////////////////
    ...mapGetters("detailsOphthalmic/ophthalmicStaticData", ["formData"]),
      formStaticData: {
        get() {
            return this.formData;
        }
      },


  },
  mounted(){
    this.fetchStaticData();
  },
  methods: {
    async fetchStaticData() {
      this.$store.dispatch('detailsOphthalmic/ophthalmicStaticData/loadStaticData')
      .then((res) => {
          console.log(res);
          this.check_error = {};
          this.serializer_error = {};
        })

    },
    openResetDialog() {
      this.displayRestDialog = true;

    },
    closeResetDialog() {
      this.displayRestDialog = false;
      
    },
    reset(){
      this.$store.dispatch('detailsOphthalmic/ophthalmic/resetOphthalmic');
      this.closeResetDialog();
    },
    async save() {
      // console.log(ophthalmicObject)
     this.$v.ophthalmicObject.$touch();
      this.isLoading = true;
      await axios
        .post("/clinic/ophthalmic/createOphthalmic", this.ophthalmicObject
        // , {
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
  },
};
</script>
<style lang="scss" scoped>
.ophthalmic {
  .tabs-menu {
    background-color: #f0f0f5;
    padding: 1rem;
    border-radius: 1.5rem;
  }
}
</style>
