import { mapGetters } from 'vuex'
import {destructOptionsList} from "@/helpers/utilities"
export default {
    data(){
        return{
            // typeOptions:[
            //     {english:"subjective refraction",arabic:"subjective refraction"},
            //     {english:"maximum VA refraction",arabic:"maximum VA refraction"},
            //     {english:"Compensated Refraction",arabic:"Compensated Refraction"},
            //     {english:"Duochrome",arabic:"Duochrome"},
            //     {english:"retinoscopy",arabic:"retinoscopy"},
            //     {english:"cyclopegia",arabic:"cyclopegia"},
            //     {english:"final Rx",arabic:"final Rx"},
            //     {english:"other",arabic:"other"},
            //   ],
         
        

              // pursuitsOptions:[
              //   {english:"SMOOTH AND PRECISE",arabic:"SMOOTH AND PRECISE"},
              //   {english:"other",arabic:"other"},
              // ],
              // saccadesOptions:[
              //   {english:"SMOOTH AND PRECISE",arabic:"SMOOTH AND PRECISE"},
              //   {english:"other",arabic:"other"},
              //   {english:"SMOOTH AND PRECISE",arabic:"SMOOTH AND PRECISE"},
              //   {english:"other",arabic:"other"},
              // ],
              // lensTypeOptions:[
              //   {english:"Anti Fatigue",arabic:"Anti Fatigue"},
              //   {english:"Bi",arabic:"Bi"},
              //   {english:"Focal",arabic:"Focal"},
              //   {english:"Computer",arabic:"Computer"},
              //   {english:"Progressive",arabic:"Progressive"},
              //   {english:"Single Vision",arabic:"Single Vision"},
              //   {english:"Reading",arabic:"Reading"},
              //   {english:"Sunglasses",arabic:"Sunglasses"},
              //   {english:"other",arabic:"other"},
              // ],
        }
    },
    computed:{
      ...mapGetters('detailsOphthalmic/ophthalmicStaticData',['visionTest']),
      ///////////////////////lensometry////////////////////////////
      lensometryOptions(){
        return this.visionTest.lensometry;
      },
      lensTypeOptions(){
        if(this.lensometryOptions.lensometry_lensType){
            return this.lensometryOptions.lensometry_lensType;
        }
        else return [];
         
      }, 

      ////////////////////////////////////binoculor//////////////////////////////
      binocularOptions(){
        return this.visionTest.binocular;
    },
    
      pursuitsOdOptions(){
        if(this.binocularOptions.pursuits_od){
            return this.binocularOptions.pursuits_od;
        }
        else return []; 
      }, 
      pursuitsOsOptions(){
        if(this.binocularOptions.pursuits_os){
            return this.binocularOptions.pursuits_os;
        }
        else return []; 
      }, 
      saccadesOdOptions(){
        if(this.binocularOptions.saccades_od){
            return this.binocularOptions.saccades_od;
        }
        else return [];
        
      }, 
      saccadesOsOptions(){
        if(this.binocularOptions.saccades_os){
            return this.binocularOptions.saccades_os;
        }
        else return [];
        
      }, 
      // vergenceOptions(){
      //   if(this.binocularOptions.vergence){
      //       return this.binocularOptions.vergence;
      //   }
      //   else return [];
        
      // }, 
      /////////////////////////////////refraction/////////////////////////////////
     refractionOptions(){
        return this.visionTest.refraction;
    },
      typeOptions(){
        if(this.refractionOptions.type){
            return this.refractionOptions.type;
        }
        else return [];
      
    },
    }
}