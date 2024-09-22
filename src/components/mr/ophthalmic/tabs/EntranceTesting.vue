<template>
    <div class="entrance-testing my-3">
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
            <div v-show="selectedTab=='pupils'" class="col-12">
                <Pupils 
                    :v="v.pupils" 
                    :check_error="check_error.pupils?check_error.pupils:{}" 
                    :serializer_error="serializer_error.pupils?serializer_error.pupils:{}"
                />
            </div>
            <div v-show="selectedTab=='dominance'" class="col-12">
                <Dominance 
                    :v="v.dominance" 
                    :check_error="check_error.dominance?check_error.dominance:{}" 
                    :serializer_error="serializer_error.dominance?serializer_error.dominance:{}"
                />
            </div>
            <div v-show="selectedTab=='eom'"  class="col-12">
                <EOM 
                    :v="v.eom" 
                    :check_error="check_error.eom?check_error.eom:{}" 
                    :serializer_error="serializer_error.eom?serializer_error.eom:{}"
                />
            </div>
            <div v-show="selectedTab=='coverTest'"  class="col-12">
                <CoverTest 
                    :v="v.coverTest" 
                    :check_error="check_error.coverTest?check_error.coverTest:{}" 
                    :serializer_error="serializer_error.coverTest?serializer_error.coverTest:{}"
                />
            </div>
            <div  v-show="selectedTab=='visualField'"  class="col-12">
                <VisualField 
                    :v="v.visualField" 
                    :check_error="check_error.visualField?check_error.visualField:{}" 
                    :serializer_error="serializer_error.visualField?serializer_error.visualField:{}"
                />
            </div>

            <div v-show="selectedTab=='colourVision'" class="col-12">
                <ColorVision 
                    :v="v.colourVision"
                    :check_error="check_error.colourVision?check_error.colourVision:{}" 
                    :serializer_error="serializer_error.colourVision?serializer_error.colourVision:{}"
                />
            </div>
            <div v-show="selectedTab=='stereopsis'" class="col-12">
                <Stereopsis 
                    :v="v.stereopsis" 
                    :check_error="check_error.stereopsis?check_error.stereopsis:{}" 
                    :serializer_error="serializer_error.stereopsis?serializer_error.stereopsis:{}"
                />
            </div>
        </div>
    </div>
</template>
<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";        
import Pupils from './entrance/Pupils.vue';
import Dominance from './entrance/Dominance.vue';
import EOM from './entrance/EOM.vue';
import CoverTest from './entrance/CoverTest.vue';
import VisualField from './entrance/VisualField.vue';
import ColorVision from './entrance/ColorVision.vue';
import Stereopsis from './entrance/Stereopsis.vue';
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
        Pupils,
        Dominance,
        EOM,
        CoverTest,
        VisualField,
        ColorVision,
        Stereopsis,
    },
    data(){
        return{
            selectedTab:"dominance",
            tabs:[
                {en:'Pupils',ar:'Pupils',key:"pupils"},
                {en:'Dominance',ar:'Dominance',key:"dominance"},
                {en:'EOM',ar:'EOM',key:"eom"},
                {en:'Cover Test',ar:'Cover Test',key:"coverTest"},
                {en:'Visual Field',ar:'Visual Field',key:"visualField"},
                {en:'Color Vision',ar:'Color Vision',key:"colourVision"},
                {en:'Stereopsis',ar:'Stereopsis',key:"stereopsis"},
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
.entrance-testing{
}
</style>