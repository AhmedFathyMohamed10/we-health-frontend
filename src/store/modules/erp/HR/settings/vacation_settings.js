import { axiosBusiness } from "@/plugins/axios/axiosBusiness";


const BACKENDURL = "erp/hr-settings";

export default {
  namespaced: true,
  state: {
    form: {
      from_date:"",
      to_date:"",
      annual_vacations_days:""
  },
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


  },
  // get the currant state value
  getters: {
    getform : state => state.form,
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

  },
  // use to perform un mutate or change states
  mutations: {
    setformResponse(state, data) {
        console.log(data)
        state.form = data
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
  },
  // use to perform un asynchronous tasks
  actions: {
    setformResponse({ commit }, payload) {
        commit('setformResponse', payload);
      },
    setListResponse({ commit }, payload) {
      commit('setListResponse', payload);
    },
    setListError({ commit }, payload) {
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
    //////////////////////////////////
    async list({ commit ,dispatch}, params) {
      commit('setListLoading', true)
      try {
        const response = await axiosBusiness.get(
          `${BACKENDURL}/vacations`
        )
        // console.log(response.data.data[0])
        // commit("create", ...response.data[0]);
        console.log(response.data)
        if(response.data.data[0]){
          dispatch ("setformResponse",response.data.data[0])
        }else{
          let form =  {
            from_date:"",
            to_date:"",
            annual_vacations_days:""}
            dispatch ("setformResponse",form)
        }
        // console.log(response.data.data[0])
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
    async create({ commit, dispatch }, form) {
      // commit('setUpsertLoading', true)
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/create`, form)
        // commit('setUpsertResponse', response.data)
        dispatch ("setformResponse",response.data.data[0])
        commit('setUpsertError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setUpsertError', error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
        // commit('setUpsertLoading', false)
      }
    },
    async update({ commit, dispatch }, form) {
      var token = localStorage.getItem("token");
      const { from_date, to_date, annual_vacations_days, code } = form
      let data =  { from_date, to_date, annual_vacations_days, code } ;
      console.log(data)
      // commit('setUpsertLoading', true)
      try {
        const response = await axiosBusiness.put(`${BACKENDURL}/update-vacations/` + form.id, data)
        // commit('setUpsertResponse', response.data.data[0])
        // commit("update", { ...response.data.data[0] });
        dispatch ("setformResponse",response.data.data[0])
        commit('setUpsertError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setUpsertError', error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
        // commit('setUpsertLoading', false)
      }
    },

  },
};;


