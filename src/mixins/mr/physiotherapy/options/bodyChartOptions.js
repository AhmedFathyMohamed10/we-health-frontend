import {destructOptionsList} from "@/helpers/utilities"

export default {
    data(){
        return{
       
        }
    },
    computed:{
      //////////////// * Static Options //////////////////
      bodyChartOptions () {
        return this.$store.getters['detailsPhysiotherapy/physiotherapyStaticData/entranceTestBodyChartOfPain']
      },
      typeOfPainOptions(){
        if(this.bodyChartOptions["typeOfPain"]){
          return this.bodyChartOptions["typeOfPain"]
        }
        else return [];
      },

      neurodynamicsOptions(){
        if(this.bodyChartOptions["test"]){
          return this.bodyChartOptions["test"]
        }
        else return [];
      }, 
      rlOptions(){
        if(this.bodyChartOptions["rlOptions"]){
          return this.bodyChartOptions["rlOptions"]
        }
        else return [];
      },

    
  },
    methods:{
       
    }
}



