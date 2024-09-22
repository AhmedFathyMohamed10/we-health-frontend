import { mapGetters } from 'vuex'
import {destructOptionsList} from "@/helpers/utilities"
export default {
  data() {
    return {
      // lensTypeOptions:[
      //   {english:"Reading",arabic:"Reading"},
      //   {english:"Distance",arabic:"Distance"},
      //   {english:"Progressive",arabic:"Progressive"},
      //   {english:"Bifocal",arabic:"Bifocal"},
      //   {english:"work/school work",arabic:"work/school work"},
      //   {english:"for personal issue",arabic:"for personal issue"},
      //   {english:"caller",arabic:"caller"},
      //   {english:"blurred vision",arabic:"blurred vision"},
      //   {english:"full time",arabic:"full time"},
      //   {english:"reading with CL",arabic:"reading with CL"},
      //   {english:"Astigmatism",arabic:"Astigmatism"},
      //   {english:"other",arabic:"other"},
      // ]
    };
  },
  computed:{
    ...mapGetters('detailsOphthalmic/ophthalmicStaticData',['finalRx']),
    /////////////////////////medicalRx//////////////////////////
    drRecommendOptions(){
      return this.finalRx.drRecommend;
    },
    lensTypeOptions(){
      if(this.drRecommendOptions.recommendation_lensType){
        return this.drRecommendOptions.recommendation_lensType;
    }
    else return [];
       
    },
  }
};
