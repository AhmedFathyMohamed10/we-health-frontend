<template>
  <div class="dental">
    <div class="row">
      <div class="col-md-12">
        <div class="business-info my-2">
          <Base>
            <div class="d-flex align-items-center">
              <div class="avatar-lg me-2">
                <a href="javascript:void(0)" class="my-custom-avatar">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/preview/doctor-avatar-5966946-4936176.png?w=0&h=700&f=jpeg"
                    alt="profile-user"
                    class="avatar brround cover-image w-100 h-100"
                  />
                </a>
              </div>
              <h3 class="mb-0">Dental Clinic</h3>
            </div>
          </Base>
        </div>
        <CustomTabs 
          class="text-center"
          v-model="selectedTab" 
          :tabs="tabs" 
          :checkError="check_error" 
          :serializerError="serializer_error" 
          >
        </CustomTabs>
        <div class="selection-content my-2">
          <Rx
          :rxOptions="rxOptions"
          v-show="selectedTab == 'rx'"
          v-model="rx"
          :check_error="check_error.rx ? check_error.rx : {}"
          :serializer_error="serializer_error.rx? serializer_error.rx: {}"
          />
          <MedicalTest
          v-show="selectedTab == 'medicalTest'"
          v-model="medicalTest"
          :check_error="check_error.medicalTest ? check_error.medicalTest : {}"
          :serializer_error="serializer_error.medicalTest? serializer_error.medicalTest: {}"
          />
          <Diet
          :dietOptions="dietOptions"
          v-show="selectedTab == 'diet'"
          v-model="diet"
          :check_error="check_error.diet ? check_error.diet : {}"
          :serializer_error="serializer_error.diet? serializer_error.diet: {}
          "
          />
          <PhysicalTherapy
          :physicalTherapyOptions="physicalTherapyOptions"
          v-show="selectedTab == 'physicalTherapy'"
          v-model="physicalTherapy"
          :check_error="check_error.physicalTherapy ? check_error.physicalTherapy : {}"
          :serializer_error="serializer_error.physicalTherapy? serializer_error.physicalTherapy: {}"
          />
          <Referral
          v-show="selectedTab == 'referral'"
          v-model="referral"
          :check_error="check_error.referral ? check_error.referral : {}"
          :serializer_error="serializer_error.referral? serializer_error.referral : {}"
          />
          <Surgery
          v-show="selectedTab == 'surgery'"
          v-model="surgery"
            :check_error="check_error.surgery ? check_error.surgery : {}"
            :serializer_error="serializer_error.surgery ? serializer_error.surgery: {}"
          />
          <Form
              :formOptions="formStaticData"
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
        </div> 
      </div>
    </div>
    <SubCustomTabs v-if="selectedTab=='diagnosis'"
        :tabs="SubCustomTabs" 
        :bgClass="'btn-success'"
        :outlineClass="'btn-outline-success'">
    </SubCustomTabs>
    <div class="row">
      <div class="col-md-4">
        <Base>
            <Diagnosis
              :dataProp.sync="data"
              :optionsProp.sync="options"
              :langProp.sync="lang"
              :selectedType.sync="SelectedType"
              :isCategoryOrderChanges="isCategoryOrderChanges"
              :toothsLabels="toothsLabels"
              :proceduresAndDiagnosisDataProp.sync="proceduresAndDiagnosisData"
              :multiSelectBuffer.sync="
                data[SelectedType.english].toothChart.multiSelectBuffer
              "
              class="flex-grow-1 diagnosis-tooth-chart-options"
             
            ></Diagnosis>
            <div class="action-btn my-2">
                <button class="btn btn-success-gradient btn-pill w-100" @click="submit">
                    <i class="fa fa-plus fa-sm mx-2"></i>Add
                </button>
            </div>
         </Base>
      </div>
      <div class="col-md-8">
        <div class="selection-content my-2">
          <Base class="ctm-bg-color">
              <ToothChart
              v-if="adultOrChildSelect.english == 'ADULT'"
              :data.sync="data"
              :gallarAndXray="gallarAndXray"
              @setToothNumbersToOldDiagnosis="setToothNumbersToOldDiagnosis"
              :proceduresAndDiagnosisData.sync="proceduresAndDiagnosisData"
              :selectedType.sync="SelectedType"
              @selectedTooth="getSelectedTooth"
              :adultOrChildSelect="adultOrChildSelect"
              ref="toothsComponent"
              :toothNumbers.sync="toothNumbers"
              :action.sync="data[SelectedType.english].toothChart"
            ></ToothChart>
          </Base>
          
        </div>
        
                      <div class="table-wrapper my-2" v-if="isDiagnosisTableContainData">
          <Base>
            <div class="row my-2">
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table table-sm text-center">
                    <thead>
                      <tr>
                        <th scope="col">
                          Tooth
                        </th>
                        <th scope="col"># Tooth no.</th>
                        <th scope="col">Diagnosis</th>
                        <th scope="col">Category type</th>
                        <th scope="col">
                          Style
                        </th>
                        <th scope="col">Type</th>
                        <th scope="col">Controls</th>
                      </tr>
                    </thead>
                    <tbody v-for="(val, index) in data.diagnosis.toothChart.tableData.ADULT" :key="index">
                        <tr v-for="(item, i) in val" :key="i">
                          <td class="align-middle">
                            <div
                              class="d-flex justify-content-center align-items-center"
                            >
                              <component
                                style="width: 35% !important"
                                :is="`Tooth${index}`"
                                :selectedTooth.sync="toothNumbers[index]"
                              />
                            </div>
                          </td>
                          <td class="align-middle">
                            <Badge :value="adultToothNumber[index]" severity="secondary"></Badge>
                          </td>
                          <td class="align-middle">{{item.category}}</td>
                          <td class="align-middle">{{item.categoryType}}</td>
                          <td class="align-middle">{{item.style}}</td>
                          <td v-if="item.type" class="align-middle">{{item.type}}</td>
                          <td v-else class="align-middle">N/A</td>
                          <td class="align-middle">
                            <div
                              class="d-flex justify-content-center align-items-center"
                            >
                              <DeleteButton @delete="removeFromplanningTable(index)"
                              ></DeleteButton>
                            </div>
                          </td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Base>
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
    </div>
  </div>
</template>
<script>
///////////////////////////////////////////////////////////////////////////
import ToothChart from "@/components/mr/dental/tabs/toothChart.vue";

import DentalAdult from "@/mixins/mr/dental/DentalAdult";
import dataObject from "@/mixins/mr/dental/dataObject";
import {
  adultToothObject,
  childToothObject,
  singleAdultTooth,
} from "@/mixins/mr/dental/toothObject";
import {
  adultProcedureAndDiagnosis,
  childProcedureAndDiagnosis,
  resetProcedureAndDiagnosis,
} from "@/mixins/mr/dental/procedureAndDiagnosis";

import Base from "@/components/global/utilities/Base.vue";
import axios from "axios";
// import pediatricObject from "@/mixins/mr/pediatric/validation/pediatricObject";

import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import SubCustomTabs from "@/components/global/custom/CustomTabs.vue";

import Rx from "@/components/mr/global/Rx.vue";
import MedicalTest from "@/components/mr/global/MedicalTest.vue";
import Diet from "@/components/mr/global/Diet.vue";
import PhysicalTherapy from "@/components/mr/global/PhysicalTherapy.vue";
import Referral from "@/components/mr/global/Referral.vue";
import Surgery from "@/components/mr/global/Surgery.vue";
import Form from "@/components/mr/global/Form.vue";
import Recall from "@/components/mr/global/Recall.vue";
import Summery from "@/components/mr/global/Summery.vue";
import { mapGetters } from 'vuex'

import DeleteButton from "@/components/global/utilities/DeleteButton.vue";

export default {
  mixins: [DentalAdult, dataObject],
  components: {
    //////////////
    ToothChart,
    Base,
    Diagnosis: () => import("@/components/mr/dental/diagnosis/Diagnosis.vue"),
    CustomTabs,
    SubCustomTabs,
    Rx,
    MedicalTest,
    Diet,
    PhysicalTherapy,
    Referral,
    Surgery,
    Form,
    Recall,
    Summery,

    DeleteButton,

    Toothone: () => import("../dental/tooths/Tooth1.vue"),
    Toothtwo: () => import("../dental/tooths/Tooth2.vue"),
    Tooththree: () => import("../dental/tooths/Tooth3.vue"),
    Toothfour: () => import("../dental/tooths/Tooth4.vue"),
    Toothfive: () => import("../dental/tooths/Tooth5.vue"),
    Toothsix: () => import("../dental/tooths/Tooth6.vue"),
    Toothseven: () => import("../dental/tooths/Tooth7.vue"),
    Tootheight: () => import("../dental/tooths/Tooth8.vue"),
    Toothnine: () => import("../dental/tooths/Tooth9.vue"),
    Toothten: () => import("../dental/tooths/Tooth10.vue"),
    Tootheleven: () => import("../dental/tooths/Tooth11.vue"),
    Toothtwelve: () => import("../dental/tooths/Tooth12.vue"),
    Tooththirteen: () => import("../dental/tooths/Tooth13.vue"),
    Toothfourteen: () => import("../dental/tooths/Tooth14.vue"),
    Toothfifteen: () => import("../dental/tooths/Tooth15.vue"),
    Toothsixteen: () => import("../dental/tooths/Tooth16.vue"),
    Toothseventeen: () => import("../dental/tooths/Tooth17.vue"),
    Tootheighteen: () => import("../dental/tooths/Tooth18.vue"),
    Toothnineteen: () => import("../dental/tooths/Tooth19.vue"),
    Toothtwenty: () => import("../dental/tooths/Tooth20.vue"),
    ToothtwentyOne: () => import("../dental/tooths/Tooth21.vue"),
    ToothtwentyTwo: () => import("../dental/tooths/Tooth22.vue"),
    ToothtwentyThree: () => import("../dental/tooths/Tooth23.vue"),
    ToothtwentyFour: () => import("../dental/tooths/Tooth24.vue"),
    ToothtwentyFive: () => import("../dental/tooths/Tooth25.vue"),
    ToothtwentySix: () => import("../dental/tooths/Tooth26.vue"),
    ToothtwentySeven: () => import("../dental/tooths/Tooth27.vue"),
    ToothtwentyEight: () => import("../dental/tooths/Tooth28.vue"),
    ToothtwentyNine: () => import("../dental/tooths/Tooth29.vue"),
    Tooththirty: () => import("../dental/tooths/Tooth30.vue"),
    TooththirtyOne: () => import("../dental/tooths/Tooth31.vue"),
    TooththirtyTwo: () => import("../dental/tooths/Tooth32.vue"),
  },
  data() {
    return {
      toothNumbers: null,
      isDiagnosisTableContainData: false,
      isPlanningTableContainData: false,
      selectedTooth: null,

      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      SelectedType: null,
      diagnosisMainOptionSelected: null,
      operationMainOptionSelected: null,
      planningMainOptionSelected: null,
      gallarAndXray: false,
      imagesErrors: {
        type: false,
        size: false,
      },
      adultOrChild: [
        {
          english: "ADULT",
          arabic: "ADULT",
        },
        {
          english: "CHILD",
          arabic: "CHILD",
        },
      ],
      adultOrChildSelect: {
        english: "ADULT",
        arabic: "ADULT",
      },
      selectedAdultOrChild: null,
      oldAdultOrChildSelect: null,
      AdultOrChildChanged: false,
      displayModel: false,
      activeToothModel: false,
      notValid3d: false,
      isToothActive: false,
      tempSelectedType: null,
      isCategoryOrderChanges: false,

      adultToothNumber: {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        twentyOne: 21,
        twentyTwo: 22,
        twentyThree: 23,
        twentyFour: 24,
        twentyFive: 25,
        twentySix: 26,
        twentySeven: 27,
        twentyEight: 28,
        twentyNine: 29,
        thirty: 30,
        thirtyOne: 31,
        thirtyTwo: 32,
      },
      childToothLetters: {
        A: "A",
        B: "B",
        C: "C",
        D: "D",
        E: "E",
        F: "F",
        G: "G",
        H: "H",
        I: "I",
        J: "J",
        T: "T",
        S: "S",
        R: "R",
        Q: "Q",
        P: "P",
        O: "O",
        N: "N",
        M: "M",
        L: "L",
        K: "K",
      },
      toothsLabels: null,
      dataChanged: {
        category: false,
        categoryType: false,
        style: false,
        diagnosis: false,
        procedures: false,
      },
      proceduresAndDiagnosisData: null,


      clinicId:localStorage.getItem("clinicId") ? localStorage.getItem("clinicId") : "b6b8761a-3cd9-11ed-9164-0242ac120002",
      selectedTab:"diagnosis",
      tabs: [
        { en: "Diagnosis",ar: "Diagnosis", key: "diagnosis"},
        { en: "RX", ar: "RX",  key: "rx" },
        { en: "Medical Test", ar: "Medical Test",key: "medicalTest" },
        { en: "Phy.Therapy", ar: "Phy.Therapy",key: "physicalTherapy"},
        { en: "Referral", ar: "Referral",key: "referral" },
        { en: "Surgery Book", ar: "Surgery Book", id: 7, key: "surgery"},
        { en: "Form", ar: "Form", key: "form"},
        { en: "Recall", ar: "Recall",key: "recall"},
        { en: "Summary", ar: "Summary",key: "summary"},
        ////////////////////////////////////////////////////////////////////////////////
        { en: "Tooth chart", ar: "Tooth chart",key: "toothChart"},
      ],
      SubCustomTabs: [
        { en: "Main diagnosis", ar: "Main Diagnosis", key: "mainDiagnosis"},
        { en: "Tooth chart", ar: "Tooth chart", key: "toothChart"},
        { en: "Gallery", ar: "Gallery", key: "gallery"},
      ],
      isLoading: false,
      check_error: {},
      serializer_error: {},
    };
  },
  mounted() {
    this.fetchStaticData();
    // console.log(this.options)
  },
  created() {
    if (this.adultOrChildSelect.english === "CHILD") {
      this.toothNumbers = childToothObject();
      this.proceduresAndDiagnosisData = childProcedureAndDiagnosis();
    } else {
      this.toothNumbers = adultToothObject();
      this.proceduresAndDiagnosisData = adultProcedureAndDiagnosis();
    }
    // note this.data coming from  dataObject mixins
    this.data.adultOrChild = this.adultOrChildSelect; // his.adultOrChildSelect =   english:"ADULT"  arabic:"ADULT",
    this.SelectedType = this.mainOptions[0]; // arabic: "diagnosis" , english: "diagnosis"
    this.diagnosisMainOptionSelected = this.options.main.diagnosis[1]; //"main diagnosis
    this.operationMainOptionSelected = this.options.main.operations[0]; //"tooth chart"
    this.planningMainOptionSelected = this.options.main.planning[0]; // "tooth chart"
    this.data.diagnosis.toothChart.category = this.options.diagnosis.diagnosisSubOptions[0]; //"extraction"
    // console.log(this.adultOrChildSelect.english)
    this.operationTableBuffer = JSON.parse(
      JSON.stringify(
        this.data.operations.toothChart.tableData[this.adultOrChildSelect.english]
      )
    );
  },
   computed: {
    ...mapGetters('general',{
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
          this.$store.dispatch('general/setDiagnosis', value);
      }
    },
    rx:{
      get() {
          return this.getRx;
      },
      set(value) {
          this.$store.dispatch('general/setRx', value);
      }
    },
    medicalTest:{
      get() {
          return this.getMedicalTest;
      },
      set(value) {
          this.$store.dispatch('general/setMedicalTest', value);
      }
    },
    diet:{
      get() {
          return this.getDiet;
      },
      set(value) {
          this.$store.dispatch('general/setDiet', value);
      }
    },
    physicalTherapy:{
      get() {
          return this.getPhysicalTherapy;
      },
      set(value) {
          this.$store.dispatch('general/setPhysicalTherapy', value);
      }
    },
    referral:{
      get() {
          return this.getReferral;
      },
      set(value) {
          this.$store.dispatch('general/setReferral', value);
      }
    },
    surgery:{
      get() {
          return this.getSurgery;
      },
      set(value) {
          this.$store.dispatch('general/setSurgery', value);
      }
    },
    form:{
      get() {
          return this.getForm;
      },
      set(value) {
          this.$store.dispatch('general/setForm', value);
      }
    },
    recall:{
      get() {
          return this.getRecall;
      },
      set(value) {
          this.$store.dispatch('general/setRecall', value);
      }
    },
    summery:{
      get() {
          return this.getSummery;
      },
      set(value) {
          this.$store.dispatch('general/setSummery', value);
      }
    },
/////////////////////pediatricStaticData///////////////
...mapGetters("pediatricStaticData", ["dietData","rxData","physicalTherapyData","diagnosisData","staticDataLoading","staticDataError","formData"]),
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
    isNotMainDiagnosisValid() {
      return this.$store.getters.getMainDignosisIsValid;
    },
    isNotLabToothisValid() {
      return this.$store.getters.getToothLabIsValid;
    },
    isNotLabToothCrownDesignisValid() {
      return this.$store.getters.getToothLabCrownDesignIsValid;
    },
    isNotLabToothCaseDesignisValid() {
      return this.$store.getters.getToothLabCaseDesignIsValid;
    },
    isNotLabSpecificInstactionsisValid() {
      return this.$store.getters.getToothLabSpecificInstructionsIsValid;
    },
    isNotLabNightguardsSplintsisValid() {
      return this.$store.getters.getToothLabNightguardsSplintsIsValid;
    },
    isNotLabOtherisValid() {
      return this.$store.getters.getToothLabOtherIsValid;
    },
    isNotLabScrewisValid() {
      return this.$store.getters.getToothLabScrewIsValid;
    },
    isNotLabImpantCrownDesignisValid() {
      return this.$store.getters.getToothLabImplantRxCrownDesignIsValid;
    },
    isNotLabRataienrsisValid() {
      return this.$store.getters.getToothLabRatainersIsValid;
    },
    notValid() {
      return (
        this.isNotMainDiagnosisValid ||
        this.isNotLabToothisValid ||
        this.isNotLabToothCrownDesignisValid ||
        this.isNotLabSpecificInstactionsisValid ||
        this.isNotLabToothCaseDesignisValid ||
        this.isNotLabNightguardsSplintsisValid ||
        this.isNotLabOtherisValid ||
        this.isNotLabScrewisValid ||
        this.isNotLabImpantCrownDesignisValid ||
        this.isNotLabRataienrsisValid
      );
    },
  },

  updated() {
    if (this.adultOrChildSelect.english === "CHILD")
      this.toothsLabels = this.childToothLetters;
    else this.toothsLabels = this.adultToothNumber;
  },
  methods: {
    async fetchStaticData() {
      this.$store.dispatch('pediatricStaticData/loadStaticData');
    },
    setToothNumbersToOldDiagnosis(diagnosisToothNumbers) {
      this.toothNumbers = diagnosisToothNumbers;
    },
    submit() {
      // clear selection buttons
      this.data[this.SelectedType.english].toothChart = {
        ...this.$refs.toothsComponent.submit(),
      };
      // console.log(this.data.diagnosis.toothChart.tableData.ADULT)
      // window.scroll({ top: 0, left: 0 });
      // to update  this.isTableContainData = true;
      this.tableDataAdult();
      if (this.SelectedType.id === 2) {
        this.operationTable();
      }
    },
    operationTable() {
      // console.log("operation tap");
      // console.log("this.operationTableBuffer",this.operationTableBuffer)

      Object.keys(this.operationTableBuffer).map((key) => {
        this.operationTableBuffer[key] = [
          ...new Set([
            ...this.data.operations.toothChart.tableData[this.adultOrChildSelect.english][
              key
            ],
            ...this.data.planning.toothChart.tableData[this.adultOrChildSelect.english][
              key
            ],
          ]),
        ];
        // // console.log(  this.operationTableBuffer[key] )
      });
    },
    getClear() {
      console.log(
        "clear",
        this.$refs.toothsComponent.clearButton().TempProceduresAndDiagnosisData
      );
      this.data[this.SelectedType.english].toothChart.multiSelectBuffer.map((tooth) => {
        this.toothNumbers[
          tooth
        ] = this.$refs.toothsComponent.clearButton().tempToothNumbers[tooth];
        this.proceduresAndDiagnosisData[tooth][
          this.SelectedType.english
        ] = this.$refs.toothsComponent.clearButton().TempProceduresAndDiagnosisData[
          tooth
        ][this.SelectedType.english];
        this.toothNumbers[tooth].isActive = false;
      });

      this.data[this.SelectedType.english].toothChart.multiSelectBuffer = [];
      this.data[this.SelectedType.english].toothChart = {
        ...this.$refs.toothsComponent.clearSelectionsButtons(),
      };
    },
    removeFromplanningTable(tooth) {
      this.$refs.toothsComponent.removeFromPlanningToothObject(tooth);
      this.$refs.toothsComponent.resetTempToothNumber(tooth);
      this.$refs.toothsComponent.resetTempProcedureAndDiagnosis(tooth);

      this.removeTooth(tooth);
      if (this.SelectedType.id === 2) {
        this.operationTable();
      }
    },
    removeTooth(toothNumber) {
      this.toothNumbers[toothNumber] = singleAdultTooth();
      this.proceduresAndDiagnosisData[toothNumber][
        this.SelectedType.english
      ] = resetProcedureAndDiagnosis()[this.SelectedType.english];
      this.data[this.SelectedType.english].toothChart.tableData[
        this.adultOrChildSelect.english
      ][toothNumber] = [];
      // to hide table body after remove all tooths
      if (this.SelectedType.id === 1) this.isDiagnosisTableContainData = false;
      if (this.SelectedType.id === 4) this.isPlanningTableContainData = false;
      this.tableDataAdult();
    },

    tableDataAdult() {
      var array = Object.keys(
        this.data[this.SelectedType.english].toothChart.tableData[
          this.adultOrChildSelect.english
        ]
      ).map((key) => {
        if (
          this.data[this.SelectedType.english].toothChart.tableData[
            this.adultOrChildSelect.english
          ][key].length
        )
          if (this.SelectedType.id === 1) this.isDiagnosisTableContainData = true;

        if (this.SelectedType.id === 4) this.isPlanningTableContainData = true;

        return key;
      });
      return array;
    },

    notValid3dInput(val) {
      this.notValid3d = val;
    },

    getSelectedTooth(value) {
      this.selectedTooth = value;
    },
    changeAdultOrChild() {
      if (this.displayModel) {
        if (this.selectedAdultOrChild.english == "ADULT") {
          this.toothNumbers = adultToothObject();
          this.SelectedType = this.mainOptions[0];
          this.proceduresAndDiagnosisData = adultProcedureAndDiagnosis();
        } else if (this.selectedAdultOrChild.english == "CHILD") {
          this.toothNumbers = childToothObject();
          this.proceduresAndDiagnosisData = childProcedureAndDiagnosis();
          this.SelectedType = this.mainOptions[0];
        }

        this.data = restData();
        this.adultOrChildSelect = { ...this.selectedAdultOrChild };
        this.data.adultOrChild = this.adultOrChildSelect;
      }
      this.displayModel = false;
    },
    openDialog(value) {
      if (value.english != this.adultOrChildSelect.english) {
        this.selectedAdultOrChild = value;
        this.displayModel = true;
      }
    },
    closeModel() {
      this.AdultOrChildChanged = true;
      if (this.adultOrChildSelect.english == "ADULT") {
        this.adultOrChildSelect = {
          english: "CHILD",
          arabic: "CHILD",
        };
      } else if (this.adultOrChildSelect.english == "CHILD") {
        this.adultOrChildSelect = {
          english: "ADULT",
          arabic: "ADULT",
        };
      }

      this.displayModel = false;
      this.data.adultOrChild = this.adultOrChildSelect;
    },
    async sendData() {
      const compress = new Compress();
      let x = 0;
      if (1 > x) {
        let labFormFiles = [];
        let implantRxFiles = [];
        let orthodontalFiles = [];
        let removableFiles = [];
        if (this.data.lab.labForm.specificInstructions.fileSrc.length) {
          for (
            let i = 0;
            i < this.data.lab.labForm.specificInstructions.fileSrc.length;
            i++
          ) {
            labFormFiles.push(
              this.data.lab.labForm.specificInstructions.fileSrc[i].rawFile
            );
          }
          let compressedData = await compress.compress(
            [...labFormFiles],
            {
              size: 2, // the max size in MB, defaults to 2MB
              quality: 0.75, // the quality of the image, max is 1,
              resize: true, // defaults to true, set false if you do not want to resize the image width and height
              rotate: false, // See the rotation section below
            },
            false
          );
          labFormFiles = [];
          compressedData.map(({ data }) => labFormFiles.push(data));
        }
        if (this.data.lab.implantRx.specificInstructions.fileSrc.length) {
          for (
            let i = 0;
            i < this.data.lab.implantRx.specificInstructions.fileSrc.length;
            i++
          ) {
            implantRxFiles.push(
              this.data.lab.implantRx.specificInstructions.fileSrc[i].rawFile
            );
          }

          let compressedData = await compress.compress(
            [...implantRxFiles],
            {
              size: 4, // the max size in MB, defaults to 2MB
              quality: 0.75, // the quality of the image, max is 1,
              resize: true, // defaults to true, set false if you do not want to resize the image width and height
              rotate: false, // See the rotation section below
            },
            false
          );

          implantRxFiles = [];
          compressedData.map(({ data }) => implantRxFiles.push(data));
        }
        if (this.data.lab.orthodontal.specificInstructions.fileSrc.length) {
          for (
            let i = 0;
            i < this.data.lab.orthodontal.specificInstructions.fileSrc.length;
            i++
          ) {
            orthodontalFiles.push(
              this.data.lab.orthodontal.specificInstructions.fileSrc[i].rawFile
            );
          }

          let compressedData = await compress.compress(
            [...orthodontalFiles],
            {
              size: 4, // the max size in MB, defaults to 2MB
              quality: 0.75, // the quality of the image, max is 1,
              resize: true, // defaults to true, set false if you do not want to resize the image width and height
              rotate: false, // See the rotation section below
            },
            false
          );
          orthodontalFiles = [];
          compressedData.map(({ data }) => orthodontalFiles.push(data));
        }
        if (this.data.lab.removableProsthetic.specificInstructions.fileSrc.length) {
          for (
            let i = 0;
            i < this.data.lab.removableProsthetic.specificInstructions.fileSrc.length;
            i++
          ) {
            removableFiles.push(
              this.data.lab.removableProsthetic.specificInstructions.fileSrc[i].rawFile
            );
          }
          let compressedData = await compress.compress(
            [...removableFiles],
            {
              size: 4, // the max size in MB, defaults to 2MB
              quality: 0.75, // the quality of the image, max is 1,
              resize: true, // defaults to true, set false if you do not want to resize the image width and height
              rotate: false, // See the rotation section below
            },
            false
          );
          removableFiles = [];
          compressedData.map(({ data }) => removableFiles.push(data));
        }
        let options = JSON.parse(JSON.stringify(this.options));
        delete options["main"];
        let data = {
          patient: {
            tapsData: {
              adultOrChild: { ...this.data.adultOrChild },
              diagnosis: {
                mainDiagnosis: {
                  ...this.data.diagnosis.mainDiagnosis,
                },
                toothChart: {
                  tableData: {
                    ...this.data.diagnosis.toothChart.tableData,
                  },

                  ortoFacialTMJ: {
                    ...this.data.diagnosis.toothChart.ortoFacialTMJ,
                  },
                },
              },

              operations: {
                toothChart: {
                  tableData: {
                    ...this.data.operations.toothChart.tableData,
                  },

                  implant: {
                    ...this.data.operations.toothChart.implant,
                  },
                },
              },

              planning: {
                toothChart: {
                  tableData: {
                    ...this.data.planning.toothChart.tableData,
                  },

                  implant: {
                    ...this.data.planning.toothChart.implant,
                  },
                },
              },

              threeDScanner: {
                ...this.data.threeDScanner,
              },
              lab: {
                ...this.data.lab,
                labForm: {
                  ...this.data.lab.labForm,
                  specificInstructions: {
                    ...this.data.lab.labForm.specificInstructions,
                    fileSrc: labFormFiles,
                  },
                },
                implantRx: {
                  ...this.data.lab.implantRx,
                  specificInstructions: {
                    ...this.data.lab.implantRx.specificInstructions,
                    fileSrc: implantRxFiles,
                  },
                },
                orthodontal: {
                  ...this.data.lab.orthodontal,
                  specificInstructions: {
                    ...this.data.lab.orthodontal.specificInstructions,
                    fileSrc: orthodontalFiles,
                  },
                },
                removableProsthetic: {
                  ...this.data.lab.removableProsthetic,
                  specificInstructions: {
                    ...this.data.lab.removableProsthetic.specificInstructions,
                    fileSrc: removableFiles,
                  },
                },
              },
            },
            teethData: {
              diagnosisAndOperation: this.toothNumbers,
              planning: this.$refs.toothsComponent?.tempPlanning,
            },
            prescription: [],
            proceduresAndDiagnosisData: {
              ...this.proceduresAndDiagnosisData,
            },
          },
          doctor: {
            data: options,
          },
        };
        console.log(data);
    //    console.log(JSON.stringify(data));
     
    this.saveData(data)
      }
    },
   async saveData(data){

    await axios
          .post("/clinic/dental/createDental", JSON.stringify(data), {
            headers: {
              "clinic-id": this.clinicId,
            },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => console.log(error));
        
    },
    save() {

    }
  
  },

  watch: {
    "data.adultOrChild"() {
      this.data.lab.orthodontal.springAligners.adultOrChild = {
        ...this.data.adultOrChild,
      };
      this.data.lab.removableProsthetic.adultOrChild = {
        ...this.data.adultOrChild,
      };

      this.operationTableBuffer = JSON.parse(
        JSON.stringify(
          this.data.operations.toothChart.tableData[this.adultOrChildSelect.english]
        )
      );

      this.diagnosisMainOptionSelected = this.options.main.diagnosis[0];
    },
    SelectedType: {
      //selectedType is the tap name
      handler() {
        //mearg two tables planning and operation table
        if (this.SelectedType.id === 2) {
          this.operationTable();
        }

        // clear multiselect and active tooth when change tap and back to last category on the
        if (
          this.SelectedType.id == 1 ||
          this.SelectedType.id == 2 ||
          this.SelectedType.id == 4
        ) {
          if (this.tempSelectedType) {
            this.data[this.tempSelectedType?.english].toothChart.multiSelectBuffer.map(
              (tooth) => {
                this.toothNumbers[
                  tooth
                ] = this.$refs.toothsComponent.clearButton().tempToothNumbers[tooth];
                this.proceduresAndDiagnosisData[tooth][
                  this.SelectedType.english
                ] = this.$refs.toothsComponent.clearButton().TempProceduresAndDiagnosisData[
                  tooth
                ][this.SelectedType.english];
                this.proceduresAndDiagnosisData[tooth][
                  this.SelectedType.english
                ] = this.$refs.toothsComponent.clearButton().TempProceduresAndDiagnosisData[
                  tooth
                ][this.SelectedType.english];

                this.toothNumbers[tooth].isActive = false;
              }
            );
          }

          this.data.diagnosis.toothChart.multiSelectBuffer = [];
          this.data.planning.toothChart.multiSelectBuffer = [];
          this.data.operations.toothChart.multiSelectBuffer = [];
        }

        if (
          this.SelectedType.id == 1 ||
          this.SelectedType.id == 2 ||
          this.SelectedType.id == 4
        ) {
          this.data.diagnosis.toothChart.category = {
            // the  category buttons
            english: null,
            arabic: null,
          };

          this.data.operations.toothChart.category = {
            english: null,
            arabic: null,
          };
        }
      },
      deep: true,
    },
    "data.diagnosis.toothChart.multiSelectBuffer": {
      handler() {
        this.tempSelectedType = this.SelectedType;
      },
      deep: true,
    },
    "data.planning.toothChart.multiSelectBuffer": {
      handler() {
        this.tempSelectedType = this.SelectedType;
      },
      deep: true,
    },
    "data.operations.toothChart.multiSelectBuffer": {
      handler() {
        this.tempSelectedType = this.SelectedType;
      },
      deep: true,
    },
    operationMainOptionSelected: {
      handler() {
        if (this.operationMainOptionSelected.id === 3) {
          this.gallarAndXray = true;
          //  this.selectedTooth =null to reset the selected tooth when switch to gallary xrays
          this.selectedTooth = null;
        } else this.gallarAndXray = false;

        // when change mainOption buttons  that fixed on the  left clear category buttons
        this.data[this.SelectedType.english].toothChart.category = {
          english: null,
          arabic: null,
        };

        // clear multiselect and active tooth when change mainOption buttons on that fixed on the left and back to last category on the
        if (
          this.SelectedType.id == 1 ||
          this.SelectedType.id == 2 ||
          this.SelectedType.id == 4
        ) {
          if (this.tempSelectedType) {
            this.data[this.tempSelectedType?.english].toothChart.multiSelectBuffer.map(
              (tooth) => {
                this.toothNumbers[
                  tooth
                ] = this.$refs.toothsComponent.clearButton().tempToothNumbers[tooth];
                this.proceduresAndDiagnosisData[tooth][
                  this.SelectedType.english
                ] = this.$refs.toothsComponent.clearButton().TempProceduresAndDiagnosisData[
                  tooth
                ][this.SelectedType.english];
                this.toothNumbers[tooth].isActive = false;
              }
            );
          }

          this.data.diagnosis.toothChart.multiSelectBuffer = [];
          this.data.planning.toothChart.multiSelectBuffer = [];
          this.data.operations.toothChart.multiSelectBuffer = [];
        }
      },
      deep: true,
    },

    planningMainOptionSelected: {
      handler() {
        if (this.planningMainOptionSelected.id === 3) {
          //  this.selectedTooth =null to reset the selected tooth when switch to gallary xrays
          this.selectedTooth = null;
          this.gallarAndXray = true;
        } else this.gallarAndXray = false;

        // when change mainOption buttons  that fixed on the  left clear category buttons
        this.data[this.SelectedType.english].toothChart.category = {
          english: null,
          arabic: null,
        };

        // clear multiselect and active tooth when change mainOption buttons on that fixed on the left and back to last category on the
        if (
          this.SelectedType.id == 1 ||
          this.SelectedType.id == 2 ||
          this.SelectedType.id == 4
        ) {
          if (this.tempSelectedType) {
            this.data[this.tempSelectedType?.english].toothChart.multiSelectBuffer.map(
              (tooth) => {
                this.toothNumbers[
                  tooth
                ] = this.$refs.toothsComponent.clearButton().tempToothNumbers[tooth];
                this.proceduresAndDiagnosisData[tooth][
                  this.SelectedType.english
                ] = this.$refs.toothsComponent.clearButton().TempProceduresAndDiagnosisData[
                  tooth
                ][this.SelectedType.english];
                this.toothNumbers[tooth].isActive = false;
              }
            );
          }

          this.data.diagnosis.toothChart.multiSelectBuffer = [];
          this.data.planning.toothChart.multiSelectBuffer = [];
          this.data.operations.toothChart.multiSelectBuffer = [];
        }
      },
      deep: true,
    },
    diagnosisMainOptionSelected: {
      handler() {
        // if (
        //   this.diagnosisMainOptionSelected.id == 3 &&
        //   this.data[this.SelectedType.english].toothChart.category.english ==
        //     "Orto, Facial, TMJ"
        // )
        if (this.diagnosisMainOptionSelected.id === 3) {
          //  this.selectedTooth =null to reset the selected tooth when switch to gallary xrays
          this.selectedTooth = null;
          this.gallarAndXray = true;
        } else this.gallarAndXray = false;
        // when change mainOption buttons  that fixed on the  left clear category buttons
        this.data[this.SelectedType.english].toothChart.category = {
          english: null,
          arabic: null,
        };

        // clear multiselect and active tooth when change mainOption buttons on that fixed on the left and back to last category on the
        if (
          this.SelectedType.id == 1 ||
          this.SelectedType.id == 2 ||
          this.SelectedType.id == 4
        ) {
          // console.log("x-ray");
          if (this.tempSelectedType) {
            this.data[this.tempSelectedType?.english].toothChart.multiSelectBuffer.map(
              (tooth) => {
                this.toothNumbers[
                  tooth
                ] = this.$refs.toothsComponent.clearButton().tempToothNumbers[tooth];

                this.proceduresAndDiagnosisData[tooth][
                  this.SelectedType.english
                ] = this.$refs.toothsComponent.clearButton().TempProceduresAndDiagnosisData[
                  tooth
                ][this.SelectedType.english];
                this.toothNumbers[tooth].isActive = false;
              }
            );
          }

          this.data.diagnosis.toothChart.multiSelectBuffer = [];
          this.data.planning.toothChart.multiSelectBuffer = [];
          this.data.operations.toothChart.multiSelectBuffer = [];
        }
      },
      deep: true,
    },
    "data.diagnosis.toothChart.category.english"(value) {
      if (value === "Orto, Facial, TMJ") {
        // clear multiselect and active tooth when change mainOption buttons on that fixed on the left and back to last category on the

        if (this.tempSelectedType) {
          this.data[this.tempSelectedType?.english].toothChart.multiSelectBuffer.map(
            (tooth) => {
              this.toothNumbers[
                tooth
              ] = this.$refs.toothsComponent.clearButton().tempToothNumbers[tooth];

              this.proceduresAndDiagnosisData[tooth][
                this.SelectedType.english
              ] = this.$refs.toothsComponent.clearButton().TempProceduresAndDiagnosisData[
                tooth
              ][this.SelectedType.english];
              this.toothNumbers[tooth].isActive = false;
            }
          );
        }

        this.data.diagnosis.toothChart.multiSelectBuffer = [];
        this.data.planning.toothChart.multiSelectBuffer = [];
        this.data.operations.toothChart.multiSelectBuffer = [];
      }
    },
  },
};
</script>
<style lang="scss" scoped>
  .ctm-bg-color{
    background-color: #56c59687;
  }
</style>
