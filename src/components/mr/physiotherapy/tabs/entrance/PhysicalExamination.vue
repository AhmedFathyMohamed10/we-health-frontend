<template>
  <div class="physical-examination">
        <skin
            :v="v.skin"
            :check_error="check_error"
            :serializer_error="serializer_error"
        />
        <Sensation
            :v="v.sensation"
            :check_error="check_error"
            :serializer_error="serializer_error"
        />
        <Reflexes
            :v="v.reflexes"
            :check_error="check_error"
            :serializer_error="serializer_error"
        />



        <!-- <Divider></Divider> -->
    <!-- <Base> -->
    <!-- </Base> -->
  </div>
</template>
<script>
// import Base from "@/components/global/utilities/Base.vue"
// import Divider from "@/components/global/utilities/Divider.vue"    
import Skin from './physical-examination/Skin.vue'
import Sensation from './physical-examination/Sensation.vue'
import Reflexes from './physical-examination/Reflexes.vue'
export default {
    props: {
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
        // Base,
        // Divider,
        Skin,
        Sensation,
        Reflexes,
    },
    data(){
        return{

        }
    },
}
</script>

<style>

</style>