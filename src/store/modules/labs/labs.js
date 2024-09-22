
  /////////////////////////////
  function labs(){
    let containsObj={  
    CashPoint:{
          patientName:"",
          totalVat:{
            value:"",
            selection:""
          },
          totalDiscount:{
            value:"",
            selection:""
          },
          numValue:1,
          /////////////////
    
          dueDate:"",
          amount:null,
          remaining:"",
          totalAmount:"",
          totalDiscountTable:"",
          vatTable:"",
          sum:"",
          itemNumber:"",
          CashierName:"",
          accountName:"",
          invoiceNumber:"",
          invoiceNote:"",
          paymentMethod:{
            value:"",
            selection:""
          },
          preparation:[],
          /////////////////////
          Cashier:null,
          reviewer:null,
          contentReviewer:[],
          contentCashier:[],
    },
   /////////////////////// 
    Requests:{
            patientName:"",
            vat:"",
            totalDiscount:{
              value:"",
              selection:""
            },
            preparation:[],
      },
    CallCenter:{
            patientName:"",
            vat:"",
            totalDiscount:{
              value:"",
              selection:""
            },
            preparation:[],
    },
    Insurance:{
        patientName:"",
        vat:"",
        totalDiscount:{
        value:"",
        selection:""
        },
        preparation:[],
    }
    };
    let containsLabs=[];
    for(let count= 0; count < 5; count++) {
      containsLabs.push(containsObj);
    }
    return containsLabs ;
   
  };
  ///////////////////////////
export default {
    namespaced: true,
    state: {
      labObject: {
        patientId: "ecf849ba-344d-11ed-b668-0242ac120002",
        selectedNum:0,  
        selectedTab:"CashPoint", 
        isActiveRed:false,
        containsLabs:labs() 
      },
    },
    mutations: {

      'Selected-Number': (state, payload) => {
        state.labObject.selectedNum = JSON.parse(
          JSON.stringify(payload)
         );
       },
      'Is-Active-Red': (state, payload) => {
        state.labObject.isActiveRed = JSON.parse(
          JSON.stringify(payload)
         );
       },

      'Selected-Tab': (state, payload) => {
        state.labObject.selectedTab = JSON.parse(
          JSON.stringify(payload)
         );
       },
      'Active-Lab': (state, payload) => {
        state.labObject.containsLabs= JSON.parse(
          JSON.stringify(payload)
         );
       },
    },
    actions: { 
      setSelectedNumber(context, payload) {
        context.commit("Selected-Number",payload);
      },
      setIsActiveRed(context, payload) {
        context.commit("Is-Active-Red",payload);
      },
      setSelectedTab(context, payload) {
        context.commit("Selected-Tab",payload);
      },
      setActiveLab(context,payload) {
        context.commit("Active-Lab",payload);
      },
    },
    getters: {
      getpharmacyObject(state) {
        return state.labObject;
      },
      ////////////////////////////////////////
      getSelectedNumber(state) {
        return state.labObject.selectedNum;
      },
      getIsActiveRed(state) {
        return state.labObject.isActiveRed;
      },
      getSelectedTab(state) {
        return state.labObject.selectedTab;
      },
      
      getActiveLab(state,getters) {
        return state.labObject.containsLabs[getters.getSelectedNumber][getters.getSelectedTab];
      },
      

    },
  };








  