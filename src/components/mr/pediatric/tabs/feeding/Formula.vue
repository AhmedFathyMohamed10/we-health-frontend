<template>
<div class="formula">
    <Base>
         <div class="row">
              <div class="col-12 d-flex justify-content-between">
                <h4>{{ $t('formula.formula.label') }}</h4>
                <ResetButton @reset="reset"></ResetButton>            
              </div>
            </div>  
        <div class="row">
            <div class="col-md-4">                
                <div class="form-group formula">
                    <label class="form-label">{{$t('formula.formula.label')}}</label>
                    <div class="p-inputgroup">
                        <span 
                            class="p-inputgroup-addon" 
                            :class="{'p-invalid':$v.rowToAdd.formula.$error }"
                        >
                            <i class="mdi mdi-pill"></i>
                        </span>
                          <AutoComplete
                            v-model="rowToAdd.formula"
                            :suggestions="formulaParams.suggestions"
                            :class="{ 'p-invalid': $v.rowToAdd.formula.$error }"                          
                            field="value"  
                            :placeholder="$t('formula.formula.placeholder')" 
                            @complete="search($event, formulaParams)"
                        />
                    </div>
                     <div class="error">
                          <small class="p-invalid" v-if="$v.rowToAdd.formula.$error && !$v.rowToAdd.formula.validator">
                              {{ inputError($t('formula.formula.label')) }}
                          </small>
                          <small class="p-invalid" v-else-if="$v.rowToAdd.formula.$error && !$v.rowToAdd.formula.required">
                              {{ requiredError($t('formula.formula.label')) }}
                          </small>
                      </div>
                </div>
            </div>
            <div class="col-md-4">
              <div class="form-group meal">
                <label for="" class="form-label">{{$t('formula.meal.label')}}</label>
                <Dropdown 
                  v-model="rowToAdd.meal"
                  :options="mealOptions" 
                  optionLabel="value"  
                  :placeholder="$t('formula.meal.placeholder')" 
                 />
              </div>
            </div>           
            <div class="col-md-4">
                <div class="form-group period">
                    <!-- {{  periodUnitOptions}} -->
                    <CustomInputGroup 
                        v-model="rowToAdd.period"
                        :options="periodUnitOptions" 
                        :label="$t('formula.period.label')" 
                        :valueType="'number'" 
                        :valuePlaceholder="$t('formula.period.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('formula.period.dropdownPlaceholder')"
                        :invalidValue="$v.rowToAdd.period.value.$error"
                    />
                    <div class="error">
                        <small 
                            class="d-block text-danger" 
                            v-if="$v.rowToAdd.period.value.$error && !$v.rowToAdd.period.value.numeric">
                            {{numericError($t('formula.period.label'))}}
                        </small>
                         <small class="p-invalid" v-else-if="$v.rowToAdd.period.value.$error && !$v.rowToAdd.period.value.maxValue.max">
                                  {{ maxValueError($t('formula.period.valuePlaceholder'), $v.rowToAdd.dose.value.$params.maxValue.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                    <div class="form-group dose">
                        <!-- {{  doseTypeOptions}} -->
                        <CustomInputGroup
                            v-model="rowToAdd.dose"
                            :label="$t('formula.dose.label')"
                            :inputType="'text'"
                            :valuePlaceholder="$t('formula.dose.valuePlaceholder')" 
                            :dropdownPlaceholder="$t('formula.dose.dropdownPlaceholder')"
                            :options="doseTypeOptions" 
                            :invalidValue="$v.rowToAdd.dose.value.$error" 
                        />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.rowToAdd.dose.value.$error && !$v.rowToAdd.dose.value.numeric">
                                {{numericError($t('formula.dose.label'))}}
                            </small>
                            <small  class="p-invalid" v-else-if="!$v.rowToAdd.dose.value.maxValue && $v.rowToAdd.dose.value.$error">
                                            {{ maxValueError($t('formula.dose.valuePlaceholder'), $v.rowToAdd.dose.value.$params.maxValue.max) }}
                            </small>
                            
                        </div>
                    </div>
                </div>                                      
            <div class="col-md-4">
                <div class="form-group comment">
                    <label for="" class="form-label">{{$t('formula.comment.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('formula.comment.placeholder')" 
                    v-model="rowToAdd.comment"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        $v.rowToAdd.comment.$invalid && $v.rowToAdd.comment.$anyDirty && $v.rowToAdd.comment.$anyError
                    }"
                    >
                    <div v-if="! $v.rowToAdd.comment.notContainsHtmlTags &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{htmlTagsError($t('formula.comment.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.comment.minLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{minLengthError($t('formula.comment.label'), $v.rowToAdd.comment.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.comment.maxLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{maxLengthError($t('formula.comment.label'), $v.rowToAdd.comment.$params.maxLength.max)}}
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <AddButton @add="addRow"></AddButton>
                 <small v-if="v.$error && !v.maxLength" class="p-invalid">
                    {{ maxRecordsError($t('formula.formula.label'), v.$params.maxLength.max) }}
                </small>
            </div>
        </div>
    </Base>
    <div class="table-wrapper my-2" v-if="formula.length>0">
        <Base >
            <div class="row my-2">      
                <div class="col-12">
                    <div class="table-responsive">
                        <table class="table table-sm text-center">
                            <thead>
                                <tr>
                                    <th scope="col">{{$t('table.thead.count')}}</th>
                                    <th scope="col">{{$t('formula.formula.label')}}</th>
                                    <th scope="col">{{$t('formula.meal.label')}}</th>
                                    <th scope="col">{{$t('formula.period.label')}}</th>
                                    <th scope="col">{{$t('formula.dose.label')}}</th>
                                    <th scope="col">{{$t('formula.comment.label')}}</th>
                                    <th scope="col">{{$t('table.thead.controls')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(val, index) in formula" :key="index">
                                    <td class="align-middle">{{parseInt(index)+1}}</td>
                                    <td class="align-middle">
                                        <div v-if="val.formula">
                                            <span v-if="(typeof val.formula == 'object')">{{ val.formula.value }}</span>
                                            <span v-else>{{ val.formula }}</span>
                                        </div>
                                    </td>
                                    <td class="align-middle">
                                        <div v-if="val.meal">
                                            {{val.meal.value}}
                                        </div>
                                    </td>
                                    <td class="align-middle">
                                        <span v-if="val.period.value">
                                            {{val.period.value}} /
                                        </span>
                                        <span v-if="val.period.selection">
                                            {{val.period.selection.value}}
                                        </span> 
                                    </td>
                                    <td class="align-middle">
                                        <span v-if="val.dose.value">
                                            {{val.dose.value}} /
                                        </span>
                                        <span v-if="val.dose.selection">
                                         {{val.dose.selection.value}}
                                        </span> 
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
    <EditDialog :display="displayEditDialog" @cancel="closeEditDialog" @close="closeEditDialog" @save="editRow" :header =  "$t('formula.formula.label')" >
         <div class="row">
                  <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t('formula.formula.label') }}</h4>
                             
                  </div>
                </div>  
        <div class="row" v-if="rowToEdit">
            <div class="col-md-6 col-xxl-4 ">                
                <div class="form-group formula">
                    <label class="form-label">{{$t('formula.formula.label')}}</label>
                    <div class="p-inputgroup">
                        <span 
                            class="p-inputgroup-addon" 
                            :class="{'p-invalid':$v.rowToEdit.formula.$invalid}"
                        >
                            <i class="mdi mdi-pill"></i>
                        </span>
                       
                       <AutoComplete
                                v-model="rowToEdit.formula"
                                :suggestions="formulaParams.suggestions"
                                :class="{ 'p-invalid': $v.rowToEdit.formula.$error }"                          
                                field="value"  
                                :placeholder="$t('formula.formula.placeholder')" 
                                @complete="search($event, formulaParams)"
                            />
                    </div>
                     <div class="error">
                              <small class="p-invalid" v-if="$v.rowToEdit.formula.$error && !$v.rowToEdit.formula.validator">
                                  {{ inputError($t('formula.formula.label')) }}
                              </small>
                              <small class="p-invalid" v-else-if="$v.rowToEdit.formula.$error && !$v.rowToEdit.formula.required">
                                  {{ requiredError($t('formula.formula.label')) }}
                              </small>
                          </div>
                </div>
            </div>
            <div class="col-md-6 col-xxl-4 ">
              <div class="form-group meal">
                <label for="" class="form-label">{{$t('formula.meal.label')}}</label>
                <Dropdown 
                  v-model="rowToEdit.meal"
                  :options="mealOptions" 
                  optionLabel="value" 
                  :placeholder="$t('formula.meal.placeholder')" 
                 />
              </div>
            </div>
            <div class="col-md-6 col-xxl-4 ">
                <div class="form-group period">
                    <CustomInputGroup 
                        v-model="rowToEdit.period"
                        :options="periodUnitOptions" 
                        :label="$t('formula.period.label')" 
                        :valueType="'number'" 
                        :valuePlaceholder="$t('formula.period.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('formula.period.dropdownPlaceholder')"
                        :invalidValue="$v.rowToEdit.period.value.$invalid"
                    />
                    <div class="error">
                        <small 
                            class="d-block text-danger" 
                            v-if="$v.rowToEdit.period.value.$error && !$v.rowToEdit.period.value.numeric">
                            {{numericError($t('formula.period.label'))}}
                        </small>
                        <small class="p-invalid" v-else-if="!$v.rowToEdit.period.value.maxValue && $v.rowToEdit.period.value.$error" >
                                    {{ maxValueError($t('formula.period.valuePlaceholder'), $v.rowToEdit.period.value.$params.maxValue.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xxl-4 ">
                <div class="form-group dose" v-if="rowToEdit.dose">
                    <CustomInputGroup 
                        v-model="rowToEdit.dose"
                        :label="$t('formula.dose.label')"
                        :inputType="'number'" 
                        :valuePlaceholder="$t('formula.dose.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('formula.dose.dropdownPlaceholder')"
                        :options="doseTypeOptions" 
                        :invalidValue="$v.rowToEdit.dose.value.$invalid"
                    />
                    <div class="error">
                        <small 
                            class="d-block text-danger" 
                            v-if="$v.rowToEdit.dose.value.$error && !$v.rowToEdit.dose.value.numeric">
                            {{numericError($t('formula.dose.label'))}}
                        </small>
                        <small class="p-invalid" v-else-if="!$v.rowToEdit.dose.value.maxValue && $v.rowToEdit.dose.value.$error">
                                {{ maxValueError($t('formula.dose.valuePlaceholder'), $v.rowToEdit.dose.value.$params.maxValue.max) }}
                        </small>
                    </div>
                </div>
            </div>                                                   
            <div class="col-md-6 col-xxl-4 ">
                <div class="form-group comment">
                <label for="" class="form-label">{{$t('formula.comment.label')}}</label>
                <input 
                    type="text" 
                    :placeholder="$t('formula.comment.placeholder')" 
                    v-model="rowToEdit.comment"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        $v.rowToEdit.comment.$invalid && $v.rowToEdit.comment.$anyDirty && $v.rowToEdit.comment.$anyError
                    }"
                >
                <div v-if="! $v.rowToEdit.comment.notContainsHtmlTags &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                        {{htmlTagsError($t('formula.comment.label'))}}
                </div>
                <div v-else-if="! $v.rowToEdit.comment.minLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                        {{minLengthError($t('formula.comment.label'), $v.rowToEdit.comment.$params.minLength.min)}}
                </div>
                <div v-else-if="! $v.rowToEdit.comment.maxLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                        {{maxLengthError($t('formula.comment.label'), $v.rowToEdit.comment.$params.maxLength.max)}}
                </div>
                </div>
            </div>
        </div>   
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>
</div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/pediatric/feeding.json"></i18n>
<script>
// ////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError, maxValueError, maxRecordsError,numericError,requiredError} from "@/validation/errors";
import {minLength,maxLength,maxValue,numeric,required} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
import { cloneDeep } from 'lodash';
// //////////////////////////////////////////////////////////
import feedingOptions from '@/mixins/mr/pediatric/options/feedingOptions'
// //////////////////////////////////////////////////////////
import ResetButton from "@/components/global/utilities/ResetButton.vue"
import Base from "@/components/global/utilities/Base.vue"
import CustomInputGroup from '@/components/global/custom/CustomInputGroup.vue'
import AddButton from "@/components/global/utilities/AddButton.vue"
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
import EditDialog from "@/components/global/utilities/EditDialog.vue"
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
/////////////////////////////////////////////////////////////
export default {
    mixins:[feedingOptions],
    props: {
         v: {
            type: Object,
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
        CustomInputGroup,
        AddButton,
        EditDialog,
        DeleteDialog,
    },
    data(){
        return {
            rowToAdd:{
                formula:null,
                meal:"",
                period:{
                    selection:"",
                    value:''
                },
                dose:{
                    selection:"",
                    value:''
                },            
                comment:"",
            },
            rowToEdit: {},
            indexToEdit:null,
            displayEditDialog: false,
            indexToDelete:null,
            displayDeleteDialog: false,
            formulasSuggestions: [],
        }
    },
    computed: {
         formula: {
            get() {
                 return this.$store.getters['detailsPediatric/pediatric/formula'];
            },
            set(value) {
                this.$store.dispatch('detailsPediatric/pediatric/setFormula', value);
            }
        },
    },
    validations:{
        rowToAdd:{
            formula: {
                required,
                validator: (value) => {
                    if (typeof value == 'object' || value == null || value == '')
                        return true;
                    else {
                        return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                    }
                },
            },
            period:{
                value:{
                    numeric,
                    maxValue: maxValue(100),
                }
            },
            dose:{
                value:{
                    numeric,
                    maxValue: maxValue(100),
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
            formula: {
                required,
                validator: (value) => {
                    if (typeof value == 'object' || value == null || value == '')
                        return true;
                    else {
                        return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                    }
                },
            },
            period: {
                value: {
                    numeric,
                     maxValue: maxValue(100),
                }
            },
            dose: {
                value: {
                    numeric,
                    maxValue: maxValue(100),
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
    methods: {
        /////////////////////////
        maxRecordsError,
        maxValueError,
        requiredError,
        htmlTagsError,
        maxLengthError,
        minLengthError,
        numericError,
        ///////////////////////// 
        resetForm() {
            this.rowToAdd = {
                 formula: null,
                meal: "",
                period: {
                    selection: "",
                    value: ''
                },
                dose: {
                    selection: "",
                    value: ''
                },
                comment: "",
            }
            this.$v.rowToAdd.$reset();
        },
        reset() {
            this.resetForm();
            this.v.$reset();
            this.formula = [];
        },
        addRow() {
            this.v.$touch();
            this.$v.rowToAdd.$touch();
            if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
                this.formula.push({ ...this.rowToAdd });
                this.resetForm();
            }
        },
        /////////////////////
        openEditDialog(val, index) {
            // console.log(val)
            this.displayEditDialog = true;
            this.indexToEdit = index;
            this.rowToEdit = cloneDeep(val);
        },
        closeEditDialog() {
            this.rowToEdit= {}
            this.indexToEdit = null;
            this.$v.rowToEdit.$reset()
            this.displayEditDialog = false;
        },
        editRow() {
            this.$v.rowToEdit.$touch();
            if (!this.$v.rowToEdit.$invalid){
                this.formula[this.indexToEdit]= {...this.rowToEdit};
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
            this.formula.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    },

};
</script>
