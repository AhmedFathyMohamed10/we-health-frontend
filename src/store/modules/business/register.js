import {axiosBusinessRegistration} from '@/plugins/axios/axiosBusinessRegistration'
export default {
  namespaced: true,
  state: {
    form: {
      "isReadOnly":true,
      ///single or multiple///
      "specialityChoice":false,
      "multipleChoice":false,
      // "singleChoice":false,
      /////sure selected speciality from lista speciality before go next step (register) /////
      "displaySpecialty":false,
      /////////////////
      "category":null,
      "categoryName":"",
      "categoryKey":"",
      "speciality":0,
      "subspeciality":[],
      "name": {
        "otherName": "",
        "enName": ""
      },
      "title":null,
      "service_type": [],
      "bio":"",
      "cover_img":null,
      "cover":null,
      "profile_img":null,
      "img":null,
      "location": {
        "address": "",
        "zipCode": "",
        "city":null,
        "coordinates": {
          "lt": "",
          "lg": ""
        }
      },
      "emails": [],
      "org_phone_numbers":[],
      "websitesSocialAccounts": [],
      "businessHours":{
        "type":null, // "24/7" or "days",
        "schedule":[],
      },
      "waiting_time":null,
      "insuranceCompanies": [],
      "equipments":[],
      "fees":{
        "selection":1,
        "value": null
      },
      "acceptanceAgreement":false,
      "owner": 1,
      "createdBy": 1,
      "dashboard": "",
      "saveDataDocuments":null,
    },
    // form: {
    //   "category":null,
    //   "speciality":null,
    //   "subspeciality":[1],
    //   "name": {
    //     "arName": "عيادة الدكتور محمد بيومي",
    //     "enName": "Dr Mohammed Bayoumy Clinic"
    //   },
    //   "title":1,
    //   "service_type": [1],
    //   "description":"description for business",
    //   "cover_img":null,
    //   "img":null,
    //   "location": {
    //     "address": "Benha- egypt",
    //     "zipCode": "123456",
    //     "city":1,
    //     "coordinates": {
    //       "lt": "30.4453632",
    //       "lg": "31.1814971"
    //     }
    //   },
    //   "email": "business@info.net",
    //   "org_phone_numbers":[
    //     // max 3 numbers
    //     {
    //     "countryCode": "+20",
    //     "number": "01067849428",
    //     "formattedNumber":"+201067849428",
    //     },
    //     {
    //     "countryCode": "+20",
    //     "number": "01267849428",
    //     "formattedNumber":"+201267849428",
    //     },
    //   ],
    //   "website": {
    //     "website":"http://www.localhost:8000/",
    //     "facebook":"https://www.facebook.com/",
    //     "youtube":"https://www.facebook.com/",
    //     "instagram":"https://www.facebook.com/",
    //     "whatsapp":"01234567891"
    //   },
    //   "businessHours":{
    //     "type":"days", // or "24/7",
    //     "schedule":[
    //       {
    //         "day":"Sunday",
    //         "opening":"09:00",
    //         "closing":"12:00",
    //       },
    //       {
    //         "day":"Monday",
    //         "opening":"09:00",
    //         "closing":"12:00",
    //       },
    //     ],
    //   },
    //   "waiting_time":15,
    //   "insuranceCompanies": [],
    //   "fees":{
    //     "selection":1,
    //     "value": 500
    //   },
    //   "acceptanceAgreement":true,
    //   "owner": 1,
    //   "createdBy": 1,
    //   "dashboard": "",
    // },
    
    serverLoading: false,
    serverResponse: null,
    serverError: null,
  },
  // get the currant state value
  getters: { 
    getForm: state => state.form,
    getServerLoading: state => state.serverLoading,
    getServerResponse: state => state.serverResponse,
    getServerError: state => state.serverError,
  },
  // use to perform un mutate or change states
  mutations: {
     //////////////////
    setForm(state, payload) {
      state.form = payload;
    },
    setServerLoading(state, loading) {
      state.serverLoading = loading;
    },
    setServerResponse(state, response) {
      state.serverResponse = response;
    },
    setServerError(state, error) {
      state.serverError = error;
    },
    //////////Reset_Form//////////
    'Reset_Form': (state) => {
      state.form = {
        "isReadOnly":true,
        "specialityChoice":false,
        "multipleChoice":false,
        "displaySpecialty":false,
        /////////////////
        "category":null,
        "categoryName":"",
        "speciality":0,
        "subspeciality":[],
        "name": {
          "otherName": "",
          "enName": ""
        },
        "title":null,
        "service_type": [],
        "bio":"",
        "cover_img":null,
        "img":null,
        "location": {
          "address": "",
          "zipCode": "",
          "city":null,
          "coordinates": {
            "lt": "",
            "lg": ""
          }
        },
        "emails": [],
        "org_phone_numbers":[],
        "websitesSocialAccounts": [],
        "businessHours":{
          "type":null, 
          "schedule":[],
        },
        "waiting_time":null,
        "insuranceCompanies": [],
        "equipments":[],
        "fees":{
          "selection":1,
          "value": null
        },
        "acceptanceAgreement":false,
        "owner": 1,
        "createdBy": 1,
        "dashboard": "",
        "saveDataDocuments":null,
      
      }
    }
  }, 
  // use to perform un asynchronous tasks
  actions: { 
    setForm({commit}, payload) {
      commit('setForm',payload);
    },
    async registerBusiness({commit},payload) {
      try {
        commit('setServerLoading', true);
        const response = await axiosBusinessRegistration.post('register_business', payload);
        commit('setServerResponse', response);
        commit('setServerLoading', false);
        commit('setServerError',null);
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setServerResponse', null);
        commit('setServerError', error);
        commit('setServerLoading', false);
        return Promise.reject(error)
      }
    },
    resetForm(context){
      context.commit("Reset_Form");
    },
   
  },
};
