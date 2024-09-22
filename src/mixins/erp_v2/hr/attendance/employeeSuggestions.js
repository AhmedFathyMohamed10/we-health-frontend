export default {
    data(){
        return{
          employeeParams:{
              url: "employees",
              suggestions:[]
          }
        }
    },
    methods:{
        async searchEmployee(event,params) {
          try {
            await this.$store.dispatch(`erp_v2/hr/attendanceEmployeeSearch/search`,{employee_or_department:event.query})
            .then((res) => {
              console.log("res       .",res)
              params.suggestions = [...res.data]
            });
          }
          catch (error) {
            console.error(error)
          }
        },
    }
}

