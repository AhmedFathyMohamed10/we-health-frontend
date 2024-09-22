import { axiosBusiness } from "@/plugins/axios/axiosBusiness";

import moment from 'moment';
const BACKENDURL = "erp/hr-promotions";

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

    create(state, payload) {
      
      let index = state.listResponse.results.findIndex(
        (item) => item.employee_id == payload.employee_id);
      if (index > -1) {
        if( state.listResponse.results[index].end_date == null){
          let d = new Date( payload.start_date)
         
          console.log(d)
          let subtract_date =   moment(d).subtract(1, 'days').format("YYYY-MM-DD")
        //  let date = 
         console.log(subtract_date);
          state.listResponse.results[index].end_date =  subtract_date
          
        }
        
      }
      state.listResponse.results.unshift(payload);
      state.listResponse.count = state.listResponse.count + 1;
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
      // console.log(payload.length)
      filteredList = state.listResponse.results.filter(item => !payload.includes(item.code));
      state.listResponse.count = state.listResponse.count - payload.length;
      state.listResponse.results = [...filteredList];
    }
  },
  // use to perform un asynchronous tasks
  actions: {
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
    setDeleteError({ commit }, payload) {
      commit('setDeleteError', payload);
    },
    setDeleteResponse({ commit }, payload) {
      commit('setDeleteResponse', payload)
    },
    //////////////////////////////////
    async list({ commit }, params) {
      console.log("tesssssssssssst")
      commit('setListLoading', true)
      try {
        const response = await axiosBusiness.get(
          `${BACKENDURL}/?page=${params.pageNumber}&limit=${params.rows}&start_date=${params.start_date}&employee=${params.employee}&pk=${params.pk}`
        )
        commit("setListResponse", response.data);
        commit('setListError', null)
        return Promise.resolve(response.data)
      } catch (error) {
        console.log(error)
        commit('setListError',error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
        commit('setListLoading', false)
      }
    },
    async create({ commit }, form) {
      console.log("hbhdgjdfhjjsh")
      // var token = localStorage.getItem("token");
      // let data = { department: form, token: token }
      commit('setUpsertLoading', true)
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/create`, form)
        commit('setUpsertResponse', response.data)

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
      var token = localStorage.getItem("token");
      const { employee, role, salary, start_date } = form
      let data =  { employee, role, salary, start_date };
      commit('setUpsertLoading', true)
      try {
        const response = await axiosBusiness.put(`${BACKENDURL}/update/` + form.id, data)
        commit('setUpsertResponse', response.data.data[0])
        commit("update", { ...response.data.data[0] });
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
    async delete({ commit }, payload) {
      commit('setDeleteLoading', true)
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/delete`, payload)
        commit('setDeleteResponse', response.data.data)
        if(payload['action'] == 4){
          commit("delete", [...payload['selected']]);
        }
        // else{
        //   commit("changeStatus", response.data.data);
        // }
        commit('setDeleteError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setDeleteError', error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
        commit('setDeleteLoading', false)
      }
    }


  },
};;


