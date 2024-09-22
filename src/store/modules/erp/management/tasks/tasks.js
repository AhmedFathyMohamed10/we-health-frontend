import group from "./group"
import status from "./status"
import task from "./task"
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
        group,
        status,
        task
    },
};