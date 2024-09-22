import { mapGetters } from 'vuex'
import {destructOptionsList} from "@/helpers/utilities"
export default {
    data(){
        return{
            // drugOptions: [
            //     { english: "Benoxinate + Fluorescein", arabic: "Benoxinate + Fluorescein" },
            //     { english: "Proparacaine + Fluorescein", arabic: "Proparacaine + Fluorescein" },
            //     { english: "Proparacaine", arabic: "Proparacaine" },
            //     { english: "other", arabic: "other" },
            //   ],
            //   testOptions: [
            //     { english: "Goldman / ATN", arabic: "Goldman / ATN" },
            //     { english: "Air Puff / NCT", arabic: "Air Puff / NCT" },
            //     { english: "Perkins", arabic: "Perkins" },
            //     { english: "Tactile", arabic: "Tactile" },
            //     { english: "other", arabic: "other" },
            //   ],
            //   viterousOptions: [
            //     { english: "Clear", arabic: "Clear" },
            //     { english: "Floaters", arabic: "Floaters" },
            //     { english: "PVD", arabic: "PVD" },
            //     { english: "Syneresis", arabic: "Syneresis" },
            //     { english: "other", arabic: "other" },
            //   ],
              // irisOptions: [
              //   { english: "Anisocoria", arabic: "Anisocoria" },
              //   { english: "Flat-Clear", arabic: "Flat-Clear" },
              //   { english: "Narrow Periph", arabic: "Narrow Periph" },
              //   { english: "other", arabic: "other" },
              // ],
            //   eyeColourOptions: [
            //     { english: "Blepharitis", arabic: "Blepharitis" },
            //     { english: "Chalazion", arabic: "Chalazion" },
            //     { english: "Districhiasis", arabic: "Districhiasis" },
            //     { english: "GPC", arabic: "GPC" },
            //     { english: "Hordeolum", arabic: "Hordeolum" },
            //     { english: "Meibomianitis", arabic: "Meibomianitis" },
            //     { english: "Trichiasis", arabic: "Trichiasis" },
            //     { english: "other", arabic: "other" },
            //   ],
              keys:[
                {
                    label:{english:"Lid/Lashes",arabic:"Lid/Lashes"},
                    placeholder:{english:"WNL",arabic:"WNL"},
                    objKey:'lid',
                    copyController:true,
                },
                {
                    label:{english:"Conjunctiva",arabic:"Conjunctiva"},
                    placeholder:{english:"WNL",arabic:"WNL"},
                    objKey:'conjunctiva',
                    copyController:true,
                },
                {
                    label:{english:"Cornea",arabic:"Cornea"},
                    placeholder:{english:"Clear",arabic:"Clear"},
                    objKey:'cornea',
                    copyController:false,
                },
                {
                    label:{english:"AC",arabic:"AC"},
                    placeholder:{english:"D&Q",arabic:"D&Q"},
                    objKey:'ac',
                    copyController:false,
                },
                {
                    label:{english:"Vitreous",arabic:"Vitreous"},
                    placeholder:{english:"Clear",arabic:"Clear"},
                    objKey:'viterous',
                    copyController:false,
                },
                {
                    label:{english:"Iris",arabic:"Iris"},
                    placeholder:{english:"Flat/Clear",arabic:"Flat/Clear"},
                    objKey:'iris',
                    copyController:false,
                },
                {
                    label:{english:"Eye Colour",arabic:"Eye Colour"},
                    placeholder:{english:"Status",arabic:"Status"},
                    objKey:'eyeColour',
                    copyController:false,
                },
                {
                    label:{english:"Lens",arabic:"Lens"},
                    placeholder:{english:"Clear",arabic:"Clear"},
                    objKey:'lens',
                    copyController:false,
                },
                {
                    label:{english:"Angle",arabic:"Angle"},
                    placeholder:{english:">4",arabic:">4"},
                    objKey:'angle',
                    copyController:false,
                },
                {
                    label:{english:"TBUT",arabic:"TBUT"},
                    placeholder:{english:"WNL",arabic:"WNL"},
                    objKey:'tbut',
                    copyController:false,
                },
                {
                    label:{english:"TVOL",arabic:"TVOL"},
                    placeholder:{english:"Status",arabic:"Status"},
                    objKey:'tvol',
                    copyController:false,
                },
            ],
            // dropdownOptions: [
            //   { english: "CB", arabic: "CB" },
            //   { english: "TM", arabic: "TM" },
            //   { english: "SS", arabic: "SS" },
            //   { english: "SL", arabic: "SL" },
            // ],
            gonioscopyOptions:[
              {english:"3 mirror",arabic:"3 mirror"},
              {english:"4 mirror",arabic:"4 mirror"},
              {english:"other",arabic:"other"},
            ],
        //     irisOptions:[
        //       {english:"Concave",arabic:"Concave"},
        //       {english:"Convex",arabic:"Convex"},
        //       {english:"Flat",arabic:"Flat"},
        //       {english:"other",arabic:"other"},
        //     ],
        //     customLensOptions:[
        //         {english:"3 mirror",arabic:"3 mirror"},
        //         {english:"4 mirror",arabic:"4 mirror"},
        //         {english:"other",arabic:"other"},
        //       ],
        }
    },
    computed:{
      ...mapGetters('detailsOphthalmic/ophthalmicStaticData',['anteriorExam']),
      
      ///////////////////////gonioscopy///////////////////////
      anteriorExamGonioscopyOptions(){
        return this.anteriorExam.gonioscopy;
      },
      // dropdownOptions(){
      //   if(this.anteriorExamGonioscopyOptions.od_north){
      //       return this.anteriorExamGonioscopyOptions.od_north;
      //       // return this.anteriorExamGonioscopyOptions.od;
      //   }
      //   else return [];
      // }, 
      dropdownOdNorthOptions(){
        if(this.anteriorExamGonioscopyOptions.od_north){
            return this.anteriorExamGonioscopyOptions.od_north;
            // return this.anteriorExamGonioscopyOptions.od;
        }
        else return [];
      }, 
      dropdownOsNorthOptions(){
        if(this.anteriorExamGonioscopyOptions.os_north){
            return this.anteriorExamGonioscopyOptions.os_north;
            // return this.anteriorExamGonioscopyOptions.od;
        }
        else return [];
      }, 
      // ***************************
      dropdownOdWestOptions(){
        if(this.anteriorExamGonioscopyOptions.od_west){
            return this.anteriorExamGonioscopyOptions.od_west;
            // return this.anteriorExamGonioscopyOptions.od;
        }
        else return [];
      }, 
      dropdownOsWestOptions(){
        if(this.anteriorExamGonioscopyOptions.os_west){
            return this.anteriorExamGonioscopyOptions.os_west;
            // return this.anteriorExamGonioscopyOptions.od;
        }
        else return [];
      }, 
      // *********************************
      dropdownOdSouthOptions(){
        if(this.anteriorExamGonioscopyOptions.od_south){
            return this.anteriorExamGonioscopyOptions.od_south;
            // return this.anteriorExamGonioscopyOptions.od;
        }
        else return [];
      }, 
      dropdownOsSouthOptions(){
        if(this.anteriorExamGonioscopyOptions.os_south){
            return this.anteriorExamGonioscopyOptions.os_south;
            // return this.anteriorExamGonioscopyOptions.od;
        }
        else return [];
      }, 
      // *********************************
      dropdownOdSouthOptions(){
        if(this.anteriorExamGonioscopyOptions.od_east){
            return this.anteriorExamGonioscopyOptions.od_east;
            // return this.anteriorExamGonioscopyOptions.od;
        }
        else return [];
      }, 
      dropdownOsSouthOptions(){
        if(this.anteriorExamGonioscopyOptions.od_south){
            return this.anteriorExamGonioscopyOptions.od_south;
            // return this.anteriorExamGonioscopyOptions.od;
        }
        else return [];
      }, 
      // *********************************
      dropdownOdEastOptions(){
        if(this.anteriorExamGonioscopyOptions.od_east){
            return this.anteriorExamGonioscopyOptions.od_east;
            // return this.anteriorExamGonioscopyOptions.od;
        }
        else return [];
      }, 
      dropdownOsEastOptions(){
        if(this.anteriorExamGonioscopyOptions.os_east){
            return this.anteriorExamGonioscopyOptions.os_east;
            // return this.anteriorExamGonioscopyOptions.od;
        }
        else return [];
      }, 
      // **********************************************************
      // irisOptions(){
      //   if( this.anteriorExamGonioscopyOptions.iris_od){
      //       return this.anteriorExamGonioscopyOptions.iris_od;
      //       // return this.anteriorExamGonioscopyOptions.iris;
      //   }
      //   else return [];
      // }, 
      irisOdOptions(){
        if( this.anteriorExamGonioscopyOptions.gonioscopy_od_iris){
            return this.anteriorExamGonioscopyOptions.gonioscopy_od_iris;
            // return this.anteriorExamGonioscopyOptions.iris;
        }
        else return [];
      }, 
      irisOsOptions(){
        if( this.anteriorExamGonioscopyOptions.gonioscopy_os_iris){
            return this.anteriorExamGonioscopyOptions.gonioscopy_os_iris;
            // return this.anteriorExamGonioscopyOptions.iris;
        }
        else return [];
      }, 
      // ***********************
      // customLensOptions(){
      //   if(this.anteriorExamGonioscopyOptions.lens_od){
      //       return this.anteriorExamGonioscopyOptions.lens_od;
      //       // return this.anteriorExamGonioscopyOptions.lens;
      //   }
      //   else return [];    
      // }, 
      customLensOdOptions(){
        if(this.anteriorExamGonioscopyOptions.od_lens){
            return this.anteriorExamGonioscopyOptions.od_lens;
            // return this.anteriorExamGonioscopyOptions.lens;
        }
        else return [];    
      }, 
      customLensOsOptions(){
        if(this.anteriorExamGonioscopyOptions.os_lens){
            return this.anteriorExamGonioscopyOptions.os_lens;
            // return this.anteriorExamGonioscopyOptions.lens;
        }
        else return [];    
      }, 
   ///////////////////////////////tonometry/////////////////////////
    tonometryOptions(){
        return this.anteriorExam.tonometry;
    },
    testOptions(){
    if(this.tonometryOptions.tonometry_test){
        return this.tonometryOptions.tonometry_test;
    }
    else return [];
    }, 
    drugOptions(){
    if(this.tonometryOptions.tonometry_drug){
        return this.tonometryOptions.tonometry_drug;
    }
    else return [];
        
    }, 
      ///////////////////////////////biomicroscopy/////////////////////////
      biomicroscopyOptions(){
        return this.anteriorExam.biomicroscopy;
      },
      viterousOdOptions(){
        if(this.biomicroscopyOptions.biomicroscopy_od_viterous){
            return this.biomicroscopyOptions.biomicroscopy_od_viterous;
        }
        else return []; 
      }, 
      viterousOsOptions(){
        if(this.biomicroscopyOptions.biomicroscopy_os_viterous){
            return this.biomicroscopyOptions.biomicroscopy_os_viterous;
        }
        else return []; 
      }, 
   
      eyeColourOdOptions(){
        if( this.biomicroscopyOptions.od_eyeColour){
            return this.biomicroscopyOptions.od_eyeColour;
        }
        else return [];
        
      }, 
      eyeColourOsOptions(){
        if( this.biomicroscopyOptions.os_eyeColour){
            return this.biomicroscopyOptions.os_eyeColour;
        }
        else return [];
        
      }, 
      irisOdOptions(){
        if(this.biomicroscopyOptions.biomicroscopy_od_iris){
            return this.biomicroscopyOptions.biomicroscopy_od_iris;
        }
        else return [];
         
      }, 
      irisOsOptions(){
        if(this.biomicroscopyOptions.biomicroscopy_os_iris){
            return this.biomicroscopyOptions.biomicroscopy_os_iris;
        }
        else return [];
         
      }, 
   
    }
}
