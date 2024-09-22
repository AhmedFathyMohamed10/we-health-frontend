<template>
    <div class="gonioscopy">
        <Base>
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t("gonioscopy.header") }}</h4>
                    <ResetButton @reset="reset"></ResetButton>
                </div>
            </div>
            <div class="error">
              <Message severity="error" :closable="false" v-if=" v.os.box.north.number.$error && !v.os.box.north.number.numeric || v.os.box.south.number.$error && !v.os.box.south.number.numeric
                 ||v.os.box.east.number.$error  && !v.os.box.east.number.numeric || v.os.box.west.number.$error  && !v.os.box.west.number.numeric
                 ||v.od.box.south.number.$error && !v.od.box.south.number.numeric || v.od.box.east.number.$error && !v.od.box.east.number.numeric
                 ||v.od.box.west.number.$error  && !v.od.box.west.number.numeric || v.od.box.north.number.$error  && !v.od.box.north.number.numeric " >
                   <span>{{numericError($t('gonioscopy.number.label'))}}</span>
               
              </Message>
              <Message severity="error" :closable="false" v-if=" v.os.box.north.number.$error && !v.os.box.north.number.maxValue  || v.os.box.south.number.$error  && !v.os.box.south.number.maxValue
                    || v.os.box.east.number.$error  && !v.os.box.east.number.maxValue ||v.os.box.west.number.$error  && !v.os.box.west.number.maxValue 
                    || v.od.box.north.number.$error  && !v.od.box.north.number.maxValue || v.od.box.south.number.$error && !v.od.box.south.number.maxValue
                    || v.od.box.east.number.$error && !v.od.box.east.number.maxValue ||v.od.box.west.number.$error  && !v.od.box.west.number.maxValue">
                
                    <span> {{maxValueError($t('gonioscopy.number.label'),100)}}</span> 
              </Message>
             


            </div>
            <div class="row">
                <div class="image-block col-md-6 col-sm-12 col-12">
                    <ImageEditor
                    v-model="gonioscopy.os.image"
                    :editorControls="osControls"
                    :staticRef="'osControls'"
                    :uploadOnly="false"
                    >
                    </ImageEditor>
                    <div class="wrapper">
                        <div class="directions-wrapper">
                            <div class="north">
                                <div class="row">
                                    <div class="form-group col-6">
                                        <input 
                                        type="number" 
                                        :placeholder="$t('gonioscopy.number.placeholder')" 
                                        v-model="gonioscopy.od.box.north.number"
                                        class="form-control" 
                                        :class="{
                                            'is-invalid':
                                            v.od.box.north.number.$error
                                        }"
                                        >
                                       
                                       
                                    </div>
                                    <div class="form-group col-6">
                                        <Dropdown 
                                        v-model="gonioscopy.od.box.north.selection"
                                            :options="dropdownOdNorthOptions" 
                                            optionLabel="value" 
                                            :placeholder="$t('gonioscopy.selection.placeholder')"
                                        />


                                    </div>
                                </div>
                            </div>
                            <div class="south">
                                <div class="row">
                                    <div class="form-group col-6">
                                        <input 
                                        type="number" 
                                        :placeholder="$t('gonioscopy.number.placeholder')" 
                                        v-model="gonioscopy.od.box.south.number"
                                        class="form-control" 
                                        :class="{
                                            'is-invalid':
                                            v.od.box.south.number.$error }"
                                        >
                                   
                                    </div>
                                    <div class="form-group col-6">
                                        <Dropdown 
                                        v-model="gonioscopy.od.box.south.selection"
                                            :options="dropdownOdSouthOptions" 
                                            optionLabel="value" 
                                            :placeholder="$t('gonioscopy.selection.placeholder')"
                                        />
                                      
                                    </div>
                                </div>
                            </div>
                            <div class="east">
                                <div class="row">
                                    <div class="form-group col-12 col-md-10">
                                        <input 
                                        type="number" 
                                        :placeholder="$t('gonioscopy.number.placeholder')" 
                                        v-model="gonioscopy.od.box.east.number"
                                        class="form-control" 
                                        :class="{
                                            'is-invalid':
                                            v.od.box.east.number.$error   }"
                                        >
                                   
                                        
                                    </div>
                                    <div class="form-group col-12 col-md-10">
                                        <Dropdown 
                                        v-model="gonioscopy.od.box.east.selection"
                                            :options="dropdownOdEastOptions" 
                                            optionLabel="value" 
                                            :placeholder="$t('gonioscopy.selection.placeholder')"
                                        />
                                
                                    </div>
                                </div>
                            </div>
                            <div class="west">
                                <div class="row">
                                    <div class="form-group col-12 col-md-10">
                                        <input 
                                        type="number" 
                                        :placeholder="$t('gonioscopy.number.placeholder')" 
                                        v-model="gonioscopy.od.box.west.number"
                                        class="form-control" 
                                        :class="{
                                            'is-invalid':
                                            v.od.box.west.number.$error  }"
                                        >
                                    
                                    </div>
                                    <div class="form-group col-12 col-md-10">
                                        <Dropdown 
                                        v-model="gonioscopy.od.box.west.selection"
                                            :options="dropdownOdWestOptions" 
                                            optionLabel="value" 
                                            :placeholder="$t('gonioscopy.selection.placeholder')"
                                        />
                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="image-block col-md-6 col-sm-12 col-12">
                    <ImageEditor
                    v-model="gonioscopy.os.image"
                    :editorControls="osControls"
                    :staticRef="'osControls'"
                    :uploadOnly="false"
                    >
                    </ImageEditor>
                    <div class="wrapper">
                        <div class="directions-wrapper">
                            <div class="north">
                                <div class="row">
                                    <div class="form-group col-6">
                                        <input 
                                        type="number" 
                                        :placeholder="$t('gonioscopy.number.placeholder')" 
                                        v-model="gonioscopy.os.box.north.number"
                                        class="form-control" 
                                        :class="{
                                            'is-invalid':
                                            v.os.box.north.number.$error 
                                        }"
                                        >
                                    
                            
                                    </div>
                                    <div class="form-group col-6">
                                        <Dropdown 
                                        v-model="gonioscopy.os.box.north.selection"
                                            :options="dropdownOsNorthOptions" 
                                            optionLabel="value" 
                                            :placeholder="$t('gonioscopy.selection.placeholder')"
                                        />
                        
                                    </div>
                                </div>
                            </div>
                            <div class="south">
                                <div class="row">
                                    <div class="form-group col-6">
                                        <input 
                                        type="number" 
                                        :placeholder="$t('gonioscopy.number.placeholder')" 
                                        v-model="gonioscopy.os.box.south.number"
                                        class="form-control" 
                                        :class="{
                                            'is-invalid':
                                            v.os.box.south.number.$error  }"
                                        >
                                      
                                    </div>
                                    <div class="form-group col-6">
                                        <Dropdown 
                                        v-model="gonioscopy.os.box.south.selection"
                                            :options="dropdownOsSouthOptions" 
                                            optionLabel="value" 
                                            :placeholder="$t('gonioscopy.selection.placeholder')"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="east">
                                <div class="row">
                                    <div class="form-group col-12 col-md-10">
                                        <input 
                                        type="number" 
                                        :placeholder="$t('gonioscopy.number.placeholder')" 
                                        v-model="gonioscopy.os.box.east.number"
                                        class="form-control" 
                                        :class="{
                                            'is-invalid':
                                            v.os.box.east.number.$error  }"
                                        >
                                      
                                    </div>
                                    <div class="form-group col-12 col-md-10">
                                          <Dropdown 
                                           v-model="gonioscopy.os.box.east.selection"
                                            :options="dropdownOsEastOptions" 
                                            optionLabel="value" 
                                            :placeholder="$t('gonioscopy.selection.placeholder')"
                                        />
 
                                    </div>
                                </div>
                            </div>
                            <div class="west">
                                <div class="row">
                                    <div class="form-group col-12 col-md-10">
                                        <input 
                                        type="number" 
                                        :placeholder="$t('gonioscopy.number.placeholder')" 
                                        v-model="gonioscopy.os.box.west.number"
                                        class="form-control" 
                                        :class="{
                                            'is-invalid':
                                            v.os.box.west.number.$error
                                        }"
                                        >
                                       
                                    </div>
                                    <div class="form-group col-12 col-md-10">
                                        <Dropdown 
                                           v-model="gonioscopy.os.box.west.selection"
                                            :options="dropdownOsWestOptions" 
                                            optionLabel="value" 
                                            :placeholder="$t('gonioscopy.selection.placeholder')"
                                        />
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider></Divider>
            <div class="row">
                <div class="col-md-5">
                    <div class="form-group">
                        <CustomDropdown
                        v-model="gonioscopy.od.iris"
                        :label="$t('gonioscopy.iris.label')"
                        :options="irisOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.od.iris.selection.$error
                        )||
                        (                  serializer_error.iris
                            ? serializer_error.iris.selection
                                ? serializer_error.iris.selection.length > 0
                                : false
                            : false)
                        "
                        :invalidOther="
                        (
                            v.od.iris.other.$error
                        )||
                        (
                            serializer_error.iris
                            ? serializer_error.iris.other
                                ? serializer_error.iris.other.length > 0
                                : false
                            : false
                        )
                        "
                        >
                        <div v-if="v.od.iris.other.$error && !v.od.iris.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('gonioscopy.iris.label'))}}
                        </div>
                        <div v-else-if="! v.od.iris.other.minLength &&  v.od.iris.other.$error" class="invalid-feedback">
                                {{minLengthError($t('gonioscopy.iris.label'), v.od.iris.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.iris.other.maxLength &&  v.od.iris.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('gonioscopy.iris.label'), v.od.iris.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>
                    <div class="form-group">
                        <CustomDropdown
                        v-model="gonioscopy.od.lens"
                        :label="$t('gonioscopy.lens.label')"
                        :options="customLensOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.od.lens.selection.$error
                        )||
                        (                  serializer_error.lens
                            ? serializer_error.lens.selection
                                ? serializer_error.lens.selection.length > 0
                                : false
                            : false)
                        "
                        :invalidOther="
                        (
                            v.od.lens.other.$error
                        )||
                        (
                            serializer_error.lens
                            ? serializer_error.lens.other
                                ? serializer_error.lens.other.length > 0
                                : false
                            : false
                        )
                        "
                        >
                        <div v-if="v.od.lens.other.$error && !v.od.lens.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('gonioscopy.lens.label'))}}
                        </div>
                        <div v-else-if="! v.od.lens.other.minLength &&  v.od.lens.other.$error" class="invalid-feedback">
                                {{minLengthError($t('gonioscopy.lens.label'), v.od.lens.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.lens.other.maxLength &&  v.od.lens.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('gonioscopy.lens.label'), v.od.lens.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
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
                        <CustomDropdown
                        v-model="gonioscopy.os.iris"
                        :label="$t('gonioscopy.iris.label')"
                        :options="irisOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.os.iris.selection.$error
                        )||
                        (                  serializer_error.iris
                            ? serializer_error.iris.selection
                                ? serializer_error.iris.selection.length > 0
                                : false
                            : false)
                        "
                        :invalidOther="
                        (
                            v.os.iris.other.$error
                        )||
                        (
                            serializer_error.iris
                            ? serializer_error.iris.other
                                ? serializer_error.iris.other.length > 0
                                : false
                            : false
                        )
                        "
                        >
                        <div v-if="v.os.iris.other.$error && !v.os.iris.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('gonioscopy.iris.label'))}}
                        </div>
                        <div v-else-if="! v.os.iris.other.minLength &&  v.os.iris.other.$error" class="invalid-feedback">
                                {{minLengthError($t('gonioscopy.iris.label'), v.os.iris.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.iris.other.maxLength &&  v.os.iris.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('gonioscopy.iris.label'), v.os.iris.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>
                    <div class="form-group">
                        <CustomDropdown
                        v-model="gonioscopy.os.lens"
                        :label="$t('gonioscopy.lens.label')"
                        :options="customLensOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.os.lens.selection.$error
                        )||
                        (                  serializer_error.lens
                            ? serializer_error.lens.selection
                                ? serializer_error.lens.selection.length > 0
                                : false
                            : false)
                        "
                        :invalidOther="
                        (
                            v.os.lens.other.$error
                        )||
                        (
                            serializer_error.lens
                            ? serializer_error.lens.other
                                ? serializer_error.lens.other.length > 0
                                : false
                            : false
                        )
                        "
                        >
                        <div v-if="v.os.lens.other.$error && !v.os.lens.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('gonioscopy.lens.label'))}}
                        </div>
                        <div v-else-if="! v.os.lens.other.minLength &&  v.os.lens.other.$error" class="invalid-feedback">
                                {{minLengthError($t('gonioscopy.lens.label'), v.os.lens.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.lens.other.maxLength &&  v.os.lens.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('gonioscopy.lens.label'), v.os.lens.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>
                </div>
            </div>
            <Divider></Divider>
            <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="form-label">{{$t('gonioscopy.note.label')}}</label>
                    <textarea
                        v-model="gonioscopy.note" 
                        :placeholder="$t('gonioscopy.note.placeholder')" 
                        class="form-control"
                        :class="{
                            'is-invalid':
                            (v.note.$invalid)
                            ||
                            (serializer_error.note?serializer_error.note.length>0:false)
                        }" 
                    ></textarea>
                    <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('gonioscopy.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('gonioscopy.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('gonioscopy.note.label'), v.note.$params.maxLength.max)}}
                    </div> 
                   
                </div>
            </div>
        </div>
        </Base>
    </div>
</template>
<i18n src="@/lang/mr/ophthalmic/anterior.json"></i18n>
<script>
import Base from '@/components/global/utilities/Base.vue'
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import Divider from '@/components/global/utilities/Divider.vue'
import ImageEditor from '@/components/global/image-plugin/ImageEditor.vue'
import ResetButton from "@/components/global/utilities/ResetButton.vue";
////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,numericError,maxValueError} from '@/validation/errors'
//////////////////////////////////////////////////////////
import anteriorOptions from "@/mixins/mr/ophthalmic/options/anteriorOptions"
import { mapGetters } from "vuex";
import ginioscopy from "@/assets/global/image-plugin-templates/ginioscopy.svg"

export default {
    mixins:[anteriorOptions],
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
        editwidth:{
            type:Object,
            // required:true,
    
            
        },
    },
    components:{
        Base,
        ImageEditor,
        CustomDropdown,
        Divider,
        ResetButton,
    },
    data(){
        return{
            osControls:{
                templateImage:ginioscopy,
            },
            odControls:{
                templateImage:ginioscopy,
            },
      
        }
    },
    ////////////////////////////////////
    computed: {
            ...mapGetters("detailsOphthalmic/ophthalmic", ["getGonioscopy"]),
            gonioscopy: {
                get() {
                    return this.getGonioscopy;
                },
                set(value) {
                    this.$store.dispatch("detailsOphthalmic/ophthalmic/setGonioscopy", value);
                },
            }
        },

    methods:{
        htmlTagsError,
        minLengthError,
        maxLengthError,
        numericError,
        maxValueError,
        ///////////////////////////////
        reset() {
            this.gonioscopy= {
                os: {
                    box: {
                    north: {
                        selection: null,
                        number: null,
                    },
                    south: {
                        selection:null,
                        number: null,
                    },
                    east: {
                        selection: null,
                        number: null,
                    },
                    west: {
                        selection: null,
                        number: null,
                    },
                    },
                    lens: {
                    selection:null,
                    other: "",
                    },
                    iris: {
                    selection:null,
                    other: "",
                    },
                    image: "",
                },
                od: {
                    box: {
                    north: {
                        selection: null,
                        number: null,
                    },
                    south: {
                        selection:null,
                        number: null,
                    },
                    east: {
                        selection: null,
                        number: null,
                    },
                    west: {
                        selection: null,
                        number: null,
                    },
                    },
                    lens: {
                    selection:null,
                    other: "",
                    },
                    iris: {
                    selection:null,
                    other: "",
                    },
                    image: "",
                },
                note: "",
            };
            this.v.$reset();     
        }, 
        copyToOd(){
            this.gonioscopy.od.lens=JSON.parse(JSON.stringify(this.gonioscopy.os.lens));
            this.gonioscopy.od.iris=JSON.parse(JSON.stringify(this.gonioscopy.os.iris));        
        },
        copyToOs(){
            this.gonioscopy.os.lens=JSON.parse(JSON.stringify(this.gonioscopy.od.lens));
            this.gonioscopy.os.iris=JSON.parse(JSON.stringify(this.gonioscopy.od.iris));
        },
    },
}
</script>

<style lang="scss" scoped>
  .editw100{
    min-width: 100% !important;
    min-height: 100% !important;
    display: block;

}

    .gonioscopy{
        .image-block{
            // width: 50%;
            // height: 50%;
            position: relative;
            
            .wrapper{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 10%;
                .directions-wrapper{
                    position: relative;
                    width: 100%;
                    height: 100%;
                    .north{
                        position: absolute;
                        top: 7%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        width: 65%;
                        margin: 0 auto;
                    }
                    .south{
                        position: absolute;
                        transform: translate(-50%,-50%);
                        bottom:-5%;
                        left: 50%;
                        width: 65%;
                        margin: 0 auto;
                    }
                    .east{
                        position: absolute;
                        transform: translate(25%, -50%);
                        top: 50%;
                        left: 50%;
                        width: 40%;
                        right:0;
                        margin: auto auto;
                    }
                    .west{
                        position: absolute;
                        transform: translate(5%, -50%);
                        top: 50%;
                        left: 0%;
                        width: 40%;
                        margin: auto auto;
                    }
                }
            }
        }
}
</style>