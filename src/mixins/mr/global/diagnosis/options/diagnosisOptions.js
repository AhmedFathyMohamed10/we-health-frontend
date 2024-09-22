import {destructOptionsList} from "@/helpers/utilities"
export default {
    data(){
        return{
            // typeOptions:[
            //     {value:"Primary",id:"primary"},
            //     {value:"Secondary",id:"secondary"},
            // ],
            // conditionOptions:[
            //     {value:"Chronic",id:"chronic"},
            //     {value:"Acute",id:"acute"},
            // ],
            // diagnosesOptions: [
            //     { english: "New York", arabic: "New York"},
            //     { english: "Rome",arabic: "Rome"},
            //     { english: "London",arabic: "London" },
            //     { english: "Istanbul",arabic: "Istanbul" },
            //     { english: "Paris",arabic: "Paris"},
            // ],

            diagnoseParams:{
              url: "example/diagnose",
              suggestions:[]
            }
        }
    },
    computed:{
      //////////////// search Diagnosis //////////////////
      //////////////// * Static Options //////////////////
      // diagnosisOptions () {
      //   return this.$store.getters['generalStaticData/diagnosis']["diagnosis"]
      // },
      conditionOptions(){
        if(this.diagnosisOptions["condition"]){
          return this.diagnosisOptions["condition"]
        }
        else return [];
      },
      typeOptions(){
        if(this.diagnosisOptions["type"]){
          return this.diagnosisOptions["type"]
        }
        else return []; 
      },
    },
    methods:{
      async search(event,params) {
        console.log(event.query)
        try {
          await this.$store.dispatch('detailsGeneral/generalSuggestions/search',{url:params.url,s:event.query})
          .then((res) => {
              params.suggestions = [...res]
          });
        }
        catch (error) {
          console.error(error)
        }
      },
    }
}