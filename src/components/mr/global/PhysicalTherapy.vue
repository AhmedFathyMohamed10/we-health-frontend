<template>
  <div class="physical-therapy">
    <Base>    
      <div class="row">
          <div class="col-12 d-flex justify-content-between">
          <h4>{{ $t('physicalTherapy.header') }}</h4>
          <ResetButton @reset="reset"></ResetButton>            
          </div>
      </div>  
      <div class="row">
          <div class="col-md-4">                
              <div class="form-group treatment-program">
                  <label class="form-label">{{$t('physicalTherapy.treatmentProgram.label')}}</label>
                  <div class="p-inputgroup">
                      <span 
                          class="p-inputgroup-addon" 
                          :class="{'p-invalid':
                          $v.rowToAdd.treatmentProgram.$error 
                          }"
                          >
                          <i class="mdi mdi-pill"></i>
                      </span>
                      <AutoComplete
                          v-model="rowToAdd.treatmentProgram"
                          :suggestions="treatmentProgramParams.suggestions"
                          :class="{'p-invalid':$v.rowToAdd.treatmentProgram.$error}"                          
                          field="value"  
                          :placeholder="$t('physicalTherapy.treatmentProgram.placeholder')" 
                          @complete="search($event,treatmentProgramParams)"
                      />
                  </div>
                  <div class="error">
                      <small class="p-invalid" v-if="$v.rowToAdd.treatmentProgram.$error&&!$v.rowToAdd.treatmentProgram.validator">
                          {{inputError($t('physicalTherapy.treatmentProgram.label'))}}
                      </small>
                      <small class="p-invalid" v-else-if="$v.rowToAdd.treatmentProgram.$error&&!$v.rowToAdd.treatmentProgram.required">
                          {{requiredError($t('physicalTherapy.treatmentProgram.label'))}}
                      </small>
                  </div>
              </div>
          </div>     
          <div class="col-md-4">
            <div class="form-group period">
              <CustomInputGroup 
                  v-model="rowToAdd.period"
                  :options="periodUnitOptions" 
                  :label="$t('physicalTherapy.period.label')" 
                  :valueType="'number'" 
                  :valuePlaceholder="$t('physicalTherapy.period.valuePlaceholder')" 
                  :dropdownPlaceholder="$t('physicalTherapy.period.dropdownPlaceholder')"
                  :invalidValue="$v.rowToAdd.period.value.$invalid"
              />
              <div class="error">
                <small class="d-block text-danger" 
                    v-if="$v.rowToAdd.period.value.$error && !$v.rowToAdd.period.value.numeric">
                    {{numericError($t('physicalTherapy.period.label'))}}
                </small>
                <small class="d-block text-danger" 
                    v-if="$v.rowToAdd.period.value.$error && !$v.rowToAdd.period.value.maxValue">
                    {{maxValueError($t('physicalTherapy.period.label'),$v.rowToAdd.period.value.$params.maxValue.max)}}
                </small>
              </div>
            </div>
          </div>                       
          <div class="col-md-4">                
              <div class="form-group recommended-center">
                  <label class="form-label">{{$t('physicalTherapy.recommendedCenter.label')}}</label>
                  <div class="p-inputgroup">
                      <span 
                          class="p-inputgroup-addon" 
                          :class="{'p-invalid':
                          $v.rowToAdd.recommendedCenter.$error 
                          }"
                          >
                          <i class="mdi mdi-pill"></i>
                      </span>
                      <AutoComplete
                          v-model="rowToAdd.recommendedCenter"
                          :suggestions="recommendedCenterParams.suggestions"
                          :class="{'p-invalid':$v.rowToAdd.recommendedCenter.$error}"                          
                          field="value"  
                          :placeholder="$t('physicalTherapy.recommendedCenter.placeholder')" 
                          @complete="search($event,recommendedCenterParams)"
                      />
                  </div>
                  <div class="error">
                      <small class="p-invalid" v-if="$v.rowToAdd.recommendedCenter.$error&&!$v.rowToAdd.recommendedCenter.validator">
                          {{inputError($t('physicalTherapy.recommendedCenter.label'))}}
                      </small>
                  </div>
              </div>
          </div>     
          <div class="col-md-4">
              <div class="form-group comment">
                  <label for="" class="form-label">{{$t('physicalTherapy.comment.label')}}</label>
                  <input 
                  type="text" 
                  :placeholder="$t('physicalTherapy.comment.placeholder')" 
                  v-model="rowToAdd.comment"
                  class="form-control" 
                  :class="{
                      'is-invalid':
                      $v.rowToAdd.comment.$invalid && $v.rowToAdd.comment.$anyDirty && $v.rowToAdd.comment.$anyError
                  }"
                  >
                  <div v-if="! $v.rowToAdd.comment.notContainsHtmlTags &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                          {{htmlTagsError($t('physicalTherapy.comment.label'))}}
                  </div>
                  <div v-if="! $v.rowToAdd.comment.minLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                          {{minLengthError($t('physicalTherapy.comment.label'), $v.rowToAdd.comment.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToAdd.comment.maxLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                          {{maxLengthError($t('physicalTherapy.comment.label'), $v.rowToAdd.comment.$params.maxLength.max)}}
                  </div>
              </div>
          </div>
          <div class="col-md-4">
              <AddButton @add="addRow"></AddButton>
              <small v-if="v.$error&&!v.maxLength" class="p-invalid">
              {{maxRecordsError($t('physicalTherapy.header'),v.$params.maxLength.max)}}
            </small>
          </div>
      </div>
    </Base>
    <div class="table-wrapper my-2" v-if="physicalTherapy.length>0">
      <Base >
        <div class="row my-2">      
          <div class="col-12">
              <div class="table-responsive">
                  <table class="table table-sm text-center">
                      <thead>
                          <tr>
                              <th scope="col">{{$t('table.thead.count')}}</th>
                              <th scope="col">{{$t('physicalTherapy.treatmentProgram.label')}}</th>
                              <th scope="col">{{$t('physicalTherapy.period.label')}}</th>
                              <th scope="col">{{$t('physicalTherapy.recommendedCenter.label')}}</th>
                              <th scope="col">{{$t('physicalTherapy.comment.label')}}</th>
                              <th scope="col">{{$t('table.thead.controls')}}</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="(val, index) in physicalTherapy" :key="index">
                              <td class="align-middle">{{parseInt(index)+1}}</td>
                              <td class="align-middle">
                                  <div v-if="val.treatmentProgram">
                                      <span v-if="(typeof val.treatmentProgram == 'object')">{{val.treatmentProgram.value}}</span>
                                      <span v-else>{{val.treatmentProgram}}</span>
                                  </div>
                              </td>
                              <td class="align-middle">
                                  <div v-if="val.period">
                                      <span v-if="val.period.value">
                                          {{val.period.value}} /
                                      </span>
                                      <span v-if="val.period.selection">
                                          {{val.period.selection.value}}
                                      </span> 
                                  </div>
                              </td>
                              <td class="align-middle">
                                  <div v-if="val.recommendedCenter">
                                      <span v-if="(typeof val.recommendedCenter == 'object')">{{val.recommendedCenter.value}}</span>
                                      <span v-else>{{val.recommendedCenter}}</span>
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

    <EditDialog :display="displayEditDialog" @close="closeEditDialog" :header="$t('physicalTherapy.header')" @cancel="closeEditDialog" @save="editRow">
        <div class="row" v-if="rowToEdit">
            <div class="col-md-6 col-xxl-4">                
                <div class="form-group treatment-program">
                    <label class="form-label">{{$t('physicalTherapy.treatmentProgram.label')}}</label>
                    <div class="p-inputgroup">
                        <span 
                            class="p-inputgroup-addon" 
                            :class="{'p-invalid':
                            $v.rowToEdit.treatmentProgram.$error 
                            }"
                            >
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <AutoComplete
                            v-model="rowToEdit.treatmentProgram"
                            :suggestions="treatmentProgramParams.suggestions"
                            :class="{'p-invalid':$v.rowToEdit.treatmentProgram.$error}"                          
                            field="value"  
                            :placeholder="$t('physicalTherapy.treatmentProgram.placeholder')" 
                            @complete="search($event,treatmentProgramParams)"
                        />
                    </div>
                    <div class="error">
                        <small class="p-invalid" v-if="$v.rowToEdit.treatmentProgram.$error&&!$v.rowToEdit.treatmentProgram.validator">
                            {{inputError($t('physicalTherapy.treatmentProgram.label'))}}
                        </small>
                        <small class="p-invalid" v-else-if="$v.rowToEdit.treatmentProgram.$error&&!$v.rowToEdit.treatmentProgram.required">
                            {{requiredError($t('physicalTherapy.treatmentProgram.label'))}}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xxl-4">
                <div class="form-group period">
                    <CustomInputGroup 
                        v-model="rowToEdit.period"
                        :options="periodUnitOptions" 
                        :label="$t('physicalTherapy.period.label')" 
                        :valueType="'number'" 
                        :valuePlaceholder="$t('physicalTherapy.period.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('physicalTherapy.period.dropdownPlaceholder')"
                        :invalidValue="$v.rowToEdit.period.value.$invalid"
                    />
                    <div class="error">
                        <small 
                        class="d-block text-danger" 
                        v-if="$v.rowToEdit.period.value.$error && !$v.rowToEdit.period.value.numeric">
                        {{numericError($t('physicalTherapy.period.label'))}}
                    </small>
                    <small class="d-block text-danger" 
                        v-if="$v.rowToEdit.period.value.$error && !$v.rowToEdit.period.value.maxValue">
                        {{maxValueError($t('physicalTherapy.period.label'),$v.rowToEdit.period.value.$params.maxValue.max)}}
                    </small>
                </div>
            </div>
            </div>                                     
            <div class="col-md-6 col-xxl-4">                
                <div class="form-group recommended-center">
                    <label class="form-label">{{$t('physicalTherapy.recommendedCenter.label')}}</label>
                    <div class="p-inputgroup">
                        <span 
                            class="p-inputgroup-addon" 
                            :class="{'p-invalid':
                            $v.rowToEdit.recommendedCenter.$error 
                            }"
                            >
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <AutoComplete
                            v-model="rowToEdit.recommendedCenter"
                            :suggestions="recommendedCenterParams.suggestions"
                            :class="{'p-invalid':$v.rowToEdit.recommendedCenter.$error}"                          
                            field="value"  
                            :placeholder="$t('physicalTherapy.recommendedCenter.placeholder')" 
                            @complete="search($event,recommendedCenterParams)"
                        />
                    </div>
                    <div class="error">
                        <small class="p-invalid" v-if="$v.rowToEdit.recommendedCenter.$error&&!$v.rowToEdit.recommendedCenter.validator">
                            {{inputError($t('physicalTherapy.recommendedCenter.label'))}}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xxl-4">
                <div class="form-group comment">
                <label for="" class="form-label">{{$t('physicalTherapy.comment.label')}}</label>
                <input 
                    type="text" 
                    :placeholder="$t('physicalTherapy.comment.placeholder')" 
                    v-model="rowToEdit.comment"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToEdit.comment.$error}"
                >
                <div v-if="! $v.rowToEdit.comment.notContainsHtmlTags &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                        {{htmlTagsError($t('physicalTherapy.comment.label'))}}
                </div>
                <div v-if="! $v.rowToEdit.comment.minLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                        {{minLengthError($t('physicalTherapy.comment.label'), $v.rowToEdit.comment.$params.minLength.min)}}
                </div>
                <div v-if="! $v.rowToEdit.comment.maxLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                        {{maxLengthError($t('physicalTherapy.comment.label'), $v.rowToEdit.comment.$params.maxLength.max)}}
                </div>
                </div>
            </div>
        </div>      
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow" ></DeleteDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/global/physicalTherapy/physicalTherapy.json"></i18n>
<script>
///////////////////////////////////
import {cloneDeep} from 'lodash';
///////////////////////////////////
// ////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,requiredError,maxValueError,maxRecordsError} from "@/validation/errors";
import {minLength,maxLength,numeric,required,maxValue} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
// //////////////////////////////////////////////////////////
import physicalTherapyOptions from '@/mixins/mr/global/physicalTherapy/options/physicalTherapyOptions'
// //////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue"
import CustomInputGroup from '@/components/global/custom/CustomInputGroup.vue'
import ResetButton from "@/components/global/utilities/ResetButton.vue"
import AddButton from "@/components/global/utilities/AddButton.vue"
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
import EditDialog from "@/components/global/utilities/EditDialog.vue"
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
/////////////////////////////////////////////////////////////
export default {
    mixins:[physicalTherapyOptions],
    props: {
        physicalTherapyOptions:{
            required:true,
            type: Object,
        },
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
        CustomInputGroup,
        ResetButton,
        AddButton,
        EditButton,
        DeleteButton,
        EditDialog,
        DeleteDialog,
    },
    data(){
        return {
        physicalTherapy: this.value,
        rowToAdd:{
            treatmentProgram:null,
            period:{
                selection:"",
                value:''
            },
            recommendedCenter:null,
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
            treatmentProgram:{
                required,
                validator: (value) => {
                if(typeof value == 'object' || value == null || value == '')
                    return true;
                else {
                    return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                }
                },
            },
            period:{
                value:{
                    numeric,
                    maxValue:maxValue(100)
                }
            },            
            recommendedCenter:{
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
            treatmentProgram:{
                required,
                validator: (value) => {
                if(typeof value == 'object' || value == null || value == '')
                    return true;
                else {
                    return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                }
                },
            },
            period:{
                value:{
                    numeric,
                    maxValue:maxValue(100)
                }
            },            
            recommendedCenter:{
                validator: (value) => {
                if(typeof value == 'object' || value == null || value == '')
                    return true;
                else {
                    return value.length > 0 && value.length <255 && notContainsHtmlTags(value);
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
        physicalTherapy: {
            deep: true,
            handler(newValue, oldValue) {
                this.$emit('input',[...this.physicalTherapy])
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
                treatmentProgram:null,
                period:{
                    selection:"",
                    value:''
                },
                recommendedCenter:null,
                comment:"",
            }
            this.$v.rowToAdd.$reset();
        },
        reset(){
            this.resetForm();
            this.v.$reset();
            this.physicalTherapy=[];
        },
        addRow(){
            this.v.$touch();
            this.$v.rowToAdd.$touch();
            if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
                this.physicalTherapy.push({...this.rowToAdd});
                this.resetForm();
            }
        },
        /////////////////////
        openEditDialog(val,index) {
            this.displayEditDialog = true;
            this.indexToEdit = index;
            this.rowToEdit =cloneDeep(val)
            // this.rowToEdit ={...val}
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
                // this.physicalTherapy[this.indexToEdit]={...this.rowToEdit};
                this.physicalTherapy.splice(this.indexToEdit,1,{...this.rowToEdit});
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
            this.physicalTherapy.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    },
};
</script>






















