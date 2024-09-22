<template>
  <div class="womanHealth">
    <Base>    
        <div class="row">
            <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t('womanHealth.header') }}</h4>
            <ResetButton @reset="reset"></ResetButton>            
          </div>
        </div>
        <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('womanHealth.lmp.label') }}</label>
                <Calendar
                    v-model="rowToAdd.lmp"
                    :placeholder="$t('womanHealth.lmp.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToAdd.lmp.$error) ||
                        (serializer_error.expirationDate? serializer_error.rowToAdd.lmp.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="lmpFormateDate"
                />
                <small class="p-invalid" v-if="$v.rowToAdd.lmp.$error && !$v.rowToAdd.lmp.required">
                    {{ requiredError($t('womanHealth.lmp.label'))}}
                </small>
                <small class="p-invalid" v-if="$v.rowToAdd.lmp.$error && !$v.rowToAdd.lmp.validDate">
                    {{ dateError($t('womanHealth.lmp.label'))}}
                </small>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('womanHealth.csDate.label') }}</label>
                <Calendar
                    v-model="rowToAdd.csDate"
                    :placeholder="$t('womanHealth.csDate.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToAdd.csDate.$error ) ||
                        (serializer_error.expirationDate? serializer_error.rowToAdd.csDate.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="csDateFormateDate"
                />
                <small class="p-invalid" v-if="$v.rowToAdd.csDate.$error && !$v.rowToAdd.csDate.validDate">
                    {{ dateError($t('womanHealth.csDate.label'))}}
                </small>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('womanHealth.edd.label') }}</label>
                <Calendar
                    v-model="rowToAdd.edd"
                    :placeholder="$t('womanHealth.edd.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToAdd.edd.$error) ||
                        (serializer_error.expirationDate? serializer_error.rowToAdd.edd.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="eddFormateDate"
                />
                <small class="p-invalid" v-if="$v.rowToAdd.edd.$error && !$v.rowToAdd.edd.validDate">
                    {{ dateError($t('womanHealth.edd.label'))}}
                </small>
              </div>
            </div>
            <!-- Gravida -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('womanHealth.gravida.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.gravida" 
                        :placeholder="$t('womanHealth.gravida.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.gravida.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.gravida.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.gravida.$error && !$v.rowToAdd.gravida.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('womanHealth.gravida.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.gravida.minLength &&  $v.rowToAdd.gravida.$error" class="invalid-feedback">
                            {{minLengthError($t('womanHealth.gravida.label'), $v.rowToAdd.gravida.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.gravida.maxLength &&  $v.rowToAdd.gravida.$error" class="invalid-feedback">
                            {{maxLengthError($t('womanHealth.gravida.label'), $v.rowToAdd.gravida.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Term -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('womanHealth.term.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.term" 
                        :placeholder="$t('womanHealth.term.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.term.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.term.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.term.$error && !$v.rowToAdd.term.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('womanHealth.term.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.term.minLength &&  $v.rowToAdd.term.$error" class="invalid-feedback">
                            {{minLengthError($t('womanHealth.term.label'), $v.rowToAdd.term.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.term.maxLength &&  $v.rowToAdd.term.$error" class="invalid-feedback">
                            {{maxLengthError($t('womanHealth.term.label'), $v.rowToAdd.term.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Preterm -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('womanHealth.preterm.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.preterm" 
                        :placeholder="$t('womanHealth.preterm.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.preterm.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.preterm.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.preterm.$error && !$v.rowToAdd.preterm.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('womanHealth.preterm.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.preterm.minLength &&  $v.rowToAdd.preterm.$error" class="invalid-feedback">
                            {{minLengthError($t('womanHealth.preterm.label'), $v.rowToAdd.preterm.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.preterm.maxLength &&  $v.rowToAdd.preterm.$error" class="invalid-feedback">
                            {{maxLengthError($t('womanHealth.preterm.label'), $v.rowToAdd.preterm.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Abortion -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.abortion.label')}}</label>
                <input 
                    type="number" 
                    :placeholder="$t('womanHealth.abortion.placeholder')"
                    v-model="rowToAdd.abortion"
                    class="form-control" 
                    :class="{'is-invalid': $v.rowToAdd.abortion.$error}"
                    >
                    <div v-if="$v.rowToAdd.abortion.$error && !$v.rowToAdd.abortion.numeric" class="invalid-feedback">
                        {{numericError($t('womanHealth.abortion.label'))}}
                    </div>
                    <div v-if="!$v.rowToAdd.abortion.maxValue && $v.rowToAdd.abortion.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.abortion.label'), $v.rowToAdd.abortion.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- Living -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.living.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.living"
                    :placeholder="$t('womanHealth.living.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToAdd.living.$error }"
                    >
                    <div v-if="$v.rowToAdd.living.$error && !$v.rowToAdd.living.numeric" class="invalid-feedback">
                            {{numericError($t('womanHealth.living.label'))}}
                    </div>
                    <div v-if="!$v.rowToAdd.living.maxValue && $v.rowToAdd.living.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.living.label'), $v.rowToAdd.living.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- mens -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.mens.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.mens"
                    :placeholder="$t('womanHealth.mens.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToAdd.mens.$error}"
                    >
                    <div v-if="$v.rowToAdd.mens.$error && !$v.rowToAdd.mens.numeric" class="invalid-feedback">
                        {{numericError($t('womanHealth.mens.label'))}}
                    </div>
                    <div v-if="!$v.rowToAdd.mens.maxValue && $v.rowToAdd.mens.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.mens.label'), $v.rowToAdd.mens.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- mp -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.mp.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.mp"
                    :placeholder="$t('womanHealth.mp.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToAdd.mp.$error }"
                    >
                    <div v-if="$v.rowToAdd.mp.$error && !$v.rowToAdd.mp.numeric" class="invalid-feedback">
                        {{numericError($t('womanHealth.mp.label'))}}
                    </div>
                    <div v-if="!$v.rowToAdd.mp.maxValue && $v.rowToAdd.mp.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.mp.label'), $v.rowToAdd.mp.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- csNo -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.csNo.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.csNo"
                    :placeholder="$t('womanHealth.csNo.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToAdd.csNo.$error}"
                    >
                    <div v-if="$v.rowToAdd.csNo.$error && !$v.rowToAdd.csNo.numeric" class="invalid-feedback">
                        {{numericError($t('womanHealth.csNo.label'))}}
                    </div>
                    <div v-if="!$v.rowToAdd.csNo.maxValue && $v.rowToAdd.csNo.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.csNo.label'), $v.rowToAdd.csNo.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- gaDays -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.gaDays.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.gaDays"
                    :placeholder="$t('womanHealth.gaDays.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToAdd.gaDays.$error}"
                    >
                    <div v-if="$v.rowToAdd.gaDays.$error && !$v.rowToAdd.gaDays.numeric" class="invalid-feedback">
                      {{numericError($t('womanHealth.gaDays.label'))}}
                    </div>
                    <div v-if="!$v.rowToAdd.gaDays.maxValue && $v.rowToAdd.gaDays.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.gaDays.label'), $v.rowToAdd.gaDays.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- gaWeeks -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.gaWeeks.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.gaWeeks"
                    :placeholder="$t('womanHealth.gaWeeks.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToAdd.gaWeeks.$error}"
                    >
                    <div v-if="$v.rowToAdd.gaWeeks.$error && !$v.rowToAdd.gaWeeks.numeric" class="invalid-feedback">
                            {{numericError($t('womanHealth.gaWeeks.label'))}}
                    </div>
                    <div v-if="!$v.rowToAdd.gaWeeks.maxValue && $v.rowToAdd.gaWeeks.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.gaWeeks.label'), $v.rowToAdd.gaWeeks.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- Comment -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('womanHealth.comment.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.comment" 
                        :placeholder="$t('womanHealth.comment.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.comment.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.comment.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.comment.$error && !$v.rowToAdd.comment.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('womanHealth.comment.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.minLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{minLengthError($t('womanHealth.comment.label'), $v.rowToAdd.comment.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.maxLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{maxLengthError($t('womanHealth.comment.label'), $v.rowToAdd.comment.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="" class="form-label invisible ">Uplaod</label>
                    <UploadFile v-model="inputFile" :label="$t('womanHealth.file.upload')" :staticRef="'woman-health-input'"></UploadFile>
                  </div>
                  <div v-if="inputFile">
                      <DisplayFileBtn :file="inputFile" @deleteFileItem="deleteFileItem" :showDelete="true"></DisplayFileBtn>
                  </div>
            </div>
            <!-- addRow btn -->
            <div class="col-md-4">
                <AddButton @add="addRow"></AddButton>
            </div>
        </div>
    </Base>
    <!-- Table -->
    <div class="table-wrapper my-2" v-if="womanHealth.length>0">
      <Base >
        <div class="row my-2">      
          <div class="col-12">
            <div class="table-responsive">
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('womanHealth.lmp.label')}}</th>
                            <th scope="col">{{$t('womanHealth.csDate.label')}}</th>
                            <th scope="col">{{$t('womanHealth.edd.label')}}</th>
                            <th scope="col">{{$t('womanHealth.gravida.label')}}</th>
                            <th scope="col">{{$t('womanHealth.term.label')}}</th>
                            <th scope="col">{{$t('womanHealth.preterm.label')}}</th>
                            <th scope="col">{{$t('womanHealth.abortion.label')}}</th>
                            <th scope="col">{{$t('womanHealth.living.label')}}</th>
                            <th scope="col">{{$t('womanHealth.mens.label')}}</th>
                            <th scope="col">{{$t('womanHealth.mp.label')}}</th>
                            <th scope="col">{{$t('womanHealth.csNo.label')}}</th>
                            <th scope="col">{{$t('womanHealth.gaDays.label')}}</th>
                            <th scope="col">{{$t('womanHealth.gaWeeks.label')}}</th>
                            <th scope="col">{{$t('womanHealth.comment.label')}}</th>
                            <th scope="col">{{$t('womanHealth.file.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in womanHealth" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <span>{{val.lmp}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.csDate}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.edd}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.gravida}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.term}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.preterm}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.abortion}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.living}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.mens}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.mp}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.csNo}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.gaDays}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.gaWeeks}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.comment}}</span>
                            </td>
                            <td class="align-middle">
                                <span v-if="val.file">{{getFileNameFromBase64(val.file)}}</span>
                                <!-- <span v-if="val.file"><i class="pi pi-check"></i></span>
                                <span v-else><i class="pi pi-times"></i></span> -->
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
    <EditDialog :header="$t('womanHealth.header')" :display="displayEditModal" @cancel="closeEditDialog"   @close="closeEditDialog" @save="editRow">
        <div class="row">
          <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('womanHealth.lmp.label') }}</label>
                <Calendar
                    v-model="rowToEdit.lmp"
                    :placeholder="$t('womanHealth.lmp.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToEdit.lmp.$error) ||
                        (serializer_error.expirationDate? serializer_error.rowToEdit.lmp.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="lmpFormateDate"
                />
                <small class="p-invalid" v-if="$v.rowToEdit.lmp.$error && !$v.rowToEdit.lmp.required">
                    {{ requiredError($t('womanHealth.lmp.label'))}}
                </small>
                <small class="p-invalid" v-if="$v.rowToEdit.lmp.$error && !$v.rowToEdit.lmp.validDate">
                    {{ dateError($t('womanHealth.lmp.label'))}}
                </small>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('womanHealth.csDate.label') }}</label>
                <Calendar
                    v-model="rowToEdit.csDate"
                    :placeholder="$t('womanHealth.csDate.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToEdit.csDate.$error ) ||
                        (serializer_error.expirationDate? serializer_error.rowToEdit.csDate.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="csDateFormateDate"
                />
                <small class="p-invalid" v-if="$v.rowToEdit.csDate.$error && !$v.rowToEdit.csDate.validDate">
                    {{ dateError($t('womanHealth.csDate.label'))}}
                </small>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('womanHealth.edd.label') }}</label>
                <Calendar
                    v-model="rowToEdit.edd"
                    :placeholder="$t('womanHealth.edd.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToEdit.edd.$error) ||
                        (serializer_error.expirationDate? serializer_error.rowToEdit.edd.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="eddFormateDate"
                />
                <small class="p-invalid" v-if="$v.rowToEdit.edd.$error && !$v.rowToEdit.edd.validDate">
                    {{ dateError($t('womanHealth.edd.label'))}}
                </small>
              </div>
            </div>
            <!-- Gravida -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('womanHealth.gravida.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.gravida" 
                        :placeholder="$t('womanHealth.gravida.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.gravida.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.gravida.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.gravida.$error && !$v.rowToEdit.gravida.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('womanHealth.gravida.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.gravida.minLength &&  $v.rowToEdit.gravida.$error" class="invalid-feedback">
                            {{minLengthError($t('womanHealth.gravida.label'), $v.rowToEdit.gravida.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.gravida.maxLength &&  $v.rowToEdit.gravida.$error" class="invalid-feedback">
                            {{maxLengthError($t('womanHealth.gravida.label'), $v.rowToEdit.gravida.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Term -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('womanHealth.term.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.term" 
                        :placeholder="$t('womanHealth.term.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.term.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.term.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.term.$error && !$v.rowToEdit.term.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('womanHealth.term.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.term.minLength &&  $v.rowToEdit.term.$error" class="invalid-feedback">
                            {{minLengthError($t('womanHealth.term.label'), $v.rowToEdit.term.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.term.maxLength &&  $v.rowToEdit.term.$error" class="invalid-feedback">
                            {{maxLengthError($t('womanHealth.term.label'), $v.rowToEdit.term.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Preterm -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('womanHealth.preterm.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.preterm" 
                        :placeholder="$t('womanHealth.preterm.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.preterm.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.preterm.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.preterm.$error && !$v.rowToEdit.preterm.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('womanHealth.preterm.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.preterm.minLength &&  $v.rowToEdit.preterm.$error" class="invalid-feedback">
                            {{minLengthError($t('womanHealth.preterm.label'), $v.rowToEdit.preterm.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.preterm.maxLength &&  $v.rowToEdit.preterm.$error" class="invalid-feedback">
                            {{maxLengthError($t('womanHealth.preterm.label'), $v.rowToEdit.preterm.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- Abortion -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.abortion.label')}}</label>
                <input 
                    type="number" 
                    :placeholder="$t('womanHealth.abortion.placeholder')"
                    v-model="rowToEdit.abortion"
                    class="form-control" 
                    :class="{'is-invalid': $v.rowToEdit.abortion.$error}"
                    >
                    <div v-if="$v.rowToEdit.abortion.$error && !$v.rowToEdit.abortion.numeric" class="invalid-feedback">
                        {{numericError($t('womanHealth.abortion.label'))}}
                    </div>
                    <div v-if="!$v.rowToEdit.abortion.maxValue && $v.rowToEdit.abortion.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.abortion.label'), $v.rowToEdit.abortion.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- Living -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.living.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.living"
                    :placeholder="$t('womanHealth.living.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToEdit.living.$error }"
                    >
                    <div v-if="$v.rowToEdit.living.$error && !$v.rowToEdit.living.numeric" class="invalid-feedback">
                            {{numericError($t('womanHealth.living.label'))}}
                    </div>
                    <div v-if="!$v.rowToEdit.living.maxValue && $v.rowToEdit.living.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.living.label'), $v.rowToEdit.living.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- mens -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.mens.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.mens"
                    :placeholder="$t('womanHealth.mens.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToEdit.mens.$error}"
                    >
                    <div v-if="$v.rowToEdit.mens.$error && !$v.rowToEdit.mens.numeric" class="invalid-feedback">
                        {{numericError($t('womanHealth.mens.label'))}}
                    </div>
                    <div v-if="!$v.rowToEdit.mens.maxValue && $v.rowToEdit.mens.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.mens.label'), $v.rowToEdit.mens.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- mp -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.mp.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.mp"
                    :placeholder="$t('womanHealth.mp.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToEdit.mp.$error }"
                    >
                    <div v-if="$v.rowToEdit.mp.$error && !$v.rowToEdit.mp.numeric" class="invalid-feedback">
                        {{numericError($t('womanHealth.mp.label'))}}
                    </div>
                    <div v-if="!$v.rowToEdit.mp.maxValue && $v.rowToEdit.mp.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.mp.label'), $v.rowToEdit.mp.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- csNo -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.csNo.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.csNo"
                    :placeholder="$t('womanHealth.csNo.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToEdit.csNo.$error}"
                    >
                    <div v-if="$v.rowToEdit.csNo.$error && !$v.rowToEdit.csNo.numeric" class="invalid-feedback">
                        {{numericError($t('womanHealth.csNo.label'))}}
                    </div>
                    <div v-if="!$v.rowToEdit.csNo.maxValue && $v.rowToEdit.csNo.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.csNo.label'), $v.rowToEdit.csNo.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- gaDays -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.gaDays.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.gaDays"
                    :placeholder="$t('womanHealth.gaDays.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToEdit.gaDays.$error}"
                    >
                    <div v-if="$v.rowToEdit.gaDays.$error && !$v.rowToEdit.gaDays.numeric" class="invalid-feedback">
                      {{numericError($t('womanHealth.gaDays.label'))}}
                    </div>
                    <div v-if="!$v.rowToEdit.gaDays.maxValue && $v.rowToEdit.gaDays.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.gaDays.label'), $v.rowToEdit.gaDays.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- gaWeeks -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('womanHealth.gaWeeks.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.gaWeeks"
                    :placeholder="$t('womanHealth.gaWeeks.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToEdit.gaWeeks.$error}"
                    >
                    <div v-if="$v.rowToEdit.gaWeeks.$error && !$v.rowToEdit.gaWeeks.numeric" class="invalid-feedback">
                            {{numericError($t('womanHealth.gaWeeks.label'))}}
                    </div>
                    <div v-if="!$v.rowToEdit.gaWeeks.maxValue && $v.rowToEdit.gaWeeks.$error" class="invalid-feedback">
                        {{maxValueError($t('womanHealth.gaWeeks.label'), $v.rowToEdit.gaWeeks.$params.maxValue.max)}}
                    </div> 
                </div>
            </div>
            <!-- Comment -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('womanHealth.comment.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.comment" 
                        :placeholder="$t('womanHealth.comment.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.comment.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.comment.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.comment.$error && !$v.rowToEdit.comment.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('womanHealth.comment.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.comment.minLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                            {{minLengthError($t('womanHealth.comment.label'), $v.rowToEdit.comment.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.comment.maxLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                            {{maxLengthError($t('womanHealth.comment.label'), $v.rowToEdit.comment.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- File -->
            <div class="col-md-4">
                <div class="form-group">
                    <label for="" class="form-label invisible ">Uplaod</label>
                    <UploadFile v-model="inputFileEdit" :label="rowToEdit.file?$t('womanHealth.file.edit'):$t('womanHealth.file.upload')" :staticRef="'woman-health-input'"></UploadFile>
                </div>
                <div class="my-2" v-if="inputFileEdit">
                    <DisplayFileBtn :file="inputFileEdit" 
                    @deleteFileItem="deleteFileEditItem" :showDelete="true"></DisplayFileBtn>
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
/////////////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,numericError,requiredError,maxValueError,dateError} from '@/validation/errors'
import {minLength,maxLength, numeric,maxValue,required} from "vuelidate/lib/validators";
import {notContainsHtmlTags, validDate} from "@/validation/customValidators";
import { convertDate,getFileNameFromBase64 } from "@/helpers/utilities";
// //////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue"
import ResetButton from "@/components/global/utilities/ResetButton.vue"
import AddButton from "@/components/global/utilities/AddButton.vue"
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
import EditDialog from "@/components/global/utilities/EditDialog.vue"    
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue" 
import DisplayFileBtn from '@/components/global/file-handling/DisplayFileBtn.vue'
import UploadFile from '@/components/global/file-handling/UploadFile.vue'
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
    UploadFile,
    DisplayFileBtn
  },
  data(){
    return {

      inputFile:{},
      inputFileEdit:{},
      rowToAdd:{
        lmp: "", // date 
        csDate: "", // date 
        edd: "", // date 
        gravida: "",
        term: "",
        preterm: "",
        abortion: null, // number
        living: null, // number
        mens: null, // number
        mp: null, // number
        csNo: null, // number
        gaDays: null, // number
        gaWeeks: null, // number
        comment: "",
        file:null
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
    inputFile: {
        validator: (value) => {
            if(typeof value == null || value == '')
                return true;
            if (typeof value == "object") {
                if(value.hasOwnProperty('validSize')&&value.hasOwnProperty('validExtension'))
                    return value.validSize && value.validExtension;
                else 
                    return true;
            }
        }
    },
    inputFileEdit: {
        validator: (value) => {
            if(typeof value == null || value == '')
                return true;
            if (typeof value == "object") {
                if(value.hasOwnProperty('validSize')&&value.hasOwnProperty('validExtension'))
                    return value.validSize && value.validExtension;
                else 
                    return true;
            }
        }
    },
    rowToAdd:{
        lmp: {
            required,
            validDate(value) {
                return validDate(value);
            },
        }, // date 
        csDate:{
            validDate(value) {
                return validDate(value);
            },
        }, // date 
        edd:{
            validDate(value) {
                return validDate(value);
            },
        }, // date 
        gravida: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        term: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        preterm: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        abortion: {
            numeric,
            maxValue: maxValue(100),
        },
        living: {
            numeric,
            maxValue: maxValue(100),
        },
        mens: {
            numeric,
            maxValue: maxValue(100),
        },
        mp: {
            numeric,
            maxValue: maxValue(100),
        },
        csNo: {
            numeric,
            maxValue: maxValue(100),
        },
        gaDays: {
            numeric,
            maxValue: maxValue(100),
        },
        gaWeeks: {
            numeric,
            maxValue: maxValue(100),
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
        lmp: {
            required,
            validDate(value) {
                return validDate(value);
            },
        }, // date 
        csDate:{
            validDate(value) {
                return validDate(value);
            },
        }, // date 
        edd:{
            validDate(value) {
                return validDate(value);
            },
        }, // date 
        gravida: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        term: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        preterm: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        abortion: {
            numeric,
            maxValue: maxValue(100),
        },
        living: {
            numeric,
            maxValue: maxValue(100),
        },
        mens: {
            numeric,
            maxValue: maxValue(100),
        },
        mp: {
            numeric,
            maxValue: maxValue(100),
        },
        csNo: {
            numeric,
            maxValue: maxValue(100),
        },
        gaDays: {
            numeric,
            maxValue: maxValue(100),
        },
        gaWeeks: {
            numeric,
            maxValue: maxValue(100),
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
        'getWomanHealth':'getWomanHealth'
    }),
    womanHealth:{
      get() {
          return this.getWomanHealth;
      },
      set(value) {
          this.setWomanHealth(value);
      }
    },
  },
  watch:{
    inputFile:{
        handler(){
            if(this.inputFile){
                this.rowToAdd.file =this.inputFile.base64;
            }
        },
        deep: true
    },
    inputFileEdit:{
        handler(){
            if(this.inputFileEdit){
                this.rowToEdit.file =this.inputFileEdit.base64;
            }
        },
        deep: true
    },
  },
  methods: {
        htmlTagsError,
        maxLengthError,
        minLengthError,
        numericError,
        requiredError,
        maxValueError,
        dateError,
        getFileNameFromBase64,
        ...mapActions("detailsGynecology/gynecology", [
            "setWomanHealth",
        ]),
        /////////////////////////
        lmpFormateDate() {
          this.rowToAdd.lmp = convertDate(
            this.rowToAdd.lmp
          );
        },
        csDateFormateDate() {
          this.rowToAdd.csDate = convertDate(
            this.rowToAdd.csDate
          );
        },
        eddFormateDate() {
          this.rowToAdd.edd = convertDate(
            this.rowToAdd.edd
          );
        },
        lmpFormateDateEdit() {
          this.rowToEdit.lmp = convertDate(
            this.rowToEdit.lmp
          );
        },
        csDateFormateDateEdit() {
          this.rowToEdit.csDate = convertDate(
            this.rowToEdit.csDate
          );
        },
        eddFormateDateEdit() {
          this.rowToEdit.edd = convertDate(
            this.rowToEdit.edd
          );
        },
        resetForm() {
          this.rowToAdd = {
              lmp: "",
              csDate: "",
              edd: "",
              gravida: "",
              term: "",
              preterm: "",
              abortion: null,
              living: null,
              mens: null,
              mp: null,
              csNo: null,
              gaDays: null,
              gaWeeks: null,
              comment: "",
              file:null
          }
          this.$v.rowToAdd.$reset();
        },
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
            this.womanHealth.push({...this.rowToAdd});
            this.inputFile={};
            this.resetForm();
          }
        },
        /////////////////////
        openEditDialog(val,index) {
          this.displayEditModal = true;
          this.indexToEdit = index;
          this.rowToEdit ={...val}
          if(val.file){
            this.inputFileEdit = 
            {
              base64: val.file,
              source: true, 
              name: getFileNameFromBase64(val.file), 
              extension: getFileNameFromBase64(val.file).split('.')[1], 
              size: true, 
              validExtension:true, 
              type:'', 
              validSize: true, 
              rawFile: true 
            }
          }
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
            // this.womanHealth[this.indexToEdit]={...this.rowToEdit};
            this.womanHealth.splice(this.indexToEdit,1,{...this.rowToEdit});
            this.inputFileEdit={}
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
          this.womanHealth.splice(this.indexToDelete,1);
          this.closeDeleteDialog();
        },
        deleteFileItem(){
          this.inputFile = {}
        },
        deleteFileEditItem(){
          this.inputFileEdit = {}
        },
        reset(){
          this.resetForm();
          this.inputFile = {}
          this.inputFileEdit = {}
          this.womanHealth=[]
        }, 
      },

};
</script>
<style scoped>
  .is-invalid{
    border: 1px sloid red;
  }
</style>
