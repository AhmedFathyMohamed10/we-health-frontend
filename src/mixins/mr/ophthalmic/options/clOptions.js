import { mapGetters } from 'vuex'
import {destructOptionsList} from "@/helpers/utilities"
export default {
    data(){
        return{
            // brandOptions:[
            //     {english:"Alcon",arabic:"Alcon"},
            //     {english:"B&L",arabic:"B&L"},
            //     {english:"Acuvue OASYS",arabic:"Acuvue OASYS"},
            //     {english:"Bio infinity",arabic:"Bio infinity"},
            //     {english:"Easy Vision",arabic:"Easy Vision"},
            //     {english:"Abba",arabic:"Abba"},
            //     {english:"Sinu",arabic:"Sinu"},
            //     {english:"Tom ford",arabic:"Tom ford"},
            //     {english:"Ray ban",arabic:"Ray ban"},
            //     {english:"Armani",arabic:"Armani"},
            //     {english:"Natural Vue MF",arabic:"Natural Vue MF"},
            //     {english:"other",arabic:"other"}
            // ],
            // centrationOptions:[
            //     {english:"centered",arabic:"centered"},
            //     {english:"c--",arabic:"c--"},
            //     {english:"c-",arabic:"c-"},
            //     {english:"c+",arabic:"c+"},
            //     {english:"c++",arabic:"c++"},
            //     {english:"other",arabic:"other"}
            // ],
            // comfortOptions:[
            //     {english:"Good",arabic:"Good"},
            //     {english:"Poor",arabic:"Poor"},
            //     {english:"Bad",arabic:"Bad"},
            //     {english:"Eyes feel dry",arabic:"Eyes feel dry"},
            //     {english:"bad vision",arabic:"bad vision"},
            //     {english:"good vision",arabic:"good vision"},
            //     {english:"other",arabic:"other"}
            // ],
            // commonOptions:[
            //     {english:"Normal",arabic:"Normal"},
            //     {english:"1",arabic:"1"},
            //     {english:"2",arabic:"2"},
            //     {english:"3",arabic:"3"},
            //     {english:"4",arabic:"4"},
            //     {english:"5",arabic:"5"},
            //     {english:"other",arabic:"other"}
            // ],
            // designOptions:[
            //     {english:"Spherical",arabic:"Spherical"},
            //     {english:"Toric/Concentric/segmented",arabic:"Toric/Concentric/segmented"},
            //     {english:"W454",arabic:"W454"},
            //     {english:"Cooper",arabic:"Cooper"},
            //     {english:"Air Optix Multifocal",arabic:"Air Optix Multifocal"},
            //     {english:"Purevision 2",arabic:"Purevision 2"},
            //     {english:"Acuvu OASYS Pure moise",arabic:"Acuvu OASYS Pure moise"},
            //     {english:"C46",arabic:"C46"},
            //     {english:"C466",arabic:"C466"},
            //     {english:"Umere",arabic:"Umere"},
            //     {english:"Air Otics",arabic:"Air Otics"},
            //     {english:"Alcon",arabic:"Alcon"},
            //     {english:"Lenses",arabic:"Lenses"},
            //     {english:"Lakas",arabic:"Lakas"},
            //     {english:"Fizzi",arabic:"Fizzi"},
            //     {english:"Morgan 57 mm",arabic:"Morgan 57 mm"},
            //     {english:"positive lens",arabic:"positive lens"},
            //     {english:"glasses",arabic:"glasses"},
            //     {english:"other",arabic:"other"}
            // ],
            // dnOptions:[
            //     {english:"D", arabic:"D"},
            //     {english:"N", arabic:"N"},
            // ],
            // manufacturerOptions:[
            //     {english:"Hoya Vision",arabic:"Hoya Vision"},
            //     {english:"Adlens",arabic:"Adlens"},
            //     {english:"B&L",arabic:"B&L"},
            //     {english:"Johnson & Johnson ",arabic:"Johnson & Johnson "},
            //     {english:"CooperVision",arabic:"CooperVision"},
            //     {english:"3M",arabic:"3M"},
            //     {english:"A & A Optical",arabic:"A & A Optical"},
            //     {english:"Dior",arabic:"Dior"},
            //     {english:"Abba Optical",arabic:"Abba Optical"},
            //     {english:"A child's View",arabic:"A child's View"},
            //     {english:"Acuity Optical USA, Inc.",arabic:"Acuity Optical USA, Inc."},
            //     {english:"Avalon Eyewear",arabic:"Avalon Eyewear"},
            //     {english:"other",arabic:"other"},
            // ],
            // movementOptions:[
            //     {english:"good",arabic:"good"},
            //     {english:"tight",arabic:"tight"},
            //     {english:"loose",arabic:"loose"},
            //     {english:"too loose",arabic:"too loose"},
            //     {english:"other",arabic:"other"}
            // ],
            // qtyBoxOptions:[
            //     {english:"1",arabic:"1"},
            //     {english:"3",arabic:"3"},
            //     {english:"6",arabic:"6"},
            //     {english:"30",arabic:"30"},
            //     {english:"90",arabic:"90"},
            //     {english:"other",arabic:"other"}
            // ],
            // rotationOptions:[
            //     {english:"Right: 20",arabic:"Right: 20"},
            //     {english:"Right: 15",arabic:"Right: 15"},
            //     {english:"Right: 10",arabic:"Right: 10"},
            //     {english:"Right: 5",arabic:"Right: 5"},
            //     {english:"left: 5",arabic:"left: 5"},
            //     {english:"left: 10",arabic:"left: 10"},
            //     {english:"left: 15",arabic:"left: 15"},
            //     {english:"left: 20",arabic:"left: 20"},
            //     {english:"other",arabic:"other"}
            // ],
            // visionOptions:[
            //     {english:"Good",arabic:"Good"},
            //     {english:"Poor",arabic:"Poor"},
            //     {english:"Stable",arabic:"Stable"},
            //     {english:"other",arabic:"other"}
            // ],
            // solutionOptions:[
            //     {english:"Bio True",arabic:"Bio True"},
            //     {english:"Boston Compound",arabic:"Boston Compound"},
            //     {english:"Boston Simplicity",arabic:"Boston Simplicity"},
            //     {english:"Clear Care",arabic:"Clear Care"},
            //     {english:"Opti-free",arabic:"Opti-free"},
            //     {english:"Renu",arabic:"Renu"},
            //     {english:"Complete",arabic:"Complete"},
            //     {english:"PeroxiClear",arabic:"PeroxiClear"},
            //     {english:"SoloCare",arabic:"SoloCare"},
            // ],
        }
    },
    computed:{
        ...mapGetters('detailsOphthalmic/ophthalmicStaticData',['cl']),
        
        ///////////////////////contactLength///////////////////////
        fittingOptions(){
            return this.cl.fitting;
          },
        manufacturerOdOptions(){
            if(this.fittingOptions.od_manufacturer){
                return this.fittingOptions.od_manufacturer;
            }
            else return [];
           
        }, 
        manufacturerOsOptions(){
            if(this.fittingOptions.os_manufacturer){
                return this.fittingOptions.os_manufacturer;
            }
            else return [];
           
        }, 
        brandOdOptions(){
            if(this.fittingOptions.od_brand){
             return this.fittingOptions.od_brand;
            }
            else return []
            
        }, 
        brandOsOptions(){
            if(this.fittingOptions.os_brand){
             return this.fittingOptions.os_brand;
            }
            else return []
            
        }, 
        designOdOptions(){
            if( this.fittingOptions.od_design){
                return this.fittingOptions.od_design;
            }
            else return []
           
        }, 
        designOsOptions(){
            if( this.fittingOptions.os_design){
                return this.fittingOptions.os_design;
            }
            else return []
           
        }, 
        qtyBoxOdOptions(){
            if(this.fittingOptions.od_qtyBox){
                return this.fittingOptions.od_qtyBox;
            }
            else return []
      
        }, 
        qtyBoxOsOptions(){
            if(this.fittingOptions.os_qtyBox){
                return this.fittingOptions.os_qtyBox;
            }
            else return []
      
        }, 
        comfortOdOptions(){
            if(this.fittingOptions.od_comfort){
                return this.fittingOptions.od_comfort;
            }
            else return []
           
        }, 
        comforOstOptions(){
            if(this.fittingOptions.os_comfort){
                return this.fittingOptions.os_comfort;
            }
            else return []
           
        }, 
        visionOdOptions(){
            if(this.fittingOptions.od_vision){
                return this.fittingOptions.od_vision;
            }
            else return []
           
        }, 
        visionOsOptions(){
            if(this.fittingOptions.os_vision){
                return this.fittingOptions.os_vision;
            }
            else return []
           
        }, 
        rotationOdOptions(){
            if(this.fittingOptions.od_rotation){
                return this.fittingOptions.od_rotation;
            }
            else return []

        }, 
        rotationOsOptions(){
            if(this.fittingOptions.os_rotation){
                return this.fittingOptions.os_rotation;
            }
            else return []

        }, 
        movementOdOptions(){
            if(this.fittingOptions.od_movement){
                return this.fittingOptions.od_movement;
            }
            else return []
            
        }, 
        movementOsOptions(){
            if(this.fittingOptions.os_movement){
                return this.fittingOptions.os_movement;
            }
            else return []
            
        }, 
        centrationOdOptions(){
            if(this.fittingOptions.od_centration){
                return this.fittingOptions.od_centration;
            }
            else return []
           
        }, 
        centrationOsOptions(){
            if(this.fittingOptions.os_centration){
                return this.fittingOptions.os_centration;
            }
            else return []
           
        }, 
        commonOdOptions(){
            if(this.fittingOptions.od_tear){
                return this.fittingOptions.od_tear;
            }
            else return []
          
        }, 
      
        commonOsOptions(){
            if(this.fittingOptions.os_tear){
                return this.fittingOptions.os_tear;
            }
            else return []
          
        }, 
      
        scleraOdOptions(){
            if(this.fittingOptions.od_sclera){
                return this.fittingOptions.od_sclera;
            }
            else return []
          
        }, 
        scleraOsOptions(){
            if(this.fittingOptions.os_sclera){
                return this.fittingOptions.os_sclera;
            }
            else return []
          
        }, 
        limbalOsOptions(){
            if(this.fittingOptions.os_limbal){
                return this.fittingOptions.os_limbal;
            }
            else return []
          
        }, 
        limbalOdOptions(){
            if(this.fittingOptions.od_limbal){
                return this.fittingOptions.od_limbal;
            }
            else return []
          
        }, 
       corneaOdOptions(){
            if(this.fittingOptions.od_cornea){
                return this.fittingOptions.od_cornea;
            }
            else return []
          
        }, 
       corneaOsOptions(){
            if(this.fittingOptions.os_cornea){
                return this.fittingOptions.os_cornea;
            }
            else return []
          
        }, 
       lidOdOptions(){
            if(this.fittingOptions.od_lid){
                return this.fittingOptions.od_lid;
            }
            else return []
          
        }, 
       lidOsOptions(){
            if(this.fittingOptions.os_lid){
                return this.fittingOptions.os_lid;
            }
            else return []
          
        }, 
        scleraOdOptions(){
            if(this.fittingOptions.os_sclera){
                return this.fittingOptions.os_sclera;
            }
            else return []
          
        }, 
      
        solutionDistantOptions(){
            if(this.fittingOptions.distant_solution){
                return this.fittingOptions.distant_solution;
            }
            else return []
           
        }, 
        solutionNearOptions(){
            if(this.fittingOptions.near_solution){
                return this.fittingOptions.near_solution;
            }
            else return []
           
        }, 
         
        dnDistantOdOptions(){
            if(this.fittingOptions.distant_od_dn){
                return this.fittingOptions.distant_od_dn;
            }
            else return []
         
        }, 
        dnDistantOsOptions(){
            if(this.fittingOptions.distant_os_dn){
                return this.fittingOptions.distant_os_dn;
            }
            else return []
         
        }, 
        dnNearOdOptions(){
            if(this.fittingOptions.near_od_dn){
                return this.fittingOptions.near_od_dn;
            }
            else return []
         
        }, 
        dnNearOsOptions(){
            if(this.fittingOptions.near_os_dn){
                return this.fittingOptions.near_os_dn;
            }
            else return []
         
        }, 
         
       
    }
}