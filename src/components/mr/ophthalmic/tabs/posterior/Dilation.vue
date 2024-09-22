<template>
    <div class="dilation">
        <Base>
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t("dilation.header") }}</h4>
                    <ResetButton @reset="reset"></ResetButton>
                </div>
        </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <CustomDropdown
                        v-model="dilation.drug"
                        :label="$t('dilation.drug.label')"
                        :options="drugOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.drug.selection.$error
                        )||
                        (serializer_error.drug
                            ? serializer_error.drug.selection
                                ? serializer_error.drug.selection.length > 0
                                : false
                            : false)
                        "
                        :invalidOther="
                        (
                            v.drug.other.$error
                        )||
                        (
                            serializer_error.drug
                            ? serializer_error.drug.other
                                ? serializer_error.drug.other.length > 0
                                : false
                            : false
                        )
                        "
                        >
                        <div v-if="v.drug.other.$error && !v.drug.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('dilation.drug.label'))}}
                        </div>
                        <div v-else-if="! v.drug.other.minLength &&  v.drug.other.$error" class="invalid-feedback">
                                {{minLengthError($t('dilation.drug.label'), v.drug.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.drug.other.maxLength &&  v.drug.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('dilation.drug.label'), v.drug.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>
                    <div class="form-group">
                            <label class="form-label my-0 ms-2" for="binary">{{$t('dilation.eye.label')}}</label>
                            <Dropdown 
                                v-model="dilation.eye" 
                                :options="eyeOptions" 
                                 optionLabel="value" 
                                :placeholder="$t('dilation.eye.placeholder')"
                            />
                            
                    </div>
                    <div class="form-group">
                        <div class="field-checkbox d-flex align-items-center">
                            <Checkbox id="binary" v-model="dilation.informedPt" :binary="true" />
                            <label class="form-label my-0 ms-2" for="binary">{{$t('dilation.informedPt.label')}}</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <CustomDropMenu 
                            v-model="dilation.quantity"
                            :label="$t('dilation.quantity.label')"
                            :options="quantityOptions"
                            :invalid="
                                (v.quantity.$error)||
                                (check_error.od?
                                    (check_error.od.spherical?check_error.od.spherical.length>0:false):false
                                )
                                ||
                                (serializer_error.od?
                                    (serializer_error.od.spherical?serializer_error.od.spherical.length>0:false):false
                                )
                            " 
                        >                    
                            <div 
                                v-if="v.quantity.$error && !v.quantity.notContainsHtmlTags"  class="invalid-feedback">
                                {{htmlTagsError($t('dilation.quantity.label'))}}
                            </div>
                            <div v-else-if="! v.quantity.minLength &&  v.quantity.$error" class="invalid-feedback">
                                    {{minLengthError($t('dilation.quantity.label'), v.quantity.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.quantity.maxLength &&  v.quantity.$error" class="invalid-feedback">
                                    {{maxLengthError($t('dilation.quantity.label'), v.quantity.$params.maxLength.max)}}
                            </div> 
                        </CustomDropMenu>
                    </div>
                   
                    <div class="form-group">
                        <label class="form-label my-0 ms-2" for="binary">{{$t('dilation.time.label')}}</label>
                        <Calendar 
                            :showTime="true" 
                            v-model="selectedTime"
                            :timeOnly="true" 
                            :placeholder="$t('dilation.time.placeholder')"
                             hourFormat="12" 
                             :timeFormat="timeFormat"
                            :class="{
                            'p-invalid':
                        v.time.$error ||
                            (serializer_error.time
                                ? serializer_error.time.length > 0
                                : false),
                        }"
                        />
                         <small
                            class="p-invalid"
                            v-if=" v.time.$error && !v.time.validTime"
                            >
                            {{timeError($t()) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="form-label">{{$t('dilation.note.label')}}</label>
                    <textarea
                        v-model="dilation.note" 
                        :placeholder="$t('dilation.note.placeholder')" 
                        class="form-control"
                        :class="{
                            'is-invalid':
                            (v.note.$error)
                            ||
                            (serializer_error.note?serializer_error.note.length>0:false)
                        }" 
                    ></textarea>
                    <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('dilation.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('dilation.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('dilation.note.label'), v.note.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            </div>
        </Base>
    </div>
</template>
<i18n src="@/lang/mr/ophthalmic/posterior.json"></i18n>
<i18n src="@/lang/mr/ophthalmic/measurements.json"></i18n>

<script>
import Base from '@/components/global/utilities/Base.vue'
import CustomDropMenu from "@/components/global/custom/CustomDropMenu.vue";
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,numericError,timeError} from '@/validation/errors'
//////////////////////////////////////////////////////////
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import posteriorOptions from "@/mixins/mr/ophthalmic/options/posteriorOptions"
import { mapGetters } from "vuex";
export default {
    mixins:[measurementsOptions,posteriorOptions],
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
        Base,
        CustomDropdown,
        CustomDropMenu,
        ResetButton,
    },
    data(){
        return {
            selectedTime: null,
            timeFormat: 'HH:mm',
         
        }
    },

    ///////////////////////////////////
    computed: {
        ...mapGetters("detailsOphthalmic/ophthalmic", ["getDilation"]),
        dilation: {
            get() {
                return this.getDilation;
            },
            set(value) {
                this.$store.dispatch("detailsOphthalmic/ophthalmic/setDilation", value);
            },
        },
         /////////////////////////
        formattedTime() {
            if (this.selectedTime) {
                if(this.$moment(this.selectedTime, this.timeFormat).isValid()){
                    return this.$moment(this.selectedTime, this.timeFormat,true ).format('hh:mm A');
                }
                else {
                    return this.selectedTime ;
                } 
            } 
            else {
                return '';
            }
        },

    },
    //////////////////////////////
    watch:{
        formattedTime(newVal, oldVal) {
           this.dilation.time = newVal;

        }, 
    },
  /////////////////////////////
    methods:{
        htmlTagsError,
        minLengthError,
        maxLengthError,
        numericError,
        timeError,
        ////////////////////////////////
        reset() {
            this.dilation = {
                drug: {
                    selection: null,
                    other: "",
                },
                eye: null,
                quantity: "",
                time: null,
                informedPt: false,
                note: "",
            },
            this.v.$reset(); 
            this.selectedTime = null;  
         },
    },
}
</script>

<style scoped>
 
</style>
