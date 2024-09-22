import {destructOptionsList} from "@/helpers/utilities"
export default {
    data(){
        return{
            // formulasOptions: [
            //     { english: "New York", arabic: "New York"},
            //     { english: "Rome",arabic: "Rome"},
            //     { english: "London",arabic: "London" },
            //     { english: "Istanbul",arabic: "Istanbul" },
            //     { english: "Paris",arabic: "Paris"},
            // ],
            // mealOptions: [
            //     { en: "Breakfast", ar: "Breakfast",key: "breakfast"},
            //     { en: "Lunch",ar: "Lunch",key: "lunch"},
            //     { en: "Dinner",ar: "Dinner" ,key: "dinner"},
            // ],
            // periodUnitOptions: [
            //     { en: "days", ar: "days" ,key: "days"},
            //     { en: "weeks", ar: "weeks" ,key: "weeks"},
            //     { en: "months", ar: "months" ,key: "months"},
            //     { en: "years", ar: "years" ,key: "years"},
            // ],
            // doseTypeOptions: [
            //     { en: "liquid", ar: "liquid" ,key: "liquid"},
            //     { en: "tablet", ar: "tablet" ,key: "tablet"},
            //     { en: "capsules", ar: "capsules" ,key: "capsules"},
            //     { en: "topical", ar: "topical" ,key: "topical"},
            //     { en: "suppositories", ar: "suppositories" ,key: "suppositories"},
            //     { en: "drops", ar: "drops" ,key: "drops"},
            //     { en: "inhalers", ar: "inhalers" ,key: "inhalers"},
            //     { en: "injections", ar: "injections" ,key: "injections"},
            //     { en: "implants", ar: "implants" ,key: "implants"},
            //     { en: "patches", ar: "patches" ,key: "patches"},
            // ], 
              formulaParams:{
              url: "example/formulaParams",
              suggestions:[]
            }
        }
    },
     computed:{
      //////////////// search Diagnosis //////////////////
      //////////////// * Static Options //////////////////
         feedingOptions() {
        console.log(this.$store.getters['detailsPediatric/pediatricStaticData/feeding']['formula'])
             
        return this.$store.getters['detailsPediatric/pediatricStaticData/feeding']['formula']
      },
      mealOptions(){
        if(this.feedingOptions["formula_meal"]){

          return this.feedingOptions["formula_meal"]
        }
        else{
          return []
        }
      },
      periodUnitOptions(){
        if(this.feedingOptions["formula_period"]){
          return this.feedingOptions["formula_period"]
        }
        else{
          return []
        }
        
         },
         
      doseTypeOptions(){
        if(this.feedingOptions["dose"]){
          return this.feedingOptions["dose"]
        }
        else{
          return []
        }
         },
    },
    methods:{
      async search(event,params) {
        console.log(event.query)
        try {
          await this.$store.dispatch('detailsPediatric/pediatricSuggestions/search',{url:params.url,s:event.query})
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