const erp_employees= "erp_v2/hr/employees/";
export default {
    data(){
        return{
          employeeParams:{
              url: "employees",
              suggestions:[]
          }
        }
    },
    computed:{
    },
    methods:{
        async searchEmployee(event,params) {
          console.log("params",params)
          try {
            let customParams =  { pageNumber: 1, rows: 1000000, name:event.query , phone_number:""}
            await this.$store.dispatch(`${erp_employees}list`,customParams)
            .then((res) => {
                params.suggestions = [...res.results]
            });
          }
          catch (error) {
            console.error(error)
          }
        },
    }
}

