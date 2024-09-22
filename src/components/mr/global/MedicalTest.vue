<template>
<div class="medical-test">
    <Base>    
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t('medicalTest.header') }}</h4>
            <ResetButton @reset="reset"></ResetButton>            
          </div>
        </div>   
        <div class="row">
            <div class="col-md-4 col-xxl-3 col-xxl-3">    
              <div class="form-group name">
                  <label class="form-label">{{$t('medicalTest.name.label')}}</label>
                  <div class="p-inputgroup">
                      <span 
                          class="p-inputgroup-addon" 
                          :class="{'p-invalid':
                            $v.rowToAdd.name.$error 
                          }"
                          >
                          <i class="mdi mdi-pill"></i>
                        </span>
                        <AutoComplete
                          v-model="rowToAdd.name"
                          :suggestions="nameParams.suggestions"
                          :class="{'p-invalid':$v.rowToAdd.name.$error}"                          
                          field="value"  
                          :placeholder="$t('medicalTest.name.placeholder')" 
                          @complete="search($event,nameParams)"
                      />
                  </div>
                  <div class="error">
                      <small class="p-invalid" v-if="$v.rowToAdd.name.$error&&!$v.rowToAdd.name.validator">
                          {{inputError($t('medicalTest.name.label'))}}
                      </small>
                      <small class="p-invalid" v-else-if="$v.rowToAdd.name.$error&&!$v.rowToAdd.name.required">
                          {{requiredError($t('medicalTest.name.label'))}}
                      </small>
                  </div>
              </div>
            </div>                 
            <div class="col-md-4 col-xxl-3 col-xxl-3">    
              <div class="form-group place">
                  <label class="form-label">{{$t('medicalTest.place.label')}}</label>
                  <div class="p-inputgroup">
                      <span 
                          class="p-inputgroup-addon" 
                          :class="{'p-invalid':
                            $v.rowToAdd.place.$error 
                          }"
                          >
                          <i class="mdi mdi-pill"></i>
                        </span>
                        <AutoComplete
                          v-model="rowToAdd.place"
                          :suggestions="placeParams.suggestions"
                          :class="{'p-invalid':$v.rowToAdd.place.$error}"                          
                          field="value"  
                          :placeholder="$t('medicalTest.place.placeholder')" 
                          @complete="search($event,placeParams)"
                      />
                  </div>
                  <div class="error">
                      <small class="p-invalid" v-if="$v.rowToAdd.place.$error&&!$v.rowToAdd.place.validator">
                          {{inputError($t('medicalTest.place.label'))}}
                      </small>
                  </div>
              </div>
            </div>                 
            <div class="col-md-4 col-xxl-3">
                <div class="form-group">
                    <label for="" class="form-label">{{$t('medicalTest.comment.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('medicalTest.comment.placeholder')" 
                    v-model="rowToAdd.comment"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToAdd.comment.$error}"
                    >
                    <div v-if="! $v.rowToAdd.comment.notContainsHtmlTags &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{htmlTagsError($t('medicalTest.comment.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.minLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{minLengthError($t('medicalTest.comment.label'), $v.rowToAdd.comment.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.maxLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{maxLengthError($t('medicalTest.comment.label'), $v.rowToAdd.comment.$params.maxLength.max)}}
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-xxl-3">
                <AddButton @add="addRow"></AddButton>
                <small v-if="v.$error&&!v.maxLength" class="p-invalid">
                {{maxRecordsError($t('medicalTest.header'),v.$params.maxLength.max)}}
              </small>
            </div>
        </div>
    </Base>
    <div class="table-wrapper my-2" v-if="medicalTest.length>0">
        <Base >
            <div class="row my-2">      
                <div class="col-12">
                    <div class="table-responsive">
                        <table class="table table-sm text-center">
                            <thead>
                                <tr>
                                    <th scope="col">{{$t('table.thead.count')}}</th>
                                    <th scope="col">{{$t('medicalTest.name.label')}}</th>
                                    <th scope="col">{{$t('medicalTest.place.label')}}</th>
                                    <th scope="col">{{$t('medicalTest.comment.label')}}</th>
                                    <th scope="col">{{$t('table.thead.controls')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(val, index) in medicalTest" :key="index">
                                    <td class="align-middle">{{parseInt(index)+1}}</td>
                                    <td class="align-middle">
                                      <div v-if="val.name">
                                        <span v-if="(typeof val.name == 'object')">{{val.name.value}}</span>
                                        <span v-else>{{val.name}}</span>
                                      </div>
                                    </td>
                                    <td class="align-middle">
                                      <div v-if="val.place">
                                        <span v-if="(typeof val.place == 'object')">{{val.place.value}}</span>
                                        <span v-else>{{val.place}}</span>
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
    <EditDialog :display="displayEditDialog" @close="closeEditDialog" @cancel="closeEditDialog" @save="editRow" 
    :header="$t('medicalTest.header')">
        <div class="row" v-if="rowToEdit">
            <div class="col-md-6 col-xxl-4">                
              <div class="form-group name">
                  <label class="form-label">{{$t('medicalTest.name.label')}}</label>
                  <div class="p-inputgroup">
                      <span 
                          class="p-inputgroup-addon" 
                          :class="{'p-invalid':
                            $v.rowToEdit.name.$error 
                          }"
                          >
                          <i class="mdi mdi-pill"></i>
                        </span>
                        <AutoComplete
                          v-model="rowToEdit.name"
                          :suggestions="nameParams.suggestions"
                          :class="{'p-invalid':$v.rowToEdit.name.$error}"                          
                          field="value"  
                          :placeholder="$t('medicalTest.name.placeholder')" 
                          @complete="search($event,nameParams)"
                      />
                  </div>
                  <div class="error">
                      <small class="p-invalid" v-if="$v.rowToEdit.name.$error&&!$v.rowToEdit.name.validator">
                          {{inputError($t('medicalTest.name.label'))}}
                      </small>
                      <small class="p-invalid" v-else-if="$v.rowToEdit.name.$error&&!$v.rowToEdit.name.required">
                          {{requiredError($t('medicalTest.name.label'))}}
                      </small>
                  </div>
              </div>
            </div>          
            <div class="col-md-6 col-xxl-4">                
              <div class="form-group place" >
                  <label class="form-label">{{$t('medicalTest.place.label')}}</label>
                  <div class="p-inputgroup">
                      <span 
                          class="p-inputgroup-addon" 
                          :class="{'p-invalid':
                            $v.rowToEdit.place.$error 
                          }"
                          >
                          <i class="mdi mdi-pill"></i>
                        </span>
                        <AutoComplete
                          v-model="rowToEdit.place"
                          :suggestions="placeParams.suggestions"
                          :class="{'p-invalid':$v.rowToEdit.place.$error}"                          
                          field="value"  
                          :placeholder="$t('medicalTest.place.placeholder')" 
                          @complete="search($event,placeParams)"
                      />
                  </div>
                  <div class="error">
                      <small class="p-invalid" v-if="$v.rowToEdit.place.$error&&!$v.rowToEdit.place.validator">
                          {{inputError($t('medicalTest.place.label'))}}
                      </small>
                  </div>
              </div>
            </div>          
            <div class="col-md-6 col-xxl-4">
              <div class="form-group">
                    <label for="" class="form-label">{{$t('medicalTest.comment.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('medicalTest.comment.placeholder')" 
                    v-model="rowToEdit.comment"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToEdit.comment.$error}"
                    >
                    <div v-if="! $v.rowToEdit.comment.notContainsHtmlTags &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                            {{htmlTagsError($t('medicalTest.comment.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.comment.minLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                            {{minLengthError($t('medicalTest.comment.label'), $v.rowToEdit.comment.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.comment.maxLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                            {{maxLengthError($t('medicalTest.comment.label'), $v.rowToEdit.comment.$params.maxLength.max)}}
                    </div>
                </div>
            </div>
        </div>      
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>
</div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/global/medical-test/medicalTest.json"></i18n>
<script>
// ////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,requiredError,inputError,maxRecordsError} from "@/validation/errors";
import {minLength,maxLength,required} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
// //////////////////////////////////////////////////////////
import medicalTestOptions from '@/mixins/mr/global/medical-test/options/medicalTestOptions'
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
    mixins:[medicalTestOptions],
    props: {
        value:{
          required:true,
          type: Array,
          default(){
              return []
          }
        },
        v:{
            type:Object,
        },
        check_error:{
            type:Object,
        },
        serializer_error:{
            type:Object,
        },
    },
    components: {
        Base,
        AddButton,
        ResetButton,
        EditButton,
        DeleteButton,
        EditDialog,
        DeleteDialog,
    },
    data(){
        return {
        medicalTest: this.value,
        rowToAdd:{
            name:null,
            place:null,
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
        rowToAdd:{
            name:{
              required,
              validator: (value) => {
                if(typeof value == 'object' || value == null || value == '')
                  return true;
                else {
                  return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                }
              },
            },
            place:{
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
            },
        },
        rowToEdit:{
          name:{
              required,
              validator: (value) => {
                if(typeof value == 'object' || value == null || value == '')
                  return true;
                else {
                  return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                }
              },
          },
          place:{
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
          },
        },
    },
    watch: {
        medicalTest: {
            deep: true,
            handler(newValue, oldValue) {
                this.$emit('input',[...this.medicalTest])
            },
        }, 
    },
    methods: {
        //////////////////////////
        htmlTagsError,
        maxLengthError,
        minLengthError,
        requiredError,
        inputError,
        maxRecordsError,
        //////////////////////////
        resetForm(){
          this.rowToAdd = {
              name:null,
              place:null,
              comment:"",
          }
          this.$v.rowToAdd.$reset();
        },
        reset(){
          this.resetForm();
          this.v.$reset();
          this.medicalTest=[]
        },
             
        /////////////////////////
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
            this.medicalTest.push({...this.rowToAdd});
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
            this.medicalTest.splice(this.indexToEdit,1,{...this.rowToEdit});
            // this.medicalTest[this.indexToEdit]={...this.rowToEdit};
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
            this.medicalTest.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    },

};
</script>
