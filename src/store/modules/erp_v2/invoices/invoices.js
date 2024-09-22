import purchase from "./purchase";
import invoiceGroup from "./invoiceGroup";
import invoiceDefinition from "./invoiceDefinition";
import paymentType from "./paymentType";
import order from "./order";
import orderReview from "./orderReview";
import deliveryCompany from "./deliveryCompany";

export default {
  namespaced: true,
  state: {},
  // get the currant state value
  getters: {},
  // use to perform un mutate or change states
  mutations: {},
  // use to perform un asynchronous tasks
  actions: {},
  // to import child modules here
  modules: {
    purchase,
    invoiceGroup,
    invoiceDefinition,
    paymentType,
    order,
    orderReview,
    deliveryCompany,
  },
};
