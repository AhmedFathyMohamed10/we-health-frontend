export default {
  data() {
    return {
      allowanceParams: {
        url: "erp_v2/hr/allowance-definition/search",
        suggestions: [],
      },
    };
  },
  methods: {
    async searchAllowance(event, params) {
      try {
        await this.$store
          .dispatch("erp_v2/hr/allowanceDefinitionSearch/search", {
            allowance_name: event.query,
          })
          .then((res) => {
            params.suggestions = [...res.data];
          });
      } catch (error) {
        console.error(error);
      }
    },
  },
};

