export default {
    data(){
        return{
            // namesOptions: [
            //     { english: "New York", arabic: "New York"},
            //     { english: "Rome",arabic: "Rome"},
            //     { english: "London",arabic: "London" },
            //     { english: "Istanbul",arabic: "Istanbul" },
            //     { english: "Paris",arabic: "Paris"},
            // ],
            // placesOptions: [
            //     { english: "New York", arabic: "New York"},
            //     { english: "Rome",arabic: "Rome"},
            //     { english: "London",arabic: "London" },
            //     { english: "Istanbul",arabic: "Istanbul" },
            //     { english: "Paris",arabic: "Paris"},
            // ],



            nameParams:{
                url: "example/treatmentProgram",
                suggestions:[]
            },
            placeParams:{
                url: "example/recommendedCenter",
                suggestions:[]
            },
        }
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