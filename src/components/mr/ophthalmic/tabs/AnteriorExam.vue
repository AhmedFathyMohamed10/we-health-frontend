<template>
    <div class="anteriorexam my-3">
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
            <div v-show="selectedTab=='tonometry'" class="col-12">
                <Tonometry 
                    :v="v.tonometry" 
                    :check_error="check_error.tonometry?check_error.tonometry:{}" 
                    :serializer_error="serializer_error.tonometry?serializer_error.tonometry:{}"
                />
            </div>
            <div v-show="selectedTab=='biomicroscopy'" class="col-12">
                <Biomicroscopy 
                    :v="v.biomicroscopy" 
                    :check_error="check_error.biomicroscopy?check_error.biomicroscopy:{}" 
                    :serializer_error="serializer_error.biomicroscopy?serializer_error.biomicroscopy:{}"
                />
            </div>
            <div v-show="selectedTab=='gonioscopy'" class="col-12">
                <Gonioscopy 
                    :v="v.gonioscopy" 
                    :check_error="check_error.gonioscopy?check_error.gonioscopy:{}" 
                    :serializer_error="serializer_error.gonioscopy?serializer_error.gonioscopy:{}"
                />
            </div>
        </div>
    </div>
</template>
<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";        
import Tonometry from './anterior/Tonometry.vue';
import Biomicroscopy from './anterior/Biomicroscopy.vue';
import Gonioscopy from './anterior/Gonioscopy.vue';
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
        Tonometry,
        Biomicroscopy,
        Gonioscopy,
    },
    data(){
        return{
            selectedTab:"gonioscopy",
            tabs:[
                {en:'Tonometry',ar:'Tonometry',key:"tonometry"},
                {en:'Biomicroscopy',ar:'Biomicroscopy',key:"biomicroscopy"},
                {en:'Gonioscopy',ar:'Gonioscopy',key:"gonioscopy"},
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
.vision-test{
}
</style>