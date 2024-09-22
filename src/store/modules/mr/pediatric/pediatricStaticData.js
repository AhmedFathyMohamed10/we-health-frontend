import axios from "axios";
import {convertStaticData} from "@/helpers/utilities"
export default {
  namespaced: true,
  state: {
    staticData: {
      feeding: {
        formula: {
        },
  
      },
      vaccination: {
        vaccination :{}
      },
      physicalExam: {
        Behavioral:{},
        Physical:{}
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
    feeding: (state) => state.staticData.feeding,
    vaccination: (state) => state.staticData.vaccination,
    physicalExam: (state) => state.staticData.physicalExam,
   ////////////////////////////////////////////////
    dietData: (state) => state.staticData.diet.diet,
    rxData: (state) => state.staticData.rx.rx,
    physicalTherapyData: (state) => state.staticData.physicalTherapy.physicalTherapy,
    diagnosisData:state => state.staticData["diagnosis"],
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
    async loadStaticData ({ commit }) {
      // const clinic_code = localStorage.getItem('clinic_code')
      commit('setStaticDataLoading', true)
      try {
        const response = await axios.get('get-static-data',{
          params: {
            clinic_name: 'Pediatric'
          }
        })
        console.log(response);
        commit('setStaticData', convertStaticData(response.data))
        // commit('setStaticData', response.data)
        commit('setStaticDataError',null)
        return Promise.resolve(response.data)
      } catch (error) {
        console.log(error);
        commit('setStaticDataError',true)
        return Promise.reject(error.response.data)
      }
      finally{
        commit('setStaticDataLoading', false)
      }
    }
  },
};
