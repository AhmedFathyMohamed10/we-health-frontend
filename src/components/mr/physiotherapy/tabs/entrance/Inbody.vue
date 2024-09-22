<template>
  <div class="inbody">
        <Base> 
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">{{$t('composition.label')}}</label>
                        <Dropdown 
                            v-model="selectedOption" 
                            :options="options" 
                            :optionLabel="locale" 
                            optionValue="key"
                            :placeholder="$t('composition.placeholder')" 
                        />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">{{$t('composition.intracellularWater.label')}}</label>
                        <input 
                            type="number" 
                            class="form-control" 
                            :placeholder="$t('composition.intracellularWater.placeholder')"  
                            v-model="inbody.composition.intracellularWater"
                        >

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">{{$t('composition.extracellularWater.label')}}</label>
                        <input 
                            type="number" 
                            class="form-control" 
                            :placeholder="$t('composition.extracellularWater.placeholder')"  
                            v-model="inbody.composition.extracellularWater"
                        >
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">{{$t('composition.protein.label')}}</label>
                        <input 
                            type="number" 
                            class="form-control" 
                            :placeholder="$t('composition.protein.placeholder')"  
                            v-model="inbody.composition.protein"
                        >
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">{{$t('composition.mineral.label')}}</label>
                        <input 
                            type="number" 
                            class="form-control" 
                            :placeholder="$t('composition.mineral.placeholder')"  
                            v-model="inbody.composition.mineral"
                        >
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-label">{{$t('composition.bodyFatMass.label')}}</label>
                        <input 
                            type="number" 
                            class="form-control" 
                            :placeholder="$t('composition.bodyFatMass.placeholder')"  
                            v-model="inbody.composition.bodyFatMass"
                        >
                    </div>
                </div>
            </div>
        </Base>
        <div class="row">
            <div class="col-12 my-2">
                <Base>   
                    <BodyComposition></BodyComposition>
                </Base>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="my-2">
                        <Base>
                            <MuscleAnalysis></MuscleAnalysis>
                        </Base>
                    </div>
                    <div class="my-2">
                        <Base>
                            <BodyHistory></BodyHistory>
                        </Base>
                    </div>
                    <div class="my-2">
                        <Base>
                            <MuscleAnalysis></MuscleAnalysis>
                        </Base>
                    </div>
                    <div class="my-2">
                        <Base>
                            <MuscleQuality></MuscleQuality>
                        </Base>
                    </div>
                </div>
                <div class="col-6">
                    <div class="my-2">
                        <Base>
                            <HealthScore></HealthScore>
                        </Base>
                    </div>
                </div>
            </div>
            <div class="my-2">
                <Base>
                    <SegmentalAnalysis></SegmentalAnalysis>
                </Base>
            </div>
        </div>
  </div>
</template>

<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/physiotherapy/inbody.json"></i18n>

<script>
import inbodyOptions from "@/mixins/mr/physiotherapy/options/inbodyOptions"
///////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue"
import BodyHistory from './inbody/BodyHistory.vue'
import MuscleQuality from './inbody/MuscleQuality.vue'
import HealthScore from './inbody/HealthScore.vue'
import SegmentalAnalysis from './inbody/SegmentalAnalysis.vue'
import BodyComposition from './inbody/BodyComposition.vue'
import MuscleAnalysis from './inbody/MuscleAnalysis.vue'

export default {
    mixins:[inbodyOptions],
    props:{
    check_error:{
        type:Object,
    },
    serializer_error:{
        type:Object,
    },
    },
    components:{
        Base,     
        BodyHistory,
        SegmentalAnalysis,
        MuscleQuality,
        HealthScore,
        BodyComposition,
        MuscleAnalysis,
    },
    data(){
        return{
            selectedOption:"bodyAnalysis",
        }
    },
    computed: {
        inbody() {
            return this.$store.getters["detailsPhysiotherapy/physiotherapy/getInbody"];
        },
    }, 
}
</script>
<style lang="scss" scoped>

</style>