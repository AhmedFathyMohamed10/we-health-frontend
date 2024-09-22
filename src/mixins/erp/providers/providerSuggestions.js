import {destructOptionsList} from "@/helpers/utilities"

export default {
    data(){
        return{
            providerParams:{
              url: "erp/client-and-provider/search",
              suggestions:[]
            },
        }
    },
    methods:{
        async search(event,params) {
          console.log(event)
          try {
            await this.$store.dispatch('erp/clientsAndProviders/clientAndprovider/search',{url:params.url,name:event.query,category:2})
            .then((res) => {
                console.log(res)
                params.suggestions = [...res.data]
            });
          }
          catch (error) {
            console.error(error)
          }
        },
    }
}