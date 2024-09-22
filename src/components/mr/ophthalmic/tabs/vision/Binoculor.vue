<template>
<div class="binoculor">
        <Base>
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t("binoculor.header") }}</h4>
                    <ResetButton @reset="reset"></ResetButton>
                </div>
            </div>
        <div class="row">
            <!-- Phorias -->
            <div class="col-md-8">
                <h4>{{$t('binoculor.phorias.heading')}}</h4>
                <div class="row">
                    <div class="col-md-6">
                        <h6>{{$t('measurementsLabels.distantVision')}}</h6>
                        <div class="form-group">
                            <label class="form-label">{{$t('measurementsLabels.h')}}</label>
                            <CustomDropMenu
                            v-model="binoculor.phorias.distantVision.h"
                            :options="hOptions"
                            :inputType="'text'"
                            :invalid="
                                (v.phorias.distantVision.h.$error)||
                                (check_error.phorias?
                                    (check_error.phorias.distantVision.h?check_error.phorias.distantVision.h.length>0:false):false
                                )
                                ||
                                (serializer_error.phorias?
                                    (serializer_error.phorias.distantVision.h?serializer_error.phorias.distantVision.h.length>0:false):false
                                )
                            " 
                        >                    
                            <div 
                                v-if="v.phorias.distantVision.h.$error && !v.phorias.distantVision.h.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('measurementsLabels.h'))}}
                            </div>
                            <div v-else-if="! v.phorias.distantVision.h.minLength &&  v.phorias.distantVision.h.$error" class="invalid-feedback">
                                    {{minLengthError($t('measurementsLabels.h'), v.phorias.distantVision.h.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.phorias.distantVision.h.maxLength &&  v.phorias.distantVision.h.$error" class="invalid-feedback">
                                    {{maxLengthError($t('measurementsLabels.h'), v.phorias.distantVision.h.$params.maxLength.max)}}
                            </div> 
                            </CustomDropMenu>
                        </div>
                        <div class="form-group">
                            <label class="form-label">{{$t('measurementsLabels.v')}}</label>
                            <CustomDropMenu
                            v-model="binoculor.phorias.distantVision.v"
                            :options="hOptions"
                            :inputType="'text'"
                            :invalid="
                                (v.phorias.distantVision.v.$error)||
                                (check_error.phorias?
                                    (check_error.phorias.distantVision.v?check_error.phorias.distantVision.v.length>0:false):false
                                )
                                ||
                                (serializer_error.phorias?
                                    (serializer_error.phorias.distantVision.v?serializer_error.phorias.distantVision.v.length>0:false):false
                                )
                            " 
                        >                    
                            <div 
                                v-if="v.phorias.distantVision.v.$error && !v.phorias.distantVision.v.notContainsHtmlTags"   class="invalid-feedback">
                                {{htmlTagsError($t('measurementsLabels.v'))}}
                            </div>
                            <div v-else-if="! v.phorias.distantVision.v.minLength &&  v.phorias.distantVision.v.$error" class="invalid-feedback">
                                    {{minLengthError($t('measurementsLabels.v'), v.phorias.distantVision.v.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.phorias.distantVision.v.maxLength &&  v.phorias.distantVision.v.$error" class="invalid-feedback">
                                    {{maxLengthError($t('measurementsLabels.v'), v.phorias.distantVision.v.$params.maxLength.max)}}
                            </div> 
                            </CustomDropMenu>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h6>{{$t('measurementsLabels.nearVision')}}</h6>
                        <div class="form-group">
                            <label class="form-label">{{$t('measurementsLabels.h')}}</label>
                            <CustomDropMenu
                            v-model="binoculor.phorias.nearVision.h"
                            :options="hOptions"
                            :inputType="'text'"
                            :invalid="
                                (v.phorias.nearVision.h.$error)||
                                (check_error.phorias?
                                    (check_error.phorias.nearVision.h?check_error.phorias.nearVision.h.length>0:false):false
                                )
                                ||
                                (serializer_error.phorias?
                                    (serializer_error.phorias.nearVision.h?serializer_error.phorias.nearVision.h.length>0:false):false
                                )
                            " 
                        >                    
                            <div 
                                v-if="v.phorias.nearVision.h.$error && !v.phorias.nearVision.h.notContainsHtmlTags"  class="invalid-feedback">
                                {{htmlTagsError($t('measurementsLabels.h'))}}
                            </div>
                            <div v-else-if="! v.phorias.nearVision.h.minLength &&  v.phorias.nearVision.h.$error" class="invalid-feedback">
                                    {{minLengthError($t('measurementsLabels.h'), v.phorias.nearVision.h.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.phorias.nearVision.h.maxLength &&  v.phorias.nearVision.h.$error" class="invalid-feedback">
                                    {{maxLengthError($t('measurementsLabels.h'), v.phorias.nearVision.h.$params.maxLength.max)}}
                            </div> 
                            </CustomDropMenu>
                        </div>
                        <div class="form-group">
                            <label class="form-label">{{$t('measurementsLabels.v')}}</label>
                            <CustomDropMenu
                            v-model="binoculor.phorias.nearVision.v"
                            :options="hOptions"
                            :inputType="'text'"
                            :invalid="
                                (v.phorias.nearVision.v.$error)||
                                (check_error.phorias?
                                    (check_error.phorias.nearVision.v?check_error.phorias.nearVision.v.length>0:false):false
                                )
                                ||
                                (serializer_error.phorias?
                                    (serializer_error.phorias.nearVision.v?serializer_error.phorias.nearVision.v.length>0:false):false
                                )
                            " 
                        >                    
                            <div 
                                v-if="v.phorias.nearVision.v.$error && !v.phorias.nearVision.v.notContainsHtmlTags"  class="invalid-feedback">
                                {{htmlTagsError($t('measurementsLabels.v'))}}
                            </div>
                            <div v-else-if="! v.phorias.nearVision.v.minLength &&  v.phorias.nearVision.v.$error" class="invalid-feedback">
                                    {{minLengthError($t('measurementsLabels.v'), v.phorias.nearVision.v.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.phorias.nearVision.v.maxLength &&  v.phorias.nearVision.v.$error" class="invalid-feedback">
                                    {{maxLengthError($t('measurementsLabels.v'), v.phorias.nearVision.v.$params.maxLength.max)}}
                            </div> 
                            </CustomDropMenu>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Pursuits -->
            <div class="col-md-4">
                <h4>{{$t('binoculor.pursuits.heading')}}</h4>
                <h6 class="invisible">pursuits</h6>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.os')}}</label>
                    <CustomDropdown
                        v-model="binoculor.pursuits.os"
                        :options="pursuitsOsOptions"
                        :inputType="'text'"
                        :invalidSelection=" v.pursuits.os.selection.$error "
                        :invalidOther="v.pursuits.os.other.$error"
                        >
                        <div v-if="v.pursuits.os.other.$error && !v.pursuits.os.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('measurementsLabels.os'))}}
                        </div>
                        <div v-else-if="! v.pursuits.os.other.minLength &&  v.pursuits.os.other.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.os'), v.os.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.pursuits.os.other.maxLength &&  v.pursuits.os.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.os'), v.pursuits.os.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.od')}}</label>
                    <CustomDropdown
                        v-model="binoculor.pursuits.od"
                        :options="pursuitsOdOptions"
                        :inputType="'text'"
                        :invalidSelection=" v.pursuits.od.selection.$error "
                        :invalidOther=" v.pursuits.od.other.$error "
                        >
                        <div v-if="v.pursuits.od.other.$error && !v.pursuits.od.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('measurementsLabels.od'))}}
                        </div>
                        <div v-else-if="! v.pursuits.od.other.minLength &&  v.pursuits.od.other.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.od'), v.od.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.pursuits.od.other.maxLength &&  v.pursuits.od.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.od'), v.pursuits.od.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <Divider></Divider>
            <!-- Saccades -->
            <div class="col-md-6">
                <h4 class="mb-7">{{$t('binoculor.saccades.heading')}}</h4>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.os')}}</label>
                    <CustomDropdown
                            
                            v-model="binoculor.saccades.os"
                            :options="saccadesOsOptions"
                            :inputType="'text'"
                            :invalidSelection=" v.saccades.os.selection.$error  "
                            :invalidOther=" v.saccades.os.other.$error "
                            >
                            <div v-if="v.saccades.os.other.$error && !v.saccades.os.other.notContainsHtmlTags" class="invalid-feedback">
                                        {{htmlTagsError($t('measurementsLabels.os'))}}
                            </div>
                            <div v-else-if="! v.saccades.os.other.minLength &&  v.saccades.os.other.$error" class="invalid-feedback">
                                    {{minLengthError($t('measurementsLabels.os'), v.os.other.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.saccades.os.other.maxLength &&  v.saccades.os.other.$error" class="invalid-feedback">
                                    {{maxLengthError($t('measurementsLabels.os'), v.saccades.os.other.$params.maxLength.max)}}
                            </div>                 
                    </CustomDropdown>  
                </div>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.od')}}</label>
                    <CustomDropdown
                        
                        v-model="binoculor.saccades.od"
                        :options="saccadesOdOptions"
                        :inputType="'text'"
                        :invalidSelection="v.saccades.od.selection.$error  "
                        :invalidOther=" v.saccades.od.other.$error  "
                        >
                        <div v-if="v.saccades.od.other.$error && !v.saccades.od.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('measurementsLabels.od'))}}
                        </div>
                        <div v-else-if="! v.saccades.od.other.minLength &&  v.saccades.od.other.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.od'), v.od.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.saccades.od.other.maxLength &&  v.saccades.od.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.od'), v.saccades.od.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <!-- Accomodation -->
            <div class="col-md-6">
                <h4>{{ $t('binoculor.accomodation.heading') }}</h4>
                <h6 class="text-center">{{$t('measurementsLabels.amp')}}</h6>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-label">{{$t('measurementsLabels.od')}}</label>
                            <CustomDropMenu
                            v-model="binoculor.accomodation.ampOd"
                            :options="ampOptions"
                            :inputType="'text'"
                            :invalid="
                                (v.accomodation.ampOd.$error)||
                                (check_error.accomodation?
                                    (check_error.accomodation.ampOd?check_error.accomodation.ampOd.length>0:false):false
                                )
                                ||
                                (serializer_error.accomodation?
                                    (serializer_error.accomodation.ampOd?serializer_error.accomodation.ampOd.length>0:false):false
                                )
                            " 
                            >                    
                            <div 
                                v-if="v.accomodation.ampOd.$error && !v.accomodation.ampOd.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('measurementsLabels.amp'))}}
                            </div>
                            <div v-else-if="! v.accomodation.ampOd.minLength &&  v.accomodation.ampOd.$error" class="invalid-feedback">
                                    {{minLengthError($t('measurementsLabels.amp'), v.accomodation.ampOd.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.accomodation.ampOd.maxLength &&  v.accomodation.ampOd.$error" class="invalid-feedback">
                                    {{maxLengthError($t('measurementsLabels.amp'), v.accomodation.ampOd.$params.maxLength.max)}}
                            </div> 
                            </CustomDropMenu>                         
                        </div>                            
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.os')}}</label>
                    <CustomDropMenu
                    v-model="binoculor.accomodation.ampOs"
                    :options="ampOptions"
                    :inputType="'text'"
                    :invalid="
                        (v.accomodation.ampOs.$error)||
                        (check_error.accomodation?
                            (check_error.accomodation.ampOs?check_error.accomodation.ampOs.length>0:false):false
                        )
                        ||
                        (serializer_error.accomodation?
                            (serializer_error.accomodation.ampOs?serializer_error.accomodation.ampOs.length>0:false):false
                        )
                    " 
                    >                    
                    <div 
                        v-if="v.accomodation.ampOs.$error && !v.accomodation.ampOs.notContainsHtmlTags"  class="invalid-feedback">
                        {{htmlTagsError($t('measurementsLabels.amp'))}}
                    </div>
                    <div v-else-if="! v.accomodation.ampOs.minLength &&  v.accomodation.ampOs.$error" class="invalid-feedback">
                            {{minLengthError($t('measurementsLabels.amp'), v.accomodation.ampOs.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.accomodation.ampOs.maxLength &&  v.accomodation.ampOs.$error" class="invalid-feedback">
                            {{maxLengthError($t('measurementsLabels.amp'), v.accomodation.ampOs.$params.maxLength.max)}}
                    </div> 
                    </CustomDropMenu>                      
                </div>   
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.acaRatio')}}</label>
                    <CustomDropMenu
                    v-model="binoculor.accomodation.acaRatio"
                    :options="ratioOptions"
                    :inputType="'text'"
                    :invalid="
                        (v.accomodation.acaRatio.$error)||
                        (check_error.accomodation?
                            (check_error.accomodation.acaRatio?check_error.accomodation.acaRatio.length>0:false):false
                        )
                        ||
                        (serializer_error.accomodation?
                            (serializer_error.accomodation.acaRatio?serializer_error.accomodation.acaRatio.length>0:false):false
                        )
                    " 
                    >                    
                    <div 
                        v-if="v.accomodation.acaRatio.$error && !v.accomodation.acaRatio.notContainsHtmlTags"  class="invalid-feedback">
                        {{htmlTagsError($t('measurementsLabels.acaRatio'))}}
                    </div>
                    <div v-else-if="! v.accomodation.acaRatio.minLength &&  v.accomodation.acaRatio.$error" class="invalid-feedback">
                            {{minLengthError($t('measurementsLabels.acaRatio'), v.accomodation.acaRatio.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.accomodation.acaRatio.maxLength &&  v.accomodation.acaRatio.$error" class="invalid-feedback">
                            {{maxLengthError($t('measurementsLabels.acaRatio'), v.accomodation.acaRatio.$params.maxLength.max)}}
                    </div> 
                    </CustomDropMenu>
                </div>                 
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.nra')}}</label>
                    <CustomDropMenu
                    v-model="binoculor.accomodation.nra"
                    :options="nraOptions"
                    :inputType="'text'"
                    :invalid="
                        (v.accomodation.nra.$error)||
                        (check_error.accomodation?
                            (check_error.accomodation.nra?check_error.accomodation.nra.length>0:false):false
                        )
                        ||
                        (serializer_error.accomodation?
                            (serializer_error.accomodation.nra?serializer_error.accomodation.nra.length>0:false):false
                        )
                    " 
                    >                    
                    <div 
                        v-if="v.accomodation.nra.$error && !v.accomodation.nra.notContainsHtmlTags"  class="invalid-feedback">
                        {{htmlTagsError($t('measurementsLabels.nra'))}}
                    </div>
                    <div v-else-if="! v.accomodation.nra.minLength &&  v.accomodation.nra.$error" class="invalid-feedback">
                            {{minLengthError($t('measurementsLabels.nra'), v.accomodation.nra.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.accomodation.nra.maxLength &&  v.accomodation.nra.$error" class="invalid-feedback">
                            {{maxLengthError($t('measurementsLabels.nra'), v.accomodation.nra.$params.maxLength.max)}}
                    </div> 
                    </CustomDropMenu>                                
                </div>    
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.pra')}}</label>
                    <CustomDropMenu
                    v-model="binoculor.accomodation.pra"
                    :options="praOptions"
                    :inputType="'text'"
                    :invalid="
                        (v.accomodation.pra.$error)||
                        (check_error.accomodation?
                            (check_error.accomodation.pra?check_error.accomodation.pra.length>0:false):false
                        )
                        ||
                        (serializer_error.accomodation?
                            (serializer_error.accomodation.pra?serializer_error.accomodation.pra.length>0:false):false
                        )
                    " 
                    >                    
                    <div 
                        v-if="v.accomodation.pra.$error && !v.accomodation.pra.notContainsHtmlTags"  class="invalid-feedback">
                        {{htmlTagsError($t('measurementsLabels.pra'))}}
                    </div>
                    <div v-else-if="! v.accomodation.pra.minLength &&  v.accomodation.pra.$error" class="invalid-feedback">
                            {{minLengthError($t('measurementsLabels.pra'), v.accomodation.pra.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.accomodation.pra.maxLength &&  v.accomodation.pra.$error" class="invalid-feedback">
                            {{maxLengthError($t('measurementsLabels.pra'), v.accomodation.pra.$params.maxLength.max)}}
                    </div> 
                    </CustomDropMenu>                                
                </div>                                                                            
            </div>
        </div>
        <Divider></Divider>
        <!-- Vergence -->
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="form-label">{{$t('binoculor.vergence.heading')}}</label>
                    <Dropdown
                        v-model="vergenceType" 
                        :options="vergenceTypeOptions" 
                        :optionLabel="locale" 
                        placeholder="Select"
                    />
                </div>
            </div>
        </div>
        <div v-if="!typeToggled" class="row">
            <div class="col-md-6">
                <h6>{{$t('measurementsLabels.distantVision')}}</h6>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.blur')}}</label>
                    <CustomDropMenu 
                    :options="vergenceOptions" 
                    v-model="binoculor[vergenceType.key].distantVision.visionBlur"
                    :inputType="'text'"
                    :invalid="
                            (v[vergenceType.key].distantVision.visionBlur.$error)||
                            (check_error[vergenceType.key]?
                                (check_error[vergenceType.key].distantVision.visionBlur?check_error[vergenceType.key].distantVision.visionBlur.length>0:false):false
                            )
                            ||
                            (serializer_error.phorias?
                                (serializer_error[vergenceType.key].distantVision.visionBlur?serializer_error[vergenceType.key].distantVision.visionBlur.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v[vergenceType.key].distantVision.visionBlur.$error && !v[vergenceType.key].distantVision.visionBlur.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.blur'))}}
                        </div>
                        <div v-else-if="! v[vergenceType.key].distantVision.visionBlur.minLength &&  v[vergenceType.key].distantVision.visionBlur.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.blur'), v[vergenceType.key].distantVision.visionBlur.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v[vergenceType.key].distantVision.visionBlur.maxLength &&  v[vergenceType.key].distantVision.visionBlur.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.blur'), v[vergenceType.key].distantVision.visionBlur.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.break')}}</label>
                    <CustomDropMenu 
                    :options="vergenceOptions" 
                    v-model="binoculor[vergenceType.key].distantVision.visionBreak"
                    :inputType="'text'"
                    :invalid="
                            (v[vergenceType.key].distantVision.visionBreak.$error)||
                            (check_error[vergenceType.key]?
                                (check_error[vergenceType.key].distantVision.visionBreak?check_error[vergenceType.key].distantVision.visionBreak.length>0:false):false
                            )
                            ||
                            (serializer_error.phorias?
                                (serializer_error[vergenceType.key].distantVision.visionBreak?serializer_error[vergenceType.key].distantVision.visionBreak.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v[vergenceType.key].distantVision.visionBreak.$error && !v[vergenceType.key].distantVision.visionBreak.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.break'))}}
                        </div>
                        <div v-else-if="! v[vergenceType.key].distantVision.visionBreak.minLength &&  v[vergenceType.key].distantVision.visionBreak.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.break'), v[vergenceType.key].distantVision.visionBreak.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v[vergenceType.key].distantVision.visionBreak.maxLength &&  v[vergenceType.key].distantVision.visionBreak.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.break'), v[vergenceType.key].distantVision.visionBreak.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.recov')}}</label>
                    <CustomDropMenu 
                    :options="vergenceOptions" 
                    v-model="binoculor[vergenceType.key].distantVision.visionRecov"
                    :inputType="'text'"
                    :invalid="
                            (v[vergenceType.key].distantVision.visionRecov.$error)||
                            (check_error[vergenceType.key]?
                                (check_error[vergenceType.key].distantVision.visionRecov?check_error[vergenceType.key].distantVision.visionRecov.length>0:false):false
                            )
                            ||
                            (serializer_error.phorias?
                                (serializer_error[vergenceType.key].distantVision.visionRecov?serializer_error[vergenceType.key].distantVision.visionRecov.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v[vergenceType.key].distantVision.visionRecov.$error && !v[vergenceType.key].distantVision.visionRecov.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.recov'))}}
                        </div>
                        <div v-else-if="! v[vergenceType.key].distantVision.visionRecov.minLength &&  v[vergenceType.key].distantVision.visionRecov.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.recov'), v[vergenceType.key].distantVision.visionRecov.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v[vergenceType.key].distantVision.visionRecov.maxLength &&  v[vergenceType.key].distantVision.visionRecov.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.recov'), v[vergenceType.key].distantVision.visionRecov.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>
                </div>
            </div>
            <div class="col-md-6">
                <h6>{{$t('measurementsLabels.nearVision')}}</h6>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.blur')}}</label>
                    <CustomDropMenu 
                    :options="vergenceOptions" 
                    v-model="binoculor[vergenceType.key].nearVision.visionBlur"
                    :inputType="'text'"
                    :invalid="
                            (v[vergenceType.key].nearVision.visionBlur.$error)||
                            (check_error[vergenceType.key]?
                                (check_error[vergenceType.key].nearVision.visionBlur?check_error[vergenceType.key].nearVision.visionBlur.length>0:false):false
                            )
                            ||
                            (serializer_error.phorias?
                                (serializer_error[vergenceType.key].nearVision.visionBlur?serializer_error[vergenceType.key].nearVision.visionBlur.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v[vergenceType.key].nearVision.visionBlur.$error && !v[vergenceType.key].nearVision.visionBlur.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.blur'))}}
                        </div>
                        <div v-else-if="! v[vergenceType.key].nearVision.visionBlur.minLength &&  v[vergenceType.key].nearVision.visionBlur.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.blur'), v[vergenceType.key].nearVision.visionBlur.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v[vergenceType.key].nearVision.visionBlur.maxLength &&  v[vergenceType.key].nearVision.visionBlur.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.blur'), v[vergenceType.key].nearVision.visionBlur.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.break')}}</label>
                    <CustomDropMenu 
                    :options="vergenceOptions" 
                    v-model="binoculor[vergenceType.key].nearVision.visionBreak"
                    :inputType="'text'"
                    :invalid="
                            (v[vergenceType.key].nearVision.visionBreak.$error)||
                            (check_error[vergenceType.key]?
                                (check_error[vergenceType.key].nearVision.visionBreak?check_error[vergenceType.key].nearVision.visionBreak.length>0:false):false
                            )
                            ||
                            (serializer_error.phorias?
                                (serializer_error[vergenceType.key].nearVision.visionBreak?serializer_error[vergenceType.key].nearVision.visionBreak.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v[vergenceType.key].nearVision.visionBreak.$error && !v[vergenceType.key].nearVision.visionBreak.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.break'))}}
                        </div>
                        <div v-else-if="! v[vergenceType.key].nearVision.visionBreak.minLength &&  v[vergenceType.key].nearVision.visionBreak.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.break'), v[vergenceType.key].nearVision.visionBreak.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v[vergenceType.key].nearVision.visionBreak.maxLength &&  v[vergenceType.key].nearVision.visionBreak.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.break'), v[vergenceType.key].nearVision.visionBreak.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <label class="form-label">{{$t('measurementsLabels.recov')}}</label>
                    <CustomDropMenu 
                    :options="vergenceOptions" 
                    v-model="binoculor[vergenceType.key].nearVision.visionRecov"
                    :inputType="'text'"
                    :invalid="
                            (v[vergenceType.key].nearVision.visionRecov.$error)||
                            (check_error[vergenceType.key]?
                                (check_error[vergenceType.key].nearVision.visionRecov?check_error[vergenceType.key].nearVision.visionRecov.length>0:false):false
                            )
                            ||
                            (serializer_error.phorias?
                                (serializer_error[vergenceType.key].nearVision.visionRecov?serializer_error[vergenceType.key].nearVision.visionRecov.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v[vergenceType.key].nearVision.visionRecov.$error && !v[vergenceType.key].nearVision.visionRecov.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.recov'))}}
                        </div>
                        <div v-else-if="! v[vergenceType.key].nearVision.visionRecov.minLength &&  v[vergenceType.key].nearVision.visionRecov.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.recov'), v[vergenceType.key].nearVision.visionRecov.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v[vergenceType.key].nearVision.visionRecov.maxLength &&  v[vergenceType.key].nearVision.visionRecov.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.recov'), v[vergenceType.key].nearVision.visionRecov.$params.maxLength.max)}}
                        </div>
                    </CustomDropMenu>
                </div>
            </div>
        </div>
        <Divider></Divider>
        <!-- Note -->
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="form-label">{{$t('binoculor.note.label')}}</label>
                    <textarea 
                        v-model="binoculor.note" 
                        :placeholder="$t('binoculor.note.placeholder')" 
                        class="form-control"
                        :class="{
                            'is-invalid':
                            (v.note.$error)
                            ||
                            (serializer_error.note?serializer_error.note.length>0:false)
                        }" 
                    ></textarea>
                    <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('binoculor.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('binoculor.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('binoculor.note.label'), v.note.$params.maxLength.max)}}
                    </div> 
                </div>else-
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
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import {htmlTagsError,minLengthError,maxLengthError,numericError} from '@/validation/errors'
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import visionOptions from "@/mixins/mr/ophthalmic/options/visionOptions"
import Divider from '@/components/global/utilities/Divider.vue'
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
        CustomDropdown,
        Divider,
        ResetButton,
    },
    data() {
        return {
        vergenceTypeOptions:[
            {en:"Bi",ar:"Bi",key:"vergenceBi"},
            {en:"Bo",ar:"Bo",key:"vergenceBo"},
            {en:"Bu",ar:"Bu",key:"vergenceBu"},
            {en:"Bd",ar:"Bd",key:"vergenceBd"},
        ],
        vergenceType:{en:"Bi",ar:"Bi",key:"vergenceBi"},
        typeToggled:false,
        };
    },
       ////////////////////////////////////
       computed: {
            ...mapGetters("detailsOphthalmic/ophthalmic", ["getBinoculor"]),
            binoculor: {
                get() {
                    return this.getBinoculor;
                },
                set(value) {
                    this.$store.dispatch("detailsOphthalmic/ophthalmic/setBinoculor", value);
                },
            }
        },

    methods:{
        htmlTagsError,
        minLengthError,
        maxLengthError,
        numericError,
        ///////////////////////
        reset() {
           this.binoculor={
                phorias: {
                    distantVision: {
                        h: "",
                        v: "",
                    },
                    nearVision: {
                        h: "",
                        v: "",
                    },
                },
                pursuits: {
                    os: {
                    selection:null,
                    other: "",
                    },
                    od: {
                    selection: null,
                    other: "",
                    },
                },
                saccades: {
                    os: {
                    selection: null,
                    other: "",
                    },
                    od: {
                    selection: null,
                    other: "",
                    },
                },
                accomodation: {
                    ampOd: "",
                    ampOs: "",
                    acaRatio: "",
                    nra: "",
                    pra: "",
                },
                vergenceBi: {
                    distantVision: {
                    visionBlur: "",
                    visionBreak: "",
                    visionRecov: "",
                    },
                    nearVision: {
                    visionBlur: "",
                    visionBreak: "",
                    visionRecov: "",
                    },
                },
                vergenceBo: {
                    distantVision: {
                    visionBreak: "",
                    visionBlur: "",
                    visionRecov: "",
                    },
                    nearVision: {
                    visionBlur: "",
                    visionBreak: "",
                    visionRecov: "",
                    },
                },
                vergenceBu: {
                    distantVision: {
                    visionBlur: "",
                    visionBreak: "",
                    visionRecov: "",
                    },
                    nearVision: {
                    visionBlur: "",
                    visionBreak: "",
                    visionRecov: "",
                    },
                },
                vergenceBd: {
                    distantVision: {
                    visionBlur: "",
                    visionBreak: "",
                    visionRecov: "",
                    },
                    nearVision: {
                    visionBlur: "",
                    visionBreak: "",
                    visionRecov: "",
                    },
                },
                note: "",
                },
                this.v.$reset();     
            },

    },
}
</script>

<style></style>