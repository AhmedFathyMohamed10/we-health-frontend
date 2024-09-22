
export default {
    computed:{
      productUnits() {
        if (this.$store.getters['erp/ProductAndService/productUnit/getListResponse']){
          return this.$store.getters['erp/ProductAndService/productUnit/getListResponse']['results'];
        } 
        else return [];
      },
    },
    async created() {
      if (!this.productUnits.length > 0) {
        let params = { pageNumber:1, rows:1000000 ,name:"" };
        await this.$store.dispatch("erp/ProductAndService/productUnit/list",params)
      }
    },
    methods:{
      findLocaleOption(list, value) {
        let item = list.find((item) => item.id == value || item.code ==value);
        if (item) return item['name'];
        else return value;
      },
    }
}

