import signup from "./signup";
import signin from "./signin";
import user from "./user";
import changePassword from "./changePassword";
export default {
  namespaced: true,
  state: { },
  // get the currant state value
  getters: {},
  // use to perform un mutate or change states
  mutations: {},
  // use to perform un asynchronous tasks
  actions: {},
  modules:{
    signup,
    signin,
    user,
    changePassword,
  }
};


