import {destructOptionsList} from "@/helpers/utilities"

export default {
    data(){
        return{
        }
    },
    computed:{
      //////////////// * Static Options //////////////////

      Procedures () {
        return this.$store.getters['detailsPhysiotherapy/physiotherapyStaticData/Procedures']['sessions']
      },
      dietStatusOptions(){
        if(this.Procedures["dietStatus"]){
          return this.Procedures["dietStatus"]
        }
        else return [];
      },
  },

}
