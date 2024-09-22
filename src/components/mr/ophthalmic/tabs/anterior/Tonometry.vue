<template>
    <div class="anterior">
        <Base>
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t("tonometry.header") }}</h4>
                    <ResetButton @reset="reset"></ResetButton>
                </div>
            </div>
        <!-- Lens Type -->
        <div class="col-md-6">
            <div class="row">
                <CustomDropdown
                    v-model="tonometry.test"
                    :label="$t('tonometry.test.label')"
                    :options="testOptions"
                    :inputType="'text'"
                    :invalidSelection="
                    (
                        v.test.selection.$error
                    )||
                    (                  serializer_error.tonometry
                        ? serializer_error.tonometry.selection
                            ? serializer_error.tonometry.selection.length > 0
                            : false
                        : false)
                    "
                    :invalidOther="
                    (
                        v.test.other.$error
                    )||
                    (
                        serializer_error.tonometry
                        ? serializer_error.tonometry.other
                            ? serializer_error.tonometry.other.length > 0
                            : false
                        : false
                    )
                    "
                    >
                    <small v-if="v.test.other.$error && !v.test.other.notContainsHtmlTags" class="p-invalid">
                                {{htmlTagsError($t('tonometry.test.label'))}}
                    </small>
                    <div v-else-if="! v.test.other.minLength &&  v.test.other.$error" class="invalid-feedback">
                            {{minLengthError($t('tonometry.test.label'), v.test.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.test.other.maxLength &&  v.test.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('tonometry.test.label'), v.test.other.$params.maxLength.max)}}
                    </div>                 
                </CustomDropdown>
            </div>
            <div class="row">
                <CustomDropdown
                    v-model="tonometry.drug"
                    :label="$t('tonometry.drug.label')"
                    :options="drugOptions"
                    :inputType="'text'"
                    :invalidSelection="
                    (
                        v.drug.selection.$error
                    )||
                    (                  serializer_error.tonometry
                        ? serializer_error.tonometry.selection
                            ? serializer_error.tonometry.selection.length > 0
                            : false
                        : false)
                    "
                    :invalidOther="
                    (
                        v.drug.other.$error
                    )||
                    (
                        serializer_error.tonometry
                        ? serializer_error.tonometry.other
                            ? serializer_error.tonometry.other.length > 0
                            : false
                        : false
                    )
                    "
                    >
                    <small v-if="v.drug.other.$error && !v.drug.other.notContainsHtmlTags" class="p-invalid">
                                {{htmlTagsError($t('tonometry.drug.label'))}}
                    </small>
                    <div v-else-if="! v.drug.other.minLength &&  v.drug.other.$error" class="invalid-feedback">
                            {{minLengthError($t('tonometry.drug.label'), v.drug.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.drug.other.maxLength &&  v.drug.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('tonometry.drug.label'), v.drug.other.$params.maxLength.max)}}
                    </div>                 
                </CustomDropdown>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <label class="form-label">{{$t('tonometry.time.label')}}</label>
                </div>
                <div class="form-group">
                    <Calendar
                        :showTime="true" 
                        v-model="selectedDateTime"
                        hourFormat="12" 
                        :showIcon="true" :icon="'pi pi-clock'"  
                        :placeholder="$t('tonometry.time.placeholder')"
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
                        v-if="v.time.$error && !v.time.validDateTime"
                        >
                        {{timeDateError($t()) }}
                    </small>
                </div>
            </div>
        </div>
        <Divider></Divider>
        <div class="svg-wrapper">
            <img src="@/assets/mr/ophthalmic/entrance/pupils/eyes.svg" alt="" class="w-100">
        </div>
        <div class="eyes-labels w-100 d-flex justify-content-between">
            <div class="label-wrapper flex-grow-1 d-flex justify-content-center"><h3>{{$t('tonometry.eyesLabels.od.label')}}</h3></div>
            <div class="label-wrapper flex-grow-1 d-flex justify-content-center"><h3>{{$t('tonometry.eyesLabels.os.label')}}</h3></div>
        </div>
        <div class="input-group-wrapper row my-2">
            <div class="col-md-4">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="tonometry.od.tension"
                        :label="$t('tonometry.tension.label')"
                        :options="tensionOptions"
                        :invalid="
                            (v.od.tension.$error)||
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
                            v-if="v.od.tension.$error && !v.od.tension.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('tonometry.tension.label'))}}
                        </div>
                        <div v-else-if="! v.od.tension.minLength &&  v.od.tension.$error" class="invalid-feedback">
                                {{minLengthError($t('tonometry.tension.label'), v.od.tension.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.tension.maxLength &&  v.od.tension.$error" class="invalid-feedback">
                                {{maxLengthError($t('tonometry.tension.label'), v.od.tension.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <div class="col-sm-4 p-0">
                        <label class="form-label">{{$t('tonometry.pachymetry.label')}}</label>
                    </div>
                    <input 
                    type="text" 
                    :placeholder="$t('tonometry.pachymetry.placeholder')" 
                    v-model="tonometry.od.pachymetry"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.od.pachymetry.$error
                    }"
                    >
                    <div v-if="! v.od.pachymetry.notContainsHtmlTags &&  v.od.pachymetry.$error" class="invalid-feedback">
                            {{htmlTagsError($t('tonometry.pachymetry.label'))}}
                    </div>
                    <div v-else-if="! v.od.pachymetry.minLength &&  v.od.pachymetry.$error" class="invalid-feedback">
                            {{minLengthError($t('tonometry.pachymetry.label'), v.od.pachymetry.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.od.pachymetry.maxLength &&  v.od.pachymetry.$error" class="invalid-feedback">
                            {{maxLengthError($t('tonometry.pachymetry.label'), v.od.pachymetry.$params.maxLength.max)}}
                    </div>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="tonometry.od.pachCor"
                        :label="$t('tonometry.pachCor.label')"
                        :options="pachOptions"
                        :invalid="
                            (v.od.pachCor.$error)||
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
                            v-if="v.od.pachCor.$error && !v.od.pachCor.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('tonometry.pachCor.label'))}}
                        </div>
                        <div v-else-if="! v.od.pachCor.minLength &&  v.od.pachCor.$error" class="invalid-feedback">
                                {{minLengthError($t('tonometry.pachCor.label'), v.od.pachCor.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.pachCor.maxLength &&  v.od.pachCor.$error" class="invalid-feedback">
                                {{maxLengthError($t('tonometry.pachCor.label'), v.od.pachCor.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="tonometry.od.adjTn"
                        :label="$t('tonometry.adjTn.label')"
                        :options="adjOptions"
                        :invalid="
                            (v.od.adjTn.$error)||
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
                            v-if="v.od.adjTn.$error && !v.od.adjTn.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('tonometry.adjTn.label'))}}
                        </div>
                        <div v-else-if="! v.od.adjTn.minLength &&  v.od.adjTn.$error" class="invalid-feedback">
                                {{minLengthError($t('tonometry.adjTn.label'), v.od.adjTn.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.adjTn.maxLength &&  v.od.adjTn.$error" class="invalid-feedback">
                                {{maxLengthError($t('tonometry.adjTn.label'), v.od.adjTn.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <div class="col-md-2 d-flex justify-content-center gap-4">
                <div class="form-group">
                    <label for="" class="form-label d-none d-md-block invisible">cpy</label>
                    <button class="btn btn-icon rounded-circle btn-success me-2" @click="copyToOd">
                        <i v-if="screenWidth < 768" class="fa fa-angle-up fa-md"></i> 
                        <i v-else class="fa fa-angle-left fa-md"></i> 
                    </button>
                </div>
                <div class="form-group ">
                    <label for="" class="form-label d-none d-md-block invisible">cpy</label>
                    <button class="btn btn-icon rounded-circle btn-success" @click="copyToOs">
                        <i v-if="screenWidth < 768" class="fa fa-angle-down fa-md"></i> 
                        <i v-else class="fa fa-angle-right fa-md"></i> 
                    </button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="tonometry.os.tension"
                        :label="$t('tonometry.tension.label')"
                        :options="tensionOptions"
                        :invalid="
                            (v.os.tension.$error)||
                            (check_error.od?
                                (check_error.os.spherical?check_error.os.spherical.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.os.spherical?serializer_error.os.spherical.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.os.tension.$error && !v.os.tension.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('tonometry.tension.label'))}}
                        </div>
                        <div v-else-if="! v.os.tension.minLength &&  v.os.tension.$error" class="invalid-feedback">
                                {{minLengthError($t('tonometry.tension.label'), v.os.tension.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.tension.maxLength &&  v.os.tension.$error" class="invalid-feedback">
                                {{maxLengthError($t('tonometry.tension.label'), v.os.tension.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <div class="col-sm-4 p-0">
                        <label class="form-label">{{$t('tonometry.pachymetry.label')}}</label>
                    </div>
                    <input 
                    type="text" 
                    :placeholder="$t('tonometry.pachymetry.placeholder')" 
                    v-model="tonometry.os.pachymetry"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.os.pachymetry.$error 
                        
                    }"
                    >
                    <div v-if="! v.os.pachymetry.notContainsHtmlTags &&  v.os.pachymetry.$error" class="invalid-feedback">
                            {{htmlTagsError($t('tonometry.pachymetry.label'))}}
                    </div>
                    <div v-else-if="! v.os.pachymetry.minLength &&  v.os.pachymetry.$error" class="invalid-feedback">
                            {{minLengthError($t('tonometry.pachymetry.label'), v.os.pachymetry.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.os.pachymetry.maxLength &&  v.os.pachymetry.$error" class="invalid-feedback">
                            {{maxLengthError($t('tonometry.pachymetry.label'), v.os.pachymetry.$params.maxLength.max)}}
                    </div>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="tonometry.os.pachCor"
                        :label="$t('tonometry.pachCor.label')"
                        :options="pachOptions"
                        :invalid="
                            (v.os.pachCor.$error)||
                            (check_error.od?
                                (check_error.os.spherical?check_error.os.spherical.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.os.spherical?serializer_error.os.spherical.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.os.pachCor.$error && !v.os.pachCor.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('tonometry.pachCor.label'))}}
                        </div>
                        <div v-else-if="! v.os.pachCor.minLength &&  v.os.pachCor.$error" class="invalid-feedback">
                                {{minLengthError($t('tonometry.pachCor.label'), v.os.pachCor.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.pachCor.maxLength &&  v.os.pachCor.$error" class="invalid-feedback">
                                {{maxLengthError($t('tonometry.pachCor.label'), v.os.pachCor.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="tonometry.os.adjTn"
                        :label="$t('tonometry.adjTn.label')"
                        :options="adjOptions"
                        :invalid="
                            (v.os.adjTn.$error)||
                            (check_error.od?
                                (check_error.os.spherical?check_error.os.spherical.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.os.spherical?serializer_error.os.spherical.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.os.adjTn.$error && !v.os.adjTn.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('tonometry.adjTn.label'))}}
                        </div>
                        <div v-else-if="! v.os.adjTn.minLength &&  v.os.adjTn.$error" class="invalid-feedback">
                                {{minLengthError($t('tonometry.adjTn.label'), v.os.adjTn.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.adjTn.maxLength &&  v.os.adjTn.$error" class="invalid-feedback">
                                {{maxLengthError($t('tonometry.adjTn.label'), v.os.adjTn.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>
        <Divider></Divider>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="form-label">{{$t('tonometry.note.label')}}</label>
                    <textarea
                        v-model="tonometry.note" 
                        :placeholder="$t('tonometry.note.placeholder')" 
                        class="form-control"
                        :class="{
                            'is-invalid':
                            (v.note.$error)
                            ||
                            (serializer_error.note?serializer_error.note.length>0:false)
                        }" 
                    ></textarea>
                    <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('tonometry.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('tonometry.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('tonometry.note.label'), v.note.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
        </div>
    </Base>
    </div>
</template>
<i18n src="@/lang/mr/ophthalmic/anterior.json"></i18n>
<script>
//////////////////////////////////////////
import Base from '@/components/global/utilities/Base.vue'
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import CustomDropMenu from "@/components/global/custom/CustomDropMenu.vue";
import Divider from '@/components/global/utilities/Divider.vue'
import ResetButton from "@/components/global/utilities/ResetButton.vue";
////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,numericError,timeDateError} from '@/validation/errors'
///////////////////////////////////////////////////////
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import anteriorOptions from "@/mixins/mr/ophthalmic/options/anteriorOptions"
import { mapGetters } from "vuex";
export default {
    mixins:[measurementsOptions,anteriorOptions],
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
        CustomDropMenu,
        CustomDropdown,
        ResetButton,
        Divider
    },
    data(){
        return{
            selectedDateTime: null,
        }
    },
    //////////////////////////////////////////
    computed: {
        ...mapGetters("detailsOphthalmic/ophthalmic", ["getTonometry"]),
        tonometry: {
            get() {
                return this.getTonometry;
            }, 
            set(value) {
                this.$store.dispatch("detailsOphthalmic/ophthalmic/setTonometry", value);
            },
        },
        
        /////////////////////////////////////
        formattedDateTime() {
            if (this.selectedDateTime)  {
                  if(this.$moment(this.selectedDateTime).isValid()){
                      return this.$moment(this.selectedDateTime, 'YYYY-MM-DD hh:mm:ss', true).format('YYYY-MM-DD hh:mm:ss A');
                   }
                   else{
                     return this.selectedDateTime;
                   }
             } 
            else {
                return '';
            }
       },

    },
    /////////////////////////
    watch:{
        formattedDateTime(newVal, oldVal){
            this.tonometry.time = newVal;
        },
    },
    //////////////////////////////////
    methods:{
        htmlTagsError,
        minLengthError,
        maxLengthError,
        numericError,
        timeDateError,
        ///////////////////////////
          reset() {
            this.tonometry = {
                test: {
                    selection: null,
                    other: "",
                },
                drug: {
                    selection: null,
                    other: "",
                },
                time: null,
                os: {
                    tension: "",
                    pachymetry: null,
                    pachCor: "",
                    adjTn: "",
                },
                od: {
                    tension: "",
                    pachymetry: null,
                    pachCor: "",
                    adjTn: "",
                },
                note: "",
            };
            this.v.$reset(); 
            this.selectedDateTime = "";  
         },

        /////////////////////////////////////
        copyToOd(){
                this.tonometry.od=JSON.parse(JSON.stringify(this.tonometry.os));
        },
        copyToOs(){
            this.tonometry.os=JSON.parse(JSON.stringify(this.tonometry.od));
        },
    },
}
</script>
<style lang="scss" scoped>
.tonometry{

}
</style>