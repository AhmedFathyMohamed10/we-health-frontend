<template>
    <div class="over-refraction">
        <Base>
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t("refraction.header") }}</h4>
                    <ResetButton @reset="reset"></ResetButton>
                </div>
            </div>
            <div class="row my-6">
                <div class="col-md-4">
                    <div class="form-group">
                        <CustomDropdown
                            v-model="refraction.type"
                            :label="$t('refraction.type.label')"
                            :options="typeOptions"
                            :inputType="'text'"
                            :invalidSelection=" v.type.selection.$error"
                            :invalidOther=" v.type.other.$error"                            >
                            <div v-if="v.type.other.$error && !v.type.other.notContainsHtmlTags" class="invalid-feedback">
                                        {{htmlTagsError($t('refraction.type.label'))}}
                            </div>
                            <div v-else-if="! v.type.other.minLength &&  v.type.other.$error" class="invalid-feedback">
                                    {{minLengthError($t('refraction.type.label'), v.type.other.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.type.other.maxLength &&  v.type.other.$error" class="invalid-feedback">
                                    {{maxLengthError($t('refraction.type.label'), v.type.other.$params.maxLength.max)}}
                            </div>                 
                        </CustomDropdown>
                    </div>
                </div>
            </div>
            <!-- Input Switch -->
        <div class="d-flex align-items-center my-5">

            <span class="me-2">{{ $t('refraction.near') }}</span>
            <InputSwitch v-model="switchChecked" class="me-2" />
            <span class="me-8">{{ $t('refraction.distant') }}</span>
            <div class="">
                <RadioButton inputId="simple" name="simple" value="simple" v-model="toggleSimpleOrAdvanced" />
                <span class="ms-2 me-2">{{ $t('refraction.simple') }}</span>
                <span class="ms-2 me-2"></span>
                <RadioButton inputId="advanced" name="advanced" value="advanced" v-model="toggleSimpleOrAdvanced" />
                <span class="ms-2">{{ $t('refraction.advanced') }}</span>
            </div>
        </div>
        <!-- Near -->
        <!-- Od Row -->
        <div class="row" v-if="!switchChecked">
            <h4>{{ $t('measurementsLabels.od') }}</h4>
            <!-- Spherical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="refraction.near.od.spherical"
                        :label="$t('measurementsLabels.spherical')"
                        :options="sphericalOptions"
                        :excludeColumn="0"
                        :invalid="v.near.od.spherical.$error " 
                    >                    
                        <div 
                            v-if="v.near.od.spherical.$error && !v.near.od.spherical.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.spherical'))}}
                        </div>
                        <div v-else-if="! v.near.od.spherical.minLength &&  v.near.od.spherical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.spherical'), v.near.od.spherical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.od.spherical.maxLength &&  v.near.od.spherical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.spherical'), v.near.od.spherical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Cylindrical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Cylindrical -->
                    <CustomDropMenu 
                        v-model="refraction.near.od.cylindrical"
                        :label="$t('measurementsLabels.cylindrical')"
                        :options="cylindricalOptions"
                        :excludeColumn="0"
                        :invalid="v.near.od.cylindrical.$error" 
                    >                    
                        <div 
                            v-if="v.near.od.cylindrical.$error && !v.near.od.cylindrical.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.cylindrical'))}}
                        </div>
                        <div v-else-if="! v.near.od.cylindrical.minLength &&  v.near.od.cylindrical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.cylindrical'), v.near.od.cylindrical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.od.cylindrical.maxLength &&  v.near.od.cylindrical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.cylindrical'), v.near.od.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Axis -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Axis -->
                    <CustomDropMenu 
                        v-model="refraction.near.od.axis"
                        :label="$t('measurementsLabels.axis')"
                        :options="axisOptions"
                        :invalid="v.near.od.axis.$error" 
                    >                    
                        <div 
                            v-if="v.near.od.axis.$error && !v.near.od.axis.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.axis'))}}
                        </div>
                        <div v-else-if="! v.near.od.axis.minLength &&  v.near.od.axis.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.axis'), v.near.od.axis.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.od.axis.maxLength &&  v.near.od.axis.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.axis'), v.near.od.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Add -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Add -->
                    <CustomDropMenu 
                        v-model="refraction.near.od.add"
                        :label="$t('measurementsLabels.add')"
                        :options="addOptions"
                        :invalid="v.near.od.add.$error " 
                    >                    
                        <div 
                            v-if="v.near.od.add.$error && !v.near.od.add.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.add'))}}
                        </div>
                        <div v-else-if="! v.near.od.add.minLength &&  v.near.od.add.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.add'), v.near.od.add.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.od.add.maxLength &&  v.near.od.add.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.add'), v.near.od.add.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Prism -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Prism -->
                    <CustomDropMenu 
                        v-model="refraction.near.od.prism"
                        :label="$t('measurementsLabels.prism')"
                        :options="prismOptions"
                        :invalid="v.near.od.prism.$error  " 
                    >                    
                        <div 
                            v-if="v.near.od.prism.$error && !v.near.od.prism.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.prism'))}}
                        </div>
                        <div v-else-if="! v.near.od.prism.minLength &&  v.near.od.prism.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.prism'), v.near.od.prism.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.od.prism.maxLength &&  v.near.od.prism.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.prism'), v.near.od.prism.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- NVA -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- NVA -->
                    <CustomDropMenu 
                        v-model="refraction.near.od.nva"
                        :label="$t('measurementsLabels.nva')"
                        :options="nvaOptions"
                        :invalid="v.near.od.nva.$error " 
                    >                    
                        <div 
                            v-if="v.near.od.nva.$error && !v.near.od.nva.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.nva'))}}
                        </div>
                        <div v-else-if="! v.near.od.nva.minLength &&  v.near.od.nva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.nva'), v.near.od.nva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.od.nva.maxLength &&  v.near.od.nva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.nva'), v.near.od.nva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>
        <!-- Copy Buttons -->
        <div class="row mt-4" v-if="!switchChecked">
            <div class="col-12" >
                <div class="d-flex justify-content-center align-items-center">
                    <div class="form-group mb-0 ">
                        <button class="btn btn-icon rounded-circle btn-success me-2" @click="copyToOdNear">
                            <i class="fa fa-angle-up fa-md"></i> 
                        </button>
                    </div>
                    <div class="form-group mb-0">
                        <button class="btn btn-icon rounded-circle btn-success" @click="copyToOsNear">
                            <i class="fa fa-angle-down fa-md"></i>
                        </button>
                    </div>
                </div>
            </div>                    
        </div>         
        <!-- Os Row -->
        <div class="row" v-if="!switchChecked">
            <h4>{{ $t('measurementsLabels.os') }}</h4>
            <!-- Spherical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="refraction.near.os.spherical"
                        :label="$t('measurementsLabels.spherical')"
                        :options="sphericalOptions"
                        :excludeColumn="0"
                        :invalid="v.near.os.spherical.$error" 
                    >                    
                        <div 
                            v-if="v.near.os.spherical.$error && !v.near.os.spherical.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.spherical'))}}
                        </div>
                        <div v-else-if="! v.near.os.spherical.minLength &&  v.near.os.spherical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.spherical'), v.near.os.spherical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.os.spherical.maxLength &&  v.near.os.spherical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.spherical'), v.near.os.spherical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Cylindrical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Cylindrical -->
                    <CustomDropMenu 
                        v-model="refraction.near.os.cylindrical"
                        :label="$t('measurementsLabels.cylindrical')"
                        :options="cylindricalOptions"
                        :excludeColumn="0"
                        :invalid="v.near.os.cylindrical.$error " 
                    >                    
                        <div 
                            v-if="v.near.os.cylindrical.$error && !v.near.os.cylindrical.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.cylindrical'))}}
                        </div>
                        <div v-else-if="! v.near.os.cylindrical.minLength &&  v.near.os.cylindrical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.cylindrical'), v.near.os.cylindrical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.os.cylindrical.maxLength &&  v.near.os.cylindrical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.cylindrical'), v.near.os.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Axis -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Axis -->
                    <CustomDropMenu 
                        v-model="refraction.near.os.axis"
                        :label="$t('measurementsLabels.axis')"
                        :options="axisOptions"
                        :invalid="v.near.os.axis.$error " 
                    >                    
                        <div 
                            v-if="v.near.os.axis.$error && !v.near.os.axis.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.axis'))}}
                        </div>
                        <div v-else-if="! v.near.os.axis.minLength &&  v.near.os.axis.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.axis'), v.near.os.axis.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.os.axis.maxLength &&  v.near.os.axis.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.axis'), v.near.os.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Add -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Add -->
                    <CustomDropMenu 
                        v-model="refraction.near.os.add"
                        :label="$t('measurementsLabels.add')"
                        :options="addOptions"
                        :invalid="
                            (v.near.os.add.$error)||
                            (check_error.os?
                                (check_error.os.add?check_error.os.add.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.add?serializer_error.os.add.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.near.os.add.$error && !v.near.os.add.notContainsHtmlTags"   class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.add'))}}
                        </div>
                        <div v-else-if="! v.near.os.add.minLength &&  v.near.os.add.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.add'), v.near.os.add.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.os.add.maxLength &&  v.near.os.add.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.add'), v.near.os.add.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Prism -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Prism -->
                    <CustomDropMenu 
                        v-model="refraction.near.os.prism"
                        :label="$t('measurementsLabels.prism')"
                        :options="prismOptions"
                        :invalid="
                            (v.near.os.prism.$error)||
                            (check_error.os?
                                (check_error.os.prism?check_error.os.prism.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.prism?serializer_error.os.prism.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.near.os.prism.$error && !v.near.os.prism.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.prism'))}}
                        </div>
                        <div v-else-if="! v.near.os.prism.minLength &&  v.near.os.prism.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.prism'), v.near.os.prism.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.os.prism.maxLength &&  v.near.os.prism.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.prism'), v.near.os.prism.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- NVA -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- NVA -->
                    <CustomDropMenu 
                        v-model="refraction.near.os.nva"
                        :label="$t('measurementsLabels.nva')"
                        :options="nvaOptions"
                        :invalid="
                            (v.near.os.nva.$error)||
                            (check_error.os?
                                (check_error.os.nva?check_error.os.nva.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.nva?serializer_error.os.nva.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.near.os.nva.$error && !v.near.os.nva.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.nva'))}}
                        </div>
                        <div v-else-if="! v.near.os.nva.minLength &&  v.near.os.nva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.nva'), v.near.os.nva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.os.nva.maxLength &&  v.near.os.nva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.nva'), v.near.os.nva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>
        <!-- Ou Row -->
        <div class="row" v-if="!switchChecked">
            <h4 class="mt-6">{{ $t('measurementsLabels.ou') }}</h4>
            <!-- Dva -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Dva -->
                    <CustomDropMenu 
                        v-model="refraction.near.ou.dva"
                        :label="$t('measurementsLabels.dva')"
                        :options="dvaOptions"
                        :invalid="
                            (v.near.ou.dva.$error)||
                            (check_error.os?
                                (check_error.ou.dva?check_error.ou.dva.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.ou.dva?serializer_error.ou.dva.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.near.ou.dva.$error && !v.near.ou.dva.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.dva'))}}
                        </div>
                        <div v-else-if="! v.near.ou.dva.minLength &&  v.near.ou.dva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.dva'), v.near.ou.dva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.ou.dva.maxLength &&  v.near.ou.dva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.dva'), v.near.ou.dva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- NVA -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- NVA -->
                    <CustomDropMenu 
                        v-model="refraction.near.ou.nva"
                        :label="$t('measurementsLabels.nva')"
                        :options="nvaOptions"
                        :invalid="
                            (v.near.ou.nva.$error)||
                            (check_error.os?
                                (check_error.ou.nva?check_error.ou.nva.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.ou.nva?serializer_error.ou.nva.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.near.ou.nva.$error && !v.near.ou.nva.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.nva'))}}
                        </div>
                        <div v-else-if="! v.near.ou.nva.minLength &&  v.near.ou.nva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.nva'), v.near.ou.nva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.near.ou.nva.maxLength &&  v.near.ou.nva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.nva'), v.near.ou.nva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>


        <!-- Distant -->
        <!-- Od Row -->
        <div class="row" v-if="switchChecked">
            <h4>{{ $t('measurementsLabels.od') }}</h4>
            <!-- Spherical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="refraction.distant.od.spherical"
                        :label="$t('measurementsLabels.spherical')"
                        :options="sphericalOptions"
                        :excludeColumn="0"
                        :invalid="
                            (v.distant.od.spherical.$error)||
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
                            v-if="v.distant.od.spherical.$error && !v.distant.od.spherical.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.spherical'))}}
                        </div>
                        <div v-else-if="! v.distant.od.spherical.minLength &&  v.distant.od.spherical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.spherical'), v.distant.od.spherical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.od.spherical.maxLength &&  v.distant.od.spherical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.spherical'), v.distant.od.spherical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Cylindrical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Cylindrical -->
                    <CustomDropMenu 
                        v-model="refraction.distant.od.cylindrical"
                        :label="$t('measurementsLabels.cylindrical')"
                        :options="cylindricalOptions"
                        :excludeColumn="0"
                        :invalid="
                            (v.distant.od.cylindrical.$error)||
                            (check_error.od?
                                (check_error.od.cylindrical?check_error.od.cylindrical.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.cylindrical?serializer_error.od.cylindrical.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.distant.od.cylindrical.$error && !v.distant.od.cylindrical.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.cylindrical'))}}
                        </div>
                        <div v-else-if="! v.distant.od.cylindrical.minLength &&  v.distant.od.cylindrical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.cylindrical'), v.distant.od.cylindrical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.od.cylindrical.maxLength &&  v.distant.od.cylindrical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.cylindrical'), v.distant.od.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Axis -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Axis -->
                    <CustomDropMenu 
                        v-model="refraction.distant.od.axis"
                        :label="$t('measurementsLabels.axis')"
                        :options="axisOptions"
                        :invalid="
                            (v.distant.od.axis.$error)||
                            (check_error.od?
                                (check_error.od.axis?check_error.od.axis.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.axis?serializer_error.od.axis.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.distant.od.axis.$error && !v.distant.od.axis.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.axis'))}}
                        </div>
                        <div v-else-if="! v.distant.od.axis.minLength &&  v.distant.od.axis.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.axis'), v.distant.od.axis.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.od.axis.maxLength &&  v.distant.od.axis.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.axis'), v.distant.od.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Add -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Add -->
                    <CustomDropMenu 
                        v-model="refraction.distant.od.add"
                        :label="$t('measurementsLabels.add')"
                        :options="addOptions"
                        :invalid="
                            (v.distant.od.add.$error)||
                            (check_error.od?
                                (check_error.od.add?check_error.od.add.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.add?serializer_error.od.add.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.distant.od.add.$error && !v.distant.od.add.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.add'))}}
                        </div>
                        <div v-else-if="! v.distant.od.add.minLength &&  v.distant.od.add.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.add'), v.distant.od.add.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.od.add.maxLength &&  v.distant.od.add.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.add'), v.distant.od.add.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Prism -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Prism -->
                    <CustomDropMenu 
                        v-model="refraction.distant.od.prism"
                        :label="$t('measurementsLabels.prism')"
                        :options="prismOptions"
                        :invalid="
                            (v.distant.od.prism.$error)||
                            (check_error.od?
                                (check_error.od.prism?check_error.od.prism.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.prism?serializer_error.od.prism.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.distant.od.prism.$error && !v.distant.od.prism.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.prism'))}}
                        </div>
                        <div v-else-if="! v.distant.od.prism.minLength &&  v.distant.od.prism.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.prism'), v.distant.od.prism.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.od.prism.maxLength &&  v.distant.od.prism.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.prism'), v.distant.od.prism.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Dva -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Dva -->
                    <CustomDropMenu 
                        v-model="refraction.distant.od.dva"
                        :label="$t('measurementsLabels.dva')"
                        :options="dvaOptions"
                        :invalid="
                            (v.distant.od.dva.$error)||
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
                            v-if="v.distant.od.dva.$error && !v.distant.od.dva.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.dva'))}}
                        </div>
                        <div v-else-if="! v.distant.od.dva.minLength &&  v.distant.od.dva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.dva'), v.distant.od.dva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.od.dva.maxLength &&  v.distant.od.dva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.dva'), v.distant.od.dva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>
        <!-- Copy Buttons -->
        <div class="row mt-4" v-if="switchChecked">
            <div class="col-12" >
                <div class="d-flex justify-content-center align-items-center">
                    <div class="form-group mb-0 ">
                        <button class="btn btn-icon rounded-circle btn-success me-2" @click="copyToOdDistant">
                            <i class="fa fa-angle-up fa-md"></i> 
                        </button>
                    </div>
                    <div class="form-group mb-0">
                        <button class="btn btn-icon rounded-circle btn-success" @click="copyToOsDistant">
                            <i class="fa fa-angle-down fa-md"></i>
                        </button>
                    </div>
                </div>
            </div>                    
        </div> 
        <!-- Os Row -->
        <div class="row" v-if="switchChecked">
            <h4>{{ $t('measurementsLabels.os') }}</h4>
            <!-- Spherical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="refraction.distant.os.spherical"
                        :label="$t('measurementsLabels.spherical')"
                        :options="sphericalOptions"
                        :excludeColumn="0"
                        :invalid="
                            (v.distant.os.spherical.$error)||
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
                            v-if="v.distant.os.spherical.$error && !v.distant.os.spherical.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.spherical'))}}
                        </div>
                        <div v-else-if="! v.distant.os.spherical.minLength &&  v.distant.os.spherical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.spherical'), v.distant.os.spherical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.os.spherical.maxLength &&  v.distant.os.spherical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.spherical'), v.distant.os.spherical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Cylindrical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Cylindrical -->
                    <CustomDropMenu 
                        v-model="refraction.distant.os.cylindrical"
                        :label="$t('measurementsLabels.cylindrical')"
                        :options="cylindricalOptions"
                        :excludeColumn="0"
                        :invalid="
                            (v.distant.os.cylindrical.$error)||
                            (check_error.os?
                                (check_error.os.cylindrical?check_error.os.cylindrical.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.cylindrical?serializer_error.os.cylindrical.length>0:false):false
                            )
                        " 
                    >                    
                        <div else-
                            v-if="v.distant.os.cylindrical.$error && !v.distant.os.cylindrical.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.cylindrical'))}}
                        </div>
                        <div v-else-if="! v.distant.os.cylindrical.minLength &&  v.distant.os.cylindrical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.cylindrical'), v.distant.os.cylindrical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.os.cylindrical.maxLength &&  v.distant.os.cylindrical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.cylindrical'), v.distant.os.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Axis -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Axis -->
                    <CustomDropMenu 
                        v-model="refraction.distant.os.axis"
                        :label="$t('measurementsLabels.axis')"
                        :options="axisOptions"
                        :invalid="
                            (v.distant.os.axis.$error)||
                            (check_error.os?
                                (check_error.os.axis?check_error.os.axis.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.axis?serializer_error.os.axis.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.distant.os.axis.$error && !v.distant.os.axis.notContainsHtmlTags"   class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.axis'))}}
                        </div>
                        <div v-else-if="! v.distant.os.axis.minLength &&  v.distant.os.axis.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.axis'), v.distant.os.axis.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.os.axis.maxLength &&  v.distant.os.axis.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.axis'), v.distant.os.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Add -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Add -->
                    <CustomDropMenu 
                        v-model="refraction.distant.os.add"
                        :label="$t('measurementsLabels.add')"
                        :options="addOptions"
                        :invalid="
                            (v.distant.os.add.$error)||
                            (check_error.os?
                                (check_error.os.add?check_error.os.add.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.add?serializer_error.os.add.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.distant.os.add.$error && !v.distant.os.add.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.add'))}}
                        </div>
                        <div v-else-if="! v.distant.os.add.minLength &&  v.distant.os.add.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.add'), v.distant.os.add.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.os.add.maxLength &&  v.distant.os.add.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.add'), v.distant.os.add.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Prism -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Prism -->
                    <CustomDropMenu 
                        v-model="refraction.distant.os.prism"
                        :label="$t('measurementsLabels.prism')"
                        :options="prismOptions"
                        :invalid="
                            (v.distant.os.prism.$error)||
                            (check_error.os?
                                (check_error.os.prism?check_error.os.prism.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.prism?serializer_error.os.prism.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.distant.os.prism.$error && !v.distant.os.prism.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.prism'))}}
                        </div>
                        <div v-else-if="! v.distant.os.prism.minLength &&  v.distant.os.prism.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.prism'), v.distant.os.prism.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.os.prism.maxLength &&  v.distant.os.prism.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.prism'), v.distant.os.prism.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Dva -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Dva -->
                    <CustomDropMenu 
                        v-model="refraction.distant.os.dva"
                        :label="$t('measurementsLabels.dva')"
                        :options="dvaOptions"
                        :invalid="
                            (v.distant.os.dva.$error)||
                            (check_error.os?
                                (check_error.os.dva?check_error.os.dva.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.dva?serializer_error.os.dva.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.distant.os.dva.$error && !v.distant.os.dva.notContainsHtmlTags"    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.dva'))}}
                        </div>
                        <div v-else-if="! v.distant.os.dva.minLength &&  v.distant.os.dva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.dva'), v.distant.os.dva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.os.dva.maxLength &&  v.distant.os.dva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.dva'), v.distant.os.dva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>
        <!-- Ou Row -->
        <div class="row" v-if="switchChecked">
            <h4 class="mt-6">{{ $t('measurementsLabels.ou') }}</h4>
            <!-- Dva -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Dva -->
                    <CustomDropMenu 
                        v-model="refraction.distant.ou.dva"
                        :label="$t('measurementsLabels.dva')"
                        :options="dvaOptions"
                        :invalid="
                            (v.distant.ou.dva.$error)||
                            (check_error.os?
                                (check_error.ou.dva?check_error.ou.dva.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.ou.dva?serializer_error.ou.dva.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.distant.ou.dva.$error && !v.distant.ou.dva.notContainsHtmlTags"   class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.dva'))}}
                        </div>
                        <div v-else-if="! v.distant.ou.dva.minLength &&  v.distant.ou.dva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.dva'), v.distant.ou.dva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.ou.dva.maxLength &&  v.distant.ou.dva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.dva'), v.distant.ou.dva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- NVA -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- NVA -->
                    <CustomDropMenu 
                        v-model="refraction.distant.ou.nva"
                        :label="$t('measurementsLabels.nva')"
                        :options="nvaOptions"
                        :invalid="
                            (v.distant.ou.nva.$error)||
                            (check_error.os?
                                (check_error.ou.nva?check_error.ou.nva.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.ou.nva?serializer_error.ou.nva.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.distant.ou.nva.$error && !v.distant.ou.nva.notContainsHtmlTags"   class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.nva'))}}
                        </div>
                        <div v-else-if="! v.distant.ou.nva.minLength &&  v.distant.ou.nva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.nva'), v.distant.ou.nva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.distant.ou.nva.maxLength &&  v.distant.ou.nva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.nva'), v.distant.ou.nva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>
        <!-- Note -->
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label class="form-label">{{$t('refraction.note.label')}}</label>
                    <textarea 
                        v-model="refraction.note" 
                        :placeholder="$t('refraction.note.placeholder')" 
                        class="form-control"
                        :class="{
                            'is-invalid':
                            (v.note.$error)
                            ||
                            (serializer_error.note?serializer_error.note.length>0:false)
                        }" 
                    ></textarea>
                    <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('refraction.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('refraction.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('refraction.note.label'), v.note.$params.maxLength.max)}}
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
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
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
        CustomDropdown,
        ResetButton,
    },
    data() {
        return {
            switchChecked: false,
            toggleSimpleOrAdvanced: "simple",
        };
    },
    ////////////////////////////////////
    computed: {
            ...mapGetters("detailsOphthalmic/ophthalmic", ["getRefraction"]),
            refraction: {
                get() {
                    return this.getRefraction;
                },
                set(value) {
                    this.$store.dispatch("detailsOphthalmic/ophthalmic/setRefraction", value);
                },
            }
        },
    //////////////////////////////////
    methods:{
    
        htmlTagsError,
        minLengthError,
        maxLengthError,
        numericError,
        ///////////////////////
        reset() {
                this.refraction= {
                    near: {
                        os: {
                            spherical: "",
                            cylindrical: "",
                            axis: "",
                            prism: "",
                            dva: "",
                            add: "",
                            nva: "",
                        },
                        od: {
                            spherical: "",
                            cylindrical: "",
                            axis: "",
                            prism: "",
                            dva: "",
                            add: "",
                            nva: "", 
                        },
                        ou: {
                            dva: "",
                            nva: "",
                        }
                    },
                    distant: {
                        os: {
                            spherical: "",
                            cylindrical: "",
                            axis: "",
                            prism: "",
                            dva: "",
                            add: "",
                            nva: "",
                        },
                        od: {
                            spherical: "",
                            cylindrical: "",
                            axis: "",
                            prism: "",
                            dva: "",
                            add: "",
                            nva: "", 
                        },
                        ou: {
                            dva: "",
                            nva: "",
                        }
                    },
                    type: {
                        selection: null,
                        other: "",
                    },
                    note: null,
                },
                this.v.$reset(); 
              this.switchChecked = false;
             this.toggleSimpleOrAdvanced = "simple"; 

            },

        ////////////////////////////////////////////////////
        copyToOdNear(){
                this.refraction.near.od=JSON.parse(JSON.stringify(this.refraction.near.os));
        },
        copyToOsNear(){
              this.refraction.near.os=JSON.parse(JSON.stringify(this.refraction.near.od));
        },
        copyToOdDistant(){
                this.refraction.distant.od=JSON.parse(JSON.stringify(this.refraction.distant.os));
        },
        copyToOsDistant(){
             this.refraction.distant.os=JSON.parse(JSON.stringify(this.refraction.distant.od));
        },
    },
}
</script>

<style>

</style>