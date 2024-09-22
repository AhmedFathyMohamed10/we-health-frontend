<template>
<div class="pd">
    <Base>
        <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t("pd.header") }}</h4>
                    <ResetButton @reset="reset"></ResetButton>
                </div>
            </div>
        <!-- Od Row -->
        <div class="row">
            <h4>{{ $t('measurementsLabels.od') }}</h4>
            <!-- Spherical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="pd.od.spherical"
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
                            v-if="v.od.spherical.$error && !v.od.spherical.notContainsHtmlTags"  class="invalid-feedback">
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
                        v-model="pd.od.cylindrical"
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
                            v-if="v.od.cylindrical.$error && !v.od.cylindrical.notContainsHtmlTags" class="invalid-feedback">
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
        </div>
        <!-- Copy Buttons -->
        <div class="row mt-4">
            <div class="col-md-6 col-xxl-4" >
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
                        v-model="pd.os.spherical"
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
                            v-if="v.os.spherical.$error && !v.os.spherical.notContainsHtmlTags"  class="invalid-feedback">
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
                        v-model="pd.os.cylindrical"
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
                            v-if="v.os.cylindrical.$error && !v.os.cylindrical.notContainsHtmlTags" class="invalid-feedback">
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
        </div>
        <!-- Note -->
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="form-label">{{$t('pd.note.label')}}</label>
                    <textarea 
                        v-model="pd.note" 
                        :placeholder="$t('pd.note.placeholder')" 
                        class="form-control"
                        :class="{
                            'is-invalid':
                            (v.note.$error)
                            ||
                            (serializer_error.note?serializer_error.note.length>0:false)
                        }" 
                    ></textarea>
                    <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pd.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('pd.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('pd.note.label'), v.note.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
        </div>
    </Base>
</div>
</template>
<i18n src="@/lang/mr/ophthalmic/measurements.json"></i18n>
<i18n src="@/lang/mr/ophthalmic/finalRx.json"></i18n>
<script>
import Base from '@/components/global/utilities/Base.vue';
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import CustomDropMenu from "@/components/global/custom/CustomDropMenu.vue";
import {htmlTagsError,minLengthError,maxLengthError,numericError} from '@/validation/errors'
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import { mapGetters } from "vuex";
export default {
mixins:[measurementsOptions],
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
    ResetButton,
},
data() {
    return {
    };
},
//////////////////////////////////////
computed: {
        ...mapGetters("detailsOphthalmic/ophthalmic", ["getPd"]),
        pd: {
            get() {
                return this.getPd;
            },
            set(value) {
                this.$store.dispatch("detailsOphthalmic/ophthalmic/setPd", value);
            },
        }
    },
    ////////////////////////////////////////////
methods:{
    htmlTagsError,
    minLengthError,
    maxLengthError,
    numericError,
    ////////////////////////////
    reset() {
        this.pd = {
            os: {
                spherical: "",
                cylindrical: "",
            },
            od: {
                spherical: "",
                cylindrical: "",
            },
            note: "",
        },
            this.v.$reset();   
          
         },
        
    
    //////////////////////////////
    copyToOd(){
            this.pd.od=JSON.parse(JSON.stringify(this.pd.os));
    },
    copyToOs(){
        this.pd.os=JSON.parse(JSON.stringify(this.pd.od));
    },
},
}
</script>

<style>

</style>