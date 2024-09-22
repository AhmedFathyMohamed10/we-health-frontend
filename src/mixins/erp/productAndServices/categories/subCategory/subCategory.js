
export default {
    computed:{
        subCategoryOptions() {
            if (this.$store.getters["erp/ProductAndService/Category/SubCategory/getListResponse"])
              return this.$store.getters["erp/ProductAndService/Category/SubCategory/getListResponse"].results;
            else return [];
          },
    },
    created() {
        if (!this.subCategoryOptions.length > 0) {
            let params = { pageNumber: 1, rows: 1000000, name: "" };
            this.$store.dispatch("erp/ProductAndService/Category/SubCategory/list", params);
          }
    },
}

