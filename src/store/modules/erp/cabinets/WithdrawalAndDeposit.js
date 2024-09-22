import {axiosBusiness} from "@/plugins/axios/axiosBusiness";
const BACKENDURL = 'erp/cabinets/withdrawal-and-deposit';

export default {
  namespaced: true,
  state: {
    //////////////////////
    listResponse: null,
    listLoading: false,
    listError: null,
    ///////////////////////
    upsertResponse: null,
    upsertLoading: false,
    upsertError: null,

  },
  // get the currant state value
  getters: {
    getListResponse: state => state.listResponse,
    getListLoading: state => state.listLoading,
    getListError: state => state.listError,
    //////////////////////
    getUpsertResponse: state => state.upsertResponse,
    getUpsertLoading: state => state.upsertLoading,
    getUpsertError: state => state.upsertError,
  },
  // use to perform un mutate or change states
  mutations: {
    setListResponse(state, data) {
      state.listResponse = data
    },
    setListLoading(state, loading) {
      state.listLoading = loading
    },
    setListError(state, error) {
      state.listError = error
    },
    ////////////////////
    setUpsertResponse(state, data) {
      state.upsertResponse = data
    },
    setUpsertLoading(state, loading) {
      state.upsertLoading = loading
    },
    setUpsertError(state, error) {
      state.upsertError = error
    },
    /////////////////////////////////
    create(state, payload) {
      state.listResponse.results.unshift(payload);
      state.listResponse.count = state.listResponse.count + 1;
    },

  },
  // use to perform un asynchronous tasks
  actions: {
  
    setindexCategory({ commit }, payload) {
      commit('setindexCategory', payload);
    },
  

    setListResponse({ commit }, payload) {
      commit('setListResponse', payload);
    },
    setListError({ commit }, payload){
      commit('setListError', payload);
    },
    //////////////////
    setUpsertError({ commit }, payload) {
      commit('setUpsertError', payload);
    },
    setUpsertResponse({ commit }, payload) {
      commit('setUpsertResponse', payload)
    },
    /////////////////////////
    async list({ commit }, params) {
      commit('setListLoading', true)
      try {
        const response = await axiosBusiness.get(`${BACKENDURL}/?page=${params.pageNumber}&limit=${params.rows}&cabinet=${params.cabinet}`);
        console.log(response);
        commit("setListResponse", response.data);
        commit('setListError', null)
        return Promise.resolve(response.data)
      } catch (error) {
        console.log(error)
        commit('setListError', error.data)
        return Promise.reject(error.data)
      }
      finally {
        commit('setListLoading', false)
      }
    },
    async create({ commit }, form) {
      console.log(form)
      commit('setUpsertLoading', true)
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/create`,form);
        console.log(response);
        commit('setUpsertResponse', response.data)
        commit("create", { ...response.data.data[0] });
        commit('setUpsertError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setUpsertError', error.response.data)
        return Promise.reject(error)
      }
      finally {
        commit('setUpsertLoading', false)
      }
    },
  },
};;



