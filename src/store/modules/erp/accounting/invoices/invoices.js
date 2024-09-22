import definition from "./definition"
import group from "./group"
import paymentMethods from "./paymentMethods"
import invoiceTypes from "./invoiceTypes"
import discountMethods from "./discountMethods"
import invoice from "./invoice"
import product from "./product"
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
    definition,
    group,
    paymentMethods,
    invoiceTypes,
    discountMethods,
    invoice,
    product,
  },
};
