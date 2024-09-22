import {axiosBusiness} from "@/plugins/axios/axiosBusiness";
export default {
  namespaced: true,
  state: {
    category:1,
    listResponse: [],
    listLoading: false,
    listError: null,
  },
  // get the currant state value
  getters: {
    invoiceTypes: state => state.listResponse,
    invoiceTypesLoading: state => state.listLoading,
    invoiceTypesError: state => state.listError,
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
  },
  // use to perform un asynchronous tasks
  actions: {
    //////////////////////////////////
    async list({ commit },payload) {
      commit('setListLoading', true)
      try {
        const response = await axiosBusiness.get(`erp/accounting/invoices/definition/invoice-types?category=${payload.category}`);
        console.log(response);
        commit("setListResponse", [...response.data.types]);
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
  },
};;




