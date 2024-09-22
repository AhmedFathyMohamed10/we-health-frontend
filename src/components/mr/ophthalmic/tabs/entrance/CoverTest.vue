<template>
  <div class="cover-test">
    <Base> 
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t("coverTest.header") }}</h4>
            <ResetButton @reset="reset"></ResetButton>
          </div>
        </div>   
        <div class="row">
            <div class="col-md-6">
                <h4>{{ $t('coverTest.hirschbergTest.heading') }}</h4>
                <div class="form-group">
                    <CustomDropdown
                    v-model="coverTest.hirschbergTest.od"
                    :label="$t('coverTest.hirschbergTest.od.label')"
                    :placeholder="$t('coverTest.hirschbergTest.od.placeholder')"
                    :options="hirschbergOdOptions"
                    :inputType="'text'"
                    :invalidSelection=" v.hirschbergTest.od.selection.$error "
                    :invalidOther=" v.hirschbergTest.od.other.$error "
                    >
                    <div v-if="v.hirschbergTest.od.other.$error && !v.hirschbergTest.od.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('coverTest.hirschbergTest.od.label'))}}
                    </div>
                    <div v-else-if="! v.hirschbergTest.od.other.minLength &&  v.hirschbergTest.od.other.$error" class="invalid-feedback">
                            {{minLengthError($t('coverTest.hirschbergTest.od.label'), v.hirschbergTest.od.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.hirschbergTest.od.other.maxLength &&  v.hirschbergTest.od.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('coverTest.hirschbergTest.od.label'), v.hirschbergTest.od.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                    v-model="coverTest.hirschbergTest.os"
                    :label="$t('coverTest.hirschbergTest.os.label')"
                    :placeholder="$t('coverTest.hirschbergTest.os.placeholder')"
                    :options="hirschbergOsOptions"
                    :inputType="'text'"
                    :invalidSelection="v.hirschbergTest.os.selection.$error "
                    :invalidOther="v.hirschbergTest.os.other.$error "
                    >
                        <div v-if="v.hirschbergTest.os.other.$error && !v.hirschbergTest.os.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('coverTest.hirschbergTest.os.label'))}}
                        </div>
                        <div v-else-if="! v.hirschbergTest.os.other.minLength &&  v.hirschbergTest.os.other.$error" class="invalid-feedback">
                                {{minLengthError($t('coverTest.hirschbergTest.os.label'), v.hirschbergTest.os.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.hirschbergTest.os.other.maxLength &&  v.hirschbergTest.os.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('coverTest.hirschbergTest.os.label'), v.hirschbergTest.os.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-6">
                <h4>{{ $t('coverTest.brucknerTest.heading') }}</h4>
                <div class="form-group">
                    <CustomDropdown
                    v-model="coverTest.brucknerTest.od"
                    :label="$t('coverTest.brucknerTest.od.label')"
                    :placeholder="$t('coverTest.brucknerTest.od.placeholder')"
                    :options="brucknerOdOptions"
                    :inputType="'text'"
                    :invalidSelection="v.brucknerTest.od.selection.$error "
                    :invalidOther="v.brucknerTest.od.other.$error  "
                    >
                        <div v-if="v.brucknerTest.od.other.$error && !v.brucknerTest.od.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('coverTest.brucknerTest.od.label'))}}
                        </div>
                        <div v-else-if="! v.brucknerTest.od.other.minLength &&  v.brucknerTest.od.other.$error" class="invalid-feedback">
                                {{minLengthError($t('coverTest.brucknerTest.od.label'), v.brucknerTest.od.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.brucknerTest.od.other.maxLength &&  v.brucknerTest.od.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('coverTest.brucknerTest.od.label'), v.brucknerTest.od.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                    v-model="coverTest.brucknerTest.os"
                    :label="$t('coverTest.brucknerTest.os.label')"
                    :placeholder="$t('coverTest.brucknerTest.os.placeholder')"
                    :options="brucknerOsOptions"
                    :inputType="'text'"
                    :invalidSelection="v.brucknerTest.os.selection.$error "
                    :invalidOther="v.brucknerTest.os.other.$error  "
                    >
                    <div v-if="v.brucknerTest.os.other.$error && !v.brucknerTest.os.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('coverTest.brucknerTest.os.label'))}}
                    </div>
                    <div v-else-if="! v.brucknerTest.os.other.minLength &&  v.brucknerTest.os.other.$error" class="invalid-feedback">
                            {{minLengthError($t('coverTest.brucknerTest.os.label'), v.brucknerTest.os.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.brucknerTest.os.other.maxLength &&  v.brucknerTest.os.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('coverTest.brucknerTest.os.label'), v.brucknerTest.os.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
            </div>
        </div>

        <Divider></Divider>

        <div class="d-flex align-items-center my-5">
            <span class="me-2">{{$t('coverTest.unilateral')}}</span>
            <InputSwitch v-model="switchChecked" class="me-2" />
            <span>{{$t('coverTest.alternate')}}</span>
        </div>

        <div class="row" v-if="!switchChecked">
            <div class="col-md-6">
                <h4 class="">{{ $t('coverTest.unilateralCoverTest.distantVision') }}</h4>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="coverTest.unilateralCoverTest.distantVision.uLateral"
                        :label="$t('coverTest.unilateralCoverTest.uLateral.label')"
                        :options="unilateralOptions"
                        :ortho="true"
                        :invalid="
                            (v.unilateralCoverTest.distantVision.uLateral.$error)||
                            (check_error.npc?
                                (check_error.npc?check_error.npc.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.npc?serializer_error.npc.length>0:false):false
                            )
                        " 
                    >                    
                        <small v-if="v.unilateralCoverTest.distantVision.uLateral.$error && !v.unilateralCoverTest.distantVision.uLateral.notContainsHtmlTags" class="p-invalid">
                        {{htmlTagsError($t('coverTest.unilateralCoverTest.uLateral.label'))}}
                        </small>
                        <small v-else-if="! v.unilateralCoverTest.distantVision.uLateral.minLength &&  v.unilateralCoverTest.distantVision.uLateral.$error" class="p-invalid">
                                {{minLengthError($t('coverTest.unilateralCoverTest.uLateral.label'), v.unilateralCoverTest.distantVision.uLateral.$params.minLength.min)}}
                        </small>
                        <small v-else-if="! v.unilateralCoverTest.distantVision.uLateral.maxLength &&  v.unilateralCoverTest.distantVision.uLateral.$error" class="p-invalid">
                                {{maxLengthError($t('coverTest.unilateralCoverTest.uLateral.label'), v.unilateralCoverTest.distantVision.uLateral.$params.maxLength.max)}}
                        </small> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="coverTest.unilateralCoverTest.distantVision.uVertical"
                        :label="$t('coverTest.unilateralCoverTest.uVertical.label')"
                        :options="unilateralOptions"
                        :ortho="true"
                        :invalid="
                            (v.unilateralCoverTest.distantVision.uVertical.$error)||
                            (check_error.npc?
                                (check_error.npc?check_error.npc.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.npc?serializer_error.npc.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.unilateralCoverTest.distantVision.uVertical.$error && !v.unilateralCoverTest.distantVision.uVertical.notContainsHtmlTags" class="p-invalid">
                        {{htmlTagsError($t('coverTest.unilateralCoverTest.uVertical.label'))}}
                        </div>
                        <div v-else-if="! v.unilateralCoverTest.distantVision.uVertical.minLength &&  v.unilateralCoverTest.distantVision.uVertical.$error" class="p-invalid">
                                {{minLengthError($t('coverTest.unilateralCoverTest.uVertical.label'), v.unilateralCoverTest.distantVision.uVertical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.unilateralCoverTest.distantVision.uVertical.maxLength &&  v.unilateralCoverTest.distantVision.uVertical.$error" class="p-invalid">
                                {{maxLengthError($t('coverTest.unilateralCoverTest.uVertical.label'), v.unilateralCoverTest.distantVision.uVertical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <div class="field-checkbox d-flex align-items-center">
                        <Checkbox id="binary" v-model="coverTest.unilateralCoverTest.distantVision.uNoncomitant" :binary="true" />
                        <label class="mb-0 ms-2" for="binary">{{$t('coverTest.unilateralCoverTest.uNoncomitant.label')}}</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <h4>{{ $t('coverTest.unilateralCoverTest.nearVision') }}</h4>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="coverTest.unilateralCoverTest.nearVision.uLateral"
                        :label="$t('coverTest.unilateralCoverTest.uLateral.label')"
                        :options="unilateralOptions"
                        :ortho="true"
                        :invalid="
                            (v.unilateralCoverTest.nearVision.uLateral.$error)||
                            (check_error.npc?
                                (check_error.npc?check_error.npc.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.npc?serializer_error.npc.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.unilateralCoverTest.nearVision.uLateral.$error && !v.unilateralCoverTest.nearVision.uLateral.notContainsHtmlTags" class="p-invalid">
                        {{htmlTagsError($t('coverTest.unilateralCoverTest.uLateral.label'))}}
                        </div>
                        <div v-else-if="! v.unilateralCoverTest.nearVision.uLateral.minLength &&  v.unilateralCoverTest.nearVision.uLateral.$error" class="p-invalid">
                                {{minLengthError($t('coverTest.unilateralCoverTest.uLateral.label'), v.unilateralCoverTest.nearVision.uLateral.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.unilateralCoverTest.nearVision.uLateral.maxLength &&  v.unilateralCoverTest.nearVision.uLateral.$error" class="p-invalid">
                                {{maxLengthError($t('coverTest.unilateralCoverTest.uLateral.label'), v.unilateralCoverTest.nearVision.uLateral.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="coverTest.unilateralCoverTest.nearVision.uVertical"
                        :label="$t('coverTest.unilateralCoverTest.uVertical.label')"
                        :options="unilateralOptions"
                        :ortho="true"
                        :invalid="
                            (v.unilateralCoverTest.nearVision.uVertical.$error)||
                            (check_error.npc?
                                (check_error.npc?check_error.npc.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.npc?serializer_error.npc.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.unilateralCoverTest.nearVision.uVertical.$error && !v.unilateralCoverTest.nearVision.uVertical.notContainsHtmlTags" class="p-invalid">
                        {{htmlTagsError($t('coverTest.unilateralCoverTest.uVertical.label'))}}
                        </div>
                        <div v-else-if="! v.unilateralCoverTest.nearVision.uVertical.minLength &&  v.unilateralCoverTest.nearVision.uVertical.$error" class="p-invalid">
                                {{minLengthError($t('coverTest.unilateralCoverTest.uVertical.label'), v.unilateralCoverTest.nearVision.uVertical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.unilateralCoverTest.nearVision.uVertical.maxLength &&  v.unilateralCoverTest.nearVision.uVertical.$error" class="p-invalid">
                                {{maxLengthError($t('coverTest.unilateralCoverTest.uVertical.label'), v.unilateralCoverTest.nearVision.uVertical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <div class="field-checkbox d-flex align-items-center">
                        <Checkbox id="binary" v-model="coverTest.unilateralCoverTest.nearVision.uNoncomitant" :binary="true" />
                        <label class="mb-0 ms-2" for="binary">{{$t('coverTest.unilateralCoverTest.uNoncomitant.label')}}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-else >
            <div class="col-md-6">
                <h4 class="">{{ $t('coverTest.alternatingCoverTest.distantVision') }}</h4>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="coverTest.alternatingCoverTest.distantVision.lateral"
                        :label="$t('coverTest.alternatingCoverTest.lateral.label')"
                        :options="unilateralOptions"
                        :ortho="true"
                        :invalid="
                            (v.alternatingCoverTest.distantVision.lateral.$error)||
                            (check_error.npc?
                                (check_error.npc?check_error.npc.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.npc?serializer_error.npc.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.alternatingCoverTest.distantVision.lateral.$error && !v.alternatingCoverTest.distantVision.lateral.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('coverTest.alternatingCoverTest.lateral.label'))}}
                        </div>
                        <div v-else-if="! v.alternatingCoverTest.distantVision.lateral.minLength &&  v.alternatingCoverTest.distantVision.lateral.$error" class="invalid-feedback">
                                {{minLengthError($t('coverTest.alternatingCoverTest.lateral.label'), v.alternatingCoverTest.distantVision.lateral.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.alternatingCoverTest.distantVision.lateral.maxLength &&  v.alternatingCoverTest.distantVision.lateral.$error" class="invalid-feedback">
                                {{maxLengthError($t('coverTest.alternatingCoverTest.lateral.label'), v.alternatingCoverTest.distantVision.lateral.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="coverTest.alternatingCoverTest.distantVision.vertical"
                        :label="$t('coverTest.alternatingCoverTest.vertical.label')"
                        :options="unilateralOptions"
                        :ortho="true"
                        :invalid="
                            (v.alternatingCoverTest.distantVision.vertical.$error)||
                            (check_error.npc?
                                (check_error.npc?check_error.npc.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.npc?serializer_error.npc.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.alternatingCoverTest.distantVision.vertical.$error && !v.alternatingCoverTest.distantVision.vertical.notContainsHtmlTags" class="p-invalid">
                        {{htmlTagsError($t('coverTest.alternatingCoverTest.vertical.label'))}}
                        </div>
                        <div v-else-if="! v.alternatingCoverTest.distantVision.vertical.minLength &&  v.alternatingCoverTest.distantVision.vertical.$error" class="p-invalid">
                                {{minLengthError($t('coverTest.alternatingCoverTest.vertical.label'), v.alternatingCoverTest.distantVision.vertical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.alternatingCoverTest.distantVision.vertical.maxLength &&  v.alternatingCoverTest.distantVision.vertical.$error" class="p-invalid">
                                {{maxLengthError($t('coverTest.alternatingCoverTest.vertical.label'), v.alternatingCoverTest.distantVision.vertical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <div class="field-checkbox d-flex align-items-center">
                        <Checkbox id="binary" v-model="coverTest.alternatingCoverTest.distantVision.aNoncomitant" :binary="true" />
                        <label class="mb-0 ms-2" for="binary">{{$t('coverTest.alternatingCoverTest.aNoncomitant.label')}}</label>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <h4>{{ $t('coverTest.alternatingCoverTest.nearVision') }}</h4>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="coverTest.alternatingCoverTest.nearVision.lateral"
                        :label="$t('coverTest.alternatingCoverTest.lateral.label')"
                        :options="unilateralOptions"
                        :ortho="true"
                        :invalid="
                            (v.alternatingCoverTest.nearVision.lateral.$error)||
                            (check_error.npc?
                                (check_error.npc?check_error.npc.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.npc?serializer_error.npc.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.alternatingCoverTest.nearVision.lateral.$error && !v.alternatingCoverTest.nearVision.lateral.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('coverTest.alternatingCoverTest.lateral.label'))}}
                        </div>
                        <div v-else-if="! v.alternatingCoverTest.nearVision.lateral.minLength &&  v.alternatingCoverTest.nearVision.lateral.$error" class="invalid-feedback">
                                {{minLengthError($t('coverTest.alternatingCoverTest.lateral.label'), v.alternatingCoverTest.nearVision.lateral.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.alternatingCoverTest.nearVision.lateral.maxLength &&  v.alternatingCoverTest.nearVision.lateral.$error" class="invalid-feedback">
                                {{maxLengthError($t('coverTest.alternatingCoverTest.lateral.label'), v.alternatingCoverTest.nearVision.lateral.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="coverTest.alternatingCoverTest.nearVision.vertical"
                        :label="$t('coverTest.alternatingCoverTest.vertical.label')"
                        :options="unilateralOptions"
                        :ortho="true"
                        :invalid="
                            (v.alternatingCoverTest.nearVision.vertical.$error)||
                            (check_error.npc?
                                (check_error.npc?check_error.npc.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.npc?serializer_error.npc.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.alternatingCoverTest.nearVision.vertical.$error && !v.alternatingCoverTest.nearVision.vertical.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('coverTest.alternatingCoverTest.vertical.label'))}}
                        </div>
                        <div v-else-if="! v.alternatingCoverTest.nearVision.vertical.minLength &&  v.alternatingCoverTest.nearVision.vertical.$error" class="invalid-feedback">
                                {{minLengthError($t('coverTest.alternatingCoverTest.vertical.label'), v.alternatingCoverTest.nearVision.vertical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.alternatingCoverTest.nearVision.vertical.maxLength &&  v.alternatingCoverTest.nearVision.vertical.$error" class="invalid-feedback">
                                {{maxLengthError($t('coverTest.alternatingCoverTest.vertical.label'), v.alternatingCoverTest.nearVision.vertical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <div class="field-checkbox d-flex align-items-center">
                        <Checkbox id="binary" v-model="coverTest.alternatingCoverTest.nearVision.aNoncomitant" :binary="true" />
                        <label class="mb-0 ms-2" for="binary">{{$t('coverTest.alternatingCoverTest.aNoncomitant.label')}}</label>
                    </div>
                </div>
            </div>
        </div>
        <Divider></Divider>
        <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{$t('coverTest.note.label')}}</label>
                  <textarea
                    class="form-control"
                    v-model.trim="coverTest.note" 
                    :placeholder="$t('coverTest.note.placeholder')"
                    :class="{
                          'is-invalid':
                          v.note.$invalid  && v.note.$anyError
                      }"
                    ></textarea>
                    <div v-if="! v.note.notContainsHtmlTags &&  v.note.$error" class="invalid-feedback">
                            {{htmlTagsError($t('coverTest.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('coverTest.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('coverTest.note.label'), v.note.$params.maxLength.max)}}
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
import Divider from '@/components/global/utilities/Divider.vue'

import { mapGetters } from "vuex";
import entranceOptions from '@/mixins/mr/ophthalmic/options/entranceOptions'
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import { inputError, htmlTagsError, minLengthError, maxLengthError } from "@/validation/errors";
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
        CustomDropMenu,
        Divider,
        ResetButton,
    },
    data(){
        return {
            switchChecked:false,
        }
    },
  
    /////////////////////////////////////
  computed: {
    ...mapGetters("detailsOphthalmic/ophthalmic", ["getCoverTest"]),
    coverTest: {
      get() {
        return this.getCoverTest;
      },
      set(value) {
        this.$store.dispatch("detailsOphthalmic/ophthalmic/setCoverTest", value);
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
           this.coverTest= {
                hirschbergTest: {
                    os: {
                    selection:null,
                    other: "",
                    },
                    od: {
                    selection: null,
                    other: "",
                    },
                },
                brucknerTest: {
                    os: {
                    selection:null,
                    other: "",
                    },
                    od: {
                    selection:null,
                    other: "",
                    },
                },
                unilateralCoverTest: {
                    distantVision: {
                        uLateral: "",
                        uVertical: "",
                        uNoncomitant: false,
                    },
                    nearVision: {
                        uLateral: "",
                        uVertical: "",
                        uNoncomitant: false,
                    },
                },
                alternatingCoverTest: {
                    distantVision: {
                        lateral: "",
                        vertical: "",
                        aNoncomitant: false,
                    },
                    nearVision: {
                        lateral: "",
                        vertical: "",
                        aNoncomitant: false,
                    },
                },
                note: "",
            },
            this.v.$reset();
            this.switchChecked=false;
            
        }
    },
}
</script>

<style>

</style>