<template>
    <div class="fundus-exam">
        <Base>
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t("fundusExam.header") }}</h4>
                    <ResetButton @reset="reset"></ResetButton>
                </div>
        </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.ophthalmoscopy"
                        :label="$t('fundusExam.ophthalmoscopy.label')"
                        :options="ophthalmoscopyOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.ophthalmoscopy.selection.$error
                        )||
                        (                  serializer_error.ophthalmoscopy
                            ? serializer_error.ophthalmoscopy.selection
                                ? serializer_error.ophthalmoscopy.selection.length > 0
                                : false
                            : false)
                        "
                        :invalidOther="
                        (
                            v.ophthalmoscopy.other.$error
                        )||
                        (
                            serializer_error.ophthalmoscopy
                            ? serializer_error.ophthalmoscopy.other
                                ? serializer_error.ophthalmoscopy.other.length > 0
                                : false
                            : false
                        )
                        "
                        >
                        <div v-if="v.ophthalmoscopy.other.$error && !v.ophthalmoscopy.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.ophthalmoscopy.label'))}}
                        </div>
                        <div v-else-if="! v.ophthalmoscopy.other.minLength &&  v.ophthalmoscopy.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.ophthalmoscopy.label'), v.ophthalmoscopy.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.ophthalmoscopy.other.maxLength &&  v.ophthalmoscopy.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.ophthalmoscopy.label'), v.ophthalmoscopy.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>
                    <div class="form-group">
                        <CustomDropMenu 
                            v-model="fundusExam.lens"
                            :label="$t('fundusExam.lens.label')"
                            :options="lensOptions"
                            :invalid="
                                (v.lens.$error)||
                                (check_error.od?
                                    (check_error.od.spherical?check_error.od.spherical.length>0:false):false
                                )
                                ||
                                (serializer_error.od?
                                    (serializer_error.od.spherical?serializer_error.od.spherical.length>0:false):false
                                )
                            " 
                        >                    
                            <small 
                                v-if="v.lens.$error && !v.lens.notContainsHtmlTags"  class="p-invalid">
                                {{htmlTagsError($t('fundusExam.lens.label'))}}
                            </small>
                            <div v-else-if="! v.lens.minLength &&  v.lens.$error" class="invalid-feedback">
                                    {{minLengthError($t('fundusExam.lens.label'), v.lens.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.lens.maxLength &&  v.lens.$error" class="invalid-feedback">
                                    {{maxLengthError($t('fundusExam.lens.label'), v.lens.$params.maxLength.max)}}
                            </div> 
                        </CustomDropMenu>
                    </div>
                    <div class="form-group">
                        <div class="field-checkbox d-flex align-items-center">
                            <Checkbox id="binary" v-model="fundusExam.dilated" :binary="true" />
                            <label class="form-label my-0 ms-2" for="binary">{{$t('fundusExam.dilated.label')}}</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="offset-md-2 col-md-8">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label text-center">{{ $t('measurementsLabels.od') }}</label>
                                <ImageEditor
                                    v-model="fundusExam.od.image"
                                    :editorControls="odControls"
                                    :staticRef="'odControls'"
                                    :uploadOnly="false"
                                    >
                                </ImageEditor>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label text-center">{{ $t('measurementsLabels.os') }}</label>
                                <ImageEditor
                                    v-model="fundusExam.os.image"
                                    :editorControls="osControls"
                                    :staticRef="'osControls'"
                                    :uploadOnly="false"
                                    >
                                </ImageEditor>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.od.pupillaryReflex"
                        :label="$t('fundusExam.pupillaryReflex.label')"
                        :options="pupillaryOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.od.pupillaryReflex.selection.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.pupillaryReflex?
                            (serializer_error.od.pupillaryReflex.selection?
                            (serializer_error.od.pupillaryReflex.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.od.pupillaryReflex.other.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.pupillaryReflex?
                            (serializer_error.od.pupillaryReflex.other?
                            (serializer_error.od.pupillaryReflex.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.od.pupillaryReflex.other.$error && !v.od.pupillaryReflex.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.pupillaryReflex.label'))}}
                        </div>
                        <div v-if="! v.od.pupillaryReflex.other.minLength &&  v.od.pupillaryReflex.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.pupillaryReflex.label'), v.od.pupillaryReflex.other.$params.minLength.min)}}
                        </div>
                        <div v-if="! v.od.pupillaryReflex.other.maxLength &&  v.od.pupillaryReflex.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.pupillaryReflex.label'), v.od.pupillaryReflex.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.od.vitreous"
                        :label="$t('fundusExam.vitreous.label')"
                        :options="vitreousOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.od.vitreous.selection.$error

                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.vitreous?
                            (serializer_error.od.vitreous.selection?
                            (serializer_error.od.vitreous.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.od.vitreous.other.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.vitreous?
                            (serializer_error.od.vitreous.other?
                            (serializer_error.od.vitreous.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.od.vitreous.other.$error && !v.od.vitreous.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.vitreous.label'))}}
                        </div>
                        <div v-if="! v.od.vitreous.other.minLength &&  v.od.vitreous.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.vitreous.label'), v.od.vitreous.other.$params.minLength.min)}}
                        </div>
                        <div v-if="! v.od.vitreous.other.maxLength &&  v.od.vitreous.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.vitreous.label'), v.od.vitreous.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>
                    <div class="form-group">
                        <CustomDropMenu 
                            v-model="fundusExam.od.opticDisc"
                            :label="$t('fundusExam.opticDisc.label')"
                            :options="opticOptions"
                            :invalid="
                        (
                            v.od.opticDisc.$invalid
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.opticDisc?serializer_error.od.opticDisc:false):false
                        )
                        "
                        >                    
                            <div 
                                v-if="v.od.opticDisc.$error && !v.od.opticDisc.notContainsHtmlTags"  class="invalid-feedback">
                                {{htmlTagsError($t('fundusExam.opticDisc.label'))}}
                            </div>
                            <div v-if="! v.od.opticDisc.minLength &&  v.od.opticDisc.$error" class="invalid-feedback">
                                    {{minLengthError($t('fundusExam.opticDisc.label'), v.od.opticDisc.$params.minLength.min)}}
                            </div>
                            <div v-if="! v.od.opticDisc.maxLength &&  v.od.opticDisc.$error" class="invalid-feedback">
                                    {{maxLengthError($t('fundusExam.opticDisc.label'), v.od.opticDisc.$params.maxLength.max)}}
                            </div> 
                        </CustomDropMenu>
                    </div>
                    <div class="form-group">
                        <CustomDropMenu 
                            v-model="fundusExam.od.cdRatio"
                            :label="$t('fundusExam.cdRatio.label')"
                            :options="ratioOptions"
                            :invalid="
                        (
                            v.od.cdRatio.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.cdRatio?serializer_error.od.cdRatio:false):false
                        )
                        "
                        >                    
                            <div 
                                v-if="v.od.cdRatio.$error && !v.od.cdRatio.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('fundusExam.cdRatio.label'))}}
                            </div>
                            <div v-if="! v.od.cdRatio.minLength &&  v.od.cdRatio.$error" class="invalid-feedback">
                                    {{minLengthError($t('fundusExam.cdRatio.label'), v.od.cdRatio.$params.minLength.min)}}
                            </div>
                            <div v-if="! v.od.cdRatio.maxLength &&  v.od.cdRatio.$error" class="invalid-feedback">
                                    {{maxLengthError($t('fundusExam.cdRatio.label'), v.od.cdRatio.$params.maxLength.max)}}
                            </div> 
                        </CustomDropMenu>
                    </div>
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.od.vessels"
                        :label="$t('fundusExam.vessels.label')"
                        :options="vesselsOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.od.vessels.selection.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.vessels?
                            (serializer_error.od.vessels.selection?
                            (serializer_error.od.vessels.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.od.vessels.other.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.vessels?
                            (serializer_error.od.vessels.other?
                            (serializer_error.od.vessels.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.od.vessels.other.$error && !v.od.vessels.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.vessels.label'))}}
                        </div>
                        <div v-else-if="! v.od.vessels.other.minLength &&  v.od.vessels.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.vessels.label'), v.od.vessels.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.vessels.other.maxLength &&  v.od.vessels.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.vessels.label'), v.od.vessels.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>                    
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.od.macula"
                        :label="$t('fundusExam.macula.label')"
                        :options="maculaOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.od.macula.selection.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.macula?
                            (serializer_error.od.macula.selection?
                            (serializer_error.od.macula.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.od.macula.other.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.macula?
                            (serializer_error.od.macula.other?
                            (serializer_error.od.macula.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.od.macula.other.$error && !v.od.macula.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.macula.label'))}}
                        </div>
                        <div v-else-if="! v.od.macula.other.minLength &&  v.od.macula.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.macula.label'), v.od.macula.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.macula.other.maxLength &&  v.od.macula.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.macula.label'), v.od.macula.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>
                    <div class="form-group">
                        <div class="field-checkbox d-flex align-items-center">
                            <Checkbox id="binary" v-model="fundusExam.od.fovealReflex" :binary="true" />
                            <label class="form-label my-0 ms-2" for="binary">{{$t('fundusExam.fovealReflex.label')}}</label>
                        </div>
                    </div>   
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.od.retina"
                        :label="$t('fundusExam.retina.label')"
                        :options="retinaOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.od.retina.selection.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.retina?
                            (serializer_error.od.retina.selection?
                            (serializer_error.od.retina.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.od.retina.other.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.retina?
                            (serializer_error.od.retina.other?
                            (serializer_error.od.retina.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.od.retina.other.$error && !v.od.retina.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.retina.label'))}}
                        </div>
                        <div v-else-if="! v.od.retina.other.minLength &&  v.od.retina.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.retina.label'), v.od.retina.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.retina.other.maxLength &&  v.od.retina.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.retina.label'), v.od.retina.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>                                     
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.od.posteriorPole"
                        :label="$t('fundusExam.posteriorPole.label')"
                        :options="poleOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.od.posteriorPole.selection.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.posteriorPole?
                            (serializer_error.od.posteriorPole.selection?
                            (serializer_error.od.posteriorPole.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.od.posteriorPole.other.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.posteriorPole?
                            (serializer_error.od.posteriorPole.other?
                            (serializer_error.od.posteriorPole.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.od.posteriorPole.other.$error && !v.od.posteriorPole.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.posteriorPole.label'))}}
                        </div>
                        <div v-else-if="! v.od.posteriorPole.other.minLength &&  v.od.posteriorPole.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.posteriorPole.label'), v.od.posteriorPole.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.posteriorPole.other.maxLength &&  v.od.posteriorPole.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.posteriorPole.label'), v.od.posteriorPole.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>                                     
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.od.periphery"
                        :label="$t('fundusExam.periphery.label')"
                        :options="peripheryOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.od.periphery.selection.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.periphery?
                            (serializer_error.od.periphery.selection?
                            (serializer_error.od.periphery.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.od.periphery.other.$error
                        )
                        ||
                        (   serializer_error.od?
                            (serializer_error.od.periphery?
                            (serializer_error.od.periphery.other?
                            (serializer_error.od.periphery.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.od.periphery.other.$error && !v.od.periphery.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.periphery.label'))}}
                        </div>
                        <div v-else-if="! v.od.periphery.other.minLength &&  v.od.periphery.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.periphery.label'), v.od.periphery.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.od.periphery.other.maxLength &&  v.od.periphery.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.periphery.label'), v.od.periphery.other.$params.maxLength.max)}}
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
                        v-model="fundusExam.os.pupillaryReflex"  

                        
                        :label="$t('fundusExam.pupillaryReflex.label')"
                        :options="pupillaryOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.os.pupillaryReflex.selection.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.pupillaryReflex?
                            (serializer_error.os.pupillaryReflex.selection?
                            (serializer_error.os.pupillaryReflex.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.os.pupillaryReflex.other.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.pupillaryReflex?
                            (serializer_error.os.pupillaryReflex.other?
                            (serializer_error.os.pupillaryReflex.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.os.pupillaryReflex.other.$error && !v.os.pupillaryReflex.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.pupillaryReflex.label'))}}
                        </div>
                        <div v-else-if="! v.os.pupillaryReflex.other.minLength &&  v.os.pupillaryReflex.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.pupillaryReflex.label'), v.os.pupillaryReflex.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.pupillaryReflex.other.maxLength &&  v.os.pupillaryReflex.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.pupillaryReflex.label'), v.os.pupillaryReflex.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.os.vitreous"
                        :label="$t('fundusExam.vitreous.label')"
                        :options="vitreousOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.os.vitreous.selection.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.vitreous?
                            (serializer_error.os.vitreous.selection?
                            (serializer_error.os.vitreous.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.os.vitreous.other.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.vitreous?
                            (serializer_error.os.vitreous.other?
                            (serializer_error.os.vitreous.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.os.vitreous.other.$error && !v.os.vitreous.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.vitreous.label'))}}
                        </div>
                        <div v-else-if="! v.os.vitreous.other.minLength &&  v.os.vitreous.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.vitreous.label'), v.os.vitreous.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.vitreous.other.maxLength &&  v.os.vitreous.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.vitreous.label'), v.os.vitreous.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>
                    <div class="form-group">
                        <CustomDropMenu 
                            v-model="fundusExam.os.opticDisc"
                            :label="$t('fundusExam.opticDisc.label')"
                            :options="opticOptions"
                            :invalid="
                        (
                            v.os.opticDisc.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.opticDisc?serializer_error.os.opticDisc:false):false
                        )
                        "
                        >                    
                            <div 
                                v-if="v.os.opticDisc.$error && !v.os.opticDisc.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('fundusExam.opticDisc.label'))}}
                            </div>
                            <div v-else-if="! v.os.opticDisc.minLength &&  v.os.opticDisc.$error" class="invalid-feedback">
                                    {{minLengthError($t('fundusExam.opticDisc.label'), v.os.opticDisc.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.os.opticDisc.maxLength &&  v.os.opticDisc.$error" class="invalid-feedback">
                                    {{maxLengthError($t('fundusExam.opticDisc.label'), v.os.opticDisc.$params.maxLength.max)}}
                            </div> 
                        </CustomDropMenu>
                    </div>
                    <div class="form-group">
                        <CustomDropMenu 
                            v-model="fundusExam.os.cdRatio"
                            :label="$t('fundusExam.cdRatio.label')"
                            :options="ratioOptions"
                            :invalid="
                        (
                            v.os.cdRatio.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.cdRatio?serializer_error.os.cdRatio:false):false
                        )
                        "
                        >                    
                            <div 
                                v-if="v.os.cdRatio.$error && !v.os.cdRatio.notContainsHtmlTags"   class="invalid-feedback">
                                {{htmlTagsError($t('fundusExam.cdRatio.label'))}}
                            </div>
                            <div v-else-if="! v.os.cdRatio.minLength &&  v.os.cdRatio.$error" class="invalid-feedback">
                                    {{minLengthError($t('fundusExam.cdRatio.label'), v.os.cdRatio.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.os.cdRatio.maxLength &&  v.os.cdRatio.$error" class="invalid-feedback">
                                    {{maxLengthError($t('fundusExam.cdRatio.label'), v.os.cdRatio.$params.maxLength.max)}}
                            </div> 
                        </CustomDropMenu>
                    </div>
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.os.vessels"
                        :label="$t('fundusExam.vessels.label')"
                        :options="vesselsOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.os.vessels.selection.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.vessels?
                            (serializer_error.os.vessels.selection?
                            (serializer_error.os.vessels.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.os.vessels.other.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.vessels?
                            (serializer_error.os.vessels.other?
                            (serializer_error.os.vessels.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.os.vessels.other.$error && !v.os.vessels.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.vessels.label'))}}
                        </div>
                        <div v-else-if="! v.os.vessels.other.minLength &&  v.os.vessels.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.vessels.label'), v.os.vessels.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.vessels.other.maxLength &&  v.os.vessels.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.vessels.label'), v.os.vessels.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>                    
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.os.macula"
                        :label="$t('fundusExam.macula.label')"
                        :options="maculaOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.os.macula.selection.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.macula?
                            (serializer_error.os.macula.selection?
                            (serializer_error.os.macula.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.os.macula.other.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.macula?
                            (serializer_error.os.macula.other?
                            (serializer_error.os.macula.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.os.macula.other.$error && !v.os.macula.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.macula.label'))}}
                        </div>
                        <div v-else-if="! v.os.macula.other.minLength &&  v.os.macula.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.macula.label'), v.os.macula.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.macula.other.maxLength &&  v.os.macula.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.macula.label'), v.os.macula.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>
                    <div class="form-group">
                        <div class="field-checkbox d-flex align-items-center">
                            <Checkbox id="binary" v-model="fundusExam.os.fovealReflex" :binary="true" />
                            <label class="form-label my-0 ms-2" for="binary">{{$t('fundusExam.fovealReflex.label')}}</label>
                        </div>
                    </div>   
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.os.retina"
                        :label="$t('fundusExam.retina.label')"
                        :options="retinaOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.os.retina.selection.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.retina?
                            (serializer_error.os.retina.selection?
                            (serializer_error.os.retina.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.os.retina.other.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.retina?
                            (serializer_error.os.retina.other?
                            (serializer_error.os.retina.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.os.retina.other.$error && !v.os.retina.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.retina.label'))}}
                        </div>
                        <div v-else-if="! v.os.retina.other.minLength &&  v.os.retina.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.retina.label'), v.os.retina.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.retina.other.maxLength &&  v.os.retina.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.retina.label'), v.os.retina.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>                                     
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.os.posteriorPole"
                        :label="$t('fundusExam.posteriorPole.label')"
                        :options="poleOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.os.posteriorPole.selection.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.posteriorPole?
                            (serializer_error.os.posteriorPole.selection?
                            (serializer_error.os.posteriorPole.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.os.posteriorPole.other.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.posteriorPole?
                            (serializer_error.os.posteriorPole.other?
                            (serializer_error.os.posteriorPole.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.os.posteriorPole.other.$error && !v.os.posteriorPole.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.posteriorPole.label'))}}
                        </div>
                        <div v-else-if="! v.os.posteriorPole.other.minLength &&  v.os.posteriorPole.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.posteriorPole.label'), v.os.posteriorPole.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.posteriorPole.other.maxLength &&  v.os.posteriorPole.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.posteriorPole.label'), v.os.posteriorPole.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>                                     
                    <div class="form-group">
                        <CustomDropdown
                        v-model="fundusExam.os.periphery"
                        :label="$t('fundusExam.periphery.label')"
                        :options="peripheryOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.os.periphery.selection.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.periphery?
                            (serializer_error.os.periphery.selection?
                            (serializer_error.os.periphery.selection):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.os.periphery.other.$error
                        )
                        ||
                        (   serializer_error.os?
                            (serializer_error.os.periphery?
                            (serializer_error.os.periphery.other?
                            (serializer_error.os.periphery.other):false):false):false
                        )
                        "
                        >
                        <div v-if="v.os.periphery.other.$error && !v.os.periphery.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fundusExam.periphery.label'))}}
                        </div>
                        <div v-else-if="! v.os.periphery.other.minLength &&  v.os.periphery.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.periphery.label'), v.os.periphery.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.os.periphery.other.maxLength &&  v.os.periphery.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.periphery.label'), v.os.periphery.other.$params.maxLength.max)}}
                        </div>                 
                        </CustomDropdown>
                    </div>                                     
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">{{$t('fundusExam.note.label')}}</label>
                        <textarea
                            v-model="fundusExam.note" 
                            :placeholder="$t('fundusExam.note.placeholder')" 
                            class="form-control"
                            :class="{
                                'is-invalid':
                                (v.note.$error)
                                ||
                                (serializer_error.note?serializer_error.note.length>0:false)
                            }" 
                        ></textarea>
                        <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('fundusExam.note.label'))}}
                        </div>
                        <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                                {{minLengthError($t('fundusExam.note.label'), v.note.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                                {{maxLengthError($t('fundusExam.note.label'), v.note.$params.maxLength.max)}}
                        </div> 
                    </div>
                </div>
            </div>
        </Base>
    </div>
</template>
<i18n src="@/lang/mr/ophthalmic/posterior.json"></i18n>
<i18n src="@/lang/mr/ophthalmic/measurements.json"></i18n>

<script>
import Base from '@/components/global/utilities/Base.vue'
import CustomDropMenu from "@/components/global/custom/CustomDropMenu.vue";
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue"; 
import ImageEditor from '@/components/global/image-plugin/ImageEditor.vue'
import ResetButton from "@/components/global/utilities/ResetButton.vue";
////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,numericError} from '@/validation/errors'
//////////////////////////////////////////////////////////
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import posteriorOptions from "@/mixins/mr/ophthalmic/options/posteriorOptions"
import { mapGetters } from "vuex";
import fundus from "@/assets/global/image-plugin-templates/fundus.svg"
export default {
    mixins:[measurementsOptions,posteriorOptions],
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
        ImageEditor,
        CustomDropMenu,
        CustomDropdown,
        ResetButton,
        // Divider,
    },
    data(){
        return {
            osControls:{
                templateImage:fundus,
            },
            odControls:{
                templateImage:fundus,
            },
           
        }
    },
    ////////////////////////////////////////
  
  computed: {
        ...mapGetters("detailsOphthalmic/ophthalmic", ["getFundusExam"]),
        fundusExam: {
            get() {
                return this.getFundusExam;
            },
            set(value) {
                this.$store.dispatch("detailsOphthalmic/ophthalmic/setFundusExam", value);
            },
        }
    },
    ////////////////////////////////////
    methods:{
        htmlTagsError,
        minLengthError,
        maxLengthError,
        numericError,
        ////////////////////////////////
           reset() {
            this.fundusExam = {
                lens: "",
                ophthalmoscopy: {
                    selection:null,
                    other: "",
                },
                dilated: false,
                od: {
                    pupillaryReflex: {
                    selection:null,
                    other: "",
                    },
                    vitreous: {
                    selection: null,
                    other: "",
                    },
                    opticDisc: "",
                    cdRatio: "",
                    vessels: {
                    selection: null,
                    other: "",
                    },
                    macula: {
                    selection: null,
                    other: "",
                    },
                    fovealReflex: false,
                    retina: {
                    selection:null,
                    other: "",
                    },
                    posteriorPole: {
                    selection:null,
                    other: "",
                    },
                    periphery: {
                    selection:null,
                    other: "",
                    },
                    image: "",
                },
                os: {
                    pupillaryReflex: {
                    selection: null,
                    other: "",
                    },
                    vitreous: {
                    selection: null,
                    other: "",
                    },
                    opticDisc: "",
                    cdRatio: "",
                    vessels: {
                    selection: null,
                    other: "",
                    },
                    macula: {
                    selection: null,
                    other: "",
                    },
                    fovealReflex: false,
                    retina: {
                    selection: null,
                    other: "",
                    },
                    posteriorPole: {
                    selection:null,
                    other: "",
                    },
                    periphery: {
                    selection:null,
                    other: "",
                    },
                    image: "",
                },
                note: "",
            },
            this.v.$reset();   
         },
         ////////////////////////////
        copyToOd(){
            console.log(this.fundusExam.os)
            this.fundusExam.od=JSON.parse(JSON.stringify(this.fundusExam.os));
        },
        copyToOs(){
            this.fundusExam.os=JSON.parse(JSON.stringify(this.fundusExam.od));
        },
    },
}
</script>

<style>

</style>