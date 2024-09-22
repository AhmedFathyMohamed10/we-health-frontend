import { destructOptionsList } from "@/helpers/utilities";

export default {
  data() {
    return {};
  },
  computed: {
    //////////////// search Diagnosis //////////////////
    //////////////// * Static Options //////////////////
          //////////////// * Static Options //////////////////
          functionalEvaluationOptions () {
            return this.$store.getters['detailsPhysiotherapy/physiotherapyStaticData/entranceTestFunctionalEvaluation']
          },
          rateOptions(){
            if(this.functionalEvaluationOptions["rateOptions"]){
              return this.functionalEvaluationOptions["rateOptions"]
            }
            else return [];
          },
    
         
    



  },
  methods: {

  },
};
