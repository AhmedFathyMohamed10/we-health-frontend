
export default {
  computed:{
    invoiceTypes() {
      if (this.$store.getters['erp/accounting/invoices/invoiceTypes/invoiceTypes']){
        return this.$store.getters['erp/accounting/invoices/invoiceTypes/invoiceTypes'];
      } 
      else return [];
    },
  },
  async created() {
    if(!this.invoiceTypes.length > 0) {
      await this.$store.dispatch("erp/accounting/invoices/invoiceTypes/list",{category:""})
    }
  },
}
