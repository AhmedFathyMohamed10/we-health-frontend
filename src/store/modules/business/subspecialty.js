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
  // use to perform un mutate or change states
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
    async subspecialtyList({commit},payload) {
      console.log(payload);
      try {
        commit('setServerLoading', true);
        const response = await axiosBusinessRegistration.get(`speciality/${payload.id}/list_subspecialities`);
        commit('setServerResponse', response);
        commit('setServerLoading', false);
        commit('setServerError',null);
        console.log(response)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setServerResponse', null);
        commit('setServerError', error);
        commit('setServerLoading', false);
        return Promise.reject(error)
      }
    }
  },
};
