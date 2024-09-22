import installments from "./installments"
import rentals from "./rentals"
import maintenance from "./maintenance";

export default {
  namespaced: true,
  state: { },
  // get the currant state value
  getters: { },
  // use to perform un mutate or change states
  mutations: { },
  // use to perform un asynchronous tasks
  actions: { },
  // to import child modules here
  modules: {
    installments,
    rentals,
    maintenance,
  },
};

