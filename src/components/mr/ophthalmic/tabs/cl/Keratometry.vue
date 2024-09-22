<template>
  <div class="keratometry">
    <Base>
        <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t("keratometry.header") }}</h4>
                    <ResetButton @reset="reset"></ResetButton>
                </div>
        </div>
        <div class="svg-wrapper">
            <img src="@/assets/mr/ophthalmic/entrance/pupils/eyes.svg" alt="" class="w-100">
        </div>
        <div class="eyes-labels w-100 d-flex justify-content-between">
            <div class="label-wrapper flex-grow-1 d-flex justify-content-center"><h3>{{$t('measurementsLabels.od')}}</h3></div>
            <div class="label-wrapper flex-grow-1 d-flex justify-content-center"><h3>{{$t('measurementsLabels.os')}}</h3></div>
        </div>
        <div class="input-group-wrapper row my-2">
            <div class="col-md-5">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="keratometry.od.powerH"
                        :label="$t('measurementsLabels.powerH')"
                        :options="powerHOptions"
                        :invalid="
                            (v.od.powerH.$error)||
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
                            v-if="v.od.powerH.$error && !v.od.powerH.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.powerH'))}}
                        </div>
                        <div v-else-if="! v.od.powerH.minLength &&  v.od.powerH.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.powerH'), v.od.powerH.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.powerH.maxLength &&  v.od.powerH.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.powerH'), v.od.powerH.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="keratometry.od.powerV"
                        :label="$t('measurementsLabels.powerV')"
                        :options="powerVOptions"
                        :invalid="
                            (v.od.powerV.$error)||
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
                            v-if="v.od.powerV.$error && !v.od.powerV.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.powerV'))}}
                        </div>
                        <div v-else-if="! v.od.powerV.minLength &&  v.od.powerV.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.powerV'), v.od.powerV.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.powerV.maxLength &&  v.od.powerV.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.powerV'), v.od.powerV.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="keratometry.od.meridian"
                        :label="$t('measurementsLabels.meridian')"
                        :options="meridianOptions"
                        :invalid="
                            (v.od.meridian.$error)||
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
                            v-if="v.od.meridian.$error && !v.od.meridian.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.meridian'))}}
                        </div>
                        <div v-else-if="! v.od.meridian.minLength &&  v.od.meridian.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.meridian'), v.od.meridian.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.meridian.maxLength &&  v.od.meridian.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.meridian'), v.od.meridian.$params.maxLength.max)}}
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
            <div class="col-md-5">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="keratometry.os.powerH"
                        :label="$t('measurementsLabels.powerH')"
                        :options="powerHOptions"
                        :invalid="
                            (v.os.powerH.$error)||
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
                            v-if="v.os.powerH.$error && !v.os.powerH.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.powerH'))}}
                        </div>
                        <div v-else-if="! v.os.powerH.minLength &&  v.os.powerH.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.powerH'), v.os.powerH.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.powerH.maxLength &&  v.os.powerH.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.powerH'), v.os.powerH.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="keratometry.os.powerV"
                        :label="$t('measurementsLabels.powerV')"
                        :options="powerVOptions"
                        :invalid="
                            (v.os.powerV.$error)||
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
                            v-if="v.os.powerV.$error && !v.os.powerV.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.powerV'))}}
                        </div>
                        <div v-else-if="! v.os.powerV.minLength &&  v.os.powerV.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.powerV'), v.os.powerV.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.powerV.maxLength &&  v.os.powerV.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.powerV'), v.os.powerV.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="keratometry.os.meridian"
                        :label="$t('measurementsLabels.meridian')"
                        :options="meridianOptions"
                        :invalid="
                            (v.os.meridian.$error)||
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
                            v-if="v.os.meridian.$error && !v.os.meridian.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.meridian'))}}
                        </div>
                        <div v-else-if="! v.os.meridian.minLength &&  v.os.meridian.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.meridian'), v.os.meridian.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.meridian.maxLength &&  v.os.meridian.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.meridian'), v.os.meridian.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>
        <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">{{$t('keratometry.note.label')}}</label>
                        <textarea
                            v-model="keratometry.note" 
                            :placeholder="$t('keratometry.note.placeholder')" 
                            class="form-control"
                            :class="{
                                'is-invalid':
                                (v.note.$error)
                                ||
                                (serializer_error.note?serializer_error.note.length>0:false)
                            }" 
                        ></textarea>
                        <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('keratometry.note.label'))}}
                        </div>
                        <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                                {{minLengthError($t('keratometry.note.label'), v.note.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                                {{maxLengthError($t('keratometry.note.label'), v.note.$params.maxLength.max)}}
                        </div> 
                    </div>
                </div>
        </div>
    </Base>
  </div>
</template>
<i18n src="@/lang/mr/ophthalmic/measurements.json"></i18n>
<i18n src="@/lang/mr/ophthalmic/cl.json"></i18n>
<script>
import Base from '@/components/global/utilities/Base.vue'
import CustomDropMenu from "@/components/global/custom/CustomDropMenu.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue"; 
////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,numericError} from '@/validation/errors'
//////////////////////////////////////////////////////////
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import clOptions from "@/mixins/mr/ophthalmic/options/clOptions"
import { mapGetters } from "vuex";
////////////////////////////////////////

export default {
    mixins:[measurementsOptions,clOptions],
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
    data(){
        return {
        }
    },
    ////////////////////////////
   computed: {
    ...mapGetters("detailsOphthalmic/ophthalmic", ["getKeratometry"]),
    keratometry: {
      get() {
        return this.getKeratometry;
      },
      set(value) {
        this.$store.dispatch("detailsOphthalmic/ophthalmic/setKeratometry", value);
      },
    },
   },
    /////////////////////////////////////
    methods:{
        htmlTagsError,
        minLengthError,
        maxLengthError,
        numericError,
         ///////////////////////////
         reset() {
            this.keratometry={
                os: {
                    powerH: "",
                    powerV: "",
                    meridian: "",
                },
                od: {
                    powerH: "",
                    powerV: "",
                    meridian: "",
                },
                note: "",
            },
            this.v.$reset();   
         },
        copyToOd(){
            this.keratometry.od=JSON.parse(JSON.stringify(this.keratometry.os));
        },
        copyToOs(){
            this.keratometry.os=JSON.parse(JSON.stringify(this.keratometry.od));
        },
    },
}
</script>

<style>

</style>