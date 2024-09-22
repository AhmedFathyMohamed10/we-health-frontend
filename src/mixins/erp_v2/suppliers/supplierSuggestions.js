export default {
  data() {
    return {
      supplierParams: {
        suggestions: [],
      },
    };
  },
  methods: {
    async searchSuppliers(event, params) {
      try {
        let customParams =  { pageNumber: 1, rows: 1000000, name:event.query , group_id:"", category_filter:2}
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