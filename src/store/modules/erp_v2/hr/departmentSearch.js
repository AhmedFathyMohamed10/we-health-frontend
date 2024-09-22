import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
const BACKENDURL = "erp/hr/department";

export default {
  namespaced: true,
  state: {
    searchResponse: null,
    searchLoading: false,
    searchError: false,
  },
  // get the currant state value
  getters: {
    getSearchResponse: (state) => state.searchResponse,
    getSearchLoading: (state) => state.searchLoading,
    getSearchError: (state) => state.searchError,
  },
  // use to perform un mutate or change states
  mutations: {
    setSearchResponse(state, data) {
      state.searchResponse = data;
    },
    setSearchLoading(state, loading) {
      state.searchLoading = loading;
    },
    setSearchError(state, error) {
      state.searchError = error;
    },

  },
  // use to perform un asynchronous tasks
  actions: {
    
    setSearchResponse({ commit }, payload) {
      commit("setSearchResponse", payload);
    },
    setSearchError({ commit }, payload) {
      commit("setSearchError", payload);
    },  
    
    async search({ commit }, payload) {
      commit("setSearchLoading", true);
      try {
        const response = await axiosBusiness.get(`${BACKENDURL}/search`, {
          params: { department_name: payload.department_name },
        });
        commit("setSearchResponse", response.data);
        commit("setSearchError", false);
        return Promise.resolve(response.data);
      } catch (error) {
        commit("setSearchError", error.response.data);
        return Promise.reject(error.response.data);
      } finally {
        commit("setSearchLoading", false);
      }
    },
  },
};
