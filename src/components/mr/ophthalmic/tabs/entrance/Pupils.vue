<template>
    <div class="pupils">
        <Base>
        <div class="row">
            <div class="col-12 d-flex justify-content-between">
                <h4>{{ $t("pupils.header") }}</h4>
                <ResetButton @reset="reset"></ResetButton>
            </div>    
        </div>
        <div class="svg-wrapper">
            <img src="@/assets/mr/ophthalmic/entrance/pupils/eyes.svg" alt="" class="w-100">
        </div>
        <div class="eyes-labels w-100 d-flex justify-content-between">
            <div class="label-wrapper flex-grow-1 d-flex justify-content-center"><h3>{{$t('eyesLabels.od')}}</h3></div>
            <div class="label-wrapper flex-grow-1 d-flex justify-content-center"><h3>{{$t('eyesLabels.os')}}</h3></div>
        </div>
        <div class="input-group-wrapper row my-2">
            <div class="col-md-4">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="pupils.od.sizeInLight"
                        :label="$t('pupils.sizeInLight.label')"
                        :options="sizeInLightOptions"
                        :invalid="
                            (v.od.sizeInLight.$error)||
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
                            v-if="v.od.sizeInLight.$error && !v.od.sizeInLight.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pupils.sizeInLight.label'))}}
                        </div>
                        <div v-else-if="! v.od.sizeInLight.minLength &&  v.od.sizeInLight.$error" class="invalid-feedback">
                                {{minLengthError($t('pupils.sizeInLight.label'), v.od.sizeInLight.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.sizeInLight.maxLength &&  v.od.sizeInLight.$error" class="invalid-feedback">
                                {{maxLengthError($t('pupils.sizeInLight.label'), v.od.sizeInLight.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="pupils.od.sizeInDark"
                        :label="$t('pupils.sizeInDark.label')"
                        :options="sizeInDarkOptions"
                        :invalid="
                            (v.od.sizeInDark.$error)||
                            (check_error.od?
                                (check_error.od.spherical?check_error.od.spherical.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.spherical?serializer_error.od.spherical.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.od.sizeInDark.$error && !v.od.sizeInDark.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('pupils.sizeInDark.label'))}}
                        </div>
                        <div v-if="! v.od.sizeInDark.minLength &&  v.od.sizeInDark.$error" class="invalid-feedback">
                                {{minLengthError($t('pupils.sizeInDark.label'), v.od.sizeInDark.$params.minLength.min)}}
                        </div>
                        <div v-if="! v.od.sizeInDark.maxLength &&  v.od.sizeInDark.$error" class="invalid-feedback">
                                {{maxLengthError($t('pupils.sizeInDark.label'), v.od.sizeInDark.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="pupils.od.shape"
                        :label="$t('pupils.shape.label')"
                        :placeholder="$t('pupils.shape.placeholder')"
                        :options="shapeOptions"
                        :v="v.od.shape"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.od.shape.selection.$error
                        )||
                        (                  serializer_error.reasnOfVisit
                            ? serializer_error.reasnOfVisit.reasonSelection
                                ? serializer_error.reasnOfVisit.reasonSelection.length > 0
                                : false
                            : false)
                        "
                        :invalidOther="
                        (
                            v.od.shape.other.$error
                        )||
                        (
                            serializer_error.reasnOfVisit
                            ? serializer_error.reasnOfVisit.other
                                ? serializer_error.reasnOfVisit.other.length > 0
                                : false
                            : false
                        )
                        "
                    >
                    <div v-if="v.od.shape.other.$error && !v.od.shape.other.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pupils.shape.label'))}}
                    </div>
                    <div v-else-if="! v.od.shape.other.minLength &&  v.od.shape.other.$error" class="invalid-feedback">
                            {{minLengthError($t('pupils.shape.label'), v.od.shape.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.od.shape.other.maxLength &&  v.od.shape.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('pupils.shape.label'), v.od.shape.other.$params.maxLength.max)}}
                    </div> 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="pupils.od.reaction"
                        :label="$t('pupils.reaction.label')"
                        :options="reactionOptions"
                        :invalid="
                            (v.od.reaction.$error)||
                            (check_error.od?
                                (check_error.od.spherical?check_error.od.spherical.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.spherical?serializer_error.od.spherical.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.od.reaction.$error && !v.od.reaction.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('pupils.reaction.label'))}}
                        </div>
                        <div v-else-if="! v.od.reaction.minLength &&  v.od.reaction.$error" class="invalid-feedback">
                                {{minLengthError($t('pupils.reaction.label'), v.od.reaction.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.reaction.maxLength &&  v.od.reaction.$error" class="invalid-feedback">
                                {{maxLengthError($t('pupils.reaction.label'), v.od.reaction.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="pupils.od.mGunn"
                        :label="$t('pupils.mGunn.label')"
                        :options="mGunnOptions"
                        :invalid="
                            (v.od.mGunn.$error)||
                            (check_error.od?
                                (check_error.od.spherical?check_error.od.spherical.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.spherical?serializer_error.od.spherical.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.od.mGunn.$error && !v.od.mGunn.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('pupils.mGunn.label'))}}
                        </div>
                        <div v-else-if="! v.od.mGunn.minLength &&  v.od.mGunn.$error" class="invalid-feedback">
                                {{minLengthError($t('pupils.mGunn.label'), v.od.mGunn.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.mGunn.maxLength &&  v.od.mGunn.$error" class="invalid-feedback">
                                {{maxLengthError($t('pupils.mGunn.label'), v.od.mGunn.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="pupils.od.accom"
                        :label="$t('pupils.accom.label')"
                        :placeholder="$t('pupils.accom.placeholder')"
                        :options="accomOptions"
                        :v="v.od.accom"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.od.accom.selection.$error
                        )||
                        (                  serializer_error.reasnOfVisit
                            ? serializer_error.reasnOfVisit.reasonSelection
                                ? serializer_error.reasnOfVisit.reasonSelection.length > 0
                                : false
                            : false)
                        "
                        :invalidOther="
                        (
                            v.od.accom.other.$error
                        )||
                        (
                            serializer_error.reasnOfVisit
                            ? serializer_error.reasnOfVisit.other
                                ? serializer_error.reasnOfVisit.other.length > 0
                                : false
                            : false
                        )
                        "
                    >
                    <div v-if="v.od.accom.other.$error && !v.od.accom.other.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pupils.accom.label'))}}
                    </div>
                    <div v-else-if="! v.od.accom.other.minLength &&  v.od.accom.other.$error" class="invalid-feedback">
                            {{minLengthError($t('pupils.accom.label'), v.od.accom.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.od.accom.other.maxLength &&  v.od.accom.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('pupils.accom.label'), v.od.accom.other.$params.maxLength.max)}}
                    </div> 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="pupils.od.diagnose"
                        :label="$t('pupils.diagnose.label')"
                        :placeholder="$t('pupils.diagnose.placeholder')"
                        :options="diagnoseOptions"
                        :v="v.od.diagnose"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.od.diagnose.selection.$error
                        )||
                        (                  serializer_error.reasnOfVisit
                            ? serializer_error.reasnOfVisit.reasonSelection
                                ? serializer_error.reasnOfVisit.reasonSelection.length > 0
                                : false
                            : false)
                        "
                        :invalidOther="
                        (
                            v.od.diagnose.other.$error
                        )||
                        (
                            serializer_error.reasnOfVisit
                            ? serializer_error.reasnOfVisit.other
                                ? serializer_error.reasnOfVisit.other.length > 0
                                : false
                            : false
                        )
                        "
                    >
                    <div v-if="v.od.diagnose.other.$error && !v.od.diagnose.other.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pupils.diagnose.label'))}}
                    </div>
                    <div v-else-if="! v.od.diagnose.other.minLength &&  v.od.diagnose.other.$error" class="invalid-feedback">
                            {{minLengthError($t('pupils.diagnose.label'), v.od.diagnose.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.od.diagnose.other.maxLength &&  v.od.accom.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('pupils.diagnose.label'), v.od.diagnose.other.$params.maxLength.max)}}
                    </div> 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-2 d-flex justify-content-center gap-4">
                <div class="form-group">
                    <label for="" class="form-label d-none d-md-block invisible">cpy</label>
                    <button class="btn btn-icon btn-circle btn-success me-2" @click="copyToOd">
                        <i v-if="screenWidth < 768" class="fa fa-angle-up fa-md"></i> 
                        <i v-else class="fa fa-angle-left fa-md"></i> 
                    </button>
                </div>
                <div class="form-group ">
                    <label for="" class="form-label d-none d-md-block invisible">cpy</label>
                    <button class="btn btn-icon btn-circle btn-success" @click="copyToOs">
                        <i v-if="screenWidth < 768" class="fa fa-angle-down fa-md"></i> 
                        <i v-else class="fa fa-angle-right fa-md"></i> 
                    </button>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="pupils.os.sizeInLight"
                        :label="$t('pupils.sizeInLight.label')"
                        :options="sizeInLightOptions"
                        :invalid="
                            (v.os.sizeInLight.$error)||
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
                            v-if="v.os.sizeInLight.$error && !v.os.sizeInLight.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('pupils.sizeInLight.label'))}}
                        </div>
                        <div v-else-if="! v.os.sizeInLight.minLength &&  v.os.sizeInLight.$error" class="invalid-feedback">
                                {{minLengthError($t('pupils.sizeInLight.label'), v.os.sizeInLight.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.sizeInLight.maxLength &&  v.os.sizeInLight.$error" class="invalid-feedback">
                                {{maxLengthError($t('pupils.sizeInLight.label'), v.os.sizeInLight.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="pupils.os.sizeInDark"
                        :label="$t('pupils.sizeInDark.label')"
                        :options="sizeInDarkOptions"
                        :invalid="
                            (v.os.sizeInDark.$error)||
                            (check_error.od?
                                (check_error.os.spherical?check_error.os.spherical.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.os.spherical?serializer_error.os.spherical.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.os.sizeInDark.$error && !v.os.sizeInDark.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('pupils.sizeInDark.label'))}}
                        </div>
                        <div v-else-if="! v.os.sizeInDark.minLength &&  v.os.sizeInDark.$error" class="invalid-feedback">
                                {{minLengthError($t('pupils.sizeInDark.label'), v.os.sizeInDark.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.sizeInDark.maxLength &&  v.os.sizeInDark.$error" class="invalid-feedback">
                                {{maxLengthError($t('pupils.sizeInDark.label'), v.os.sizeInDark.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="pupils.os.shape"
                        :label="$t('pupils.shape.label')"
                        :placeholder="$t('pupils.shape.placeholder')"
                        :options="shapeOptions"
                        :v="v.os.shape"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.os.shape.selection.$error
                        )||
                        (                  serializer_error.reasnOfVisit
                            ? serializer_error.reasnOfVisit.reasonSelection
                                ? serializer_error.reasnOfVisit.reasonSelection.length > 0
                                : false
                            : false)
                        "
                        :invalidOther="
                        (
                            v.os.shape.other.$error
                        )||
                        (
                            serializer_error.reasnOfVisit
                            ? serializer_error.reasnOfVisit.other
                                ? serializer_error.reasnOfVisit.other.length > 0
                                : false
                            : false
                        )
                        "
                    >
                    <div v-if="v.os.shape.other.$error && !v.os.shape.other.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pupils.shape.label'))}}
                    </div>
                    <div v-else-if="! v.os.shape.other.minLength &&  v.os.shape.other.$error" class="invalid-feedback">
                            {{minLengthError($t('pupils.shape.label'), v.os.shape.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.os.shape.other.maxLength &&  v.os.shape.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('pupils.shape.label'), v.os.shape.other.$params.maxLength.max)}}
                    </div> 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="pupils.os.reaction"
                        :label="$t('pupils.reaction.label')"
                        :options="reactionOptions"
                        :invalid="
                            (v.os.reaction.$error)||
                            (check_error.od?
                                (check_error.os.spherical?check_error.os.spherical.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.os.spherical?serializer_error.os.spherical.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.os.reaction.$error && !v.os.reaction.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('pupils.reaction.label'))}}
                        </div>
                        <div v-else-if="! v.os.reaction.minLength &&  v.os.reaction.$error" class="invalid-feedback">
                                {{minLengthError($t('pupils.reaction.label'), v.os.reaction.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.reaction.maxLength &&  v.os.reaction.$error" class="invalid-feedback">
                                {{maxLengthError($t('pupils.reaction.label'), v.os.reaction.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="pupils.os.mGunn"
                        :label="$t('pupils.mGunn.label')"
                        :options="mGunnOptions"
                        :invalid="
                            (v.os.mGunn.$error)||
                            (check_error.od?
                                (check_error.os.spherical?check_error.os.spherical.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.os.spherical?serializer_error.os.spherical.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.os.mGunn.$error && !v.os.mGunn.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('pupils.mGunn.label'))}}
                        </div>
                        <div v-else-if="! v.os.mGunn.minLength &&  v.os.mGunn.$error" class="invalid-feedback">
                                {{minLengthError($t('pupils.mGunn.label'), v.os.mGunn.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.mGunn.maxLength &&  v.os.mGunn.$error" class="invalid-feedback">
                                {{maxLengthError($t('pupils.mGunn.label'), v.os.mGunn.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="pupils.os.accom"
                        :label="$t('pupils.accom.label')"
                        :placeholder="$t('pupils.accom.placeholder')"
                        :options="accomOptions"
                        :v="v.os.accom"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.os.accom.selection.$error
                        )||
                        (                  serializer_error.reasnOfVisit
                            ? serializer_error.reasnOfVisit.reasonSelection
                                ? serializer_error.reasnOfVisit.reasonSelection.length > 0
                                : false
                            : false)
                        "
                        :invalidOther="
                        (
                            v.os.accom.other.$error
                        )||
                        (
                            serializer_error.reasnOfVisit
                            ? serializer_error.reasnOfVisit.other
                                ? serializer_error.reasnOfVisit.other.length > 0
                                : false
                            : false
                        )
                        "
                    >
                    <div v-if="v.os.accom.other.$error && !v.os.accom.other.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pupils.accom.label'))}}
                    </div>
                    <div v-else-if="! v.os.accom.other.minLength &&  v.os.accom.other.$error" class="invalid-feedback">
                            {{minLengthError($t('pupils.accom.label'), v.os.accom.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.os.accom.other.maxLength &&  v.os.accom.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('pupils.accom.label'), v.os.accom.other.$params.maxLength.max)}}
                    </div> 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="pupils.os.diagnose"
                        :label="$t('pupils.diagnose.label')"
                        :placeholder="$t('pupils.diagnose.placeholder')"
                        :options="diagnoseOptions"
                        :v="v.os.diagnose"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.os.diagnose.selection.$error
                        )||
                        (                  serializer_error.reasnOfVisit
                            ? serializer_error.reasnOfVisit.reasonSelection
                                ? serializer_error.reasnOfVisit.reasonSelection.length > 0
                                : false
                            : false)
                        "
                        :invalidOther="
                        (
                            v.os.diagnose.other.$error
                        )||
                        (
                            serializer_error.reasnOfVisit
                            ? serializer_error.reasnOfVisit.other
                                ? serializer_error.reasnOfVisit.other.length > 0
                                : false
                            : false
                        )
                        "
                    >
                    <div v-if="v.os.diagnose.other.$error && !v.os.diagnose.other.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pupils.diagnose.label'))}}
                    </div>
                    <div v-else-if="! v.os.diagnose.other.minLength &&  v.os.diagnose.other.$error" class="invalid-feedback">
                            {{minLengthError($t('pupils.diagnose.label'), v.os.diagnose.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.os.diagnose.other.maxLength &&  v.os.accom.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('pupils.diagnose.label'), v.os.diagnose.other.$params.maxLength.max)}}
                    </div> 
                    </CustomDropdown>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="form-label">{{$t('pupils.note.label')}}</label>
                    <textarea 
                        v-model="pupils.note" 
                        :placeholder="$t('pupils.note.placeholder')" 
                        class="form-control"
                        :class="{
                            'is-invalid':
                            (v.note.$error)
                            ||
                            (serializer_error.note?serializer_error.note.length>0:false)
                        }" 
                    ></textarea>
                    <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pupils.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('pupils.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('pupils.note.label'), v.note.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
        </div>
    </Base>
    </div>
</template>
<i18n src="@/lang/mr/ophthalmic/entrance.json"></i18n>
<script>
import Base from '@/components/global/utilities/Base.vue'
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import CustomDropMenu from "@/components/global/custom/CustomDropMenu.vue";
////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,numericError} from '@/validation/errors'
//////////////////////////////////////////////////////////
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import entranceOptions from "@/mixins/mr/ophthalmic/options/entranceOptions"
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import { mapGetters } from "vuex";
export default {
    mixins:[measurementsOptions,entranceOptions],
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
        ResetButton
    },
    data(){
        return{ 
        }
    },
////////////////////////////////////////
  computed: {
    ...mapGetters("detailsOphthalmic/ophthalmic", ["getPupils"]),
    pupils: {
      get() {
        return this.getPupils;
      },
      set(value) {
        this.$store.dispatch("detailsOphthalmic/ophthalmic/setPupils", value);
      },
    },
  },
////////////////////////////////////////
    methods:{
        htmlTagsError,
        minLengthError,
        maxLengthError,
        numericError,
        //////////////////////////////////////
        reset() {
            this.pupils= {
                od: {
                    sizeInLight: null,
                    sizeInDark: null,
                    shape:{
                        selection:null,
                        other:""
                    },
                    reaction: "",
                    mGunn: "",
                    accom:{
                        selection:null,
                        other:""
                    },
                    diagnose:{
                        selection:null,
                        other:""
                    },
                },
                os: {
                    sizeInLight: null,
                    sizeInDark: null,
                    shape:{
                        selection:null,
                        other:""
                    },
                    reaction: "",
                    mGunn: "",
                    accom:{
                        selection:null,
                        other:""
                    },
                    diagnose:{
                        selection:null,
                        other:""
                    },
                },
                note: "",
            },
           this.v.$reset();     
        },
        //////////////////////////////////////
        copyToOd(){
            this.pupils.od=JSON.parse(JSON.stringify(this.pupils.os));
        },
        copyToOs(){
            this.pupils.os=JSON.parse(JSON.stringify(this.pupils.od));
        },
    },
}
</script>
<style lang="scss" scoped>
.pupils{

}
</style>