import {axiosBusiness} from "@/plugins/axios/axiosBusiness";
export default {
  namespaced: true,
  state: {
    form: {
        invoice_type:null,
        definition:null,
        store:null,
        number:null,
        date:null,
        provider_account:null,
        discount_method:1,
        discount_value:0,
        total:null,
        paid:null,
        returned_from:null,
        products:[],
    },  
    //////////////////
    listResponse: null,
    listLoading: false,
    listError: null,
    //////////////////
    listReturnsResponse: null,
    listReturnsLoading: false,
    listReturnsError: null,
    ///////////////////////
    upsertResponse: null,
    upsertLoading: false,
    upsertError: null,
    ///////////////////////
    deleteResponse:null,
    deleteLoading:false,
    deleteError: null,
    ///////////////////////
    statusResponse:null,
    statusLoading:false,
    statusError: null,
  },
  // get the currant state value
  getters: {
    getForm: state => state.form,
    /////////////////////////////////// ///////////////////    
    getListResponse: state => state.listResponse,
    getListLoading: state => state.listLoading,
    getListError: state => state.listError,
    //////////////////////
    getReturnsListResponse: state => state.listReturnsResponse,
    getReturnsListLoading: state => state.listReturnsLoading,
    getReturnsListError: state => state.listReturnsError,
    //////////////////////
    getUpsertResponse: state => state.upsertResponse,
    getUpsertLoading: state => state.upsertLoading,
    getUpsertError: state => state.upsertError,
    ///////////////////////////////////////////////
    getSearchResponse: state => state.searchResponse,
    getSearchLoading: state => state.searchLoading,
    getSearchError: state => state.searchError,
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
    setForm(state, payload) {
      state.form = payload;
    },     
    ////////////////////////
    setListResponse(state, data) {
      state.listResponse = data
    },
    setListLoading(state, loading) {
      state.listLoading = loading
    },
    setListError(state, error) {
      state.listError = error
    },
    ////////////////////////
    setListReturnsResponse(state, data) {
      state.listReturnsResponse = data
    },
    setListReturnsLoading(state, loading) {
      state.listReturnsLoading = loading
    },
    setListReturnsError(state, error) {
      state.listReturnsError = error
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
    ////////////////////////////////////
    create(state, payload) {
      state.listResponse.results.unshift(payload);
      state.listResponse.count += 1;
    },
    update(state, payload) {
      let index = state.listResponse.results.findIndex(
        (item) => item.id == payload.id);
      if (index > -1) {
        state.listResponse.results[index] = payload;
      }
    },
    delete(state, payload) {
      let filteredList = []
      filteredList = state.listResponse.results.filter(item => !payload.includes(item.invoice_data.code));
      state.listResponse.results = [...filteredList];
      state.listResponse.count -= payload.length;
    },
    changeStatus(state, payload) {
        console.log(payload)
        state.listResponse.results.map(item => {
          if (payload.selected.includes(item.invoice_data.code)) {
            item.invoice_data.status = payload.action
          }
        });
    },
  },
  // use to perform un asynchronous tasks
  actions: {
    setForm({ commit }, payload) {
      commit('setForm', payload);
    },
    setUpsertError({ commit }, payload) {
      commit('setUpsertError', payload);
    },
    setUpsertResponse({ commit }, payload) {
      commit('setUpsertResponse', payload)
    },
    //////////////////////////////////
    async list({ commit }, params) {
      commit('setListLoading', true)
      try {
        console.log('list', params)
        const response = await axiosBusiness.get(`erp/accounting/invoices/invoice/?page=${params.pageNumber}&limit=${params.rows}&invoice_type=${params.invoice_type}`);
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
    async listReturns({ commit }, params) {
      commit('setListReturnsLoading', true)
      try {
        console.log('list', params)
        const response = await axiosBusiness.get(`erp/accounting/invoices/invoice/?page=${params.pageNumber}&limit=${params.rows}&invoice_type=${params.invoice_type}`);
        console.log(response);
        commit("setListReturnsResponse", response.data);
        commit('setListReturnsError', null)
        return Promise.resolve(response.data)
      } catch (error) {
        console.log(error)
        commit('setListReturnsError', error.data)
        return Promise.reject(error.data)
      }
      finally {
        commit('setListReturnsLoading', false)
      }
    },
    async create({ commit }, form) {
      commit('setUpsertLoading', true)
      try {
        const response = await axiosBusiness.post(`erp/accounting/invoices/invoice/create`, form);
        console.log(response);
        commit('setUpsertResponse', response.data[0])
        commit("create", { ...response.data[0]});
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
    async update({ commit }, form) {
      console.log('update');
      console.log(form);
      commit('setUpsertLoading', true)
      try {
        const response = await axiosBusiness.put(`erp/accounting/invoices/invoice/update/${form.id}`,form);
        console.log(response);
        commit('setUpsertResponse', response.data)
        commit("update", { ...response.data[0]});
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
    async delete({ commit }, id) {
      commit('setDeleteLoading', true)
      try {
        const response = await axiosBusiness.post(`erp/accounting/invoices/invoice/delete/${id}`);
        console.log(response);
        commit('setDeleteResponse', response.data)
        commit("delete",[response.data.code]);
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
    async approve({ commit }, id) {
      commit('setStatusLoading', true)
      try {
        const response = await axiosBusiness.post(`erp/accounting/invoices/invoice/approve/${id}`);
        console.log(response);
        commit('setStatusResponse', response.data)
        commit("changeStatus",{selected:[response.data.code],action:1});
        commit('setStatusError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setStatusError', error.response.data)
        return Promise.reject(error)
      }
      finally {
        commit('setStatusLoading', false)
      }
    },
    async changeStatus({ commit }, payload) {
      commit('setStatusLoading', true)
      try {
        const response = await axiosBusiness.post(`erp/accounting/invoices/invoice/change-status/${payload.id}`,
        {action:payload.action})
        commit('setStatusResponse', response.data)
        commit("delete",[response.data.code]);
        commit('setStatusError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setStatusError', error.response.data)
        return Promise.reject(error)
      }
      finally {
        commit('setStatusLoading', false)
      }
    },

  },
};;




