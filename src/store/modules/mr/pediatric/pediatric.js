export default {
  namespaced: true,
  state: {
    pediatricObject: {
      patientId: "ecf849ba-399d-11ed-b668-0242ac120002",
      growthCharts :{},
      bilirubinChart :{},
      feeding: {
        formula: [],
        diet: [],
        breast:""
      },
      vaccination :[],
      physicalExam: {
        behavioral: [],
        physical:[]
      },
      growthCharts:{
                length: null,
                weight: null,
                head: null,
                bmi: null
      },
      bilirubinChart:{
                serum: null,
                comment: null,
            },
    },
  },
  getters: { 
    getPediatricObject:state=>state.pediatricObject,
    ///////////////////// feeding //////////////////////////////
    formula: state => state.pediatricObject.feeding.formula,
    diet: state => state.pediatricObject.feeding.diet,
    breast: state => state.pediatricObject.feeding.breast,
    
    ///////////////////// vaccination //////////////////////////////
    vaccination: state => state.pediatricObject.vaccination,
    behavioral: state => state.pediatricObject.physicalExam.behavioral,
    physical: state => state.pediatricObject.physicalExam.physical,
    growthCharts: state => state.pediatricObject.growthCharts,
    bilirubinChart: state => state.pediatricObject.bilirubinChart,
  },
  mutations: {
    // growthCharts ///////////////////////////
    'Set_Growth_Charts': (state, payload) => {
      state.pediatricObject.summery = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // bilirubinChart ///////////////////////////
    'Set_Bilirubin_Chart': (state, payload) => {
      state.pediatricObject.bilirubinChart = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // formula 
    'Set_Formula': (state, payload) => {

       state.pediatricObject.feeding.formula = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // diet 
    'Set_Diet': (state, payload) => {

       state.pediatricObject.feeding.diet = JSON.parse(
        JSON.stringify(payload)
      );
    },

    // Breat 
      'Set_Breast': (state, payload) => {

       state.pediatricObject.feeding.breast = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // feeding ///////////////////////////
    'Set_Feeding': (state, payload) => {
      state.pediatricObject.feeding = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // vaccination ///////////////////////////
    'Set_Vaccination': (state, payload) => {
      state.pediatricObject.vaccination = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // physicalExam ///////////////////////////
    'Set_Physical_Exam': (state, payload) => {
      state.pediatricObject.physicalExam = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // Behavioral
    'Set_Behavioral': (state, payload) => {

       state.pediatricObject.physicalExam.behavioral = JSON.parse(
        JSON.stringify(payload)
      );
    },
     'Set_Physical': (state, payload) => {

       state.pediatricObject.physicalExam.physical = JSON.parse(
        JSON.stringify(payload)
      );
    },
  },
  actions: {
    //Set_Formula
    setFormula(context,payload) {
      context.commit("Set_Formula",payload);
    },

    //Set_Diet
    setDiet(context,payload) {
      context.commit("Set_Diet",payload);
    },

    //Set_Breast
    setBreast(context,payload) {
      context.commit("Set_Breast",payload);
    },
    // growthCharts ///////////////////////////
    setGrowthCharts(context,payload) {
      context.commit("Set_Growth_Charts",payload);
    },
    // bilirubinChart ///////////////////////////
    setBilirubinChart(context,payload) {
      context.commit("Set_Bilirubin_Chart",payload);
    },
    // feeding ///////////////////////////
    setFeeding(context,payload) {
      context.commit("Set_Feeding",payload);
    },
    // vaccination ///////////////////////////
    setVaccination(context,payload) {
      context.commit("Set_Vaccination",payload);
    },
    // physicalExam ///////////////////////////
    setPhysicalExam(context,payload) {
      context.commit("Set_Physical_Exam",payload);
    },
    setBehavioral(context,payload) {
      context.commit("Set_Behavioral",payload);
    },
    // setBehavioralSelectedOptions(context, payload) {
    //    context.commit("Set_Behavioral",payload);
    //   // context.commit("Set_Behavioral_SelectedOptions",payload);
    // },
    
     setPhysical(context,payload) {
      context.commit("Set_Physical",payload);
    },
  },
};
