import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            // reasons: [
            //     {english: "new glasses", arabic:"new glasses"},
            //     {english: "cataract surgery", arabic:"cataract surgery"},
            //     {english: "Blury Vision", arabic:"Blury Vision"},
            //     {english: "Full eye exam", arabic:"Full eye exam"},
            //     {english: "Annual visit", arabic:"Annual visit"},
            //     {english: "Glaucoma", arabic:"Glaucoma"},
            //     {english: "other", arabic:"other"},
            // ],
            // chiefComplaintOptions: [
            //     {english: "Flashes of light", arabic: "Flashes of light"},
            //     {english: "Floaters", arabic: "Floaters"},
            //     {english: "Blurry vision near", arabic: "Blurry vision near"},
            //     {english: "Blurry vision far", arabic: "Blurry vision far"},
            //     {english: "Dry eye", arabic: "Dry eye"},
            //     {english: "watery eye", arabic: "watery eye"},
            //     {english: "burning sensation", arabic: "burning sensation"},
            //     {english: "difficulty seeing at night", arabic: "difficulty seeing at night"},
            //     {english: "dilated pupils", arabic: "dilated pupils"},
            //     {english: "excessive tearing", arabic: "excessive tearing"},
            //     {english: "failed school vision test", arabic: "failed school vision test"},
            //     {english: "gritty sensation", arabic: "gritty sensation"},
            //     {english: "headaches", arabic: "headaches"},
            //     {english: "irritation", arabic: "irritation"},
            //     {english: "itching sensation", arabic: "itching sensation"},
            //     {english: "loss of vision", arabic: "loss of vision"},
            //     {english: "pain", arabic: "pain"},
            //     {english: "sandy sensation", arabic: "sandy sensation"},
            //     {english: "sensivity to light", arabic: "sensivity to light"},
            //     {english: "other", arabic: "other"},
            // ],
            // locationOptions: [
            //     {english: 'Left eye', arabic: 'Left eye'},
            //     {english: 'Right eye', arabic: 'Right eye'},
            //     {english: 'Both eyes', arabic: 'Both eyes'},
            //     {english: 'left temple', arabic: 'left temple'},
            //     {english: 'right temple', arabic: 'right temple'},
            //     {english: 'both temple', arabic: 'both temple'},
            //     {english: 'across forehead', arabic: 'across forehead'},
            //     {english: 'back of head', arabic: 'back of head'},
            //     {english: 'top of head', arabic: 'top of head'},
            //     {english: 'other', arabic: 'other'},
            // ],
            // qualityOptions: [
            //     {english: 'sharp', arabic: 'sharp'},
            //     {english: 'dull', arabic: 'dull'},
            //     {english: 'throbbing', arabic: 'throbbing'},
            //     {english: 'radiation', arabic: 'radiation'},
            //     {english: 'localization', arabic: 'localization'},
            //     {english: 'constant', arabic: 'constant'},
            //     {english: 'intermittent', arabic: 'intermittent'},
            //     {english: 'chronic', arabic: 'chronic'},
            //     {english: 'stable', arabic: 'stable'},
            //     {english: 'improving', arabic: 'improving'},
            //     {english: 'worsening', arabic: 'worsening'},
            //     {english: 'other', arabic: 'other'},
            // ],
            // severityOptions: [
            //     {english: 'mild', arabic: 'mild'},
            //     {english: 'moderate', arabic: 'moderate'},
            //     {english: 'severe', arabic: 'severe'},
            //     {english: 'other', arabic: 'other'},
            // ],
            // timingOptions: [
            //     {english: 'Recurrent', arabic: 'Recurrent'},
            //     {english: 'continuous', arabic: 'continuous'},
            //     {english: 'comes and goes', arabic: 'comes and goes'},
            //     {english: 'seldom', arabic: 'seldom'},
            //     {english: 'frequently', arabic: 'frequently'},
            //     {english: 'varies in time', arabic: 'varies in time'},
            //     {english: 'sudden', arabic: 'sudden'},
            //     {english: 'slowly', arabic: 'slowly'},
            //     {english: 'other', arabic: 'other'},
            // ],
            // durationOptions: [
            //     {english: 'hour', arabic: 'hour'},
            //     {english: 'day', arabic: 'day'},
            //     {english: 'month', arabic: 'month'},
            //     {english: 'year', arabic: 'year'},
            // ],
            // contextOptions: [
            //     {english: 'Driving', arabic: 'Driving'},
            //     {english: 'working on computer', arabic: 'working on computer'},
            //     {english: 'watching tv', arabic: 'watching tv'},
            //     {english: 'reading schoolboard', arabic: 'reading schoolboard'},
            //     {english: 'reading', arabic: 'reading'},
            //     {english: 'wearing contacts', arabic: 'wearing contacts'},
            //     {english: 'wearing glasses', arabic: 'wearing glasses'},
            //     {english: 'looking to to the left', arabic: 'looking to to the left'},
            //     {english: 'looking to the right', arabic: 'looking to the right'},
            //     {english: 'looking up', arabic: 'looking up'},
            //     {english: 'looking down', arabic: 'looking down'},
            //     {english: 'other', arabic: 'other'},
            // ],
            // modifyingFactorOptions: [
            //     {english: 'Medication', arabic: 'Medication'},
            //     {english: 'sleep', arabic: 'sleep'},
            //     {english: 'cool compress', arabic: 'cool compress'},
            //     {english: 'warm compress', arabic: 'warm compress'},
            //     {english: 'low light', arabic: 'low light'},
            //     {english: 'other', arabic: 'other'},
            // ],
            // associationSignOptions: [
            //     {english: 'Anxiety', arabic: 'Anxiety'},
            //     {english: 'balance problems', arabic: 'balance problems'},
            //     {english: 'black spots', arabic: 'black spots'},
            //     {english: 'bleeding', arabic: 'bleeding'},
            //     {english: 'blind spot', arabic: 'blind spot'},
            //     {english: 'bump on lower lid margin', arabic: 'bump on lower lid margin'},
            //     {english: 'bump on upper lid margin', arabic: 'bump on upper lid margin'},
            //     {english: 'other', arabic: 'other'},
            // ],
        }
    },
    computed:{
        // ...mapGetters('ophthalmicStaticData',['chiefComplaint']),
        ...mapGetters('detailsOphthalmic/ophthalmicStaticData', {
            'chiefComplaintList': 'chiefComplaint',
        }),
        
          //////////////////////////chiefComplaint////////////////////////////////
        reasonForVisitOptions(){
         return this.chiefComplaintList.reasonForVisit;
        },
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
        reasons(){
            if(this.reasonForVisitOptions.reason){
                return  this.reasonForVisitOptions.reason;  
            }
            else return [];
        },

        //////////////////////////////
        chiefComplaintListChild(){
            return this.chiefComplaintList.chiefComplaint;
        },
        chiefComplaintOptions(){
            if(this.chiefComplaintListChild.chiefComplaint){
               return this.chiefComplaintListChild.chiefComplaint;
            }
            else return [];
        },
        locationOptions(){
            if(this.chiefComplaintListChild.location){
                return this.chiefComplaintListChild.location;
             }
             else return [];  
        },
        qualityOptions(){
            if(this.chiefComplaintListChild.quality){
                return this.chiefComplaintListChild.quality;
             }
             else return [];
        },
        severityOptions(){
            if(this.chiefComplaintListChild.severity){
                return this.chiefComplaintListChild.severity;
             }
             else return []; 
        },
        timingOptions(){
            if(this.chiefComplaintListChild.timing){
                return this.chiefComplaintListChild.timing;
             }
             else return [];   
        },
        durationOptions(){
            if(this.chiefComplaintListChild.duration){
                return this.chiefComplaintListChild.duration;
             }
             else return []; 
          
        },
        contextOptions(){
            if(this.chiefComplaintListChild.context){
                return this.chiefComplaintListChild.context;
             }
             else return [];
          
        },
        modifyingFactorOptions(){
            if(this.chiefComplaintListChild.modifyingFactor){
                return this.chiefComplaintListChild.modifyingFactor;
             }
             else return [];
          
        },
        associationSignOptions(){
            if(this.chiefComplaintListChild.associationSign){
                return this.chiefComplaintListChild.associationSign;
             }
             else return [];
       
        },
    }



}