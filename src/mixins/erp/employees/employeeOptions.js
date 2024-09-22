export default {
  data() {
    return {
      employeesParams: {
        url: "get-user",
        suggestions: [],
      },
    };
  },
  computed: {
    employeesOptions() {
      if (this.$store.getters["erp/hr/employees/getListResponse"]) {
        return this.$store.getters["erp/hr/employees/getListResponse"].results;
      } else {
        return [];
      }
    },
  },
  created() {
    if (!this.employeesOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "", mobile: "" };
      this.$store.dispatch("erp/hr/employees/list", params);
    }
  },
  methods: {
    search(event, param) {
      param.suggestions = this.employeesOptions;
      console.log(param.suggestions);
      //   let res = this.employeesOptions.filter((element) => element.id == param)
      //   return res
    },
  },
};
