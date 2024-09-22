export default {
    data() {
      return {
        groupParams: {
          url: "erp_v2/b2b_group/search",
          suggestions: [],
        },
      };
    },
    methods: {
      async search(event, params) {
      
        try {
          await this.$store
            .dispatch("erp_v2/b2b_group/search", {
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