
export default {
    computed:{
      pricingPolicyOptions() {
        if (this.$store.getters['erp/ProductAndService/PricingPolicy/getListResponse']){
          return this.$store.getters['erp/ProductAndService/PricingPolicy/getListResponse']['results'];
        } 
        else return [];
      },
    },
    created() {
      if (!this.pricingPolicyOptions.length > 0) {
        let params = { pageNumber:1, rows:1000000 ,name:"" };
        this.$store.dispatch("erp/ProductAndService/PricingPolicy/list",params)
      }
    },
}

