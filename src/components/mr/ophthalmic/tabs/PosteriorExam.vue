<template>
    <div class="posterior-exam my-3">
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
            <div v-show="selectedTab=='fundusExam'" class="col-12">
                <FundusExam 
                    :v="v.fundusExam" 
                    :check_error="check_error.fundusExam?check_error.fundusExam:{}" 
                    :serializer_error="serializer_error.fundusExam?serializer_error.fundusExam:{}"
                />
            </div>
            <div v-show="selectedTab=='dilation'" class="col-12">
                <Dilation 
                    :v="v.dilation" 
                    :check_error="check_error.dilation?check_error.fundusExam:{}" 
                    :serializer_error="serializer_error.dilation?serializer_error.dilation:{}"
                />
            </div>
        </div>
    </div>
</template>
<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";        
import FundusExam from './posterior/FundusExam.vue';
import Dilation from './posterior/Dilation.vue';
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
        FundusExam,
        Dilation
    },
    data(){
        return{
            selectedTab:"dilation",
            tabs:[
                {en:'Fundus Exam',ar:'Fundus Exam',key:"fundusExam"},
                {en:'Dilation',ar:'Dilation',key:"dilation"},
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
.vision-test{
}
</style>