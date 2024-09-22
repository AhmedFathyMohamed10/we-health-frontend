import { mapGetters } from 'vuex'
export default {
    data(){
        return{

            selectSpecialityOptions: [
                { id: 1, value: "Ophthalmic" },
                { id: 2, value: "Dental" },
                { id: 3, value: "Dentistry" },
              ],
              locationAreaOptions: [
                { id: 1, value: "All Areas" },
                { id: 2, value: "Cairo" },
                { id: 3, value: "Qalyubiya" },
              ],
              insuranceOptions: [
                { id: 1, value: "All Insurance" },
                { id: 2, value: "BUBA" },
                { id: 3, value: "AXA" },
              ],
              typeOptions: [
                { id: 1, value: " Insurance" },
                { id: 2, value: "Hospital" },
                { id: 3, value: "AXA" },
              ],

              drugNameParams: {
                url: "example/drugName",
                suggestions: [],
              },


        }


    },
    computed:{
     ...mapGetters('allSearchClinics/clinicsStaticData',{
      // reasonForVisitOptions(){
      //   return this.chiefComplaintList.reasonForVisit;
      //  },
       // *****************push  new Element**************
       // reasons(){
       //     if(this.reasonForVisitOptions.reason){
       //         const newItem = { id: 10000, value: 'other' }
       //         const  list = this.reasonForVisitOptions.reason;
       //         list.push(newItem);
       //         return list;
       //     }
       //     else return [];
       // },
      //  reasons(){
      //      if(this.reasonForVisitOptions.reason){
      //          return  this.reasonForVisitOptions.reason;  
      //      }
      //      else return [];
      //  },


     })
    },
    methods:{
        async search(event, params) {
          console.log(event.query);
          try {
            await this.$store
              .dispatch("allSearchClinics/clinicsSuggestions/search", {
                url: params.url,
                s: event.query,
              })
              .then((res) => {
                params.suggestions = [...res];
              });
          } catch (error) {
            console.error(error);
          }
        },

    }
}