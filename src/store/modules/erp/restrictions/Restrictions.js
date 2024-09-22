import Bond from"./Bond"
import RestrictionsGroup from "./RestrictionsGroup"
import TypesOfRestrictions from "./TypesOfRestrictions"
import TypesOfSecurities from "./TypesOfSecurities"
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
    Bond,
    RestrictionsGroup,
    TypesOfRestrictions,
    TypesOfSecurities,
  },
};
