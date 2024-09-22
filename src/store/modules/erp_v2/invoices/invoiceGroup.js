import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
const BACKENDURL = "erp/assets/asset-group";

export default {
  namespaced: true,
  state: {
    listResponse: null,
    listLoading: false,
    listError: null,
    treeNodes:[],
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
    getTreeNodes : state => state.treeNodes,
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
      state.listResponse.data.unshift(payload);
    },
    update(state, payload) {
      let index = state.listResponse.data.findIndex(
        (item) => item.id == payload.id);
      if (index > -1) {
        state.listResponse.data[index] = payload;
      }
    },
    delete(state, payload) {
      let filteredList = []
      filteredList = state.listResponse.data.filter(item => !payload.includes(item.code));
      state.listResponse.data = [...filteredList];
    },
    changeStatus(state, payload) {
      state.listResponse.data.forEach(item => {
        if (payload.selected.includes(item.id)) {
          item.status = payload.action
        }
      });
   
    },
    setTreeNodes(state,data){
      state.treeNodes = data
      const tree = [];
      const map = {};
      // Create a mapping of IDs to objects
      data.forEach((item) => {
        map[item.id] = {
          name:item.name_en,
          ...item,
          children: [],
          key: String(item.id),
          isLeaf:false,
          dragDisabled: true,
        };
      });

      // Build the tree structure
      data.forEach((item) => {
        if (item.parent_id !== null) {
          map[item.parent_id].children.push(map[item.id]);
        } else {
          tree.push(map[item.id]);
        }
      });

      state.treeNodes = tree
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
    setTreeNodes({ commit }, payload) {
      commit('setTreeNodes', payload)
    },
  
    //////////////////////////////////
    async list({ commit }, params) {
      commit('setListLoading', true)
      try {
        const response = await axiosBusiness.get(
            `${BACKENDURL}`)
        commit("setListResponse", response.data);
        commit('setTreeNodes', response.data.data)
        commit('setListError', null)
        return Promise.resolve(response.data)
      } catch (error) {
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
        const response = await axiosBusiness .post(`${BACKENDURL}/create`, form);
        commit('setUpsertResponse', response.data)
       
        commit("create", { ...response.data.data[0]});
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
    async update({ commit }, form) {
      commit('setUpsertLoading', true)
      try {
      
        const response = await axiosBusiness.put(`${BACKENDURL}/update/`+ form.id, form);
        commit('setUpsertResponse', response.data)
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
        commit("delete",response.data.data);
        commit('setDeleteError', null)
        return Promise.resolve(response)
      } catch (error) {
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
        const response = await axiosBusiness.put(`${BACKENDURL}/update-status`, payload);
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
  },
};;
