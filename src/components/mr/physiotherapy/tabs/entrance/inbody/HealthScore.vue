<template>
  <div class="health-score">
        <div class="row">
            <div class="col-12">
                <div class="total-score">
                    <h4 class="text-center mb-0">Health Score : <span class="text-success">88.0</span> / 100 Points</h4>
                </div>
            </div>
        </div>
        <Divider></Divider>
        <div class="row">
            <div class="col-8">
                <h4 class="">Body Balance Evaluation</h4>
                <table class="table table-borderless text-center">
                    <tbody>
                        <tr>
                            <td>Upper</td>
                            <td>Lower</td>
                            <td>Upper-Lower</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td v-for="option of balanceOptions" :key="option.key" class="align-middle">
                                <div class="field-radiobutton">
                                    <RadioButton 
                                        :id="option.key" name="option" 
                                        :value="option.key" v-model="balance.upper" disabled="disabled" 
                                    />
                                </div>  
                            </td>
                            <td class="align-middle">
                                <label class="form-label m-0">{{balanceOptions[0].name}}</label>
                            </td>
                        </tr>
                        <tr>
                            <td v-for="option of balanceOptions" :key="option.key" class="align-middle">
                                <div class="field-radiobutton">
                                    <RadioButton 
                                        :id="option.key" name="option" 
                                        :value="option.key" v-model="balance.lower" disabled="disabled" 
                                    />
                                </div>  
                            </td>
                            <td class="align-middle">
                                <label class="form-label m-0">{{balanceOptions[1].name}}</label>
                            </td>
                        </tr>
                        <tr>
                            <td v-for="option of balanceOptions" :key="option.key" class="align-middle">
                                <div class="field-radiobutton">
                                    <RadioButton 
                                        :id="option.key" name="option" 
                                        :value="option.key" v-model="balance.upperLower" disabled="disabled" 
                                    />
                                </div>  
                            </td>
                            <td class="align-middle">
                                <label class="form-label m-0">{{balanceOptions[2].name}}</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Divider></Divider>
        <div class="row">
            <div class="col-6">
                <div class="fitness">
                    <h4 class="">Fitness Parameters</h4>
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td>Basal Metabolic Rate</td>
                                <td><span class="text-success">1835 </span>kcal</td>
                            </tr>
                            <tr>
                                <td>Total Energy Expenditure </td>
                                <td><span class="text-success">2607 </span>kcal/d</td>
                            </tr>
                            <tr>
                                <td>Phase Angle (50KHz)</td>
                                <td><span class="text-success">7.5° </span></td>
                            </tr>
                            <tr>
                                <td>Fat-Free Mass Index</td>
                                <td><span class="text-success">22.9 </span>kg/m²</td>
                            </tr>
                            <tr>
                                <td>Skeletal Muscle Index</td>
                                <td><span class="text-success">13.0 </span>kg/m²</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-6">
                <div class="control">
                    <h4 class="">Control Guide</h4>
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td>Target Control</td>
                                <td><span class="text-success">76.4 </span>kg</td>
                            </tr>
                            <tr>
                                <td>Weight Control</td>
                                <td><span class="text-success">-6.7 </span>kg</td>
                            </tr>
                            <tr>
                                <td>Fat Control</td>
                                <td><span class="text-success">0.0 </span>kg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Divider></Divider>
        <div class="row">
            <div class="col-12">
                <div class="impedance">
                    <h4 class="">Impedance</h4>
                    <table class="table table-borderless text-center">
                        <tbody>
                            <tr>
                                <td></td>
                                <td>RA</td>
                                <td>LA</td>
                                <td>TR</td>
                                <td>RL</td>
                                <td>LL</td>
                            </tr>
                            <tr>
                                <td>5kHz</td>
                                <td><span class="text-success">248.8</span></td>
                                <td><span class="text-success">256.3</span></td>
                                <td><span class="text-success">19.8</span></td>
                                <td><span class="text-success">237.5</span></td>
                                <td><span class="text-success">236.4</span></td>
                            </tr>
                            <tr>
                                <td>20kHz</td>
                                <td><span class="text-success">248.8</span></td>
                                <td><span class="text-success">256.3</span></td>
                                <td><span class="text-success">19.8</span></td>
                                <td><span class="text-success">237.5</span></td>
                                <td><span class="text-success">236.4</span></td>
                            </tr>
                            <tr>
                                <td>50kHz</td>
                                <td><span class="text-success">248.8</span></td>
                                <td><span class="text-success">256.3</span></td>
                                <td><span class="text-success">19.8</span></td>
                                <td><span class="text-success">237.5</span></td>
                                <td><span class="text-success">236.4</span></td>
                            </tr>
                            <tr>
                                <td>100kHz</td>
                                <td><span class="text-success">248.8</span></td>
                                <td><span class="text-success">256.3</span></td>
                                <td><span class="text-success">19.8</span></td>
                                <td><span class="text-success">237.5</span></td>
                                <td><span class="text-success">236.4</span></td>
                            </tr>
                            <tr>
                                <td>250kHz</td>
                                <td><span class="text-success">248.8</span></td>
                                <td><span class="text-success">256.3</span></td>
                                <td><span class="text-success">19.8</span></td>
                                <td><span class="text-success">237.5</span></td>
                                <td><span class="text-success">236.4</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import Divider from '@/components/global/utilities/Divider.vue';
export default {
    components:{
        Divider
    },
    data(){
        return {
            healthScore: 88,
            balanceOptions: [
                {en: 'Balanced', ar: 'Balanced', key: 'balance'},
                {en: 'Slightly Unbalanced', ar: 'Slightly Unbalanced', key: 'slightlyUnbalanced'},
                {en: 'Extremely Unbalanced', ar: 'Extremely Unbalanced', key: 'extremelyUnbalanced'}
            ],
            selectedOption: 'balance',            
            balance: {
                upper:'balance',
                lower:"slightlyUnbalanced",
                upperLower:"extremelyUnbalanced",
            }

        }
    },
}
</script>

<style lang="scss" scoped>
.health-score{
    /deep/.p-radiobutton-box.p-highlight.p-disabled {
        opacity: 1;
    }
}
</style>