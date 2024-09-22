import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps" // Import package
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyBF-DO_tbUTDAakk_ul6JGUHFyWmELwjZA",
        language: localStorage.getItem("locale") ? localStorage.getItem("locale") : 'en',
        // libraries: "places",
        // region: 'EG',
    },
});
