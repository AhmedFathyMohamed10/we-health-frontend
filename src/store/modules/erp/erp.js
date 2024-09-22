import accounting from "./accounting/accounting";
import accounts from "./accounts/accounts";
import Assets from "./assets/Assets";
import Restrictions from "./restrictions/Restrictions";
import ProductAndService from "./productAndService/ProductAndService";
import PartnersAndRatios from "./partnersAndRatios/PartnersAndRatios";
import regularPeriodicMaintenance from "./regularPeriodicMaintenance/regularPeriodicMaintenance";
import Cabinets from "./cabinets/Cabinets";
import hr from "./HR/hr";
import providers from "./providers/provider";
import insuranceAgents from "./insuranceAgents/insurance";
import clients from "./clients/clients";
import clientsSuggestion from "./clients/clientsSuggestion";
import groups from "./groups/groups";
import clientsAndProviders from "./clientAndprovider/clientsAndProviders"
import users from "./users/users"
import management from "./management/management"
import group from "./demo/group/group"
import client from "./demo/client/client"
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
        clients,
        clientsSuggestion,
        groups,
        accounting,
        accounts,
        Assets,
        Restrictions,
        ProductAndService,
        hr,
        PartnersAndRatios,
        hr,
        regularPeriodicMaintenance,
        Cabinets,
        providers,
        insuranceAgents,
        clientsAndProviders,
        users,
        management,
        group,
        client
    },
};
