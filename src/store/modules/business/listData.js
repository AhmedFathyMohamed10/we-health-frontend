import {axiosBusinessRegistration} from '@/plugins/axios/axiosBusinessRegistration'
export default {
  namespaced: true,
  state: {
    serverLoading: false,
    serverResponse: null,
    serverError: null,
  },
  // get the currant state value
  getters: { 
    getServerLoading: state => state.serverLoading,
    getServerResponse: state => state.serverResponse,
    getServerError: state => state.serverError,
  },
  mutations: {
    setServerLoading(state, loading) {
      state.serverLoading = loading;
    },
    setServerResponse(state, response) {
      state.serverResponse = response;
    },
    setServerError(state, error) {
      state.serverError = error;
    },
  }, 
  // use to perform un asynchronous tasks
  actions: { 
    // async staticDataOptions({commit},payload) {
    //   try {
    //     commit('setServerLoading', true);
    //     const response = await axiosBusinessRegistration.get(`list_other_static_data`);
    //     // const response = await axiosBusinessRegistration.get(`list_other_static_data?id=${payload.id}`);
    //     // const response = await axiosBusinessRegistration.get(`list_other_static_data/${payload.id}`);
    //     commit('setServerResponse', response);
    //     commit('setServerLoading', false);
    //     commit('setServerError',null);
    //     console.log(response)
    //     return Promise.resolve(response)
    //   } catch (error) {
    //     console.log(error)
    //     commit('setServerResponse', null);
    //     commit('setServerError', error);
    //     commit('setServerLoading', false);
    //     return Promise.reject(error)
    //   }
    // }
    async documentsAndStaticDataAndImages({commit},payload) {
      try {
        commit('setServerLoading', true);
        const specialityId = payload.speciality;
        // const listDataResponse = await axiosBusinessRegistration.get(`list_data/${payload.id}/${specialityId}`);
        const listDataResponse = await Promise.all([
        axiosBusinessRegistration.get(`list_data/${payload.id}/${specialityId}`),
        ]) ;
        commit('setServerResponse', listDataResponse);
        commit('setServerLoading', false);
        commit('setServerError',null);
        return Promise.resolve(listDataResponse)
      } catch (errors) {
        console.log(errors)
        commit('setServerResponse', null);
        commit('setServerError', errors);
        commit('setServerLoading', false);
        return Promise.reject(errors);
      }
    }
  },
};
