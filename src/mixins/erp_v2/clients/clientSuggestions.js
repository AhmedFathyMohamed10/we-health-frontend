export default {
  data() {
    return {
      clientParams: {
        suggestions: [],
      },
    };
  },
  methods: {
    async searchClient(event, params) {
      try {
        let customParams =  { pageNumber: 1, rows: 1000000, name:event.query , group_id:"", category_filter:1}
        await this.$store.dispatch('erp_v2/clients/list',customParams)
        .then((res) => {
            params.suggestions = [...res.results]
        });
      }
      catch (error) {
        console.error(error)
      }
    },
  },
};