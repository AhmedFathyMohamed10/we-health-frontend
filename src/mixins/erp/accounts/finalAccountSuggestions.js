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
    async search(event, params) {
      console.log("final");
      try {
        await this.$store
          .dispatch("erp/accounts/finalAccount/search", {
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
