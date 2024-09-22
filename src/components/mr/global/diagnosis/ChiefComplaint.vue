<template>
  <div class="chief-complaint">
    <Base>    
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{$t('chiefComplaint.header')}}</h4>
            <ResetButton @reset="reset"></ResetButton>            
          </div>
        </div>  
        <div class="row">
          <div class="col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('chiefComplaint.complaint.label')}}</label>
                <input 
                  type="text" 
                  :placeholder="$t('chiefComplaint.complaint.placeholder')" 
                  v-model="rowToAdd.complaint"
                  class="form-control" 
                  :class="{'is-invalid':$v.rowToAdd.complaint.$error}"
                >
                <div v-if="!$v.rowToAdd.complaint.required &&  $v.rowToAdd.complaint.$error" class="invalid-feedback">
                        {{requiredError($t('chiefComplaint.complaint.label'))}}
                </div>
                <div v-else-if="!$v.rowToAdd.complaint.notContainsHtmlTags &&  $v.rowToAdd.complaint.$error" class="invalid-feedback">
                        {{htmlTagsError($t('chiefComplaint.complaint.label'))}}
                </div>
                <div v-else-if="!$v.rowToAdd.complaint.minLength &&  $v.rowToAdd.complaint.$error" class="invalid-feedback">
                        {{minLengthError($t('chiefComplaint.complaint.label'), $v.rowToAdd.complaint.$params.minLength.min)}}
                </div>
                <div v-else-if="!$v.rowToAdd.complaint.maxLength &&  $v.rowToAdd.complaint.$error" class="invalid-feedback">
                        {{maxLengthError($t('chiefComplaint.complaint.label'), $v.rowToAdd.complaint.$params.maxLength.max)}}
                </div>
              </div>
          </div>
          <!-- Date -->
          <div class="col-md-4">
            <div class="form-group">
                    <label class="form-label">{{ $t('chiefComplaint.date.label') }}</label>
                    <Calendar
                        v-model="rowToAdd.date"
                        :placeholder="$t('chiefComplaint.date.placeholder')"
                        :showIcon="true"
                        :class="{
                        'p-invalid':
                            ($v.rowToAdd.date.$invalid && !$v.rowToAdd.date.validDate) ||
                            (serializer_error.expirationDate? serializer_error.rowToAdd.date.length > 0: false)
                        }"
                        dateFormat="mm-dd-yy"
                        @date-select="formateDate($event)"
                    />
                    <small
                        class="p-invalid"
                        v-if="$v.rowToAdd.date.$error && !$v.rowToAdd.date.validDate"
                    >
                        {{ dateError($t('chiefComplaint.date.label'))}}
                    </small>
            </div>
          </div>
          <div class="col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('chiefComplaint.comment.label')}}</label>
                <input 
                  type="text" 
                  :placeholder="$t('chiefComplaint.comment.placeholder')" 
                  v-model="rowToAdd.comment"
                  class="form-control" 
                  :class="{
                      'is-invalid':
                      $v.rowToAdd.comment.$invalid && $v.rowToAdd.comment.$anyDirty && $v.rowToAdd.comment.$anyError
                  }"
                >
                <div v-if="! $v.rowToAdd.comment.notContainsHtmlTags &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                        {{htmlTagsError($t('chiefComplaint.comment.label'))}}
                </div>
                <div v-else-if="! $v.rowToAdd.comment.minLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                        {{minLengthError($t('chiefComplaint.comment.label'), $v.rowToAdd.comment.$params.minLength.min)}}
                </div>
                <div v-else-if="! $v.rowToAdd.comment.maxLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                        {{maxLengthError($t('chiefComplaint.comment.label'), $v.rowToAdd.comment.$params.maxLength.max)}}
                </div>
              </div>
          </div>
          <div class="col-md-4">
              <AddButton @add="addRow"></AddButton>
              <small v-if="!v.maxLength" class="p-invalid">
                {{maxRecordsError($t('chiefComplaint.header'),v.$params.maxLength.max)}}
              </small>
          </div>
        </div>
    </Base>
    <div class="table-wrapper my-2" v-if="complaints.length>0">
      <Base >
        <div class="row my-2">      
          <div class="col-12">
            <div class="table-responsive">
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('chiefComplaint.complaint.label')}}</th>
                            <th scope="col">{{$t('chiefComplaint.date.label')}}</th>
                            <th scope="col">{{$t('chiefComplaint.comment.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in complaints" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <div v-if="val.complaint">
                                  {{val.complaint}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.date">
                                  {{val.date}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.comment">
                                  {{val.comment}}
                                </div>
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
    <EditDialog :display="displayEditDialog" @close="closeEditDialog" :header="$t('chiefComplaint.header')" @cancel="closeEditDialog" @save="editRow">
          <div class="row">
            <div class="col-md-6 col-xxl-4">
                <div class="form-group">
                  <label for="" class="form-label">{{$t('chiefComplaint.complaint.label')}}</label>
                  <input 
                    type="text" 
                    :placeholder="$t('chiefComplaint.complaint.placeholder')" 
                    v-model="rowToEdit.complaint"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        $v.rowToEdit.complaint.$invalid && $v.rowToEdit.complaint.$anyDirty && $v.rowToEdit.complaint.$anyError
                    }"
                  >
                  <div v-if="! $v.rowToEdit.complaint.required &&  $v.rowToEdit.complaint.$error" class="invalid-feedback">
                          {{requiredError($t('chiefComplaint.complaint.label'))}}
                  </div>
                  <div v-else-if="! $v.rowToEdit.complaint.notContainsHtmlTags &&  $v.rowToEdit.complaint.$error" class="invalid-feedback">
                          {{htmlTagsError($t('chiefComplaint.complaint.label'))}}
                  </div>
                  <div v-else-if="! $v.rowToEdit.complaint.minLength &&  $v.rowToEdit.complaint.$error" class="invalid-feedback">
                          {{minLengthError($t('chiefComplaint.complaint.label'), $v.rowToEdit.complaint.$params.minLength.min)}}
                  </div>
                  <div v-else-if="! $v.rowToEdit.complaint.maxLength &&  $v.rowToEdit.complaint.$error" class="invalid-feedback">
                          {{maxLengthError($t('chiefComplaint.complaint.label'), $v.rowToEdit.complaint.$params.maxLength.max)}}
                  </div>
                </div>
            </div>
            <!-- Date -->
            <div class="col-md-6 col-xxl-4">
                <div class="form-group">
                  <label class="form-label">{{ $t('chiefComplaint.date.label') }}</label>
                  <Calendar
                      v-model="rowToEdit.date"
                      :placeholder="$t('chiefComplaint.date.placeholder')"
                      :showIcon="true"
                      :class="{
                      'p-invalid':
                          ($v.rowToEdit.date.$error && !$v.rowToEdit.date.validDate) ||
                          (serializer_error.expirationDate? serializer_error.rowToEdit.date.length > 0: false)
                      }"
                      dateFormat="mm-dd-yy"
                      @date-select="formateDateEdit($event)"
                  />
                  <small
                      class="d-block text-danger"
                      v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.validDate"
                  >
                      {{ dateError($t('chiefComplaint.date.label'))}}
                  </small>
                </div>
            </div>            
            <div class="col-md-6 col-xxl-4">
                <div class="form-group">
                  <label for="" class="form-label">{{$t('chiefComplaint.comment.label')}}</label>
                  <input 
                    type="text" 
                    :placeholder="$t('chiefComplaint.comment.placeholder')" 
                    v-model="rowToEdit.comment"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        $v.rowToEdit.comment.$invalid && $v.rowToEdit.comment.$anyDirty && $v.rowToEdit.comment.$anyError
                    }"
                  >
                  <div v-if="! $v.rowToEdit.comment.notContainsHtmlTags &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                          {{htmlTagsError($t('chiefComplaint.comment.label'))}}
                  </div>
                  <div v-else-if="! $v.rowToEdit.comment.minLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                          {{minLengthError($t('chiefComplaint.comment.label'), $v.rowToEdit.comment.$params.minLength.min)}}
                  </div>
                  <div v-else-if="! $v.rowToEdit.comment.maxLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                          {{maxLengthError($t('chiefComplaint.comment.label'), $v.rowToEdit.comment.$params.maxLength.max)}}
                  </div>
                </div>
            </div>
          </div>
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog"  @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/global/diagnosis/diagnosis.json"></i18n>
<script>
import {htmlTagsError,minLengthError,maxLengthError,dateError,requiredError,maxRecordsError} from "@/validation/errors";
import {minLength,maxLength,required} from "vuelidate/lib/validators";
import {notContainsHtmlTags,validDate} from "@/validation/customValidators";
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
    value: {
      type: Array,
      required: true,
    },
    v: {
      type: Object,
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
      complaints:this.value,
      rowToAdd:{
        complaint:"",
        date:"",
        comment:"",
      },
      rowToEdit:{

      },
      indexToEdit:null,
      displayEditDialog: false,
      indexToDelete:null,
      displayDeleteDialog: false,
    }
  },
  validations:{
    // complaints:{
    //   maxLength: maxLength(20),
    // },
    rowToAdd:{
      complaint: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
      date: {
        validDate(value) {
            return validDate(value);
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
        complaint: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
        date: {
          validDate(value) {
              return validDate(value);
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
  watch: {
    complaints: {
      deep: true,
      handler(newValue, oldValue) {
          this.$emit('input',[...this.complaints])
      },
    },
  },
  methods: {
        ////////////////////////////////
        htmlTagsError,
        maxLengthError,
        minLengthError,
        dateError,
        requiredError,
        maxRecordsError,
        ////////////////////////////////
        formateDate(event) {
          this.rowToAdd.date = convertDate(event);
        },
        formateDateEdit(event) {
          this.rowToEdit.date = convertDate(event);
        },
        /////////////////////////
        resetForm(){
          this.rowToAdd = {
            complaint:"",
            date:"",
            comment:"",
          }
          this.$v.rowToAdd.$reset();
        },
        reset(){
          this.resetForm();
          this.v.$reset();
          this.complaints=[];
        },
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!(this.v.$invalid || this.$v.rowToAdd.$invalid )){
            this.complaints.push({...this.rowToAdd});
            this.resetForm();
          }
        },
        /////////////////////
        openEditDialog(val,index) {
          this.displayEditDialog = true;
          this.indexToEdit = index;
          this.rowToEdit ={...val}
        },
        closeEditDialog() {
          this.rowToEdit= {}
          this.indexToEdit = null;
          this.$v.rowToEdit.$reset()
          this.displayEditDialog = false;
        },
        editRow(){
          this.v.$touch();
          this.$v.rowToEdit.$touch();
          if(!(this.v.$invalid || this.$v.rowToEdit.$invalid )){
              // this.complaints[this.indexToEdit]={...this.rowToEdit};
              this.complaints.splice(this.indexToEdit,1,{...this.rowToEdit});
              this.closeEditDialog();
            }
        },
        ////////////////////////
        openDeleteDialog(index) {
          this.displayDeleteDialog = true;
          this.indexToDelete =index
        },
        closeDeleteDialog() {
          this.displayDeleteDialog = false;
          this.indexToDelete =null
        },
        deleteRow(){
            this.complaints.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    },

};
</script>
