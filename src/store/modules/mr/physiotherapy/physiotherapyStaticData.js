import axios from "axios";
import {convertStaticData} from "@/helpers/utilities"

export default {
  namespaced: true,
  state: {
    staticData: {
      diagnosis:{
        diagnosis:{},
      },
      /////////////////
      rx:{
        rx:{},
      },
      //////////////////////
      diet:{
        diet:{}
      },
      ///////////////////
      chiefComplaint: {chiefComplaint:{}},
      entranceTest: {
   
        bodyChartOfPain: {
        },
        physicalExamination: {
         
        },
        functionalEvaluation: {
        },
      },
      planning: {
        sessions:{}
      },
      Procedures: {
        sessions:{}
      },
      form:{
        form:{},
      },

    },
    staticDataLoading: false,
    staticDataError: false,
  },
    getters: { 
    staticData: state => state.staticData,
    staticDataLoading: state => state.staticDataLoading,
    staticDataError: state => state.staticDataError,
    ///////////////////////////////////////////////////
    chiefComplaint:state => state.staticData["chiefComplaint"],
    entranceTestBodyChartOfPain:state => state.staticData["entranceTest"]['bodyChartOfPain'],
    entranceTestPhysicalExamination:state => state.staticData["entranceTest"]['physicalExamination'],
    entranceTestFunctionalEvaluation:state => state.staticData["entranceTest"]['functionalEvaluation'],
    planning:state => state.staticData["planning"],
    Procedures:state => state.staticData["Procedures"],
    ///////////////////////////////
    dietData: (state) => state.staticData.diet.diet,
    rxData: (state) => state.staticData.rx.rx,
    formData: (state) => state.staticData.form.form,
    diagnosisData:state => state.staticData["diagnosis"],
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
            clinic_name: 'Physiotherapy'
          }
        })
        console.log(response);
        commit('setStaticData', convertStaticData(response.data))
        // commit('setStaticData', response.data)
        commit('setStaticDataError',false)
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
