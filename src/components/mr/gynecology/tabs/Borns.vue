<template>
    <div class="borns">
      <Base>    
          <div class="row">
            <div class="col-12 d-flex justify-content-between">
              <h4>{{ $t('borns.header') }}</h4>
              <ResetButton @reset="reset"></ResetButton>            
            </div>
          </div>
          <div class="row">
              <!-- bornPlace -->
              <div class="col-md-4">
                  <div class="form-group">
                      <label class="form-label">{{$t('borns.bornPlace.label')}}</label>
                      <input
                          type="text"
                          class="form-control"
                          v-model="rowToAdd.bornPlace" 
                          :placeholder="$t('borns.bornPlace.placeholder')" 
                          :class="{
                              'is-invalid':
                              ($v.rowToAdd.bornPlace.$error)
                              ||
                              (serializer_error.rowToAdd?serializer_error.rowToAdd.bornPlace.length>0:false)
                          }" 
                      >
                      <div v-if="$v.rowToAdd.bornPlace.$error &&  !$v.rowToAdd.bornPlace.required" class="invalid-feedback">
                              {{requiredError($t('borns.bornPlace.label'))}}
                      </div>
                      <div v-if="$v.rowToAdd.bornPlace.$error && !$v.rowToAdd.bornPlace.notContainsHtmlTags" class="invalid-feedback">
                              {{htmlTagsError($t('borns.bornPlace.label'))}}
                      </div>
                      <div v-if="!$v.rowToAdd.bornPlace.minLength &&  $v.rowToAdd.bornPlace.$error" class="invalid-feedback">
                              {{minLengthError($t('borns.bornPlace.label'), $v.rowToAdd.bornPlace.$params.minLength.min)}}
                      </div>
                      <div v-if="! $v.rowToAdd.bornPlace.maxLength &&  $v.rowToAdd.bornPlace.$error" class="invalid-feedback">
                              {{maxLengthError($t('borns.bornPlace.label'), $v.rowToAdd.bornPlace.$params.maxLength.max)}}
                      </div> 
                  </div>
              </div>
              <!-- bornMethod -->
              <div class="col-md-4">
                  <div class="form-group">
                      <label class="form-label">{{$t('borns.bornMethod.label')}}</label>
                      <input
                          type="text"
                          class="form-control"
                          v-model="rowToAdd.bornMethod" 
                          :placeholder="$t('borns.bornMethod.placeholder')" 
                          :class="{
                              'is-invalid':
                              ($v.rowToAdd.bornMethod.$error)
                              ||
                              (serializer_error.rowToAdd?serializer_error.rowToAdd.bornMethod.length>0:false)
                          }" 
                      >
                      <div v-if="$v.rowToAdd.bornMethod.$error && !$v.rowToAdd.bornMethod.notContainsHtmlTags" class="invalid-feedback">
                              {{htmlTagsError($t('borns.bornMethod.label'))}}
                      </div>
                      <div v-if="!$v.rowToAdd.bornMethod.minLength &&  $v.rowToAdd.bornMethod.$error" class="invalid-feedback">
                              {{minLengthError($t('borns.bornMethod.label'), $v.rowToAdd.bornMethod.$params.minLength.min)}}
                      </div>
                      <div v-if="! $v.rowToAdd.bornMethod.maxLength &&  $v.rowToAdd.bornMethod.$error" class="invalid-feedback">
                              {{maxLengthError($t('borns.bornMethod.label'), $v.rowToAdd.bornMethod.$params.maxLength.max)}}
                      </div> 
                  </div>
              </div>
              <!-- bornResult -->
              <div class="col-md-4">
                  <div class="form-group">
                      <label class="form-label">{{$t('borns.bornResult.label')}}</label>
                      <input
                          type="text"
                          class="form-control"
                          v-model="rowToAdd.bornResult" 
                          :placeholder="$t('borns.bornResult.placeholder')" 
                          :class="{
                              'is-invalid':
                              ($v.rowToAdd.bornResult.$error)
                              ||
                              (serializer_error.rowToAdd?serializer_error.rowToAdd.bornResult.length>0:false)
                          }" 
                      >
                      <div v-if="$v.rowToAdd.bornResult.$error && !$v.rowToAdd.bornResult.notContainsHtmlTags" class="invalid-feedback">
                              {{htmlTagsError($t('borns.bornResult.label'))}}
                      </div>
                      <div v-if="! $v.rowToAdd.bornResult.minLength &&  $v.rowToAdd.bornResult.$error" class="invalid-feedback">
                              {{minLengthError($t('borns.bornResult.label'), $v.rowToAdd.bornResult.$params.minLength.min)}}
                      </div>
                      <div v-if="! $v.rowToAdd.bornResult.maxLength &&  $v.rowToAdd.bornResult.$error" class="invalid-feedback">
                              {{maxLengthError($t('borns.bornResult.label'), $v.rowToAdd.bornResult.$params.maxLength.max)}}
                      </div> 
                  </div>
              </div>
              <!-- childComplications -->
              <div class="col-md-4">
                  <div class="form-group">
                      <label class="form-label">{{$t('borns.childComplications.label')}}</label>
                      <input
                          type="text"
                          class="form-control"
                          v-model="rowToAdd.childComplications" 
                          :placeholder="$t('borns.childComplications.placeholder')" 
                          :class="{
                              'is-invalid':
                              ($v.rowToAdd.childComplications.$error)
                              ||
                              (serializer_error.rowToAdd?serializer_error.rowToAdd.childComplications.length>0:false)
                          }" 
                      >
                      <div v-if="$v.rowToAdd.childComplications.$error && !$v.rowToAdd.childComplications.notContainsHtmlTags" class="invalid-feedback">
                              {{htmlTagsError($t('borns.childComplications.label'))}}
                      </div>
                      <div v-if="! $v.rowToAdd.childComplications.minLength &&  $v.rowToAdd.childComplications.$error" class="invalid-feedback">
                              {{minLengthError($t('borns.childComplications.label'), $v.rowToAdd.childComplications.$params.minLength.min)}}
                      </div>
                      <div v-if="! $v.rowToAdd.childComplications.maxLength &&  $v.rowToAdd.childComplications.$error" class="invalid-feedback">
                              {{maxLengthError($t('borns.childComplications.label'), $v.rowToAdd.childComplications.$params.maxLength.max)}}
                      </div> 
                  </div>
              </div>
              <!-- motherComplications -->
              <div class="col-md-4">
                  <div class="form-group">
                      <label class="form-label">{{$t('borns.motherComplications.label')}}</label>
                      <input
                          type="text"
                          class="form-control"
                          v-model="rowToAdd.motherComplications" 
                          :placeholder="$t('borns.motherComplications.placeholder')" 
                          :class="{
                              'is-invalid':
                              ($v.rowToAdd.motherComplications.$error)
                              ||
                              (serializer_error.rowToAdd?serializer_error.rowToAdd.motherComplications.length>0:false)
                          }" 
                      >
                      <div v-if="$v.rowToAdd.motherComplications.$error &&  !$v.rowToAdd.motherComplications.notContainsHtmlTags" class="invalid-feedback">
                              {{htmlTagsError($t('borns.motherComplications.label'))}}
                      </div>
                      <div v-if="! $v.rowToAdd.motherComplications.minLength &&  $v.rowToAdd.motherComplications.$error" class="invalid-feedback">
                              {{minLengthError($t('borns.motherComplications.label'), $v.rowToAdd.motherComplications.$params.minLength.min)}}
                      </div>
                      <div v-if="! $v.rowToAdd.motherComplications.maxLength &&  $v.rowToAdd.motherComplications.$error" class="invalid-feedback">
                              {{maxLengthError($t('borns.motherComplications.label'), $v.rowToAdd.motherComplications.$params.maxLength.max)}}
                      </div> 
                  </div>
              </div>
              <!-- pregnancyNumber -->
              <div class="col-md-4">
                  <div class="form-group">
                  <label for="" class="form-label">{{$t('borns.pregnancyNumber.label')}}</label>
                  <input 
                      type="number" 
                      v-model="rowToAdd.pregnancyNumber"
                      :placeholder="$t('borns.pregnancyNumber.placeholder')"
                      class="form-control" 
                      :class="{ 
                          'is-invalid':
                          $v.rowToAdd.pregnancyNumber.$error
                      }"
                      >
                      <div v-if="$v.rowToAdd.pregnancyNumber.$error && !$v.rowToAdd.pregnancyNumber.numeric" class="invalid-feedback">
                              {{numericError($t('borns.pregnancyNumber.label'))}}
                      </div>
                  </div>
              </div>
              <!-- pregnancyPeriod -->
              <div class="col-md-4">
                  <div class="form-group">
                  <label for="" class="form-label">{{$t('borns.pregnancyPeriod.label')}}</label>
                  <input 
                      type="number" 
                      v-model="rowToAdd.pregnancyPeriod"
                      :placeholder="$t('borns.pregnancyPeriod.placeholder')"
                      class="form-control" 
                      :class="{'is-invalid':$v.rowToAdd.pregnancyPeriod.$error}"
                      >
                      <div v-if="$v.rowToAdd.pregnancyPeriod.$error && !$v.rowToAdd.pregnancyPeriod.numeric" class="invalid-feedback">
                              {{numericError($t('borns.pregnancyPeriod.label'))}}
                      </div>
                  </div>
              </div>
              <!-- ago -->
              <div class="col-md-4">
                  <div class="form-group">
                      <label class="form-label">{{$t('borns.ago.label')}}</label>
                      <input
                          type="text"
                          class="form-control"
                          v-model="rowToAdd.ago" 
                          :placeholder="$t('borns.ago.placeholder')" 
                          :class="{
                              'is-invalid':
                              ($v.rowToAdd.ago.$error)
                              ||
                              (serializer_error.rowToAdd?serializer_error.rowToAdd.ago.length>0:false)
                          }" 
                      >
                      <div v-if="$v.rowToAdd.ago.$error && !$v.rowToAdd.ago.notContainsHtmlTags" class="invalid-feedback">
                              {{htmlTagsError($t('borns.ago.label'))}}
                      </div>
                      <div v-if="! $v.rowToAdd.ago.minLength &&  $v.rowToAdd.ago.$error" class="invalid-feedback">
                              {{minLengthError($t('borns.ago.label'), $v.rowToAdd.ago.$params.minLength.min)}}
                      </div>
                      <div v-if="! $v.rowToAdd.ago.maxLength &&  $v.rowToAdd.ago.$error" class="invalid-feedback">
                              {{maxLengthError($t('borns.ago.label'), $v.rowToAdd.ago.$params.maxLength.max)}}
                      </div> 
                  </div>
              </div>
              <!-- remarks -->
              <div class="col-md-4">
                  <div class="form-group">
                      <label class="form-label">{{$t('borns.remarks.label')}}</label>
                      <input
                          type="text"
                          class="form-control"
                          v-model="rowToAdd.remarks" 
                          :placeholder="$t('borns.remarks.placeholder')" 
                          :class="{
                              'is-invalid':
                              ($v.rowToAdd.remarks.$error)
                              ||
                              (serializer_error.rowToAdd?serializer_error.rowToAdd.remarks.length>0:false)
                          }" 
                      >
                      <div v-if="$v.rowToAdd.remarks.$error && !$v.rowToAdd.remarks.notContainsHtmlTags" class="invalid-feedback">
                              {{htmlTagsError($t('borns.remarks.label'))}}
                      </div>
                      <div v-if="!$v.rowToAdd.remarks.minLength &&  $v.rowToAdd.remarks.$error" class="invalid-feedback">
                              {{minLengthError($t('borns.remarks.label'), $v.rowToAdd.ago.$params.minLength.min)}}
                      </div>
                      <div v-if="! $v.rowToAdd.remarks.maxLength &&  $v.rowToAdd.remarks.$error" class="invalid-feedback">
                              {{maxLengthError($t('borns.remarks.label'), $v.rowToAdd.ago.$params.maxLength.max)}}
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
      <div class="table-wrapper my-2" v-if="borns.length>0">
        <Base >
          <div class="row my-2">      
            <div class="col-12">
              <div class="table-responsive">
                  <table class="table table-sm text-center">
                      <thead>
                          <tr>
                              <th scope="col">{{$t('table.thead.count')}}</th>
                              <th scope="col">{{$t('borns.bornPlace.label')}}</th>
                              <th scope="col">{{$t('borns.bornMethod.label')}}</th>
                              <th scope="col">{{$t('borns.bornResult.label')}}</th>
                              <th scope="col">{{$t('borns.childComplications.label')}}</th>
                              <th scope="col">{{$t('borns.motherComplications.label')}}</th>
                              <th scope="col">{{$t('borns.pregnancyNumber.label')}}</th>
                              <th scope="col">{{$t('borns.pregnancyPeriod.label')}}</th>
                              <th scope="col">{{$t('borns.ago.label')}}</th>
                              <th scope="col">{{$t('borns.remarks.label')}}</th>
                              <th scope="col">{{$t('table.thead.controls')}}</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="(val, index) in borns" :key="index">
                              <td class="align-middle">{{parseInt(index)+1}}</td>
                              <td class="align-middle">
                                  <span>{{val.bornPlace}}</span>
                              </td>
                              <td class="align-middle">
                                  <span>{{val.bornMethod}}</span>
                              </td>
                              <td class="align-middle">
                                  <span>{{val.bornResult}}</span>
                              </td>
                              <td class="align-middle">
                                  <span>{{val.childComplications}}</span>
                              </td>
                              <td class="align-middle">
                                  <span>{{val.motherComplications}}</span>
                              </td>
                              <td class="align-middle">
                                  <span>{{val.pregnancyNumber}}</span>
                              </td>
                              <td class="align-middle">
                                  <span>{{val.pregnancyPeriod}}</span>
                              </td>
                              <td class="align-middle">
                                  <span>{{val.ago}}</span>
                              </td>
                              <td class="align-middle">
                                  <span>{{val.remarks}}</span>
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
      <EditDialog :header="$t('borns.header')" :display="displayEditModal" @cancel="closeEditDialog" @close="closeEditDialog" @save="editRow">    
        <div class="row">
            <!-- bornPlace -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('borns.bornPlace.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.bornPlace" 
                        :placeholder="$t('borns.bornPlace.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.bornPlace.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.bornPlace.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.bornPlace.$error &&  !$v.rowToEdit.bornPlace.required" class="invalid-feedback">
                              {{requiredError($t('borns.bornPlace.label'))}}
                      </div>
                    <div v-if="$v.rowToEdit.bornPlace.$error && !$v.rowToEdit.bornPlace.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('borns.bornPlace.label'))}}
                    </div>
                    <div v-if="!$v.rowToEdit.bornPlace.minLength &&  $v.rowToEdit.bornPlace.$error" class="invalid-feedback">
                            {{minLengthError($t('borns.bornPlace.label'), $v.rowToEdit.bornPlace.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.bornPlace.maxLength &&  $v.rowToEdit.bornPlace.$error" class="invalid-feedback">
                            {{maxLengthError($t('borns.bornPlace.label'), $v.rowToEdit.bornPlace.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- bornMethod -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('borns.bornMethod.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.bornMethod" 
                        :placeholder="$t('borns.bornMethod.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.bornMethod.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.bornMethod.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.bornMethod.$error && !$v.rowToEdit.bornMethod.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('borns.bornMethod.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.bornMethod.minLength &&  $v.rowToEdit.bornMethod.$error" class="invalid-feedback">
                            {{minLengthError($t('borns.bornMethod.label'), $v.rowToEdit.bornMethod.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.bornMethod.maxLength &&  $v.rowToEdit.bornMethod.$error" class="invalid-feedback">
                            {{maxLengthError($t('borns.bornMethod.label'), $v.rowToEdit.bornMethod.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- bornMethod -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('borns.bornResult.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.bornResult" 
                        :placeholder="$t('borns.bornResult.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.bornResult.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.bornResult.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.bornResult.$error && !$v.rowToEdit.bornResult.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('borns.bornResult.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.bornResult.minLength &&  $v.rowToEdit.bornResult.$error" class="invalid-feedback">
                            {{minLengthError($t('borns.bornResult.label'), $v.rowToEdit.bornResult.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.bornResult.maxLength &&  $v.rowToEdit.bornResult.$error" class="invalid-feedback">
                            {{maxLengthError($t('borns.bornResult.label'), $v.rowToEdit.bornResult.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- childComplications -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('borns.childComplications.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.childComplications" 
                        :placeholder="$t('borns.childComplications.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.childComplications.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.childComplications.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.childComplications.$error && !$v.rowToEdit.childComplications.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('borns.childComplications.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.childComplications.minLength &&  $v.rowToEdit.childComplications.$error" class="invalid-feedback">
                            {{minLengthError($t('borns.childComplications.label'), $v.rowToEdit.childComplications.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.childComplications.maxLength &&  $v.rowToEdit.childComplications.$error" class="invalid-feedback">
                            {{maxLengthError($t('borns.childComplications.label'), $v.rowToEdit.childComplications.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- motherComplications -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('borns.motherComplications.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.motherComplications" 
                        :placeholder="$t('borns.motherComplications.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.motherComplications.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.motherComplications.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.motherComplications.$error && !$v.rowToEdit.motherComplications.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('borns.childComplications.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.motherComplications.minLength &&  $v.rowToEdit.motherComplications.$error" class="invalid-feedback">
                            {{minLengthError($t('borns.motherComplications.label'), $v.rowToEdit.motherComplications.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.motherComplications.maxLength &&  $v.rowToEdit.motherComplications.$error" class="invalid-feedback">
                            {{maxLengthError($t('borns.motherComplications.label'), $v.rowToEdit.motherComplications.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- pregnancyNumber -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('borns.pregnancyNumber.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.pregnancyNumber"
                    :placeholder="$t('borns.pregnancyNumber.placeholder')"
                    class="form-control" 
                    :class="{ 'is-invalid':$v.rowToEdit.pregnancyNumber.$error}"
                    >
                    <div v-if="$v.rowToEdit.pregnancyNumber.$error && !$v.rowToEdit.pregnancyNumber.numeric" class="invalid-feedback">
                            {{numericError($t('borns.pregnancyNumber.label'))}}
                    </div>
                </div>
            </div>
            <!-- pregnancyPeriod -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('borns.pregnancyPeriod.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.pregnancyPeriod"
                    :placeholder="$t('borns.pregnancyPeriod.placeholder')"
                    class="form-control" 
                    :class="{ 'is-invalid': $v.rowToEdit.pregnancyPeriod.$error }"
                    >
                    <div v-if="$v.rowToEdit.pregnancyPeriod.$error && !$v.rowToEdit.pregnancyPeriod.numeric" class="invalid-feedback">
                            {{numericError($t('borns.pregnancyPeriod.label'))}}
                    </div>
                </div>
            </div>
            <!-- ago -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('borns.ago.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.ago" 
                        :placeholder="$t('borns.ago.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.ago.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.ago.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.ago.$error && !$v.rowToEdit.ago.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('borns.childComplications.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.ago.minLength &&  $v.rowToEdit.ago.$error" class="invalid-feedback">
                            {{minLengthError($t('borns.ago.label'), $v.rowToEdit.ago.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.ago.maxLength &&  $v.rowToEdit.ago.$error" class="invalid-feedback">
                            {{maxLengthError($t('borns.ago.label'), $v.rowToEdit.ago.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- remarks -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('borns.remarks.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.remarks" 
                        :placeholder="$t('borns.remarks.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.remarks.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.remarks.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.remarks.$error && !$v.rowToEdit.remarks.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('borns.childComplications.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.remarks.minLength &&  $v.rowToEdit.remarks.$error" class="invalid-feedback">
                            {{minLengthError($t('borns.remarks.label'), $v.rowToEdit.remarks.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.remarks.maxLength &&  $v.rowToEdit.remarks.$error" class="invalid-feedback">
                            {{maxLengthError($t('borns.remarks.label'), $v.rowToEdit.remarks.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
        </div>
      </EditDialog>
      <!-- Delete -->
      <DeleteDialog :display="displayDeleteModal" @cancel="closeDeleteDialog"  @delete="deleteRow"></DeleteDialog> 
    </div>
  </template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/mr/gynecology/borns.json"></i18n>
  <script>
  import { mapActions,mapGetters } from "vuex";
  // ////////////////////////////////////////////////////////
  import {htmlTagsError,minLengthError,maxLengthError,numericError,requiredError} from '@/validation/errors'
  import {minLength,maxLength,numeric,required} from "vuelidate/lib/validators";
  import {notContainsHtmlTags} from "@/validation/customValidators";
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
          bornPlace: "", 
          bornMethod: "", 
          bornResult: "", 
          childComplications: "", 
          motherComplications: "", 
          pregnancyNumber: "", 
          pregnancyPeriod: "", 
          ago:"",
          remarks:"",
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
          bornPlace: {
              required,
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          bornMethod: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          bornResult: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          childComplications: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          motherComplications: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          pregnancyNumber: {
              numeric
          },
          pregnancyPeriod: {
              numeric
          },
          ago: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          remarks: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
      },
      rowToEdit:{ 
          bornPlace: {
              required,
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          bornMethod: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          bornResult: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          childComplications: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          motherComplications: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          pregnancyNumber: {
              numeric
          },
          pregnancyPeriod: {
              numeric
          },
          ago: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          remarks: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
      }
    },
    
  
    computed: {
        
      // mix the getters into computed with object spread operator
      ...mapGetters('detailsGynecology/gynecology',{
          'getBorns':'getBorns',
      }),
      borns:{
        get() {
            return this.getBorns;
        },
        set(value) {
            this.setBorns(value);
        }
      },
    },
    watch: {},
    methods: {
        numericError,
        htmlTagsError,
        maxLengthError,
        minLengthError,
        requiredError,
          ...mapActions("detailsGynecology/gynecology", [
              "setBorns",
          ]),
          resetForm(){
            this.rowToAdd = {
              bornPlace: "",
              bornMethod: "", 
              bornResult: "",
              childComplications: "",
              motherComplications: "",
              pregnancyNumber: "",
              pregnancyPeriod: "",
              ago: "", 
              remarks: "", 
            }
            this.$v.rowToAdd.$reset();
          },
          reset(){
              this.resetForm();
              this.borns=[]
          },
          /////////////////////////
          addRow(){
            this.v.$touch();
            this.$v.rowToAdd.$touch();
            if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
              this.borns.push({...this.rowToAdd});
              this.resetForm();
            }
          },
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
              // this.diagnosis[this.indexToEdit]={...this.rowToEdit};
              this.borns.splice(this.indexToEdit,1,{...this.rowToEdit});
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
              this.borns.splice(this.indexToDelete,1);
              this.closeDeleteDialog();
          },
      },
  };
  </script>
  <style scoped>
  
  </style>
  