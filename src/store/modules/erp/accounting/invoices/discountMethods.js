import {axiosBusiness} from "@/plugins/axios/axiosBusiness";
export default {
  namespaced: true,
  state: {
    listResponse: [],
    listLoading: false,
    listError: null,
  },
  // get the currant state value
  getters: {
    discountMethods: state => state.listResponse,
    discountMethodsLoading: state => state.listLoading,
    discountMethodsError: state => state.listError,
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
    async list({ commit }) {
      commit('setListLoading', true)
      try {
        const response = await axiosBusiness.get('erp/accounting/invoices/invoice/discount-methods');
        console.log(response);
        commit("setListResponse", response.data.methods);
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




