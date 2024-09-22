import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
const BACKENDURL = "erp/assets/asset";

export default {
  namespaced: true,
  state: {
    deleted_contracts: [],
    deleted_materialPicture: [],
    deleted_alternatevMaterial: [],
    deleted_alternatevBarcode: [],
    form: {
      name_en: "",
      name_ar: "",
      group: null,
      location: "",
      serial: 111111,
      account: null,
      description: "",
      purchasing_date: null,
      expiration_date: null,
      price: null,
      barcode: null,
      in_active: false,
      in_maintenance: false,
      total_destruction: false,
      last_supplier: null,
      employee_custody: null,
      last_purchasing_date_maintenance: null,
      end_in_selection: null,
      end_in_value: null,
      last_purchasing_date_warranty: null,
      maintenance_every_value: null,
      maintenance_every_selection: null,
      next_maintenance: "",
      uploaded_files: [],
      saved_files: [],
      deleted_files: [],
    },
    //////////////////////
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
  },
  // get the currant state value
  getters: {
    getDeletedContracts: (state) => state.deleted_contracts,
    getForm: (state) => state.form,
    getPricing: (state) => state.form.pricing,
    getWarranty: (state) => state.form.warranty,
    getMaintenance: (state) => state.form.maintenance,

    ////////////////////////////////////////
    getListResponse: (state) => state.listResponse,
    getListLoading: (state) => state.listLoading,
    getListError: (state) => state.listError,
    //////////////////////
    getUpsertResponse: (state) => state.upsertResponse,
    getUpsertLoading: (state) => state.upsertLoading,
    getUpsertError: (state) => state.upsertError,
    ///////////////////////////////////////////////
    getDeleteResponse: (state) => state.deleteResponse,
    getDeleteLoading: (state) => state.deleteLoading,
    getDeleteError: (state) => state.deleteError,
    ///////////////////////////////////////////////
    getStatusResponse: (state) => state.statusResponse,
    getStatusLoading: (state) => state.statusLoading,
    getStatusError: (state) => state.statusError,
  },
  // use to perform un mutate or change states
  mutations: {
    setDeletedContracts(state, data) {
      state.deleted_contracts = data;
    },
    ///////////////////////////
    setForm(state, data) {
      state.form = data;
    },

    setPricing(state, data) {
      state.form.Pricing = data;
    },
    setWarranty(state, data) {
      state.form.Warranty = data;
    },
    setMaintenance(state, data) {
      state.form.Maintenance = data;
    },

    ///////////////////////////////
    setListResponse(state, data) {
      state.listResponse = data;
    },
    setListLoading(state, loading) {
      state.listLoading = loading;
    },
    setListError(state, error) {
      state.listError = error;
    },
    ////////////////////
    setUpsertResponse(state, data) {
      state.upsertResponse = data;
    },
    setUpsertLoading(state, loading) {
      state.upsertLoading = loading;
    },
    setUpsertError(state, error) {
      state.upsertError = error;
    },
    /////////////////////////////////
    setDeleteResponse(state, data) {
      state.deleteResponse = data;
    },
    setDeleteLoading(state, loading) {
      state.deleteLoading = loading;
    },
    setDeleteError(state, error) {
      state.deleteError = error;
    },
    /////////////////////////////////
    setStatusResponse(state, data) {
      state.statusResponse = data;
    },
    setStatusLoading(state, loading) {
      state.statusLoading = loading;
    },
    setStatusError(state, error) {
      state.statusError = error;
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
      let filteredList = [];
      filteredList = state.listResponse.results.filter(
        (item) => !payload.includes(item.code)
      );
      state.listResponse.results = [...filteredList];

      state.listResponse.count = state.listResponse.count - payload.length;
    },
    changeStatus(state, payload) {
      state.listResponse.results.map((item) => {
        if (payload.selected.includes(item.code)) {
          item.status = payload.action;
        }
      });
    },
  },
  // use to perform un asynchronous tasks
  actions: {
    setForm({ commit }, payload) {
      commit("setForm", payload);
    },
    setDeletedContracts({ commit }, payload) {
      commit("setDeletedContracts", payload);
    },
    setFormContracts({ commit }, payload) {
      commit("setFormContracts", payload);
    },
    setPricing({ commit }, payload) {
      commit("setPricing", payload);
    },
    setWarranty({ commit }, payload) {
      commit("setWarranty", payload);
    },


    setMaintenance({ commit }, payload) {
      commit("setMaintenance", payload);
    },
    setListError({ commit }, payload) {
      commit("setListError", payload);
    },
    //////////////////
    setUpsertError({ commit }, payload) {
      commit("setUpsertError", payload);
    },
    setUpsertResponse({ commit }, payload) {
      commit("setUpsertResponse", payload);
    },
    //////////////////////////////////
    setDeleteError({ commit }, payload) {
      commit("setDeleteError", payload);
    },
    setDeleteResponse({ commit }, payload) {
      commit("setDeleteResponse", payload);
    },
    //////////////////////////////////
    setStatusError({ commit }, payload) {
      commit("setStatusError", payload);
    },
    setStatusResponse({ commit }, payload) {
      commit("setStatusResponse", payload);
    },
    /////////////////////////
    async list({ commit }, params) {
      console.log(params)
      commit("setListLoading", true);
      try {
        const response = await axiosBusiness.get(
          `${BACKENDURL}/?page=${params.pageNumber}&limit=${params.rows}&name_en=${params.  name_en}&group=${params.group_id}`
        );
        commit("setListResponse", response.data);
        commit("setListError", null);
        return Promise.resolve(response.data);
      } catch (error) {
        commit("setListError", error.data);
        return Promise.reject(error.data);
      } finally {
        commit("setListLoading", false);
      }
    },
    async create({ commit }, form) {
      commit("setUpsertLoading", true);
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/create`, form,{
          headers: {
            'Content-Type': 'multipart/form-data'}});
        commit("setUpsertResponse", response.data.data[0]);
        commit("create", { ...response.data.data[0] });
        commit("setUpsertError", null);
        return Promise.resolve(response);
      } catch (error) {
        console.log(error)
        commit("setUpsertError", error.response.data);
        return Promise.reject(error);
      } finally {
        commit("setUpsertLoading", false);
      }
    },
    async update({ commit }, form) {
      commit("setUpsertLoading", true);
      try {
        const response = await axiosBusiness.put(
          `${BACKENDURL}/update/` + form['id'],  form['data'], {headers: {'Content-Type': 'multipart/form-data'}}
        );
        commit("setUpsertResponse", response.data);
        commit("update", { ...response.data.data[0] });
        commit("setUpsertError", null);
        return Promise.resolve(response);
      } catch (error) {
        commit("setUpsertError", error.data);
        return Promise.reject(error);
      } finally {
        commit("setUpsertLoading", false);
      }
    },
    async changeStatus({ commit }, payload) {
      commit("setStatusLoading", true);
      try {
        const response = await axiosBusiness.put(
          `${BACKENDURL}/change-status`,
          payload
        );
        commit("setStatusResponse", response.data);
        if (payload.action === 4) {
          commit("delete", payload.selected);
        } else {
          commit("changeStatus", payload);
        }
        commit("setStatusError", null);
        return Promise.resolve(response);
      } catch (error) {
        commit("setStatusError", error.response.data);
        return Promise.reject(error);
      } finally {
        commit("setStatusLoading", false);
      }
    },
    async move({ commit }, indexes) {
      commit("setDeleteLoading", true);
      try {
        const response = await axiosBusiness.put(
          `${BACKENDURL}/move`,
          indexes
        );
        commit("setDeleteResponse", response.data.data);
        commit("delete", response.data.data);
        commit("setDeleteError", null);
        return Promise.resolve(response);
      } catch (error) {
        commit("setDeleteError", error.data);
        return Promise.reject(error);
      } finally {
        commit("setDeleteLoading", false);
      }
    },
  },
};
