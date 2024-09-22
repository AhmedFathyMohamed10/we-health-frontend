<template>
    <div class="total-serum-bilirubin">
        <Base>
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                  <h4>{{ $t("Bilirubin  Chart") }}</h4>
                  <ResetButton @reset="reset"></ResetButton>
                </div>
              </div>
            <div class="row my-2">
                <div class="col-md-6 col-xxl-3">
                    <div class="form-group">
                        <label class="form-label" >{{$t('serum.label')}}</label>
                        <input 
                            type="number"
                            class="form-control" 
                            :class="{'is-invalid':v.serum.$invalid  && v.serum.$anyDirty && v.serum.$anyError}" 
                            v-model="bilirubinChart.serum" 
                            :placeholder="$t('serum.placeholder')"
                            step="0.01" 
                        >
                        <div class="invalid-feedback" v-if="!v.serum.decimal && v.serum.$error">
                            {{ inputError($t('serum.label')) }}
                        </div>
                        <div class="invalid-feedback" v-else-if="!v.serum.minValue && v.serum.$error">
                            {{ minValueError($t('serum.label'),v.serum.$params.minValue.min) }}
                        </div>
                        <div class="invalid-feedback" v-else-if="!v.serum.maxValue && v.serum.$error">
                            {{ maxValueError($t('serum.label'),v.serum.$params.maxValue.max) }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xxl-3">
                    <div class="form-group">
                        <label class="form-label" >{{$t('comment.label')}}</label>
                            <input 
                                type="text"
                                class="form-control" 
                                :class="{'is-invalid':v.comment.$invalid  && v.comment.$anyDirty && v.comment.$anyError}" 
                                v-model="bilirubinChart.comment" 
                                :placeholder="$t('comment.placeholder')"
                                step="0.01" 
                            >
                            <div class="invalid-feedback" v-if="!v.comment.notContainsHtmlTags && v.comment.$error">
                                {{ htmlTagsError($t('comment.label')) }}
                            </div>
                            <div class="invalid-feedback" v-else-if="!v.comment.minLength && v.comment.$error">
                                {{ minLengthError($t('comment.label'),v.comment.$params.minLength.min) }}
                            </div>
                            <div class="invalid-feedback" v-else-if="!v.comment.maxLength && v.comment.$error">
                                {{ maxLengthError($t('comment.label'),v.comment.$params.maxLength.max) }}
                            </div>
                    </div>
                </div>
                <div class="col-md-6 col-xxl-1">
                    <AddButton @add="addToChart"></AddButton>
                </div>
            </div>         
        </Base>
        <div class="row">
            <div class="col-xxl-6 my-2" v-if="displayChart">
                <Base>
                    <div class="chart-header d-flex justify-content-between flex-wrap">                    
                        <h4 class="mb-0 fw-bold">Total Serum Bilirubin Chart</h4>
                        <button 
                            class="btn btn-icon rounded-circle btn-default" 
                            title="window-maximize" 
                            @click.prevent="displayMaximizableChart=true">
                            <i class="pi pi-window-maximize"></i>
                        </button>                    
                    </div>            
                    <Chart type="line" :data="serumLookUp" :options="serumLinearOptions" />
                </Base>
            </div>
            <div class="col-xxl-6 my-2" v-if="displayChart">
                <Base>
                    <div class="chart-history">
                        <h4 class="fw-bold">History</h4> 
                        <div class="row">
                            <div class="col-4">
                                <label class="text-decoration-underline fw-bold">Result</label>
                            </div>
                            <div class="col-4">
                                <label class="text-decoration-underline fw-bold">Time</label>
                            </div>
                            <div class="col-4">
                                <label class="text-decoration-underline fw-bold">Comment</label>
                            </div>
                        </div>                        
                    </div>
                    <div class="chart-history-records">
                        <div class="row" 
                            v-for="(record,index) in serumLookUp.datasets[0].data" :key="index">
                            <div class="col-4">
                                <label>{{ record.y }}</label>
                            </div>
                            <div class="col-4">
                                <label>{{ new Date().toLocaleTimeString() }}</label>
                            </div>
                            <div class="col-4">
                                <label>{{ record.comment }}</label>
                            </div>
                        </div>
                    </div> 
                </Base>
            </div>
        </div>
        <Dialog 
            :visible.sync="displayMaximizableChart" 
            :containerStyle="{width: '90vw'}" 
            :maximizable="true" 
            :modal="true"
            :closable="true"
        >
            <Chart type="line" :data="serumLookUp" :options="serumLinearOptions" />
            <template #footer>
                <div class="invisible">Footer</div>
            </template>
        </Dialog>             
    </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/pediatric/bilirubinChart.json"></i18n>

<script>
import { mapActions, mapGetters } from "vuex";
import Base from "@/components/global/utilities/Base.vue"
import AddButton from "@/components/global/utilities/AddButton.vue"
import { decimal ,minValue,maxValue,minLength,maxLength } from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
import {inputError,minValueError,maxValueError,htmlTagsError,minLengthError,maxLengthError} from "@/validation/errors";
import BilirubinChartOptions from '@/mixins/mr/pediatric/options/BilirubinChartsOptions';
import ResetButton from "@/components/global/utilities/ResetButton.vue";
export default {
    mixins: [BilirubinChartOptions],
    props: {
        v: {
            type: Object,
        },
    },
    components:{
        Base,
        AddButton,
        ResetButton,
    },
    data(){
        return {     
            ////////// == needed from backend in step 2 as user data == /////////////
            gender: {
                english: "male",
                arabic: "male"
            },
            age:12, // => in hours
            ////////////////////////////////////////////////////////////////////////
            // bilirubinChart:{
            //     serum: null,
            //     comment: null,
            // },
            displayChart:false,
            displayMaximizableChart:false,
            inputError,
            minValueError,
            maxValueError,
            htmlTagsError,
            minLengthError,
            maxLengthError,
        }
    },
    // validations:{
    //     bilirubinChart:{
    //         serum:{
    //             decimal,
    //             minValue:minValue(1),
    //             maxValue:maxValue(220),
    //         },
    //         comment: {
    //             minLength: minLength(1),
    //             maxLength: maxLength(255),
    //             notContainsHtmlTags(value) {
    //                 return notContainsHtmlTags(value);
    //             },
    //         }
    //     }
    // },
    // watch: {
    //     bilirubinChart: {
    //         deep: true,
    //         handler(newValue, oldValue) {
    //             this.setBilirubinChart(newValue);
    //         },
    //     },
    // },
    computed: {
         bilirubinChart: {
            get() {
                return this.$store.getters["detailsPediatric/pediatric/bilirubinChart"];
            },
            set(value) {
                this.$store.dispatch("detailsPediatric/pediatric/setBilirubinChart", value);
            },
        },
        
        },
        
    methods:{
     
         resetForm() {
            this.bilirubinChart.serum = null
            this.bilirubinChart.comment = null
              
           
            
        },
        reset() {
            this.resetForm();
            this.v.$reset();

        }, 
        addToChart(){
            this.v.$touch();
            if(!this.v.$invalid){
                if(this.age > 0 && this.age <= 144){
                    if(this.age && this.bilirubinChart.serum){
                        this.displayChart=true;
                        this.serumLookUp.datasets[0].data.push({x:this.age+=5,y:this.bilirubinChart.serum,comment:this.bilirubinChart.comment});
                       
                    }
                }
            }
        },      
    },
}
</script>
<style lang="scss" scoped>
.total-serum-bilirubin{
    .base {
        .chart-history-records{
            max-height: 310px ;
            overflow-x: hidden ;
        }
    }
}
/deep/.p-chart canvas {
    max-width:100% !important;
    min-height:400px !important;
}
</style>