export default {
  data() {
    return {
      finalAccountParams: {
        url: "erp/accounts/final-account/search",
        suggestions: [],
      },
    };
  },
  methods: {
    async searchFinalAccount(event, params) {
      console.log("final");
      try {
        await this.$store
          .dispatch("erp_v2/accounts/finalAccountSearch/search", {
            url: params.url,
            name_en: event.query,
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
