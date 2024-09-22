<template>
    <div class="surgery">
      <Base>    
        <div class="row">
            <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t('surgery.header') }}</h4>
            <ResetButton @reset="reset"></ResetButton>            
            </div>
        </div>  
        <div class="row">
            <div class="col-md-4">                
                <div class="form-group name">
                    <label class="form-label">{{$t('surgery.name.label')}}</label>
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
                            :placeholder="$t('surgery.name.placeholder')" 
                            @complete="search($event,nameParams)"
                        />
                    </div>
                    <div class="error">
                        <small class="p-invalid" v-if="$v.rowToAdd.name.$error&&!$v.rowToAdd.name.validator">
                            {{inputError($t('surgery.name.label'))}}
                        </small>
                        <small class="p-invalid" v-else-if="$v.rowToAdd.name.$error&&!$v.rowToAdd.name.required">
                            {{requiredError($t('surgery.name.label'))}}
                        </small>
                    </div>
                </div>
            </div>                          
            <div class="col-md-4">                
                <div class="form-group place">
                    <label class="form-label">{{$t('surgery.place.label')}}</label>
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
                            :placeholder="$t('surgery.place.placeholder')" 
                            @complete="search($event,placeParams)"
                        />
                    </div>
                    <div class="error">
                        <small class="p-invalid" v-if="$v.rowToAdd.place.$error&&!$v.rowToAdd.place.validator">
                            {{inputError($t('surgery.place.label'))}}
                        </small>
                    </div>
                </div>
            </div>     
            <div class="col-md-4">
                <div class="form-group requirements">
                    <label for="" class="form-label">{{$t('surgery.requirements.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('surgery.requirements.placeholder')" 
                    v-model="rowToAdd.requirements"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        $v.rowToAdd.requirements.$invalid && $v.rowToAdd.requirements.$anyDirty && $v.rowToAdd.requirements.$anyError
                    }"
                    >
                    <div v-if="! $v.rowToAdd.requirements.notContainsHtmlTags &&  $v.rowToAdd.requirements.$error" class="invalid-feedback">
                            {{htmlTagsError($t('surgery.requirements.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.requirements.minLength &&  $v.rowToAdd.requirements.$error" class="invalid-feedback">
                            {{minLengthError($t('surgery.requirements.label'), $v.rowToAdd.requirements.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.requirements.maxLength &&  $v.rowToAdd.requirements.$error" class="invalid-feedback">
                            {{maxLengthError($t('surgery.requirements.label'), $v.rowToAdd.requirements.$params.maxLength.max)}}
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group comment">
                    <label for="" class="form-label">{{$t('surgery.comment.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('surgery.comment.placeholder')" 
                    v-model="rowToAdd.comment"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        $v.rowToAdd.comment.$invalid && $v.rowToAdd.comment.$anyDirty && $v.rowToAdd.comment.$anyError
                    }"
                    >
                    <div v-if="! $v.rowToAdd.comment.notContainsHtmlTags &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{htmlTagsError($t('surgery.comment.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.minLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{minLengthError($t('surgery.comment.label'), $v.rowToAdd.comment.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.maxLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{maxLengthError($t('surgery.comment.label'), $v.rowToAdd.comment.$params.maxLength.max)}}
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <AddButton @add="addRow"></AddButton>
                <small v-if="v.$error&&!v.maxLength" class="p-invalid">
                {{maxRecordsError($t('surgery.header'),v.$params.maxLength.max)}}
              </small>
            </div>
        </div>
      </Base>
      <div class="table-wrapper my-2" v-if="surgery.length>0">
        <Base >
          <div class="row my-2">      
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-sm text-center">
                        <thead>
                            <tr>
                                <th scope="col">{{$t('table.thead.count')}}</th>
                                <th scope="col">{{$t('surgery.name.label')}}</th>
                                <th scope="col">{{$t('surgery.place.label')}}</th>
                                <th scope="col">{{$t('surgery.requirements.label')}}</th>
                                <th scope="col">{{$t('surgery.comment.label')}}</th>
                                <th scope="col">{{$t('table.thead.controls')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(val, index) in surgery" :key="index">
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
                                    <span>{{val.requirements}}</span>
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
  
      <EditDialog :display="displayEditDialog" @close="closeEditDialog" :header="$t('surgery.header')" @cancel="closeEditDialog" @save="editRow">
          <div class="row" v-if="rowToEdit">
              <div class="col-md-6 col-xxl-4">                
                  <div class="form-group treatment-program">
                      <label class="form-label">{{$t('surgery.name.label')}}</label>
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
                              :placeholder="$t('surgery.name.placeholder')" 
                              @complete="search($event,nameParams)"
                          />
                      </div>
                      <div class="error">
                          <small class="p-invalid" v-if="$v.rowToEdit.name.$error&&!$v.rowToEdit.name.validator">
                              {{inputError($t('surgery.name.label'))}}
                          </small>
                          <small class="p-invalid" v-else-if="$v.rowToEdit.name.$error&&!$v.rowToEdit.name.required">
                              {{requiredError($t('surgery.name.label'))}}
                          </small>
                      </div>
                  </div>
              </div>                                   
              <div class="col-md-6 col-xxl-4">                
                  <div class="form-group recommended-center">
                      <label class="form-label">{{$t('surgery.place.label')}}</label>
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
                              :placeholder="$t('surgery.place.placeholder')" 
                              @complete="search($event,placeParams)"
                          />
                      </div>
                      <div class="error">
                          <small class="p-invalid" v-if="$v.rowToEdit.place.$error&&!$v.rowToEdit.place.validator">
                              {{inputError($t('surgery.place.label'))}}
                          </small>
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-xxl-4">
                  <div class="form-group requirements">
                  <label for="" class="form-label">{{$t('surgery.requirements.label')}}</label>
                  <input 
                      type="text" 
                      :placeholder="$t('surgery.requirements.placeholder')" 
                      v-model="rowToEdit.requirements"
                      class="form-control" 
                      :class="{'is-invalid':$v.rowToEdit.requirements.$error}"
                  >
                  <div v-if="! $v.rowToEdit.requirements.notContainsHtmlTags &&  $v.rowToEdit.requirements.$error" class="invalid-feedback">
                          {{htmlTagsError($t('surgery.requirements.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.requirements.minLength &&  $v.rowToEdit.requirements.$error" class="invalid-feedback">
                          {{minLengthError($t('surgery.requirements.label'), $v.rowToEdit.requirements.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.requirements.maxLength &&  $v.rowToEdit.requirements.$error" class="invalid-feedback">
                          {{maxLengthError($t('surgery.requirements.label'), $v.rowToEdit.requirements.$params.maxLength.max)}}
                  </div>
                  </div>
              </div>
              <div class="col-md-6 col-xxl-4">
                  <div class="form-group comment">
                  <label for="" class="form-label">{{$t('surgery.comment.label')}}</label>
                  <input 
                      type="text" 
                      :placeholder="$t('surgery.comment.placeholder')" 
                      v-model="rowToEdit.comment"
                      class="form-control" 
                      :class="{'is-invalid':$v.rowToEdit.comment.$error}"
                  >
                  <div v-if="! $v.rowToEdit.comment.notContainsHtmlTags &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                          {{htmlTagsError($t('surgery.comment.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.comment.minLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                          {{minLengthError($t('surgery.comment.label'), $v.rowToEdit.comment.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.comment.maxLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                          {{maxLengthError($t('surgery.comment.label'), $v.rowToEdit.comment.$params.maxLength.max)}}
                  </div>
                  </div>
              </div>
          </div>      
      </EditDialog>
      <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow" ></DeleteDialog>
    </div>
  </template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/mr/global/surgery/surgery.json"></i18n>
  <script>
  //////////////////////////////////////////////////////////
  import {htmlTagsError,minLengthError,maxLengthError,requiredError,maxValueError,maxRecordsError} from "@/validation/errors";
  import {minLength,maxLength,numeric,required,maxValue} from "vuelidate/lib/validators";
  import {notContainsHtmlTags} from "@/validation/customValidators";
  // //////////////////////////////////////////////////////////
  import surgeryOptions from '@/mixins/mr/global/surgery/options/surgeryOptions'
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
      mixins:[surgeryOptions],
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
          ResetButton,
          AddButton,
          EditButton,
          DeleteButton,
          EditDialog,
          DeleteDialog,
      },
      data(){
          return {
          surgery: this.value,
          rowToAdd:{
              name:null,
              place:null,
              requirements:"",
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
              requirements: {
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
                      return value.length > 0 && value.length <255 && notContainsHtmlTags(value);
                  }
                  },
              },
              requirements: {
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
      watch: {
          surgery: {
              deep: true,
              handler(newValue, oldValue) {
                  this.$emit('input',[...this.surgery])
              },
          },
      },
      methods: {
          /////////////////////////
          htmlTagsError,
          maxLengthError,
          minLengthError,
          requiredError,
          maxValueError,
          maxRecordsError,
          /////////////////////////
          resetForm(){
              this.rowToAdd ={
                  name:null,
                  place:null,
                  requirements:"",
                  comment:"",
              }
              this.$v.rowToAdd.$reset();
          },
          reset(){
              this.resetForm();
              this.v.$reset();
              this.surgery=[];
          },
          addRow(){
              this.v.$touch();
              this.$v.rowToAdd.$touch();
              if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
                  this.surgery.push({...this.rowToAdd});
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
                  // this.surgery[this.indexToEdit]={...this.rowToEdit};
                  this.surgery.splice(this.indexToEdit,1,{...this.rowToEdit});
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
              this.surgery.splice(this.indexToDelete,1);
              this.closeDeleteDialog();
          },
      },
  };
  </script>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  