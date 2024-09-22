import {destructOptionsList} from "@/helpers/utilities"

export default {
    data(){
        return{
          clientsParams:{
              url: "erp/demo-client",
              suggestions:[]
          }
        }
    },
    computed:{
    
  },
    methods:{
        async search(event,params) {
          try {
            let customParams = { pageNumber:1, rows:1000000 ,name:event.query };
            await this.$store.dispatch('erp/demo-client/list',customParams)
            .then((res) => {
              console.log(res.results)
              params.suggestions = [...res.results]
            });
          }
          catch (error) {
            console.error(error)
          }
        },
    }
}

