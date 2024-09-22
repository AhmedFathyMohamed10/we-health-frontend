import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
const BACKENDURL = 'erp/product-or-service';
export default {
  namespaced: true,
  state: {
    search: null,
    searchLoading: false,
    searchError: false,
  },
  // get the currant state value
  getters: { 
    searchData: state => state.search,
    searchLoading: state => state.searchLoading,
    searchError: state => state.searchError,
  },
  // use to perform un mutate or change states
  mutations: {
    setSearch (state, data) {
      state.search = data
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
    async search ({ commit },payload) {
      let data = { data: payload.data}
      console.log(data )

      console.log(payload)
      commit('setSearchLoading', true)
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/get-product`, data )
        commit('setSearch', response.data.data)
        commit('setSearchError', false)
        return Promise.resolve(response.data)
      } catch (error) {
        commit('setSearchError',error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
          commit('setSearchLoading', false)
      }
    },
  },
};
