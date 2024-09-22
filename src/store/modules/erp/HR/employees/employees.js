import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
const BACKENDURL = "erp/hr-employees";

export default {
  namespaced: true,
  state: {
    form: {
      mainInfo: { 
          name: "",
          mobile: "",
          dob: "",
          address: "",
          gender: "",
          email: "",
          marital_status: "",
          image:""
        },
      empolymentInfo:{ 
          role: "",
          username: "",
          salary: "",
          password: "",
          job_start_date: "",
          direct_manager: "",
        shift: ""  
      },
      
      otherInfo: {
        emergency_numbers: [],
          saved_files: [],
          deleted_files:[],
          uploaded_files :[],
          education: "",
          status: 1,
         
      }
      },

    ///////////////
    listResponse: null,
    listLoading: false,
    listError: null,
    options: null,
    employee :{},
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
    getForm: state => state.form,
    getListResponse: state => state.listResponse,
    getListLoading: state => state.listLoading,
    getListError: state => state.listError,
    getOptions : state => state.options,
    getEmployee : state => state.employee,
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
    setForm(state, data) {
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
    setOptions(state, data) {
      state.options = data
    },
    setEmployee(state, data){
      state.employee = data
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
  
    create(state, payload) {

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
      filteredList = state.listResponse.results.filter(item => !payload.includes(item.id));
      state.listResponse.count -= payload.length;
      state.listResponse.results = [...filteredList];
    },
    changeStatus(state, payload) {
      state.listResponse.results.forEach(item => {
        if (payload.selected.includes(item.id)) {
          item.status = payload.action
        }
      });
   
    },
  },
  // use to perform un asynchronous tasks
  actions: {
    setForm({ commit }, payload) {
      commit('setForm', payload);
    },
    setEmployee({ commit }, payload) {
      commit('setEmployee', payload);
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
    //////////////////////////////////
    async list({ commit }, params) {
      commit('setListLoading', true)
      try {
        const response = await axiosBusiness.get(
                    `${BACKENDURL}/?page=${params.pageNumber}&limit=${params.rows}&name=${params.name}&mobile=${params.mobile}`
                  )
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
      var token = localStorage.getItem("token");
      let data = { department: form, token: token }
      console.log(form)
      commit('setUpsertLoading', true)   
      try {
        // axiosBusiness.header.
        // headers["Content-Type"] = 'multipart/form-data'
        // = 
        const response = await axiosBusiness.post(`${BACKENDURL}/create`,form,{
          headers: {
            'Content-Type': 'multipart/form-data'}})
        commit('setUpsertResponse', response.data)
       
      commit("create", {...response.data.data[0]});
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
    //  let data= {
      
    //         name: "",
    //         mobile: "",
    //         dob: "",
    //         address: "",
    //         gender: "",
    //         email: "",
    //         marital_status: "",
    //         image:"",
        
       
    //         role: "",
    //         username: "",
    //         salary: "",
    //         password: "",
    //         job_start_date: "",
    //         direct_manager: "",
    //       shift: ""  ,
      
       
    //         emergency_numbers: [],
    //         files: [],
    //         education: "",
    //         status: "",
           
       
    //     }
     //         status: "",
      // form.status = ""
      console.log(form)
      commit('setUpsertLoading', true)
      try {
        const response = await axiosBusiness.put(`${BACKENDURL}/update/` + form['id'], form['data'],{
          headers: {
            'Content-Type': 'multipart/form-data'}})
        commit('setUpsertResponse', response.data.data)
        commit("update", response.data.data[0]);
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
    async delete({ commit }, indexes) {
      commit('setDeleteLoading', true)
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/delete` , indexes)
        commit('setDeleteResponse', response.data.data)
        commit("delete", [...indexes]);
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
    },
    async changeStatus({ commit }, payload) {
      commit('setStatusLoading', true)
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/update-status`, payload)
        commit('setStatusResponse', response.data)
        commit("changeStatus", { ...payload });
        commit('setStatusError', null)
        return Promise.resolve(response)
      } catch (error) {
        console.log(error)
        commit('setStatusError', error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
        commit('setStatusLoading', false)
      }
    },
    async search ({ commit },payload) {
      commit('setSearchLoading', true)
      try {
      const response = await axiosBusiness.get(`${BACKENDURL}/search`,{ params:{name:payload.name} })
      // console.log(response)
      commit('setSearchResponse', response.data)
      commit('setSearchError', false)
      return Promise.resolve(response.data)
      } catch (error) {
      commit('setSearchError',error.response.data)
      return Promise.reject(error.response.data)
      }
      finally {
        commit('setSearchLoading', false)
      }
    },
    async getOptions({ commit }, params) {
      commit('setOptions', true)
      try {
        const response = await axiosBusiness.get(
          `${BACKENDURL}/get-options`
        )
        commit("setOptions", response.data.options);
        commit('setListError', null)
        return Promise.resolve(response.data.options)
      } catch (error) {
        console.log(error)
        commit('setListError', error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
        commit('setListLoading', false)
      }
    },
    async getEmployee({ commit }, id) {
      commit('setEmployee', true)
      try {
        const response = await axiosBusiness.get(
          `${BACKENDURL}/get-employee-info/`+ id
        )
        console.log(response.data.data)
        commit("setEmployee", response.data.data);
        commit('setListError', null)
        return Promise.resolve(response.data.data)
      } catch (error) {
        console.log(error)
        commit('setListError', error.response.data)
        return Promise.reject(error.response.data)
      }
      finally {
        commit('setListLoading', false)
      }
    },
  },
};;


