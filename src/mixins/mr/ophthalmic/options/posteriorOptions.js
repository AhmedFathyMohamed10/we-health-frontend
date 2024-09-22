import { mapGetters } from 'vuex'
import {destructOptionsList} from "@/helpers/utilities"
export default {
    data() {
      return {
        // drugOptions:[
        //   {english:"0.5% Alcaine + 0.5% Mydriacyl",arabic:"0.5% Alcaine + 0.5% Mydriacyl"},
        //   {english:"0.5% Alcaine + 1.0% Mydricyl",arabic:"0.5% Alcaine + 1.0% Mydricyl"},
        //   {english:"0.5% Mydriacyl",arabic:"0.5% Mydriacyl"},
        //   {english:"1.0% Mydriacyl",arabic:"1.0% Mydriacyl"},
        //   {english:"0.5% Cyclopentolate",arabic:"0.5% Cyclopentolate"},
        //   {english:"1.0% Cyclopentolate",arabic:"1.0% Cyclopentolate"},
        //   {english:"2.5% Phenylephrine",arabic:"2.5% Phenylephrine"},
        //   {english:"other",arabic:"other"},
        // ],
        // eyeOptions: [
        //     { english: "OS", arabic: "OS" },
        //     { english: "OD", arabic: "OD" },
        //     { english: "OU", arabic: "OU" },
        //   ],
          // lensOptions2:[["90D","78D","20D","SUPER 66"],["DO","MIO","BIO"]],
          // maculaOptions:[
          //   {english:"No maculopathy",arabic:"No maculopathy"},
          //   {english:"diabetic maculopathy",arabic:"diabetic maculopathy"},
          //   {english:"microaneurysms",arabic:"microaneurysms"},
          //   {english:"dot & blot haemorrhages",arabic:"dot & blot haemorrhages"},
          //   {english:"hard exudates",arabic:"hard exudates"},
          //   {english:"Soft exudates/CWS",arabic:"Soft exudates/CWS"},
          //   {english:"DME",arabic:"DME"},
          //   {english:"RPE Changes",arabic:"RPE Changes"},
          //   {english:"Macular hole",arabic:"Macular hole"},
          //   {english:"CME",arabic:"CME"},
          //   {english:"CSME",arabic:"CSME"},
          //   {english:"other",arabic:"other"}
          // ],
          // ophthalmoscopyOptions:[
          //   {english:"Direct",arabic:"Direct"},
          //   {english:"Indirect",arabic:"Direct"},
          //   {english:"other",arabic:"other"},
          // ],
          opticOptions:[["Pink","Pale","Drusen"],["normal size","small","large"],["isn't","no isn't"]],
          // peripheryOptions:[
          //   {english:"WNL",arabic:"WNL"},
          //   {english:"Choroidal Nevus",arabic:"Choroidal Nevus"},
          //   {english:"Paving stone degeneration",arabic:"Paving stone degeneration"},
          //   {english:"WWP",arabic:"WWP"},
          //   {english:"Lattice degeneration",arabic:"Lattice degeneration"},
          //   {english:"Retinal hole",arabic:"Retinal hole"},
          //   {english:"retinal tear",arabic:"retinal tear"},
          //   {english:"retinal detachment",arabic:"retinal detachment"},
          //   {english:"other",arabic:"other"}
          // ],
          // poleOptions:[
          //   {english:"clear",arabic:"clear"},
          //   {english:"No Breaks",arabic:"No Breaks"},
          //   {english:"Tears noted",arabic:"Tears noted"},
          //   {english:"other",arabic:"other"}
          // ],
          // pupillaryOptions:[
          //   {english:"dull",arabic:"dull"},
          //   {english:"clear",arabic:"clear"},
          //   {english:"none",arabic:"none"},
          //   {english:"other",arabic:"other"},
          // ],
          ratioOptions: [
            [
              "0.10 H","0.15 H","0.20 H","0.25 H","0.30 H","0.35 H","0.40 H","0.45 H","0.50 H","0.55 H","0.60 H","0.65 H","0.70 H","0.75 H","0.80 H","0.85 H","0.90 H","0.95 H",
            ],
            [
              "0.10 V","0.15 V","0.20 V","0.25 V","0.30 V","0.35 V","0.40 V","0.45 V","0.50 V","0.55 V","0.60 V","0.65 V","0.70 V","0.75 V","0.80 V","0.85 V","0.90 V","0.95 V",
            ],
            ["Full","pink & flat","total cupping","sloping cup","deep cup","WNL"],
          ],
          // retinaOptions:[
          //   {english:"WNL",arabic:"WNL"},
          //   {english:"NO DIABETIC MACULOPATHY",arabic:"NO DIABETIC MACULOPATHY"},
          //   {english:"Drusen",arabic:"Drusen"},
          //   {english:"other",arabic:"other"}
          // ],
        //   vesselsOptions:[
        //     {english:"WNL", arabic:"WNL"},
        //     {english:"A/V Crossing change", arabic:"A/V Crossing change"},
        //     {english:"2:3 A/V Ratio", arabic:"2:3 A/V Ratio"},
        //     {english:"Dilation", arabic:"Dilation"},
        //     {english:"Venous Beading", arabic:"Venous Beading"},
        //     {english:"Tortuosity", arabic:"Tortuosity"},
        //     {english:"other", arabic:"other"}
        // ],
        // vitreousOptions:[
        //     {english:"clear",arabic:"clear"},
        //     {english:"PVD",arabic:"PVD"},
        //     {english:"FLOATERS",arabic:"FLOATERS"},
        //     {english:"SYNERESIS",arabic:"SYNERESIS"},
        //     {english:"other",arabic:"other"},
        // ],
      };
    },
    computed:{
      ...mapGetters('detailsOphthalmic/ophthalmicStaticData',['posteriorExam']),
      ///////////////////////dilation///////////////////////
      dilationOptions(){
      return this.posteriorExam.dilation;
      },
      drugOptions(){
        if(this.dilationOptions.dilation_drug){
          return this.dilationOptions.dilation_drug;
      }
      else return [];
          
      }, 
      eyeOptions(){
        if(this.dilationOptions.dilation_eye){
          return this.dilationOptions.dilation_eye;
      }
      else return [];
        
      }, 
     /////////////////////////////fundusExam////////////////////////////
     fundusExamOptions(){
      return this.posteriorExam.fundusExam;
    },

     ophthalmoscopyOptions(){
      if( this.fundusExamOptions.ophthalmoscopy){
        return this.fundusExamOptions.ophthalmoscopy;
      }
      else return [];
         
      }, 
     
      vitreousOdOptions(){
        if(this.fundusExamOptions.fundusExam_od_vitreous){
          return this.fundusExamOptions.fundusExam_od_vitreous;
      }
      else return [];
         
      }, 
      vitreousOsOptions(){
        if(this.fundusExamOptions.fundusExam_os_vitreous){
          return this.fundusExamOptions.fundusExam_os_vitreous;
      }
      else return [];
         
      }, 
      vesselsOdOptions(){
        if(this.fundusExamOptions.od_vessels){
          return this.fundusExamOptions.od_vessels;
      }
      else return [];
         
      }, 
      vesselsOsOptions(){
        if(this.fundusExamOptions.os_vessels){
          return this.fundusExamOptions.os_vessels;
      }
      else return [];
         
      }, 
     
      retinaOdOptions(){
        if(this.fundusExamOptions.od_retina){
          return this.fundusExamOptions.od_retina;
      }
      else return [];
       
      }, 
      retinaOsOptions(){
        if(this.fundusExamOptions.os_retina){
          return this.fundusExamOptions.os_retina;
      }
      else return [];
       
      }, 
     
      peripheryOdOptions(){
        if(this.fundusExamOptions.od_periphery){
          return this.fundusExamOptions.od_periphery;
      }
      else return [];
       
      }, 
      peripheryOsOptions(){
        if(this.fundusExamOptions.os_periphery){
          return this.fundusExamOptions.os_periphery;
      }
      else return [];
       
      }, 
      poleOdOptions(){
        if(this.fundusExamOptions.od_posteriorPole){
          return this.fundusExamOptions.od_posteriorPole;
      }
      else return [];
         
      }, 
      poleOsOptions(){
        if(this.fundusExamOptions.os_posteriorPole){
          return this.fundusExamOptions.os_posteriorPole;
      }
      else return [];
         
      }, 
     
      maculaOdOptions(){
        if(this.fundusExamOptions.od_macula){
          return this.fundusExamOptions.od_macula;
      }
      else return [];
       
      }, 
     
      maculaOsOptions(){
        if(this.fundusExamOptions.os_macula){
          return this.fundusExamOptions.os_macula;
      }
      else return [];
       
      }, 
      pupillaryOdOptions(){
        if(this.fundusExamOptions.od_pupillaryReflex){
          return this.fundusExamOptions.od_pupillaryReflex;
      }
      else return [];
         
      }, 
      pupillaryOsOptions(){
        if(this.fundusExamOptions.os_pupillaryReflex){
          return this.fundusExamOptions.os_pupillaryReflex;
      }
      else return [];
         
      }, 
     
   
    }
  };
  