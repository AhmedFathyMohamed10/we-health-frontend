export default {
    data() {
      return {
        groupParams: {
          url: "erp/client-groups/search",
          suggestions: [],
        },
      };
    },
    methods: {
      async search(event, params,category) {
        console.log(params)
        console.log(category)
        try {
          await this.$store
            .dispatch("erp_v2/groups/search", {
              url: params.url,
              name_en: event.query,
              category:category,
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