import register from "./register";
import list from "./businessList";
import categories from "./categories";
import specialties from "./specialties";
import subspecialty from "./subspecialty";
import staticData from "./staticData";
import listData from "./listData";
import documents from "./documents";
import insuranceSuggestions from "./insuranceSuggestions";
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
    register,
    list,
    categories,
    specialties,
    subspecialty,
    staticData,
    listData,
    documents,
    insuranceSuggestions
  }
};;


