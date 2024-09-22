import axios from "axios";
const prefix = 'measurements';

export default {
  namespaced: true,
  state: {
    upsertResponse: null,
    upsertLoading: false,
    upsertError: null,
    ///////////////////////
    deleteResponse: null,
    deleteLoading: false,
    deleteError: null,
  },
  // get the currant state value
  getters: {
    getUpsertResponse: state => state.upsertResponse,
    getUpsertLoading: state => state.upsertLoading,
    getUpsertError: state => state.upsertError,
    ///////////////////////////////////////////////
    getDeleteResponse: state => state.deleteResponse,
    getDeleteLoading: state => state.deleteLoading,
    getDeleteError: state => state.deleteError,
  },
  // use to perform un mutate or change states
  mutations: {
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
  },
  // use to perform un asynchronous tasks
  actions: {
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
    /////////////////////////
    async create(context, form) {
      console.log("create from pulse rate: " + JSON.stringify(form))
      // var token = localStorage.getItem("token");
      // let data = { insuranceAgent: form, token: token }
      context.commit('setUpsertLoading', true)
      try {
        const response = await axios.post(`${prefix}/create-PainChart`, {data:form});
        // console.log(response);
        context.commit('setUpsertResponse', response.data)
        context.commit("measurements/create", {key:'PainChart', value:{...response.data}},{ root: true });
        context.commit('setUpsertError', null)
        return Promise.resolve(response)
      } catch (error) {
        // console.log(error)
        context.commit('setUpsertError', error.data)
        return Promise.reject(error)
      }
      finally {
        context.commit('setUpsertLoading', false)
      }
    },
    async update(context, form) {
      context.commit('setUpsertLoading', true)
      try {
        const response = await axios.put(`${prefix}/edit-insurance-agent/` + form.code, form);
        console.log(response);
        context.commit('setUpsertResponse', response.data)
        context.commit("measurements/update", {key:'PainChart', value:{...response.data}},{ root: true });
        context.commit('setUpsertError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        context.commit('setUpsertError', error.data)
        return Promise.reject(error)
      }
      finally {
        context.commit('setUpsertLoading', false)
      }
    },
    async delete(context, id) {
      context.commit('setDeleteLoading', true)
      try {
        const response = await axios.post(`${prefix}/delete-select`, id);
        console.log(response);
        context.commit('setDeleteResponse', response.data)
        context.commit("measurements/delete", {key:'PainChart', value:id},{ root: true });
        context.commit('setDeleteError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        context.commit('setDeleteError', error.data)
        return Promise.reject(error)
      }
      finally {
        context.commit('setDeleteLoading', false)
      }
    },
  },
};;
