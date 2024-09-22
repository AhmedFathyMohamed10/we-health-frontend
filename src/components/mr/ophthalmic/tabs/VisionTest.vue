<template>
    <div class="vision-test my-3">
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
            <div v-show="selectedTab=='overRefraction'" class="col-12">
                <OverRefraction 
                    :v="v.overRefraction" 
                    :check_error="check_error.overRefraction?check_error.overRefraction:{}" 
                    :serializer_error="serializer_error.overRefraction?serializer_error.overRefraction:{}"
                />
            </div>
            <div v-show="selectedTab=='refraction'" class="col-12">
                <Refraction 
                    :v="v.refraction" 
                    :check_error="check_error.refraction?check_error.refraction:{}" 
                    :serializer_error="serializer_error.refraction?serializer_error.refraction:{}"
                />
            </div>
            <div v-show="selectedTab=='binoculor'" class="col-12">
                <Binoculor 
                    :v="v.binoculor" 
                    :check_error="check_error.binoculor?check_error.binoculor:{}" 
                    :serializer_error="serializer_error.binoculor?serializer_error.binoculor:{}"
                />
            </div>
            <div v-show="selectedTab=='vaCc'" class="col-12">
                <VaCc 
                    :v="v.vaCc" 
                    :check_error="check_error.vaCc?check_error.vaCc:{}" 
                    :serializer_error="serializer_error.vaCc?serializer_error.vaCc:{}"
                />
            </div>
            <div v-show="selectedTab=='vaSc'" class="col-12">
                <VaSc 
                    :v="v.vaSc" 
                    :check_error="check_error.vaSc?check_error.vaSc:{}" 
                    :serializer_error="serializer_error.vaSc?serializer_error.vaSc:{}"
                />
            </div>
            <div v-show="selectedTab=='lensometry'" class="col-12">
                <Lensometry 
                    :v="v.lensometry" 
                    :check_error="check_error.lensometry?check_error.lensometry:{}" 
                    :serializer_error="serializer_error.lensometry?serializer_error.lensometry:{}"
                />
            </div>
        </div>
    </div>
</template>
<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import OverRefraction from './vision/OverRefraction.vue';
import Refraction from './vision/Refraction.vue';
import Binoculor from './vision/Binoculor.vue';
import VaCc from './vision/VaCc.vue';
import VaSc from './vision/VaSc.vue';
import Lensometry from './vision/Lensometry.vue';
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
        OverRefraction,
        Refraction,
        Binoculor,
        VaCc,
        VaSc,
        Lensometry,
    },
    data(){
        return{
            selectedTab:"lensometry",
            tabs:[
                {en:'Over Refraction',ar:'Over Refraction',key:"overRefraction"},
                {en:'Refraction',ar:'Refraction',key:"refraction"},
                {en:'Binocular',ar:'Binocular',key:"binoculor"},
                {en:'VA cc',ar:'VA cc',key:"vaCc"},
                {en:'VA sc',ar:'VA sc',key:"vaSc"},
                {en:'Lensometry',ar:'Lensometry',key:"lensometry"},
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
.vision-test{
}
</style>