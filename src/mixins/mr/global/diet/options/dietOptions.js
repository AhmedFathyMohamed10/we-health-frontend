import { mapGetters } from 'vuex'
import {destructOptionsList} from "@/helpers/utilities"
export default {
    data(){
        return{
            // dietContentsOptions: [
            //     { english: "New York", arabic: "New York"},
            //     { english: "Rome",arabic: "Rome"},
            //     { english: "London",arabic: "London" },
            //     { english: "Istanbul",arabic: "Istanbul" },
            //     { english: "Paris",arabic: "Paris"},
            // ],
            // mealOptions: [
            //     { en: "Breakfast", ar: "Breakfast",key: "Breakfast"},
            //     { en: "Lunch",ar: "Lunch",key: "Lunch"},
            //     { en: "Dinner",ar: "Dinner" ,key: "Dinner"},
            // ],
            // periodUnitOptions: [
            //     { en: "days", ar: "days" ,key: "days"},
            //     { en: "weeks", ar: "weeks" ,key: "weeks"},
            //     { en: "months", ar: "months" ,key: "months"},
            //     { en: "years", ar: "years" ,key: "years"},
            // ],     
              
              
            dietContentParams:{
              url: "example/dietContent",
              suggestions:[]
            },
        }
    },
    computed:{
        //////////////// * Static Options //////////////////
     
 
        // dietOptions () {
        //   return this.$store.getters[this.dynamicKey +'/diet']["diet"]
        // },
       
        mealOptions(){
          if(this.dietOptions["meal"]){
            return this.dietOptions["meal"]
          }
          else return [];
        },
        periodUnitOptions(){
          if(this.dietOptions["period"]){
            return this.dietOptions["period"]
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
    },
  

}