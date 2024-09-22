import product from "./product";
import productSearch from "./productSearch";
import group from "./group";
import itemsGroupSearch from "./itemsGroupSearch";
import unit from "./unit";
import location from "./location";
import price from "./price";

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
    product,
    productSearch,
    group,
    itemsGroupSearch,
    unit,
    location,
    price,
  },
};
