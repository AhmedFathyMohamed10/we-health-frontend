import { mapGetters } from "vuex";
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
      ...mapGetters("erp_v2/hr/shiftRecord", {
        getEmployeeOfChoose: "getEmployeeOfChoose",
      }),
      employee_of_choose: {
        get() {
          return this.getEmployeeOfChoose;
        },
        set(value) {
          this.setEmployeeOfChoose(value);
        },
      },
    },
    // arr :this.employee_of_choose}
    methods:{
        async searchEmployee(event,params) {
          try {
            await this.$store.dispatch(`erp_v2/hr/employeeSearch/search`,{name:event.query})
            .then((res) => {
              
              params.suggestions = [...res.data]
            });
          }
          catch (error) {
            console.error(error)
          }
        },
    }
}

