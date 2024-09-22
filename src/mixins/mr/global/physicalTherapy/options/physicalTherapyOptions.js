import {destructOptionsList} from "@/helpers/utilities"

export default {
    data(){
        return{
            // treatmentProgramsOptions: [
            //     { english: "New York", arabic: "New York"},
            //     { english: "Rome",arabic: "Rome"},
            //     { english: "London",arabic: "London" },
            //     { english: "Istanbul",arabic: "Istanbul" },
            //     { english: "Paris",arabic: "Paris"},
            // ],
            // recommendedCentersOptions: [
            //     { english: "New York", arabic: "New York"},
            //     { english: "Rome",arabic: "Rome"},
            //     { english: "London",arabic: "London" },
            //     { english: "Istanbul",arabic: "Istanbul" },
            //     { english: "Paris",arabic: "Paris"},
            // ],
            // periodUnitOptions: [
            //     { en: "days", ar: "days" ,key: "days"},
            //     { en: "weeks", ar: "weeks" ,key: "weeks"},
            //     { en: "months", ar: "months" ,key: "months"},
            //     { en: "years", ar: "years" ,key: "years"},
            // ],   
            
            
            treatmentProgramParams:{
                url: "example/treatmentProgram",
                suggestions:[]
            },
            recommendedCenterParams:{
                url: "example/recommendedCenter",
                suggestions:[]
            },
        }
    },
    computed:{
        //////////////// search Diagnosis //////////////////
        //////////////// * Static Options //////////////////
        // physicalTherapyOptions () {
        //   // return this.$store.getters['generalStaticData/physicalTherapy']["physicalTherapy"]
        //   return {}
        // },
        periodUnitOptions(){
          if(this.physicalTherapyOptions["period"]){
            return this.physicalTherapyOptions["period"]
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
                // console.log(res)
                params.suggestions = [...res]
            });
          }
          catch (error) {
            console.error(error)
          }
        },
    }
}