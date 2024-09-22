<template>
<div class="diet">
    <Base>    
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t('diet.header') }}</h4>
            <ResetButton @reset="reset"></ResetButton>            
          </div>
        </div>  
        <div class="row">
            <div class="col-md-4">                
                <div class="form-group diet-content">
                    <label class="form-label">{{$t('diet.dietContent.label')}}</label>
                    <div class="p-inputgroup">
                        <span 
                            class="p-inputgroup-addon" 
                            :class="{'p-invalid':
                            $v.rowToAdd.dietContent.$error 
                            }"
                            >
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <AutoComplete
                            v-model="rowToAdd.dietContent"
                            :suggestions="dietContentParams.suggestions"
                            :class="{'p-invalid':$v.rowToAdd.dietContent.$error}"                          
                            field="value"  
                            :placeholder="$t('diet.dietContent.placeholder')" 
                            @complete="search($event,dietContentParams)"
                        />
                    </div>
                    <div class="error">
                        <small class="p-invalid" v-if="$v.rowToAdd.dietContent.$error&&!$v.rowToAdd.dietContent.validator">
                            {{inputError($t('diet.dietContent.label'))}}
                        </small>
                        <small class="p-invalid" v-else-if="$v.rowToAdd.dietContent.$error&&!$v.rowToAdd.dietContent.required">
                            {{requiredError($t('diet.dietContent.label'))}}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('diet.meal.label')}}</label>
                <Dropdown 
                  v-model="rowToAdd.meal"
                  :options="mealOptions" 
                  optionLabel="value" 
                  :placeholder="$t('diet.meal.placeholder')" 
                 />
              </div>
            </div>           
            <div class="col-md-4">
              <div class="form-group period">
                <CustomInputGroup 
                    v-model="rowToAdd.period"
                    :options="periodUnitOptions" 
                    :label="$t('diet.period.label')" 
                    :valueType="'number'" 
                    :valuePlaceholder="$t('diet.period.valuePlaceholder')" 
                    :dropdownPlaceholder="$t('diet.period.dropdownPlaceholder')"
                    :invalidValue="$v.rowToAdd.period.value.$invalid"
                />
                <div class="error">
                  <small class="d-block text-danger" 
                      v-if="$v.rowToAdd.period.value.$error && !$v.rowToAdd.period.value.numeric">
                      {{numericError($t('diet.period.label'))}}
                  </small>
                  <small class="d-block text-danger" 
                    v-if="$v.rowToAdd.period.value.$error && !$v.rowToAdd.period.value.maxValue">
                    {{maxValueError($t('diet.period.label'),$v.rowToAdd.period.value.$params.maxValue.max)}}
                  </small>
                </div>
              </div>
            </div>                       
            <div class="col-md-4">
                <div class="form-group">
                    <label for="" class="form-label">{{$t('diet.comment.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('diet.comment.placeholder')" 
                    v-model="rowToAdd.comment"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        $v.rowToAdd.comment.$invalid && $v.rowToAdd.comment.$anyDirty && $v.rowToAdd.comment.$anyError
                    }"
                    >
                    <div v-if="! $v.rowToAdd.comment.notContainsHtmlTags &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{htmlTagsError($t('diet.comment.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.minLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{minLengthError($t('diet.comment.label'), $v.rowToAdd.comment.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.maxLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{maxLengthError($t('diet.comment.label'), $v.rowToAdd.comment.$params.maxLength.max)}}
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <AddButton @add="addRow"></AddButton>
                <small v-if="v.$error&&!v.maxLength" class="p-invalid">
                {{maxRecordsError($t('diet.header'),v.$params.maxLength.max)}}
              </small>
            </div>
        </div>
    </Base>
    <div class="table-wrapper my-2" v-if="diet.length>0">
        <Base >
            <div class="row my-2">      
                <div class="col-12">
                    <div class="table-responsive">
                        <table class="table table-sm text-center">
                            <thead>
                                <tr>
                                    <th scope="col">{{$t('table.thead.count')}}</th>
                                    <th scope="col">{{$t('diet.dietContent.label')}}</th>
                                    <th scope="col">{{$t('diet.meal.label')}}</th>
                                    <th scope="col">{{$t('diet.period.label')}}</th>
                                    <th scope="col">{{$t('diet.comment.label')}}</th>
                                    <th scope="col">{{$t('table.thead.controls')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(val, index) in diet" :key="index">
                                    <td class="align-middle">{{parseInt(index)+1}}</td>
                                    <td class="align-middle">
                                        <div v-if="val.dietContent">
                                            <span v-if="(typeof val.dietContent == 'object')">{{val.dietContent.value}}</span>
                                            <span v-else>{{val.dietContent}}</span>
                                        </div>
                                    </td>
                                    <td class="align-middle">
                                        <div v-if="val.meal">
                                            {{val.meal.value}}
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

    <EditDialog :display="displayEditDialog" @close="closeEditDialog" :header="$t('diet.header')" @cancel="closeEditDialog" @save="editRow">
        <div class="row" v-if="rowToEdit">
            <div class="col-md-6 col-xxl-4">                
                <div class="form-group diet-content">
                    <label class="form-label">{{$t('diet.dietContent.label')}}</label>
                    <div class="p-inputgroup">
                        <span 
                            class="p-inputgroup-addon" 
                            :class="{'p-invalid':
                            $v.rowToEdit.dietContent.$error 
                            }"
                            >
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <AutoComplete
                            v-model="rowToEdit.dietContent"
                            :suggestions="dietContentParams.suggestions"
                            :class="{'p-invalid':$v.rowToEdit.dietContent.$error}"                          
                            field="value"  
                            :placeholder="$t('diet.dietContent.placeholder')" 
                            @complete="search($event,dietContentParams)"
                        />
                    </div>
                    <div class="error">
                        <small class="p-invalid" v-if="$v.rowToEdit.dietContent.$error&&!$v.rowToEdit.dietContent.validator">
                            {{inputError($t('diet.dietContent.label'))}}
                        </small>
                        <small class="p-invalid" v-else-if="$v.rowToEdit.dietContent.$error&&!$v.rowToEdit.dietContent.required">
                            {{requiredError($t('diet.dietContent.label'))}}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xxl-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('diet.meal.label')}}</label>
                <Dropdown 
                  v-model="rowToEdit.meal"
                  :options="mealOptions" 
                  optionLabel="value" 
                  :placeholder="$t('diet.meal.placeholder')" 
                 />
              </div>
            </div>
            <div class="col-md-6 col-xxl-4">
                <div class="form-group period">
                    <CustomInputGroup 
                        v-model="rowToEdit.period"
                        :options="periodUnitOptions" 
                        :label="$t('diet.period.label')" 
                        :valueType="'number'" 
                        :valuePlaceholder="$t('diet.period.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('diet.period.dropdownPlaceholder')"
                        :invalidValue="$v.rowToEdit.period.value.$invalid"
                    />
                    <div class="error">
                        <small 
                            class="d-block text-danger" 
                            v-if="$v.rowToEdit.period.value.$error && !$v.rowToEdit.period.value.numeric">
                            {{numericError($t('diet.period.label'))}}
                        </small>
                        <small class="d-block text-danger" 
                          v-if="$v.rowToEdit.period.value.$error && !$v.rowToEdit.period.value.maxValue">
                          {{maxValueError($t('diet.period.label'),$v.rowToEdit.period.value.$params.maxValue.max)}}
                        </small>
                    </div>
                </div>
            </div>                                     
            <div class="col-md-6 col-xxl-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('diet.comment.label')}}</label>
                <input 
                    type="text" 
                    :placeholder="$t('diet.comment.placeholder')" 
                    v-model="rowToEdit.comment"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToEdit.comment.$error}"
                >
                <div v-if="! $v.rowToEdit.comment.notContainsHtmlTags &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                        {{htmlTagsError($t('diet.comment.label'))}}
                </div>
                <div v-if="! $v.rowToEdit.comment.minLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                        {{minLengthError($t('diet.comment.label'), $v.rowToEdit.comment.$params.minLength.min)}}
                </div>
                <div v-if="! $v.rowToEdit.comment.maxLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                        {{maxLengthError($t('diet.comment.label'), $v.rowToEdit.comment.$params.maxLength.max)}}
                </div>
                </div>
            </div>
        </div>      
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow" ></DeleteDialog>
</div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/global/diet/diet.json"></i18n>
<script>
///////////////////////////////////
import {cloneDeep} from 'lodash';
///////////////////////////////////
// ////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,requiredError,maxValueError,maxRecordsError} from "@/validation/errors";
import {minLength,maxLength,numeric,required,maxValue} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
// //////////////////////////////////////////////////////////
import dietOptions from '@/mixins/mr/global/diet/options/dietOptions'
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
    mixins:[dietOptions],
    props: {
        dietOptions:{
            required:true,
           type:Object,

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
        diet: this.value,
        rowToAdd:{
            dietContent:null,
            meal:"",
            period:{
                selection:"",
                value:''
            },
            comment:"",
            status:"remaining",
            evaluation:2,
        },
        rowToEdit:{

        },
        indexToEdit:null,
        displayEditDialog: false,
        indexToDelete:null,
        displayDeleteDialog: false,
        dietContentsSuggestions: [],
        }
    },
    validations:{
        rowToAdd:{
            dietContent:{
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
            comment: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                },
            }
        },
        rowToEdit:{
            dietContent:{
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
        diet: {
            deep: true,
            handler(newValue, oldValue) {
                this.$emit('input',[...this.diet])
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
                dietContent:null,
                meal:"",
                period:{
                    selection:"",
                    value:''
                },
                comment:"",
                status:"remaining",
                evaluation:2,
            }
            this.$v.rowToAdd.$reset();
        },
        reset(){
          this.resetForm();
          this.v.$reset();
          this.diet=[];
        },
        addRow(){
            this.v.$touch();
            this.$v.rowToAdd.$touch();
            if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
                this.diet.push({...this.rowToAdd});
                this.resetForm();
            }
        },
        /////////////////////
        openEditDialog(val,index) {
            this.displayEditDialog = true;
            this.indexToEdit = index;
            this.rowToEdit = cloneDeep(val)
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
                // this.diet[this.indexToEdit]={...this.rowToEdit};
                this.diet.splice(this.indexToEdit,1,{...this.rowToEdit});
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
            this.diet.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    },

};
</script>
