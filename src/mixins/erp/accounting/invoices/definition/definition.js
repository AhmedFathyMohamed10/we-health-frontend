
export default {
  computed:{
    definitions() {
      if (this.$store.getters['erp/accounting/invoices/definition/getListResponse']){
        return this.$store.getters['erp/accounting/invoices/definition/getListResponse']['results'];
      } 
      else return [];
    },
  },
  async created() {
    if (!this.definitions.length > 0) {
      const params = {
        pageNumber: 1,
        rows: 1000,
        name:"",
        category:"",
        invoice_type:"",
        group: "",
        customer_account:"",
        material_account:"",
        discount_account:"",
        policy:"",
        method:"",
      };
      await this.$store.dispatch("erp/accounting/invoices/definition/list",params)
    }
  },
}
