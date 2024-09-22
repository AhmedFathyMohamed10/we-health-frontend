<template>
  <div class="pid">
    <Base>    
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t('pid.header') }}</h4>
            <ResetButton @reset="reset"></ResetButton>            
          </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label">{{ $t('pid.date.label') }}</label>
                  <Calendar
                      v-model="rowToAdd.date"
                      :placeholder="$t('pid.date.placeholder')"
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
                        class="p-invalid" >
                      {{ requiredError($t('pid.date.label'))}}
                  </small>
                  <small v-if="$v.rowToAdd.date.$error && !$v.rowToAdd.date.validDate"
                        class="p-invalid" >
                      {{ dateError($t('pid.date.label'))}}
                  </small>
                </div>
            </div>
            <!-- cervix -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('pid.cervix.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.cervix" 
                        :placeholder="$t('pid.cervix.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.cervix.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.cervix.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.cervix.$error && !$v.rowToAdd.cervix.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pid.cervix.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.cervix.minLength &&  $v.rowToAdd.cervix.$error" class="invalid-feedback">
                            {{minLengthError($t('pid.cervix.label'), $v.rowToAdd.cervix.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.cervix.maxLength &&  $v.rowToAdd.cervix.$error" class="invalid-feedback">
                            {{maxLengthError($t('pid.cervix.label'), $v.rowToAdd.cervix.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- uterus -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('pid.uterus.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.uterus" 
                        :placeholder="$t('pid.uterus.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.uterus.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.uterus.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.uterus.$error && !$v.rowToAdd.uterus.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pid.uterus.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.uterus.minLength &&  $v.rowToAdd.uterus.$error" class="invalid-feedback">
                            {{minLengthError($t('pid.uterus.label'), $v.rowToAdd.uterus.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.uterus.maxLength &&  $v.rowToAdd.uterus.$error" class="invalid-feedback">
                            {{maxLengthError($t('pid.uterus.label'), $v.rowToAdd.uterus.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- ovaries -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('pid.ovaries.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.ovaries" 
                        :placeholder="$t('pid.ovaries.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.ovaries.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.ovaries.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.ovaries.$error && !$v.rowToAdd.ovaries.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pid.ovaries.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.ovaries.minLength &&  $v.rowToAdd.ovaries.$error" class="invalid-feedback">
                            {{minLengthError($t('pid.ovaries.label'), $v.rowToAdd.ovaries.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.ovaries.maxLength &&  $v.rowToAdd.ovaries.$error" class="invalid-feedback">
                            {{maxLengthError($t('pid.ovaries.label'), $v.rowToAdd.ovaries.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- nextVisit -->
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('pid.nextVisit.label') }}</label>
                <Calendar
                    v-model="rowToAdd.nextVisit"
                    :placeholder="$t('pid.nextVisit.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToAdd.nextVisit.$error) ||
                        (serializer_error.expirationDate? serializer_error.rowToAdd.nextVisit.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="formateNextVisitDate"
                />
                <small
                    class="p-invalid"
                    v-if="$v.rowToAdd.nextVisit.$error && !$v.rowToAdd.nextVisit.validDate"
                >
                    {{ dateError($t('pid.nextVisit.label'))}}
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
    <div class="table-wrapper my-2" v-if="pid.length>0">
      <Base >
        <div class="row my-2">      
          <div class="col-12">
            <div class="table-responsive">
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('pid.date.label')}}</th>
                            <th scope="col">{{$t('pid.cervix.label')}}</th>
                            <th scope="col">{{$t('pid.uterus.label')}}</th>
                            <th scope="col">{{$t('pid.ovaries.label')}}</th>
                            <th scope="col">{{$t('pid.nextVisit.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in pid" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <span>{{val.date}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.cervix}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.uterus}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.ovaries}}</span>
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
    <EditDialog :header="$t('pid.header')" :display="displayEditModal" @cancel="closeEditDialog"  @close="closeEditDialog" @save="editRow">    
      <div class="row">
          <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('pid.date.label') }}</label>
                <Calendar
                    v-model="rowToEdit.date"
                    :placeholder="$t('pid.date.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToEdit.date.$error) ||
                        (serializer_error.expirationDate? serializer_error.rowToEdit.date.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="formateDateEdit($event)"
                />
                <small v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.validDate"
                      class="p-invalid" >
                    {{ dateError($t('pid.date.label'))}}
                </small>
                <small v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.required"
                        class="p-invalid" >
                      {{ requiredError($t('pid.date.label'))}}
                  </small>
              </div>
          </div>
          <!-- cervix -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('pid.cervix.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.cervix" 
                      :placeholder="$t('pid.cervix.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.cervix.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.cervix.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.cervix.$error && !$v.rowToEdit.cervix.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('pid.cervix.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.cervix.minLength &&  $v.rowToEdit.cervix.$error" class="invalid-feedback">
                          {{minLengthError($t('pid.cervix.label'), $v.rowToEdit.cervix.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.cervix.maxLength &&  $v.rowToEdit.cervix.$error" class="invalid-feedback">
                          {{maxLengthError($t('pid.cervix.label'), $v.rowToEdit.cervix.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- uterus -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('pid.uterus.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.uterus" 
                      :placeholder="$t('pid.uterus.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.uterus.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.uterus.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.uterus.$error && !$v.rowToEdit.uterus.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('pid.uterus.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.uterus.minLength &&  $v.rowToEdit.uterus.$error" class="invalid-feedback">
                          {{minLengthError($t('pid.uterus.label'), $v.rowToEdit.uterus.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.uterus.maxLength &&  $v.rowToEdit.uterus.$error" class="invalid-feedback">
                          {{maxLengthError($t('pid.uterus.label'), $v.rowToEdit.uterus.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- ovaries -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('pid.ovaries.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.ovaries" 
                      :placeholder="$t('pid.ovaries.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.ovaries.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.ovaries.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.ovaries.$error && !$v.rowToEdit.ovaries.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('pid.ovaries.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.ovaries.minLength &&  $v.rowToEdit.ovaries.$error" class="invalid-feedback">
                          {{minLengthError($t('pid.ovaries.label'), $v.rowToEdit.ovaries.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.ovaries.maxLength &&  $v.rowToEdit.ovaries.$error" class="invalid-feedback">
                          {{maxLengthError($t('pid.ovaries.label'), $v.rowToEdit.ovaries.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- nextVisit -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{ $t('pid.nextVisit.label') }}</label>
                  <Calendar
                      v-model="rowToEdit.nextVisit"
                      :placeholder="$t('pid.nextVisit.placeholder')"
                      :showIcon="true"
                      :class="{
                      'p-invalid':
                          ($v.rowToEdit.nextVisit.$error) ||
                          (serializer_error.expirationDate? serializer_error.rowToEdit.nextVisit.length > 0: false)
                      }"
                      dateFormat="mm-dd-yy"
                      @date-select="formateNextVisitDateEdit"
                  />
                  <small
                      class="p-invalid"
                      v-if="$v.rowToEdit.nextVisit.$error && !$v.rowToEdit.nextVisit.validDate"
                  >
                      {{ dateError($t('pid.nextVisit.label'))}}
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
      rowToAdd:{
        date: "", // date 
        cervix: "", // date 
        uterus: "", // text
        ovaries: "", // text
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
        cervix: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        uterus: {
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
        cervix: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        uterus: {
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
        'getPid':'getPid',
    }),
    pid:{
      get() {
          return this.getPid;
      },
      set(value) {
          this.setPid(value);
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
            "setPid",
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
            cervix: "", // date 
            uterus: "", // text
            ovaries: "", // text
            nextVisit: "" // date
          }
          this.$v.rowToAdd.$reset();
        },
        reset(){
            this.resetForm();
            this.pid=[]
        },
        /////////////////////////
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
            this.pid.push({...this.rowToAdd});
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
            // this.pid[this.indexToEdit]={...this.rowToEdit};
            this.pid.splice(this.indexToEdit,1,{...this.rowToEdit});
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
            this.pid.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    },
};
</script>
<style scoped>

</style>
