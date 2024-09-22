import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
const BACKENDURL = "erp/hr/shift-record";

export default {
  namespaced: true,
  state: {
    employee_of_choose:[],

    delete_variable_shift:[],


    rowToAdd:{
      employee_or_department:null,
      type_of_search:null,
      shift:null,
      date:null,
      report_type:null,
      validation_from:null,
      validation_to:null,
    },
    listFixedResponse: null,

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
    ///////////////////////
    statusResponse: null,
    statusLoading: false,
    statusError: null,
  },
  // get the currant state value
  getters: {
    // get deleted row from table
    getDeletedShiftVariableShift: (state) => state.delete_variable_shift,
    getRowToAdd: (state) => state.rowToAdd,
    ////////////////////////////////////////
    getListFixedResponse: (state) => state.listFixedResponse,

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
    ///////////////////////////////////////////////
    getStatusResponse: (state) => state.statusResponse,
    getStatusLoading: (state) => state.statusLoading,
    getStatusError: (state) => state.statusError,
  },
  // use to perform un mutate or change states
  mutations: {
    setDeletedShiftVariableShift(state, data) {
      state.delete_variable_shift = data;
    },
    setRowToAdd(state, data) {
      state.rowToAdd = data;
    },
///////////////////
    setListFixedResponse(state, data) {
      state.listFixedResponse = data;
    },
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
    create(state, payload) {
      if(payload.type == 1){
        state.listFixedResponse.results.unshift(payload);
        state.listFixedResponse.count = state.listFixedResponse.count + 1;
      }
      if(payload.type == 2){
        state.listResponse.results.unshift(payload);
        state.listResponse.count = state.listResponse.count + 1;
      }
    },
    update(state, payload) {
      if(payload.type == 1){
        console.log("11111")
        let index = state.listFixedResponse.results.findIndex(
          (item) => item.id == payload.id
        );
        if (index > -1) {
          state.listFixedResponse.results[index] = payload;
        }
      }
      if(payload.type == 2){
        console.log("222222")
        let index = state.listResponse.results.findIndex(
          (item) => item.id == payload.id
        );
        if (index > -1) {
          state.listResponse.results[index] = payload;
        }
      }


     
    },
    delete(state, payload) {
      let filteredList = [];
      filteredList = state.listResponse.results.filter(
        (item) => !payload.includes(item.code)
      );
      state.listResponse.results = [...filteredList];

      state.listResponse.count = state.listResponse.count - payload.length;
    },
  },
  // use to perform un asynchronous tasks
  actions: {
    setDeletedShiftVariableShift({ commit }, payload) {
      commit("setDeletedShiftVariableShift", payload);
    },
    setRowToAdd({ commit }, payload) {
      commit("setRowToAdd", payload);
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
    //////////////////////////////////
    setStatusError({ commit }, payload) {
      commit("setStatusError", payload);
    },
    setStatusResponse({ commit }, payload) {
      commit("setStatusResponse", payload);
    },
    /////////////////////////
    async list({ commit }, params) {
      commit("setListLoading", true);
      try {
        const response = await axiosBusiness.get(
          `${BACKENDURL}/?page=${params.pageNumber}&limit=${params.rows}&employee_or_department=${params.employee_or_department}&type=${params.type}&type_of_shift=${params.type_of_shift}`
        );
        if(params.type==1){
          commit("setListFixedResponse", response.data);
        }else if(params.type==2){
          commit("setListResponse", response.data);
        }
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
        commit("setUpsertResponse", response.data);
        commit("create", { ...response.data.data[0] });
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
    async update({ commit, state }, form) {

      commit("setUpsertLoading", true);
      let data = {
        data: form,
        delete_variable_shift: state.delete_variable_shift,
      };
      try {
        const response = await axiosBusiness.put(
          `${BACKENDURL}/update/` + form.id,
          data
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
    async changeStatus({ commit }, payload) {
      commit("setStatusLoading", true);
      try {
        const response = await axiosBusiness.put(
          `${BACKENDURL}/change-status`,
          payload
        );
        commit("setStatusResponse", response.data);
        if (payload.action === 4) {
          commit("delete", payload.selected);
        } else {
          commit("changeStatus", payload);
        }
        commit("setStatusError", null);
        return Promise.resolve(response);
      } catch (error) {
        commit("setStatusError", error.response.data);
        return Promise.reject(error);
      } finally {
        commit("setStatusLoading", false);
      }
    },
  
  },
};
