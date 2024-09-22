<template>
  <div class="antenatal">
    <Base>    
        <div class="row">
            <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t('antenatal.header') }}</h4>
            <ResetButton @reset="reset"></ResetButton>            
          </div>
        </div>
        <div class="row">
            <!-- Date -->
            <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label">{{ $t('antenatal.date.label') }}</label>
                  <Calendar
                      v-model="rowToAdd.date"
                      :placeholder="$t('antenatal.date.placeholder')"
                      :showIcon="true"
                      :class="{
                      'p-invalid':
                          ($v.rowToAdd.date.$error) ||
                          (serializer_error.expirationDate? serializer_error.rowToAdd.date.length > 0: false)
                      }"
                      dateFormat="mm-dd-yy"
                      @date-select="formateDate"
                  />
                  <small class="p-invalid" v-if="$v.rowToAdd.date.$error && !$v.rowToAdd.date.required">
                      {{ requiredError($t('antenatal.date.label'))}}
                  </small>
                  <small class="p-invalid" v-else-if="$v.rowToAdd.date.$error && !$v.rowToAdd.date.validDate">
                      {{ dateError($t('antenatal.date.label'))}}
                  </small>
                </div>
            </div>
            <!-- Bp -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('antenatal.bp.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.bp"
                    :placeholder="$t('antenatal.bp.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToAdd.bp.$error}"
                    >
                    <div v-if="$v.rowToAdd.bp.$error && !$v.rowToAdd.bp.numeric" class="invalid-feedback">
                        {{numericError($t('antenatal.bp.label'))}}
                    </div>
                    <div v-else-if="$v.rowToAdd.bp.$error && !$v.rowToAdd.bp.$params.maxValue.max" class="invalid-feedback">
                        {{maxValueError($t('antenatal.bp.label'))}}
                    </div>
                </div>
            </div>
            <!-- Urine -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.urine.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.urine" 
                        :placeholder="$t('antenatal.urine.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.urine.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.urine.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.urine.$error && !$v.rowToAdd.urine.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.urine.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.urine.minLength &&  $v.rowToAdd.urine.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.urine.label'), $v.rowToAdd.urine.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.urine.maxLength &&  $v.rowToAdd.urine.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.urine.label'), $v.rowToAdd.urine.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Blood Sugar -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.bloodSugar.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.bloodSugar" 
                        :placeholder="$t('antenatal.bloodSugar.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.bloodSugar.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.bloodSugar.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.bloodSugar.$error && !$v.rowToAdd.bloodSugar.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.bloodSugar.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.bloodSugar.minLength &&  $v.rowToAdd.bloodSugar.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.bloodSugar.label'), $v.rowToAdd.bloodSugar.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.bloodSugar.maxLength &&  $v.rowToAdd.bloodSugar.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.bloodSugar.label'), $v.rowToAdd.bloodSugar.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Hb -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.hb.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.hb" 
                        :placeholder="$t('antenatal.hb.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.hb.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.hb.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.hb.$error && !$v.rowToAdd.hb.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.hb.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.hb.minLength &&  $v.rowToAdd.hb.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.hb.label'), $v.rowToAdd.hb.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.hb.maxLength &&  $v.rowToAdd.hb.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.hb.label'), $v.rowToAdd.hb.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Wt -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.wt.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.wt" 
                        :placeholder="$t('antenatal.wt.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.wt.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.wt.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.wt.$error && !$v.rowToAdd.wt.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.wt.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.wt.minLength &&  $v.rowToAdd.wt.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.wt.label'), $v.rowToAdd.wt.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.wt.maxLength &&  $v.rowToAdd.wt.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.wt.label'), $v.rowToAdd.wt.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Gest Wks -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.gestWks.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.gestWks" 
                        :placeholder="$t('antenatal.gestWks.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.gestWks.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.gestWks.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.gestWks.$error && !$v.rowToAdd.gestWks.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.gestWks.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.gestWks.minLength &&  $v.rowToAdd.gestWks.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.gestWks.label'), $v.rowToAdd.gestWks.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.gestWks.maxLength &&  $v.rowToAdd.gestWks.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.gestWks.label'), $v.rowToAdd.gestWks.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- usGa -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.usGa.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.usGa" 
                        :placeholder="$t('antenatal.usGa.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.usGa.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.usGa.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.usGa.$error && !$v.rowToAdd.usGa.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.usGa.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.usGa.minLength &&  $v.rowToAdd.usGa.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.usGa.label'), $v.rowToAdd.usGa.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.usGa.maxLength &&  $v.rowToAdd.usGa.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.usGa.label'), $v.rowToAdd.usGa.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- fhr -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.fhr.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.fhr" 
                        :placeholder="$t('antenatal.fhr.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.fhr.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.fhr.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.fhr.$error && !$v.rowToAdd.fhr.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.fhr.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.fhr.minLength &&  $v.rowToAdd.fhr.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.fhr.label'), $v.rowToAdd.fhr.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.fhr.maxLength &&  $v.rowToAdd.fhr.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.fhr.label'), $v.rowToAdd.fhr.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- llAedema -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.llAedema.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.llAedema" 
                        :placeholder="$t('antenatal.llAedema.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.llAedema.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.llAedema.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.llAedema.$error && !$v.rowToAdd.llAedema.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.llAedema.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.llAedema.minLength &&  $v.rowToAdd.llAedema.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.llAedema.label'), $v.rowToAdd.llAedema.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.llAedema.maxLength &&  $v.rowToAdd.llAedema.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.llAedema.label'), $v.rowToAdd.llAedema.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- presentationAndPos -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.presentationAndPos.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.presentationAndPos" 
                        :placeholder="$t('antenatal.presentationAndPos.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.presentationAndPos.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.presentationAndPos.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.presentationAndPos.$error && !$v.rowToAdd.presentationAndPos.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.presentationAndPos.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.presentationAndPos.minLength &&  $v.rowToAdd.presentationAndPos.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.presentationAndPos.label'), $v.rowToAdd.presentationAndPos.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.presentationAndPos.maxLength &&  $v.rowToAdd.presentationAndPos.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.presentationAndPos.label'), $v.rowToAdd.presentationAndPos.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- vacInvestigation -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.vacInvestigation.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.vacInvestigation" 
                        :placeholder="$t('antenatal.vacInvestigation.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.vacInvestigation.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.vacInvestigation.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.vacInvestigation.$error && !$v.rowToAdd.vacInvestigation.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.vacInvestigation.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.vacInvestigation.minLength &&  $v.rowToAdd.vacInvestigation.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.vacInvestigation.label'), $v.rowToAdd.vacInvestigation.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.vacInvestigation.maxLength &&  $v.rowToAdd.vacInvestigation.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.vacInvestigation.label'), $v.rowToAdd.vacInvestigation.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- complaint -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.complaint.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.complaint" 
                        :placeholder="$t('antenatal.complaint.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.complaint.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.complaint.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.complaint.$error && !$v.rowToAdd.complaint.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.complaint.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.complaint.minLength &&  $v.rowToAdd.complaint.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.complaint.label'), $v.rowToAdd.complaint.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.complaint.maxLength &&  $v.rowToAdd.complaint.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.complaint.label'), $v.rowToAdd.complaint.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- riskFactor -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.riskFactor.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.riskFactor" 
                        :placeholder="$t('antenatal.riskFactor.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.riskFactor.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.riskFactor.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.riskFactor.$error && !$v.rowToAdd.riskFactor.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.riskFactor.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.riskFactor.minLength &&  $v.rowToAdd.riskFactor.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.riskFactor.label'), $v.rowToAdd.riskFactor.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.riskFactor.maxLength &&  $v.rowToAdd.riskFactor.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.riskFactor.label'), $v.rowToAdd.riskFactor.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- comment -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.comment.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.comment" 
                        :placeholder="$t('antenatal.comment.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.comment.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.comment.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.comment.$error && !$v.rowToAdd.comment.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.comment.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.minLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.comment.label'), $v.rowToAdd.comment.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.maxLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.comment.label'), $v.rowToAdd.comment.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- addRow btn -->
            <div class="col-md-4">
                <AddButton @add="addRow"></AddButton>
            </div>
        </div>
    </Base>
    <!-- Table -->
    <div class="table-wrapper my-2" v-if="antenatal.length>0">
      <Base >
        <div class="row my-2">      
          <div class="col-12">
            <div class="table-responsive">
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('antenatal.date.label')}}</th>
                            <th scope="col">{{$t('antenatal.bp.label')}}</th>
                            <th scope="col">{{$t('antenatal.urine.label')}}</th>
                            <th scope="col">{{$t('antenatal.bloodSugar.label')}}</th>
                            <th scope="col">{{$t('antenatal.hb.label')}}</th>
                            <th scope="col">{{$t('antenatal.wt.label')}}</th>
                            <th scope="col">{{$t('antenatal.gestWks.label')}}</th>
                            <th scope="col">{{$t('antenatal.usGa.label')}}</th>
                            <th scope="col">{{$t('antenatal.fhr.label')}}</th> 
                            <th scope="col">{{$t('antenatal.llAedema.label')}}</th>
                            <th scope="col">{{$t('antenatal.presentationAndPos.label')}}</th>
                            <th scope="col">{{$t('antenatal.vacInvestigation.label')}}</th>
                            <th scope="col">{{$t('antenatal.complaint.label')}}</th>
                            <th scope="col">{{$t('antenatal.riskFactor.label')}}</th>
                            <th scope="col">{{$t('antenatal.comment.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in antenatal" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <span>{{val.date}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.bp}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.urine}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.bloodSugar}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.hb}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.wt}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.gestWks}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.usGa}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.fhr}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.llAedema}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.presentationAndPos}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.vacInvestigation}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.complaint}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.riskFactor}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.comment}}</span>
                            </td>
                            <td class="align-middle">
                                <div class="d-flex justify-content-center align-items-center">
                                  <EditButton class="me-2" @edit="openEditDialog(val,index)"></EditButton>
                                  <DeleteButton @delete="openDeleteDialog(index)"></DeleteButton>
                                </div>
                            </td> 
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>    
      </Base>
    </div>
    <!-- Edit Modal -->
    <EditDialog :header="$t('antenatal.header')" :display="displayEditModal" @close="closeEditDialog" @cancel="closeEditDialog" @save="editRow">    
        <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('antenatal.date.label') }}</label>
                <Calendar
                    v-model="rowToEdit.date"
                    :placeholder="$t('antenatal.date.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToEdit.date.$error) ||
                        (serializer_error.expirationDate? serializer_error.rowToEdit.date.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="formateDateEdit"
                />
                <small class="p-invalid" v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.required">
                  {{ requiredError($t('antenatal.date.label'))}}
                </small>
                <small class="p-invalid" v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.validDate">
                  {{ dateError($t('antenatal.date.label'))}}
                </small>
              </div>
            </div>
            <!-- Bp -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('antenatal.bp.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.bp"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToEdit.bp.$error}"
                    >
                    <div v-if="$v.rowToEdit.bp.$error && !$v.rowToEdit.bp.numeric" class="invalid-feedback">
                        {{numericError($t('antenatal.bp.label'))}}
                    </div>
                    <div v-if="$v.rowToEdit.bp.$error && !$v.rowToEdit.bp.$params.maxValue.max" class="invalid-feedback">
                        {{maxValueError($t('antenatal.bp.label'))}}
                    </div>
                </div>
            </div>
            <!-- Urine -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.urine.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.urine" 
                        :placeholder="$t('antenatal.urine.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.urine.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.urine.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.urine.$error && !$v.rowToEdit.urine.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.urine.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.urine.minLength &&  $v.rowToEdit.urine.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.urine.label'), $v.rowToEdit.urine.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.urine.maxLength &&  $v.rowToEdit.urine.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.urine.label'), $v.rowToEdit.urine.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Blood Sugar -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.bloodSugar.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.bloodSugar" 
                        :placeholder="$t('antenatal.bloodSugar.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.bloodSugar.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.bloodSugar.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.bloodSugar.$error && !$v.rowToEdit.bloodSugar.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.bloodSugar.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.bloodSugar.minLength &&  $v.rowToEdit.bloodSugar.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.bloodSugar.label'), $v.rowToEdit.bloodSugar.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.bloodSugar.maxLength &&  $v.rowToEdit.bloodSugar.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.bloodSugar.label'), $v.rowToEdit.bloodSugar.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Hb -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.hb.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.hb" 
                        :placeholder="$t('antenatal.hb.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.hb.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.hb.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.hb.$error && !$v.rowToEdit.hb.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.hb.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.hb.minLength &&  $v.rowToEdit.hb.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.hb.label'), $v.rowToEdit.hb.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.hb.maxLength &&  $v.rowToEdit.hb.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.hb.label'), $v.rowToEdit.hb.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Wt -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.wt.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.wt" 
                        :placeholder="$t('antenatal.wt.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.wt.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.wt.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.wt.$error && !$v.rowToEdit.wt.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.wt.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.wt.minLength &&  $v.rowToEdit.wt.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.wt.label'), $v.rowToEdit.wt.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.wt.maxLength &&  $v.rowToEdit.wt.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.wt.label'), $v.rowToEdit.wt.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Gest Wks -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.gestWks.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.gestWks" 
                        :placeholder="$t('antenatal.gestWks.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.gestWks.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.gestWks.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.gestWks.$error  && !$v.rowToEdit.gestWks.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.gestWks.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.gestWks.minLength &&  $v.rowToEdit.gestWks.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.gestWks.label'), $v.rowToEdit.gestWks.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.gestWks.maxLength &&  $v.rowToEdit.gestWks.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.gestWks.label'), $v.rowToEdit.gestWks.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- usGa -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.usGa.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.usGa" 
                        :placeholder="$t('antenatal.usGa.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.usGa.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.usGa.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.usGa.$error && !$v.rowToEdit.usGa.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.usGa.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.usGa.minLength &&  $v.rowToEdit.usGa.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.usGa.label'), $v.rowToEdit.usGa.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.usGa.maxLength &&  $v.rowToEdit.usGa.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.usGa.label'), $v.rowToEdit.usGa.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- fhr -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.fhr.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.fhr" 
                        :placeholder="$t('antenatal.fhr.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.fhr.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.fhr.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.fhr.$error && !$v.rowToEdit.fhr.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.fhr.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.fhr.minLength &&  $v.rowToEdit.fhr.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.fhr.label'), $v.rowToEdit.fhr.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.fhr.maxLength &&  $v.rowToEdit.fhr.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.fhr.label'), $v.rowToEdit.fhr.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- llAedema -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.llAedema.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.llAedema" 
                        :placeholder="$t('antenatal.llAedema.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.llAedema.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.llAedema.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.llAedema.$error && !$v.rowToEdit.llAedema.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.llAedema.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.llAedema.minLength &&  $v.rowToEdit.llAedema.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.llAedema.label'), $v.rowToEdit.llAedema.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.llAedema.maxLength &&  $v.rowToEdit.llAedema.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.llAedema.label'), $v.rowToEdit.llAedema.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- presentationAndPos -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.presentationAndPos.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.presentationAndPos" 
                        :placeholder="$t('antenatal.presentationAndPos.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.presentationAndPos.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.presentationAndPos.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.presentationAndPos.$error && !$v.rowToEdit.presentationAndPos.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.presentationAndPos.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.presentationAndPos.minLength &&  $v.rowToEdit.presentationAndPos.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.presentationAndPos.label'), $v.rowToEdit.presentationAndPos.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.presentationAndPos.maxLength &&  $v.rowToEdit.presentationAndPos.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.presentationAndPos.label'), $v.rowToEdit.presentationAndPos.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- vacInvestigation -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.vacInvestigation.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.vacInvestigation" 
                        :placeholder="$t('antenatal.vacInvestigation.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.vacInvestigation.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.vacInvestigation.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.vacInvestigation.$error && !$v.rowToEdit.vacInvestigation.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.vacInvestigation.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.vacInvestigation.minLength &&  $v.rowToEdit.vacInvestigation.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.vacInvestigation.label'), $v.rowToEdit.vacInvestigation.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.vacInvestigation.maxLength &&  $v.rowToEdit.vacInvestigation.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.vacInvestigation.label'), $v.rowToEdit.vacInvestigation.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- complaint -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.complaint.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.complaint" 
                        :placeholder="$t('antenatal.complaint.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.complaint.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.complaint.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.complaint.$error && !$v.rowToEdit.complaint.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.complaint.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.complaint.minLength &&  $v.rowToEdit.complaint.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.complaint.label'), $v.rowToEdit.complaint.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.complaint.maxLength &&  $v.rowToEdit.complaint.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.complaint.label'), $v.rowToEdit.complaint.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- riskFactor -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.riskFactor.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.riskFactor" 
                        :placeholder="$t('antenatal.riskFactor.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.riskFactor.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.riskFactor.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.riskFactor.$error && !$v.rowToEdit.riskFactor.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.riskFactor.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.riskFactor.minLength &&  $v.rowToEdit.riskFactor.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.riskFactor.label'), $v.rowToEdit.riskFactor.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.riskFactor.maxLength &&  $v.rowToEdit.riskFactor.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.riskFactor.label'), $v.rowToEdit.riskFactor.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- comment -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('antenatal.comment.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.comment" 
                        :placeholder="$t('antenatal.comment.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.comment.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.comment.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.comment.$error && !$v.rowToEdit.comment.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('antenatal.comment.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.comment.minLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                            {{minLengthError($t('antenatal.comment.label'), $v.rowToEdit.comment.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.comment.maxLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                            {{maxLengthError($t('antenatal.comment.label'), $v.rowToEdit.comment.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
        </div>
    </EditDialog>
    <!-- Delete -->
    <DeleteDialog :display="displayDeleteModal" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>  

  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/gynecology/obstetric.json"></i18n>
<script>
import { mapGetters,mapActions } from "vuex";
////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,numericError,dateError,requiredError,maxValueError} from '@/validation/errors'
import {minLength,maxLength, numeric,required,maxValue} from "vuelidate/lib/validators";
import {notContainsHtmlTags, validDate} from "@/validation/customValidators";
import { convertDate } from "@/helpers/utilities";
// //////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue"
import ResetButton from "@/components/global/utilities/ResetButton.vue"
import AddButton from "@/components/global/utilities/AddButton.vue"
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
import EditDialog from "@/components/global/utilities/EditDialog.vue"    
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"   
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
    ResetButton,
    AddButton,
    EditButton,
    DeleteButton,
    EditDialog,
    DeleteDialog,  
  },
  data(){
    return {

      rowToAdd:{
        date: "", // date 
        bp: null, // number
        urine: "",
        bloodSugar: "",
        hb: "",
        wt: "",
        gestWks: "",
        usGa: "",
        fhr: "",
        llAedema: "",
        presentationAndPos: "",
        vacInvestigation: "",
        complaint: "",
        riskFactor: "",
        comment: ""
      },
      rowToEdit:{

      },
      indexToEdit:null,
      displayEditModal: false,
      indexToDelete:null,
      displayDeleteModal: false,
    }
  },
  validations:{
    rowToAdd:{
        date: {
          required,
            validDate(value) {
                return validDate(value);
            },
        },
        bp: {
            value:{
                numeric,
                maxValue:maxValue(100)
            }
        },
        urine: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        bloodSugar: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        hb: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        wt: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        gestWks: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        usGa: {
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
        llAedema: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        presentationAndPos: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        vacInvestigation: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        complaint: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        riskFactor: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        comment: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        }
    },
    rowToEdit:{
        date: {
            required,
            validDate(value) {
                return validDate(value);
            },
        }, // date 
        bp: {
            value:{
                numeric,
                maxValue:maxValue(100)
            }
        },
        urine: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        bloodSugar: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        hb: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        wt: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        gestWks: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        usGa: {
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
        llAedema: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        presentationAndPos: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        vacInvestigation: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        complaint: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        riskFactor: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        comment: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        }
    },
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters('detailsGynecology/gynecology',{
        'getAntenatal':'getAntenatal'
    }),
    antenatal:{
      get() {
        return this.getAntenatal;
      },
      set(value) {
        this.setAntenatal(value);
      }
    },
  },
  methods: {
        htmlTagsError,
        maxLengthError,
        minLengthError,
        numericError,
        dateError,
        requiredError,
        ...mapActions("detailsGynecology/gynecology", [
            "setAntenatal",
        ]),
        resetForm() {
          this.rowToAdd = {
            date: "",
            bp: null,
            urine: "",
            bloodSugar: "",
            hb: "",
            wt: "",
            gestWks: "",
            usGa: "",
            fhr: "",
            llAedema: "",
            presentationAndPos: "",
            vacInvestigation: "",
            complaint: "",
            riskFactor: "",
            comment: ""
          }
          this.$v.rowToAdd.$reset();
        },
        reset(){
          this.resetForm();
          this.antenatal=[]
        }, 
        /////////////////////////
        formateDate() {
          this.rowToAdd.date = convertDate(this.rowToAdd.date);
        },
        formateDateEdit() {
          this.rowToEdit.date = convertDate(this.rowToEdit.date);
        },
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
            this.antenatal.push({...this.rowToAdd});
            this.resetForm();
          }
        },
        /////////////////////
        openEditDialog(val,index) {
          this.displayEditModal = true;
          this.indexToEdit = index;
          this.rowToEdit ={...val}
        },
        closeEditDialog() {
          this.rowToEdit= {}
          this.indexToEdit = null;
          this.$v.rowToEdit.$reset()
          this.displayEditModal = false;
        },
        editRow(){
          this.v.$touch();
          this.$v.rowToEdit.$touch();
          if(!(this.v.$invalid || this.$v.rowToEdit.$invalid )){
            // this.antenatal[this.indexToEdit]={...this.rowToEdit};
            this.antenatal.splice(this.indexToEdit,1,{...this.rowToEdit});
            this.closeEditDialog();
          }
        },
        ////////////////////////
        openDeleteDialog(index) {
          this.displayDeleteModal = true;
          this.indexToDelete =index
        },
        closeDeleteDialog() {
          this.displayDeleteModal = false;
          this.indexToDelete =null
        },
        deleteRow(){
            this.antenatal.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    },

};
</script>
<style scoped>
  .is-invalid{
    border: 1px sloid red;
  }
</style>
