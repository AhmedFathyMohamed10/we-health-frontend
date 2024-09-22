export default {
    data() {
      return {
        finalAccountParams: {
          url: "erp/client-clients/search",
          suggestions: [],
        },
      };
    },
    methods: {
      async search(event, params) {
        try {
          await this.$store
            .dispatch("erp_v2/clients/search", {
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