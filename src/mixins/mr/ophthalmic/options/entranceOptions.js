import { mapGetters } from 'vuex'
import {destructOptionsList} from "@/helpers/utilities"
export default {
    data(){
        return{
            // shapeOptions:[
            //     {english:"Irregular",arabic:"Irregular"},
            //     {english:"Oval",arabic:"Oval"},
            //     {english:"Round",arabic:"Round"},
            //     {english:"other",arabic:"other"},
            // ],
            // accomOptions:[                
            //     {english:"Non reactive",arabic:"Non reactive"},
            //     {english:"Reactive",arabic:"Reactive"},
            //     {english:"other",arabic:"other"},
            // ],
            // diagnoseOptions:[                
            //     {english:"Adie's tonic pupil syndrome",arabic:"Adie's tonic pupil syndrome"},
            //     {english:"Anisocoria",arabic:"Anisocoria"},
            //     {english:"Argyll Robertson",arabic:"Argyll Robertson"},
            //     {english:"Horner's syndrome",arabic:"Horner's syndrome"},
            //     {english:"PERRLA",arabic:"PERRLA"},
            //     {english:"PERRLA (-)RAPD",arabic:"PERRLA (-)RAPD"},
            //     {english:"Pharmacologically dilated pupil",arabic:"Pharmacologically dilated pupil"},
            //     {english:"RAPD-Marcus Gunn",arabic:"RAPD-Marcus Gunn"},
            //     {english:"other",arabic:"other"},
            // ],
            // dominantEyeOptions:[
            //     {english:"O.S",arabic:"O.S"},
            //     {english:"O.D",arabic:"O.D"},
            //     {english:"O.U",arabic:"O.U"},
            // ],
            // methodOptions:[
            //     {english:"Alignment",arabic:"Alignment"},
            //     {english:"Lens Fogging",arabic:"Lens Fogging"},
            //     {english:"other",arabic:"other"},
            // ],
            // eom
            // extraOcularMotilitiesOptions:[
            //     {english:"Diplopia",arabic:"Diplopia"},
            //     {english:"Lags behind",arabic:"Lags behind"},
            //     {english:"Overshoots",arabic:"Overshoots"},
            //     {english:"Restriction",arabic:"Restriction"},
            //     {english:"Smooth and full",arabic:"Smooth and full"},
            //     {english:"other",arabic:"other"},
            // ],
            // brucknerOptions:[
            //     {english:"Deep Red Reflex",arabic:"Deep Red Reflex"},
            //     {english:"Light Red Reflex",arabic:"Light Red Reflex"},
            //     {english:"other",arabic:"other"},
            // ],
            // hirschbergOptions:[
            //     {english:"Ortho",arabic:"Ortho"},
            //     {english:"Esotropia",arabic:"Esotropia"},
            //     {english:"Exotropia",arabic:"Exotropia"},
            //     {english:"Hypertropia",arabic:"Hypertropia"},
            //     {english:"Hypotropia",arabic:"Hypotropia"},
            //     {english:"other",arabic:"other"},
            // ],
            //visualfield
            // confrontationOptions:[
            //     {english:"Full",arabic:"Full"},
            //     {english:"Diminished",arabic:"Diminished"},
            //     {english:"NLP",arabic:"NLP"},
            //     {english:"other",arabic:"other"},
            // ],
            // autoPerimetryOptions:[
            //     {english:"Full",arabic: "Full"},
            //     {english:"Nasal step",arabic: "Nasal step"},
            //     {english:"temporal wedge",arabic: "temporal wedge"},
            //     {english:"superior arcuate defect",arabic: "superior arcuate defect"},
            //     {english:"inferior arcuate defect",arabic: "inferior arcuate defect"},
            //     {english:"tunnel vision",arabic: "tunnel vision"},
            //     {english:"enlarged blind spot",arabic: "enlarged blind spot"},
            //     {english:"homonymous hemianopia",arabic: "homonymous hemianopia"},
            //     {english:"bitemporal hemianopia",arabic: "bitemporal hemianopia"},
            //     {english:"central scotoma",arabic: "central scotoma"},
            //     {english:"centrocaecal scotoma",arabic: "centrocaecal scotoma"},
            //     {english:"other",arabic:"other"},
            // ],
            // instrumentOptions:[
            //     {english:"Humphrey",arabic:"Humphrey"},
            //     {english:"MRF",arabic:"MRF"},
            //     {english:"Medmont",arabic:"Medmont"},
            //     {english:"Oculus",arabic:"Oculus"},
            //     {english:"Matrix",arabic:"Matrix"},
            //     {english:"other",arabic:"other"},
            // ],
            // scaleOptions:[
            //     {english:"1/1000",arabic: "1/1000"},
            //     {english:"3/1000",arabic: "3/1000"},
            //     {english:"5/1000",arabic: "5/1000"},
            //     {english:"10/1000",arabic: "10/1000"},
            //     {english:"other",arabic: "other"},
            // ],
            
            // colorVisionOptions:[
            //     {english:"Normal",arabic:"Normal"}, 
            //     {english:"Deuteranomaly",arabic:"Deuteranomaly"}, 
            //     {english:"Deuteranopia",arabic:"Deuteranopia"}, 
            //     {english:"Protanomaly",arabic:"Protanomaly"}, 
            //     {english:"Protanopia",arabic:"Protanopia"}, 
            //     {english:"Tritanopia",arabic:"Tritanopia"}, 
            //     {english:"monochromacy",arabic:"monochromacy"}, 
            //     {english:"other",arabic:"other"}, 
            // ],
            // colorVisionTestOptions:[
            //     {english:"D-15",arabic:"D-15"}, 
            //     {english:"Ishihara",arabic:"Ishihara"}, 
            //     {english:"Ishihara (Path)",arabic:"Ishihara (Path)"}, 
            //     {english:"other",arabic:"other"}, 
            // ],
            // stereoFlyOptions:[
            //     {english:"Normal Stereopsis",arabic:"Normal Stereopsis"},
            //     {english:"top of upper wings",arabic:"top of upper wings"},
            //     {english:"bottom of lower wings",arabic:"bottom of lower wings"},
            //     {english:"tip of abdomen",arabic:"tip of abdomen"},
            //     {english:"none seen",arabic:"none seen"},
            //     {english:"other",arabic:"other"},
            // ],
            // brewsterOptions:[
            //     {english:"1/9",arabic: "1/9"},
            //     {english:"2/9",arabic: "2/9"},
            //     {english:"3/9",arabic: "3/9"},
            //     {english:"4/9",arabic: "4/9"},
            //     {english:"5/9",arabic: "5/9"},
            //     {english:"6/9",arabic: "6/9"},
            //     {english:"7/9",arabic: "7/9"},
            //     {english:"8/9",arabic: "8/9"},
            //     {english:"9/9",arabic: "9/9"},
            //     {english:"other",arabic: "other"},
            // ],            
            // circlesOptions:[
            //     {english:"1/9",arabic: "1/9"},
            //     {english:"2/9",arabic: "2/9"},
            //     {english:"3/9",arabic: "3/9"},
            //     {english:"4/9",arabic: "4/9"},
            //     {english:"5/9",arabic: "5/9"},
            //     {english:"6/9",arabic: "6/9"},
            //     {english:"7/9",arabic: "7/9"},
            //     {english:"8/9",arabic: "8/9"},
            //     {english:"9/9",arabic: "9/9"},
            //     {english:"other",arabic: "other"},
            // ],            
            // formsOptions:[
            //     {english:"1/8",arabic: "1/8"},
            //     {english:"2/8",arabic: "2/8"},
            //     {english:"3/8",arabic: "3/8"},
            //     {english:"4/8",arabic: "4/8"},
            //     {english:"5/8",arabic: "5/8"},
            //     {english:"6/8",arabic: "6/8"},
            //     {english:"7/8",arabic: "7/8"},
            //     {english:"8/8",arabic: "8/8"},
            //     {english:"9/8",arabic: "9/8"},
            //     {english:"other",arabic: "other"},
            // ],            
            // animalsOptions:[
            //     {english:"1/3",arabic: "1/3"},
            //     {english:"2/3",arabic: "2/3"},
            //     {english:"3/3",arabic: "3/3"},
            //     {english:"other",arabic: "other"},
            // ],            
        }
    },
    computed:{
        ...mapGetters('detailsOphthalmic/ophthalmicStaticData',['entranceTesting']),
        ///////////////////////dominance///////////////////////
        dominanceOptions(){
            return this.entranceTesting.dominance;
          },
        dominantEyeOptions(){
            if(this.dominanceOptions.dominantEye){
                return this.dominanceOptions.dominantEye;
            }
                else return [];
            
        },
        methodOptions(){
            if(this.dominanceOptions.method){
                return this.dominanceOptions.method;
            }
                else return [];
           
        },
        /////////////////////////colourVision////////////////////////////////
        colourVisionOptions(){
            return this.entranceTesting.colorVision;
          },
        colorVisionTestOptions(){
            if(this.colourVisionOptions.colourVision_test){
                return this.colourVisionOptions.colourVision_test;
            }
                else return [];
           
        },
        colorVisionOdOptions(){
            if(this.colourVisionOptions.od){
                return this.colourVisionOptions.od;
            }
                else return [];
           
        },
        colorVisionOsOptions(){
            if(this.colourVisionOptions.os){
                return this.colourVisionOptions.os;
            }
                else return [];
           
        },
        // ***********************
        colorVisionOuOptions(){
            if(this.colourVisionOptions.ou){
                return this.colourVisionOptions.ou;
            }
                else return [];
           
        },
        /////////////////////////////////stereopsis///////////////////////////////
        stereopsisOptions(){
            return this.entranceTesting.stereopsis;
          },
        stereoFlyOptions(){
            if(this.stereopsisOptions.stereoFly){
                return this.stereopsisOptions.stereoFly;
            }
                else return [];
          
        },
        brewsterOptions(){
            if(this.stereopsisOptions.brewster){
                return this.stereopsisOptions.brewster;
            }
                else return [];
       
        },
        circlesOptions(){
            if(this.stereopsisOptions.circles){
                return this.stereopsisOptions.circles;
            }
                else return [];
        
        },
        formsOptions(){
            if(this.stereopsisOptions.forms){
                return this.stereopsisOptions.forms;
            }
                else return [];
            
        },
        animalsOptions(){
            if(this.stereopsisOptions.animals){
                return this.stereopsisOptions.animals;
            }
                else return [];
            
        },
        /////////////////////////////////visualField////////////////////////////////////
        visualFieldOptions(){
            return this.entranceTesting.visualField;
          },
        // confrontationOptions(){
        //     if(this.visualFieldOptions.confrontation_od){
        //         return this.visualFieldOptions.confrontation_od;
        //     }
        //         else return [];
          
        // },
        confrontationOdOptions(){
            if(this.visualFieldOptions.confrontation_od){
                return this.visualFieldOptions.confrontation_od;
            }
                else return [];
          
        },
       
        confrontationOsOptions(){
            if(this.visualFieldOptions.confrontation_os){
                return this.visualFieldOptions.confrontation_os;
            }
                else return [];
          
        },
        autoPerimetryOdOptions(){
            if(this.visualFieldOptions.autoPerimetry_od){
                return this.visualFieldOptions.autoPerimetry_od;
            }
                else return [];
            
        },
        autoPerimetryOsOptions(){
            if(this.visualFieldOptions.autoPerimetry_os){
                return this.visualFieldOptions.autoPerimetry_os;
            }
                else return [];
            
        },
        instrumentOptions(){
            if(this.visualFieldOptions.instrument){
                return this.visualFieldOptions.instrument;
            }
                else return [];
          
        },
        scaleOptions(){
            if(this.visualFieldOptions.scale){
                return this.visualFieldOptions.scale;
            }
                else return [];
      
        },
        /////////////////////////////////////coverTest///////////////////////////////////////
        coverTestOptions(){
            return this.entranceTesting.coverTest;
          },
        hirschbergOdOptions(){
            if(this.coverTestOptions.hirschbergTest_od){
                return this.coverTestOptions.hirschbergTest_od;
            }
                else return [];
           
        },
        hirschbergOsOptions(){
            if(this.coverTestOptions.hirschbergTest_os){
                return this.coverTestOptions.hirschbergTest_os;
            }
                else return [];
           
        },
        brucknerOdOptions(){
            if(this.coverTestOptions.brucknerTest_od){
                return this.coverTestOptions.brucknerTest_od;
            }
                else return [];
           
           
        },
        brucknerOsOptions(){
            if(this.coverTestOptions.brucknerTest_os){
                return this.coverTestOptions.brucknerTest_os;
            }
                else return [];
           
           
        },
        /////////////////////////////////eom//////////////////////////////////////////////
        eomOptions(){
            return this.entranceTesting.eom;
          },
        extraOcularMotilitiesOdOptions(){
            if(this.eomOptions.extraOcularMotilities_od){
                return this.eomOptions.extraOcularMotilities_od;
            }
                else return [];
              
           
        },
        extraOcularMotilitiesOsOptions(){
            if(this.eomOptions.extraOcularMotilities_os){
                return this.eomOptions.extraOcularMotilities_os;
            }
                else return [];
              
           
        },
        ///////////////////////////////pupils///////////////////////////////////////////////
        pupilsOptions(){
            return this.entranceTesting.Pupils;
          },
        shapeOptions(){
            if(this.pupilsOptions.od_shape){
                return this.pupilsOptions.od_shape;
            }
                else return [];
              
        },
        accomOptions(){
            if(this.pupilsOptions.od_accom){
                return this.pupilsOptions.od_accom;
            }
                else return []; 
        },
        diagnoseOptions(){
            if(this.pupilsOptions.os_diagnose){
                return this.pupilsOptions.os_diagnose;
            }
                else return [];
        },

    }
}