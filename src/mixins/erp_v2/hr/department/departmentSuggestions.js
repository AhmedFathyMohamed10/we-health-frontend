export default {
  data() {
    return {
      departmentParams: {
        url: "erp_v2/hr/department/search",
        suggestions: [],
      },
    };
  },
  methods: {
    async search(event, params) {
      try {
        await this.$store
        .dispatch("erp_v2/hr/departmentSearch/search", {
          department_name: event.query,
        })
        .then((res) => {
          console.log(res)
            console.log("searchDepartment");
            params.suggestions = [...res.data];
          });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
