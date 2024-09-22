<template>
    <div class="final-rx">
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
            <div v-show="selectedTab=='measurements'" class="col-12">
                <FinalRxChild 
                    :v="v.measurements" 
                    :check_error="check_error.measurements?check_error.measurements:{}" 
                    :serializer_error="serializer_error.measurements?serializer_error.measurements:{}"
                />
            </div>
            <div v-show="selectedTab=='pd'" class="col-12">
                <PD 
                    :v="v.pd" 
                    :check_error="check_error.pd?check_error.pd:{}" 
                    :serializer_error="serializer_error.pd?serializer_error.pd:{}"
                />
            </div>
            <div v-show="selectedTab=='recommendation'" class="col-12">
                <Recommendation 
                    :v="v.recommendation" 
                    :check_error="check_error.recommendation?check_error.recommendation:{}" 
                    :serializer_error="serializer_error.recommendation?serializer_error.recommendation:{}"
                />
            </div>
        </div>
    </div>
</template>
<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";           
import FinalRxChild from './final_rx/FinalRxChild.vue';
import PD from './final_rx/PD.vue';
import Recommendation from './final_rx/Recommendation.vue';
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
        FinalRxChild,
        PD,
        Recommendation,
    },
    data(){
        return {
            selectedTab:"measurements",
            tabs:[
                {en:'FinalRx',ar:'FinalRx',key:"measurements"},
                {en:'PD',ar:'PD',key:"pd"},
                {en:`Dr's Recommend`,ar:`Dr's Recommend`,key:"recommendation"},
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
.final-rx{
}
</style>