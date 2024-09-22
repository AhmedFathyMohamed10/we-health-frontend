<template>
    <div class="Physical-exam">
        <CustomTabs
            :v = v 
            v-model="selectedTab" 
            :tabs="tabs" 
            :checkError="check_error" 
            :serializerError="serializer_error" 
            :bgClass="'btn-success'"
            :outlineClass="'btn-outline-success'">
        </CustomTabs>
        <div class="row tabs-content my-2">
            <div v-show="selectedTab=='physical'" class="col-12">
                <Physical
                    :v = v.physical
                    v-model="physicalExam.physical" 
                    :check_error="check_error.Physical?check_error.Physical:{}" 
                    :serializer_error="serializer_error.Physical?serializer_error.Physical:{}"
                />
            </div>
            <div v-show="selectedTab=='behavioral'" class="col-12">
                <Behavioral 
                    :v = v.behavioral
                    v-model="physicalExam.behavioral" 
                    :check_error="check_error.behavioral?check_error.behavioral:{}" 
                    :serializer_error="serializer_error.behavioral?serializer_error.behavioral:{}"
                />
            </div>
            <div v-show="selectedTab=='history'" class="col-12">
                <History 
                    :check_error="check_error.history?check_error.history:{}" 
                    :serializer_error="serializer_error.history?serializer_error.history:{}"
                />
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";

import CustomTabs from "@/components/global/custom/CustomTabs.vue";        
import Physical from '@/components/mr/pediatric/tabs/physical-exam/Physical.vue'
import Behavioral from '@/components/mr/pediatric/tabs/physical-exam/Behavioral.vue'
import History from '@/components/mr/pediatric/tabs/physical-exam/History.vue'
export default {
    props:{
        v:{
            type:Object,
            required:true,
        },
        check_error:{
            type:Object,
        },
        serializer_error:{
            type:Object,
        },
    },
    components:{
        CustomTabs,
        Physical,
        Behavioral,
        History,
    },
    data(){
        return {
            selectedTab:"physical",
            tabs:[
                {en:'Physical Exam',ar:'Physical Exam',key:"physical"},
                {en:'Behavioral',ar:'Behavioral',key:"behavioral"},
                {en:'History',ar:'History',key:"history"},
            ],
            physicalExam:{
                physical: {
                temp:{
                    checked:false,
                    comment:""
                },
                skin:{
                    checked:false,
                    comment:""
                },
                nodes:{
                    checked:false,
                    comment:""
                },
                head:{
                    checked:false,
                    comment:""
                },
                eyesLeftRight:{
                    checked:false,
                    comment:""
                },
                earsLeftRight:{
                    checked:false,
                    comment:""
                },
                nose:{
                    checked:false,
                    comment:""
                },
                oropharynx:{
                    checked:false,
                    comment:""
                },
                neck:{
                    checked:false,
                    comment:""
                },
                chestBreast:{
                    checked:false,
                    comment:""
                },
                lung:{
                    checked:false,
                    comment:""
                },
                cardiovascular:{
                    checked:false,
                    comment:""
                },
                abdomen:{
                    checked:false,
                    comment:""
                },
                genitalia:{
                    checked:false,
                    comment:""
                },
                hips:{
                    checked:false,
                    comment:""
                },
                neuro:{
                    checked:false,
                    comment:""
                },
                evidence:{
                    checked:false,
                    comment:""
                },
                footLeft:{
                    checked:false,
                    comment:""
                },
                footRight:{
                    checked:false,
                    comment:""
                },
                handLeft:{
                    checked:false,
                    comment:""
                },
                handRight:{
                    checked:false,
                    comment:""
                },
                handFingersLeft:{
                    checked:false,
                    comment:""
                },
                handFingersRight:{
                    checked:false,
                    comment:""
                },
                footFingersLeft:{
                    checked:false,
                    comment:""
                },
                footFingerRight:{
                    checked:false,
                    comment:""
                },
                },
                behavioral:{
                    vocalizesBabbles :{
                        checked:false,
                        comment:""
                    },
                    recognizesParentsVoice :{
                        checked:false,
                        comment:""
                    },
                    graspingObjects :{
                        checked:false,
                        comment:""
                    },
                    rollsOver :{
                        checked:false,
                        comment:""
                    },
                    hearingFromBirth :{
                        checked:false,
                        comment:""
                    },
                    vision :{
                        checked:false,
                        comment:""
                    },
                    headNeckControl :{
                        checked:false,
                        comment:""
                    },
                    liftsChest :{
                        checked:false,
                        comment:""
                    },
                },  
            },
        }
    },
    watch: {
        physicalExam: {
            deep: true,
            handler(newValue, oldValue) {
                this.setPhysicalExam(newValue);
            },
        },
    },    
    validations: {
        // physical: {
        //     temp: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     skin: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     nodes: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     head: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     eyesLeftRight: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     earsLeftRight: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     nose: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     oropharynx: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     neck: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     chestBreast: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     lung: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     cardiovascular: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     abdomen: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     genitalia: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     hips: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     neuro: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     evidence: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     footLeft: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     footRight: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     handLeft: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     handRight: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     handFingersLeft: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     handFingersRight: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     footFingersLeft: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     footFingerRight: {
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        // },
        
        // behavioral:{
        //     vocalizesBabbles :{
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     recognizesParentsVoice :{
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     graspingObjects :{
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     rollsOver :{
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     hearingFromBirth :{
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     vision :{
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     headNeckControl :{
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        //     liftsChest :{
        //         comment: {
        //             minLength: minLength(1),
        //             maxLength: maxLength(255),
        //             notContainsHtmlTags(value) {
        //                 return notContainsHtmlTags(value);
        //             },
        //         }
        //     },
        // },           
    },
    methods:{
        ...mapActions("detailsPediatric/pediatric", [
            "setPhysicalExam",
        ]), 
    },        
}
</script>