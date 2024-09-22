import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
const BACKENDURL = "erp/product-or-service";

export default {
  namespaced: true,
  state: {
    deleted_unit: [],
    deleted_materialPicture: [],
    deleted_alternatevMaterial: [],
    deleted_alternatevBarcode: [],
    form: {
      name_en: "",
      name_ar: "",
      codeProduct: "",
      productClassification: null,
      subCategory: null,
      status: 1,
      type_of_order_unit: null,

      general: {
        provider: null,
        mainCompany: "",
        materialType: "",
        shortcutKey: "",
        checkExpiryDate: 2,
        negativeDrawPrevention: 2,
        stopSelling: 2,
      },
      medical: {
        indications: "",
        sideEffects: "",
        chemicalComposition: "",
      },
      alternativeBarcode: [],
      materialPicture: [],
      alternativeMaterial: [],
      unit: [],
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
    getDeletedUnit: (state) => state.deleted_unit,
    getDeletedMaterialPicture: (state) => state.deleted_materialPicture,
    getDeletedAlternatevMaterial: (state) => state.deleted_alternatevMaterial,
    getDeletedAlternatevBarcode: (state) => state.deleted_alternatevBarcode,

    // getMainData: state => state.form.mainData,
    getForm: (state) => state.form,
    getUnit: (state) => state.form.unit,
    getGeneral: (state) => state.form.general,
    getMedical: (state) => state.form.medical,
    getAlternativeMaterial: (state) => state.form.alternativeMaterial,
    getAlternativeBarcode: (state) => state.form.alternativeBarcode,
    getMaterialPicture: (state) => state.form.materialPicture,

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
    setDeletedUnit(state, data) {
      console.log(data);
      state.deleted_unit = data;
    },
    setDeletedAlternatevMaterial(state, data) {
      state.deleted_alternatevMaterial = data;
    },
    setDeletedAlternatevBarcode(state, data) {
      state.deleted_alternatevBarcode = data;
    },
    setDeletedMaterialPicture(state, data) {
      state.deleted_materialPicture = data;
    },

    ///////////////////////////
    setForm(state, data) {
      state.form = data;
    },
    setFormUnit(state, data) {
      state.form.unit = data;
    },
    setGeneral(state, data) {
      state.form.general = data;
    },

    setMedical(state, data) {
      state.form.medical = data;
    },
    setAlternativeBarcode(state, data) {
      state.form.alternativeBarcode = data;
    },
    setAlternativeMaterial(state, data) {
      state.form.alternativeMaterial = data;
    },
    setMaterialPicture(state, data) {
      state.form.materialPicture = data;
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
    setDeletedUnit({ commit }, payload) {
      commit("setDeletedUnit", payload);
    },
    setDeletedMaterialPicture({ commit }, payload) {
      commit("setDeletedMaterialPicture", payload);
    },
    setDeletedAlternatevMaterial({ commit }, payload) {
      commit("setDeletedAlternatevMaterial", payload);
    },
    setDeletedAlternatevBarcode({ commit }, payload) {
      commit("setDeletedAlternatevBarcode", payload);
    },
    setFormUnit({ commit }, payload) {
      commit("setFormUnit", payload);
    },
    setGeneral({ commit }, payload) {
      commit("setGeneral", payload);
    },

    setMedical({ commit }, payload) {
      commit("setMedical", payload);
    },
    setAlternativeMaterial({ commit }, payload) {
      commit("setAlternativeMaterial", payload);
    },
    setAlternativeBarcode({ commit }, payload) {
      commit("setAlternativeBarcode", payload);
    },
    setMaterialPicture({ commit }, payload) {
      commit("setMaterialPicture", payload);
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
          deleted_unit: state.deleted_unit,
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
