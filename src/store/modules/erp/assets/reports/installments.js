import {axiosBusiness} from "@/plugins/axios/axiosBusiness";
const BACKENDURL = 'erp/assets/fixed-assets';

export default {
  namespaced: true,
  state: {
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
    ///////////////////////////////////////////////

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
    setUpsertErrorGroup(state, error) {
      state.upsertError = error
    },
    /////////////////////////////////
    update(state, payload) {
      let index = state.listResponse.results.findIndex(
        (item) => item.id == payload.id);
      if (index > -1) {
        state.listResponse.results[index] = payload;
      }
    },
    
  },
  // use to perform un asynchronous tasks
  actions: {
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
    setUpsertErrorGroup({ commit }, payload) {
      commit('setUpsertErrorGroup', payload);
    },
    setUpsertResponse({ commit }, payload) {
      commit('setUpsertResponse', payload)
    },
    //////////////////////////////////
    async list({ commit }, params) {
      commit('setListLoading', true)
      try {
        const response = await axiosBusiness.get(`${BACKENDURL}/installment/?page=${params.pageNumber}&limit=${params.rows}&name=${params.name}`);
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
    async update_value_installment({ commit }, form) {
      commit('setUpsertLoading', true)
      try {
        const response = await axiosBusiness.put(`${BACKENDURL}/update-value-of-installment`, form)
        commit('setUpsertResponse', response.data)
        commit("update", { ...response.data.data[0] });
        commit('setUpsertError', null)
        return Promise.resolve(response)
      } catch (error) {
        commit('setUpsertError', error.response.data)
        return Promise.reject(error)
      }
      finally {
        commit('setUpsertLoading', false)
      }
    },


  
  },
};;
