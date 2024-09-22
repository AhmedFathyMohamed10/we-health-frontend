export default {
    data(){
        return{
            // recommendationsOptions: [
            //     { english: "New York", arabic: "New York"},
            //     { english: "Rome",arabic: "Rome"},
            //     { english: "London",arabic: "London" },
            //     { english: "Istanbul",arabic: "Istanbul" },
            //     { english: "Paris",arabic: "Paris"},
            // ],


            recommendationParams:{
                url: "example/recommendation",
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