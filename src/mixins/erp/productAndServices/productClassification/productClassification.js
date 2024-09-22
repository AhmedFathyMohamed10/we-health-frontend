
export default {
    computed:{
        productClassificationOptions() {
            if (this.$store.getters["erp/ProductAndService/productClassification/getListResponse"])
              return this.$store.getters["erp/ProductAndService/productClassification/getListResponse"].results;
            else return [];
          },
    },
    created() {
        if (!this.productClassificationOptions.length > 0) {
            let params = { pageNumber: 1, rows: 1000000, name: "" };
            this.$store.dispatch("erp/ProductAndService/productClassification/list", params);
          }
    },
    methods: {
      findLocaleOption(list, value) {
        let item = list.find((item) => item.id == value);
        if (item) return item[this.locale];
        else return value;
      },
    }
}

