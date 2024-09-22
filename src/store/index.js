import Vue from "vue";
import Vuex from "vuex";
///////////////////////////// namespaced module Example ///////////////////////////
import example from "./modules/example"; 
///////////////////////////// authentication Modules ///////////////////////////
import auth from "./modules/authentication/auth"; 
///////////////////////////// business Modules ///////////////////////////
import business from "./modules/business/business"; 
///////////////////////////// Static Data Modules ///////////////////////////
import layout from "./modules/static/layout/layout"; 
/////////////////////////// Start Medical Records Modules //////////////////////////
import detailsOphthalmic from "./modules/mr/ophthalmic/detailsOphthalmic"; 
///////////////Physiotherapy Modules////////////////////////////////////////////////
import detailsPhysiotherapy from "./modules/mr/physiotherapy/detailsPhysiotherapy";  
/////////////// General Modules//////////////////////////
import detailsGeneral from "./modules/mr/general/detailsGeneral"; 
/////////////// Pediatric Modules //////////////////////////
import detailsPediatric from "./modules/mr/pediatric/detailsPediatric"; 
/////////////// Gynecology Modules //////////////////////////
import detailsGynecology from "./modules/mr/gynecology/detailsGynecology"; 
////////////// pharmacy Modules/////////////////////////////
import allPharmacy from "./modules/pharmacy/allPharmacy"; 
////////////Medical labs Modules////////////////////////////
import labs from "./modules/labs/labs"; 
//////////////////Search Clinics Modules/////////////////////////////
import allSearchClinics from "./modules/search/clinics/allSearchClinics"; 
/////////////////////////// Start ERP Modules ///////////////////////////////////////
import erp from "./modules/erp/erp";
/////////////////////////// End ERP Modules ///////////////////////////////////////////
/////////////////////////// Start Profile Modules ///////////////////////////////////////
import measurements from "./modules/profile/measurements"
/////////////////////////// End Profile Modules ///////////////////////////////////////////


import erp_v2 from "./modules/erp_v2/erp_v2";



Vue.use(Vuex);
Vue.config.devtools = true
export default new Vuex.Store({
  namespaced: true,
  state: {

  },
  // get the currant state value
  getters: { 

  },
  // use to perform un mutate or change states
  mutations: {

  }, 
  // use to perform un asynchronous tasks
  actions: { 

  },
  modules: {
    example,
    auth,
    business,
    layout,
     /****** Start ERP Modules ********/
     erp,
     /****** Start Medical Records Modules ********/
     
    ///////ophthalmic //////
    detailsOphthalmic,
    /////// general////////
    detailsGeneral,
    ////// physiotherapy //////
    detailsPhysiotherapy,
    //// pediatric ////////
    detailsPediatric,
    //////Gynecology ////////
    detailsGynecology,
    //////labs///////////
    labs,
    //////pharmacy//////////
    allPharmacy,
    //////Search Clinics/////////
    allSearchClinics,
    /****** End Medical Records Modules ********/

    /****** Start Profile Modules ********/
    measurements,
    /****** End Profile Modules ********/




    erp_v2,
  },
});