import axios from "axios";
import {convertStaticData} from "@/helpers/utilities"
export default {
  namespaced: true,
  state: {
    staticData: {  
      obstetric: {
        pregFollowUp:{
          bloodGroup:[],
          rh:[],
          previousLabors:[],
          sex:[],
        },
      },
      Gyn: {
        infertility:{
          durationUnit:[],
            semen:[],
            wife:[],
            cycle:[],
            ultraSound:[],
            hsg:[],
            rightTube:[],
            leftTube:[],
          
        },
      },
      diagnosis:{
        diagnosis:{},
      },
      rx:{
        rx:{},
      },
      diet:{
        diet:{},
      },
      physicalTherapy:{
        physicalTherapy:{},
      },
      form:{
        form:{},
      },
    },
    staticDataLoading: false,
    staticDataError: null,
  },
  // get the currant state value
  getters: {
    staticData: (state) => state.staticData,
    staticDataLoading: (state) => state.staticDataLoading,
    staticDataError: (state) => state.staticDataError,
    ///////////////////////////////////////////////////
    obstetric: (state) => state.staticData.obstetric,
    gyn: (state) => state.staticData.gyn,
    ///////////////////////////////////////////
    diagnosisData:state => state.staticData["diagnosis"],
    rxData:state => state.staticData["rx"]["rx"],
    dietData:state => state.staticData["diet"]["diet"],
    physicalTherapyData:state => state.staticData["physicalTherapy"]["physicalTherapy"],
    formData:state => state.staticData["form"]["form"],
   
  },
  // use to perform un mutate or change states
  mutations: {
    setStaticData(state, data) {
      state.staticData = data;
    },
    
    setStaticDataLoading(state, loading) {
      state.staticDataLoading = loading;
    },
    setStaticDataError(state, error) {
      state.staticDataError = error;
    },
  },
  // use to perform un asynchronous tasks
  actions: {

  
    //////////////////////////
    async loadStaticData ({ commit }) {
      // const clinic_code = localStorage.getItem('clinic_code')
      commit('setStaticDataLoading', true)
      try {
        const response = await axios.get('get-static-data',{
          params: {
            clinic_name: 'Gynecology'
          } 
        })
        // console.log(convertStaticData(response.data));
        commit('setStaticData', convertStaticData(response.data))
        // commit('setStaticData', response.data)
        commit('setStaticDataError',null)
        // console.log(response.data)
        return Promise.resolve(response.data)
      } catch (error) {
        // console.log(error);
        commit('setStaticDataError',true)
        return Promise.reject(error.response)
      }
      finally{
        commit('setStaticDataLoading', false)
      }
    }

  },
};
