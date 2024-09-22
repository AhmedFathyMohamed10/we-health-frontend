<template>
  <div class="functional-evaluation">
    <Base>
        <div class="col-12">
                <div class="head d-flex justify-content-between">
                    <h4 class="mb-0">Functional Evaluation</h4>
                    <ResetButton @reset="reset"></ResetButton>   
                </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-xxl-4">
                <div class="d-flex">
                    <div class="row">
                        <h4>{{ $t('balance.title') }}</h4>
                        <div class="col-sm-6">
                            <h5 class="text-decoration-underline">{{ $t('balance.sitting.label') }}</h5>
                            <div class="form-group flex-grow-1">
                                <div v-for="(option,index) in rateOptions" :key="index+1+'si'" class="field-radiobutton d-flex align-items-center">
                                    <RadioButton 
                                        :id="index+1+'si'" name="option" :value="option.value" 
                                        v-model="functionalEvaluation.balance.sitting" 
                                    />
                                    <label class="form-label ms-2" :for="index+1+'si'">
                                        {{option.value}}
                                    </label>
                                </div>                        
                            </div>    
                        </div>              
                        <div class="col-sm-6">
                            <h5 class="text-decoration-underline">{{ $t('balance.standing.label') }}</h5>
                            <div class="form-group">
                                <div v-for="(option,index) in rateOptions" :key="index+1+'st'" class="field-radiobutton d-flex align-items-center">
                                    <RadioButton 
                                        :id="index+1+'st'" name="option" :value="option.value" 
                                        v-model="functionalEvaluation.balance.standing" 
                                    />
                                    <label class="form-label ms-2" :for="index+1+'st'">{{option.value}}</label>
                                </div>                        
                            </div>                
                        </div>          
                        <div class="col-sm-12">
                            <div class="form-group comment">
                                <label for="" class="form-label">{{$t('balance.comment.label')}}</label>
                                <input 
                                type="text" 
                                :placeholder="$t('balance.comment.placeholder')" 
                                v-model="functionalEvaluation.balance.comment"
                                class="form-control" 
                                :class="{
                                    'is-invalid':
                                    v.balance.comment.$error}"
                                >
                                <div v-if="! v.balance.comment.notContainsHtmlTags &&  v.balance.comment.$invalid" class="invalid-feedback">
                                        {{htmlTagsError($t('balance.comment.label'))}}
                                </div>
                                <div v-else-if="! v.balance.comment.minLength &&  v.balance.comment.$invalid" class="invalid-feedback">
                                        {{minLengthError($t('balance.comment.label'), v.balance.comment.$params.minLength.min)}}
                                </div>
                                <div v-else-if="! v.balance.comment.maxLength &&  v.balance.comment.$invalid" class="invalid-feedback">
                                        {{maxLengthError($t('balance.comment.label'), v.balance.comment.$params.maxLength.max)}}
                                </div>
                            </div>
                        </div>    
                    </div>
                    <Divider :alignment="'vertical'" v-if="screenWidth>767"></Divider>
                </div>
            </div>

            <div class="col-md-6 col-xxl-4">
                <div class="d-flex">
                    <div class="row">
                        <h4>{{ $t('coordination.title') }} ({{ $t('coordination.upperLimps.label') }}) </h4>
                        <div class="col-sm-6">
                            <h5 class="text-decoration-underline">{{ $t('coordination.upperLimps.right.label') }}</h5>
                            <div class="form-group">
                                <div v-for="(option,index) in rateOptions" :key="index+1+'right'" class="field-radiobutton d-flex align-items-center">
                                    <RadioButton 
                                        :id="index+1+'right'" name="option" :value="option.value" 
                                        v-model="functionalEvaluation.coordination.upperLimps.right" 
                                    />
                                    <label class="form-label ms-2" :for="index+1+'right'">{{option.value}}</label>
                                </div>                        
                            </div>                
                        </div>              
                        <div class="col-sm-6">
                            <h5 class="text-decoration-underline">{{ $t('coordination.upperLimps.left.label') }}</h5>
                            <div class="form-group">
                                <div v-for="(option,index) in rateOptions" :key="index+1+'left'" class="field-radiobutton d-flex align-items-center">
                                    <RadioButton 
                                        :id="index+1+'left'" name="option" :value="option.value" 
                                        v-model="functionalEvaluation.coordination.upperLimps.left" 
                                    />
                                    <label class="form-label ms-2" :for="index+1+'left'">{{option.value}}</label>
                                </div>                        
                            </div>                
                        </div>          
                        <div class="col-sm-12">
                            <div class="form-group comment">
                                <label for="" class="form-label">{{$t('coordination.comment.label')}}</label>
                                <input 
                                type="text" 
                                :placeholder="$t('coordination.comment.placeholder')" 
                                v-model="functionalEvaluation.coordination.upperLimps.comment"
                                class="form-control" 
                                :class="{
                                    'is-invalid':
                                    v.coordination.upperLimps.comment.$error}"
                                >
                                <div v-if="! v.coordination.upperLimps.comment.notContainsHtmlTags &&  v.coordination.upperLimps.comment.$invalid" class="invalid-feedback">
                                        {{htmlTagsError($t('coordination.comment.label'))}}
                                </div>
                                <div v-else-if="! v.coordination.upperLimps.comment.minLength &&  v.coordination.upperLimps.comment.$invalid" class="invalid-feedback">
                                        {{minLengthError($t('coordination.comment.label'), v.coordination.upperLimps.comment.$params.minLength.min)}}
                                </div>
                                <div v-else-if="! v.coordination.upperLimps.comment.maxLength &&  v.coordination.upperLimps.comment.$invalid" class="invalid-feedback">
                                        {{maxLengthError($t('coordination.comment.label'), v.coordination.upperLimps.comment.$params.maxLength.max)}}
                                </div>
                            </div>
                        </div>     
                    </div>
                    <Divider :alignment="'vertical'" v-if="screenWidth>1399"></Divider>
                </div>
            </div>
            <div class="col-md-6 col-xxl-4">
                <div class="row">
                    <h4>{{ $t('coordination.title') }} ({{ $t('coordination.lowerLimps.label') }}) </h4>
                    <div class="col-sm-6">
                        <h5 class="text-decoration-underline">{{ $t('coordination.lowerLimps.right.label') }}</h5>
                        <div class="form-group">
                            <div v-for="(option,index) in rateOptions" :key="index+1+'right'" class="field-radiobutton d-flex align-items-center">
                                <RadioButton 
                                    :id="index+1+'right'" name="option" :value="option.value" 
                                    v-model="functionalEvaluation.coordination.lowerLimps.right" 
                                />
                                <label class="form-label ms-2" :for="index+1+'right'">{{option.value}}</label>
                            </div>                        
                        </div>                
                    </div>              
                    <div class="col-sm-6">
                        <h5 class="text-decoration-underline">{{ $t('coordination.lowerLimps.left.label') }}</h5>
                        <div class="form-group">
                            <div v-for="(option,index) in rateOptions" :key="index+1+'left'" class="field-radiobutton d-flex align-items-center">
                                <RadioButton 
                                    :id="index+1+'left'" name="option" :value="option.value" 
                                    v-model="functionalEvaluation.coordination.lowerLimps.left" 
                                />
                                <label class="form-label ms-2" :for="index+1+'left'">{{option.value}}</label>
                            </div>                        
                        </div>                
                    </div> 
                    <div class="col-sm-12">
                        <div class="form-group comment">
                            <label for="" class="form-label">{{$t('coordination.comment.label')}}</label>
                            <input 
                            type="text" 
                            :placeholder="$t('coordination.comment.placeholder')" 
                            v-model="functionalEvaluation.coordination.lowerLimps.comment"
                            class="form-control" 
                            :class="{
                                'is-invalid':
                                v.coordination.lowerLimps.comment.$error }"
                            >
                            <div v-if="! v.coordination.lowerLimps.comment.notContainsHtmlTags &&  v.coordination.lowerLimps.comment.$invalid" class="invalid-feedback">
                                    {{htmlTagsError($t('coordination.comment.label'))}}
                            </div>
                            <div v-else-if="! v.coordination.lowerLimps.comment.minLength &&  v.coordination.lowerLimps.comment.$invalid" class="invalid-feedback">
                                    {{minLengthError($t('coordination.comment.label'), v.coordination.lowerLimps.comment.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.coordination.lowerLimps.comment.maxLength &&  v.coordination.lowerLimps.comment.$invalid" class="invalid-feedback">
                                    {{maxLengthError($t('coordination.comment.label'), v.coordination.lowerLimps.comment.$params.maxLength.max)}}
                            </div>
                        </div>
                    </div>            
                </div>                
            </div>
        </div>
        <Divider></Divider>
        <div class="row">
            <h4>{{ $t('gait.title') }}</h4>
            <div class="col-md-6 col-xxl-4">
                <div class="form-group frontal-plane">
                    <label for="" class="form-label">{{$t('gait.frontal.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('gait.frontal.placeholder')" 
                    v-model="functionalEvaluation.gait.frontal"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.gait.frontal.$error}"
                    >
                    <div v-if="! v.gait.frontal.notContainsHtmlTags &&  v.gait.frontal.$invalid" class="invalid-feedback">
                            {{htmlTagsError($t('gait.frontal.label'))}}
                    </div>
                    <div v-else-if="! v.gait.frontal.minLength &&  v.gait.frontal.$invalid" class="invalid-feedback">
                            {{minLengthError($t('gait.frontal.label'), v.gait.frontal.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.gait.frontal.maxLength &&  v.gait.frontal.$invalid" class="invalid-feedback">
                            {{maxLengthError($t('gait.frontal.label'), v.gait.frontal.$params.maxLength.max)}}
                    </div>
                </div>
            </div> 
            <div class="col-md-6 col-xxl-4">
                <div class="form-group sagittal-plane">
                    <label for="" class="form-label">{{$t('gait.sagittal.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('gait.sagittal.placeholder')" 
                    v-model="functionalEvaluation.gait.sagittal"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.gait.sagittal.$error }"
                    >
                    <div v-if="! v.gait.sagittal.notContainsHtmlTags &&  v.gait.sagittal.$invalid" class="invalid-feedback">
                            {{htmlTagsError($t('gait.sagittal.label'))}}
                    </div>
                    <div v-else-if="! v.gait.sagittal.minLength &&  v.gait.sagittal.$invalid" class="invalid-feedback">
                            {{minLengthError($t('gait.sagittal.label'), v.gait.sagittal.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.gait.sagittal.maxLength &&  v.gait.sagittal.$invalid" class="invalid-feedback">
                            {{maxLengthError($t('gait.sagittal.label'), v.gait.sagittal.$params.maxLength.max)}}
                    </div>
                </div>
            </div> 
        </div>
        <div class="row">
            <h4>{{ $t('gait.quality') }}</h4>
            <div class="col-sm-6 col-xxl-4">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <h5 class="text-decoration-underline">{{ $t('gait.safety.label') }}</h5>
                        <div class="form-group">
                            <div v-for="(option,index) in rateOptions" :key="index+1+'si'" class="field-radiobutton d-flex align-items-center">
                                <RadioButton 
                                    :id="index+1+'si'" name="option" :value="option.value" 
                                    v-model="functionalEvaluation.gait.safety.rate" 
                                />
                                <label class="form-label ms-2" :for="index+1+'si'">{{option.value}}</label>
                            </div>                        
                        </div>
                        <div class="form-group comment">
                            <label for="" class="form-label">{{$t('gait.comment.label')}}</label>
                            <input 
                            type="text" 
                            :placeholder="$t('gait.comment.placeholder')" 
                            v-model="functionalEvaluation.gait.safety.comment"
                            class="form-control" 
                            :class="{
                                'is-invalid':
                                v.gait.safety.comment.$error }"
                            >
                            <div v-if="! v.gait.safety.comment.notContainsHtmlTags &&  v.gait.safety.comment.$invalid" class="invalid-feedback">
                                    {{htmlTagsError($t('gait.comment.label'))}}
                            </div>
                            <div v-else-if="! v.gait.safety.comment.minLength &&  v.gait.safety.comment.$invalid" class="invalid-feedback">
                                    {{minLengthError($t('gait.comment.label'), v.gait.safety.comment.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.gait.safety.comment.maxLength &&  v.gait.safety.comment.$invalid" class="invalid-feedback">
                                    {{maxLengthError($t('gait.comment.label'), v.gait.safety.comment.$params.maxLength.max)}}
                            </div>
                        </div>                                
                    </div>
                    <Divider :alignment="'vertical'" v-if="screenWidth>575"></Divider>
                </div>
            </div>  
            <div class="col-sm-6 col-xxl-4">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <h5 class="text-decoration-underline">{{ $t('gait.cadence.label') }}</h5>
                        <div class="form-group">
                            <div v-for="(option,index) in rateOptions" :key="index+1+'si'" class="field-radiobutton d-flex align-items-center">
                                    <RadioButton 
                                        :id="index+1+'si'" name="option" :value="option.value" 
                                        v-model="functionalEvaluation.gait.cadence.rate" 
                                    />
                                    <label class="form-label ms-2" :for="index+1+'si'">{{option.value}}</label>
                            </div>                        
                        </div>
                        <div class="form-group comment">
                            <label for="" class="form-label">{{$t('gait.comment.label')}}</label>
                            <input 
                            type="text" 
                            :placeholder="$t('gait.comment.placeholder')" 
                            v-model="functionalEvaluation.gait.cadence.comment"
                            class="form-control" 
                            :class="{
                                'is-invalid':
                                v.gait.cadence.comment.$error }"
                            >
                            <div v-if="! v.gait.cadence.comment.notContainsHtmlTags &&  v.gait.cadence.comment.$invalid" class="invalid-feedback">
                                    {{htmlTagsError($t('gait.comment.label'))}}
                            </div>
                            <div v-else-if="! v.gait.cadence.comment.minLength &&  v.gait.cadence.comment.$invalid" class="invalid-feedback">
                                    {{minLengthError($t('gait.comment.label'), v.gait.cadence.comment.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.gait.cadence.comment.maxLength &&  v.gait.cadence.comment.$invalid" class="invalid-feedback">
                                    {{maxLengthError($t('gait.comment.label'), v.gait.cadence.comment.$params.maxLength.max)}}
                            </div>
                        </div>                                
                    </div>
                    <Divider :alignment="'vertical'" v-if="screenWidth>1399"></Divider>
                </div> 
            </div>  
            <div class="col-sm-6 col-xxl-4">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <h5 class="text-decoration-underline">{{ $t('gait.speed.label') }}</h5>
                        <div class="form-group">
                            <div v-for="(option,index) in rateOptions" :key="index+1+'si'" class="field-radiobutton d-flex align-items-center">
                                <RadioButton 
                                    :id="index+1+'si'" name="option" :value="option.value" 
                                    v-model="functionalEvaluation.gait.speed.rate" 
                                />
                                <label class="form-label ms-2" :for="index+1+'si'">{{option.value}}</label>
                            </div>                        
                        </div>
                        <div class="form-group comment">
                            <label for="" class="form-label">{{$t('gait.comment.label')}}</label>
                            <input 
                            type="text" 
                            :placeholder="$t('gait.comment.placeholder')" 
                            v-model="functionalEvaluation.gait.speed.comment"
                            class="form-control" 
                            :class="{
                                'is-invalid':
                                v.gait.speed.comment.$error }"
                            >
                            <div v-if="! v.gait.speed.comment.notContainsHtmlTags &&  v.gait.speed.comment.$invalid" class="invalid-feedback">
                                    {{htmlTagsError($t('gait.comment.label'))}}
                            </div>
                            <div v-else-if="! v.gait.speed.comment.minLength &&  v.gait.speed.comment.$invalid" class="invalid-feedback">
                                    {{minLengthError($t('gait.comment.label'), v.gait.speed.comment.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.gait.speed.comment.maxLength &&  v.gait.speed.comment.$invalid" class="invalid-feedback">
                                    {{maxLengthError($t('gait.comment.label'), v.gait.speed.comment.$params.maxLength.max)}}
                            </div>
                        </div>                                
                    </div>
                    <Divider :alignment="'vertical'" v-if="screenWidth>575 && screenWidth<1400"></Divider>
                </div>                
            </div>  
            <div class="col-sm-6 col-xxl-4">
                <h5 class="text-decoration-underline">{{ $t('gait.fatigue.label') }}</h5>
                <div class="form-group">
                    <div v-for="(option,index) in rateOptions" :key="index+1+'si'" class="field-radiobutton d-flex align-items-center">
                        <RadioButton 
                            :id="index+1+'si'" name="option" :value="option.value" 
                            v-model="functionalEvaluation.gait.fatigue.rate" 
                        />
                        <label class="form-label ms-2" :for="index+1+'si'">{{option.value}}</label>
                    </div>                        
                </div>
                <div class="form-group comment">
                    <label for="" class="form-label">{{$t('gait.comment.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('gait.comment.placeholder')" 
                    v-model="functionalEvaluation.gait.fatigue.comment"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.gait.fatigue.comment.$error}"
                    >
                    <div v-if="! v.gait.fatigue.comment.notContainsHtmlTags &&  v.gait.fatigue.comment.$invalid" class="invalid-feedback">
                            {{htmlTagsError($t('gait.comment.label'))}}
                    </div>
                    <div v-else-if="! v.gait.fatigue.comment.minLength &&  v.gait.fatigue.comment.$invalid" class="invalid-feedback">
                            {{minLengthError($t('gait.comment.label'), v.gait.fatigue.comment.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.gait.fatigue.comment.maxLength &&  v.gait.fatigue.comment.$invalid" class="invalid-feedback">
                            {{maxLengthError($t('gait.comment.label'), v.gait.fatigue.comment.$params.maxLength.max)}}
                    </div>
                </div>                                
            </div>   
        </div>   
        <div class="row">
            <div class="col-sm-6 col-xxl-4">
                <div class="form-group remarks">
                    <label for="" class="form-label">{{$t('gait.remarks.label')}}</label>
                    <textarea 
                    type="text" 
                    :placeholder="$t('gait.remarks.placeholder')" 
                    v-model="functionalEvaluation.gait.remarks"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.gait.remarks.$error  
                    }"
                    ></textarea>
                    <div v-if="! v.gait.remarks.notContainsHtmlTags &&  v.gait.remarks.$invalid" class="invalid-feedback">
                            {{htmlTagsError($t('gait.remarks.label'))}}
                    </div>
                    <div v-else-if="! v.gait.remarks.minLength &&  v.gait.remarks.$invalid" class="invalid-feedback">
                            {{minLengthError($t('gait.remarks.label'), v.gait.remarks.$params.minLength.min)}}
                    </div>
                    <div v-if="! v.gait.remarks.maxLength &&  v.gait.remarks.$invalid" class="invalid-feedback">
                            {{maxLengthError($t('gait.remarks.label'), v.gait.remarks.$params.maxLength.max)}}
                    </div>
                </div>                                
            </div> 
        </div>              
    </Base>
  </div>
</template>
<i18n src="@/lang/mr/physiotherapy/functionalEvaluation.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import Base from "@/components/global/utilities/Base.vue"
import ResetButton from "@/components/global/utilities/ResetButton.vue"

import Divider from "@/components/global/utilities/Divider.vue"
import functionalEvaluation from "@/mixins/mr/physiotherapy/options/functionalEvaluation"
///////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError} from "@/validation/errors";
import {minLength,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
// //////////////////////////////////////////////////////////
export default {
    mixins:[functionalEvaluation],
    components: {
        Base,
        ResetButton,
        Divider
    },
    props: {
    v: {
      type: Object,
      required:true
    },
    check_error: {
      type: Object,
    },
    serializer_error: {
      type: Object,
    },
  },
    data(){
        return {
            htmlTagsError,
            maxLengthError,
            minLengthError,
        }
    },
    computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters("detailsPhysiotherapy/physiotherapy", {
      getFunctionalEvaluation: "getFunctionalEvaluation",
    }),
    functionalEvaluation: {
      get() {
        return this.getFunctionalEvaluation;
      },
      set(value) {
        this.setFunctionalEvaluation(value);
      },
    },
  },
 
    methods:{
        ...mapActions("detailsPhysiotherapy/physiotherapy", [
            "setFunctionalEvaluation",
            "resetFunctionalEvaluation",
        ]),
        reset(){
          this.resetFunctionalEvaluation();
        },    
    },
}
</script>

<style>

</style>