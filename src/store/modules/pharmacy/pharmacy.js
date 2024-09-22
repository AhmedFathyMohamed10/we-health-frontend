
  /////////////////////////////
  function cashPoint(){
    let containsObj={  
      OTC:{
         
          patientName:"",
          complaintText: "",
          deleteComplaint:"",
          complaints:[],
          payingMethod:"",
          search:"",
          totalDiscount:{
            value:"",
            selection:""
          },
          vat:"",
          preparation:[],
      },
   /////////////////////// 
     Rx:{
     
          patientName:"",
          diagnosis:[],
          clinicName:"",
          diagnosisText:"",
          deleteDiagnosis:"",
          paymentMethod:"",
          search:"",
          totalDiscount:{
            value:"",
            selection:""
          },
          vat:"",
          preparation:[],
      },
      CallCenter:{
          patientNameCallCenter:'',
          patientName:'',
          complaints:[],
          payingMethod:'',
          totalDiscount:{
            value:"",
            selection:""
          },
          vat:'',
          preparation:[],
      },
      Insurance:{
       patientNameInsurance:'',
       patientName:'',
       complaints:[],
       payingMethod:'',
       totalDiscount:{
         value:"",
         selection:""
       },
       vat:'',
       preparation:[],
      }
    };
    let containsCashpoint=[];
    for(let count= 0; count < 5; count++) {
        containsCashpoint.push(containsObj);
    }
    return containsCashpoint ;
   
  };
  ///////////////////////////
export default {
    namespaced: true,
    state: {
      pharmacyObject: {
        patientId: "ecf849ba-344d-11ed-b668-0242ac120002",
        selectedNum:0,  
        selectedTab:"Rx", 
        containsCashpoint:cashPoint() 
      },
    },
    mutations: {

      'Selected-Number': (state, payload) => {
        state.pharmacyObject.selectedNum = JSON.parse(
          JSON.stringify(payload)
         );
       },

      'Selected-Tab': (state, payload) => {
        state.pharmacyObject.selectedTab = JSON.parse(
          JSON.stringify(payload)
         );
       },
      'Active-Invoice': (state, payload) => {
        state.pharmacyObject.containsCashpoint= JSON.parse(
          JSON.stringify(payload)
         );
       },
    },
    actions: { 
      setSelectedNumber(context, payload) {
        context.commit("Selected-Number",payload);
      },
      setSelectedTab(context, payload) {
        context.commit("Selected-Tab",payload);
      },
      setActiveInvoice(context,payload) {
        context.commit("Active-Invoice",payload);
      },
    },
    getters: {
      getpharmacyObject(state) {
        return state.pharmacyObject;
      },
      ////////////////////////////////////////
      getSelectedNumber(state) {
        return state.pharmacyObject.selectedNum;
      },
      getSelectedTab(state) {
        return state.pharmacyObject.selectedTab;
      },
      
      getActiveInvoice(state,getters) {
        return state.pharmacyObject.containsCashpoint[getters.getSelectedNumber][getters.getSelectedTab];
      },
      

    },
  };








  