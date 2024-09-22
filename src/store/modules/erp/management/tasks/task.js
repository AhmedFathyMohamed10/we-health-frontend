import { axiosBusiness } from "@/plugins/axios/axiosBusiness";
export default {
    namespaced: true,
    state: {
        form: {
            title: "",
            description: "",
            group: null,
            employee: null,
            status: null,
            subtasks: []
        },
        listResponse: {
            results: [],
            count: 0
        },
        listLoading: false,
        listError: null,
        ///////////////////////
        upsertResponse: null,
        upsertLoading: false,
        upsertError: null,
        ///////////////////////
        statusResponse: null,
        statusLoading: false,
        statusError: null,
    },
    // get the currant state value
    getters: {
        // get form sto sharable components [task, task form, subtask, subtask form]
        getForm: state => state.form,
        getListResponse: state => state.listResponse,
        getListLoading: state => state.listLoading,
        getListError: state => state.listError,
        //////////////////////
        getUpsertResponse: state => state.upsertResponse,
        getUpsertLoading: state => state.upsertLoading,
        getUpsertError: state => state.upsertError,
        ///////////////////////////////////////////////
        getSearchResponse: state => state.searchResponse,
        getSearchLoading: state => state.searchLoading,
        getSearchError: state => state.searchError,
        ///////////////////////////////////////////////
        getStatusResponse: state => state.statusResponse,
        getStatusLoading: state => state.statusLoading,
        getStatusError: state => state.statusError,
    },
    // use to perform un mutate or change states
    mutations: {
        // reset task form
        setForm(state, payload) {
            state.form = payload;
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
        /////////////////////////////////
        setStatusResponse(state, data) {
            state.statusResponse = data
        },
        setStatusLoading(state, loading) {
            state.statusLoading = loading
        },
        setStatusError(state, error) {
            state.statusError = error
        },
        ////////////////////////////////////
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
            filteredList = state.listResponse.results.filter(item => !payload.includes(item.code));
            state.listResponse.results = [...filteredList];
            state.listResponse.count = state.listResponse.count - payload.length;
        },
        changeStatus(state, payload) {
            state.listResponse.results.map(item => {
                if (payload.selected.includes(item.code)) {
                    item.status = payload.action
                }
            });
        },
    },
    // use to perform un asynchronous tasks
    actions: {
        // action for mutation of resetForm
        setForm({ commit }, payload) {
            commit('setForm', payload);
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
        async list({ commit }, params) {
            commit('setListLoading', true)
            try {
                const response = await axiosBusiness.get(`erp/management/task/?page=${params.pageNumber}&limit=${params.rows}&title=${params.title}`);
                console.log(response);
                commit("setListResponse", response.data);
                commit('setListError', null)
                return Promise.resolve(response.data)
            } catch (error) {
                console.log(error)
                commit('setListError', error.data)
                return Promise.reject(error.data)
            } finally {
                commit('setListLoading', false)
            }
        },
        async create({ commit }, form) {
            commit('setUpsertLoading', true)
            try {
                const response = await axiosBusiness.post(`erp/management/task/create`, form);
                console.log(response);
                commit('setUpsertResponse', response.data.data[0])
                commit("create", {...response.data.data[0] });
                commit('setUpsertError', null)
                return Promise.resolve(response)
            } catch (error) {
                console.log(error)
                commit('setUpsertError', error.data)
                return Promise.reject(error)
            } finally {
                commit('setUpsertLoading', false)
            }
        },
        async update({ commit }, form) {
            commit('setUpsertLoading', true)
            try {
                const response = await axiosBusiness.put(`erp/management/task/update/${form.id}`, form);
                console.log(response);
                commit('setUpsertResponse', response.data)
                commit("update", {...form });
                commit('setUpsertError', null)
                return Promise.resolve(response)
            } catch (error) {
                console.log(error)
                commit('setUpsertError', error.data)
                return Promise.reject(error)
            } finally {
                commit('setUpsertLoading', false)
            }
        },
        async changeStatus({ commit }, payload) {
            commit('setStatusLoading', true)
            try {
                const response = await axiosBusiness.put(`erp/management/task/change-status`, payload)
                commit('setStatusResponse', response.data)
                if (payload.action === 4) {
                    commit('delete', payload.selected);
                } else {
                    commit("changeStatus", payload);
                }
                commit('setStatusError', null)
                return Promise.resolve(response)
            } catch (error) {
                console.log(error)
                commit('setStatusError', error.data)
                return Promise.reject(error)
            } finally {
                commit('setStatusLoading', false)
            }
        },

    },
};