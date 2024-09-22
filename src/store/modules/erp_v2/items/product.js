import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
const BACKENDURL = "erp/items/product";

export default {
  namespaced: true,
  state: {
    itemsCount:null,
    delete_pricing_and_unit: [],
    delete_alternative_material: [],
    delete_alternative_barcode: [],
    form: {
      name_en:"",
      name_ar:"",
      group:null,
      location:null,
      serial:111111,
      accounting_code:"",
      uploaded_files: [],
      saved_files: [],
      deleted_files: [],
      file:null,
      item_type:null,
      status:1,
      general:{
        min_limit:null,
        max_limit:null,
        last_supplier:null,
        in_active:false,
        prevent_give_discount:false,
        prevent_negative_quantity_take_out:false,
        stop_selling:false,
        prevent_price_modification:false,
        tax_free:false,
        alert_before_expiration_date:false,
        expiration_date_value:null,
        expiration_date_selection:null,
      },
      mic:{
        indication:"",
        pharmaceutical_group:"",
        dose:"",
        contra_indication:"",
        pharmacological_group:"",
        other:"",
        precaution:"",
        side_effect:"",
        active_ingredient:"",
        pregnancy:"",
      },
      pricing_and_unit: [],
      alternatives:[],
      alternative_barcode:[],
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
    getItemsCount: (state)=> state.itemsCount,
    getDeletedPricingAndUnit: (state) => state.delete_pricing_and_unit,
    getDeletedAlternative: (state) => state.delete_alternative_material,
    getDeletedAlternativeBarcode: (state) => state.delete_alternative_barcode,

    getForm: (state) => state.form,
    getPricingAndUnit: (state) => state.form.pricing_and_unit,
    getGeneral: (state) => state.form.general,
    getAlternatives: (state) => state.form.alternatives,
    getAlternative_barcode: (state) => state.form.alternative_barcode,
    getMic: (state) => state.form.mic,

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
    setItemsCount(state,data){
      state.itemsCount = data
    },
    setDeletedPricingAndUnit(state, data) {
      state.delete_pricing_and_unit = data;
    },
    setDeletedAlternative(state, data) {
      state.delete_alternative_material = data;
    },
    setDeletedAlternativeBarcode(state, data) {
      state.delete_alternative_barcode = data;
    },
    setForm(state, data) {
      state.form = data;
    },
    setPricingAndUnit(state, data) {
      state.form.pricing_and_unit = data;
    },
    setGeneral(state, data) {
      state.form.general = data;
    },
    setAlternatives(state, data) {
      state.form.alternatives = data;
    },
    setAlternative_barcode(state, data) {
      state.form.alternative_barcode = data;
    },
    setMic(state, data) {
      state.form.mic = data;
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
  },
  // use to perform un asynchronous tasks
  actions: {
    setItemsCount({commit},payload){
      commit("setItemsCount",payload);
    },
    setForm({ commit }, payload) {
      commit("setForm", payload);
    },

    setDeletedPricingAndUnit({ commit }, payload) {
      commit("setDeletedPricingAndUnit", payload);
    },
    setDeletedAlternative({ commit }, payload) {
      commit("setDeletedAlternative", payload);
    },
    setDeletedAlternativeBarcode({ commit }, payload) {
      commit("setDeletedAlternativeBarcode", payload);
    },
    
    setFormContracts({ commit }, payload) {
      commit("setFormContracts", payload);
    },
    setPricingAndUnit({ commit }, payload) {
      commit("setPricingAndUnit", payload);
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
      commit("setListLoading", true);
      try {
        const response = await axiosBusiness.get(
          `${BACKENDURL}/?page=${params.pageNumber}&limit=${params.rows}&group=${params.group}&name_en=${params.name_en}`
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
        commit("setUpsertResponse", response.data);
        commit("create", { ...response.data.data[0] });
        commit("setUpsertError", null);
        return Promise.resolve(response);
      } catch (error) {
        commit("setUpsertError", error.response.data);
        return Promise.reject(error);
      } finally {
        commit("setUpsertLoading", false);
      }
    },
    async update({ commit, state }, form) {
      commit("setUpsertLoading", true);
      try {
        const response = await axiosBusiness.put(
          `${BACKENDURL}/update/` + form['id'],  form.data,{
            headers: {'Content-Type': 'multipart/form-data'}});
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
    async getItemCount({ commit }, params) {
      commit("setListLoading", true);
      try {
        const BACKENDURLFORUNIT = 'erp/items/product'
        let request_query = `${BACKENDURLFORUNIT}/getCount?page=${params.pageNumber}&limit=${params.rows}&name_en=${params.name_en}&group_id=${params.group_id}`
       
        const response = await axiosBusiness.get(
          request_query
        );
        
        commit("setItemsCount", response.data);
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
  },
};
