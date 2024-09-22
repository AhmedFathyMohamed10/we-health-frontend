
export default {
  data(){
      return{
          productParams:{
            url: "erp/product-or-service/get-product",
            suggestions:[]
          },
      }
  },
  methods:{
      async search(event,params) {
        try {
          await this.$store.dispatch('erp/ProductAndService/productAndService/productSuggestions/search',{url:params.url,data:event.query})
          .then((res) => {
              console.log(res)
              params.suggestions = [...res.data]
          });
        }
        catch (error) {
          console.error(error)
        }
      },
      findLocaleOption(list, value) {
        let item = list.find((item) => item.id == value || item.code == value);
        if (item) return item["name"];
        else return value;
      },
  
  }
}
