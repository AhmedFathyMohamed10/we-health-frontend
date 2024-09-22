import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
const BACKENDURL = 'erp/b2b-contracts';

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

    statusResponse: null,
    statusLoading: false,
    statusError: null,
    //////////////
    searchResponse:null,
    searchLoading:false,
    searchError:null,
   
   
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
    getDeleteResponse: state => state.deleteResponse,
    getDeleteLoading: state => state.deleteLoading,
    getDeleteError: state => state.deleteError,
    
    getStatusResponse: state => state.statusResponse,
    getStatusLoading: state => state.statusLoading,
    getStatusError: state => state.statusError,
    //////////////////////
    getSearchResponse: (state) => state.searchResponse,
    getSearchLoading: (state) => state.searchLoading,
    getSearchError: (state) => state.searchError,
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
    setDeleteResponse(state, data) {
      state.deleteResponse = data
    },
    setDeleteLoading(state, loading) {
      state.deleteLoading = loading
    },
    setDeleteError(state, error) {
      state.deleteError = error
    },
    setStatusResponse(state, data) {
      state.statusResponse = data
    },
    setStatusLoading(state, loading) {
      state.statusLoading = loading
    },
    setStatusError(state, error) {
      state.statusError = error
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
      console.log("payload company type",payload)
      state.listResponse.results.unshift(payload);
      state.listResponse.count = state.listResponse.count + 1;
      
    },
    update(state, payload) {
      let index = state.listResponse.results.findIndex(
        (item) => item.id == payload.id);
      if (index > -1) {
        console.log(payload)
        state.listResponse.results[index] = payload;
      }
    },
    delete(state, payload) {
      console.log(payload)
      let filteredList = []
      filteredList = state.listResponse.results.filter(item => !payload.includes(item.code));
      state.listResponse.results = [...filteredList];
      state.listResponse.count = state.listResponse.count - payload.length;
    },
    changeStatus(state, payload) {
      state.listResponse.results.forEach(item => {
        if (payload.selected.includes(item.code)) {
          item.status = payload.action
        }
      });
   
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
    setStatusError({ commit }, payload) {
      commit('setStatusError', payload);
    },
    setStatusResponse({ commit }, payload) {
      commit('setStatusResponse', payload)
    },
    
  
    //////////////////////////////////
    async list({ commit }, params) {
      console.log("params",params)
      commit('setListLoading', true)
      try {
        const response = await axiosBusiness.get(
          `${BACKENDURL}/?page=${params.pageNumber}&limit=${params.rows}&contract_number=${params.number}`)
        commit("setListResponse", response.data);
        commit('setListError', null)
        return Promise.resolve(response.data)
      } catch (error) {
        console.log(error)
        commit('setListError', error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
        commit('setListLoading', false)
      }
    },
    async create({ commit }, form) {
      commit('setUpsertLoading', true)
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/create`,form)
       
        commit('setUpsertResponse', response.data.data[0])
        commit("create", { ...response.data.data[0]});
        commit('setUpsertError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setUpsertError', error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
        commit('setUpsertLoading', false)
      }
    },
    async update({ commit }, form) {
      console.log(form)
      commit('setUpsertLoading', true)
      try {
      
        const response = await axiosBusiness.put(`${BACKENDURL}/update/`+ form.id, form);
        commit('setUpsertResponse', response.data.data[0])
        commit("update",response.data.data[0]);
        commit('setUpsertError', null)
        return Promise.resolve(response)
      } catch (error) {
        commit('setUpsertError', error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
        commit('setUpsertLoading', false)
      }
    },
    async delete({ commit }, index) {
      commit('setDeleteLoading', true)
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/delete` , index);
        commit('setDeleteResponse', response.data)
        commit("delete",index.selected);
        commit('setDeleteError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log()
        commit('setDeleteError', error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
        commit('setDeleteLoading', false)
      }
    },
    async changeStatus({ commit }, payload) {
      commit('setStatusLoading', true)
      try {
        const response = await axiosBusiness.put(`${BACKENDURL}/change-status`, payload);
        commit('setStatusResponse', response.data)
        commit("changeStatus", { ...payload });
        commit('setStatusError', null)
        return Promise.resolve(response)
      } catch (error) {
        commit('setStatusError', error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
        commit('setStatusLoading', false)
      }
    },
    async move({ commit }, payload) {
      commit('setStatusLoading', true)
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/move`, payload);
        
        return Promise.resolve(response)
      } catch (error) {
        commit('setStatusError', error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
        commit('setStatusLoading', false)
      }
    },
    
    async search({ commit }, payload) {
      commit("setSearchLoading", true);
      try {
        const response = await axiosBusiness.get(`${BACKENDURL}/search`, {
          params: { contract_number: payload.contract_number},
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
};;
