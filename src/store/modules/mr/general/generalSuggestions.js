import axios from 'axios'
export default {
  namespaced: true,
  state: {
    search: null,
    searchLoading: false,
    searchError: false,
  },
  // get the currant state value
  getters: { 
    searchData: state => state.search,
    searchLoading: state => state.searchLoading,
    searchError: state => state.searchError,
  },
  // use to perform un mutate or change states
  mutations: {
    setSearch (state, data) {
      state.search = data
    },
    setSearchLoading (state, loading) {
      state.searchLoading = loading
    },
    setSearchError (state, error) {
      state.searchError = error
    },
  }, 
  // use to perform un asynchronous tasks
  actions: { 
    async search ({ commit },payload) {
      // console.log(payload)
      let data = [
          { value: "New York", id:1},
          { value: "Rome",id:2},
          { value: "London",id:3},
          { value: "Istanbul",id:4},
          { value: "Paris",id:5},
      ];
      commit('setSearch',data)
      return Promise.resolve(data)
    },
    // async search ({ commit },payload) {
    //   commit('setSearchLoading', true)
    //   try {
    //     const response = await axios.get(payload.url,{ params:{s:payload.s} })
    //     // console.log(response)
    //     commit('setSearch', response.data)
    //     commit('setSearchError', false)
    //     return Promise.resolve(response.data)
    //   } catch (error) {
    //     commit('setSearchError',error.response.data)
    //     return Promise.reject(error.response.data)
    //   }
    //   finally {
    //       commit('setSearchLoading', false)
    //   }
    // },
  },
};
