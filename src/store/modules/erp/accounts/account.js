import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
const BACKENDURL = "erp/accounts/account";

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
    ////////////////////
    ListPrimaryAccountResponse: null,
    ListPrimaryAccountError: null,
    ListPrimaryAccountLoading: false,
  },
  // get the currant state value
  getters: {
    getListResponse: (state) => state.listResponse,
    getListLoading: (state) => state.listLoading,
    getListError: (state) => state.listError,
    //////////////////////
    getListPrimaryAccountResponse: (state) => state.ListPrimaryAccountResponse,
    getListPrimaryAccountError: (state) => state.ListPrimaryAccountError,
    getListPrimaryAccountLoading: (state) => state.ListPrimaryAccountLoading,
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
    setListPrimaryAccountResponse(state, data) {
      state.ListPrimaryAccountResponse = data;
    },
    setListPrimaryAccountError(state, data) {
      state.ListPrimaryAccountError = data;
    },
    setListPrimaryAccountLoading(state, data) {
      state.ListPrimaryAccountLoading = data;
    },
    /////////////////////////
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
    create(state, payload) {
      state.listResponse.results.unshift(payload);
      state.listResponse.count = state.listResponse.count + 1;
    },
    createPrimary(state, payload) {
      state.ListPrimaryAccountResponse.data.unshift(payload);
    },
    update(state, payload) {
      let index = state.listResponse.results.findIndex(
        (item) => item.id == payload.id
      );
      if (index > -1) {
        state.listResponse.results[index] = payload;
      }
    },
    delete(state, payload) {
      console.log(payload);
      let filteredList = [];
      filteredList = state.listResponse.results.filter(
        (item) => !payload.includes(item.id)
      );
      state.listResponse.results = [...filteredList];
      state.listResponse.count = state.listResponse.count - payload.length;
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
    setListPrimaryAccountResponse({ commit }, payload) {
      commit("setListPrimaryAccountResponse", payload);
    },
    setListPrimaryAccountError({ commit }, payload) {
      commit("setListPrimaryAccountError", payload);
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
    //////////////////////////////////
    setSearchError({ commit }, payload) {
      commit("setSearchError", payload);
    },
    setSearchResponse({ commit }, payload) {
      commit("setSearchResponse", payload);
    },
    //////////////////////////////////
    async list({ commit }, params) {
      console.log(params);
      commit("setListLoading", true);
      try {
        const response = await axiosBusiness.get(
          `${BACKENDURL}/?page=${params.pageNumber}&limit=${params.rows}&account_name_en=${params.account_name_en}&final_account=${params.final_account_id}&parent_account=${params.parent_account_id}`
        );
        commit("setListResponse", response.data);
        commit("setListError", null);
        return Promise.resolve(response.data);
      } catch (error) {
        console.log(error);
        commit("setListError", error.data);
        return Promise.reject(error.data);
      } finally {
        commit("setListLoading", false);
      }
    },
    //////////////////////////////////
    async listPrimaryAccount({ commit }, params) {
      commit("setListLoading", true);
      try {
        const response = await axiosBusiness.get(
          `${BACKENDURL}/list-primary-account`
        );
        console.log(response);
        commit("setListPrimaryAccountResponse", response.data);
        commit("setListPrimaryAccountError", null);
        return Promise.resolve(response.data);
      } catch (error) {
        console.log(error);
        commit("setListPrimaryAccountError", error.data);
        return Promise.reject(error.data);
      } finally {
        commit("setListPrimaryAccountLoading", false);
      }
    },

    async create({ commit }, form) {
      commit("setUpsertLoading", true);
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/create`, form);
        if (response.data.data[0].account_disposition === 1) {
          commit('createPrimary', { ...response.data.data[0] });
        }
        else {
          commit("create", { ...response.data.data[0] });
        }
        commit("setUpsertResponse", response.data);
        commit("setUpsertError", null);
        return Promise.resolve(response);
      } catch (error) {
        console.log(error);
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
        if (response.data.data[0].account_disposition === 1) {
          commit('createPrimary', { ...response.data.data[0] });
          commit("delete", response.data.data[0]);
        }
        else {
          commit("update", { ...response.data.data[0] });
        }
        commit("setUpsertError", null);
        commit("setUpsertResponse", response.data);
        return Promise.resolve(response);
      } catch (error) {
        console.log(error);
        commit("setUpsertError", error.response.data);
        return Promise.reject(error);
      } finally {
        commit("setUpsertLoading", false);
      }
    },
    async changeStatus({ commit }, indexes) {
      console.log(indexes);
      commit("setDeleteLoading", true);
      try {
        const response = await axiosBusiness.put(
          `${BACKENDURL}/change-status`,
          indexes
        );
        console.log(response);
        commit("setDeleteResponse", response.data.data);
        commit("delete", response.data.data);
        commit("setDeleteError", null);
        return Promise.resolve(response);
      } catch (error) {
        console.log(error);
        commit("setDeleteError", error.data);
        return Promise.reject(error);
      } finally {
        commit("setDeleteLoading", false);
      }
    },
    async search({ commit }, payload) {
      console.log("search");
      commit("setSearchLoading", true);
      try {
        const response = await axiosBusiness.get(`${BACKENDURL}/search`, {
          params: { account_name_en: payload.account_name_en },
        });
        // console.log(response)
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
