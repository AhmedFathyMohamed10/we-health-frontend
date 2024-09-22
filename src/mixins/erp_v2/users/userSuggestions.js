export default {
    data(){
        return{
            userParams:{
              url: "erp/client-supplier/get-user",
              suggestions:[]
            },
        }
    },
    methods:{
        async searchUser(event,params) {
          console.log("user prams ")
          try {
            await this.$store.dispatch('erp_v2/users/search',{url:params.url,name:event.query})
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
