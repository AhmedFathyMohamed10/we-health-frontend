export default {
  data() {
    return {
      overTimeTypeParams: {
        url: "erp/hr/over-time-and-over-due/search",
        suggestions: [],
      },
    };
  },
  methods: {
    async search(event, params) {
      try {
        await this.$store
          .dispatch("erp_v2/hr/overTimeAndOverDueSearch/search", {
            over_time_name: event.query,
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
