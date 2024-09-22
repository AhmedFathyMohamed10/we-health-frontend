<template>
<div class="biomicroscopy">
    <Base>
        <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t("biomicroscopy.header") }}</h4>
                    <ResetButton @reset="reset"></ResetButton>
                </div>
        </div>
    <div class="row">
        <div class="col-md-6">
            <div class="row">
                <div class="form-group col-md-6">
                    <h4 class="text-center">{{ $t('biomicroscopy.odImage') }}</h4>
                    <ImageEditor
                    v-model="biomicroscopy.od.image"
                    :editorControls="odControls"
                    :staticRef="'odControls'"
                    :uploadOnly="false"
                    >
                    </ImageEditor>
                </div>
                <div class="form-group col-md-6">
                    <h4 class="text-center">{{ $t('biomicroscopy.osImage') }}</h4>
                    <ImageEditor
                    v-model="biomicroscopy.os.image"
                    :editorControls="osControls"
                    :staticRef="'osControls'"
                    :uploadOnly="false"
                    >
                    </ImageEditor>
                </div>            
            </div>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="form-group col-md-6">
                    <h4 class="text-center">{{ $t('biomicroscopy.odSegImage') }}</h4>
                    <ImageEditor
                    v-model="biomicroscopy.segmentation.odImage"
                    :editorControls="odSegmentationControls"
                    :staticRef="'odSegmentationControls'"
                    :uploadOnly="false"
                    >
                    </ImageEditor>
                </div>            
                    <div class="form-group col-md-6">
                        <h4 class="text-center">{{ $t('biomicroscopy.osSegImage') }}</h4>
                        <ImageEditor
                        v-model="biomicroscopy.segmentation.osImage"
                        :editorControls="osSegmentationControls"
                        :staticRef="'osSegmentationControls'"
                        :uploadOnly="false"
                        >
                        </ImageEditor>
                </div>            
            </div>
        </div>
    </div>    
    <Divider></Divider>
    <div class="col-md-6">
        <div class="row">
            <div class="form-group col-md-6">
                <h4 class="text-center">{{ $t('biomicroscopy.notationOsImage') }}</h4>
                <ImageEditor
                v-model="biomicroscopy.notationOsImage"
                :editorControls="notationOsImageControls"
                :staticRef="'notationOsImage'"
                :uploadOnly="false"
                >
                </ImageEditor>
            </div>       
        </div>
    </div>
    <Divider></Divider>
    <div class="row">
        <div class="col-md-5">
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.od.lid"
                    :label="$t('biomicroscopy.lid')"
                    :options="lidOptions"
                    :invalid="
                        (v.od.lid.$error)||
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
                        v-if="v.od.lid.$error && !v.od.lid.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.lid'))}}
                    </div>
                    <div v-else-if="! v.od.lid.minLength &&  v.od.lid.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.lid'), v.od.lid.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.od.lid.maxLength &&  v.od.lid.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.lid'), v.od.lid.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.od.conjunctiva"
                    :label="$t('biomicroscopy.conjunctiva')"
                    :options="conjunctivaOptions"
                    :invalid="
                        (v.od.conjunctiva.$error)||
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
                        v-if="v.od.conjunctiva.$error && !v.od.conjunctiva.notContainsHtmlTags"  class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.conjunctiva'))}}
                    </div>
                    <div v-else-if="! v.od.conjunctiva.minLength &&  v.od.conjunctiva.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.conjunctiva'), v.od.conjunctiva.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.od.conjunctiva.maxLength &&  v.od.conjunctiva.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.conjunctiva'), v.od.conjunctiva.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.od.cornea"
                    :label="$t('biomicroscopy.cornea')"
                    :options="corneaOptions"
                    :invalid="
                        (v.od.cornea.$error)||
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
                        v-if="v.od.cornea.$error && !v.od.cornea.notContainsHtmlTags"  class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.cornea'))}}
                    </div>
                    <div v-else-if="! v.od.cornea.minLength &&  v.od.cornea.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.cornea'), v.od.cornea.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.od.cornea.maxLength &&  v.od.cornea.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.cornea'), v.od.cornea.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.od.ac"
                    :label="$t('biomicroscopy.ac')"
                    :options="acOptions"
                    :invalid="
                        (v.od.ac.$error)||
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
                        v-if="v.od.ac.$error && !v.od.ac.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.ac'))}}
                    </div>
                    <div v-else-if="! v.od.ac.minLength &&  v.od.ac.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.ac'), v.od.ac.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.od.ac.maxLength &&  v.od.ac.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.ac'), v.od.ac.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <!-- drop downs -->
                <CustomDropdown
                v-model="biomicroscopy.od.viterous"
                :label="$t('biomicroscopy.viterous')"
                :options="viterousOdOptions"
                :inputType="'text'"
                :invalidSelection="
                (
                    v.od.viterous.selection.$error
                )||
                (                  serializer_error.viterous
                    ? serializer_error.viterous.selection
                        ? serializer_error.viterous.selection.length > 0
                        : false
                    : false)
                "
                :invalidOther="
                (
                    v.od.viterous.other.$error
                )||
                (
                    serializer_error.viterous
                    ? serializer_error.viterous.other
                        ? serializer_error.viterous.other.length > 0
                        : false
                    : false
                )
                "
                >
                <div v-if="v.od.viterous.other.$error && !v.od.viterous.other.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('biomicroscopy.viterous'))}}
                </div>
                <div v-else-if="! v.od.viterous.other.minLength &&  v.od.viterous.other.$error" class="invalid-feedback">
                        {{minLengthError($t('biomicroscopy.viterous'), v.od.viterous.other.$params.minLength.min)}}
                </div>
                <div v-else-if="! v.od.viterous.other.maxLength &&  v.od.viterous.other.$error" class="invalid-feedback">
                        {{maxLengthError($t('biomicroscopy.viterous'), v.od.viterous.other.$params.maxLength.max)}}
                </div>                 
                </CustomDropdown>
            </div>
            <div class="form-group">
                <CustomDropdown
                v-model="biomicroscopy.od.iris"
                :label="$t('biomicroscopy.iris')"
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
                            {{htmlTagsError($t('biomicroscopy.iris'))}}
                </div>
                <div v-else-if="! v.od.iris.other.minLength &&  v.od.iris.other.$error" class="invalid-feedback">
                        {{minLengthError($t('biomicroscopy.iris'), v.od.iris.other.$params.minLength.min)}}
                </div>
                <div v-else-if="! v.od.iris.other.maxLength &&  v.od.iris.other.$error" class="invalid-feedback">
                        {{maxLengthError($t('biomicroscopy.iris'), v.od.iris.other.$params.maxLength.max)}}
                </div>                 
                </CustomDropdown>
            </div>
            <div class="form-group">
                <CustomDropdown
                v-model="biomicroscopy.od.eyeColour"
                :label="$t('biomicroscopy.eyeColour')"
                :options="eyeColourOdOptions"
                :inputType="'text'"
                :invalidSelection="
                (
                    v.od.eyeColour.selection.$error
                )||
                (                  serializer_error.eyeColour
                    ? serializer_error.eyeColour.selection
                        ? serializer_error.eyeColour.selection.length > 0
                        : false
                    : false)
                "
                :invalidOther="
                (
                    v.od.eyeColour.other.$error
                )||
                (
                    serializer_error.eyeColour
                    ? serializer_error.eyeColour.other
                        ? serializer_error.eyeColour.other.length > 0
                        : false
                    : false
                )
                "
                >
                <div v-if="v.od.eyeColour.other.$error && !v.od.eyeColour.other.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('biomicroscopy.eyeColour'))}}
                </div>
                <div v-else-if="! v.od.eyeColour.other.minLength &&  v.od.eyeColour.other.$error" class="invalid-feedback">
                        {{minLengthError($t('biomicroscopy.eyeColour'), v.od.eyeColour.other.$params.minLength.min)}}
                </div>
                <div v-else-if="! v.od.eyeColour.other.maxLength &&  v.od.eyeColour.other.$error" class="invalid-feedback">
                        {{maxLengthError($t('biomicroscopy.eyeColour'), v.od.eyeColour.other.$params.maxLength.max)}}
                </div>                 
                </CustomDropdown>
            </div>
                <!-- after drop down fields -->
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.od.lens"
                    :label="$t('biomicroscopy.lens')"
                    :options="lensOptions"
                    :invalid="
                        (v.od.lens.$error)||
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
                        v-if="v.od.lens.$error && !v.od.lens.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.lens'))}}
                    </div>
                    <div v-else-if="! v.od.lens.minLength &&  v.od.lens.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.lens'), v.od.lens.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.od.lens.maxLength &&  v.od.lens.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.lens'), v.od.lens.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.od.angle"
                    :label="$t('biomicroscopy.angle')"
                    :options="angleOptions"
                    :invalid="
                        (v.od.angle.$error)||
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
                        v-if="v.od.angle.$error && !v.od.angle.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.angle'))}}
                    </div>
                    <div v-else-if="! v.od.angle.minLength &&  v.od.angle.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.angle'), v.od.angle.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.od.angle.maxLength &&  v.od.angle.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.angle'), v.od.angle.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.od.tbut"
                    :label="$t('biomicroscopy.tbut')"
                    :options="tbutOptions"
                    :invalid="
                        (v.od.tbut.$error)||
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
                        v-if="v.od.tbut.$error && !v.od.tbut.notContainsHtmlTags"  class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.tbut'))}}
                    </div>
                    <div v-else-if="! v.od.tbut.minLength &&  v.od.tbut.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.tbut'), v.od.tbut.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.od.tbut.maxLength &&  v.od.tbut.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.tbut'), v.od.tbut.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.od.tvol"
                    :label="$t('biomicroscopy.tvol')"
                    :options="tvolOptions"
                    :invalid="
                        (v.od.tvol.$error)||
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
                        v-if="v.od.tvol.$error && !v.od.tvol.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.tvol'))}}
                    </div>
                    <div v-else-if="! v.od.tvol.minLength &&  v.od.tvol.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.tvol'), v.od.tvol.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.od.tvol.maxLength &&  v.od.tvol.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.tvol'), v.od.tvol.$params.maxLength.max)}}
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
                    v-model="biomicroscopy.os.lid"
                    :label="$t('biomicroscopy.lid')"
                    :options="lidOptions"
                    :invalid="
                        (v.os.lid.$error)||
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
                        v-if="v.os.lid.$error && !v.os.lid.notContainsHtmlTags"  class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.lid'))}}
                    </div>
                    <div v-else-if="! v.os.lid.minLength &&  v.os.lid.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.lid'), v.os.lid.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.os.lid.maxLength &&  v.os.lid.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.lid'), v.os.lid.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.os.conjunctiva"
                    :label="$t('biomicroscopy.conjunctiva')"
                    :options="conjunctivaOptions"
                    :invalid="
                        (v.os.conjunctiva.$error)||
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
                        v-if="v.os.conjunctiva.$error && !v.os.conjunctiva.notContainsHtmlTags"  class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.conjunctiva'))}}
                    </div>
                    <div v-else-if="! v.os.conjunctiva.minLength &&  v.os.conjunctiva.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.conjunctiva'), v.os.conjunctiva.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.os.conjunctiva.maxLength &&  v.os.conjunctiva.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.conjunctiva'), v.os.conjunctiva.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.os.cornea"
                    :label="$t('biomicroscopy.cornea')"
                    :options="corneaOptions"
                    :invalid="
                        (v.os.cornea.$error)||
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
                        v-if="v.os.cornea.$error && !v.os.cornea.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.cornea'))}}
                    </div>
                    <div v-else-if="! v.os.cornea.minLength &&  v.os.cornea.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.cornea'), v.os.cornea.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.os.cornea.maxLength &&  v.os.cornea.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.cornea'), v.os.cornea.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.os.ac"
                    :label="$t('biomicroscopy.ac')"
                    :options="acOptions"
                    :invalid="
                        (v.os.ac.$error)||
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
                        v-if="v.os.ac.$error && !v.os.ac.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.ac'))}}
                    </div>
                    <div v-else-if="! v.os.ac.minLength &&  v.os.ac.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.ac'), v.os.ac.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.os.ac.maxLength &&  v.os.ac.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.ac'), v.os.ac.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <!-- drop downs -->
                <CustomDropdown
                v-model="biomicroscopy.os.viterous"
                :label="$t('biomicroscopy.viterous')"
                :options="viterousOdOptions"
                :inputType="'text'"
                :invalidSelection="
                (
                    v.os.viterous.selection.$error
                )||
                (                  serializer_error.viterous
                    ? serializer_error.viterous.selection
                        ? serializer_error.viterous.selection.length > 0
                        : false
                    : false)
                "
                :invalidOther="
                (
                    v.os.viterous.other.$error
                )||
                (
                    serializer_error.viterous
                    ? serializer_error.viterous.other
                        ? serializer_error.viterous.other.length > 0
                        : false
                    : false
                )
                "
                >
                <div v-if="v.os.viterous.other.$error && !v.os.viterous.other.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('biomicroscopy.viterous'))}}
                </div>
                <div v-else-if="! v.os.viterous.other.minLength &&  v.os.viterous.other.$error" class="invalid-feedback">
                        {{minLengthError($t('biomicroscopy.viterous'), v.os.viterous.other.$params.minLength.min)}}
                </div>
                <div v-else-if="! v.os.viterous.other.maxLength &&  v.os.viterous.other.$error" class="invalid-feedback">
                        {{maxLengthError($t('biomicroscopy.viterous'), v.os.viterous.other.$params.maxLength.max)}}
                </div>                 
                </CustomDropdown>
            </div>
            <div class="form-group">
                <CustomDropdown
                v-model="biomicroscopy.os.iris"
                :label="$t('biomicroscopy.iris')"
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
                            {{htmlTagsError($t('biomicroscopy.iris'))}}
                </div>
                <div v-else-if="! v.os.iris.other.minLength &&  v.os.iris.other.$error" class="invalid-feedback">
                        {{minLengthError($t('biomicroscopy.iris'), v.os.iris.other.$params.minLength.min)}}
                </div>
                <div v-else-if="! v.os.iris.other.maxLength &&  v.os.iris.other.$error" class="invalid-feedback">
                        {{maxLengthError($t('biomicroscopy.iris'), v.os.iris.other.$params.maxLength.max)}}
                </div>                 
                </CustomDropdown>
            </div>
            <div class="form-group">
                <CustomDropdown
                v-model="biomicroscopy.os.eyeColour"
                :label="$t('biomicroscopy.eyeColour')"
                :options="eyeColourOdOptions"
                :inputType="'text'"
                :invalidSelection="
                (
                    v.os.eyeColour.selection.$error
                )||
                (                  serializer_error.eyeColour
                    ? serializer_error.eyeColour.selection
                        ? serializer_error.eyeColour.selection.length > 0
                        : false
                    : false)
                "
                :invalidOther="
                (
                    v.os.eyeColour.other.$error
                )||
                (
                    serializer_error.eyeColour
                    ? serializer_error.eyeColour.other
                        ? serializer_error.eyeColour.other.length > 0
                        : false
                    : false
                )
                "
                >
                <div v-if="v.os.eyeColour.other.$error && !v.os.eyeColour.other.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('biomicroscopy.eyeColour'))}}
                </div>
                <div v-else-if="! v.os.eyeColour.other.minLength &&  v.os.eyeColour.other.$error" class="invalid-feedback">
                        {{minLengthError($t('biomicroscopy.eyeColour'), v.os.eyeColour.other.$params.minLength.min)}}
                </div>
                <div v-else-if="! v.os.eyeColour.other.maxLength &&  v.os.eyeColour.other.$error" class="invalid-feedback">
                        {{maxLengthError($t('biomicroscopy.eyeColour'), v.os.eyeColour.other.$params.maxLength.max)}}
                </div>                 
                </CustomDropdown>
            </div>
                <!-- after drop down fields -->
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.os.lens"
                    :label="$t('biomicroscopy.lens')"
                    :options="lensOptions"
                    :invalid="
                        (v.os.lens.$error)||
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
                        v-if="v.os.lens.$error && !v.os.lens.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.lens'))}}
                    </div>
                    <div v-else-if="! v.os.lens.minLength &&  v.os.lens.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.lens'), v.os.lens.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.os.lens.maxLength &&  v.os.lens.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.lens'), v.os.lens.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.os.angle"
                    :label="$t('biomicroscopy.angle')"
                    :options="angleOptions"
                    :invalid="
                        (v.os.angle.$error)||
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
                        v-if="v.os.angle.$error && !v.os.angle.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.angle'))}}
                    </div>
                    <div v-else-if="! v.os.angle.minLength &&  v.os.angle.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.angle'), v.os.angle.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.os.angle.maxLength &&  v.os.angle.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.angle'), v.os.angle.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.os.tbut"
                    :label="$t('biomicroscopy.tbut')"
                    :options="tbutOptions"
                    :invalid="
                        (v.os.tbut.$error)||
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
                        v-if="v.os.tbut.$error && !v.os.tbut.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.tbut'))}}
                    </div>
                    <div v-else-if="! v.os.tbut.minLength &&  v.os.tbut.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.tbut'), v.os.tbut.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.os.tbut.maxLength &&  v.os.tbut.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.tbut'), v.os.tbut.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
            <div class="form-group">
                <CustomDropMenu 
                    v-model="biomicroscopy.os.tvol"
                    :label="$t('biomicroscopy.tvol')"
                    :options="tvolOptions"
                    :invalid="
                        (v.os.tvol.$error)||
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
                        v-if="v.os.tvol.$error && !v.os.tvol.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.tvol'))}}
                    </div>
                    <div v-else-if="! v.os.tvol.minLength &&  v.os.tvol.$error" class="invalid-feedback">
                            {{minLengthError($t('biomicroscopy.tvol'), v.os.tvol.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.os.tvol.maxLength &&  v.os.tvol.$error" class="invalid-feedback">
                            {{maxLengthError($t('biomicroscopy.tvol'), v.os.tvol.$params.maxLength.max)}}
                    </div> 
                </CustomDropMenu>
            </div>
        </div>
    </div>
    <Divider></Divider>
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label class="form-label">{{$t('biomicroscopy.note.label')}}</label>
                <textarea
                    v-model="biomicroscopy.note" 
                    :placeholder="$t('biomicroscopy.note.placeholder')" 
                    class="form-control"
                    :class="{
                        'is-invalid':
                        (v.note.$error)
                        ||
                        (serializer_error.note?serializer_error.note.length>0:false)
                    }" 
                ></textarea>
                <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('biomicroscopy.note.label'))}}
                </div>
                <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                        {{minLengthError($t('biomicroscopy.note.label'), v.note.$params.minLength.min)}}
                </div>
                <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                        {{maxLengthError($t('biomicroscopy.note.label'), v.note.$params.maxLength.max)}}
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
import CustomDropMenu from "@/components/global/custom/CustomDropMenu.vue";
import Divider from '@/components/global/utilities/Divider.vue'
import ImageEditor from '@/components/global/image-plugin/ImageEditor.vue'
import ResetButton from "@/components/global/utilities/ResetButton.vue";
////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,numericError} from '@/validation/errors'
import anterior from "@/assets/global/image-plugin-templates/anterior.svg"
import odSeg from "@/assets/global/image-plugin-templates/odSeg.svg"
import osSeg from "@/assets/global/image-plugin-templates/osSeg.svg"
import whiteBackground from "@/assets/global/image-plugin-templates/White-Background.svg"
//////////////////////////////////////////////////////////
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
    // editwidth:{
    //         type:Object, 
    //     },
},
components:{
    Base,
    ImageEditor,
    CustomDropdown,
    CustomDropMenu,
    ResetButton,
    Divider,
},
data(){
    return{
        osControls:{
            templateImage:anterior,
        },
        odControls:{
            templateImage:anterior,
        },
        osSegmentationControls:{
            templateImage:osSeg,
        },
        odSegmentationControls:{
            templateImage:odSeg,
        },
        notationOsImageControls:{
            templateImage:whiteBackground,
        },
   
    }
}, ///////////////////////////
    computed: {
        ...mapGetters("detailsOphthalmic/ophthalmic", ["getBiomicroscopy"]),
        biomicroscopy: {
            get() {
                return this.getBiomicroscopy;
            },
            set(value) {
                this.$store.dispatch("detailsOphthalmic/ophthalmic/setBiomicroscopy", value);
            },
        }
    },
/////////////////////////////////
    methods:{
        htmlTagsError,
        minLengthError,
        maxLengthError,
        numericError,
        ////////////////////////////
        reset() {
        this.biomicroscopy = {
                os: {
                    lid: "",
                    conjunctiva: "",
                    cornea: "",
                    ac: "",
                    viterous: {
                        selection: null,
                        other: "",
                    },
                    iris: {
                        selection:null,
                        other: "",
                    },
                    eyeColour: {
                        selection: null,
                        other: "",
                    },
                    lens: "",
                    angle: "",
                    tbut: "",
                    tvol: "",
                    image: "",
                },
                od: {
                    lid: "",
                    conjunctiva: "",
                    cornea: "",
                    ac: "",
                    viterous: {
                        selection: null,
                        other: "",
                    },
                    iris: {
                        selection:null,
                        other: "",
                    },
                    eyeColour: {
                        selection: null,
                        other: "",
                    },
                    lens: "",
                    angle: "",
                    tbut: "",
                    tvol: "",
                    image: "",
                },
                segmentation: {
                    odImage: "",
                    osImage: "",
                },
                notationOsImage: "",
                note: "",
            },
                this.v.$reset();   
            },
        //////////////////////////////////
        copyToOd(){
            this.biomicroscopy.od=JSON.parse(JSON.stringify(this.biomicroscopy.os));
        },
        copyToOs(){
            this.biomicroscopy.os=JSON.parse(JSON.stringify(this.biomicroscopy.od));
        },
    },
}
</script>
<style lang="scss" scoped>
.editw40{
     height: 40% !important;
     width: 40% !important;
     display: block;

}
.biomicroscopy{

}
</style>