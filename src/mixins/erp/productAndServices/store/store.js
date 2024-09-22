
export default {
  computed:{
    stores() {
      if (this.$store.getters['erp/ProductAndService/Store/getListResponse']){
        return this.$store.getters['erp/ProductAndService/Store/getListResponse']['results'];
      } 
      else return [];
    },
  },
  async created() {
    if (!this.stores.length > 0) {
      let params = { pageNumber:1, rows:1000000 ,name:"" };
      await this.$store.dispatch("erp/ProductAndService/Store/list",params)
    }
  },
}
