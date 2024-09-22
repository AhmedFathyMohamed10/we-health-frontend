import {axiosBusinessRegistration} from '@/plugins/axios/axiosBusinessRegistration'
export default {
  namespaced: true,
  state: {
    serverLoading: false,
    serverResponse: null,
    serverStaticDataResponse: null,
    serverError: null,
  },
  // get the currant state value
  getters: { 
    getServerLoading: state => state.serverLoading,
    getServerResponse: state => state.serverResponse,
    getServerStaticDataResponse: state => state.serverStaticDataResponse,
    getServerError: state => state.serverError,
  },
  // use to perform un mutate or change states
  mutations: {
    setServerLoading(state, loading) {
      state.serverLoading = loading;
    },
    setServerResponse(state, response) {
      state.serverResponse = response;
    },
    setStaticDataResponse(state, responseStaticData) {
      state.serverStaticDataResponse = responseStaticData;
    },
    setServerError(state, error) {
      state.serverError = error;
    },
  }, 
  // use to perform un asynchronous tasks
  actions: { 
    // async staticDataOptions({commit},payload) {
    //   try {
    //     commit('setServerLoading', true);
    //     const response = await axiosBusinessRegistration.get(`list_other_static_data`);
    //     // const response = await axiosBusinessRegistration.get(`list_other_static_data?id=${payload.id}`);
    //     // const response = await axiosBusinessRegistration.get(`list_other_static_data/${payload.id}`);
    //     commit('setServerResponse', response);
    //     commit('setServerLoading', false);
    //     commit('setServerError',null);
    //     console.log(response)
    //     return Promise.resolve(response)
    //   } catch (error) {
    //     console.log(error)
    //     commit('setServerResponse', null);
    //     commit('setServerError', error);
    //     commit('setServerLoading', false);
    //     return Promise.reject(error)
    //   }
    // }
    async documentsAndStaticData({commit},payload) {
      // try {
      //   commit('setServerLoading', true);
      //   const specialityId = payload.speciality;
      //   const staticDataOptionResponse = await Promise.all([
      //     axiosBusinessRegistration.get(`list_data/${payload.id}/${specialityId}`),
      //     // axiosBusinessRegistration.get(`list_static_data?category_Id=${payload.id}&speciality_Id=${specialityId}`),
      //     // axiosBusinessRegistration.get(`list_images`),
      //   ]) ;
      //   // axiosBusinessRegistration.get(`list_other_static_data/${payload.id}/`),
      //   // const response = await axiosBusinessRegistration.get(`list_other_static_data?id=${payload.id}`);
      //   // const response = await axiosBusinessRegistration.get(`list_other_static_data/${payload.id}`);
      //   // commit('setServerResponse', documentsListResponse);
      //   commit('setStaticDataResponse', staticDataOptionResponse);
      //   commit('setServerError',null);
      //   commit('setServerLoading', false);
      //   // console.log(documentsListResponse, staticDataOptionResponse)
      //   return Promise.resolve(staticDataOptionResponse)
      // } catch (errors) {
      //   console.log(errors)
      //   // const [documentsError, staticDataError] = errors;
      //   // if (documentsError) {
      //   //   // Handle errors for documents API
      //   //   commit('setServerResponse', null);
      //   //   commit('setServerError', documentsError);
      //   // }
      //   // if (staticDataError) {
      //   //   // Handle errors for static data API
      //   //   commit('setStaticDataResponse', null);
      //   //   commit('setServerError', staticDataError);
      //   // }
      //   // commit('setServerResponse', null);
      //   commit('setStaticDataResponse', null);
      //   commit('setServerError', errors);
      //   commit('setServerLoading', false);
      //   return Promise.reject(errors)
      //   // return Promise.reject({
      //   //   documents: documentsError,
      //   //   staticData: staticDataError,
      //   // })
      // }
     ////////////////////
     try {
          commit('setServerLoading', true);
          const specialityId = payload.speciality;
          const listDataResponse = await axiosBusinessRegistration.get(`list_data/${payload.id}/${specialityId}`);
          commit('setServerResponse', listDataResponse);
          commit('setServerLoading', false);
          commit('setServerError', null);
          return listDataResponse; // Return the response directly
      } catch (error) {
          if (error.response && error.response.status === 404) {
              // Handle 404 error
              console.error('Resource not found:', error);
              // Optionally set a flag or display a message to the user
          } else {
              // Handle other errors
              console.error('An error occurred:', error);
              // Optionally display a generic error message to the user
          }
          commit('setServerResponse', null);
          commit('setServerError', error);
          commit('setServerLoading', false);
          throw error; // Re-throw the error
      } 
    }
  },
};
