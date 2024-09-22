<template>
  <div class="body-composition">
    <h4>Body Composition Analysis</h4>
        <div class="body-composition-table-wrapper my-2">
            <table class="table table-bordered text-center body-composition-table">
                <tbody>
                    <tr>
                        <td rowspan="7" scope="col" class="custom-width">
                            <div class="img-wrapper">
                                <CompositionChart :composition="inbody.composition" :weight="weight"></CompositionChart>
                                <!-- <img src="@/assets/mr/physiotherapy/entrance-test/inbody/body.svg" alt="" class="w-100 h-100"> -->
                            </div>
                        </td>
                    </tr>
                    <tr class="custom-linear-gd">
                        <td class="align-middle">Compartments</td>
                        <td class="align-middle">Values</td>
                        <td class="align-middle">TBW</td>
                        <td class="align-middle">SLM</td>
                        <td class="align-middle">FFM</td>
                        <td class="align-middle">Weight</td>
                        <td class="align-middle custom-linear-gd">Normal Range</td>
                    </tr>
                    <tr>
                        <td class="align-middle">{{$t('composition.intracellularWater.label')}}</td>
                        <td class="align-middle">{{inbody.composition.intracellularWater}}</td>

                        <td class="align-middle result" rowspan="2">
                            <div v-if="
                            inbody.composition.intracellularWater &&
                            inbody.composition.extracellularWater
                            ">
                                {{ calculateTBW() }}
                            </div>
                        </td>
                        <td class="align-middle result" rowspan="3">
                            <div v-if="
                            inbody.composition.intracellularWater &&
                            inbody.composition.extracellularWater &&
                            inbody.composition.protein
                            ">
                                {{  calculateSLM() }}
                            </div>
                        </td>
                        <td class="align-middle result" rowspan="4">
                            <div v-if="
                            inbody.composition.intracellularWater &&
                            inbody.composition.extracellularWater &&
                            inbody.composition.protein &&
                            inbody.composition.mineral
                            ">
                                {{ calculateFFM() }}
                            </div>
                        </td>
                        <td class="align-middle result" rowspan="5">
                            <div v-if="
                            inbody.composition.intracellularWater &&
                            inbody.composition.extracellularWater &&
                            inbody.composition.protein &&
                            inbody.composition.mineral &&
                            inbody.composition.bodyFatMass
                            ">
                                {{  calculateWeight()  }}
                            </div>
                        </td>
                        <td class="align-middle custom-linear-gd" >22.7 : 27.7</td>
                    </tr>
                    <tr>
                        <td class="align-middle">{{$t('composition.extracellularWater.label')}}</td>
                        <td class="align-middle">{{inbody.composition.extracellularWater}}</td>

                        <td class="align-middle custom-linear-gd" >13.9 : 17.0</td>
                    </tr>
                    <tr>
                        <td class="align-middle">{{$t('composition.protein.label')}}</td>
                        <td class="align-middle">{{inbody.composition.protein}}</td>
                        <td colspan="4"></td>
                        <td class="align-middle custom-linear-gd">9.4 : 13.5</td>
                    </tr>
                    <tr>
                        <td class="align-middle">{{$t('composition.mineral.label')}}</td>
                        <td class="align-middle">{{inbody.composition.mineral}}</td>
                        <td colspan="4"></td>
                        <td class="align-middle custom-linear-gd" >2.7 : 4.6</td>
                    </tr>
                    <tr>
                        <td class="align-middle">{{$t('composition.bodyFatMass.label')}}</td>
                        <td class="align-middle">{{inbody.composition.bodyFatMass}}</td>
                        <td colspan="4"></td>
                        <td class="align-middle custom-linear-gd" >8.3 : 16.6</td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
</template>
<i18n src="@/lang/mr/physiotherapy/inbody.json"></i18n>

<script>
import CompositionChart from './CompositionChart.vue'
export default {
    components:{
        CompositionChart,
    },
    computed: {
        inbody() {
            return this.$store.getters["detailsPhysiotherapy/physiotherapy/getInbody"];
        },
        weight(){
            return this.calculateWeight();
        }
    }, 
    methods:{
        calculateTBW(){
            return parseInt(this.inbody.composition.intracellularWater) + parseInt(this.inbody.composition.extracellularWater)
        },
        calculateSLM(){
            return this.calculateTBW() + parseInt(this.inbody.composition.protein)
        },
        calculateFFM(){
            return this.calculateSLM() + parseInt(this.inbody.composition.mineral)
        },
        calculateWeight(){
            return this.calculateFFM() + parseInt(this.inbody.composition.bodyFatMass)
        },
    }
}
</script>

<style lang="scss" scoped>
.body-composition-table-wrapper{
    width: 100%;
    overflow: auto;
    .body-composition-table{
        .custom-linear-gd{
            background: $success;
            background: linear-gradient(90deg, rgba($success,0.7) 0%, rgba($white,1) 100%);
        }
        .result{
            color: $success;
            font-weight: bold;
            font-size: 1rem;
            text-shadow: $shadow-gray;
        }
        td{
            border: 2px solid $secondary !important;
            font-weight: bold;
        }
        td:not(.custom-width){
            width: 10rem;
        }
        .img-wrapper{
            width: 150px;
            height: 275px;
        }
    }
}
</style>