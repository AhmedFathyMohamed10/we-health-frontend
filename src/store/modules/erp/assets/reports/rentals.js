import {axiosBusiness} from "@/plugins/axios/axiosBusiness";
const BACKENDURL = 'erp/assets/fixed-assets';

export default {
  namespaced: true,
  state: {
    listResponse: null,
    listLoading: false,
    listError: null,
  },
  // get the currant state value
  getters: {
    getListResponse: state => state.listResponse,
    getListLoading: state => state.listLoading,
    getListError: state => state.listError
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
  },
  // use to perform un asynchronous tasks
  actions: {
    setListResponse({ commit }, payload) {
      commit('setListResponse', payload);
    },
    setListError({ commit }, payload){
      commit('setListError', payload);
    },
    //////////////////////////////////
    async list({ commit }, params) {
      commit('setListLoading', true)
      try {
        const response = await axiosBusiness.get(`${BACKENDURL}/rent/?page=${params.pageNumber}&limit=${params.rows}&name=${params.name}`);
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
  },
};;
