export default {
  data() {
    return {
      groupParams: {
        url: "erp_v2/assets/assetGroupSearch/list",
        suggestions: [],
      },
    };
  },
  methods: {
    async search(event, params) {
      try {
        await this.$store
          .dispatch("erp_v2/assets/assetGroupSearch/search", {
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
