<template>
    <div class="vaSc">
        <Base>
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t("vaSc.header") }}</h4>
                    <ResetButton @reset="reset"></ResetButton>
                </div>
            </div>
            <div class="row">
                <!-- Aided Acuities -->
                <div class="col-md-6 col-xl-4">
                    <h4>{{ $t('vaSc.heading') }}</h4>
                    <div class="form-group">
                        <label class="form-label">{{$t('measurementsLabels.scale')}}</label>
                        <CustomDropMenu
                        v-model="vaSc.scale"
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
                            {{htmlTagsError($t('vaSc.scale'))}}
                        </div>
                        <div v-else-if="! v.scale.minLength &&  v.scale.$error" class="invalid-feedback">
                                {{minLengthError($t('vaSc.scale'), v.scale.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.scale.maxLength &&  v.scale.$error" class="invalid-feedback">
                                {{maxLengthError($t('vaSc.scale'), v.scale.$params.maxLength.max)}}
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
                        v-model="vaSc.od.dva"
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
                                v-if="v.od.dva.$error && !v.od.dva.notContainsHtmlTags"                    class="invalid-feedback">
                                {{htmlTagsError($t('vaSc.od'))}}
                            </div>
                            <div v-else-if="! v.od.dva.minLength &&  v.od.dva.$error" class="invalid-feedback">
                                    {{minLengthError($t('vaSc.od'), v.od.dva.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.od.dva.maxLength &&  v.od.dva.$error" class="invalid-feedback">
                                    {{maxLengthError($t('vaSc.od'), v.od.dva.$params.maxLength.max)}}
                            </div>
                        </CustomDropMenu>                    
                    </div>
                    <div class="form-group">
                        <label class="form-label">{{$t('measurementsLabels.os')}}</label>
                        <CustomDropMenu 
                        :options="dvaOptions" 
                        v-model="vaSc.os.dva"
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
                                {{htmlTagsError($t('vaSc.od'))}}
                            </div>
                            <div v-else-if="! v.os.dva.minLength &&  v.os.dva.$error" class="invalid-feedback">
                                    {{minLengthError($t('vaSc.od'), v.os.dva.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.os.dva.maxLength &&  v.os.dva.$error" class="invalid-feedback">
                                    {{maxLengthError($t('vaSc.od'), v.os.dva.$params.maxLength.max)}}
                            </div>
                        </CustomDropMenu>                    
                    </div>
                    <div class="form-group">
                        <label class="form-label">{{$t('measurementsLabels.ou')}}</label>
                        <CustomDropMenu 
                        :options="dvaOptions" 
                        v-model="vaSc.ou.dva"
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
                                v-if="v.ou.dva.$error && !v.ou.dva.notContainsHtmlTags"  class="invalid-feedback">
                                {{htmlTagsError($t('vaSc.od'))}}
                            </div>
                            <div v-else-if="! v.ou.dva.minLength &&  v.ou.dva.$error" class="invalid-feedback">
                                    {{minLengthError($t('vaSc.od'), v.ou.dva.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.ou.dva.maxLength &&  v.ou.dva.$error" class="invalid-feedback">
                                    {{maxLengthError($t('vaSc.od'), v.ou.dva.$params.maxLength.max)}}
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
                        v-model="vaSc.od.ph"
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
                                v-if="v.od.ph.$error && !v.od.ph.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('vaSc.od'))}}
                            </div>
                            <div v-else-if="! v.od.ph.minLength &&  v.od.ph.$error" class="invalid-feedback">
                                    {{minLengthError($t('vaSc.od'), v.od.ph.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.od.ph.maxLength &&  v.od.ph.$error" class="invalid-feedback">
                                    {{maxLengthError($t('vaSc.od'), v.od.ph.$params.maxLength.max)}}
                            </div>
                        </CustomDropMenu>                     
                    </div>
                    <div class="form-group">
                        <label class="form-label">{{$t('measurementsLabels.os')}}</label>
                        <CustomDropMenu 
                        :options="dvaOptions" 
                        v-model="vaSc.os.ph"
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
                                v-if="v.os.ph.$error && !v.os.ph.notContainsHtmlTags"  class="invalid-feedback">
                                {{htmlTagsError($t('vaSc.od'))}}
                            </div>
                            <div v-else-if="! v.os.ph.minLength &&  v.os.ph.$error" class="invalid-feedback">
                                    {{minLengthError($t('vaSc.od'), v.os.ph.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.os.ph.maxLength &&  v.os.ph.$error" class="invalid-feedback">
                                    {{maxLengthError($t('vaSc.od'), v.os.ph.$params.maxLength.max)}}
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
                        v-model="vaSc.od.nva"
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
                                v-if="v.od.nva.$error && !v.od.nva.notContainsHtmlTags"  class="invalid-feedback">
                                {{htmlTagsError($t('vaSc.od'))}}
                            </div>
                            <div v-else-if="! v.od.nva.minLength &&  v.od.nva.$error" class="invalid-feedback">
                                    {{minLengthError($t('vaSc.od'), v.od.nva.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.od.nva.maxLength &&  v.od.nva.$error" class="invalid-feedback">
                                    {{maxLengthError($t('vaSc.od'), v.od.nva.$params.maxLength.max)}}
                            </div>
                        </CustomDropMenu>                    
                    
                    </div>
                    <div class="form-group">
                        <label class="form-label">{{$t('measurementsLabels.os')}}</label>
                        <CustomDropMenu 
                        :options="nvaOptions" 
                        v-model="vaSc.os.nva"
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
                                v-if="v.os.nva.$error && !v.os.nva.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('vaSc.od'))}}
                            </div>
                            <div v-else-if="! v.os.nva.minLength &&  v.os.nva.$error" class="invalid-feedback">
                                    {{minLengthError($t('vaSc.od'), v.os.nva.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.os.nva.maxLength &&  v.os.nva.$error" class="invalid-feedback">
                                    {{maxLengthError($t('vaSc.od'), v.os.nva.$params.maxLength.max)}}
                            </div>
                        </CustomDropMenu>                    
                    </div>
                    <div class="form-group">
                        <label class="form-label">{{$t('measurementsLabels.ou')}}</label>
                        <CustomDropMenu 
                        :options="nvaOptions" 
                        v-model="vaSc.ou.nva"
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
                                v-if="v.ou.nva.$error && !v.ou.nva.notContainsHtmlTags"  class="invalid-feedback">
                                {{htmlTagsError($t('vaSc.od'))}}
                            </div>
                            <div v-else-if="! v.ou.nva.minLength &&  v.ou.nva.$error" class="invalid-feedback">
                                    {{minLengthError($t('vaSc.od'), v.ou.nva.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.ou.nva.maxLength &&  v.ou.nva.$error" class="invalid-feedback">
                                    {{maxLengthError($t('vaSc.od'), v.ou.nva.$params.maxLength.max)}}
                            </div>
                        </CustomDropMenu>                    
                    </div>
                </div>
            </div>
            <!-- Note -->
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">{{$t('vaSc.note.label')}}</label>
                        <textarea 
                            v-model="vaSc.note" 
                            :placeholder="$t('vaSc.note.placeholder')" 
                            class="form-control"
                            :class="{
                                'is-invalid':
                                (v.note.$error)
                                ||
                                (serializer_error.note?serializer_error.note.length>0:false)
                            }" 
                        ></textarea>
                        <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('vaSc.note.label'))}}
                        </div>
                        <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                                {{minLengthError($t('vaSc.note.label'), v.note.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                                {{maxLengthError($t('vaSc.note.label'), v.note.$params.maxLength.max)}}
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
            ...mapGetters("detailsOphthalmic/ophthalmic", ["getVaSc"]),
            vaSc: {
                get() {
                    return this.getVaSc;
                },
                set(value) {
                    this.$store.dispatch("detailsOphthalmic/ophthalmic/setVaSc", value);
                },
            }
        },
        ///////////////////////////
        methods:{
            htmlTagsError,
            minLengthError,
            maxLengthError,
            numericError,
            //////////// reset method
            ///// @/params ///////////////
            reset() {
                this.vaSc = {
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