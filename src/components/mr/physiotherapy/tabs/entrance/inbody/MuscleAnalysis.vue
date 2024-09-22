<template>
  <div class="muscle-analysis">
    <h4>Muscle - Fat Analysis</h4>
    <div class="muscle-table-wrapper my-2">
        <table class="table table-sm table-bordered text-center muscle-table">
            <thead>
                <tr>   
                    <th scope="col">#</th>
                    <th scope="col"><i class="fa fa-sort-desc"></i></th>
                    <th scope="col"><i class="fa fa-minus"></i></th>
                    <th scope="col" colspan="3" class="custom-width"><i class="fa fa-sort-asc"></i></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="align-middle">{{$t('weight')}}</td>
                    <td class="align-middle" colspan="5">
                        <div class="w-100 h-100 mb-2">
                            <img src="@/assets/mr/physiotherapy/entrance-test/inbody/ruler2.svg" alt="" class="w-100 h-100">
                        </div>
                        <div class="progress">
                            <div 
                                v-if="weightPercentage>20"
                                class="progress-bar bg-danger-gradient" 
                                role="progressbar" 
                                style="width:20%" 
                                aria-valuenow="10" 
                                aria-valuemin="10" 
                                aria-valuemax="100"
                            >
                            </div>
                            <div
                                v-if="weightPercentage<=20"
                                class="progress-bar bg-danger-gradient" 
                                role="progressbar" 
                                :style="`width:${weightPercentage}%`" 
                                aria-valuenow="10" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >
                            {{ weight +'lbs' }}
                            </div>
                            <div
                                v-if="weightPercentage>40"
                                class="progress-bar bg-success-gradient" 
                                role="progressbar" 
                                style="width:20%" 
                                aria-valuenow="20" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >
                            </div>
                            <div
                                v-if="weightPercentage<=40 && weightPercentage>20"
                                class="progress-bar bg-success-gradient" 
                                role="progressbar" 
                                :style="`width:${weightPercentage-20}%`" 
                                aria-valuenow="0" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >
                            {{ weight +'lbs' }}
                            </div>
                            <div  
                                v-if="weightPercentage>40"
                                class="progress-bar bg-danger-gradient" 
                                role="progressbar" 
                                :style="`width:${weightPercentage-40}%`" 
                                :aria-valuenow="`${weightPercentage-40}`" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >
                            {{ weight +'lbs' }}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="align-middle">{{$t('SMM')}}</td>
                    <td class="align-middle" colspan="5">
                        <div class="w-100 h-100 mb-2">
                            <img src="@/assets/mr/physiotherapy/entrance-test/inbody/ruler2.svg" alt="" class="w-100 h-100">
                        </div>
                        <div class="progress">
                            <div 
                                v-if="weightPercentage>20"
                                class="progress-bar bg-danger-gradient" 
                                role="progressbar" 
                                style="width:20%" 
                                aria-valuenow="10" 
                                aria-valuemin="10" 
                                aria-valuemax="100"
                            >
                            </div>
                            <div
                                v-if="weightPercentage<=20"
                                class="progress-bar bg-danger-gradient" 
                                role="progressbar" 
                                :style="`width:${weightPercentage}%`" 
                                aria-valuenow="10" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >
                            {{ weight +'lbs' }}
                            </div>
                            <div
                                v-if="weightPercentage>40"
                                class="progress-bar bg-success-gradient" 
                                role="progressbar" 
                                style="width:20%" 
                                aria-valuenow="20" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >
                            </div>
                            <div
                                v-if="weightPercentage<=40 && weightPercentage>20"
                                class="progress-bar bg-success-gradient" 
                                role="progressbar" 
                                :style="`width:${weightPercentage-20}%`" 
                                aria-valuenow="0" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >
                            {{ weight +'lbs' }}
                            </div>
                            <div  
                                v-if="weightPercentage>40"
                                class="progress-bar bg-danger-gradient" 
                                role="progressbar" 
                                :style="`width:${weightPercentage-40}%`" 
                                :aria-valuenow="`${weightPercentage-40}`" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >
                            {{ weight +'lbs' }}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="align-middle">{{$t('Body Fat Mass')}}</td>
                    <td class="align-middle" colspan="5">
                        <div class="w-100 h-100 mb-2">
                            <img src="@/assets/mr/physiotherapy/entrance-test/inbody/ruler2.svg" alt="" class="w-100 h-100">
                        </div>
                        <div class="progress">
                            <div 
                                v-if="weightPercentage>20"
                                class="progress-bar bg-danger-gradient" 
                                role="progressbar" 
                                style="width:20%" 
                                aria-valuenow="10" 
                                aria-valuemin="10" 
                                aria-valuemax="100"
                            >
                            </div>
                            <div
                                v-if="weightPercentage<=20"
                                class="progress-bar bg-danger-gradient" 
                                role="progressbar" 
                                :style="`width:${weightPercentage}%`" 
                                aria-valuenow="10" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >
                            {{ weight +'lbs' }}
                            </div>
                            <div
                                v-if="weightPercentage>40"
                                class="progress-bar bg-success-gradient" 
                                role="progressbar" 
                                style="width:20%" 
                                aria-valuenow="20" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >
                            </div>
                            <div
                                v-if="weightPercentage<=40 && weightPercentage>20"
                                class="progress-bar bg-success-gradient" 
                                role="progressbar" 
                                :style="`width:${weightPercentage-20}%`" 
                                aria-valuenow="0" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >
                            {{ weight +'lbs' }}
                            </div>
                            <div  
                                v-if="weightPercentage>40"
                                class="progress-bar bg-danger-gradient" 
                                role="progressbar" 
                                :style="`width:${weightPercentage-40}%`" 
                                :aria-valuenow="`${weightPercentage-40}`" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                            >
                            {{ weight +'lbs' }}
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            weight:180, 
        }
    },
    computed:{
        weightPercentage(){
            // 225 is the total length of the ruler divided by 15 step each is 15cm
            // 55 is substituted to start from origin 0
            return (this.weight-55)/225*100
        },
    },
}
</script>

<style lang="scss" scoped>
.progress-bar{
    border-radius: 0;
}
.muscle-table-wrapper{
    max-width: 100%;
    overflow: auto;
    .muscle-table{
        th,td{
            width: 20%;
        }
        .custom-width{
            width: 60%;
        }
    }
}
</style>