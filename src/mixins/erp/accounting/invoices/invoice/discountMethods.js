export default {
  computed:{
    discountMethods() {
      let methods = this.$store.getters['erp/accounting/invoices/discountMethods/discountMethods'];
      return methods.map(method => {
        return {name:method.name,id:method.method_id}
      })
    },
  },
  async created() {
    if (!this.discountMethods.length > 0) {
      await this.$store.dispatch("erp/accounting/invoices/discountMethods/list")
    }
  },
}
