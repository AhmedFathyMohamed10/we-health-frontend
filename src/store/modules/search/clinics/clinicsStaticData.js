import axios from 'axios';
export default {
    namespaced:true,
    state:{
    staticData:{
        filters:{},
        infoDoctor:{},
        booking:{},
        map:{},
        photos:{},
        rating:{},
    },
    staticDataLoading:false,
    staticDataError:null,

    },
    mutations:{
        setStaticData(state,data){
            state.staticData = data;
        },
        staticDataLoading(state,loading){
            state.staticData = loading;
        },
        staticDataError(state,error){
            state.staticData = error;
        }
    },
    actions:{
        async loadStaticData ({ commit }) {
            commit('setStaticDataLoading', true)
            try {
              const response = await axios.get('get-static-data')
              commit('setStaticData', response.data)
              console.log(response.data);
              commit('setStaticDataError',null)
              return Promise.resolve(response.data)
            } catch (error) {
              console.log(error);
              commit('setStaticDataError',true)
              return Promise.reject(error.response)
            }
            finally{
              commit('setStaticDataLoading', false)
            }
          }

    },
    ////////////////////////////////////////////
    getters:{
      staticData:(state)=>state.staticData,
      staticDataLoading:(state)=>state.staticDataLoading,
      staticDataError:(state)=>state.staticDataError,
      /////////////////////////////////////
    }
};