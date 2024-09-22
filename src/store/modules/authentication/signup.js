import {axiosAuth} from '@/plugins/axios/axiosAuth'
export default {
  namespaced: true,
  state: {
    form: {
        username:"mahmoud1",
        email:"mahmoud1@gmail.com",
        gender:"Male",
        fullname:"Mahmmoud Hamed",
        dob:"1995-11-20",
        mobile:"01234567891",
        password:"12345678"
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
    async signupStep1({ commit },payload) {
      try {
        commit('setServerLoading', true);
        const response = await axiosAuth.post('sign-up-step1',payload);
        commit('setServerResponse', response);
        commit('setServerLoading', false);
        commit('setServerError',null);
        // console.log(response)
        return Promise.resolve(response)
      } catch (error) {
        // console.log(error)
        commit('setServerResponse', null);
        commit('setServerError', error);
        commit('setServerLoading', false);
        return Promise.reject(error)
      }
    },
    async sendVerificationCode({ commit },payload) {
      try {
        commit('setServerLoading', true);
        const response = await axiosAuth.post('send-verify-phone',payload);
        commit('setServerResponse', response);
        commit('setServerLoading', false);
        commit('setServerError',null);
        // console.log(response)
        return Promise.resolve(response)
      } catch (error) {
        // console.log(error)
        commit('setServerResponse', null);
        commit('setServerError', error);
        commit('setServerLoading', false);
        return Promise.reject(error)
      }
    },
    async verifyPhoneNumber({ commit },payload) {
      try {
        commit('setServerLoading', true);
        const response = await axiosAuth.post('verify-phone',payload);
        commit('setServerResponse', response);
        commit('setServerLoading', false);
        commit('setServerError',null);
        // console.log(response)
        return Promise.resolve(response)
      } catch (error) {
        // console.log(error)
        commit('setServerResponse', null);
        commit('setServerError', error);
        commit('setServerLoading', false);
        return Promise.reject(error)
      }
    },
    async register({ commit },payload) {
      try {
        commit('setServerLoading', true);
        const response = await axiosAuth.post('register', payload);
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
