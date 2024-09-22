// global mixin variables (or functions) which is created in each single component or .vue file
import Vue from "vue";
Vue.mixin({
  data() {
    return {
      locale: localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "en",
      screenWidth:5000,
    };
  },
  created() {
      window.addEventListener("resize", this.screenWidthChanged);
  },
  destroyed() {
      window.removeEventListener("resize", this.screenWidthChanged);
  },
  methods:{
    screenWidthChanged(e) {
        this.screenWidth=e.target.innerWidth
    },
  },
});
