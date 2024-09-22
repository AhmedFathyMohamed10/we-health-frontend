
import groups from "./groups/groups";
import clients from "./clients/clients";
import b2b from "./b2b/b2b";
import b2b_group from "./b2b/group";
import company_type from "./b2b/companyType";
import contracts from "./b2b/contracts";
import contract_type from "./b2b/contractType";
import users from "./users/users";
import accounts from"./accounts/accountsMain";
import assets from"./assets/assets";
import items from"./items/items";
import hr from "./hr/hr";
import invoices from "./invoices/invoices";

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
    groups,
    clients,
    users,
    b2b,
    b2b_group,
    company_type,
    contract_type,
    contracts,
    accounts,
    assets,
    items,
    hr,
    invoices,
  },
};