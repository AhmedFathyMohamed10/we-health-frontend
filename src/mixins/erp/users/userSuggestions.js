export default {
    data(){
        return{
            userParams:{
              url: "erp/client-and-provider/get-user",
              suggestions:[]
            },
        }
    },
    methods:{
        async search(event,params) {
          try {
            await this.$store.dispatch('erp/users/search',{url:params.url,name:event.query})
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
