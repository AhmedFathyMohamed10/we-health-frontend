export default {
  namespaced: true,
  state: {
    generalObject: {
      patientId: "ecf849ba-399d-11ed-b668-0242ac120002",
      diagnosis:{
        complaints:[],
        diagnosis:[]
      },
      rx: [],
      medicalTest: [], 
      diet: [],
      physicalTherapy:[],
      referral: [],
      surgery: [],
      form: [],
      recall: [],
      summery: [],      
    },
  },
  mutations: {
    // Diagnosis ///////////////////////////
    'Set_Diagnosis': (state, payload) => {
      state.generalObject.diagnosis = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // Rx ///////////////////////////
    'Set_Rx': (state, payload) => {
      state.generalObject.rx = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // MedicalTest ///////////////////////////
    'Set_Medical_Test': (state, payload) => {
      state.generalObject.medicalTest = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // Diet ///////////////////////////
    'Set_Diet': (state, payload) => {
      state.generalObject.diet = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // PhysicalTherapy ///////////////////////////
    'Set_Physical_Therapy': (state, payload) => {
      state.generalObject.physicalTherapy = JSON.parse(
        JSON.stringify(payload)
      );
    },    
    // Referral ///////////////////////////
    'Set_Referral': (state, payload) => {
      state.generalObject.referral = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // Surgery ///////////////////////////
    'Set_Surgery': (state, payload) => {
      state.generalObject.surgery = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // Form ///////////////////////////
    'Set_Form': (state, payload) => {
      state.generalObject.form = JSON.parse(
        JSON.stringify(payload)
        );
      },
    // Recall ///////////////////////////
    'Set_Recall': (state, payload) => {
      state.generalObject.recall = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // Summery ///////////////////////////
    'Set_Summery': (state, payload) => {
      state.generalObject.summery = JSON.parse(
        JSON.stringify(payload)
      );
    },
  },
  actions: {
    // Diagnosis ///////////////////////////
    setDiagnosis(context,payload) {
      context.commit("Set_Diagnosis",payload);
    },
    // Rx ///////////////////////////
    setRx(context,payload) {
      context.commit("Set_Rx",payload);
    },
    // MedicalTest ///////////////////////////
    setMedicalTest(context,payload) {
      context.commit("Set_Medical_Test",payload);
    },
    // Diet ///////////////////////////
    setDiet(context,payload) {
      context.commit("Set_Diet",payload);
    },
    // PhysicalTherapy ///////////////////////////
    setPhysicalTherapy(context,payload) {
      context.commit("Set_Physical_Therapy",payload);
    },
    // Referral ///////////////////////////
    setReferral(context,payload) {
      context.commit("Set_Referral",payload);
    },
    // Surgery ///////////////////////////
    setSurgery(context,payload) {
      context.commit("Set_Surgery",payload);
    },
    // Form ///////////////////////////
    setForm(context,payload) {
      context.commit("Set_Form",payload);
    },
    // Summery ///////////////////////////
    setSummery(context,payload) {
      context.commit("Set_Summery",payload);
    },

  },
  getters: {
    getGeneralObject(state) {
      return state.generalObject;
    },
    getDiet(state) {
      return state.generalObject.diet;
    },
    getDiagnosis(state) {
      return state.generalObject.diagnosis;
    },
    getRx(state) {
      return state.generalObject.rx;
    },
    getMedicalTest(state) {
      return state.generalObject.medicalTest;
    },
    getPhysicalTherapy(state) {
      return state.generalObject.physicalTherapy;
    },
    getForm(state) {
      return state.generalObject.form;
    },
    getReferral(state) {
      return state.generalObject.referral;
    },
    getSurgery(state) {
      return state.generalObject.surgery;
    },
    getRecall(state) {
      return state.generalObject.recall;
    },
    getSummery(state) {
      return state.generalObject.summery;
    },
  },
};
