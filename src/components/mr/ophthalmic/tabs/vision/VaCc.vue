<template>
<div class="vacc">
        <Base>
        <div class="row">
            <div class="row">
            <div class="col-12 d-flex justify-content-between">
                <h4>{{ $t("vaCc.header") }}</h4>
                <ResetButton @reset="reset"></ResetButton>
            </div>
        </div>
            <!-- Aided Acuities -->
            <div class="col-md-6 col-xl-4">
                <h4>{{ $t('vaCc.heading') }}</h4>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.aide')}}</label>
                    <CustomDropMenu
                    v-model="vaCc.aide"
                    :options="ratioOptions"
                    :inputType="'text'"
                    :invalid="
                        (v.aide.$error)||
                        (check_error.aide?
                            (check_error.aide?check_error.aide.length>0:false):false
                        )
                        ||
                        (serializer_error.aide?
                            (serializer_error.aide?serializer_error.aide.length>0:false):false
                        )
                    " 
                    >                    
                    <div 
                        v-if="v.aide.$error && !v.aide.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('vaCc.aide'))}}
                    </div>
                    <div v-else-if="! v.aide.minLength &&  v.aide.$error" class="invalid-feedback">
                            {{minLengthError($t('vaCc.aide'), v.aide.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.aide.maxLength &&  v.aide.$error" class="invalid-feedback">
                            {{maxLengthError($t('vaCc.aide'), v.aide.$params.maxLength.max)}}
                    </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.scale')}}</label>
                    <CustomDropMenu
                    v-model="vaCc.scale"
                    :options="dvaOptions"
                    :inputType="'text'"
                    :invalid="
                        (v.scale.$error)||
                        (check_error.scale?
                            (check_error.scale?check_error.scale.length>0:false):false
                        )
                        ||
                        (serializer_error.scale?
                            (serializer_error.scale?serializer_error.scale.length>0:false):false
                        )
                    " 
                    >                    
                    <div 
                        v-if="v.scale.$error && !v.scale.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('vaCc.scale'))}}
                    </div>
                    <div v-else-if="! v.scale.minLength &&  v.scale.$error" class="invalid-feedback">
                            {{minLengthError($t('vaCc.scale'), v.scale.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.scale.maxLength &&  v.scale.$error" class="invalid-feedback">
                            {{maxLengthError($t('vaCc.scale'), v.scale.$params.maxLength.max)}}
                    </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <h4 class="text-center">{{$t('measurementsLabels.dva')}}</h4>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.od')}}</label>
                    <CustomDropMenu 
                    :options="dvaOptions" 
                    v-model="vaCc.od.dva"
                    :inputType="'text'"
                    :invalid="
                            (v.od.dva.$error)||
                            (check_error.od?
                                (check_error.od.dva?check_error.od.dva.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.dva?serializer_error.od.dva.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.od.dva.$error && !v.od.dva.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('vaCc.od'))}}
                        </div>
                        <div v-else-if="! v.od.dva.minLength &&  v.od.dva.$error" class="invalid-feedback">
                                {{minLengthError($t('vaCc.od'), v.od.dva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.dva.maxLength &&  v.od.dva.$error" class="invalid-feedback">
                                {{maxLengthError($t('vaCc.od'), v.od.dva.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>                    
                </div>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.os')}}</label>
                    <CustomDropMenu 
                    :options="dvaOptions" 
                    v-model="vaCc.os.dva"
                    :inputType="'text'"
                    :invalid="
                            (v.os.dva.$error)||
                            (check_error.od?
                                (check_error.os.dva?check_error.os.dva.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.os.dva?serializer_error.os.dva.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.os.dva.$error && !v.os.dva.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('vaCc.od'))}}
                        </div>
                        <div v-if="! v.os.dva.minLength &&  v.os.dva.$error" class="invalid-feedback">
                                {{minLengthError($t('vaCc.od'), v.os.dva.$params.minLength.min)}}
                        </div>
                        <div v-if="! v.os.dva.maxLength &&  v.os.dva.$error" class="invalid-feedback">
                                {{maxLengthError($t('vaCc.od'), v.os.dva.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>                    
                </div>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.ou')}}</label>
                    <CustomDropMenu 
                    :options="dvaOptions" 
                    v-model="vaCc.ou.dva"
                    :inputType="'text'"
                    :invalid="
                            (v.ou.dva.$error)||
                            (check_error.od?
                                (check_error.ou.dva?check_error.ou.dva.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.ou.dva?serializer_error.ou.dva.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.ou.dva.$error && !v.ou.dva.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('vaCc.od'))}}
                        </div>
                        <div v-if="! v.ou.dva.minLength &&  v.ou.dva.$error" class="invalid-feedback">
                                {{minLengthError($t('vaCc.od'), v.ou.dva.$params.minLength.min)}}
                        </div>
                        <div v-if="! v.ou.dva.maxLength &&  v.ou.dva.$error" class="invalid-feedback">
                                {{maxLengthError($t('vaCc.od'), v.ou.dva.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>                    
                </div>
            </div>
            <div class="col-md-4">
                <h4 class="text-center">{{$t('measurementsLabels.ph')}}</h4>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.od')}}</label>
                    <CustomDropMenu 
                    :options="dvaOptions" 
                    v-model="vaCc.od.ph"
                    :inputType="'text'"
                    :invalid="
                            (v.od.ph.$error)||
                            (check_error.od?
                                (check_error.od.ph?check_error.od.ph.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.ph?serializer_error.od.ph.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.od.ph.$error && !v.od.ph.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('vaCc.od'))}}
                        </div>
                        <div v-else-if="! v.od.ph.minLength &&  v.od.ph.$error" class="invalid-feedback">
                                {{minLengthError($t('vaCc.od'), v.od.ph.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.ph.maxLength &&  v.od.ph.$error" class="invalid-feedback">
                                {{maxLengthError($t('vaCc.od'), v.od.ph.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>                     
                </div>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.os')}}</label>
                    <CustomDropMenu 
                    :options="dvaOptions" 
                    v-model="vaCc.os.ph"
                    :inputType="'text'"
                    :invalid="
                            (v.os.ph.$error)||
                            (check_error.od?
                                (check_error.os.ph?check_error.os.ph.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.os.ph?serializer_error.os.ph.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.os.ph.$error && !v.os.ph.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('vaCc.od'))}}
                        </div>
                        <div v-if="! v.os.ph.minLength &&  v.os.ph.$error" class="invalid-feedback">
                                {{minLengthError($t('vaCc.od'), v.os.ph.$params.minLength.min)}}
                        </div>
                        <div v-if="! v.os.ph.maxLength &&  v.os.ph.$error" class="invalid-feedback">
                                {{maxLengthError($t('vaCc.od'), v.os.ph.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>                    
                </div>
            </div>
            <div class="col-md-4">
                <h4 class="text-center">{{$t('measurementsLabels.nva')}}</h4>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.od')}}</label>
                    <CustomDropMenu 
                    :options="nvaOptions" 
                    v-model="vaCc.od.nva"
                    :inputType="'text'"
                    :invalid="
                            (v.od.nva.$error)||
                            (check_error.od?
                                (check_error.od.nva?check_error.od.nva.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.nva?serializer_error.od.nva.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.od.nva.$error && !v.od.nva.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('vaCc.od'))}}
                        </div>
                        <div v-else-if="! v.od.nva.minLength &&  v.od.nva.$error" class="invalid-feedback">
                                {{minLengthError($t('vaCc.od'), v.od.nva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.nva.maxLength &&  v.od.nva.$error" class="invalid-feedback">
                                {{maxLengthError($t('vaCc.od'), v.od.nva.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>                    
                
                </div>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.os')}}</label>
                    <CustomDropMenu 
                    :options="nvaOptions" 
                    v-model="vaCc.os.nva"
                    :inputType="'text'"
                    :invalid="
                            (v.os.nva.$error)||
                            (check_error.od?
                                (check_error.os.nva?check_error.os.nva.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.os.nva?serializer_error.os.nva.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.os.nva.$error && !v.os.nva.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('vaCc.od'))}}
                        </div>
                        <div v-if="! v.os.nva.minLength &&  v.os.nva.$error" class="invalid-feedback">
                                {{minLengthError($t('vaCc.od'), v.os.nva.$params.minLength.min)}}
                        </div>
                        <div v-if="! v.os.nva.maxLength &&  v.os.nva.$error" class="invalid-feedback">
                                {{maxLengthError($t('vaCc.od'), v.os.nva.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>                    
                </div>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.ou')}}</label>
                    <CustomDropMenu 
                    :options="nvaOptions" 
                    v-model="vaCc.ou.nva"
                    :inputType="'text'"
                    :invalid="
                            (v.ou.nva.$error)||
                            (check_error.od?
                                (check_error.ou.nva?check_error.ou.nva.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.ou.nva?serializer_error.ou.nva.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.ou.nva.$error && !v.ou.nva.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('vaCc.od'))}}
                        </div>
                        <div v-if="! v.ou.nva.minLength &&  v.ou.nva.$error" class="invalid-feedback">
                                {{minLengthError($t('vaCc.od'), v.ou.nva.$params.minLength.min)}}
                        </div>
                        <div v-if="! v.ou.nva.maxLength &&  v.ou.nva.$error" class="invalid-feedback">
                                {{maxLengthError($t('vaCc.od'), v.ou.nva.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>                    
                </div>
            </div>
        </div>
        <!-- Note -->
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="form-label">{{$t('vaCc.note.label')}}</label>
                    <textarea 
                        v-model="vaCc.note" 
                        :placeholder="$t('vaCc.note.placeholder')" 
                        class="form-control"
                        :class="{
                            'is-invalid':
                            (v.note.$invalid)
                            ||
                            (serializer_error.note?serializer_error.note.length>0:false)
                        }" 
                    ></textarea>
                    <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('vaCc.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('vaCc.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('vaCc.note.label'), v.note.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
        </div>
        </Base>
</div>
</template>
<i18n src="@/lang/mr/ophthalmic/visionTest.json"></i18n>
<i18n src="@/lang/mr/ophthalmic/measurements.json"></i18n>
<script>
import Base from '@/components/global/utilities/Base.vue';
import CustomDropMenu from "@/components/global/custom/CustomDropMenu.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import {htmlTagsError,minLengthError,maxLengthError,numericError} from '@/validation/errors'
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import visionOptions from "@/mixins/mr/ophthalmic/options/visionOptions"
import { mapGetters } from "vuex"; 
export default {
    mixins:[measurementsOptions, visionOptions],
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
 ////////////////////////////////////
     computed: {
        ...mapGetters("detailsOphthalmic/ophthalmic", ["getVaCc"]),
        vaCc: {
        get() {
            return this.getVaCc;
        },
        set(value) {
            this.$store.dispatch("detailsOphthalmic/ophthalmic/setVaCc", value);
        },
        }
  },
////////////////////////////////////
    methods:{
        htmlTagsError,
        minLengthError,
        maxLengthError,
        numericError,
//////////////////////////////////////
           reset() {
            this.vaCc= {
                aide: "",
                scale: "",
                od: {
                    dva: "",
                    ph: "",
                    nva: "",
                },
                os: {
                    dva: "",
                    ph: "",
                    nva: "",
                },
                ou: {
                    dva: "",
                    nva: "",
                },
                note: "",
        },
           this.v.$reset();     
        },
    },
}
</script>

<style>

</style>