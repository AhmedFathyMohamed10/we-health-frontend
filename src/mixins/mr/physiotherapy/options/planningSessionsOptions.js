import {destructOptionsList} from "@/helpers/utilities"

export default {
    data(){
        return{
          issuePrams:{
            url: "example/issue",
            suggestions:[]
           }
        }
    },
    computed:{
      //////////////// * Static Options //////////////////
 
      planningOptions () {
        return this.$store.getters['detailsPhysiotherapy/physiotherapyStaticData/planning']['sessions']
      },
      placeOptions(){
        if(this.planningOptions["place"]){
          return this.planningOptions["place"]
        }
        else return [];
      },
  },
    methods:{
        async search(event,params) {
          try {
            await this.$store.dispatch('detailsPhysiotherapy/physiotherapySuggestions/search',{url:params.url,s:event.query})
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
