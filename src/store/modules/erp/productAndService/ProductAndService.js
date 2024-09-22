import productClassification from "./productClassification";
import PricingPolicy from "./PricingPolicy";
import Category from "./categories/Category";
import productAndService from "./productOrService/productAndService";
import Store from "./Store";
import productUnit from "./productUnit";
import inventoryManagement from "./inventoryManagement";

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
    productClassification,
    PricingPolicy,
    Category,
    productAndService,
    Store,
    productUnit,
    inventoryManagement,
  },
};
