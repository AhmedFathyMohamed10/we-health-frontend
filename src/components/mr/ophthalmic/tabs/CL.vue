<template>
    <div class="contact-length my-3">
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
            <div v-show="selectedTab=='keratometry'" class="col-12">
                <Keratometry 
                    :v="v.keratometry" 
                    :check_error="check_error.keratometry?check_error.keratometry:{}" 
                    :serializer_error="serializer_error.keratometry?serializer_error.keratometry:{}"
                />
            </div>
            <div v-show="selectedTab=='fitting'" class="col-12">
                <Fitting 
                    :v="v.fitting" 
                    :check_error="check_error.fitting?check_error.fitting:{}" 
                    :serializer_error="serializer_error.fitting?serializer_error.fitting:{}"
                />
            </div>
        </div>
    </div>
</template>
<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";        
import Keratometry from './cl/Keratometry.vue';
import Fitting from './cl/Fitting.vue';
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
        Keratometry,
        Fitting
    },
    data(){
        return{
            selectedTab:"fitting",
            tabs:[
                {en:'Fitting',ar:'Fitting',key:"fitting"},
                {en:'Keratometry',ar:'Keratometry',key:"keratometry"},
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
.contact-length {
}
</style>