export default {
  data() {
    return {
      rewardParams: {
        url: "erp_v2/hr/reward/search",
        suggestions: [],
      },
    };
  },
  methods: {
    async search(event, params) {
      try {
        await this.$store
          .dispatch("erp_v2/hr/rewardSearch/search", {
            reward_name: event.query,
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
