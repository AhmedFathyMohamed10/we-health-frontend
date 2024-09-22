

import {destructOptionsList} from "@/helpers/utilities"

export default {
    data(){
        return{
        }
    },
    computed:{
      //////////////// * Static Options //////////////////
      physicalExaminationOptions () {
        return this.$store.getters['detailsPhysiotherapy/physiotherapyStaticData/entranceTestPhysicalExamination']
      },

      skinOptions(){
        if(this.physicalExaminationOptions["disorder"]){
          return this.physicalExaminationOptions["disorder"]
        }
        else return [];
      },
      mmOptions(){
        if(this.physicalExaminationOptions["mmOptions"]){
          return this.physicalExaminationOptions["mmOptions"]
        }
        else return [];
      },

      rlOptions(){
        if(this.physicalExaminationOptions["rlOptions"]){
          return this.physicalExaminationOptions["rlOptions"]
        }
        else return [];
      },

      sensationsOptions(){
        if(this.physicalExaminationOptions["sensitivity"]){
          return this.physicalExaminationOptions["sensitivity"]
        }
        else return [];
      },

      pnnOptions(){
        if(this.physicalExaminationOptions["pnnOptions"]){
          return this.physicalExaminationOptions["pnnOptions"]
        }
        else return [];
      },

      reflexesOptions(){
        if(this.physicalExaminationOptions["reflex"]){
          return this.physicalExaminationOptions["reflex"]
        }
        else return [];
      },
  },
    methods:{

    }
}


