import {destructOptionsList} from "@/helpers/utilities"

export default {
    data(){
        return{
          accountParams:{
              url: "Account",
              suggestions:[]
          }
        }
    },
    computed:{
    
  },
    methods:{
        async search(event,params) {
          console.log(event.query)
          try {
            await this.$store.dispatch('erp/Accounts/Account/search',{url:params.url,name:event.query})
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

