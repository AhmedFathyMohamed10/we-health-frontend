<template>
  <div class="fitting">
    <Base>
        <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t("fitting.header") }}</h4>
                    <ResetButton @reset="reset"></ResetButton>
                </div>
        </div>
        <div class="row">
            <div class="col-md-5">
                <div class="form-group">          
                        <label class="form-label">{{ $t('fitting.expirationDate.label') }}</label>
                        <Calendar
                            v-model="fitting.expirationDate"
                            :placeholder="$t('fitting.expirationDate.placeholder')"
                            :showIcon="true"
                            :class="{
                            'p-invalid':
                                (v.expirationDate.$error && !v.expirationDate.validDate) ||
                                (serializer_error.expirationDate? serializer_error.expirationDate.length > 0: false)
                            }"
                            dateFormat="mm-dd-yy"
                            @date-select="formateDate"
                        />
                        <small
                            class="p-invalid"
                            v-if="v.expirationDate.$error && !v.expirationDate.validDate"
                        >
                            {{ dateError($t('fitting.expirationDate.label'))}}
                        </small>
                </div> 
            </div>
        </div>
        <div class="row">
            <div class="offset-md-3 col-md-6">
                <div class="form-group">
                    <ImageEditor
                        v-model="fitting.image"
                        :editorControls="fittingControls"
                        :staticRef="'fittingControls'"
                        :uploadOnly="false" 
                        >
                    </ImageEditor>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-5">
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.od.manufacturer"
                        :label="$t('fitting.type.manufacturer.label')"
                        :options="manufacturerOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.manufacturer.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.manufacturer?
                            (serializer_error.type.od.manufacturer.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.manufacturer.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.manufacturer?
                            (serializer_error.type.od.manufacturer.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.manufacturer.other.$error && !v.type.od.manufacturer.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.manufacturer.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.manufacturer.other.minLength &&  v.type.od.manufacturer.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.manufacturer.label'), v.type.od.manufacturer.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.manufacturer.other.maxLength &&  v.type.od.manufacturer.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.manufacturer.label'), v.type.od.manufacturer.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.od.brand"
                        :label="$t('fitting.type.brand.label')"
                        :options="brandOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.brand.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.brand?
                            (serializer_error.type.od.brand.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.brand.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.brand?
                            (serializer_error.type.od.brand.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.brand.other.$error && !v.type.od.brand.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.brand.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.brand.other.minLength &&  v.type.od.brand.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.brand.label'), v.type.od.brand.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.brand.other.maxLength &&  v.type.od.brand.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.brand.label'), v.type.od.brand.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.od.design"
                        :label="$t('fitting.type.design.label')"
                        :options="designOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.design.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.design?
                            (serializer_error.type.od.design.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.design.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.design?
                            (serializer_error.type.od.design.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.design.other.$error && !v.type.od.design.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.design.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.design.other.minLength &&  v.type.od.design.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.design.label'), v.type.od.design.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.design.other.maxLength &&  v.type.od.design.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.design.label'), v.type.od.design.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.od.qtyBox"
                        :label="$t('fitting.type.qtyBox.label')"
                        :options="qtyBoxOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.qtyBox.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.qtyBox?
                            (serializer_error.type.od.qtyBox.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.qtyBox.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.qtyBox?
                            (serializer_error.type.od.qtyBox.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.qtyBox.other.$error && !v.type.od.qtyBox.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.qtyBox.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.qtyBox.other.minLength &&  v.type.od.qtyBox.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.qtyBox.label'), v.type.od.qtyBox.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.qtyBox.other.maxLength &&  v.type.od.qtyBox.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.qtyBox.label'), v.type.od.qtyBox.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown 
                        v-model="fitting.type.od.comfort"
                        :label="$t('fitting.type.comfort.label')"
                        :options="comfortOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.comfort.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.comfort?
                            (serializer_error.type.od.comfort.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.comfort.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.comfort?
                            (serializer_error.type.od.comfort.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.comfort.other.$error && !v.type.od.comfort.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.comfort.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.comfort.other.minLength &&  v.type.od.comfort.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.comfort.label'), v.type.od.comfort.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.comfort.other.maxLength &&  v.type.od.comfort.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.comfort.label'), v.type.od.comfort.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.od.vision"
                        :label="$t('fitting.type.vision.label')"
                        :options="visionOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.vision.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.vision?
                            (serializer_error.type.od.vision.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.vision.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.vision?
                            (serializer_error.type.od.vision.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.vision.other.$error && !v.type.od.vision.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.vision.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.vision.other.minLength &&  v.type.od.vision.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.vision.label'), v.type.od.vision.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.vision.other.maxLength &&  v.type.od.vision.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.vision.label'), v.type.od.vision.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.od.rotation"
                        :label="$t('fitting.type.rotation.label')"
                        :options="rotationOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.rotation.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.rotation?
                            (serializer_error.type.od.rotation.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.rotation.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.rotation?
                            (serializer_error.type.od.rotation.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.rotation.other.$error && !v.type.od.rotation.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.rotation.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.rotation.other.minLength &&  v.type.od.rotation.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.rotation.label'), v.type.od.rotation.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.rotation.other.maxLength &&  v.type.od.rotation.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.rotation.label'), v.type.od.rotation.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.od.movement"
                        :label="$t('fitting.type.movement.label')"
                        :options="movementOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.movement.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.movement?
                            (serializer_error.type.od.movement.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.movement.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.movement?
                            (serializer_error.type.od.movement.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.movement.other.$error && !v.type.od.movement.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.movement.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.movement.other.minLength &&  v.type.od.movement.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.movement.label'), v.type.od.movement.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.movement.other.maxLength &&  v.type.od.movement.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.movement.label'), v.type.od.movement.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.od.centration"
                        :label="$t('fitting.type.centration.label')"
                        :options="centrationOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.centration.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.centration?
                            (serializer_error.type.od.centration.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.centration.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.centration?
                            (serializer_error.type.od.centration.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.centration.other.$error && !v.type.od.centration.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.centration.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.centration.other.minLength &&  v.type.od.centration.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.centration.label'), v.type.od.centration.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.centration.other.maxLength &&  v.type.od.centration.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.centration.label'), v.type.od.centration.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>                
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.od.tear"
                        :label="$t('fitting.type.tear.label')"
                        :options="commonOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.tear.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.tear?
                            (serializer_error.type.od.tear.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.tear.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.tear?
                            (serializer_error.type.od.tear.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.tear.other.$error && !v.type.od.tear.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.tear.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.tear.other.minLength &&  v.type.od.tear.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.tear.label'), v.type.od.tear.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.tear.other.maxLength &&  v.type.od.tear.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.tear.label'), v.type.od.tear.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>                
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.od.sclera"


                        :label="$t('fitting.type.sclera.label')"
                        :options="scleraOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.sclera.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.sclera?
                            (serializer_error.type.od.sclera.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.sclera.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.sclera?
                            (serializer_error.type.od.sclera.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.sclera.other.$error && !v.type.od.sclera.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.sclera.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.sclera.other.minLength &&  v.type.od.sclera.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.sclera.label'), v.type.od.sclera.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.sclera.other.maxLength &&  v.type.od.sclera.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.sclera.label'), v.type.od.sclera.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>                
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.od.limbal"
                        :label="$t('fitting.type.limbal.label')"
                        :options="limbalOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.limbal.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.limbal?
                            (serializer_error.type.od.limbal.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.limbal.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.limbal?
                            (serializer_error.type.od.limbal.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.limbal.other.$error && !v.type.od.limbal.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.limbal.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.limbal.other.minLength &&  v.type.od.limbal.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.limbal.label'), v.type.od.limbal.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.limbal.other.maxLength &&  v.type.od.limbal.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.limbal.label'), v.type.od.limbal.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>                
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.od.cornea"
                        :label="$t('fitting.type.cornea.label')"
                        :options="corneaOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.cornea.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.cornea?
                            (serializer_error.type.od.cornea.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.cornea.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.cornea?
                            (serializer_error.type.od.cornea.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.cornea.other.$error && !v.type.od.cornea.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.cornea.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.cornea.other.minLength &&  v.type.od.cornea.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.cornea.label'), v.type.od.cornea.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.cornea.other.maxLength &&  v.type.od.cornea.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.cornea.label'), v.type.od.cornea.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>                
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.od.lid"
                        :label="$t('fitting.type.lid.label')"
                        :options="lidOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.od.lid.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.lid?
                            (serializer_error.type.od.lid.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.od.lid.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.od?
                            (serializer_error.type.od.lid?
                            (serializer_error.type.od.lid.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.od.lid.other.$error && !v.type.od.lid.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.lid.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.lid.other.minLength &&  v.type.od.lid.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.lid.label'), v.type.od.lid.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.lid.other.maxLength &&  v.type.od.lid.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.lid.label'), v.type.od.lid.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                        <label class="form-label">{{$t('fitting.type.type.label')}}</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="fitting.type.od.type" 
                            :placeholder="$t('fitting.type.type.placeholder')" 
                            :class="{
                                'is-invalid':
                                (v.type.od.type.$error)
                                ||
                                (serializer_error.type?serializer_error.type.length>0:false)
                            }" 
                        >
                        <div v-if="v.type.od.type.$error && !v.type.od.type.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('fitting.type.type.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.type.minLength &&  v.type.od.type.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.type.label'), v.type.od.type.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.type.maxLength &&  v.type.od.type.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.type.label'), v.type.od.type.$params.maxLength.max)}}
                        </div> 
                </div>                
                <div class="form-group">
                        <label class="form-label">{{$t('fitting.type.material.label')}}</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="fitting.type.od.material" 
                            :placeholder="$t('fitting.type.material.placeholder')" 
                            :class="{
                                'is-invalid':
                                (v.type.od.material.$error)
                                ||
                                (serializer_error.material?serializer_error.material.length>0:false)
                            }" 
                        >
                        <div v-if="v.type.od.material.$error && !v.type.od.material.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('fitting.type.material.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.material.minLength &&  v.type.od.material.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.material.label'), v.type.od.material.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.material.maxLength &&  v.type.od.material.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.material.label'), v.type.od.material.$params.maxLength.max)}}
                        </div> 
                </div>                
                <div class="form-group">
                        <label class="form-label">{{$t('fitting.type.wearingPeriod.label')}}</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="fitting.type.od.wearingPeriod" 
                            :placeholder="$t('fitting.type.wearingPeriod.placeholder')" 
                            :class="{
                                'is-invalid':
                                (v.type.od.wearingPeriod.$error)
                                ||
                                (serializer_error.wearingPeriod?serializer_error.wearingPeriod.length>0:false)
                            }" 
                        >
                        <div v-if="v.type.od.wearingPeriod.$error && !v.type.od.wearingPeriod.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('fitting.type.wearingPeriod.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.wearingPeriod.minLength &&  v.type.od.wearingPeriod.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.wearingPeriod.label'), v.type.od.wearingPeriod.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.wearingPeriod.maxLength &&  v.type.od.wearingPeriod.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.wearingPeriod.label'), v.type.od.wearingPeriod.$params.maxLength.max)}}
                        </div> 
                </div>                
                <div class="form-group">
                        <label class="form-label">{{$t('fitting.type.replacement.label')}}</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="fitting.type.od.replacement" 
                            :placeholder="$t('fitting.type.replacement.placeholder')" 
                            :class="{
                                'is-invalid':
                                (v.type.od.replacement.$error)
                                ||
                                (serializer_error.replacement?serializer_error.replacement.length>0:false)
                            }" 
                        >
                        <div v-if="v.type.od.replacement.$error && !v.type.od.replacement.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('fitting.type.replacement.label'))}}
                        </div>
                        <div v-else-if="! v.type.od.replacement.minLength &&  v.type.od.replacement.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.replacement.label'), v.type.od.replacement.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.od.replacement.maxLength &&  v.type.od.replacement.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.replacement.label'), v.type.od.replacement.$params.maxLength.max)}}
                        </div> 
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
                        v-model="fitting.type.os.manufacturer"
                        :label="$t('fitting.type.manufacturer.label')"
                        :options="manufacturerOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.manufacturer.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.manufacturer?
                            (serializer_error.type.os.manufacturer.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.manufacturer.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.manufacturer?
                            (serializer_error.type.os.manufacturer.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.manufacturer.other.$error && !v.type.os.manufacturer.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.manufacturer.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.manufacturer.other.minLength &&  v.type.os.manufacturer.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.manufacturer.label'), v.type.os.manufacturer.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.manufacturer.other.maxLength &&  v.type.os.manufacturer.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.manufacturer.label'), v.type.os.manufacturer.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.os.brand"
                        :label="$t('fitting.type.brand.label')"
                        :options="brandOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.brand.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.brand?
                            (serializer_error.type.os.brand.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.brand.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.brand?
                            (serializer_error.type.os.brand.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.brand.other.$error && !v.type.os.brand.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.brand.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.brand.other.minLength &&  v.type.os.brand.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.brand.label'), v.type.os.brand.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.brand.other.maxLength &&  v.type.os.brand.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.brand.label'), v.type.os.brand.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.os.design"
                        :label="$t('fitting.type.design.label')"
                        :options="designOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.design.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.design?
                            (serializer_error.type.os.design.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.design.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.design?
                            (serializer_error.type.os.design.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.design.other.$error && !v.type.os.design.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.design.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.design.other.minLength &&  v.type.os.design.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.design.label'), v.type.os.design.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.design.other.maxLength &&  v.type.os.design.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.design.label'), v.type.os.design.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.os.qtyBox"
                        :label="$t('fitting.type.qtyBox.label')"
                        :options="qtyBoxOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.qtyBox.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.qtyBox?
                            (serializer_error.type.os.qtyBox.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.qtyBox.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.qtyBox?
                            (serializer_error.type.os.qtyBox.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.qtyBox.other.$error && !v.type.os.qtyBox.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.qtyBox.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.qtyBox.other.minLength &&  v.type.os.qtyBox.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.qtyBox.label'), v.type.os.qtyBox.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.qtyBox.other.maxLength &&  v.type.os.qtyBox.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.qtyBox.label'), v.type.os.qtyBox.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.os.comfort"
                        :label="$t('fitting.type.comfort.label')"
                        :options="comfortOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.comfort.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.comfort?
                            (serializer_error.type.os.comfort.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.comfort.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.comfort?
                            (serializer_error.type.os.comfort.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.comfort.other.$error && !v.type.os.comfort.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.comfort.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.comfort.other.minLength &&  v.type.os.comfort.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.comfort.label'), v.type.os.comfort.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.comfort.other.maxLength &&  v.type.os.comfort.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.comfort.label'), v.type.os.comfort.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.os.vision"
                        :label="$t('fitting.type.vision.label')"
                        :options="visionOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.vision.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.vision?
                            (serializer_error.type.os.vision.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.vision.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.vision?
                            (serializer_error.type.os.vision.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.vision.other.$error && !v.type.os.vision.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.vision.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.vision.other.minLength &&  v.type.os.vision.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.vision.label'), v.type.os.vision.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.vision.other.maxLength &&  v.type.os.vision.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.vision.label'), v.type.os.vision.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.os.rotation"
                        :label="$t('fitting.type.rotation.label')"
                        :options="rotationOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.rotation.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.rotation?
                            (serializer_error.type.os.rotation.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.rotation.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.rotation?
                            (serializer_error.type.os.rotation.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.rotation.other.$error && !v.type.os.rotation.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.rotation.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.rotation.other.minLength &&  v.type.os.rotation.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.rotation.label'), v.type.os.rotation.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.rotation.other.maxLength &&  v.type.os.rotation.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.rotation.label'), v.type.os.rotation.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.os.movement"
                        :label="$t('fitting.type.movement.label')"
                        :options="movementOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.movement.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.movement?
                            (serializer_error.type.os.movement.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.movement.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.movement?
                            (serializer_error.type.os.movement.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.movement.other.$error && !v.type.os.movement.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.movement.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.movement.other.minLength &&  v.type.os.movement.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.movement.label'), v.type.os.movement.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.movement.other.maxLength &&  v.type.os.movement.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.movement.label'), v.type.os.movement.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.os.centration"
                        :label="$t('fitting.type.centration.label')"
                        :options="centrationOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.centration.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.centration?
                            (serializer_error.type.os.centration.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.centration.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.centration?
                            (serializer_error.type.os.centration.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.centration.other.$error && !v.type.os.centration.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.centration.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.centration.other.minLength &&  v.type.os.centration.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.centration.label'), v.type.os.centration.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.centration.other.maxLength &&  v.type.os.centration.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.centration.label'), v.type.os.centration.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>                
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.os.tear"
                        :label="$t('fitting.type.tear.label')"
                        :options="commonOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.tear.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.tear?
                            (serializer_error.type.os.tear.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.tear.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.tear?
                            (serializer_error.type.os.tear.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.tear.other.$error && !v.type.os.tear.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.tear.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.tear.other.minLength &&  v.type.os.tear.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.tear.label'), v.type.os.tear.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.tear.other.maxLength &&  v.type.os.tear.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.tear.label'), v.type.os.tear.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>                
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.os.sclera"
                        :label="$t('fitting.type.sclera.label')"
                        :options="scleraOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.sclera.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.sclera?
                            (serializer_error.type.os.sclera.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.sclera.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.sclera?
                            (serializer_error.type.os.sclera.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.sclera.other.$error && !v.type.os.sclera.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.sclera.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.sclera.other.minLength &&  v.type.os.sclera.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.sclera.label'), v.type.os.sclera.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.sclera.other.maxLength &&  v.type.os.sclera.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.sclera.label'), v.type.os.sclera.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>                
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.os.limbal"
                        :label="$t('fitting.type.limbal.label')"
                        :options="limbalOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.limbal.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.limbal?
                            (serializer_error.type.os.limbal.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.limbal.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.limbal?
                            (serializer_error.type.os.limbal.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.limbal.other.$error && !v.type.os.limbal.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.limbal.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.limbal.other.minLength &&  v.type.os.limbal.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.limbal.label'), v.type.os.limbal.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.limbal.other.maxLength &&  v.type.os.limbal.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.limbal.label'), v.type.os.limbal.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>                
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.os.cornea"
                        :label="$t('fitting.type.cornea.label')"
                        :options="corneaOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.cornea.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.cornea?
                            (serializer_error.type.os.cornea.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.cornea.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.cornea?
                            (serializer_error.type.os.cornea.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.cornea.other.$error && !v.type.os.cornea.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.cornea.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.cornea.other.minLength &&  v.type.os.cornea.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.cornea.label'), v.type.os.cornea.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.cornea.other.maxLength &&  v.type.os.cornea.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.cornea.label'), v.type.os.cornea.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>                
                <div class="form-group">
                    <CustomDropdown
                        v-model="fitting.type.os.lid"
                        :label="$t('fitting.type.lid.label')"
                        :options="lidOdOptions"
                        :inputType="'text'"
                        :invalidSelection="
                        (
                            v.type.os.lid.selection.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.lid?
                            (serializer_error.type.os.lid.selection.length > 0):false):false):false
                        )
                        "
                        :invalidOther="
                        (
                            v.type.os.lid.other.$error
                        )||
                        ( serializer_error.type ?
                            (serializer_error.type.os?
                            (serializer_error.type.os.lid?
                            (serializer_error.type.os.lid.other.length > 0):false):false):false
                        )
                        "
                        >
                        <div v-if="v.type.os.lid.other.$error && !v.type.os.lid.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('fitting.type.lid.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.lid.other.minLength &&  v.type.os.lid.other.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.lid.label'), v.type.os.lid.other.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.lid.other.maxLength &&  v.type.os.lid.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.lid.label'), v.type.os.lid.other.$params.maxLength.max)}}
                        </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                        <label class="form-label">{{$t('fitting.type.type.label')}}</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="fitting.type.os.type" 
                            :placeholder="$t('fitting.type.type.placeholder')" 
                            :class="{
                                'is-invalid':
                                (v.type.os.type.$error)
                                ||
                                (serializer_error.type?serializer_error.type.length>0:false)
                            }" 
                        >
                        <div v-if="v.type.os.type.$error && !v.type.os.type.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('fitting.type.type.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.type.minLength &&  v.type.os.type.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.type.label'), v.type.os.type.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.type.maxLength &&  v.type.os.type.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.type.label'), v.type.os.type.$params.maxLength.max)}}
                        </div> 
                </div>                
                <div class="form-group">
                        <label class="form-label">{{$t('fitting.type.material.label')}}</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="fitting.type.os.material" 
                            :placeholder="$t('fitting.type.material.placeholder')" 
                            :class="{
                                'is-invalid':
                                (v.type.os.material.$error)
                                ||
                                (serializer_error.material?serializer_error.material.length>0:false)
                            }" 
                        >
                        <div v-if="v.type.os.material.$error && !v.type.os.material.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('fitting.type.material.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.material.minLength &&  v.type.os.material.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.material.label'), v.type.os.material.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.material.maxLength &&  v.type.os.material.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.material.label'), v.type.os.material.$params.maxLength.max)}}
                        </div> 
                </div>                
                <div class="form-group">
                        <label class="form-label">{{$t('fitting.type.wearingPeriod.label')}}</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="fitting.type.os.wearingPeriod" 
                            :placeholder="$t('fitting.type.wearingPeriod.placeholder')" 
                            :class="{
                                'is-invalid':
                                (v.type.os.wearingPeriod.$error)
                                ||
                                (serializer_error.wearingPeriod?serializer_error.wearingPeriod.length>0:false)
                            }" 
                        >
                        <div v-if="v.type.os.wearingPeriod.$error && !v.type.os.wearingPeriod.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('fitting.type.wearingPeriod.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.wearingPeriod.minLength &&  v.type.os.wearingPeriod.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.wearingPeriod.label'), v.type.os.wearingPeriod.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.wearingPeriod.maxLength &&  v.type.os.wearingPeriod.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.wearingPeriod.label'), v.type.os.wearingPeriod.$params.maxLength.max)}}
                        </div> 
                </div>                
                <div class="form-group">
                        <label class="form-label">{{$t('fitting.type.replacement.label')}}</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="fitting.type.os.replacement" 
                            :placeholder="$t('fitting.type.replacement.placeholder')" 
                            :class="{
                                'is-invalid':
                                (v.type.os.replacement.$error)
                                ||
                                (serializer_error.replacement?serializer_error.replacement.length>0:false)
                            }" 
                        >
                        <div v-if="v.type.os.replacement.$error && !v.type.os.replacement.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('fitting.type.replacement.label'))}}
                        </div>
                        <div v-else-if="! v.type.os.replacement.minLength &&  v.type.os.replacement.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.type.replacement.label'), v.type.os.replacement.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.type.os.replacement.maxLength &&  v.type.os.replacement.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.type.replacement.label'), v.type.os.replacement.$params.maxLength.max)}}
                        </div> 
                </div>                
            </div>
        </div>

        
        <!-- Near and Distant -->
        <Divider></Divider>
        <div class="d-flex align-items-center flex-wrap gap-4 mb-5">
            <div class="d-flex align-items-center">
                <span> {{ $t("measurementsLabels.near") }}</span>
                <InputSwitch v-model="switchChecked" class="mx-2" />
                <span> {{ $t("measurementsLabels.distant") }}</span>
            </div>


            
            <!-- Input Switch -->
            <div class="my-2">
                <RadioButton inputId="simple" name="simple" value="simple" v-model="toggleSimpleOrAdvanced" />
                <span class="mx-2"> {{ $t("measurementsLabels.simple") }}</span>
                <RadioButton inputId="advanced" name="advanced" value="advanced" v-model="toggleSimpleOrAdvanced" />
                <span class="ms-2"> {{ $t("measurementsLabels.advanced") }}</span>
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
                        v-model="fitting.measurements.near.od.spherical"
                        :label="$t('measurementsLabels.spherical')"
                        :excludeColumn="0"
                        :options="sphericalOptions"
                        :invalid="
                            (v.measurements.near.od.spherical.$error)||
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
                            v-if="v.measurements.near.od.spherical.$error && !v.measurements.near.od.spherical.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.spherical'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.spherical.minLength &&  v.measurements.near.od.spherical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.spherical'), v.measurements.near.od.spherical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.spherical.maxLength &&  v.measurements.near.od.spherical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.spherical'), v.measurements.near.od.spherical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Cylindrical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Cylindrical -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.od.cylindrical"
                        :label="$t('measurementsLabels.cylindrical')"
                        :excludeColumn="0"
                        :options="cylindricalOptions"
                        :invalid="
                            (v.measurements.near.od.cylindrical.$error)||
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
                            v-if="v.measurements.near.od.cylindrical.$error && !v.measurements.near.od.cylindrical.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.cylindrical'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.cylindrical.minLength &&  v.measurements.near.od.cylindrical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.cylindrical'), v.measurements.near.od.cylindrical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.cylindrical.maxLength &&  v.measurements.near.od.cylindrical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.cylindrical'), v.measurements.near.od.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Axis -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Axis -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.od.axis"
                        :label="$t('measurementsLabels.axis')"
                        :options="axisOptions"
                        :invalid="
                            (v.measurements.near.od.axis.$error)||
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
                            v-if="v.measurements.near.od.axis.$error && !v.measurements.near.od.axis.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.axis'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.axis.minLength &&  v.measurements.near.od.axis.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.axis'), v.measurements.near.od.axis.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.axis.maxLength &&  v.measurements.near.od.axis.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.axis'), v.measurements.near.od.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- BC -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- BC -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.od.bc"
                        :label="$t('measurementsLabels.bc')"
                        :options="bcOptions"
                        :invalid="
                            (v.measurements.near.od.bc.$error)||
                            (check_error.od?
                                (check_error.od.bc?check_error.od.bc.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.bc?serializer_error.od.bc.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.measurements.near.od.bc.$error && !v.measurements.near.od.bc.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.bc'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.bc.minLength &&  v.measurements.near.od.bc.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.bc'), v.measurements.near.od.bc.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.bc.maxLength &&  v.measurements.near.od.bc.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.bc'), v.measurements.near.od.bc.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- DIA -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Dia -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.od.dia"
                        :label="$t('measurementsLabels.dia')"
                        :options="diaOptions"
                        :invalid="
                            (v.measurements.near.od.dia.$error)||
                            (check_error.od?
                                (check_error.od.dia?check_error.od.dia.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.dia?serializer_error.od.dia.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.measurements.near.od.dia.$error && !v.measurements.near.od.dia.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.dia'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.dia.minLength &&  v.measurements.near.od.dia.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.dia'), v.measurements.near.od.dia.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.dia.maxLength &&  v.measurements.near.od.dia.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.dia'), v.measurements.near.od.dia.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Add -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Add -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.od.add"
                        :label="$t('measurementsLabels.add')"
                        :options="addOptions"
                        :invalid="
                            (v.measurements.near.od.add.$error)||
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
                            v-if="v.measurements.near.od.add.$error && !v.measurements.near.od.add.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.add'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.add.minLength &&  v.measurements.near.od.add.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.add'), v.measurements.near.od.add.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.add.maxLength &&  v.measurements.near.od.add.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.add'), v.measurements.near.od.add.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- DN -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <label class="form-label">{{ $t('measurementsLabels.dn') }}</label>
                    <!-- DN -->
                    <Dropdown
                        v-model="fitting.measurements.near.od.dn"
                        :options="dnNearOdOptions"
                        optionLabel="value"
                        :placeholder="locale=='ar'?'اختر':'Select'" 
                    />
                </div>
            </div>
            <!-- Prism -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Prism -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.od.prism"
                        :label="$t('measurementsLabels.prism')"
                        :options="prismOptions"
                        :invalid="
                            (v.measurements.near.od.prism.$error)||
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
                            v-if="v.measurements.near.od.prism.$error && !v.measurements.near.od.prism.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.prism'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.prism.minLength &&  v.measurements.near.od.prism.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.prism'), v.measurements.near.od.prism.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.prism.maxLength &&  v.measurements.near.od.prism.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.prism'), v.measurements.near.od.prism.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- NVA -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- NVA -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.od.nva"
                        :label="$t('measurementsLabels.nva')"
                        :options="nvaOptions"
                        :invalid="
                            (v.measurements.near.od.nva.$error)||
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
                            v-if="v.measurements.near.od.nva.$error && !v.measurements.near.od.nva.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.nva'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.nva.minLength &&  v.measurements.near.od.nva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.nva'), v.measurements.near.od.nva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.od.nva.maxLength &&  v.measurements.near.od.nva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.nva'), v.measurements.near.od.nva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>   
        <!-- Copy Buttons -->
        <div class="row mt-4" v-if="!switchChecked">
            <div class="d-flex justify-content-center">
                <div class="form-group mb-0">
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
        <!-- Os Row -->
        <div class="row" v-if="!switchChecked">
            <h4>{{ $t('measurementsLabels.os') }}</h4>
            <!-- Spherical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.os.spherical"
                        :label="$t('measurementsLabels.spherical')"
                        :options="sphericalOptions"
                        :excludeColumn="0"
                        :invalid="
                            (v.measurements.near.os.spherical.$error)||
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
                            v-if="v.measurements.near.os.spherical.$error && !v.measurements.near.os.spherical.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.spherical'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.spherical.minLength &&  v.measurements.near.os.spherical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.spherical'), v.measurements.near.os.spherical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.spherical.maxLength &&  v.measurements.near.os.spherical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.spherical'), v.measurements.near.os.spherical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Cylindrical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Cylindrical -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.os.cylindrical"
                        :label="$t('measurementsLabels.cylindrical')"
                        :excludeColumn="0"
                        :options="cylindricalOptions"
                        :invalid="
                            (v.measurements.near.os.cylindrical.$error)||
                            (check_error.os?
                                (check_error.os.cylindrical?check_error.os.cylindrical.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.cylindrical?serializer_error.os.cylindrical.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.measurements.near.os.cylindrical.$error && !v.measurements.near.os.cylindrical.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.cylindrical'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.cylindrical.minLength &&  v.measurements.near.os.cylindrical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.cylindrical'), v.measurements.near.os.cylindrical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.cylindrical.maxLength &&  v.measurements.near.os.cylindrical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.cylindrical'), v.measurements.near.os.bc.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Axis -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Axis -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.os.axis"
                        :label="$t('measurementsLabels.axis')"
                        :options="axisOptions"
                        :invalid="
                            (v.measurements.near.os.axis.$error)||
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
                            v-if="v.measurements.near.os.axis.$error && !v.measurements.near.os.axis.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.axis'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.axis.minLength &&  v.measurements.near.os.axis.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.axis'), v.measurements.near.os.axis.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.axis.maxLength &&  v.measurements.near.os.axis.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.axis'), v.measurements.near.os.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- BC -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- BC -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.os.bc"
                        :label="$t('measurementsLabels.bc')"
                        :options="bcOptions"
                        :invalid="
                            (v.measurements.near.os.bc.$error)||
                            (check_error.os?
                                (check_error.os.bc?check_error.os.bc.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.bc?serializer_error.os.bc.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.measurements.near.os.bc.$error && !v.measurements.near.os.bc.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.bc'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.bc.minLength &&  v.measurements.near.os.bc.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.bc'), v.measurements.near.os.bc.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.bc.maxLength &&  v.measurements.near.os.bc.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.bc'), v.measurements.near.os.bc.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- DIA -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Dia -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.os.dia"
                        :label="$t('measurementsLabels.dia')"
                        :options="diaOptions"
                        :invalid="
                            (v.measurements.near.os.dia.$error)||
                            (check_error.os?
                                (check_error.os.dia?check_error.os.dia.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.dia?serializer_error.os.dia.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.measurements.near.os.dia.$error && !v.measurements.near.os.dia.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.dia'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.dia.minLength &&  v.measurements.near.os.dia.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.dia'), v.measurements.near.os.dia.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.dia.maxLength &&  v.measurements.near.os.dia.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.dia'), v.measurements.near.os.dia.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>            
            <!-- Add -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Add -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.os.add"
                        :label="$t('measurementsLabels.add')"
                        :options="addOptions"
                        :invalid="
                            (v.measurements.near.os.add.$error)||
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
                            v-if="v.measurements.near.os.add.$error && !v.measurements.near.os.add.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.add'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.add.minLength &&  v.measurements.near.os.add.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.add'), v.measurements.near.os.add.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.add.maxLength &&  v.measurements.near.os.add.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.add'), v.measurements.near.os.add.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- DN -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <label class="form-label">{{ $t('measurementsLabels.dn') }}</label>
                    <!-- DN -->
                    <Dropdown
                        v-model="fitting.measurements.near.os.dn"
                        :options="dnNearOsOptions"
                        optionLabel="value"
                        :placeholder="locale=='ar'?'اختر':'Select'" 
                    />
                </div>
            </div>            
            <!-- Prism -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Prism -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.os.prism"
                        :label="$t('measurementsLabels.prism')"
                        :options="prismOptions"
                        :invalid="
                            (v.measurements.near.os.prism.$error)||
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
                            v-if="v.measurements.near.os.prism.$error && !v.measurements.near.os.prism.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.prism'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.prism.minLength &&  v.measurements.near.os.prism.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.prism'), v.measurements.near.os.prism.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.prism.maxLength &&  v.measurements.near.os.prism.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.prism'), v.measurements.near.os.prism.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- NVA -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- NVA -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.os.nva"
                        :label="$t('measurementsLabels.nva')"
                        :options="nvaOptions"
                        :invalid="
                            (v.measurements.near.os.nva.$error)||
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
                            v-if="v.measurements.near.os.nva.$error && !v.measurements.near.os.nva.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.nva'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.nva.minLength &&  v.measurements.near.os.nva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.nva'), v.measurements.near.os.nva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.os.nva.maxLength &&  v.measurements.near.os.nva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.nva'), v.measurements.near.os.nva.$params.maxLength.max)}}
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
                        v-model="fitting.measurements.near.ou.dva"
                        :label="$t('measurementsLabels.dva')"
                        :options="dvaOptions"
                        :invalid="
                            (v.measurements.near.ou.dva.$error)||
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
                            v-if="v.measurements.near.ou.dva.$error && !v.measurements.near.ou.dva.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.dva'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.ou.dva.minLength &&  v.measurements.near.ou.dva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.dva'), v.measurements.near.ou.dva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.ou.dva.maxLength &&  v.measurements.near.ou.dva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.dva'), v.measurements.near.ou.dva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- NVA -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- NVA -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.near.ou.nva"
                        :label="$t('measurementsLabels.nva')"
                        :options="nvaOptions"
                        :invalid="
                            (v.measurements.near.ou.nva.$error)||
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
                            v-if="v.measurements.near.ou.nva.$error && !v.measurements.near.ou.nva.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.nva'))}}
                        </div>
                        <div v-else-if="! v.measurements.near.ou.nva.minLength &&  v.measurements.near.ou.nva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.nva'), v.measurements.near.ou.nva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.near.ou.nva.maxLength &&  v.measurements.near.ou.nva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.nva'), v.measurements.near.ou.nva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>
        <!-- Solution Row -->
        <div class="row" v-if="!switchChecked">
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <label class="form-label">{{ $t('fitting.measurements.solution.label') }}</label>
                    <Dropdown
                        v-model="fitting.measurements.near.solution"
                        :options="solutionNearOptions"
                        optionLabel="value"
                        :placeholder="locale=='ar'?'اختر':'Select'" 
                    />
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
                        v-model="fitting.measurements.distant.od.spherical"
                        :label="$t('measurementsLabels.spherical')"
                        :options="sphericalOptions"
                        :excludeColumn="0"
                        :invalid="
                            (v.measurements.distant.od.spherical.$error)||
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
                            v-if="v.measurements.distant.od.spherical.$error && !v.measurements.distant.od.spherical.notContainsHtmlTags"   class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.spherical'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.spherical.minLength &&  v.measurements.distant.od.spherical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.spherical'), v.measurements.distant.od.spherical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.spherical.maxLength &&  v.measurements.distant.od.spherical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.spherical'), v.measurements.distant.od.spherical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Cylindrical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Cylindrical -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.od.cylindrical"
                        :label="$t('measurementsLabels.cylindrical')"
                        :options="cylindricalOptions"
                        :excludeColumn="0"
                        :invalid="
                            (v.measurements.distant.od.cylindrical.$error)||
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
                            v-if="v.measurements.distant.od.cylindrical.$error && !v.measurements.distant.od.cylindrical.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.cylindrical'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.cylindrical.minLength &&  v.measurements.distant.od.cylindrical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.cylindrical'), v.measurements.distant.od.cylindrical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.cylindrical.maxLength &&  v.measurements.distant.od.cylindrical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.cylindrical'), v.measurements.distant.od.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Axis -->
            <div class="col-md-3 col-xxl-2" >
                <div class="form-group">
                    <!-- Axis -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.od.axis"
                        :label="$t('measurementsLabels.axis')"
                        :options="axisOptions"
                        :invalid="
                            (v.measurements.distant.od.axis.$error)||
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
                            v-if="v.measurements.distant.od.axis.$error && !v.measurements.distant.od.axis.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.axis'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.axis.minLength &&  v.measurements.distant.od.axis.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.axis'), v.measurements.distant.od.axis.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.axis.maxLength &&  v.measurements.distant.od.axis.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.axis'), v.measurements.distant.od.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- BC -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- BC -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.od.bc"
                        :label="$t('measurementsLabels.bc')"
                        :options="bcOptions"
                        :invalid="
                            (v.measurements.distant.od.bc.$error)||
                            (check_error.od?
                                (check_error.od.bc?check_error.od.bc.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.bc?serializer_error.od.bc.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.measurements.distant.od.bc.$error && !v.measurements.distant.od.bc.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.bc'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.bc.minLength &&  v.measurements.distant.od.bc.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.bc'), v.measurements.distant.od.bc.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.bc.maxLength &&  v.measurements.distant.od.bc.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.bc'), v.measurements.distant.od.bc.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- DIA -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Dia -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.od.dia"
                        :label="$t('measurementsLabels.dia')"
                        :options="diaOptions"
                        :invalid="
                            (v.measurements.distant.od.dia.$error)||
                            (check_error.od?
                                (check_error.od.dia?check_error.od.dia.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.od.dia?serializer_error.od.dia.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.measurements.distant.od.dia.$error && !v.measurements.distant.od.dia.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.dia'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.dia.minLength &&  v.measurements.distant.od.dia.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.dia'), v.measurements.distant.od.dia.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.dia.maxLength &&  v.measurements.distant.od.dia.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.dia'), v.measurements.distant.od.dia.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Add -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Add -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.od.add"
                        :label="$t('measurementsLabels.add')"
                        :options="addOptions"
                        :invalid="
                            (v.measurements.distant.od.add.$error)||
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
                            v-if="v.measurements.distant.od.add.$error && !v.measurements.distant.od.add.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.add'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.add.minLength &&  v.measurements.distant.od.add.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.add'), v.measurements.distant.od.add.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.add.maxLength &&  v.measurements.distant.od.add.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.add'), v.measurements.distant.od.add.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>            
            <!-- DN -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <label class="form-label">{{ $t('measurementsLabels.dn') }}</label>
                    <!-- DN -->
                    <Dropdown
                        v-model="fitting.measurements.distant.od.dn"
                        :options="dnDistantOdOptions"
                        optionLabel="value"
                        :placeholder="locale=='ar'?'اختر':'Select'" 
                    />
                </div>
            </div>            
            <!-- Prism -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Prism -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.od.prism"
                        :label="$t('measurementsLabels.prism')"
                        :options="prismOptions"
                        :invalid="
                            (v.measurements.distant.od.prism.$error)||
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
                            v-if="v.measurements.distant.od.prism.$error && !v.measurements.distant.od.prism.notContainsHtmlTags"                    class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.prism'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.prism.minLength &&  v.measurements.distant.od.prism.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.prism'), v.measurements.distant.od.prism.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.prism.maxLength &&  v.measurements.distant.od.prism.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.prism'), v.measurements.distant.od.prism.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Dva -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Dva -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.od.dva"
                        :label="$t('measurementsLabels.dva')"
                        :options="dvaOptions"
                        :invalid="
                            (v.measurements.distant.od.dva.$error)||
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
                            v-if="v.measurements.distant.od.dva.$error && !v.measurements.distant.od.dva.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.dva'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.dva.minLength &&  v.measurements.distant.od.dva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.dva'), v.measurements.distant.od.dva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.od.dva.maxLength &&  v.measurements.distant.od.dva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.dva'), v.measurements.distant.od.dva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>
        <!-- Copy Buttons -->
        <div class="row my-4" v-if="switchChecked">
            <div class="d-flex justify-content-center my-2">
                <div class="form-group ">
                    <button class="btn btn-icon rounded-circle btn-success me-2" @click="copyToOdDistant">
                        <i class="fa fa-angle-up fa-md"></i> 
                    </button>
                </div>
                <div class="form-group ">
                    <button class="btn btn-icon rounded-circle btn-success" @click="copyToOsDistant">
                        <i class="fa fa-angle-down fa-md"></i>
                    </button>
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
                        v-model="fitting.measurements.distant.os.spherical"
                        :label="$t('measurementsLabels.spherical')"
                        :options="sphericalOptions"
                        :excludeColumn="0"
                        :invalid="
                            (v.measurements.distant.os.spherical.$error)||
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
                            v-if="v.measurements.distant.os.spherical.$error && !v.measurements.distant.os.spherical.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.spherical'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.spherical.minLength &&  v.measurements.distant.os.spherical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.spherical'), v.measurements.distant.os.spherical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.spherical.maxLength &&  v.measurements.distant.os.spherical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.spherical'), v.measurements.distant.os.spherical.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Cylindrical -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Cylindrical -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.os.cylindrical"
                        :label="$t('measurementsLabels.cylindrical')"
                        :options="cylindricalOptions"
                        :excludeColumn="0"
                        :invalid="
                            (v.measurements.distant.os.cylindrical.$error)||
                            (check_error.os?
                                (check_error.os.cylindrical?check_error.os.cylindrical.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.cylindrical?serializer_error.os.cylindrical.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.measurements.distant.os.cylindrical.$error && !v.measurements.distant.os.cylindrical.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.cylindrical'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.cylindrical.minLength &&  v.measurements.distant.os.cylindrical.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.cylindrical'), v.measurements.distant.os.cylindrical.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.cylindrical.maxLength &&  v.measurements.distant.os.cylindrical.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.cylindrical'), v.measurements.distant.os.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Axis -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Axis -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.os.axis"
                        :label="$t('measurementsLabels.axis')"
                        :options="axisOptions"
                        :invalid="
                            (v.measurements.distant.os.axis.$error)||
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
                            v-if="v.measurements.distant.os.axis.$error && !v.measurements.distant.os.axis.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.axis'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.axis.minLength &&  v.measurements.distant.os.axis.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.axis'), v.measurements.distant.os.axis.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.axis.maxLength &&  v.measurements.distant.os.axis.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.axis'), v.measurements.distant.os.axis.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- BC -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- BC -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.os.bc"
                        :label="$t('measurementsLabels.bc')"
                        :options="bcOptions"
                        :invalid="
                            (v.measurements.distant.os.bc.$error)||
                            (check_error.os?
                                (check_error.os.bc?check_error.os.bc.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.bc?serializer_error.os.bc.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.measurements.distant.os.bc.$error && !v.measurements.distant.os.bc.notContainsHtmlTags"   class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.bc'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.bc.minLength &&  v.measurements.distant.os.bc.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.bc'), v.measurements.distant.os.bc.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.bc.maxLength &&  v.measurements.distant.os.bc.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.bc'), v.measurements.distant.os.bc.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- DIA -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Dia -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.os.dia"
                        :label="$t('measurementsLabels.dia')"
                        :options="diaOptions"
                        :invalid="
                            (v.measurements.distant.os.dia.$error)||
                            (check_error.os?
                                (check_error.os.dia?check_error.os.dia.length>0:false):false
                            )
                            ||
                            (serializer_error.os?
                                (serializer_error.os.dia?serializer_error.os.dia.length>0:false):false
                            )
                        " 
                    >                    
                        <div 
                            v-if="v.measurements.distant.os.dia.$error && !v.measurements.distant.os.dia.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.dia'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.dia.minLength &&  v.measurements.distant.os.dia.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.dia'), v.measurements.distant.os.dia.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.dia.maxLength &&  v.measurements.distant.os.dia.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.dia'), v.measurements.distant.os.dia.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Add -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- Add -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.os.add"
                        :label="$t('measurementsLabels.add')"
                        :options="addOptions"
                        :invalid="
                            (v.measurements.distant.os.add.$error)||
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
                            v-if="v.measurements.distant.os.add.$error && !v.measurements.distant.os.add.notContainsHtmlTags"   class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.add'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.add.minLength &&  v.measurements.distant.os.add.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.add'), v.measurements.distant.os.add.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.add.maxLength &&  v.measurements.distant.os.add.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.add'), v.measurements.distant.os.add.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>            
            <!-- DN -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <label class="form-label">{{ $t('measurementsLabels.dn') }}</label>
                    <!-- DN -->
                    <Dropdown
                        v-model="fitting.measurements.distant.os.dn"
                        :options="dnDistantOsOptions"
                        optionLabel="value"
                        :placeholder="locale=='ar'?'اختر':'Select'" 
                    />
                </div>
            </div> 
            <!-- Prism -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Prism -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.os.prism"
                        :label="$t('measurementsLabels.prism')"
                        :options="prismOptions"
                        :invalid="
                            (v.measurements.distant.os.prism.$error)||
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
                            v-if="v.measurements.distant.os.prism.$error && !v.measurements.distant.os.prism.notContainsHtmlTags"   class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.prism'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.prism.minLength &&  v.measurements.distant.os.prism.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.prism'), v.measurements.distant.os.prism.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.prism.maxLength &&  v.measurements.distant.os.prism.$error" class="invalid-feedback">
                               else- {{maxLengthError($t('measurementsLabels.prism'), v.measurements.distant.os.prism.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- Dva -->
            <div class="col-md-3 col-xxl-2" v-if="toggleSimpleOrAdvanced == 'advanced'">
                <div class="form-group">
                    <!-- Dva -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.os.dva"
                        :label="$t('measurementsLabels.dva')"
                        :options="dvaOptions"
                        :invalid="
                            (v.measurements.distant.os.dva.$error)||
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
                            v-if="v.measurements.distant.os.dva.$error && !v.measurements.distant.os.dva.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.dva'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.dva.minLength &&  v.measurements.distant.os.dva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.dva'), v.measurements.distant.os.dva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.os.dva.maxLength &&  v.measurements.distant.os.dva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.dva'), v.measurements.distant.os.dva.$params.maxLength.max)}}
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
                        v-model="fitting.measurements.distant.ou.dva"
                        :label="$t('measurementsLabels.dva')"
                        :options="dvaOptions"
                        :invalid="
                            (v.measurements.distant.ou.dva.$error)||
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
                            v-if="v.measurements.distant.ou.dva.$error && !v.measurements.distant.ou.dva.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.dva'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.ou.dva.minLength &&  v.measurements.distant.ou.dva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.dva'), v.measurements.distant.ou.dva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.ou.dva.maxLength &&  v.measurements.distant.ou.dva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.dva'), v.measurements.distant.ou.dva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
            <!-- NVA -->
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <!-- NVA -->
                    <CustomDropMenu 
                        v-model="fitting.measurements.distant.ou.nva"
                        :label="$t('measurementsLabels.nva')"
                        :options="nvaOptions"
                        :invalid="
                            (v.measurements.distant.ou.nva.$error)||
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
                            v-if="v.measurements.distant.ou.nva.$error && !v.measurements.distant.ou.nva.notContainsHtmlTags"  class="invalid-feedback">
                            {{htmlTagsError($t('measurementsLabels.nva'))}}
                        </div>
                        <div v-else-if="! v.measurements.distant.ou.nva.minLength &&  v.measurements.distant.ou.nva.$error" class="invalid-feedback">
                                {{minLengthError($t('measurementsLabels.nva'), v.measurements.distant.ou.nva.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.measurements.distant.ou.nva.maxLength &&  v.measurements.distant.ou.nva.$error" class="invalid-feedback">
                                {{maxLengthError($t('measurementsLabels.nva'), v.measurements.distant.ou.nva.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
            </div>
        </div>
        <!-- Solution Row -->
        <div class="row" v-if="switchChecked">
            <div class="col-md-3 col-xxl-2">
                <div class="form-group">
                    <label class="form-label">{{ $t('fitting.measurements.solution.label') }}</label>
                    <Dropdown
                        v-model="fitting.measurements.distant.solution"
                        :options="solutionDistantOptions"
                        optionLabel="value"
                        :placeholder="locale=='ar'?'اختر':'Select'" 
                    />
                </div>                
            </div>
        </div>
        <Divider></Divider>
        <!-- Note -->
        <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">{{$t('fitting.note.label')}}</label>
                        <textarea
                            v-model="fitting.note" 
                            :placeholder="$t('fitting.note.placeholder')" 
                            class="form-control"
                            :class="{
                                'is-invalid':
                                (v.note.$error)
                                ||
                                (serializer_error.note?serializer_error.note.length>0:false)
                            }" 
                        ></textarea>
                        <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('fitting.note.label'))}}
                        </div>
                        <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                                {{minLengthError($t('fitting.note.label'), v.note.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                                {{maxLengthError($t('fitting.note.label'), v.note.$params.maxLength.max)}}
                        </div> 
                    </div>
                </div>
        </div>
    </Base>
  </div>
</template>
<i18n src="@/lang/mr/ophthalmic/measurements.json"></i18n>
<i18n src="@/lang/mr/ophthalmic/cl.json"></i18n>
<script>
import Base from '@/components/global/utilities/Base.vue'
import ImageEditor from '@/components/global/image-plugin/ImageEditor.vue'
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import CustomDropMenu from "@/components/global/custom/CustomDropMenu.vue";
import Divider from '@/components/global/utilities/Divider.vue'
import ResetButton from "@/components/global/utilities/ResetButton.vue";
////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,numericError,dateError} from '@/validation/errors'
//////////////////////////////////////////////////////////
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import clOptions from "@/mixins/mr/ophthalmic/options/clOptions"
import { mapGetters } from "vuex";
import { convertDate } from "@/helpers/utilities";
import fitting from "@/assets/global/image-plugin-templates/fitting.svg"
export default {
    mixins:[measurementsOptions,clOptions],
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
        CustomDropdown,
        CustomDropMenu,
        Divider,
        ResetButton,
    },
    data(){
        return {
            fittingControls:{
                templateImage:fitting,
            },
            switchChecked: false,
            toggleSimpleOrAdvanced: 'simple',
        }
    },
    // ////////////////////////////
    computed: {
        ...mapGetters("detailsOphthalmic/ophthalmic", ["getFitting"]),
        fitting: {
            get() {
                return this.getFitting;
            },
            set(value) {
                this.$store.dispatch("detailsOphthalmic/ophthalmic/setFitting", value);
            },
        },
     },
    /////////////////////////////
    methods:{
        htmlTagsError,
        minLengthError,
        maxLengthError,
        numericError,
        dateError,
       //////////////////////////////////////
         reset() {
           this.fitting={
                type: {
                    os: {
                    manufacturer: {
                        manufacturerSelection: null,
                        other: "",
                    },
                    brand: {
                        brandSelection: null,
                        other: "",
                    },
                    design: {
                        designSelection:null,
                        other: "",
                    },
                    qtyBox: {
                        qtySelection:null,
                        other: "",
                    },
                    type: "",
                    material: "",
                    wearingPeriod: "",
                    replacement: "",
                    comfort: {
                        comfortSelection:null,
                        other: "",
                    },
                    vision: {
                        visionSelection: null,
                        other: "",
                    },
                    rotation: {
                        rotationSelection: null,
                        other: "",
                    },
                    movement: {
                        movementSelection:null,
                        other: "",
                    },
                    centration: {
                        centrationSelection: null,
                        other: "",
                    },
                    tear: {
                        selection: null,
                        other: "",
                    },
                    sclera: {
                        selection: null,
                        other: "",
                    },
                    limbal: {
                        selection: null,
                        other: "",
                    },
                    cornea: {
                        selection: null,
                        other: "",
                    },
                    lid: {
                        selection: null,
                        other: "",
                    },
                    },
                    od: {
                    manufacturer: {
                        manufacturerSelection: null,
                        other: "",
                    },
                    brand: {
                        brandSelection: null,
                        other: "",
                    },
                    design: {
                        designSelection: null,
                        other: "",
                    },
                    qtyBox: {
                        qtySelection: null,
                        other: "",
                    },
                    type: "",
                    material: "",
                    wearingPeriod: "",
                    replacement: "",
                    comfort: {
                        comfortSelection:null,
                        other: "",
                    },
                    vision: {
                        visionSelection: null,
                        other: "",
                    },
                    rotation: {
                        rotationSelection: null,
                        other: "",
                    },
                    movement: {
                        movementSelection: null,
                        other: "",
                    },
                    centration: {
                        centrationSelection: null,
                        other: "",
                    },
                    tear: {
                        selection: null,
                        other: "",
                    },
                    sclera: {
                        selection: null,
                        other: "",
                    },
                    limbal: {
                        selection:null,
                        other: "",
                    },
                    cornea: {
                        selection: null,
                        other: "",
                    },
                    lid: {
                        selection:null,
                        other: "",
                    },
                    },
                },
                measurements: {
                    near: {
                        os: {
                            spherical: "",
                            cylindrical: "",
                            axis: "",
                            prism: "",
                            dva: "",
                            add: "",
                            nva: "",
                            bc: "",
                            dia: "",
                            dn: null
                        },
                        od: {
                            spherical: "",
                            cylindrical: "",
                            axis: "",
                            prism: "",
                            dva: "",
                            add: "",
                            nva: "", 
                            bc: "",
                            dia: "",
                            dn: null
                        },
                        ou: {
                            dva: "",
                            nva: "",
                        },
                        solution: {
                            selection: null,
                            other: "",
                        },
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
                            bc: "",
                            dia: "",
                            dn: null
                        },
                        od: {
                            spherical: "",
                            cylindrical: "",
                            axis: "",
                            prism: "",
                            dva: "",
                            add: "",
                            nva: "", 
                            bc: "",
                            dia: "",
                            dn: null
                        },
                        ou: {
                            dva: "",
                            nva: "",
                        },
                        solution: {
                            selection: null,
                            other: "",
                        },
                    },
                },
                exopirationDate: "",
                image: "",
                note: "",
           };
        this.v.$reset(); 
        this.switchChecked = false;
        this.toggleSimpleOrAdvanced = 'simple';  
         },
        ///////////////////////////
        copyToOd(){
            this.fitting.type.od=JSON.parse(JSON.stringify(this.fitting.type.os));
        },
        copyToOs(){
            this.fitting.type.os=JSON.parse(JSON.stringify(this.fitting.type.od));
        },
        formateDate() {
          this.fitting.expirationDate = convertDate(
            this.fitting.expirationDate
          );
        },
        copyToOdNear(){
                this.fitting.measurements.near.od=JSON.parse(JSON.stringify(this.fitting.measurements.near.os));
        },
        copyToOsNear(){
            this.fitting.measurements.near.os=JSON.parse(JSON.stringify(this.fitting.measurements.near.od));
        },
        copyToOdDistant(){
                this.fitting.measurements.distant.od=JSON.parse(JSON.stringify(this.fitting.measurements.distant.os));
        },
        copyToOsDistant(){
            this.fitting.measurements.distant.os=JSON.parse(JSON.stringify(this.fitting.measurements.distant.od));
        },
    },
}
</script>

<style>

</style>