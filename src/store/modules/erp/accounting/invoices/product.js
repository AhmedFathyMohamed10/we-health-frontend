import {axiosBusiness} from "@/plugins/axios/axiosBusiness";
export default {
  namespaced: true,
  state: {
    searchResponse: null, 
    searchLoading: false,
    searchError: false,
  },
  // get the currant state value
  getters: {
    getSearchResponse: state => state.searchResponse,
    getSearchLoading: state => state.searchLoading,
    getSearchError: state => state.searchError,
  },
  // use to perform un mutate or change states
  mutations: {
     ///////  search ///////////
     setSearchResponse (state, data) {
      state.searchResponse = data
    },
    setSearchLoading (state, loading) {
      state.searchLoading = loading
    },
    setSearchError (state, error) {
      state.searchError = error
    },
     ///////  search ///////////
     setSearchResponse (state, data) {
      state.searchResponse = data
    },
    setSearchLoading (state, loading) {
      state.searchLoading = loading
    },
    setSearchError (state, error) {
      state.searchError = error
    },

    
  },
  // use to perform un asynchronous tasks
  actions: {
    setSearchError({ commit }, payload) {
      commit('setSearchError', payload);
    },
    setSearchResponse({ commit }, payload) {
      commit('setSearchResponse', payload)
    },
    async search ({ commit },payload) {
      commit('setSearchLoading', true)
      try {
      const response = await axiosBusiness.get(`erp/accounting/invoices/invoice/search-in-products?name_en=${payload.name_en}`)
      console.log(response)
      commit('setSearchResponse', response.data)
      commit('setSearchError', false)
      return Promise.resolve(response.data)
    } catch (error) {
        console.log(error)
      commit('setSearchError',error.response.data)
      return Promise.reject(error.response.data)
      }
      finally {
        commit('setSearchLoading', false)
      }
    },
  },
};;
