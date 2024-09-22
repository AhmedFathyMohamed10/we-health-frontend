<template>
<div class="recommendation">
        <Base>
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t("recommendation.header") }}</h4>
                    <ResetButton @reset="reset"></ResetButton>
                </div>
            </div>
            <div class="row my-4">
                <!-- Lens Type -->
                <div class="col-md-6 col-xl-4">
                    <div class="form-group">
                        <CustomDropdown
                            v-model="recommendation.lensType"
                            :label="$t('recommendation.lensType.label')"
                            :options="lensTypeOptions"
                            :inputType="'text'"
                            :invalidSelection="v.lensType.selection.$error"
                            :invalidOther="v.lensType.other.$error "
                            >
                            <div v-if="v.lensType.other.$error && !v.lensType.other.notContainsHtmlTags" class="invalid-feedback">
                                        {{htmlTagsError($t('recommendation.lensType.label'))}}
                            </div>
                            <div v-else-if="! v.lensType.other.minLength &&  v.lensType.other.$error" class="invalid-feedback">
                                    {{minLengthError($t('recommendation.lensType.label'), v.lensType.other.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.lensType.other.maxLength &&  v.lensType.other.$error" class="invalid-feedback">
                                    {{maxLengthError($t('recommendation.lensType.label'), v.lensType.other.$params.maxLength.max)}}
                            </div>                 
                        </CustomDropdown>
                    </div>
                </div>
            </div>
        <!-- Od Row -->
        <div class="row">
            <h4>{{ $t('measurementsLabels.od') }}</h4>
            <!-- Spherical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="recommendation.od.spherical"
                        :label="$t('measurementsLabels.spherical')"
                        :options="sphericalOptions"
                        :excludeColumn="0"
                        :invalid="
                            (v.od.spherical.$error)||
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
                            v-if="v.od.spherical.$error && !v.od.spherical.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.spherical'))}}
                        </div>
                        <div v-else-if="! v.od.spherical.minLength &&  v.od.spherical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.spherical'), v.od.spherical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.spherical.maxLength &&  v.od.spherical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.spherical'), v.od.spherical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Cylindrical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Cylindrical -->
                    <CustomDropMenu 
                        v-model="recommendation.od.cylindrical"
                        :label="$t('measurementsLabels.cylindrical')"
                        :options="cylindricalOptions"
                        :excludeColumn="0"
                        :invalid="
                            (v.od.cylindrical.$error)||
                            (check_error.od?
                                (check_error.od.cylindrical?check_error.od.cylindrical.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.cylindrical?serializer_error.od.cylindrical.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.od.cylindrical.$error && !v.od.cylindrical.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.cylindrical'))}}
                        </div>
                        <div v-else-if="! v.od.cylindrical.minLength &&  v.od.cylindrical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.cylindrical'), v.od.cylindrical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.cylindrical.maxLength &&  v.od.cylindrical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.cylindrical'), v.od.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Axis -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Axis -->
                    <CustomDropMenu 
                        v-model="recommendation.od.axis"
                        :label="$t('measurementsLabels.axis')"
                        :options="axisOptions"
                        :invalid="
                            (v.od.axis.$error)||
                            (check_error.od?
                                (check_error.od.axis?check_error.od.axis.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.axis?serializer_error.od.axis.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.od.axis.$error && !v.od.axis.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.axis'))}}
                        </div>
                        <div v-else-if="! v.od.axis.minLength &&  v.od.axis.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.axis'), v.od.axis.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.axis.maxLength &&  v.od.axis.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.axis'), v.od.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Add -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Add -->
                    <CustomDropMenu 
                        v-model="recommendation.od.add"
                        :label="$t('measurementsLabels.add')"
                        :options="addOptions"
                        :invalid="
                            (v.od.add.$error)||
                            (check_error.od?
                                (check_error.od.add?check_error.od.add.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.add?serializer_error.od.add.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.od.add.$error && !v.od.add.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.add'))}}
                        </div>
                        <div v-else-if="! v.od.add.minLength &&  v.od.add.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.add'), v.od.add.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.add.maxLength &&  v.od.add.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.add'), v.od.add.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>
        <!-- Copy Buttons -->
        <div class="row mt-4">
            <div class="col-md-12 col-xxl-8" >
                <div class="d-flex justify-content-center align-items-center">
                    <div class="form-group mb-0 ">
                        <button class="btn btn-icon rounded-circle btn-success me-2" @click="copyToOd">
                            <i class="fa fa-angle-up fa-md"></i> 
                        </button>
                    </div>
                    <div class="form-group mb-0">
                        <button class="btn btn-icon rounded-circle btn-success" @click="copyToOs">
                            <i class="fa fa-angle-down fa-md"></i>
                        </button>
                    </div>
                </div>
            </div>                    
        </div>    
        <!-- Os Row -->
        <div class="row">
            <h4>{{ $t('measurementsLabels.os') }}</h4>
            <!-- Spherical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="recommendation.os.spherical"
                        :label="$t('measurementsLabels.spherical')"
                        :options="sphericalOptions"
                        :excludeColumn="0"
                        :invalid="
                            (v.os.spherical.$error)||
                            (check_error.os?
                                (check_error.os.spherical?check_error.os.spherical.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.spherical?serializer_error.os.spherical.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.os.spherical.$error && !v.os.spherical.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.spherical'))}}
                        </div>
                        <div v-else-if="! v.os.spherical.minLength &&  v.os.spherical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.spherical'), v.os.spherical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.spherical.maxLength &&  v.os.spherical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.spherical'), v.os.spherical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Cylindrical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Cylindrical -->
                    <CustomDropMenu 
                        v-model="recommendation.os.cylindrical"
                        :label="$t('measurementsLabels.cylindrical')"
                        :options="cylindricalOptions"
                        :excludeColumn="0"
                        :invalid="
                            (v.os.cylindrical.$error)||
                            (check_error.os?
                                (check_error.os.cylindrical?check_error.os.cylindrical.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.cylindrical?serializer_error.os.cylindrical.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.os.cylindrical.$error && !v.os.cylindrical.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.cylindrical'))}}
                        </div>
                        <div v-else-if="! v.os.cylindrical.minLength &&  v.os.cylindrical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.cylindrical'), v.os.cylindrical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.cylindrical.maxLength &&  v.os.cylindrical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.cylindrical'), v.os.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Axis -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Axis -->
                    <CustomDropMenu 
                        v-model="recommendation.os.axis"
                        :label="$t('measurementsLabels.axis')"
                        :options="axisOptions"
                        :invalid="
                            (v.os.axis.$error)||
                            (check_error.os?
                                (check_error.os.axis?check_error.os.axis.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.axis?serializer_error.os.axis.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.os.axis.$error && !v.os.axis.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.axis'))}}
                        </div>
                        <div v-else-if="! v.os.axis.minLength &&  v.os.axis.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.axis'), v.os.axis.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.axis.maxLength &&  v.os.axis.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.axis'), v.os.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Add -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Add -->
                    <CustomDropMenu 
                        v-model="recommendation.os.add"
                        :label="$t('measurementsLabels.add')"
                        :options="addOptions"
                        :invalid="
                            (v.os.add.$error)||
                            (check_error.os?
                                (check_error.os.add?check_error.os.add.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.add?serializer_error.os.add.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.os.add.$error && !v.os.add.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.add'))}}
                        </div>
                        <div v-else-if="! v.os.add.minLength &&  v.os.add.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.add'), v.os.add.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.add.maxLength &&  v.os.add.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.add'), v.os.add.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>        
        <!-- Note -->
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="form-label">{{$t('recommendation.note.label')}}</label>
                    <textarea 
                        v-model="recommendation.note" 
                        :placeholder="$t('recommendation.note.placeholder')" 
                        class="form-control"
                        :class="{
                            'is-invalid':
                            (v.note.$error)
                            ||
                            (serializer_error.note?serializer_error.note.length>0:false)
                        }" 
                    ></textarea>
                    <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('recommendation.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('recommendation.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('recommendation.note.label'), v.note.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
        </div>
        </Base>
</div>
</template>
<i18n src="@/lang/mr/ophthalmic/finalRx.json"></i18n>
<i18n src="@/lang/mr/ophthalmic/measurements.json"></i18n>
<script>
import Base from '@/components/global/utilities/Base.vue';
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import CustomDropMenu from "@/components/global/custom/CustomDropMenu.vue";
import {htmlTagsError,minLengthError,maxLengthError,numericError} from '@/validation/errors'
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import finalRxOptions from "@/mixins/mr/ophthalmic/options/finalRxOptions"
import { mapGetters } from "vuex";
export default {
    mixins:[measurementsOptions,finalRxOptions],
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
    },
    data() {
        return {

        };
    },
    //////////////////////////////
    computed: {
        ...mapGetters("detailsOphthalmic/ophthalmic", ["getRecommendation"]),
        recommendation: {
            get() {
                return this.getRecommendation;
            },
            set(value) {
                this.$store.dispatch("detailsOphthalmic/ophthalmic/setRecommendation", value);
            },
        }
    },
    //////////////////////////////

    methods:{
        htmlTagsError,
        minLengthError,
        maxLengthError,
        numericError,
        /////////////////////////////////
        reset() {
            this.recommendation = {
                os: {
                    spherical: "",
                    cylindrical: "",
                    axis: "",
                    add: "",
                },
                od: {
                    spherical: "",
                    cylindrical: "",
                    axis: "",
                    add: "",
                },
                lensType: {
                    selection: null,
                    other: "",
                },
                note: '',
            },
            this.v.$reset();   
          
         },
        
        ////////////////////////////////
        copyToOd(){
                this.recommendation.od=JSON.parse(JSON.stringify(this.recommendation.os));
        },
        copyToOs(){
            this.recommendation.os=JSON.parse(JSON.stringify(this.recommendation.od));
        },
    },
}
</script>

<style>

</style>