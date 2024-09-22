import {destructOptionsList} from "@/helpers/utilities"

export default {
    data(){
        return{
          clientsParams:{
              url: "get-user",
              suggestions:[]
          }
        }
    },
    computed:{
    
  },
    methods:{
        async search(event,params) {
          try {
            await this.$store.dispatch('erp/clientsSuggestion/search',{url:params.url,s:event.query})
            .then((res) => {
                params.suggestions = [...res.data]
            });
          }
          catch (error) {
            console.error(error)
          }
        },
    }
}

