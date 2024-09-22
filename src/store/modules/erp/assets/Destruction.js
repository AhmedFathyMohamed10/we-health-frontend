import {axiosBusiness} from "@/plugins/axios/axiosBusiness";
const BACKENDURL = 'erp/assets/destruction';

export default {
  namespaced: true,
  state: {
    indexOfDetailed:[],
   
    //////////////////////
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
    getIndexOfDetailed: state => state.indexOfDetailed,

    getListResponse: state => state.listResponse,
    getListLoading: state => state.listLoading,
    getListError: state => state.listError,
    //////////////////////
    getUpsertResponse: state => state.upsertResponse,
    getUpsertLoading: state => state.upsertLoading,
    getUpsertError: state => state.upsertError,
    ///////////////////////////////////////////////
    getDeleteResponse: state => state.deleteResponse,
    getDeleteLoading: state => state.deleteLoading,
    getDeleteError: state => state.deleteError,
    ///////////////////////////////////////////////
    getStatusResponse: state => state.statusResponse,
    getStatusLoading: state => state.statusLoading,
    getStatusError: state => state.statusError, 
  },
  // use to perform un mutate or change states
  mutations: {
   
    setindexDetailedCost(state,data){
      state.indexOfDetailed = data
    },
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
    setDeleteResponse(state, data) {
      state.deleteResponse = data
    },
    setDeleteLoading(state, loading) {
      state.deleteLoading = loading
    },
    setDeleteError(state, error) {
      state.deleteError = error
    },
    /////////////////////////////////
    setStatusResponse(state, data) {
      state.statusResponse = data
    },
    setStatusLoading(state, loading) {
      state.statusLoading = loading
    },
    setStatusError(state, error) {
      state.statusError = error
    },
    create(state, payload) {
      state.listResponse.results.unshift(payload);
      state.listResponse.count = state.listResponse.count + 1;
    },
    update(state, payload) {
      console.log(payload)
      let index = state.listResponse.results.findIndex(
        (item) => item.id == payload.id);
      console.log(index)
      if (index > -1) {
        state.listResponse.results[index] = payload;
        console.log(state.listResponse.results[index])
      }
    },
    delete(state, payload) {
      console.log("nkadhfjsdjfsdj,fsj")
      let filteredList = []
      filteredList = state.listResponse.results.filter(item => !payload.includes(item.id));
      state.listResponse.results = [...filteredList];
      state.listResponse.count = state.listResponse.count - payload.length;
    },
    // changeStatus(state, payload) {
      // console.log(payload)
      // let filteredList = []
      // filteredList = state.listResponse.results.filter(item => !payload.includes(item.id));
      // state.listResponse.results = [...filteredList];
// 
      // state.listResponse.count = state.listResponse.count-payload.length;
// 
    // },
  },
  // use to perform un asynchronous tasks
  actions: {
  
    setindexDetailedCost({ commit }, payload) {
      commit('setindexDetailedCost', payload);
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
    //////////////////////////////////
    setDeleteError({ commit }, payload) {
      commit('setDeleteError', payload);
    },
    setDeleteResponse({ commit }, payload) {
      commit('setDeleteResponse', payload)
    },
    //////////////////////////////////
    setStatusError({ commit }, payload) {
      commit('setStatusError', payload);
    },
    setStatusResponse({ commit }, payload) {
      commit('setStatusResponse', payload)
    },
    /////////////////////////
    async list({ commit }, params) {
      commit('setListLoading', true)
      try {
        const response = await axiosBusiness.get(`${BACKENDURL}/?page=${params.pageNumber}&limit=${params.rows}&asset=${params.asset}`);
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
    async update({ commit,state },form) {
      commit('setUpsertLoading', true)
      let data={
        "form":form,
        "indexOfDetailed":state.indexOfDetailed,
      }
      try {
        const response = await axiosBusiness.put(`${BACKENDURL}/update/`+ form.id, data);
        console.log(response.data)
        commit('setUpsertResponse', response.data)
        commit("update", { ...response.data.data[0]});
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
    async changeStatus({ commit }, indexes) {
      console.log(indexes)
      commit('setDeleteLoading', true)
      try {
        const response = await axiosBusiness.put(`${BACKENDURL}/change-status` , indexes)
        console.log(response);
        commit('setDeleteResponse', response.data.data)
        commit("delete", response.data.data);
        commit('setDeleteError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setDeleteError', error.data)
        return Promise.reject(error)
      }
      finally {
        commit('setDeleteLoading', false)
      }
    },
  },
};;



