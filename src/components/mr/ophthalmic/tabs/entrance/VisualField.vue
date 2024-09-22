<template>
  <div class="visual-field">
    <Base>  
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t("visualField.header") }}</h4>
            <ResetButton @reset="reset"></ResetButton>
         </div>
        </div>  
        <div class="row">
            <div class="col-md-6">
                <h4>{{ $t('visualField.confrontation.heading') }}</h4>
                <div class="form-group">
                    <CustomDropdown
                    v-model="visualField.confrontation.od"
                    :label="$t('visualField.confrontation.od.label')"
                    :placeholder="$t('visualField.confrontation.od.placeholder')"
                    :otherPlaceholder="$t('visualField.confrontation.od.otherPlaceholder')"
                    :options="confrontationOdOptions"
                    :inputType="'text'"
                    :invalidSelection="v.confrontation.od.selection.$error "
                    :invalidOther="v.confrontation.od.other.$error "
                    >
                    <div v-if="v.confrontation.od.other.$error && !v.confrontation.od.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('visualField.confrontation.od.label'))}}
                    </div>
                    <div v-else-if="! v.confrontation.od.other.minLength &&  v.confrontation.od.other.$error" class="invalid-feedback">
                            {{minLengthError($t('visualField.confrontation.od.label'), v.confrontation.od.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.confrontation.od.other.maxLength &&  v.confrontation.od.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('visualField.confrontation.od.label'), v.confrontation.od.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                    v-model="visualField.confrontation.os"
                    :label="$t('visualField.confrontation.os.label')"
                    :placeholder="$t('visualField.confrontation.os.placeholder')"
                    :otherPlaceholder="$t('visualField.confrontation.os.otherPlaceholder')"
                    :options="confrontationOsOptions"
                    :inputType="'text'"
                    :invalidSelection="v.confrontation.os.selection.$error "
                    :invalidOther="v.confrontation.os.other.$error "
                    >
                    <div v-if="v.confrontation.os.other.$error && !v.confrontation.os.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('visualField.confrontation.os.label'))}}
                    </div>
                    <div v-else-if="! v.confrontation.os.other.minLength &&  v.confrontation.os.other.$error" class="invalid-feedback">
                            {{minLengthError($t('visualField.confrontation.os.label'), v.confrontation.os.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.confrontation.os.other.maxLength &&  v.confrontation.os.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('visualField.confrontation.os.label'), v.confrontation.os.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-6">
                <h4>{{ $t('visualField.autoPerimetry.heading') }}</h4>
                <div class="form-group">
                    <CustomDropdown
                    v-model="visualField.autoPerimetry.od"
                    :label="$t('visualField.autoPerimetry.od.label')"
                    :placeholder="$t('visualField.autoPerimetry.od.placeholder')"
                    :otherPlaceholder="$t('visualField.autoPerimetry.od.otherPlaceholder')"
                    :options="autoPerimetryOdOptions"
                    :inputType="'text'"
                    :invalidSelection="v.autoPerimetry.od.selection.$error  "
                    :invalidOther=" v.autoPerimetry.od.other.$error  "
                    >
                    <div v-if="v.autoPerimetry.od.other.$error && !v.autoPerimetry.od.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('visualField.autoPerimetry.od.label'))}}
                    </div>
                    <div v-else-if="! v.autoPerimetry.od.other.minLength &&  v.autoPerimetry.od.other.$error" class="invalid-feedback">
                            {{minLengthError($t('visualField.autoPerimetry.od.label'), v.autoPerimetry.od.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.autoPerimetry.od.other.maxLength &&  v.autoPerimetry.od.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('visualField.autoPerimetry.od.label'), v.autoPerimetry.od.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                    v-model="visualField.autoPerimetry.os"
                    :label="$t('visualField.autoPerimetry.os.label')"
                    :placeholder="$t('visualField.autoPerimetry.os.placeholder')"
                    :otherPlaceholder="$t('visualField.autoPerimetry.os.otherPlaceholder')"
                    :options="autoPerimetryOsOptions"
                    :inputType="'text'"
                    :invalidSelection=" v.autoPerimetry.os.selection.$error "
                    :invalidOther=" v.autoPerimetry.os.other.$error"
                    >
                    <div v-if="v.autoPerimetry.os.other.$error && !v.autoPerimetry.os.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('visualField.autoPerimetry.os.label'))}}
                    </div>
                    <div v-else-if="! v.autoPerimetry.os.other.minLength &&  v.autoPerimetry.os.other.$error" class="invalid-feedback">
                            {{minLengthError($t('visualField.autoPerimetry.os.label'), v.autoPerimetry.os.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.autoPerimetry.os.other.maxLength &&  v.autoPerimetry.os.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('visualField.autoPerimetry.os.label'), v.autoPerimetry.os.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                    v-model="visualField.autoPerimetry.instrument"
                    :label="$t('visualField.autoPerimetry.instrument.label')"
                    :placeholder="$t('visualField.autoPerimetry.instrument.placeholder')"
                    :otherPlaceholder="$t('visualField.autoPerimetry.instrument.otherPlaceholder')"
                    :options="instrumentOptions"
                    :inputType="'text'"
                    :invalidSelection=" v.autoPerimetry.instrument.selection.$error "
                    :invalidOther=" v.autoPerimetry.instrument.other.$error "
                    >
                    <div v-if="v.autoPerimetry.instrument.other.$error && !v.autoPerimetry.instrument.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('visualField.autoPerimetry.instrument.label'))}}
                    </div>
                    <div v-else-if="! v.autoPerimetry.instrument.other.minLength &&  v.autoPerimetry.instrument.other.$error" class="invalid-feedback">
                            {{minLengthError($t('visualField.autoPerimetry.instrument.label'), v.autoPerimetry.instrument.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.autoPerimetry.instrument.other.maxLength &&  v.autoPerimetry.instrument.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('visualField.autoPerimetry.instrument.label'), v.autoPerimetry.instrument.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
            </div>
        </div>
        <Divider></Divider>
        <div class="row">
            <div class="col-md-6">
                <h4>{{ $t('visualField.tangentScreen.heading') }}</h4>
                <div class="form-group">
                    <CustomDropdown
                    v-model="visualField.tangentScreen.scale"
                    :label="$t('visualField.tangentScreen.scale.label')"
                    :placeholder="$t('visualField.tangentScreen.scale.placeholder')"
                    :otherPlaceholder="$t('visualField.tangentScreen.scale.otherPlaceholder')"
                    :options="scaleOptions"
                    :inputType="'text'"
                    :invalidSelection=" v.tangentScreen.scale.selection.$error "
                    :invalidOther=" v.tangentScreen.scale.other.$error "
                    >
                    <div v-if="v.tangentScreen.scale.other.$error && !v.tangentScreen.scale.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('visualField.tangentScreen.scale.label'))}}
                    </div>
                    <div v-else-if="! v.tangentScreen.scale.other.minLength &&  v.tangentScreen.scale.other.$error" class="invalid-feedback">
                            {{minLengthError($t('visualField.tangentScreen.scale.label'), v.tangentScreen.scale.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.tangentScreen.scale.other.maxLength &&  v.tangentScreen.scale.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('visualField.tangentScreen.scale.label'), v.tangentScreen.scale.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
                 <div class="form-group">
                    <ImageEditor
                    v-model="visualField.tangentScreen.image"
                    :editorControls="tangentScreenControls"
                    :staticRef="'tangentScreen'"
                    :uploadOnly="false"
                    >
                    </ImageEditor>
                </div>            
            </div>
            <div class="col-md-6">
                <h4 class="text-center">{{ $t('visualField.amslerGrid.heading') }}</h4>
                 <div class="form-group">
                    <ImageEditor
                    v-model="visualField.amslerGrid.odImage"
                    :editorControls="amslerGridControls.od"
                    :staticRef="'amslerGridOd'"
                    :uploadOnly="false"
                    >
                    </ImageEditor>
                </div>            
                 <div class="form-group">
                    <ImageEditor
                    v-model="visualField.amslerGrid.osImage"
                    :editorControls="amslerGridControls.od"
                    :staticRef="'amslerGridOs'"
                    :uploadOnly="false"
                    >
                    </ImageEditor>
                </div>            
            </div>
        </div>
        <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{$t('visualField.note.label')}}</label>
                  <textarea
                    class="form-control"
                    v-model.trim="visualField.note" 
                    :placeholder="$t('visualField.note.placeholder')"
                    :class="{
                          'is-invalid':
                              v.note.$anyError
                      }"
                    ></textarea>
                    <div v-if="! v.note.notContainsHtmlTags &&  v.note.$error" class="invalid-feedback">
                            {{htmlTagsError($t('visualField.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('visualField.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('visualField.note.label'), v.note.$params.maxLength.max)}}
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
import Divider from '@/components/global/utilities/Divider.vue'
import ImageEditor from '@/components/global/image-plugin/ImageEditor.vue'
import { mapGetters } from "vuex";
import entranceOptions from '@/mixins/mr/ophthalmic/options/entranceOptions'
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import { inputError, htmlTagsError, minLengthError, maxLengthError } from "@/validation/errors";
import tangentScreen from "@/assets/global/image-plugin-templates/tangentScreen.svg"
import amslerGrid from "@/assets/global/image-plugin-templates/amslerGrid.svg"
import ResetButton from "@/components/global/utilities/ResetButton.vue";
export default {
    mixins: [entranceOptions,measurementsOptions],
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
        Divider,
        ImageEditor,
        ResetButton
    },
    data(){
        return {
            tangentScreenControls:{
                templateImage:tangentScreen,
            },
            amslerGridControls:{
                od:{
                    templateImage:amslerGrid,
                },
                os:{
                    templateImage:amslerGrid,
                }
            },
        }
    },
 /////////////////////////////////////
  computed: {
    ...mapGetters("detailsOphthalmic/ophthalmic", ["getVisualField"]),
    visualField: {
      get() {
        return this.getVisualField;
      },
      set(value) {
        this.$store.dispatch("detailsOphthalmic/ophthalmic/setVisualField", value);
      },
    },
  },
  /////////////////////////////////  
    methods: {
    
        inputError,
        htmlTagsError,
        maxLengthError,
        minLengthError,
 //////////////////////////////////////
        reset() {
            this.visualField={
                confrontation: {
                    os: {
                    selection:null,
                        other: "",
                    },
                    od: {
                    selection: null,
                        other: "",
                    },
                },
                autoPerimetry: {
                    instrument: {
                    selection:null,
                    other: "",
                    },
                    od: {
                    selection: null,
                    other: "",
                    },
                    os: {
                    selection: null,
                    other: "",
                    },
                },
                tangentScreen: {
                    scale:{
                        selection:null,
                    other: "",
                    },
                    image: "",
                },
                amslerGrid: {
                    osImage: "",
                    odImage: "",
                },
                note: "",
            },

            this.v.$reset();
        },

    },
}
</script>

<style lang="scss">
.visula-field{
    .image-wrapper{
        .image-od-os{
                // margin-top:40px;
        }
        .image-controllers{
            .tangent-screen-edit,.tangent-screen-delete{
                cursor: pointer;
            }
        }
    }
}
</style>