import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
const BACKENDURL = "erp/accounts/final-account";

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
    ///////////////////////
    deleteResponse: null,
    deleteLoading: false,
    deleteError: null,
    //////////////////////
    searchResponse: null,
    searchLoading: false,
    searchError: false,
  },
  // get the currant state value
  getters: {
    getListResponse: (state) => state.listResponse,
    getListLoading: (state) => state.listLoading,
    getListError: (state) => state.listError,
    //////////////////////
    getUpsertResponse: (state) => state.upsertResponse,
    getUpsertLoading: (state) => state.upsertLoading,
    getUpsertError: (state) => state.upsertError,
    ///////////////////////////////////////////////
    getDeleteResponse: (state) => state.deleteResponse,
    getDeleteLoading: (state) => state.deleteLoading,
    getDeleteError: (state) => state.deleteError,
    /////////////////////////////////////////
    getSearchResponse: (state) => state.searchResponse,
    getSearchLoading: (state) => state.searchLoading,
    getSearchError: (state) => state.searchError,
  },
  // use to perform un mutate or change states
  mutations: {
    setListResponse(state, data) {
      state.listResponse = data;
    },
    setListLoading(state, loading) {
      state.listLoading = loading;
    },
    setListError(state, error) {
      state.listError = error;
    },
    ////////////////////
    setUpsertResponse(state, data) {
      state.upsertResponse = data;
    },
    setUpsertLoading(state, loading) {
      state.upsertLoading = loading;
    },
    setUpsertError(state, error) {
      state.upsertError = error;
    },
    /////////////////////////////////
    setDeleteResponse(state, data) {
      state.deleteResponse = data;
    },
    setDeleteLoading(state, loading) {
      state.deleteLoading = loading;
    },
    setDeleteError(state, error) {
      state.deleteError = error;
    },
    /////////////////////////////////
    setStatusResponse(state, data) {
      state.statusResponse = data;
    },
    setStatusLoading(state, loading) {
      state.statusLoading = loading;
    },
    setStatusError(state, error) {
      state.statusError = error;
    },
    ///////  search ///////////
    setSearchResponse(state, data) {
      state.searchResponse = data;
    },
    setSearchLoading(state, loading) {
      state.searchLoading = loading;
    },
    setSearchError(state, error) {
      state.searchError = error;
    },
    //////////////////////////////
    create(state, payload) {
      state.listResponse.data.push(payload);
    },
    update(state, payload) {
      let index = state.listResponse.data.findIndex(
        (item) => item.id == payload.id
      );
      if (index > -1) {
        state.listResponse.data[index] = payload;
      }
    },
    delete(state, payload) {
      let filteredList = [];
      filteredList = state.listResponse.data.filter(
        (item) => !payload.includes(item.code)
      );
      state.listResponse.data = [...filteredList];
    },
  },
  // use to perform un asynchronous tasks
  actions: {
    setListResponse({ commit }, payload) {
      commit("setListResponse", payload);
    },
    setListError({ commit }, payload) {
      commit("setListError", payload);
    },
    //////////////////
    setUpsertError({ commit }, payload) {
      commit("setUpsertError", payload);
    },
    setUpsertResponse({ commit }, payload) {
      commit("setUpsertResponse", payload);
    },
    //////////////////////////////////
    setDeleteError({ commit }, payload) {
      commit("setDeleteError", payload);
    },
    setDeleteResponse({ commit }, payload) {
      commit("setDeleteResponse", payload);
    },
    /////////////////////////////////////
    setSearchResponse({ commit }, payload) {
      commit("setSearchResponse", payload);
    },
    //////////////////////////////////
    async list({ commit }, params) {
      commit("setListLoading", true);
      try {
        const response = await axiosBusiness.get(`${BACKENDURL}`);
        commit("setListResponse", response.data);
        commit("setListError", null);
        return Promise.resolve(response.data);
      } catch (error) {
        commit("setListError", error.data);
        return Promise.reject(error.data);
      } finally {
        commit("setListLoading", false);
      }
    },
    async create({ commit }, form) {
  
      commit("setUpsertLoading", true);
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/create`, form);
        commit("setUpsertResponse", response.data.data[0]);
        commit("create", { ...response.data.data[0] });
        commit("setUpsertError", null);
        return Promise.resolve(response);
      } catch (error) {
        commit("setUpsertError", error.response.data);
        return Promise.reject(error);
      } finally {
        commit("setUpsertLoading", false);
      }
    },
    async update({ commit }, form) {
      commit("setUpsertLoading", true);
      try {
        const response = await axiosBusiness.put(
          `${BACKENDURL}/update/` + form.id,
          form
        );
        commit("setUpsertResponse", response.data);
        commit("update", { ...response.data.data[0] });
        commit("setUpsertError", null);
        return Promise.resolve(response);
      } catch (error) {
        commit("setUpsertError", error.response.data);
        return Promise.reject(error);
      } finally {
        commit("setUpsertLoading", false);
      }
    },
    async delete({ commit }, indexes) {
      commit("setDeleteLoading", true);
      try {
        const response = await axiosBusiness.post(
          `${BACKENDURL}/delete`,
          indexes
        );
        commit("setDeleteResponse", response.data);
        commit("delete", response.data.data);
        commit("setDeleteError", null);
        return Promise.resolve(response);
      } catch (error) {
        commit("setDeleteError", error.data);
        return Promise.reject(error);
      } finally {
        commit("setDeleteLoading", false);
      }
    },
    async search({ commit }, payload) {
      commit("setSearchLoading", true);
      try {
        const response = await axiosBusiness.get(`${BACKENDURL}/search`, {
          params: { name_en: payload.name_en },
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
