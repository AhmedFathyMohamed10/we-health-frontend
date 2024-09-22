<template>
  <div class="diagnosis-child">
    <Base :title="$t('diagnosis.header')" icon="mdi mdi-pill">
        <div class="row">
          
        </div>    
        <div class="row">
          <div class="col-md-4">                
            <div class="form-group diagnose">
                <label class="form-label">{{$t('diagnosis.diagnose.label')}}</label>
                <div class="p-inputgroup">
                    <span 
                        class="p-inputgroup-addon" 
                        :class="{'p-invalid':
                          $v.rowToAdd.diagnose.$error 
                        }"
                        >
                        <i class="mdi mdi-pill"></i>
                      </span>
                      <AutoComplete
                        v-model="rowToAdd.diagnose"
                        :suggestions="diagnoseParams.suggestions"
                        :class="{'p-invalid':$v.rowToAdd.diagnose.$error}"                          
                        field="value"  
                        :placeholder="$t('diagnosis.diagnose.placeholder')" 
                        @complete="search($event,diagnoseParams)"
                    />
                </div>
                <div class="error">
                    <small class="p-invalid" v-if="$v.rowToAdd.diagnose.$error&&!$v.rowToAdd.diagnose.validator">
                        {{inputError($t('diagnosis.diagnose.label'))}}
                    </small>
                    <small class="p-invalid" v-else-if="$v.rowToAdd.diagnose.$error&&!$v.rowToAdd.diagnose.required">
                        {{requiredError($t('diagnosis.diagnose.label'))}}
                    </small>
                </div>
            </div>
          </div>          
          <div class="col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('diagnosis.type.label')}}</label>
                <Dropdown 
                  v-model="rowToAdd.type"
                  :options="typeOptions" 
                  optionLabel="value"
                  :placeholder="$t('diagnosis.type.placeholder')" 
                 />
              </div>
          </div>
          <div class="col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('diagnosis.condition.label')}}</label>
                <Dropdown 
                  v-model="rowToAdd.condition"
                  :options="conditionOptions" 
                  optionLabel="value" 
                  :placeholder="$t('diagnosis.condition.placeholder')" 
                 />
              </div>
          </div>
          <div class="col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('diagnosis.comment.label')}}</label>
                <input 
                  type="text" 
                  :placeholder="$t('diagnosis.comment.placeholder')" 
                  v-model="rowToAdd.comment"
                  class="form-control" 
                  :class="{'is-invalid':$v.rowToAdd.comment.$error}"
                >
                <div v-if="! $v.rowToAdd.comment.notContainsHtmlTags &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                        {{htmlTagsError($t('diagnosis.comment.label'))}}
                </div>
                <div v-else-if="! $v.rowToAdd.comment.minLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                        {{minLengthError($t('diagnosis.comment.label'), $v.rowToAdd.comment.$params.minLength.min)}}
                </div>
                <div v-else-if="! $v.rowToAdd.comment.maxLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                        {{maxLengthError($t('diagnosis.comment.label'), $v.rowToAdd.comment.$params.maxLength.max)}}
                </div>
              </div>
          </div>
          <div class="col-md-4">
              <AddButton @add="addRow"></AddButton>
              <small v-if="v.$error&&!v.maxLength" class="p-invalid">
                {{maxRecordsError($t('diagnosis.header'),v.$params.maxLength.max)}}
              </small>
          </div>
        </div>
    </Base>
    <div class="table-wrapper my-2" v-if="diagnosis.length>0">
      <Base >
        <div class="row my-2">      
            <div class="col-12 d-flex justify-content-end">
            <ResetButton @reset="reset"></ResetButton>            
          </div>
          <div class="col-12">
            <div class="table-responsive">
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('diagnosis.diagnose.label')}}</th>
                            <th scope="col">{{$t('diagnosis.type.label')}}</th>
                            <th scope="col">{{$t('diagnosis.condition.label')}}</th>
                            <th scope="col">{{$t('diagnosis.comment.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in diagnosis" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <div v-if="val.diagnose">
                                  <span v-if="(typeof val.diagnose == 'object')">{{val.diagnose.value}}</span>
                                  <span v-else>{{val.diagnose}}</span>
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.type">
                                  {{val.type.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.condition">
                                  {{val.condition.value}}
                                </div>
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
    <EditDialog :display="displayEditDialog" @close="closeEditDialog" @cancel="closeEditDialog" @save="editRow" :header="$t('diagnosis.header')">
          <div class="row" v-if="rowToEdit">
            <div class="col-md-6 col-xxl-4">      
              <div class="form-group diagnose">
                  <label class="form-label">{{$t('diagnosis.diagnose.label')}}</label>
                  <div class="p-inputgroup">
                      <span 
                          class="p-inputgroup-addon" 
                          :class="{'p-invalid':
                            $v.rowToEdit.diagnose.$error 
                          }"
                          >
                          <i class="mdi mdi-pill"></i>
                        </span>
                        <AutoComplete
                          v-model="rowToEdit.diagnose"
                          :suggestions="diagnoseParams.suggestions"
                          :class="{'p-invalid':$v.rowToEdit.diagnose.$error}"                          
                          field="value"  
                          :placeholder="$t('diagnosis.diagnose.placeholder')" 
                          @complete="search($event,diagnoseParams)"
                      />
                  </div>
                  <div class="error">
                      <small class="p-invalid" v-if="$v.rowToEdit.diagnose.$error&&!$v.rowToEdit.diagnose.validator">
                          {{inputError($t('diagnosis.diagnose.label'))}}
                      </small>
                      <small class="p-invalid" v-else-if="$v.rowToEdit.diagnose.$error&&!$v.rowToEdit.diagnose.required">
                          {{requiredError($t('diagnosis.diagnose.label'))}}
                      </small>
                  </div>
              </div>     
            </div>          
            <div class="col-md-6 col-xxl-4">
                <div class="form-group type">
                  <label for="" class="form-label">{{$t('diagnosis.type.label')}}</label>
                  <Dropdown 
                    v-model="rowToEdit.type"
                    :options="typeOptions" 
                    optionLabel="value" 
                    :placeholder="$t('diagnosis.type.placeholder')" 
                  />
                </div>
            </div>
            <div class="col-md-6 col-xxl-4">
                <div class="form-group condition">
                  <label for="" class="form-label">{{$t('diagnosis.condition.label')}}</label>
                  <Dropdown 
                    v-model="rowToEdit.condition"
                    :options="conditionOptions" 
                    optionLabel="value" 
                    :placeholder="$t('diagnosis.condition.placeholder')" 
                  />
                </div>
            </div>
            <div class="col-md-6 col-xxl-4">
                <div class="form-group">
                  <label for="" class="form-label">{{$t('diagnosis.comment.label')}}</label>
                  <input 
                    type="text" 
                    :placeholder="$t('diagnosis.comment.placeholder')" 
                    v-model="rowToEdit.comment"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        $v.rowToEdit.comment.$invalid && $v.rowToEdit.comment.$anyDirty && $v.rowToEdit.comment.$anyError
                    }"
                  >
                  <div v-if="! $v.rowToEdit.comment.notContainsHtmlTags &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                          {{htmlTagsError($t('diagnosis.comment.label'))}}
                  </div>
                  <div v-else-if="! $v.rowToEdit.comment.minLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                          {{minLengthError($t('diagnosis.comment.label'), $v.rowToEdit.comment.$params.minLength.min)}}
                  </div>
                  <div v-else-if="! $v.rowToEdit.comment.maxLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                          {{maxLengthError($t('diagnosis.comment.label'), $v.rowToEdit.comment.$params.maxLength.max)}}
                  </div>
                </div>
            </div>
          </div>      
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>
  </div> 
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/global/diagnosis/diagnosis.json"></i18n>
<script>
//////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,inputError,requiredError,maxRecordsError} from "@/validation/errors";
import {minLength,maxLength,required} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
// //////////////////////////////////////////////////////////
import diagnosisOptions from '@/mixins/mr/global/diagnosis/options/diagnosisOptions'
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
  mixins:[diagnosisOptions],
  props: {
    diagnosisOptions:{
      required: true,
      type: Object,
    },
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
      diagnosis:this.value,
      rowToAdd:{
        diagnose:null,
        type:null,
        condition:null,
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
    // diagnosis:{
    //   maxLength: maxLength(2),
    // },
    rowToAdd:{
      diagnose:{
        required,
        validator: (value) => {
          if(typeof value == 'object' || value == null || value == '')
            return true;
          else {
            return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
          }
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
      diagnose:{
        required,
        validator: (value) => {
          if(typeof value == 'object' || value == null || value == '')
            return true;
          else {
            return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
          }
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
    diagnosis: {
      deep: true,
      handler(newValue, oldValue) {
          this.$emit('input',[...this.diagnosis])
      },
    },  
  },
  methods: {
        /////////////////////////
        htmlTagsError,
        maxLengthError,
        minLengthError,
        inputError,
        requiredError,
        maxRecordsError, 
        ///////////////////////// 
        resetForm(){
          this.rowToAdd = {
            diagnose:null,
            type:null,
            condition:null,
            comment:"",
          }
          this.$v.rowToAdd.$reset();
        },
        reset(){
          this.resetForm();
          this.v.$reset();
          this.diagnosis=[];
        },
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
            this.diagnosis.push({...this.rowToAdd});
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
            // this.diagnosis[this.indexToEdit]={...this.rowToEdit};
            this.diagnosis.splice(this.indexToEdit,1,{...this.rowToEdit});
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
          this.diagnosis.splice(this.indexToDelete,1);
          this.closeDeleteDialog();
        },
    },

};
</script>
