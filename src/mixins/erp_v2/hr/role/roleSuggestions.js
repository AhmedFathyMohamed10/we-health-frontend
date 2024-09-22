export default {
  data() {
    return {
      roleParams: {
        url: "erp_v2/hr/roleSearch/search",
        suggestions: [],
      },
    };
  },
  methods: {
    async searchRole(event, params) {
      console.log("role mixin")
      try {
        await this.$store
          .dispatch("erp_v2/hr/roleSearch/search", {
            role_name: event.query,
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
