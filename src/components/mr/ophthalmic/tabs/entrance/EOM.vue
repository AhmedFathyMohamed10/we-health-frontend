<template>
  <div class="eom">
    <Base>
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t("eom.header") }}</h4>
            <ResetButton @reset="reset"></ResetButton>
          </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h4>{{ $t('eom.extraOcularMotilities.heading') }}</h4>
                <div class="form-group">
                    <CustomDropdown
                    v-model="eom.extraOcularMotilities.od"
                    :label="$t('eom.extraOcularMotilities.od.label')"
                    :placeholder="$t('eom.extraOcularMotilities.od.placeholder')"
                    :options="extraOcularMotilitiesOdOptions"
                    :inputType="'text'"
                    :invalidSelection="
                    (
                        v.extraOcularMotilities.od.selection.$error
                    )||
                    (serializer_error.reasnOfVisit
                        ? serializer_error.reasnOfVisit.reasonSelection
                            ? serializer_error.reasnOfVisit.reasonSelection.length > 0
                            : false
                        : false)
                    "
                    :invalidOther="
                    (
                        v.extraOcularMotilities.od.other.$error
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
                    <div v-if="v.extraOcularMotilities.od.other.$error && !v.extraOcularMotilities.od.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('eom.extraOcularMotilities.od.label'))}}
                    </div>
                    <div v-else-if="! v.extraOcularMotilities.od.other.minLength &&  v.extraOcularMotilities.od.other.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.extraOcularMotilities.od.label'), v.extraOcularMotilities.od.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.extraOcularMotilities.od.other.maxLength &&  v.extraOcularMotilities.od.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.extraOcularMotilities.od.label'), v.extraOcularMotilities.od.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
                <div class="form-group">
                    <CustomDropdown
                    v-model="eom.extraOcularMotilities.os"
                    :label="$t('eom.extraOcularMotilities.os.label')"
                    :placeholder="$t('eom.extraOcularMotilities.os.placeholder')"
                    :options="extraOcularMotilitiesOsOptions"
                    :inputType="'text'"
                    :invalidSelection="
                    (
                        v.extraOcularMotilities.os.selection.$error
                    )||
                    (serializer_error.reasnOfVisit
                        ? serializer_error.reasnOfVisit.reasonSelection
                            ? serializer_error.reasnOfVisit.reasonSelection.length > 0
                            : false
                        : false)
                    "
                    :invalidOther="
                    (
                        v.extraOcularMotilities.os.other.$error
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
                    <div v-if="v.extraOcularMotilities.os.other.$error && !v.extraOcularMotilities.os.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('eom.extraOcularMotilities.os.label'))}}
                    </div>
                    <div v-else-if="! v.extraOcularMotilities.os.other.minLength &&  v.extraOcularMotilities.os.other.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.extraOcularMotilities.os.label'), v.extraOcularMotilities.os.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.extraOcularMotilities.os.other.maxLength &&  v.extraOcularMotilities.os.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.extraOcularMotilities.os.label'), v.extraOcularMotilities.os.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-6">
                <h4>{{ $t('eom.npc.heading') }}</h4>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="eom.npc.npcBreak"
                        :label="$t('eom.npc.npcBreak.label')"
                        :options="npcOptions"
                        :invalid="
                            (v.npc.npcBreak.$error)||
                            (check_error.npc?
                                (check_error.npc?check_error.npc.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.npc?serializer_error.npc.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.npc.npcBreak.$error && !v.npc.npcBreak.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('npc.npcBreak.label'))}}
                        </div>
                        <div v-else-if="! v.npc.npcBreak.minLength &&  v.npc.npcBreak.$error" class="invalid-feedback">
                                {{minLengthError($t('npc.npcBreak.label'), v.npc.npcBreak.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.npc.npcBreak.maxLength &&  v.npc.npcBreak.$error" class="invalid-feedback">
                                {{maxLengthError($t('npc.npcBreak.label'), v.npc.npcBreak.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <CustomDropMenu 
                        v-model="eom.npc.npcRecovery"
                        :label="$t('eom.npc.npcRecovery.label')"
                        :options="npcOptions"
                        :invalid="
                            (v.npc.npcRecovery.$error)||
                            (check_error.npc?
                                (check_error.npc?check_error.npc.length>0:false):false
                            )
                            ||
                            (serializer_error.od?
                                (serializer_error.npc?serializer_error.npc.length>0:false):false
                            )
                        " 
                    >                    
                        <div v-if="v.npc.npcRecovery.$error && !v.npc.npcRecovery.notContainsHtmlTags" class="invalid-feedback">
                        {{htmlTagsError($t('npc.npcRecovery.label'))}}
                        </div>
                        <div v-else-if="! v.npc.npcRecovery.minLength &&  v.npc.npcRecovery.$error" class="invalid-feedback">
                                {{minLengthError($t('npc.npcRecovery.label'), v.npc.npcRecovery.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.npc.npcRecovery.maxLength &&  v.npc.npcRecovery.$error" class="invalid-feedback">
                                {{maxLengthError($t('npc.npcRecovery.label'), v.npc.npcRecovery.$params.maxLength.max)}}
                        </div> 
                    </CustomDropMenu>
                </div>
                <div class="form-group">
                    <div class="field-checkbox d-flex align-items-center">
                        <Checkbox id="binary" v-model="eom.npc.npcWithEffect" :binary="true" />
                        <label class="mb-0 ms-2" for="binary">{{$t('eom.npc.npcWithEffect.label')}}</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <!-- <h4 class="text-center">{{ $t('eom.broadHTest.heading') }}</h4> -->
                <Divider :label="$t('eom.broadHTest.heading')" />
            </div>
            
            <div class="col-md-4">
                <div class="form-group">
                    <label for="" class="form-label">{{$t('eom.broadHTest.sr.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('eom.broadHTest.sr.placeholder')" 
                    v-model="eom.broadHTest.od.sr"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.broadHTest.od.sr.$error 
                    }"
                    >
                    <div v-if="! v.broadHTest.od.sr.notContainsHtmlTags &&  v.broadHTest.od.sr.$error" class="invalid-feedback">
                            {{htmlTagsError($t('eom.broadHTest.sr.label'))}}
                    </div>
                    <div v-else-if="! v.broadHTest.od.sr.minLength &&  v.broadHTest.od.sr.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.broadHTest.sr.label'), v.broadHTest.od.sr.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.broadHTest.od.sr.maxLength &&  v.broadHTest.od.sr.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.broadHTest.sr.label'), v.broadHTest.od.sr.$params.maxLength.max)}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">{{$t('eom.broadHTest.lr.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('eom.broadHTest.lr.placeholder')" 
                    v-model="eom.broadHTest.od.lr"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.broadHTest.od.lr.$error
                    }"
                    >
                    <div v-if="! v.broadHTest.od.lr.notContainsHtmlTags &&  v.broadHTest.od.lr.$error" class="invalid-feedback">
                            {{htmlTagsError($t('eom.broadHTest.lr.label'))}}
                    </div>
                    <div v-else-if="! v.broadHTest.od.lr.minLength &&  v.broadHTest.od.lr.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.broadHTest.lr.label'), v.broadHTest.od.lr.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.broadHTest.od.lr.maxLength &&  v.broadHTest.od.lr.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.broadHTest.lr.label'), v.broadHTest.od.lr.$params.maxLength.max)}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">{{$t('eom.broadHTest.ir.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('eom.broadHTest.ir.placeholder')" 
                    v-model="eom.broadHTest.od.ir"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.broadHTest.od.ir.$error 
                    }"
                    >
                    <div v-if="! v.broadHTest.od.ir.notContainsHtmlTags &&  v.broadHTest.od.ir.$error" class="invalid-feedback">
                            {{htmlTagsError($t('eom.broadHTest.ir.label'))}}
                    </div>
                    <div v-else-if="! v.broadHTest.od.ir.minLength &&  v.broadHTest.od.ir.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.broadHTest.ir.label'), v.broadHTest.od.ir.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.broadHTest.od.ir.maxLength &&  v.broadHTest.od.ir.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.broadHTest.ir.label'), v.broadHTest.od.ir.$params.maxLength.max)}}
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="svg-wrapper d-flex flex-column justify-content-center align-items-center h-100">
                    <h4>{{$t('eyesLabels.od')}}</h4>
                    <img src="@/assets/mr/ophthalmic/entrance/eom/lefteye.svg" alt="" class="w-100">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="" class="form-label">{{$t('eom.broadHTest.io.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('eom.broadHTest.io.placeholder')" 
                    v-model="eom.broadHTest.od.io"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.broadHTest.od.io.$error
                    }"
                    >
                    <div v-if="! v.broadHTest.od.io.notContainsHtmlTags &&  v.broadHTest.od.io.$error" class="invalid-feedback">
                            {{htmlTagsError($t('eom.broadHTest.io.label'))}}
                    </div>
                    <div v-else-if="! v.broadHTest.od.io.minLength &&  v.broadHTest.od.io.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.broadHTest.io.label'), v.broadHTest.od.io.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.broadHTest.od.io.maxLength &&  v.broadHTest.od.io.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.broadHTest.io.label'), v.broadHTest.od.io.$params.maxLength.max)}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">{{$t('eom.broadHTest.mr.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('eom.broadHTest.mr.placeholder')" 
                    v-model="eom.broadHTest.od.mr"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.broadHTest.od.mr.$error 
                    }"
                    >
                    <div v-if="! v.broadHTest.od.mr.notContainsHtmlTags &&  v.broadHTest.od.mr.$error" class="invalid-feedback">
                            {{htmlTagsError($t('eom.broadHTest.mr.label'))}}
                    </div>
                    <div v-else-if="! v.broadHTest.od.mr.minLength &&  v.broadHTest.od.mr.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.broadHTest.mr.label'), v.broadHTest.od.mr.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.broadHTest.od.mr.maxLength &&  v.broadHTest.od.mr.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.broadHTest.mr.label'), v.broadHTest.od.mr.$params.maxLength.max)}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">{{$t('eom.broadHTest.so.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('eom.broadHTest.so.placeholder')" 
                    v-model="eom.broadHTest.od.so"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.broadHTest.od.so.$error
                    }"
                    >
                    <div v-if="! v.broadHTest.od.so.notContainsHtmlTags &&  v.broadHTest.od.so.$error" class="invalid-feedback">
                            {{htmlTagsError($t('eom.broadHTest.so.label'))}}
                    </div>
                    <div v-else-if="! v.broadHTest.od.so.minLength &&  v.broadHTest.od.so.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.broadHTest.so.label'), v.broadHTest.od.so.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.broadHTest.od.so.maxLength &&  v.broadHTest.od.so.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.broadHTest.so.label'), v.broadHTest.od.so.$params.maxLength.max)}}
                    </div>
                </div>
            </div>
        </div>
        <Divider/>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="" class="form-label">{{$t('eom.broadHTest.io.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('eom.broadHTest.io.placeholder')" 
                    v-model="eom.broadHTest.os.io"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.broadHTest.os.io.$error 
                    }"
                    >
                    <div v-if="! v.broadHTest.os.io.notContainsHtmlTags &&  v.broadHTest.os.io.$error" class="invalid-feedback">
                            {{htmlTagsError($t('eom.broadHTest.io.label'))}}
                    </div>
                    <div v-else-if="! v.broadHTest.os.io.minLength &&  v.broadHTest.os.io.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.broadHTest.io.label'), v.broadHTest.os.io.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.broadHTest.os.io.maxLength &&  v.broadHTest.os.io.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.broadHTest.io.label'), v.broadHTest.os.io.$params.maxLength.max)}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">{{$t('eom.broadHTest.mr.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('eom.broadHTest.mr.placeholder')" 
                    v-model="eom.broadHTest.os.mr"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.broadHTest.os.mr.$invalid && v.broadHTest.os.mr.$anyDirty && v.broadHTest.os.mr.$anyError
                    }"
                    >
                    <div v-if="! v.broadHTest.os.mr.notContainsHtmlTags &&  v.broadHTest.os.mr.$error" class="invalid-feedback">
                            {{htmlTagsError($t('eom.broadHTest.mr.label'))}}
                    </div>
                    <div v-else-if="! v.broadHTest.os.mr.minLength &&  v.broadHTest.os.mr.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.broadHTest.mr.label'), v.broadHTest.os.mr.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.broadHTest.os.mr.maxLength &&  v.broadHTest.os.mr.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.broadHTest.mr.label'), v.broadHTest.os.mr.$params.maxLength.max)}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">{{$t('eom.broadHTest.so.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('eom.broadHTest.so.placeholder')" 
                    v-model="eom.broadHTest.os.so"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.broadHTest.os.so.$error
                    }"
                    >
                    <div v-if="! v.broadHTest.os.so.notContainsHtmlTags &&  v.broadHTest.os.so.$error" class="invalid-feedback">
                            {{htmlTagsError($t('eom.broadHTest.so.label'))}}
                    </div>
                    <div v-else-if="! v.broadHTest.os.so.minLength &&  v.broadHTest.os.so.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.broadHTest.so.label'), v.broadHTest.os.so.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.broadHTest.os.so.maxLength &&  v.broadHTest.os.so.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.broadHTest.so.label'), v.broadHTest.os.so.$params.maxLength.max)}}
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="svg-wrapper d-flex flex-column justify-content-center align-items-center h-100">
                    <h4>{{$t('eyesLabels.os')}}</h4>
                    <img src="@/assets/mr/ophthalmic/entrance/eom/righteye.svg" alt="" class="w-100">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="" class="form-label">{{$t('eom.broadHTest.sr.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('eom.broadHTest.sr.placeholder')" 
                    v-model="eom.broadHTest.os.sr"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.broadHTest.os.sr.$error
                    }"
                    >
                    <div v-if="! v.broadHTest.os.sr.notContainsHtmlTags &&  v.broadHTest.os.sr.$error" class="invalid-feedback">
                            {{htmlTagsError($t('eom.broadHTest.sr.label'))}}
                    </div>
                    <div v-else-if="! v.broadHTest.os.sr.minLength &&  v.broadHTest.os.sr.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.broadHTest.sr.label'), v.broadHTest.os.sr.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.broadHTest.os.sr.maxLength &&  v.broadHTest.os.sr.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.broadHTest.sr.label'), v.broadHTest.os.sr.$params.maxLength.max)}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">{{$t('eom.broadHTest.lr.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('eom.broadHTest.lr.placeholder')" 
                    v-model="eom.broadHTest.os.lr"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.broadHTest.os.lr.$error 
                    }"
                    >
                    <div v-if="! v.broadHTest.os.lr.notContainsHtmlTags &&  v.broadHTest.os.lr.$error" class="invalid-feedback">
                            {{htmlTagsError($t('eom.broadHTest.lr.label'))}}
                    </div>
                    <div v-else-if="! v.broadHTest.os.lr.minLength &&  v.broadHTest.os.lr.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.broadHTest.lr.label'), v.broadHTest.os.lr.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.broadHTest.os.lr.maxLength &&  v.broadHTest.os.lr.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.broadHTest.lr.label'), v.broadHTest.os.lr.$params.maxLength.max)}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">{{$t('eom.broadHTest.ir.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('eom.broadHTest.ir.placeholder')" 
                    v-model="eom.broadHTest.os.ir"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        v.broadHTest.os.ir.$error 
                    }"
                    >
                    <div v-if="! v.broadHTest.os.ir.notContainsHtmlTags &&  v.broadHTest.os.ir.$error" class="invalid-feedback">
                            {{htmlTagsError($t('eom.broadHTest.ir.label'))}}
                    </div>
                    <div v-else-if="! v.broadHTest.os.ir.minLength &&  v.broadHTest.os.ir.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.broadHTest.ir.label'), v.broadHTest.os.ir.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.broadHTest.os.ir.maxLength &&  v.broadHTest.os.ir.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.broadHTest.ir.label'), v.broadHTest.os.ir.$params.maxLength.max)}}
                    </div>
                </div>
            </div>
        </div>
        <Divider/>
        <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{$t('eom.note.label')}}</label>
                  <textarea
                    class="form-control"
                    v-model.trim="eom.note" 
                    :placeholder="$t('eom.note.placeholder')"
                    :class="{
                          'is-invalid':
                          v.note.$error  && v.note.$anyError
                      }"
                    ></textarea>
                    <div v-if="! v.note.notContainsHtmlTags &&  v.note.$error" class="invalid-feedback">
                            {{htmlTagsError($t('eom.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('eom.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('eom.note.label'), v.note.$params.maxLength.max)}}
                    </div>
                </div>
              </div>
        </div>
    </Base>
  </div>
</template>
<i18n src="@/lang/mr/ophthalmic/entrance.json"></i18n>
<script>
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import CustomDropMenu from "@/components/global/custom/CustomDropMenu.vue";
import Base from '@/components/global/utilities/Base.vue'
import Divider from '@/components/global/utilities/Divider.vue'
import entranceOptions from '@/mixins/mr/ophthalmic/options/entranceOptions'
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
import { mapGetters } from "vuex";
import { inputError, htmlTagsError, minLengthError, maxLengthError } from "@/validation/errors";
export default {
    mixins: [entranceOptions, measurementsOptions],
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
        }
    },
   /////////////////////////////////////
  computed: {
    ...mapGetters("detailsOphthalmic/ophthalmic", ["getEom"]),
    eom: {
      get() {
        return this.getEom;
      },
      set(value) {
        this.$store.dispatch("detailsOphthalmic/ophthalmic/setEom", value);
      },
    },
  },
   ///////////////////////////////////
    methods: { 
        inputError,
        htmlTagsError,
        maxLengthError,
        minLengthError,
       //////////////////////////////////
       reset() {
            this.eom={
                    extraOcularMotilities: {
                        od: {
                            selection:null,
                            other:""
                        },
                        os: {
                        selection:null,
                        other:""
                        },
                    },
                    npc: {
                        npcBreak: "",
                        npcRecovery: "",
                        npcWithEffect: false,
                    },
                    broadHTest: {
                        od: {
                        sr: "",
                        lr: "",
                        ir: "",
                        io: "",
                        mr: "",
                        so: "",
                        },
                        os: {
                        sr: "",
                        lr: "",
                        ir: "",
                        io: "",
                        mr: "",
                        so: "",
                        },
                    },
                    note: "",
                },
             this.v.$reset();     
        }
    },
}
</script>

<style>

</style>