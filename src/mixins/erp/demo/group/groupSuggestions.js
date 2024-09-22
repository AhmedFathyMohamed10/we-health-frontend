import {destructOptionsList} from "@/helpers/utilities"

export default {
    data(){
        return{
          groupParams:{
              url: "erp/demo-group",
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
            await this.$store.dispatch('erp/group/get_groups',customParams)
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

