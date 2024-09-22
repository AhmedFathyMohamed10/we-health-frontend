import {axiosAuth} from '@/plugins/axios/axiosAuth'
export default {
  namespaced: true,
  state: {
    user: null,
    isAuthenticated: false,
    tokens:{
      access:"",
      refresh:""
    },
    serverLoading: false,
    serverResponse: null,
    serverError: null,
  },
  // get the currant state value
  getters: { 
    getUser: state => state.user,
    getIsAuthenticated: state => state.isAuthenticated,
    getTokens: state => state.tokens,
    getServerLoading: state => state.serverLoading,
    getServerResponse: state => state.serverResponse,
    getServerError: state => state.serverError,
  },
  // use to perform un mutate or change states
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setTokens(state, payload) {
      state.tokens = payload;
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
    setUser({commit},payload){
      commit('setUser',payload);
    }, 
    setIsAuthenticated({commit},payload){
      commit('setIsAuthenticated',payload);
    }, 
    setTokens({commit},payload){
      commit('setTokens',payload);
    }, 
    async findUser({ commit },payload) {
      commit('setServerLoading', true);
      try {
        const response = await axiosAuth.post('find-user', payload);
        commit('setServerResponse', response);
        commit('setServerError',null);
        console.log(response)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setServerResponse', null);
        commit('setServerError', error);
        return Promise.reject(error)
      }
      finally {
        commit('setServerLoading', false);
      }
    },
    async getProfile({ commit }) {
      commit('setServerLoading', true);
      try {
        const response = await axiosAuth.get('user-profile');
        commit('setServerResponse', response);
        commit('setUser', response.data);
        commit('setIsAuthenticated',true);
        commit('setServerError',null);
        console.log(response)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setServerResponse', null);
        commit('setIsAuthenticated',false);
        commit('setServerError', error);
        return Promise.reject(error)
      }
      finally {
        commit('setServerLoading', false);
      }
    },
  },
};
