export default {
    data() {
      return {
        contractParams: {
          url: "erp_v2/b2b_group/search",
          suggestions: [],
        },
      };
    },
    methods: {
      async search(event, params) {
      
        try {
            let customParams =  { pageNumber: 1, rows: 1000000, number:event.query }
          await this.$store
            .dispatch("erp_v2/contracts/list", 
                customParams
            )
            .then((res) => {
              params.suggestions = [...res.results];
            });
        } catch (error) {
          console.error(error);
        }
      },
    },
  };