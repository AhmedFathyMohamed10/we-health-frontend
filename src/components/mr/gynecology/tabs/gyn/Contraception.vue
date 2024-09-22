<template>
    <div class="contraception">
      <Base>    
          <div class="row">
            <div class="col-12 d-flex justify-content-between">
              <h4>{{ $t('contraception.header') }}</h4>
              <ResetButton @reset="reset"></ResetButton>            
            </div>
          </div>
          <div class="row">
              <div class="col-md-4">
                  <div class="form-group">
                    <label class="form-label">{{ $t('contraception.date.label') }}</label>
                    <Calendar
                        v-model="rowToAdd.date"
                        :placeholder="$t('contraception.date.placeholder')"
                        :showIcon="true"
                        :class="{
                        'p-invalid':
                            ($v.rowToAdd.date.$error) ||
                            (serializer_error.expirationDate? serializer_error.rowToAdd.date.length > 0: false)
                        }"
                        dateFormat="mm-dd-yy"
                        @date-select="formateDate($event)"
                    />
                    <small v-if="$v.rowToAdd.date.$error && !$v.rowToAdd.date.required"
                          class="p-invalid">
                        {{ requiredError($t('contraception.date.label'))}}
                    </small>
                    <small v-if="$v.rowToAdd.date.$error && !$v.rowToAdd.date.validDate"
                          class="p-invalid">
                        {{ dateError($t('contraception.date.label'))}}
                    </small>
                  </div>
              </div>
              <!-- pills -->
              <div class="col-md-4">
                  <div class="form-group">
                      <label class="form-label">{{$t('contraception.pills.label')}}</label>
                      <input
                          type="text"
                          class="form-control"
                          v-model="rowToAdd.pills" 
                          :placeholder="$t('contraception.pills.placeholder')" 
                          :class="{
                              'is-invalid':
                              ($v.rowToAdd.pills.$error)
                              ||
                              (serializer_error.rowToAdd?serializer_error.rowToAdd.pills.length>0:false)
                          }" 
                      >
                      <div v-if="$v.rowToAdd.pills.$error && !$v.rowToAdd.pills.notContainsHtmlTags" class="invalid-feedback">
                              {{htmlTagsError($t('contraception.pills.label'))}}
                      </div>
                      <div v-if="! $v.rowToAdd.pills.minLength &&  $v.rowToAdd.pills.$error" class="invalid-feedback">
                              {{minLengthError($t('contraception.pills.label'), $v.rowToAdd.pills.$params.minLength.min)}}
                      </div>
                      <div v-if="! $v.rowToAdd.pills.maxLength &&  $v.rowToAdd.pills.$error" class="invalid-feedback">
                              {{maxLengthError($t('contraception.pills.label'), $v.rowToAdd.pills.$params.maxLength.max)}}
                      </div> 
                  </div>
              </div>
              <!-- loop -->
              <div class="col-md-4">
                  <div class="form-group">
                      <label class="form-label">{{$t('contraception.loop.label')}}</label>
                      <input
                          type="text"
                          class="form-control"
                          v-model="rowToAdd.loop" 
                          :placeholder="$t('contraception.loop.placeholder')" 
                          :class="{
                              'is-invalid':
                              ($v.rowToAdd.loop.$error)
                              ||
                              (serializer_error.rowToAdd?serializer_error.rowToAdd.loop.length>0:false)
                          }" 
                      >
                      <div v-if="$v.rowToAdd.loop.$error && !$v.rowToAdd.loop.notContainsHtmlTags" class="invalid-feedback">
                              {{htmlTagsError($t('contraception.loop.label'))}}
                      </div>
                      <div v-if="! $v.rowToAdd.loop.minLength &&  $v.rowToAdd.loop.$error" class="invalid-feedback">
                              {{minLengthError($t('contraception.loop.label'), $v.rowToAdd.loop.$params.minLength.min)}}
                      </div>
                      <div v-if="! $v.rowToAdd.loop.maxLength &&  $v.rowToAdd.loop.$error" class="invalid-feedback">
                              {{maxLengthError($t('contraception.loop.label'), $v.rowToAdd.loop.$params.maxLength.max)}}
                      </div> 
                  </div>
              </div>
              <!-- injection -->
              <div class="col-md-4">
                  <div class="form-group">
                      <label class="form-label">{{$t('contraception.injection.label')}}</label>
                      <input
                          type="text"
                          class="form-control"
                          v-model="rowToAdd.injection" 
                          :placeholder="$t('contraception.injection.placeholder')" 
                          :class="{
                              'is-invalid':
                              ($v.rowToAdd.injection.$error)
                              ||
                              (serializer_error.rowToAdd?serializer_error.rowToAdd.injection.length>0:false)
                          }" 
                      >
                      <div v-if="$v.rowToAdd.injection.$error && !$v.rowToAdd.injection.notContainsHtmlTags" class="invalid-feedback">
                              {{htmlTagsError($t('contraception.injection.label'))}}
                      </div>
                      <div v-if="! $v.rowToAdd.injection.minLength &&  $v.rowToAdd.injection.$error" class="invalid-feedback">
                              {{minLengthError($t('contraception.injection.label'), $v.rowToAdd.injection.$params.minLength.min)}}
                      </div>
                      <div v-if="! $v.rowToAdd.injection.maxLength &&  $v.rowToAdd.injection.$error" class="invalid-feedback">
                              {{maxLengthError($t('contraception.injection.label'), $v.rowToAdd.injection.$params.maxLength.max)}}
                      </div> 
                  </div>
              </div>
              <!-- implanon -->
              <div class="col-md-4">
                  <div class="form-group">
                      <label class="form-label">{{$t('contraception.implanon.label')}}</label>
                      <input
                          type="text"
                          class="form-control"
                          v-model="rowToAdd.implanon" 
                          :placeholder="$t('contraception.implanon.placeholder')" 
                          :class="{
                              'is-invalid':
                              ($v.rowToAdd.implanon.$error)
                              ||
                              (serializer_error.rowToAdd?serializer_error.rowToAdd.implanon.length>0:false)
                          }" 
                      >
                      <div v-if="$v.rowToAdd.implanon.$error && !$v.rowToAdd.implanon.notContainsHtmlTags" class="invalid-feedback">
                              {{htmlTagsError($t('contraception.implanon.label'))}}
                      </div>
                      <div v-if="! $v.rowToAdd.implanon.minLength &&  $v.rowToAdd.implanon.$error" class="invalid-feedback">
                              {{minLengthError($t('contraception.implanon.label'), $v.rowToAdd.implanon.$params.minLength.min)}}
                      </div>
                      <div v-if="! $v.rowToAdd.implanon.maxLength &&  $v.rowToAdd.implanon.$error" class="invalid-feedback">
                              {{maxLengthError($t('contraception.implanon.label'), $v.rowToAdd.implanon.$params.maxLength.max)}}
                      </div> 
                  </div>
              </div>
              <!-- local -->
              <div class="col-md-4">
                  <div class="form-group">
                      <label class="form-label">{{$t('contraception.local.label')}}</label>
                      <input
                          type="text"
                          class="form-control"
                          v-model="rowToAdd.local" 
                          :placeholder="$t('contraception.local.placeholder')" 
                          :class="{
                              'is-invalid':
                              ($v.rowToAdd.local.$error)
                              ||
                              (serializer_error.rowToAdd?serializer_error.rowToAdd.local.length>0:false)
                          }" 
                      >
                      <div v-if="$v.rowToAdd.local.$error && !$v.rowToAdd.local.notContainsHtmlTags" class="invalid-feedback">
                              {{htmlTagsError($t('contraception.local.label'))}}
                      </div>
                      <div v-if="! $v.rowToAdd.local.minLength &&  $v.rowToAdd.local.$error" class="invalid-feedback">
                              {{minLengthError($t('contraception.local.label'), $v.rowToAdd.local.$params.minLength.min)}}
                      </div>
                      <div v-if="! $v.rowToAdd.local.maxLength &&  $v.rowToAdd.local.$error" class="invalid-feedback">
                              {{maxLengthError($t('contraception.local.label'), $v.rowToAdd.local.$params.maxLength.max)}}
                      </div> 
                  </div>
              </div>
              <!-- nextVisit -->
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label">{{ $t('contraception.nextVisit.label') }}</label>
                  <Calendar
                      v-model="rowToAdd.nextVisit"
                      :placeholder="$t('contraception.nextVisit.placeholder')"
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
                      {{ dateError($t('contraception.nextVisit.label'))}}
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
      <div class="table-wrapper my-2" v-if="contraception.length>0">
        <Base >
          <div class="row my-2">      
            <div class="col-12">
              <div class="table-responsive">
                  <table class="table table-sm text-center">
                      <thead>
                          <tr>
                              <th scope="col">{{$t('table.thead.count')}}</th>
                              <th scope="col">{{$t('contraception.date.label')}}</th>
                              <th scope="col">{{$t('contraception.pills.label')}}</th>
                              <th scope="col">{{$t('contraception.loop.label')}}</th>
                              <th scope="col">{{$t('contraception.injection.label')}}</th>
                              <th scope="col">{{$t('contraception.implanon.label')}}</th>
                              <th scope="col">{{$t('contraception.local.label')}}</th>
                              <th scope="col">{{$t('contraception.nextVisit.label')}}</th>
                              <th scope="col">{{$t('table.thead.controls')}}</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="(val, index) in contraception" :key="index">
                              <td class="align-middle">{{parseInt(index)+1}}</td>
                              <td class="align-middle">
                                  <span>{{val.date}}</span>
                              </td>
                              <td class="align-middle">
                                  <span>{{val.pills}}</span>
                              </td>
                              <td class="align-middle">
                                  <span>{{val.loop}}</span>
                              </td>
                              <td class="align-middle">
                                  <span>{{val.injection}}</span>
                              </td>
                              <td class="align-middle">
                                  <span>{{val.implanon}}</span>
                              </td>
                              <td class="align-middle">
                                  <span>{{val.local}}</span>
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
      <EditDialog :header="$t('contraception.header')" :display="displayEditModal" @cancel="closeEditDialog"  @close="closeEditDialog" @save="editRow">    
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label">{{ $t('contraception.date.label') }}</label>
                  <Calendar
                      v-model="rowToEdit.date"
                      :placeholder="$t('contraception.date.placeholder')"
                      :showIcon="true"
                      :class="{
                      'p-invalid':
                          ($v.rowToEdit.date.$error) ||
                          (serializer_error.expirationDate? serializer_error.rowToEdit.date.length > 0: false)
                      }"
                      dateFormat="mm-dd-yy"
                      @date-select="formateDateEdit($event)"
                  />
                  <small v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.required"
                          class="p-invalid">
                        {{ requiredError($t('contraception.date.label'))}}
                    </small>
                  <small v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.validDate"
                        class="p-invalid">
                      {{ dateError($t('contraception.date.label'))}}
                  </small>
                </div>
            </div>
            <!-- pills -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('contraception.pills.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.pills" 
                        :placeholder="$t('contraception.pills.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.pills.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.pills.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.pills.$error  && !$v.rowToEdit.pills.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('contraception.pills.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.pills.minLength &&  $v.rowToEdit.pills.$error" class="invalid-feedback">
                            {{minLengthError($t('contraception.pills.label'), $v.rowToEdit.pills.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.pills.maxLength &&  $v.rowToEdit.pills.$error" class="invalid-feedback">
                            {{maxLengthError($t('contraception.pills.label'), $v.rowToEdit.pills.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- loop -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('contraception.loop.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.loop" 
                        :placeholder="$t('contraception.loop.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.loop.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.loop.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.loop.$error && !$v.rowToEdit.loop.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('contraception.loop.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.loop.minLength &&  $v.rowToEdit.loop.$error" class="invalid-feedback">
                            {{minLengthError($t('contraception.loop.label'), $v.rowToEdit.loop.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.loop.maxLength &&  $v.rowToEdit.loop.$error" class="invalid-feedback">
                            {{maxLengthError($t('contraception.loop.label'), $v.rowToEdit.loop.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- injection -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('contraception.injection.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.injection" 
                        :placeholder="$t('contraception.injection.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.injection.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.injection.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.injection.$error && !$v.rowToEdit.injection.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('contraception.injection.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.injection.minLength &&  $v.rowToEdit.injection.$error" class="invalid-feedback">
                            {{minLengthError($t('contraception.injection.label'), $v.rowToEdit.injection.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.injection.maxLength &&  $v.rowToEdit.injection.$error" class="invalid-feedback">
                            {{maxLengthError($t('contraception.injection.label'), $v.rowToEdit.injection.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- implanon -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('contraception.implanon.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.implanon" 
                        :placeholder="$t('contraception.implanon.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.implanon.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.implanon.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.implanon.$error && !$v.rowToEdit.implanon.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('contraception.injection.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.implanon.minLength &&  $v.rowToEdit.implanon.$error" class="invalid-feedback">
                            {{minLengthError($t('contraception.implanon.label'), $v.rowToEdit.implanon.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.implanon.maxLength &&  $v.rowToEdit.implanon.$error" class="invalid-feedback">
                            {{maxLengthError($t('contraception.implanon.label'), $v.rowToEdit.implanon.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- local -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('contraception.local.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.local" 
                        :placeholder="$t('contraception.local.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.local.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.local.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.local.$error && !$v.rowToEdit.local.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('contraception.injection.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.local.minLength &&  $v.rowToEdit.local.$error" class="invalid-feedback">
                            {{minLengthError($t('contraception.local.label'), $v.rowToEdit.local.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.local.maxLength &&  $v.rowToEdit.local.$error" class="invalid-feedback">
                            {{maxLengthError($t('contraception.local.label'), $v.rowToEdit.local.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- nextVisit -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{ $t('contraception.nextVisit.label') }}</label>
                    <Calendar
                        v-model="rowToEdit.nextVisit"
                        :placeholder="$t('contraception.nextVisit.placeholder')"
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
                        {{ dateError($t('contraception.nextVisit.label'))}}
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
  import {htmlTagsError,minLengthError,maxLengthError,dateError,requiredError} from '@/validation/errors'
  import {minLength,maxLength,required} from "vuelidate/lib/validators";
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
          pills: "", // date 
          loop: "", // text
          injection: "", // text
          implanon: "", // text
          local:"",
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
          date: {
            required,
            validDate(value) {
                return validDate(value);
            },
          }, // date 
          pills: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          loop: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          injection: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          implanon: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          local: {
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
          }
      },
      rowToEdit:{ 
          date: {
            required,
            validDate(value) {
                return validDate(value);
            },
          }, // date 
          pills: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          loop: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          injection: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          implanon: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
          },
          local: {
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
          }
      }
    },
    
  
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters('detailsGynecology/gynecology',{
          'getContraception':'getContraception',
      }),
      contraception:{
        get() {
            return this.getContraception;
        },
        set(value) {
            this.setContraception(value);
        }
      },
    },
    watch: {},
    methods: {
        dateError,
        htmlTagsError,
        maxLengthError,
        minLengthError,
        requiredError,
          ...mapActions("detailsGynecology/gynecology", [
              "setContraception",
          ]),
          formateDate(event){
            this.rowToAdd.date = convertDate(event);  
          },
          formateNextVisitDate(event){
            this.rowToAdd.nextVisit = convertDate(event);
          },
          formateDateEdit(event){
            this.rowToEdit.date = convertDate(event);  
          },
          formateNextVisitDateEdit(event){
            this.rowToEdit.nextVisit = convertDate(event);
          },
          resetForm(){
            this.rowToAdd = {
              date: "", // date 
              pills: "", // date 
              loop: "", // text
              injection: "", // text
              implanon: "", // text
              local: "", // text
              nextVisit: "" // date
            }
            this.$v.rowToAdd.$reset();
          },
          reset(){
              this.resetForm();
              this.contraception=[]
          },
          /////////////////////////
          addRow(){
            this.v.$touch();
            this.$v.rowToAdd.$touch();
            if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
                this.contraception.push({...this.rowToAdd});
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
            // this.contraception[this.indexToEdit]={...this.rowToEdit};
            this.contraception.splice(this.indexToEdit,1,{...this.rowToEdit});
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
              this.contraception.splice(this.indexToDelete,1);
              this.closeDeleteDialog();
          },
      },
  };
  </script>
  <style scoped>
  
  </style>
  