<template>
    <div class="pregnancy">
      <div class="row">
        <div class="col-xl-9">
          <Base>    
              <div class="row">
                <div class="col-12 d-flex justify-content-between">
                  <h4>Pregnancy</h4>
                  <ResetButton @reset="reset"></ResetButton>            
                </div>
              </div>
              <div class="row">
                  <div class="col-12">
                    <h5 class=""><u>Fetus</u></h5>
                  </div>
                  <!-- number -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.number.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.number" 
                              :placeholder="$t('pregnancy.fetus.number.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.number.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.number.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.number.$error && $v.pregnancy.fetus.number.$invalid && !$v.pregnancy.fetus.number.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.number.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.number.minLength &&  $v.pregnancy.fetus.number.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.number.label'), $v.pregnancy.fetus.number.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.number.maxLength &&  $v.pregnancy.fetus.number.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.number.label'), $v.pregnancy.fetus.number.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- fhm -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.fhm.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.fhm" 
                              :placeholder="$t('pregnancy.fetus.fhm.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.fhm.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.fhm.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.fhm.$error && $v.pregnancy.fetus.fhm.$invalid && !$v.pregnancy.fetus.fhm.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.fhm.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.fhm.minLength &&  $v.pregnancy.fetus.fhm.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.fhm.label'), $v.pregnancy.fetus.fhm.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.fhm.maxLength &&  $v.pregnancy.fetus.fhm.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.fhm.label'), $v.pregnancy.fetus.fhm.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- lie -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.lie.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.lie" 
                              :placeholder="$t('pregnancy.fetus.lie.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.lie.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.lie.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.lie.$error && $v.pregnancy.fetus.lie.$invalid && !$v.pregnancy.fetus.lie.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.lie.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.lie.minLength &&  $v.pregnancy.fetus.lie.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.lie.label'), $v.pregnancy.fetus.lie.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.lie.maxLength &&  $v.pregnancy.fetus.lie.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.lie.label'), $v.pregnancy.fetus.lie.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- congenitalAnomalies -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.congenitalAnomalies.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.congenitalAnomalies" 
                              :placeholder="$t('pregnancy.fetus.congenitalAnomalies.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.congenitalAnomalies.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.congenitalAnomalies.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.congenitalAnomalies.$error && $v.pregnancy.fetus.congenitalAnomalies.$invalid && !$v.pregnancy.fetus.congenitalAnomalies.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.congenitalAnomalies.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.congenitalAnomalies.minLength &&  $v.pregnancy.fetus.congenitalAnomalies.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.congenitalAnomalies.label'), $v.pregnancy.fetus.congenitalAnomalies.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.congenitalAnomalies.maxLength &&  $v.pregnancy.fetus.congenitalAnomalies.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.congenitalAnomalies.label'), $v.pregnancy.fetus.congenitalAnomalies.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- fl -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.fl.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.fl" 
                              :placeholder="$t('pregnancy.fetus.fl.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.fl.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.fl.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.fl.$error && $v.pregnancy.fetus.fl.$invalid && !$v.pregnancy.fetus.fl.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.fl.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.fl.minLength &&  $v.pregnancy.fetus.fl.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.fl.label'), $v.pregnancy.fetus.fl.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.fl.maxLength &&  $v.pregnancy.fetus.fl.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.fl.label'), $v.pregnancy.fetus.fl.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- crl -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.crl.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.crl" 
                              :placeholder="$t('pregnancy.fetus.crl.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.crl.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.crl.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.crl.$error && $v.pregnancy.fetus.crl.$invalid && !$v.pregnancy.fetus.crl.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.crl.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.crl.minLength &&  $v.pregnancy.fetus.crl.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.crl.label'), $v.pregnancy.fetus.crl.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.crl.maxLength &&  $v.pregnancy.fetus.crl.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.crl.label'), $v.pregnancy.fetus.crl.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- fw -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.fw.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.fw" 
                              :placeholder="$t('pregnancy.fetus.fw.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.fw.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.fw.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.fw.$error && $v.pregnancy.fetus.fw.$invalid && !$v.pregnancy.fetus.fw.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.fw.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.fw.minLength &&  $v.pregnancy.fetus.fw.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.fw.label'), $v.pregnancy.fetus.fw.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.fw.maxLength &&  $v.pregnancy.fetus.fw.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.fw.label'), $v.pregnancy.fetus.fw.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- fetalAge -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.fetalAge.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.fetalAge" 
                              :placeholder="$t('pregnancy.fetus.fetalAge.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.fetalAge.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.fetalAge.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.fetalAge.$error && $v.pregnancy.fetus.fetalAge.$invalid && !$v.pregnancy.fetus.fetalAge.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.fetalAge.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.fetalAge.minLength &&  $v.pregnancy.fetus.fetalAge.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.fetalAge.label'), $v.pregnancy.fetus.fetalAge.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.fetalAge.maxLength &&  $v.pregnancy.fetus.fetalAge.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.fetalAge.label'), $v.pregnancy.fetus.fetalAge.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- movements -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.movements.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.movements" 
                              :placeholder="$t('pregnancy.fetus.movements.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.movements.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.movements.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.movements.$error && $v.pregnancy.fetus.movements.$invalid && !$v.pregnancy.fetus.movements.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.movements.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.movements.minLength &&  $v.pregnancy.fetus.movements.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.movements.label'), $v.pregnancy.fetus.movements.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.movements.maxLength &&  $v.pregnancy.fetus.movements.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.movements.label'), $v.pregnancy.fetus.movements.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- viability -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.viability.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.viability" 
                              :placeholder="$t('pregnancy.fetus.viability.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.viability.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.viability.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.viability.$error && $v.pregnancy.fetus.viability.$invalid && !$v.pregnancy.fetus.viability.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.viability.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.viability.minLength &&  $v.pregnancy.fetus.viability.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.viability.label'), $v.pregnancy.fetus.viability.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.viability.maxLength &&  $v.pregnancy.fetus.viability.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.viability.label'), $v.pregnancy.fetus.viability.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- presentation -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.presentation.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.presentation" 
                              :placeholder="$t('pregnancy.fetus.presentation.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.presentation.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.presentation.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.presentation.$error && $v.pregnancy.fetus.presentation.$invalid && !$v.pregnancy.fetus.presentation.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.presentation.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.presentation.minLength &&  $v.pregnancy.fetus.presentation.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.presentation.label'), $v.pregnancy.fetus.presentation.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.presentation.maxLength &&  $v.pregnancy.fetus.presentation.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.presentation.label'), $v.pregnancy.fetus.presentation.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- bpd -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.bpd.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.bpd" 
                              :placeholder="$t('pregnancy.fetus.bpd.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.bpd.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.bpd.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.bpd.$error && $v.pregnancy.fetus.bpd.$invalid && !$v.pregnancy.fetus.bpd.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.bpd.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.bpd.minLength &&  $v.pregnancy.fetus.bpd.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.bpd.label'), $v.pregnancy.fetus.bpd.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.bpd.maxLength &&  $v.pregnancy.fetus.bpd.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.bpd.label'), $v.pregnancy.fetus.bpd.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- gs -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.gs.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.gs" 
                              :placeholder="$t('pregnancy.fetus.gs.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.gs.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.gs.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.gs.$error && $v.pregnancy.fetus.gs.$invalid && !$v.pregnancy.fetus.gs.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.gs.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.gs.minLength &&  $v.pregnancy.fetus.gs.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.gs.label'), $v.pregnancy.fetus.gs.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.gs.maxLength &&  $v.pregnancy.fetus.gs.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.gs.label'), $v.pregnancy.fetus.gs.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- hcAc -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.hcAc.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.hcAc" 
                              :placeholder="$t('pregnancy.fetus.hcAc.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.hcAc.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.hcAc.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.hcAc.$error && $v.pregnancy.fetus.hcAc.$invalid && !$v.pregnancy.fetus.hcAc.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.hcAc.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.hcAc.minLength &&  $v.pregnancy.fetus.hcAc.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.hcAc.label'), $v.pregnancy.fetus.hcAc.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.hcAc.maxLength &&  $v.pregnancy.fetus.hcAc.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.hcAc.label'), $v.pregnancy.fetus.hcAc.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- fhr -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.fetus.fhr.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.fetus.fhr" 
                              :placeholder="$t('pregnancy.fetus.fhr.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.fetus.fhr.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.fetus.fhr.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.fetus.fhr.$error && $v.pregnancy.fetus.fhr.$invalid && !$v.pregnancy.fetus.fhr.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.fetus.fhr.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.fhr.minLength &&  $v.pregnancy.fetus.fhr.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.fetus.fhr.label'), $v.pregnancy.fetus.fhr.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.fetus.fhr.maxLength &&  $v.pregnancy.fetus.fhr.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.fetus.fhr.label'), $v.pregnancy.fetus.fhr.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <div class="col-12">
                    <Divider></Divider>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12">
                    <h5 class=""><u>Amniotic Fluid</u></h5>
                  </div>
                  <!-- amount -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.amnioticFluid.amount.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.amnioticFluid.amount" 
                              :placeholder="$t('pregnancy.amnioticFluid.amount.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.amnioticFluid.amount.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.amnioticFluid.amount.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.amnioticFluid.amount.$error && $v.pregnancy.amnioticFluid.amount.$invalid && !$v.pregnancy.amnioticFluid.amount.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.amnioticFluid.amount.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.amnioticFluid.amount.minLength &&  $v.pregnancy.amnioticFluid.amount.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.amnioticFluid.amount.label'), $v.pregnancy.amnioticFluid.amount.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.amnioticFluid.amount.maxLength &&  $v.pregnancy.amnioticFluid.amount.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.amnioticFluid.amount.label'), $v.pregnancy.amnioticFluid.amount.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- afIndex -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.amnioticFluid.afIndex.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.amnioticFluid.afIndex" 
                              :placeholder="$t('pregnancy.amnioticFluid.afIndex.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.amnioticFluid.afIndex.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.amnioticFluid.afIndex.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.amnioticFluid.afIndex.$error && $v.pregnancy.amnioticFluid.afIndex.$invalid && !$v.pregnancy.amnioticFluid.afIndex.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.amnioticFluid.afIndex.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.amnioticFluid.afIndex.minLength &&  $v.pregnancy.amnioticFluid.afIndex.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.amnioticFluid.afIndex.label'), $v.pregnancy.amnioticFluid.afIndex.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.amnioticFluid.afIndex.maxLength &&  $v.pregnancy.amnioticFluid.afIndex.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.amnioticFluid.afIndex.label'), $v.pregnancy.amnioticFluid.afIndex.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- turbidity -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.amnioticFluid.turbidity.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.amnioticFluid.turbidity" 
                              :placeholder="$t('pregnancy.amnioticFluid.turbidity.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.amnioticFluid.turbidity.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.amnioticFluid.turbidity.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.amnioticFluid.turbidity.$error && $v.pregnancy.amnioticFluid.turbidity.$invalid && !$v.pregnancy.amnioticFluid.turbidity.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.amnioticFluid.turbidity.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.amnioticFluid.turbidity.minLength &&  $v.pregnancy.amnioticFluid.turbidity.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.amnioticFluid.turbidity.label'), $v.pregnancy.amnioticFluid.turbidity.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.amnioticFluid.turbidity.maxLength &&  $v.pregnancy.amnioticFluid.turbidity.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.amnioticFluid.turbidity.label'), $v.pregnancy.amnioticFluid.turbidity.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- deepestPocket -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.amnioticFluid.deepestPocket.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.amnioticFluid.deepestPocket" 
                              :placeholder="$t('pregnancy.amnioticFluid.deepestPocket.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.amnioticFluid.deepestPocket.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.amnioticFluid.deepestPocket.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.amnioticFluid.deepestPocket.$error && $v.pregnancy.amnioticFluid.deepestPocket.$invalid && !$v.pregnancy.amnioticFluid.deepestPocket.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.amnioticFluid.deepestPocket.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.amnioticFluid.deepestPocket.minLength &&  $v.pregnancy.amnioticFluid.deepestPocket.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.amnioticFluid.deepestPocket.label'), $v.pregnancy.amnioticFluid.deepestPocket.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.amnioticFluid.deepestPocket.maxLength &&  $v.pregnancy.amnioticFluid.deepestPocket.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.amnioticFluid.deepestPocket.label'), $v.pregnancy.amnioticFluid.deepestPocket.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <div class="col-12">
                    <Divider></Divider>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12">
                    <h5 class=""><u>Placenta Myometrium</u></h5>
                  </div>
                  <!-- site -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.placentaMyometrium.site.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.placentaMyometrium.site" 
                              :placeholder="$t('pregnancy.placentaMyometrium.site.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.placentaMyometrium.site.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.placentaMyometrium.site.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.placentaMyometrium.site.$error && $v.pregnancy.placentaMyometrium.site.$invalid && !$v.pregnancy.placentaMyometrium.site.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.placentaMyometrium.site.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.placentaMyometrium.site.minLength &&  $v.pregnancy.placentaMyometrium.site.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.placentaMyometrium.site.label'), $v.pregnancy.placentaMyometrium.site.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.placentaMyometrium.site.maxLength &&  $v.pregnancy.placentaMyometrium.site.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.placentaMyometrium.site.label'), $v.pregnancy.placentaMyometrium.site.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- retroAbnormalities -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.placentaMyometrium.retroAbnormalities.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.placentaMyometrium.retroAbnormalities" 
                              :placeholder="$t('pregnancy.placentaMyometrium.retroAbnormalities.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.placentaMyometrium.retroAbnormalities.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.placentaMyometrium.retroAbnormalities.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.placentaMyometrium.retroAbnormalities.$error && $v.pregnancy.placentaMyometrium.retroAbnormalities.$invalid && !$v.pregnancy.placentaMyometrium.retroAbnormalities.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.placentaMyometrium.retroAbnormalities.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.placentaMyometrium.retroAbnormalities.minLength &&  $v.pregnancy.placentaMyometrium.retroAbnormalities.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.placentaMyometrium.retroAbnormalities.label'), $v.pregnancy.placentaMyometrium.retroAbnormalities.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.placentaMyometrium.retroAbnormalities.maxLength &&  $v.pregnancy.placentaMyometrium.retroAbnormalities.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.placentaMyometrium.retroAbnormalities.label'), $v.pregnancy.placentaMyometrium.retroAbnormalities.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- ovaries -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.placentaMyometrium.ovaries.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.placentaMyometrium.ovaries" 
                              :placeholder="$t('pregnancy.placentaMyometrium.ovaries.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.placentaMyometrium.ovaries.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.placentaMyometrium.ovaries.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.placentaMyometrium.ovaries.$error && $v.pregnancy.placentaMyometrium.ovaries.$invalid && !$v.pregnancy.placentaMyometrium.ovaries.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.placentaMyometrium.ovaries.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.placentaMyometrium.ovaries.minLength &&  $v.pregnancy.placentaMyometrium.ovaries.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.placentaMyometrium.ovaries.label'), $v.pregnancy.placentaMyometrium.ovaries.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.placentaMyometrium.ovaries.maxLength &&  $v.pregnancy.placentaMyometrium.ovaries.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.placentaMyometrium.ovaries.label'), $v.pregnancy.placentaMyometrium.ovaries.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- grade -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.placentaMyometrium.grade.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.placentaMyometrium.grade" 
                              :placeholder="$t('pregnancy.placentaMyometrium.grade.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.placentaMyometrium.grade.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.placentaMyometrium.grade.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.placentaMyometrium.grade.$error && $v.pregnancy.placentaMyometrium.grade.$invalid && !$v.pregnancy.placentaMyometrium.grade.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.placentaMyometrium.grade.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.placentaMyometrium.grade.minLength &&  $v.pregnancy.placentaMyometrium.grade.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.placentaMyometrium.grade.label'), $v.pregnancy.placentaMyometrium.grade.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.placentaMyometrium.grade.maxLength &&  $v.pregnancy.placentaMyometrium.grade.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.placentaMyometrium.grade.label'), $v.pregnancy.placentaMyometrium.grade.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <!-- myometrialMasses -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.placentaMyometrium.myometrialMasses.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.placentaMyometrium.myometrialMasses" 
                              :placeholder="$t('pregnancy.placentaMyometrium.myometrialMasses.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.placentaMyometrium.myometrialMasses.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.placentaMyometrium.myometrialMasses.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.placentaMyometrium.myometrialMasses.$error && $v.pregnancy.placentaMyometrium.myometrialMasses.$invalid && !$v.pregnancy.placentaMyometrium.myometrialMasses.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.placentaMyometrium.myometrialMasses.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.placentaMyometrium.myometrialMasses.minLength &&  $v.pregnancy.placentaMyometrium.myometrialMasses.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.placentaMyometrium.myometrialMasses.label'), $v.pregnancy.placentaMyometrium.myometrialMasses.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.placentaMyometrium.myometrialMasses.maxLength &&  $v.pregnancy.placentaMyometrium.myometrialMasses.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.placentaMyometrium.myometrialMasses.label'), $v.pregnancy.placentaMyometrium.myometrialMasses.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
                  <div class="col-12">
                    <Divider></Divider>
                  </div>
              </div>
              <div class="row">
                  <!-- other -->
                  <div class="col-md-4">
                      <div class="form-group">
                          <label class="form-label">{{$t('pregnancy.other.label')}}</label>
                          <input
                              type="text"
                              class="form-control"
                              v-model="pregnancy.other" 
                              :placeholder="$t('pregnancy.other.placeholder')" 
                              :class="{
                                  'is-invalid':
                                  ($v.pregnancy.other.$invalid)
                                  ||
                                  (serializer_error.pregnancy?serializer_error.pregnancy.other.length>0:false)
                              }" 
                          >
                          <div v-if="!$v.pregnancy.other.$error && $v.pregnancy.other.$invalid && !$v.pregnancy.other.notContainsHtmlTags" class="invalid-feedback">
                                  {{htmlTagsError($t('pregnancy.other.label'))}}
                          </div>
                          <div v-if="! $v.pregnancy.other.minLength &&  $v.pregnancy.other.$error" class="invalid-feedback">
                                  {{minLengthError($t('pregnancy.other.label'), $v.pregnancy.other.$params.minLength.min)}}
                          </div>
                          <div v-if="! $v.pregnancy.other.maxLength &&  $v.pregnancy.other.$error" class="invalid-feedback">
                                  {{maxLengthError($t('pregnancy.other.label'), $v.pregnancy.other.$params.maxLength.max)}}
                          </div> 
                      </div>
                  </div>
              </div>
          </Base>
        </div>
        <div class="col-xl-3">
          <div class="my-2">
            <!-- <Base> -->
              <Media v-model="pregnancy.media" :v="$v.pregnancy.media"></Media>
            <!-- </Base> -->
          </div>
        </div>
      </div>
      <div class="my-2">
        <Base>      
          <div class="row">
            <div class="col-12">
              <div class="">
                <Carousel :value="reports" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                    <template #header>
                        <h5>Us Reports</h5>
                    </template>
                    <template #item="slotProps">
                        <div class="report-item">
                            <div class="report-item-content">
                                <div class="mb-3">
                                    <img :src="slotProps.data.media[0].file" class="report-file"  />
                                </div>
                                <div>
                                    <h6 class="text-success" @click="openDetailsDialog(slotProps.data)">
                                      {{new Date('07/05/2023').toLocaleDateString()}}
                                    </h6>
                                    <h4>{{slotProps.data.media[0].title}}</h4>
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel>
              </div>
            </div>
          </div>
        </Base>
      </div>
      <DetailsDialog :display="displayDetailsDialog" @hide="closeDetailsDialog" :header="$t('dialog.header.details')">
        <div class="row">
          <div class="col-lg-4">                    
            <div v-if="activeReport.media" class="report-file">
              <img :src="activeReport.media[0].file"  />
            </div>
          </div>
          <div class="col-lg-4">
            <!-- Table -->
            <div class="table-wrapper my-2" v-if="activeReport.fetus">
              <Base >
                <div class="row my-2">      
                  <div class="col-12">
                      <div class="table-responsive">
                          <table class="table table-sm text-center">
                              <thead>
                                  <tr>
                                      <th scope="col" colspan="2"><u>Fetus</u></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="(value, key) in activeReport.fetus" :key="key">
                                      <td class="text-start">
                                          <span>{{$t(`pregnancy.fetus.${key}.label`)}}</span>
                                      </td>
                                      <td class="text-end">
                                          <span>{{value}}</span>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                </div>    
              </Base>
            </div>
          </div>
          <div class="col-lg-4">
            <!-- Table -->
            <div class="table-wrapper my-2" v-if="activeReport.amnioticFluid">
              <Base >
                <div class="row my-2">      
                  <div class="col-12">
                      <div class="table-responsive">
                          <table class="table table-sm text-center">
                              <thead>
                                  <tr>
                                      <th scope="col" colspan="2"><u>Amniotic Fluid</u></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="(value, key) in activeReport.amnioticFluid" :key="key">
                                      <td class="text-start">
                                          <span>{{$t(`pregnancy.amnioticFluid.${key}.label`)}}</span>
                                      </td>
                                      <td class="text-end">
                                          <span>{{value}}</span>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                </div>    
              </Base>
            </div>
            <!-- Table -->
            <div class="table-wrapper my-2" v-if="activeReport.placentaMyometrium">
              <Base >
                <div class="row my-2">      
                  <div class="col-12">
                      <div class="table-responsive">
                          <table class="table table-sm text-center">
                              <thead>
                                  <tr>
                                      <th scope="col" colspan="2"><u>Amniotic Fluid</u></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="(value, key) in activeReport.amnioticFluid" :key="key">
                                      <td class="text-start">
                                          <span>{{$t(`pregnancy.amnioticFluid.${key}.label`)}}</span>
                                      </td>
                                      <td class="text-end">
                                          <span>{{value}}</span>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
                </div>    
              </Base>
            </div>
            <!-- other -->
            <div class="form-group">
              <label class="form-label">{{$t('pregnancy.other.label')}}</label>
              <input
                  type="text"
                  class="form-control"
                  :value="activeReport.other" 
                  disabled
              >
            </div>
          </div>
        </div>
      </DetailsDialog>
    </div>
  </template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/mr/gynecology/pregnancy.json"></i18n>
  <script>
  import { mapActions,mapGetters } from "vuex";
  // ////////////////////////////////////////////////////////
  import {htmlTagsError,minLengthError,maxLengthError} from '@/validation/errors'
  import {minLength,maxLength} from "vuelidate/lib/validators";
  import {notContainsHtmlTags} from "@/validation/customValidators";
  // //////////////////////////////////////////////////////////
  import Base from "@/components/global/utilities/Base.vue"
  import Divider from "@/components/global/utilities/Divider.vue"
  import ResetButton from "@/components/global/utilities/ResetButton.vue"
  import Media from './Media.vue'
  import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";

  /////////////////////////////////////////////////////////////
  export default {
    props: {
      v: {
        type: Object,
        required: true, 
      },
      check_error: {
        type: Object,
      },
      serializer_error: {
        type: Object,
      },
    },
    components: {
      Base,
      Divider,
      ResetButton,
      Media,
      DetailsDialog,
    },
    data(){
      return {
        displayDetailsDialog:false,
        activeReport:{},
        reports:[
          { "fetus": { "number": "1", "fhm": "12 d ", "lie": "21s", "congenitalAnomalies": "dd", "fl": "dd ", "crl": "cc", "fw": "ss", "fetalAge": "dd1", "movements": "21dd", "viability": "qw1", "presentation": "2eff", "bpd": "rr1", "gs": "qq1", "hcAc": "vv1v", "fhr": "1gg" }, "amnioticFluid": { "amount": "q11", "afIndex": "w1", "turbidity": "ee1", "deepestPocket": "dd1" }, "placentaMyometrium": { "site": "kk1k", "retroAbnormalities": "io1", "ovaries": "fg1", "grade": "fb", "myometrialMasses": "rfg1" }, "other": "df1", 
          "media": 
          [ 
          { 
            "title": "Test Pregnancy Report",
             "comment": "Test",
              "file": "data:image/png;base64,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" } 
            ] 
          }
        ],
        responsiveOptions: [
          {
              breakpoint: '1024px',
              numVisible: 3,
              numScroll: 3
          },
          {
              breakpoint: '600px',
              numVisible: 2,
              numScroll: 2
          },
          {
              breakpoint: '480px',
              numVisible: 1,
              numScroll: 1
          }
		    ]
      }
    },
    validations:{
      pregnancy:{
        fetus:{                
          number: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          fhm: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          lie: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          congenitalAnomalies: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          fl: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          crl: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          fw: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          fetalAge: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          movements: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          viability: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          presentation: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          bpd: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          gs: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          hcAc: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          fhr: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
        },
        amnioticFluid:{                
          amount: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          afIndex: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          turbidity: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          deepestPocket: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
        },
        placentaMyometrium:{                
          site: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          retroAbnormalities: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          ovaries: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          grade: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          myometrialMasses: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
        },
        other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        media:{
          maxLength: maxLength(20)
        }
      },
    },
    
  
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters('detailsGynecology/gynecology',{
          'getPregnancy':'getPregnancy',
      }),
      pregnancy:{
        get() {
            return this.getPregnancy;
        },
        set(value) {
            this.setPregnancy(value)
        }
      },
    },
    watch: {},
    methods: {
          htmlTagsError,
          maxLengthError,
          minLengthError,
          ...mapActions("detailsGynecology/gynecology", [
              "setPregnancy",
          ]),
          resetForm(){
            this.pregnancy = {
              fetus:{
                number: "",
                fhm: "",
                lie: "",
                congenitalAnomalies: "",
                fl: "",
                crl: "",
                fw: "",
                fetalAge: "",
                movements: "",
                viability: "",
                presentation: "",
                bpd: "",
                gs: "",
                hcAc: "",
                fhr: "",
              },
              amnioticFluid:{
                amount:"",
                afIndex:"",
                turbidity:"",
                deepestPocket:"",
              },
              placentaMyometrium:{
                site:"",
                retroAbnormalities:"",
                ovaries:"",
                grade:"",
                myometrialMasses:"",
              },
              other:"",
            }
            this.$v.pregnancy.$reset();
          },
          reset(){
              this.resetForm();
              console.log("reset")
              console.log(this.pregnancy)
          },
          openDetailsDialog(report){
            this.displayDetailsDialog=true;
            this.activeReport=report
          },
          closeDetailsDialog(){
            this.displayDetailsDialog=false;
          },
          /////////////////////
      },
  };
  </script>
  <style lang="scss" scoped>
  .pregnancy {
    .report-file{
      aspect-ratio:1/1;
      img{
        width: 100%;
        height: 100%;
        /* height: auto; */
        object-fit:contain;
      }
    }
  }
  @media screen and (max-width:992px){
    .pregnancy {
      .report-file{
        aspect-ratio:4/1;
        img{
        }
      }
    }
  }
  </style>
  