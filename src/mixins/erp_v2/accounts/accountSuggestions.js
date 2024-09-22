export default {
  data() {
    return {
      accountParams: {
        url: "erp/accounts/account/search",
        suggestions: [],
      },
    };
  },
  methods: {
    async searchAccount(event, params) {
      console.log("tests search");
      try {
        await this.$store
          .dispatch("erp_v2/accounts/accountSearch/search", {
            url: params.url,
            account_name_en: event.query,
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
