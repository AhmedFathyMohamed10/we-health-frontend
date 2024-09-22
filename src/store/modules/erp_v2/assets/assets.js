import fixedAsset from "./fixedAsset";
import assetGroup from "./assetGroup";
import assetPrice from "./assetPrice";
import assetGroupSearch from "./assetGroupSearch";


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
    fixedAsset,
    assetGroup,
    assetPrice,
    assetGroupSearch,
  },
};
