const erp_company_type= "erp_v2/company_type/";
export default {
    data(){
        return{
            companyTypeParams:{
              url: "employees",
              suggestions:[]
          }
        }
    },
    computed:{
    },
    methods:{
        async searchCompanyType(event,params) {
          console.log("params",params)
          try {
            let customParams =  { pageNumber: 1, rows: 1000000, name_en:event.query }
            await this.$store.dispatch(`${erp_company_type}list`,customParams)
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

