import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
const BACKENDURL = "erp/client-supplier";

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
    ///////////////////////
    statusResponse: null,
    statusLoading: false,
    statusError: null,
    ///////////////////////
    moveResponse: null,
    moveLoading: false,
    moveError: null,
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
    ///////////////////////////////////////////////
    getMoveResponse: state => state.moveResponse,
    getMoveLoading: state => state.moveLoading,
    getMoveError: state => state.moveError,
    ///////////////////////////////////////////////
    getStatusResponse: state => state.statusResponse,
    getStatusLoading: state => state.statusLoading,
    getStatusError: state => state.statusError,
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
    /////////////////////////////////
    setMoveResponse(state, data) {
      state.moveResponse = data
    },
    setMoveLoading(state, loading) {
      state.moveLoading = loading
    },
    setMoveError(state, error) {
      state.moveError = error
    },
    /////////////////////////////////
    setStatusResponse(state, data) {
      state.statusResponse = data
    },

    setStatusError(state, error) {
      state.statusError = error
    },
    create(state, payload) {
      state.listResponse.results.unshift(payload);
      state.listResponse.count = state.listResponse.count + 1;
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
      console.log(payload)
      let filteredList = []
      filteredList = state.listResponse.results.filter(item => !payload.includes(item.code));
      state.listResponse.results = [...filteredList];
      state.listResponse.count = state.listResponse.count - payload.length;
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
    //////////////////////////////////
    setMoveError({ commit }, payload) {
      commit('setMoveError', payload);
    },
    setMoveResponse({ commit }, payload) {
      commit('setMoveResponse', payload)
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
        const response = await axiosBusiness.get(`${BACKENDURL}/?page=${params.pageNumber}&limit=${params.rows}&name=${params.name}&group_id=${params.group_id}&category_filter=${params.category_filter}`
                  )
        console.log(response);
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
        const response = await axiosBusiness.post(`${BACKENDURL}/create`,form,{
          headers: {
            'Content-Type': 'multipart/form-data'}})
       
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
      commit('setUpsertLoading', true)
      try {
        const response = await axiosBusiness.put(`${BACKENDURL}/update/` + form['id'],  form['data'],{
          headers: {
            'Content-Type': 'multipart/form-data'}})
        commit('setUpsertResponse', response.data.data[0])
        commit("update", response.data.data[0]);
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
    async move({ commit }, payload) {
      console.log(payload)
      commit('setMoveLoading', true)
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/move`, payload)
        commit('setMoveResponse', response.data.data.selected)
        console.log(response.data)
        commit("delete",response.data.data.selected);
        commit('setMoveError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setMoveError', error.response)
        return Promise.reject(error)
      }
      finally {
        commit('setMoveLoading', false)
      }
    },
    async delete({ commit }, payload) {
      commit('setDeleteLoading', true)
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/delete`, payload)
        commit('setDeleteResponse', response.data)
          commit('delete', payload.selected);
        commit('setDeleteError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setDeleteError', error.response.data)
        return Promise.reject(error)
      }
      finally {
        commit('setDeleteLoading', false)
      }
    },
 

  },
};;


