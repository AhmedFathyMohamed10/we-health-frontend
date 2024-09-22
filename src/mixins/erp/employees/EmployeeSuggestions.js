export default {
    data(){
        return{
          params :{ pageNumber: 1, rows: 1000000, name: "" },
          employeeParams:{
              url: "employees",
              suggestions:[]
          }
        }
    },
    computed:{
    
  },
    methods:{
        async search(event,params) {
          try {
            let customParams =  { pageNumber: 1, rows: 1000000, name:event.query , mobile:""}
            await this.$store.dispatch('erp/hr/employees/list',customParams)
            .then((res) => {
              console.log(res.results)
                params.suggestions = [...res.results]
            });
          }
          catch (error) {
            console.error(error)
          }
        },
    }
}

