import account from "./account";
import finalAccount from "./finalAccount";
import AccountingPeriod from "./AccountingPeriod";
import accountSearch  from "./accountSearch";
import finalAccountSearch  from "./finalAccountSearch";

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
    account,
    finalAccount,
    AccountingPeriod,
    accountSearch,
    finalAccountSearch,
  },
};
