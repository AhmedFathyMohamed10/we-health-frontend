export default {
  data() {
    return {
      officialParams: {
        url: "erp_v2/hr/department/search",
        suggestions: [],
      },
    };
  },
  methods: {
    async searchOfficial(event, params) {
      try {
        await this.$store
        .dispatch("erp_v2/hr/official_vacations/get_official_vacations", {
          
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
