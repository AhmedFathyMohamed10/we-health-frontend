<template>
    <div class="history my-3">
        <CustomTabs 
            v-model="selectedTab" 
            :tabs="tabs" 
            :checkError="check_error" 
            :serializerError="serializer_error" 
            :v="v"
            :bgClass="'btn-success'"
            :outlineClass="'btn-outline-success'">
        </CustomTabs>

         <div class="row tabs-content my-2">
            <div v-show="selectedTab == 'medicalCondition'" class="col-12">
                <MedicalCondition 
                    :v="v.medicalCondition"
                    :check_error="check_error.medicalCondition?check_error.medicalCondition:{}" 
                    :serializer_error="serializer_error.medicalCondition?serializer_error.medicalCondition:{}" 
                />
            </div>
            <div v-show="selectedTab=='ocularMedication'" class="col-12">
                <OcularMedication 
                    :v="v.ocularMedication" 
                    :check_error="check_error.ocularMedication?check_error.ocularMedication:{}" 
                    :serializer_error="serializer_error.ocularMedication?serializer_error.ocularMedication:{}" 
                />
            </div>
         </div>
            <div v-show="selectedTab=='ocularHistory'" class="col-12">
                <OcularHistory 
                    :v="v.ocularHistory" 
                    :check_error="check_error.ocularHistory?check_error.ocularHistory:{}" 
                    :serializer_error="serializer_error.ocularHistory?serializer_error.ocularHistory:{}" 
                />
            </div>
            
            <div v-show="selectedTab=='clHabits'" class="col-12">
                <ClHabits 
                    :v="v.clHabits" 
                    :check_error="check_error.clHabits?check_error.clHabits:{}" 
                    :serializer_error="serializer_error.clHabits?serializer_error.clHabits:{}" 
                />
            </div>
    </div>
</template>
<script>
////////////////////////////////////////////////////////
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import MedicalCondition from './history/MedicalCondition.vue'
import OcularMedication from './history/OcularMedication.vue'
import OcularHistory from './history/OcularHistory.vue'
import ClHabits from './history/ClHabits.vue'
////////////////////////////////////////////////////////
export default {
    props:{
        v:{
            type:Object,
            required:true
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
        MedicalCondition,
        OcularMedication,
        OcularHistory,
        ClHabits,
    },
    data(){
        return{
            selectedTab:"clHabits",
            tabs:[
                {en:'Medical Condition',ar:'Medical Condition',key:"medicalCondition"},
                {en:'Ocular Medication',ar:'Ocular Medication',key:"ocularMedication"},
                {en:'Ocular History',ar:'Ocular History',key:"ocularHistory"},
                {en:'CL Habits',ar:'CL Habits',key:"clHabits"},
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
.history{
}
</style>