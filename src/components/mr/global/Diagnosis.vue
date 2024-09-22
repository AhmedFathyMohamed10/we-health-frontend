<template>
    <div class="diagnosis">
        <CustomTabs 
            v-model="selectedTab" 
            :tabs="tabs" 
            :v="v"
            :checkError="check_error" 
            :serializerError="serializer_error" 
            :bgClass="'btn-success'"
            :outlineClass="'btn-outline-success'">
        </CustomTabs>

        <div class="tab-content my-2">
            <ChiefComplaint
                v-show="selectedTab == 'complaints'" 
                v-model="diagnosisGroup.complaints"
                :v="v.complaints"
                :check_error="
                    check_error.complaints ? check_error.complaints : {}
                "          :serializer_error="
                    serializer_error.complaints
                    ? serializer_error.complaints
                    : {}
                "
            />

            <DiagnosisChild  
               :diagnosisOptions="diagnosisData['diagnosis']"
                v-show="selectedTab == 'diagnosis'" 
                v-model="diagnosisGroup.diagnosis"
                :v="v.diagnosis"
                :check_error="
                    check_error.diagnosis ? check_error.diagnosis : {}
                "          :serializer_error="
                    serializer_error.diagnosis
                    ? serializer_error.diagnosis
                    : {}
                "
            />
        </div>
    </div>
</template>
<script>
import ChiefComplaint from "./diagnosis/ChiefComplaint.vue";
import DiagnosisChild from "./diagnosis/DiagnosisChild.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue"; 
export default {
    name: "Diagnosis",
    props: {
        diagnosisData:{
            type: Object,
        },
        value:{
            required:true,
            type: Object,
            default(){
                return {
                    complaints:[],
                    diagnosis:[]
                }
            }
        },        
        v: {
            type: Object,
        },
        check_error: {
            type: Object,
        },
        serializer_error: {
            type: Object,
        },
    },
    components: {
        CustomTabs,
        ChiefComplaint,
        DiagnosisChild,
    },
    data() {
        return {
            selectedTab:"diagnosis",
            tabs: [
                {
                    en: "Chief Complaint",
                    ar: "Chief Complaint",
                    key: "complaints",
                },
                {
                    en: "Diagnosis",
                    ar: "Diagnosis",
                    key: "diagnosis",
                },
            ],
            diagnosisGroup:this.value,
        };
    },
    watch:{
        diagnosisGroup: {
            deep: true,
            handler(newValue, oldValue) {
                this.$emit('input',{...this.diagnosisGroup})
            },
        },
    },

}
</script>
<style lang="scss" scoped>
    .diagnosis {}
</style>
