import {destructOptionsList} from "@/helpers/utilities"

export default {
    data(){
      return{
        physicianNamesPamams:{
              url: "example/treatmentProgram",
              suggestions:[]
          },
          treatmentProgramParams:{
            url: "example/treatmentProgram",
            suggestions:[]
        },
          chiefComplaintParams:{
              url: "example/recommendedCenter",
              suggestions:[]
          },
      }
    },
    computed:{
      //////////////// search Diagnosis //////////////////
      //////////////// * Static Options //////////////////
      chiefComplaintOptions () {
        console.log(this.$store.getters['detailsPhysiotherapy/physiotherapyStaticData/chiefComplaint']["chiefComplaint"])
        return this.$store.getters['detailsPhysiotherapy/physiotherapyStaticData/chiefComplaint']["chiefComplaint"]
      },
      periodUnitOptions(){
        if(this.chiefComplaintOptions["period"]){
          return this.chiefComplaintOptions["period"]
        }
        else return [];
      },
      // typeOptions(){
      //   if(this.diagnosisOptions["type"]){
      //     return this.diagnosisOptions["type"]
      //   }
      //   else return [];
      // },
    },
    methods:{
      async search(event,params) {
        try {
          await this.$store.dispatch('detailsPhysiotherapy/physiotherapySuggestions/search',{url:params.url,s:event.query})
          .then((res) => {
              params.suggestions = [...res]
          });
        }
        catch (error) {
          console.error(error)
        }
      },
  }
}









