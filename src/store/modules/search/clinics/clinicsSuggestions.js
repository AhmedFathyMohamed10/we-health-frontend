import axios from 'axios'
export default {
  namespaced: true,
  state: {
    search: null,
    searchLoading: false,
    searchError: false,
  },
  getters: { 
    searchData: state => state.search,
    searchLoading: state => state.searchLoading,
    searchError: state => state.searchError,
  },
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
  actions: { 
   
    async search ({ commit },payload) {
      let data = [
          { value: "Mahmoud Hamed", id:1},
          { value: "Harold Ridley", id:2},
          { value: "Gullapalli N. Rao", id:3},
          { value: "William H. Bates", id:4},
          { value: " David J. Apple", id:5},
      ];
      commit('setSearch',data)
      return Promise.resolve(data)
    },
  //   async search ({ commit },payload) {
  //     commit('setSearchLoading', true)
  //     try {
  //       const response = await axios.get(payload.url,{ params:{s:payload.s} })
  //       // console.log(response)
  //       commit('setSearch', response.data)
  //       commit('setSearchError', false)
  //       return Promise.resolve(response.data)
  //     } catch (error) {
  //       commit('setSearchError',error.response.data)
  //       return Promise.reject(error.response.data)
  //     }
  //     finally {
  //         commit('setSearchLoading', false)
  //     }
  //   },
  },
};
