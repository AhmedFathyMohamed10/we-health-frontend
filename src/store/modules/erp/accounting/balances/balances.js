import accountStatement from "./accountStatement"
import productStatement from "./productStatement"
import productProfit from "./productProfit"
import invoiceStatement from "./invoiceStatement"
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
    accountStatement,
    productStatement,
    productProfit,
    invoiceStatement,
  },
};
