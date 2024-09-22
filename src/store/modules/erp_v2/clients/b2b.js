import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
const BACKENDURL = "erp/product-or-service";

export default {
  namespaced: true,
  state: {
    deleted_contracts: [],
    deleted_materialPicture: [],
    deleted_alternatevMaterial: [],
    deleted_alternatevBarcode: [],
    form: {
      company_name_en: null,
      company_name_ar: null,
      company_type: null,
      group: null,
      company_code: null,

      contact: {
        city: null,
        address: "",
        email: "",
        phone_number: null,
        other_phone_number: null,
        industry_type: "",
      },
      permission: {
        discount: null,
        profit: null,
        max_debit: null,
        treat_as: null,
        prevent_dealing: false,
        alert_dealing: false,
        prevent_give: false,
        alert_give: false,
        payment_method: null,
      },

      contracts: [],
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
    // get deleted row from table
    getDeletedContracts: (state) => state.deleted_contracts,
    // getMainData: state => state.form.mainData,
    getForm: (state) => state.form,
    getContracts: (state) => state.form.contracts,
    getContact: (state) => state.form.contact,
    getPermission: (state) => state.form.permission,

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
      console.log(data);
      state.deleted_contracts = data;
    },
    ///////////////////////////
    setForm(state, data) {
      state.form = data;
    },
    
    setContact(state, data) {
      state.form.contact = data;
    },
    setFormContracts(state, data) {
      state.form.contracts = data;
    },
    setPermission(state, data) {
      state.form.permission = data;
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
      console.log(payload);
      let index = state.listResponse.results.findIndex(
        (item) => item.id == payload.id
      );
      console.log(index);
      if (index > -1) {
        state.listResponse.results[index] = payload;
        console.log(state.listResponse.results[index]);
      }
    },
    delete(state, payload) {
      console.log(payload);
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
    setcontact({ commit }, payload) {
      commit("setcontact", payload);
    },
    setPermission({ commit }, payload) {
      commit("setPermission", payload);
    },

    
    setListResponse({ commit }, payload) {
      commit("setListResponse", payload);
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
      commit("setListLoading", true);
      try {
        const response = await axiosBusiness.get(
          `${BACKENDURL}/?page=${params.pageNumber}&limit=${params.rows}&name_ar=${params.name_ar}&name_en=${params.name_en}`
        );
        console.log(response);
        commit("setListResponse", response.data);
        commit("setListError", null);
        return Promise.resolve(response.data);
      } catch (error) {
        console.log(error);
        commit("setListError", error.data);
        return Promise.reject(error.data);
      } finally {
        commit("setListLoading", false);
      }
    },
    async create({ commit }, form) {
      console.log(form);
      commit("setUpsertLoading", true);
      try {
        const response = await axiosBusiness.post(`${BACKENDURL}/create`, form);
        console.log(response);
        commit("setUpsertResponse", response.data);
        commit("create", { ...response.data.data[0] });
        commit("setUpsertError", null);
        return Promise.resolve(response);
      } catch (error) {
        console.log(error);
        commit("setUpsertError", error.response.data);
        return Promise.reject(error);
      } finally {
        commit("setUpsertLoading", false);
      }
    },
    async update({ commit, state }, form) {
      commit("setUpsertLoading", true);
      let data = {
        data: form,
        deleted_row: {
          deleted_contracts: state.deleted_contracts,
          deleted_materialPicture: state.deleted_materialPicture,
          deleted_alternatevMaterial: state.deleted_alternatevMaterial,
          deleted_alternatevBarcode: state.deleted_alternatevBarcode,
        },
      };
      try {
        const response = await axiosBusiness.put(
          `${BACKENDURL}/update/` + form.id,
          data
        );
        console.log(response.data);
        commit("setUpsertResponse", response.data);
        commit("update", { ...response.data.data[0] });
        commit("setUpsertError", null);
        return Promise.resolve(response);
      } catch (error) {
        console.log(error);
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
        console.log(error);
        commit("setStatusError", error.response.data);
        return Promise.reject(error);
      } finally {
        commit("setStatusLoading", false);
      }
    },
  },
};
