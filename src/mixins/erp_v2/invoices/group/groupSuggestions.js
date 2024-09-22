export default {
  data() {
    return {
      groupParams: {
        // url: "erp_v2/invoices/invoiceGroup/list",
        suggestions: [],
      },
    };
  },
  methods: {
    async search(event, params) {
      try {
        await this.$store
          .dispatch("erp_v2/invoices/invoiceGroup/search", {
            invoice_name_en: event.query,
          })
          .then((res) => {
            params.suggestions = [...res.data];
          });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
