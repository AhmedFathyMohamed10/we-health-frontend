export default {
  data() {
    return {
      productParams: {
        url: "erp/items/product/search",
        suggestions: [],
      },
    };
  },
  methods: {
    async searchProduct(event, params) {
      let param = {pageNumber:1 , rows:1000000,name_en:event.query, group:""}

      try {
        await this.$store
          .dispatch("erp_v2/items/productSearch/search",param)
          .then((res) => {
            console.log(res)
            params.suggestions = [...res.results];
          });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
