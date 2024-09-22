import AssetsGroup from "./AssetsGroup"
import DepreciationTable from "./DepreciationTable"
import FixedAssets from "./FixedAssets"
import Destruction from "./Destruction"
import report from "./reports/report"
import setting from "./settings/setting"

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
    AssetsGroup,
    DepreciationTable,
    FixedAssets,
    Destruction,
    report,
    setting,

  },
};
