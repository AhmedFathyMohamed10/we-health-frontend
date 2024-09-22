import { mapGetters } from 'vuex'
export default {
    data(){
        return{
            // medicalConditionOptions:[
            //     {key:'diabetes',name:'Diabetes'},
            //     {key:'highBloodPressure',name:'High Blood Pressure'},
            //     {key:'heartDisease',name:'Heart Disease'},
            //     {key:'thyroidProblems',name:'Thyroid Problems'},
            //     {key:'arthritis',name:'Arthritis'},
            //     {key:'cancer',name:'Cancer'},
            //     {key:'headachesMigraines',name:'Headaches Migraines'},
            //     {key:'noMedicalCondition',name:'No Medical Condition'},
            // ],
            // conditionOptions:[
            //     {english:"Blepharitis",arabic:"Blepharitis"},
            //     {english:"Canaloplasty",arabic:"Canaloplasty"},
            //     {english:"Cataract",arabic:"Cataract"},
            //     {english:"Cataract Surgery",arabic:"Cataract Surgery"},
            //     {english:"Cellulitis",arabic:"Cellulitis"},
            //     {english:"Conjunctivitis/pink eye",arabic:"Conjunctivitis/pink eye"},
            //     {english:"Corneal Surgery",arabic:"Corneal Surgery"},
            //     {english:"Endophthalmitis",arabic:"Endophthalmitis"},
            //     {english:"Eye muscle surgery",arabic:"Eye muscle surgery"},
            //     {english:"Eye Turn/lazy eye",arabic:"Eye Turn/lazy eye"},
            //     {english:"Eyelid surgery",arabic:""},
            //     {english:"Glaucoma",arabic:"Glaucoma"},
            //     {english:"Glaucoma surgery",arabic:"Glaucoma surgery"},
            //     {english:"Keratitis",arabic:"Keratitis"},
            //     {english:"Laser eye surgery",arabic:"Laser eye surgery"},
            //     {english:"Macular degeneration",arabic:"Macular degeneration"},
            //     {english:"Ocular herpes",arabic:"Ocular herpes"},
            //     {english:"Oculoplastic Surgery",arabic:"Oculoplastic Surgery"},
            //     {english:"Orbital surgery",arabic:"Orbital surgery"},
            //     {english:"Refractive surgery",arabic:"Refractive surgery"},
            //     {english:"Retinal Detachment",arabic:"Retinal Detachment"},
            //     {english:"Sty",arabic:"Sty"},
            //     {english:"Uveitis",arabic:"Uveitis"},
            //     {english:"Vision loss/blindness",arabic:"Vision loss/blindness"},
            //     {english:"Vitreo-retinal surgery",arabic:"Vitreo-retinal surgery"},
            //     {english:"other",arabic:"other"},
            // ],
            // cleaningHabitsOptions:[
            //     {english:"normal",arabic:"normal"},
            //     {english:"Cleaning with tap water",arabic:"Cleaning with tap water"},
            //     {english:"reusing cleaning solution",arabic:"reusing cleaning solution"},
            //     {english:"not washing hands",arabic:"not washing hands"},
            //     {english:"rehydrate with saliva",arabic:"rehydrate with saliva"},
            //     {english:"peroxide solution ",arabic:"peroxide solution "},
            //     {english:"saline solution",arabic:"saline solution"},
            //     {english:"multipurpose solution",arabic:"multipurpose solution"},
            //     {english:"no rub ",arabic:"no rub "},
            //     {english:"other",arabic:"other"},
            // ],
            // comfortOptions:[
            //     {english:"Good",arabic:"Good"},
            //     {english:"poor",arabic:"poor"},
            //     {english:"bad",arabic:"bad"},
            //     {english:"eyes feel dry",arabic:"eyes feel dry"},
            //     {english:"bad vision",arabic:"bad vision"},
            //     {english:"good vision",arabic:"good vision"},
            //     {english:"other",arabic:"other"},
            // ],
            // eyeOptions:[
            //     {id:"OS",value:"OS"},
            //     {id:"OD",value:"OD"},
            //     {id:"OU",value:"OU"},
            // ],
            // typeReplacementOptions:[
            //     {english:"soft",arabic:"soft"},
            //     {english:"RPG",arabic:"RPG"},
            //     {english:"Quarterly",arabic:"Quarterly"},
            //     {english:"Monthly",arabic:"Monthly"},
            //     {english:"Biweekly",arabic:"Biweekly"},
            //     {english:"weekly",arabic:"weekly"},
            //     {english:"daily",arabic:"daily"},
            //     {english:"yearly",arabic:"yearly"},
            //     {english:"other",arabic:"other"},
            // ],
            // wearingHabitsOptions:[
            //     {english:"normal",arabic:"normal"},
            //     {english:"Cleaning with tap water",arabic:"Cleaning with tap water"},
            //     {english:"reusing cleaning solution",arabic:"reusing cleaning solution"},
            //     {english:"not washing hands",arabic:"not washing hands"},
            //     {english:"rehydrate with saliva",arabic:"rehydrate with saliva"},
            //     {english:"peroxide solution ",arabic:"peroxide solution "},
            //     {english:"saline solution",arabic:"saline solution"},
            //     {english:"multipurpose solution",arabic:"multipurpose solution"},
            //     {english:"no rub ",arabic:"no rub "},
            //     {english:"other",arabic:"other"},
            // ],

            // method return backend
            drugNameParams:{
                url: "example/drugName",
                suggestions:[]
            }
        }
    },
    computed:{
        ...mapGetters('detailsOphthalmic/ophthalmicStaticData',['history']),
        /////////////////////ocularHistory//////////////////////////////
        ocularHistoryOptions(){
             return this.history.ocularHistory;
           },

        eyeOptions(){
            if(this.ocularHistoryOptions.ocularHistory_eye){
                return this.ocularHistoryOptions.ocularHistory_eye;                                                                                                                                                                                                                                                                                                                                                                              
            }
                else return [];
        },
        conditionOptions(){
            if(this.ocularHistoryOptions.condition){
                return this.ocularHistoryOptions.condition;
            }
                else return [];
          
        },
        /////////////////////////////clHabits///////////////////////////////
        clHabitsOptions(){
            return this.history.clHabits;
          },

        typeReplacementOptions(){
            if(this.clHabitsOptions.typeReplacement){
                return this.clHabitsOptions.typeReplacement;
            }
                else return [];
        },
        comfortOptions(){
            if(this.clHabitsOptions.comfort){
                return this.clHabitsOptions.comfort;
            }
                else return [];
        },
        wearingHabitsOptions(){
            if(this.clHabitsOptions.wearingHabits){
                return this.clHabitsOptions.wearingHabits;
            }
                else return [];
        },
        cleaningHabitsOptions(){
            if(this.clHabitsOptions.cleaningHabits){
                return this.clHabitsOptions.cleaningHabits;
            }
                else return [];
        },

        ///////////////////////////ocularMedication/////////////////////////////////////////
        ocularMedicationOptions(){
            return this.history.ocularMedication;
          },

        formOptions(){
            if(this.ocularMedicationOptions.ocularMedication_form){
                return this.ocularMedicationOptions.ocularMedication_form;
            }
                else return [];
         },
        strengthUnitOptions(){
            if(this.ocularMedicationOptions.ocularMedication_strength){
                return this.ocularMedicationOptions.ocularMedication_strength;
            }
                else return [];
         },
        periodUnitOptions(){
            if(this.ocularMedicationOptions.ocularMedication_period){
                return this.ocularMedicationOptions.ocularMedication_period;
            }
                else return [];
         },
        // periodUnitOptions(){
        //     if(this.ocularMedicationOptions.period){
        //         return this.ocularMedicationOptions.period;
        //     }
        //         else return [];
        //  },
      
       //////////////////////////////////medicalCondition//////////////////////////////////

        medicalConditionOptions(){
            if(this.history.medicalCondition.medicalCondition){
                return this.history.medicalCondition.medicalCondition;
            }
           else return []
        },
   
    },
    methods:{
        async search(event,params) {
          console.log(event.query)
          try {
            await this.$store.dispatch('detailsOphthalmic/ophthalmicSuggestions/search',{url:params.url,s:event.query})
            .then((res) => {
                // console.log(res)
                params.suggestions = [...res]
            });
          }
          catch (error) {
            console.error(error)
          }
        },
    }
}