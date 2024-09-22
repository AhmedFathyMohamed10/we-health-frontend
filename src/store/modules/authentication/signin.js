import {axiosAuth} from '@/plugins/axios/axiosAuth'
import {axiosBusinessRegistration} from '@/plugins/axios/axiosBusinessRegistration'

export default {
  namespaced: true,
  state: {
    form: {
      phoneOrEmailOrUsername:"mahmoud1@gmail.com",
      password:"12345678",
      lang:"en"
    },
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
  }, 
  // use to perform un asynchronous tasks
  actions: { 
    async findUser({ commit },payload) {
      try {
        commit('setServerLoading', true);
        const response = await axiosAuth.post('find-user', payload);
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
    },
    async login({ commit },payload) {
      try {
        commit('setServerLoading', true);
        const response = await axiosAuth.post('login', payload);
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
