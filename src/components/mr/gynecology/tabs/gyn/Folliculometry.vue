<template>
  <div class="folliculometry">
    <Base>    
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t('folliculometry.header') }}</h4>
            <ResetButton @reset="reset"></ResetButton>            
          </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label">{{ $t('folliculometry.lmp.label') }}</label>
                  <Calendar
                      v-model="rowToAdd.lmp"
                      :placeholder="$t('folliculometry.lmp.placeholder')"
                      :showIcon="true"
                      :class="{
                        'p-invalid':($v.rowToAdd.lmp.$error) ||
                          (serializer_error.expirationDate? serializer_error.rowToAdd.lmp.length > 0: false)
                      }"
                      dateFormat="mm-dd-yy"
                      @date-select="formateLmpDate($event)"
                      
                  />
                  <small v-if="$v.rowToAdd.lmp.$error && !$v.rowToAdd.lmp.required"
                        class="p-invalid" 
                  >
                      {{ requiredError($t('folliculometry.lmp.label'))}}
                  </small>
                  <small v-if="$v.rowToAdd.lmp.$error && !$v.rowToAdd.lmp.validDate"
                        class="p-invalid" 
                  >
                      {{ dateError($t('folliculometry.lmp.label'))}}
                  </small>
                  <small v-if="$v.rowToAdd.lmp.$error && !$v.rowToAdd.lmp.compareDates"
                        class="p-invalid" 
                  >
                      {{ inputError($t('folliculometry.lmp.label'))}}
                  </small>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label">{{ $t('folliculometry.date.label') }}</label>
                  <Calendar
                      v-model="rowToAdd.date"
                      :placeholder="$t('folliculometry.date.placeholder')"
                      :showIcon="true"
                      :class="{
                      'p-invalid':
                          ($v.rowToAdd.date.$error) ||
                          (serializer_error.expirationDate? serializer_error.rowToAdd.date.length > 0: false)
                      }"
                      dateFormat="mm-dd-yy"
                      @date-select="formateDate($event)"
                  />
                  <small v-if="$v.rowToAdd.date.$error && !$v.rowToAdd.date.validDate"
                        class="p-invalid" 
                  >
                      {{ dateError($t('folliculometry.date.label'))}}
                  </small>
                  <small v-if="$v.rowToAdd.date.$error && !$v.rowToAdd.date.compareDates"
                        class="p-invalid" 
                  >
                      {{ inputError($t('folliculometry.date.label'))}}
                  </small>
                </div>
            </div>
            <!-- day -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('folliculometry.day.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.day"
                    :placeholder="$t('folliculometry.day.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToAdd.day.$error}"
                    >
                    <div v-if="$v.rowToAdd.day.$error && !$v.rowToAdd.day.numeric" class="invalid-feedback">
                        {{numericError($t('folliculometry.day.label'))}}
                    </div>
                    <div v-if="$v.rowToAdd.day.$error && !$v.rowToAdd.day.maxValue" class="invalid-feedback">
                        {{maxValueError($t('folliculometry.day.label'),$v.rowToAdd.day.$params.maxValue.max)}}
                    </div>
                </div>
            </div>
            <!-- rightOv -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('folliculometry.rightOv.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.rightOv" 
                        :placeholder="$t('folliculometry.rightOv.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.rightOv.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.rightOv.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.rightOv.$error && !$v.rowToAdd.rightOv.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('folliculometry.rightOv.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.rightOv.minLength &&  $v.rowToAdd.rightOv.$error" class="invalid-feedback">
                            {{minLengthError($t('folliculometry.rightOv.label'), $v.rowToAdd.rightOv.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.rightOv.maxLength &&  $v.rowToAdd.rightOv.$error" class="invalid-feedback">
                            {{maxLengthError($t('folliculometry.rightOv.label'), $v.rowToAdd.rightOv.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- rFollicles -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('folliculometry.rFollicles.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.rFollicles" 
                        :placeholder="$t('folliculometry.rFollicles.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.rFollicles.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.rFollicles.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.rFollicles.$error && !$v.rowToAdd.rFollicles.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('folliculometry.rFollicles.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.rFollicles.minLength &&  $v.rowToAdd.rFollicles.$error" class="invalid-feedback">
                            {{minLengthError($t('folliculometry.rFollicles.label'), $v.rowToAdd.rFollicles.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.rFollicles.maxLength &&  $v.rowToAdd.rFollicles.$error" class="invalid-feedback">
                            {{maxLengthError($t('folliculometry.rFollicles.label'), $v.rowToAdd.rFollicles.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- rSize -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('folliculometry.rSize.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.rSize" 
                        :placeholder="$t('folliculometry.rSize.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.rSize.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.rSize.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.rSize.$error && !$v.rowToAdd.rSize.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('folliculometry.rSize.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.rSize.minLength &&  $v.rowToAdd.rSize.$error" class="invalid-feedback">
                            {{minLengthError($t('folliculometry.rSize.label'), $v.rowToAdd.rSize.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.rSize.maxLength &&  $v.rowToAdd.rSize.$error" class="invalid-feedback">
                            {{maxLengthError($t('folliculometry.rSize.label'), $v.rowToAdd.rSize.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- leftOv -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('folliculometry.leftOv.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.leftOv" 
                        :placeholder="$t('folliculometry.leftOv.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.leftOv.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.leftOv.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.leftOv.$error && !$v.rowToAdd.leftOv.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('folliculometry.leftOv.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.leftOv.minLength &&  $v.rowToAdd.leftOv.$error" class="invalid-feedback">
                            {{minLengthError($t('folliculometry.leftOv.label'), $v.rowToAdd.leftOv.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.leftOv.maxLength &&  $v.rowToAdd.leftOv.$error" class="invalid-feedback">
                            {{maxLengthError($t('folliculometry.leftOv.label'), $v.rowToAdd.leftOv.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('folliculometry.lFollicles.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.lFollicles" 
                        :placeholder="$t('folliculometry.lFollicles.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.lFollicles.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.lFollicles.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.lFollicles.$error && !$v.rowToAdd.lFollicles.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('folliculometry.lFollicles.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.lFollicles.minLength &&  $v.rowToAdd.lFollicles.$error" class="invalid-feedback">
                            {{minLengthError($t('folliculometry.lFollicles.label'), $v.rowToAdd.lFollicles.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.lFollicles.maxLength &&  $v.rowToAdd.lFollicles.$error" class="invalid-feedback">
                            {{maxLengthError($t('folliculometry.lFollicles.label'), $v.rowToAdd.lFollicles.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- lSize -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('folliculometry.lSize.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.lSize" 
                        :placeholder="$t('folliculometry.lSize.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.lSize.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.lSize.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.lSize.$error && !$v.rowToAdd.lSize.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('folliculometry.lSize.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.lSize.minLength &&  $v.rowToAdd.lSize.$error" class="invalid-feedback">
                            {{minLengthError($t('folliculometry.lSize.label'), $v.rowToAdd.lSize.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.lSize.maxLength &&  $v.rowToAdd.lSize.$error" class="invalid-feedback">
                            {{maxLengthError($t('folliculometry.lSize.label'), $v.rowToAdd.lSize.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- endometrium -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('folliculometry.endometrium.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.endometrium" 
                        :placeholder="$t('folliculometry.endometrium.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.endometrium.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.endometrium.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.endometrium.$error && !$v.rowToAdd.endometrium.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('folliculometry.endometrium.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.endometrium.minLength &&  $v.rowToAdd.endometrium.$error" class="invalid-feedback">
                            {{minLengthError($t('folliculometry.endometrium.label'), $v.rowToAdd.endometrium.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.endometrium.maxLength &&  $v.rowToAdd.endometrium.$error" class="invalid-feedback">
                            {{maxLengthError($t('folliculometry.endometrium.label'), $v.rowToAdd.endometrium.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- dp -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('folliculometry.dp.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.dp" 
                        :placeholder="$t('folliculometry.dp.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.dp.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.dp.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.dp.$error && !$v.rowToAdd.dp.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('folliculometry.dp.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.dp.minLength &&  $v.rowToAdd.dp.$error" class="invalid-feedback">
                            {{minLengthError($t('folliculometry.dp.label'), $v.rowToAdd.dp.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.dp.maxLength &&  $v.rowToAdd.dp.$error" class="invalid-feedback">
                            {{maxLengthError($t('folliculometry.dp.label'), $v.rowToAdd.dp.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- modifications -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('folliculometry.modifications.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.modifications" 
                        :placeholder="$t('folliculometry.modifications.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.modifications.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.modifications.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.modifications.$error && !$v.rowToAdd.modifications.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('folliculometry.modifications.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.modifications.minLength &&  $v.rowToAdd.modifications.$error" class="invalid-feedback">
                            {{minLengthError($t('folliculometry.modifications.label'), $v.rowToAdd.modifications.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.modifications.maxLength &&  $v.rowToAdd.modifications.$error" class="invalid-feedback">
                            {{maxLengthError($t('folliculometry.modifications.label'), $v.rowToAdd.modifications.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- nextVisit -->
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('folliculometry.nextVisit.label') }}</label>
                <Calendar
                    v-model="rowToAdd.nextVisit"
                    :placeholder="$t('folliculometry.nextVisit.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToAdd.nextVisit.$error && !$v.rowToAdd.nextVisit.validDate) ||
                        (serializer_error.expirationDate? serializer_error.rowToAdd.nextVisit.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="formateNextVisitDate"
                />
                <small
                    class="p-invalid"
                    v-if="$v.rowToAdd.nextVisit.$error && !$v.rowToAdd.nextVisit.validDate"
                >
                    {{ dateError($t('folliculometry.nextVisit.label'))}}
                </small>
                <small
                    class="p-invalid"
                    v-if="$v.rowToAdd.nextVisit.$error && !$v.rowToAdd.nextVisit.compareDates"
                >
                    {{ inputError($t('folliculometry.nextVisit.label'))}}
                </small>
                
              </div>
            </div>
            <!-- addRow btn -->
            <div class="col-md-4">
                <AddButton @add="addRow"></AddButton>
            </div>
        </div>
    </Base>
    <!-- Table -->
    <div class="table-wrapper my-2" v-if="folliculometry.length>0">
      <Base >
        <div class="row my-2">      
          <div class="col-12">
            <div class="table-responsive">
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('folliculometry.lmp.label')}}</th>
                            <th scope="col">{{$t('folliculometry.date.label')}}</th>
                            <th scope="col">{{$t('folliculometry.day.label')}}</th>
                            <th scope="col">{{$t('folliculometry.rightOv.label')}}</th>
                            <th scope="col">{{$t('folliculometry.rFollicles.label')}}</th>
                            <th scope="col">{{$t('folliculometry.rSize.label')}}</th>
                            <th scope="col">{{$t('folliculometry.leftOv.label')}}</th>
                            <th scope="col">{{$t('folliculometry.lFollicles.label')}}</th>
                            <th scope="col">{{$t('folliculometry.lSize.label')}}</th>
                            <th scope="col">{{$t('folliculometry.endometrium.label')}}</th>
                            <th scope="col">{{$t('folliculometry.dp.label')}}</th>
                            <th scope="col">{{$t('folliculometry.modifications.label')}}</th>
                            <th scope="col">{{$t('folliculometry.nextVisit.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in folliculometry" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <span>{{val.lmp}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.date}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.day}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.rightOv}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.rFollicles}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.rSize}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.leftOv}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.lFollicles}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.lSize}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.endometrium}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.dp}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.modifications}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.nextVisit}}</span>
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
    <EditDialog :header="$t('folliculometry.header')" :display="displayEditModal" @cancel="closeEditDialog"  @close="closeEditDialog" @save="editRow">    
      <div class="row">
        <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('folliculometry.lmp.label') }}</label>
                <Calendar
                    v-model="rowToEdit.lmp"
                    :placeholder="$t('folliculometry.lmp.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToEdit.lmp.$error) ||
                        (serializer_error.expirationDate? serializer_error.rowToEdit.lmp.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="formateLmpDateEdit($event)"
                    
                />
                <small v-if="$v.rowToEdit.lmp.$error && !$v.rowToEdit.lmp.required"
                      class="p-invalid" 
                >
                    {{ requiredError($t('folliculometry.lmp.label'))}}
                </small>
                <small v-if="$v.rowToEdit.lmp.$error && !$v.rowToEdit.lmp.validDate"
                      class="p-invalid" 
                >
                    {{ dateError($t('folliculometry.lmp.label'))}}
                </small>
                <small v-if="$v.rowToEdit.lmp.$error && !$v.rowToEdit.lmp.compareDates"
                      class="p-invalid" 
                >
                    {{ inputError($t('folliculometry.lmp.label'))}}
                </small>
              </div>
          </div>
          <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('folliculometry.date.label') }}</label>
                <Calendar
                    v-model="rowToEdit.date"
                    :placeholder="$t('folliculometry.date.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToEdit.date.$error && !$v.rowToEdit.date.validDate) ||
                        (serializer_error.expirationDate? serializer_error.rowToEdit.date.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="formateDateEdit($event)"
                />
                <small v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.validDate"
                      class="p-invalid" 
                >
                    {{ dateError($t('folliculometry.date.label'))}}
                </small>
                <small v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.compareDates"
                      class="p-invalid" 
                >
                    {{ inputError($t('folliculometry.date.label'))}}
                </small>
              </div>
          </div>
          <!-- day -->
          <div class="col-md-4">
              <div class="form-group">
              <label for="" class="form-label">{{$t('folliculometry.day.label')}}</label>
              <input 
                  type="number" 
                  v-model="rowToEdit.day"
                  class="form-control" 
                  :class="{ 
                      'is-invalid':
                      $v.rowToEdit.day.$invalid && $v.rowToEdit.day.$anyDirty && $v.rowToEdit.day.$anyError
                  }"
                  >
                  <div v-if="$v.rowToEdit.day.$error && !$v.rowToEdit.day.numeric" class="invalid-feedback">
                          {{numericError($t('folliculometry.day.label'))}}
                  </div>
                  <div v-if="$v.rowToEdit.day.$error && !$v.rowToEdit.day.maxValue" class="invalid-feedback">
                        {{maxValueError($t('folliculometry.day.label'),$v.rowToEdit.day.$params.maxValue.max)}}
                    </div>
              </div>
          </div>
          <!-- rightOv -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('folliculometry.rightOv.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.rightOv" 
                      :placeholder="$t('folliculometry.rightOv.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.rightOv.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.rightOv.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.rightOv.$error && !$v.rowToEdit.rightOv.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('folliculometry.rightOv.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.rightOv.minLength &&  $v.rowToEdit.rightOv.$error" class="invalid-feedback">
                          {{minLengthError($t('folliculometry.rightOv.label'), $v.rowToEdit.rightOv.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.rightOv.maxLength &&  $v.rowToEdit.rightOv.$error" class="invalid-feedback">
                          {{maxLengthError($t('folliculometry.rightOv.label'), $v.rowToEdit.rightOv.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- rFollicles -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('folliculometry.rFollicles.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.rFollicles" 
                      :placeholder="$t('folliculometry.rFollicles.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.rFollicles.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.rFollicles.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.rFollicles.$error && !$v.rowToEdit.rFollicles.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('folliculometry.rFollicles.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.rFollicles.minLength &&  $v.rowToEdit.rFollicles.$error" class="invalid-feedback">
                          {{minLengthError($t('folliculometry.rFollicles.label'), $v.rowToEdit.rFollicles.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.rFollicles.maxLength &&  $v.rowToEdit.rFollicles.$error" class="invalid-feedback">
                          {{maxLengthError($t('folliculometry.rFollicles.label'), $v.rowToEdit.rFollicles.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- rSize -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('folliculometry.rSize.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.rSize" 
                      :placeholder="$t('folliculometry.rSize.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.rSize.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.rSize.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.rSize.$error && !$v.rowToEdit.rSize.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('folliculometry.rSize.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.rSize.minLength &&  $v.rowToEdit.rSize.$error" class="invalid-feedback">
                          {{minLengthError($t('folliculometry.rSize.label'), $v.rowToEdit.rSize.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.rSize.maxLength &&  $v.rowToEdit.rSize.$error" class="invalid-feedback">
                          {{maxLengthError($t('folliculometry.rSize.label'), $v.rowToEdit.rSize.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- leftOv -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('folliculometry.leftOv.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.leftOv" 
                      :placeholder="$t('folliculometry.leftOv.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.leftOv.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.leftOv.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.leftOv.$error && !$v.rowToEdit.leftOv.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('folliculometry.leftOv.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.leftOv.minLength &&  $v.rowToEdit.leftOv.$error" class="invalid-feedback">
                          {{minLengthError($t('folliculometry.leftOv.label'), $v.rowToEdit.leftOv.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.leftOv.maxLength &&  $v.rowToEdit.leftOv.$error" class="invalid-feedback">
                          {{maxLengthError($t('folliculometry.leftOv.label'), $v.rowToEdit.leftOv.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- lSize -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('folliculometry.lSize.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.lSize" 
                      :placeholder="$t('folliculometry.lSize.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.lSize.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.lSize.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.lSize.$error && !$v.rowToEdit.lSize.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('folliculometry.lSize.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.lSize.minLength &&  $v.rowToEdit.lSize.$error" class="invalid-feedback">
                          {{minLengthError($t('folliculometry.lSize.label'), $v.rowToEdit.lSize.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.lSize.maxLength &&  $v.rowToEdit.lSize.$error" class="invalid-feedback">
                          {{maxLengthError($t('folliculometry.lSize.label'), $v.rowToEdit.lSize.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- endometrium -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('folliculometry.endometrium.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.endometrium" 
                      :placeholder="$t('folliculometry.endometrium.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.endometrium.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.endometrium.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.endometrium.$error  && !$v.rowToEdit.endometrium.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('folliculometry.endometrium.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.endometrium.minLength &&  $v.rowToEdit.endometrium.$error" class="invalid-feedback">
                          {{minLengthError($t('folliculometry.endometrium.label'), $v.rowToEdit.endometrium.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.endometrium.maxLength &&  $v.rowToEdit.endometrium.$error" class="invalid-feedback">
                          {{maxLengthError($t('folliculometry.endometrium.label'), $v.rowToEdit.endometrium.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- dp -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('folliculometry.dp.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.dp" 
                      :placeholder="$t('folliculometry.dp.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.dp.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.dp.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.dp.$error && !$v.rowToEdit.dp.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('folliculometry.dp.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.dp.minLength &&  $v.rowToEdit.dp.$error" class="invalid-feedback">
                          {{minLengthError($t('folliculometry.dp.label'), $v.rowToEdit.dp.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.dp.maxLength &&  $v.rowToEdit.dp.$error" class="invalid-feedback">
                          {{maxLengthError($t('folliculometry.dp.label'), $v.rowToEdit.dp.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- modifications -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('folliculometry.modifications.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.modifications" 
                      :placeholder="$t('folliculometry.modifications.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.modifications.$invalid)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.modifications.length>0:false)
                      }" 
                  >
                  <div v-if="!$v.rowToEdit.modifications.$error && $v.rowToEdit.modifications.$invalid && !$v.rowToEdit.modifications.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('folliculometry.modifications.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.modifications.minLength &&  $v.rowToEdit.modifications.$error" class="invalid-feedback">
                          {{minLengthError($t('folliculometry.modifications.label'), $v.rowToEdit.modifications.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.modifications.maxLength &&  $v.rowToEdit.modifications.$error" class="invalid-feedback">
                          {{maxLengthError($t('folliculometry.modifications.label'), $v.rowToEdit.modifications.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- nextVisit -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{ $t('folliculometry.nextVisit.label') }}</label>
                  <Calendar
                      v-model="rowToEdit.nextVisit"
                      :placeholder="$t('folliculometry.nextVisit.placeholder')"
                      :showIcon="true"
                      :class="{
                      'p-invalid':
                          ($v.rowToEdit.nextVisit.$error && !$v.rowToEdit.nextVisit.validDate) ||
                          (serializer_error.expirationDate? serializer_error.rowToEdit.nextVisit.length > 0: false)
                      }"
                      dateFormat="mm-dd-yy"
                      @date-select="formateNextVisitDateEdit"
                  />
                  <small
                      class="p-invalid"
                      v-if="$v.rowToEdit.nextVisit.$error && !$v.rowToEdit.nextVisit.validDate"
                  >
                      {{ dateError($t('folliculometry.nextVisit.label'))}}
                  </small>
                  <small v-if="$v.rowToEdit.nextVisit.$error && !$v.rowToEdit.nextVisit.compareDates"
                        class="p-invalid" 
                  >
                      {{ inputError($t('folliculometry.nextVisit.label'))}}
                  </small>
              </div>
          </div>
      </div>
    </EditDialog>
    <!-- Delete -->
    <DeleteDialog :display="displayDeleteModal" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog> 
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/gynecology/gyn.json"></i18n>
<script>
import { mapActions,mapGetters } from "vuex";
// ////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,numericError, inputError,dateError,requiredError,maxValueError} from '@/validation/errors'
import {minLength,maxLength, numeric,required,maxValue} from "vuelidate/lib/validators";
import {notContainsHtmlTags, validDate} from "@/validation/customValidators";
import { convertDate,compareDates } from "@/helpers/utilities";
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

      inputFile: {},
      rowToAdd:{
        lmp: "", // date 
        date: "", // date 
        day: "", // number
        rightOv: "", // text
        rFollicles: "", // text
        rSize: "", // text
        leftOv: "", // text
        lFollicles: "", // text
        lSize: "", // text
        endometrium: "", // text
        dp: "", // text
        modifications: "", // text
        nextVisit: "" // date
      },
      rowToEdit:{

      },
      indexToEdit:null,
      displayEditModal: false,
      indexToDelete:null,
      displayDeleteModal: false,
      errorDate: false,
      errorDateEdit: false
    }
  },
  validations:{
    rowToAdd:{
        lmp: {
          required,
          validDate(value) {
              return validDate(value);
          },
          compareDates: (value,vm) => {
              if (!(value && vm.date))
                  return true;
              else {
                return compareDates(value,vm.date) > 0;
              }
          }
        }, // date 
        date: {
          validDate(value) {
              return validDate(value);
          },
          compareDates: (value,vm) => {
              if (!(value && vm.lmp))
                  return true;
              else {
                return compareDates(vm.lmp,value) > 0;
              }
          }
        }, // date 
        day: {
            numeric,
            maxValue:maxValue(100)
        },
        rightOv: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        rFollicles: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        rSize: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        leftOv: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        lFollicles: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        lSize: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        endometrium: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        dp: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        modifications: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        nextVisit: {
            validDate(value) {
                return validDate(value);
            },
            compareDates: (value,vm) => {
              if (!(value && vm.date))
                  return true;
              else 
                return compareDates(value,vm.date) > 20;
              
          }
        }
    },
    rowToEdit:{
        lmp: {
          required,
          validDate(value) {
              return validDate(value);
          },
          compareDates: (value,vm) => {
              if (!(value && vm.date))
                  return true;
              else {
                return compareDates(value,vm.date) > 0;
              }
          }
        }, // date 
        date: {
          validDate(value) {
              return validDate(value);
          },
          compareDates: (value,vm) => {
              if (!(value && vm.lmp))
                  return true;
              else {
                return compareDates(vm.lmp,value) > 0;
              }
          }
        }, // date 
        day: {
            numeric,
            maxValue:maxValue(100)
        },
        rightOv: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        rFollicles: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        rSize: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        leftOv: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        lFollicles: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        lSize: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        endometrium: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        dp: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        modifications: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        nextVisit: {
            validDate(value) {
                return validDate(value);
            },
            compareDates: (value,vm) => {
              if (!(value && vm.date))
                  return true;
              else {
                return compareDates(value,vm.date) > 20;
              }
          }
        }
    }
  },
  

  computed: {

    // mix the getters into computed with object spread operator
    ...mapGetters('detailsGynecology/gynecology',{
        'getFolliculometry':'getFolliculometry',
    }),
    folliculometry:{
      get() {
          return this.getFolliculometry;
      },
      set(value) {
          this.setFolliculometry(value);
      }
    },
  },
  watch: {},
  methods: {
      inputError,
      dateError,
      htmlTagsError,
      maxLengthError,
      minLengthError,
      numericError,
      requiredError,
      maxValueError,
        ...mapActions("detailsGynecology/gynecology", [
            "setFolliculometry",
        ]),
        formateLmpDate(event){
          this.rowToAdd.lmp = convertDate(event);
        },
        formateDate(event){
          this.rowToAdd.date = convertDate(event);  
        },
        formateNextVisitDate(event){
          this.rowToAdd.nextVisit = convertDate(event);
        },
        formateLmpDateEdit(event){
          this.rowToEdit.lmp = convertDate(event);
        },
        formateDateEdit(event){
          this.rowToEdit.date = convertDate(event);  
        },
        formateNextVisitDateEdit(event){
          this.rowToEdit.nextVisit = convertDate(event);
        },
        resetForm(){
          this.rowToAdd = {
            lmp: "", // date 
            date: "", // date 
            day: "", // number
            rightOv: "", // text
            rFollicles: "", // text
            rSize: "", // text
            leftOv: "", // text
            lFollicles: "", // text
            lSize: "", // text
            endometrium: "", // text
            dp: "", // text
            modifications: "", // text
            nextVisit: "" // date
          }
          this.$v.rowToAdd.$reset();
        },
        reset(){
            this.resetForm();
            this.folliculometry=[]
        },
        /////////////////////////
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
            this.folliculometry.push({...this.rowToAdd});
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
            // this.folliculometry[this.indexToEdit]={...this.rowToEdit};
            this.folliculometry.splice(this.indexToEdit,1,{...this.rowToEdit});
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
            this.folliculometry.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    },
};
</script>
<style scoped>

</style>
