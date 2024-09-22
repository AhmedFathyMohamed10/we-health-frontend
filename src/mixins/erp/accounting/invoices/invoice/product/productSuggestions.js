export default {
    data(){
        return{
            productParams:{
              url: "erp/accounting/invoices/invoice/search-in-products",
              suggestions:[]
            },
        }
    },
    methods:{
        async search(event,params) {
          // console.log(event.query)
          try {
            await this.$store.dispatch('erp/accounting/invoices/product/search',{url:params.url,name_en:event.query})
            .then((res) => {
                console.log(res)
                params.suggestions = [...res]
            });
          }
          catch (error) {
            console.error(error)
          }
        },
    }
}