<template>
    <div class="ocular-medication">
        <Base>
          <div class="row">
                <div class="col-12 d-flex justify-content-between">
                  <h4>{{$t('ocularMedication.header')}}</h4>
                  <ResetButton @reset="reset"></ResetButton>            
                </div> 
           </div>        
            <div class="row">
                <div class="col-md-4">                
                    <div class="form-group drug-name">
                        <label class="form-label">{{$t('rx.drugName.label')}}</label>
                        <div class="p-inputgroup">
                            <span 
                                class="p-inputgroup-addon" 
                                :class="{'p-invalid':
                                    $v.rowToAdd.drugName.$error 
                                }"
                                >
                                <i class="mdi mdi-pill"></i>
                                </span>
                                <AutoComplete
                                v-model="rowToAdd.drugName"
                                :suggestions="drugNameParams.suggestions"
                                :class="{'p-invalid':$v.rowToAdd.drugName.$error}"                          
                                field="value"  
                                :placeholder="$t('rx.drugName.placeholder')" 
                                @complete="search($event,drugNameParams)"
                            />
                        </div>
                        <div class="error">
                            <small class="p-invalid" v-if="$v.rowToAdd.drugName.$error&&!$v.rowToAdd.drugName.validator">
                                {{inputError($t('rx.drugName.label'))}}
                            </small>
                            <small class="p-invalid" v-else-if="$v.rowToAdd.drugName.$error&&!$v.rowToAdd.drugName.required">
                                {{requiredError($t('rx.drugName.label'))}}
                            </small>
                        </div>
                    </div>
                </div> 
                <div class="col-md-4">
                    <div class="form-group drug-form">
                        <label class="form-label">{{$t('rx.form.label')}}</label>
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">
                                <i class="mdi mdi-pill"></i>
                            </span>
                            <Dropdown
                            v-model="rowToAdd.form"
                            :class="{'p-invalid':$v.rowToAdd.form.$error} "
                            :options="formOptions"
                            optionLabel="value"
                            :placeholder="$t('rx.form.placeholder')" 
                            :filter="true"
                            />
                        </div>
                        <div class="error">
                            <small class="p-invalid" v-if="$v.rowToAdd.form.$error && !$v.rowToAdd.form.notContainsHtmlTags">
                            {{htmlTagsError($t('rx.drugForm.label'))}}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group strength">
                        <CustomInputGroup
                            v-model="rowToAdd.strength"
                            :label="$t('rx.strength.label')"
                            :inputType="'text'"
                            :valuePlaceholder="$t('rx.strength.valuePlaceholder')" 
                            :dropdownPlaceholder="$t('rx.strength.dropdownPlaceholder')"
                            :options="strengthUnitOptions" 
                            :invalidValue="$v.rowToAdd.strength.value.$error" 
                        />
                        <div class="error">
                            <small 
                                class="p-invalid" 
                                v-if="$v.rowToAdd.strength.value.$error && !$v.rowToAdd.strength.value.validStrength">
                                {{inputError($t('rx.strength.label'))}}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group period">
                        <CustomInputGroup 
                            v-model="rowToAdd.period"
                            :label="$t('rx.period.label')" 
                            :valueType="'number'" 
                            :valuePlaceholder="$t('rx.period.valuePlaceholder')" 
                            :dropdownPlaceholder="$t('rx.period.dropdownPlaceholder')"
                            :options="periodUnitOptions" 
                            :invalidValue="$v.rowToAdd.period.value.$error"
                        />
                        <div class="error">
                            <small 
                                class="p-invalid" 
                                v-if="$v.rowToAdd.period.value.$error && !$v.rowToAdd.period.value.numeric">
                                {{numericError($t('rx.period.label'))}}
                            </small>
                            <small
                                v-else-if="
                                    !$v.rowToAdd.period.value.maxValue &&
                                    $v.rowToAdd.period.value.$error
                                "
                                class="p-invalid"
                                >
                                {{
                                    maxValueError(
                                    $t("rx.period.label"),
                                    $v.rowToAdd.period.value.$params.maxValue.max
                                    )
                                }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <AddButton @add="addRow"></AddButton>
                    <small
                        v-if="v.rx.$error && !v.rx.maxLength"
                        class="p-invalid"
                        >
                        {{
                            maxRecordsError(
                            $t("ocularMedication.header"),
                            v.rx.$params.maxLength.max
                            )
                        }}    
                    </small>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">{{$t('ocularMedication.note.label')}}</label>
                        <textarea 
                            v-model="ocularMedication.note" 
                            :placeholder="$t('ocularMedication.note.placeholder')" 
                            class="form-control"
                            :class="{
                                'is-invalid':
                                (v.note.$invalid)
                                ||
                                (serializer_error.note?serializer_error.note.length>0:false)
                            }" 
                        ></textarea>
                        <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('ocularMedication.note.label'))}}
                        </div>
                        <div v-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                                {{minLengthError($t('ocularMedication.note.label'), v.ocularMedication.note.$params.minLength.min)}}
                        </div>
                        <div v-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                                {{maxLengthError($t('ocularMedication.note.label'), v.note.$params.maxLength.max)}}
                        </div> 
                    </div>
                </div>
            </div>
        </Base>
    <div class="table-wrapper my-2" v-if="ocularMedication.rx.length>0">
      <Base>
        <div class="row my-2">      
          <div class="col-12">
            <div class="table-responsive"  >
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('rx.drugName.label')}}</th>
                            <th scope="col">{{$t('rx.form.label')}}</th>
                            <th scope="col">{{$t('rx.strength.label')}}</th>
                            <th scope="col">{{$t('rx.period.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in ocularMedication.rx" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <div v-if="val.drugName">
                                  <span v-if="(typeof val.drugName == 'object')">{{val.drugName.value}}</span>
                                  <span v-else>{{val.drugName}}</span>
                                </div>
                            </td>
 
                            <td class="align-middle">
                                <div v-if="val.form">
                                    {{val.form.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.strength.value">{{val.strength.value}}</div>
                                <div v-if="val.strength.selection">{{val.strength.selection.value}}</div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.period.value">{{val.period.value}}</div>
                                <div v-if="val.period.selection">{{val.period.selection.value}}</div>
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
    <EditDialog :display="displayEditDialog" @close="closeEditDialog" @cancel="closeEditDialog" @save="editRow" :header="$t('ocularMedication.header')">
        <div class="row" v-if="rowToEdit">
            <div class="col-md-12 col-xxl-6">                
                    <div class="form-group drug-name">
                        <label class="form-label">{{$t('rx.drugName.label')}}</label>
                        <div class="p-inputgroup">
                            <span 
                                class="p-inputgroup-addon" 
                                :class="{'p-invalid':
                                    $v.rowToEdit.drugName.$error 
                                }"
                                >
                                <i class="mdi mdi-pill"></i>
                                </span>
                                <AutoComplete
                                v-model="rowToEdit.drugName"
                                :suggestions="drugNameParams.suggestions"
                                :class="{'p-invalid':$v.rowToEdit.drugName.$error}"                          
                                field="value"  
                                :placeholder="$t('rx.drugName.placeholder')" 
                                @complete="search($event,drugNameParams)"
                            />
                        </div>
                        <div class="error">
                            <small class="p-invalid" v-if="$v.rowToEdit.drugName.$error&&!$v.rowToEdit.drugName.validator">
                                {{inputError($t('rx.drugName.label'))}}
                            </small>
                            <small class="p-invalid" v-else-if="$v.rowToEdit.drugName.$error&&!$v.rowToEdit.drugName.required">
                                {{requiredError($t('rx.drugName.label'))}}
                            </small>
                        </div>
                    </div>
            </div> 

            <div class="col-md-12 col-xxl-6">
                <div class="form-group drug-form">
                    <label class="form-label">{{$t('rx.form.label')}}</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <Dropdown
                        v-model="rowToEdit.form"
                        :class="{'p-invalid':$v.rowToEdit.form.$error}"
                        :options="formOptions"
                        optionLabel="value"
                        :placeholder="$t('rx.form.placeholder')" 
                        :filter="true"
                        />
                    </div>
                    <div class="error">
                        <small class="p-invalid" v-if="$v.rowToEdit.form.$error && !$v.rowToEdit.form.notContainsHtmlTags">
                        {{htmlTagsError($t('rx.drugForm.label'))}}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-xxl-6">
                <div class="form-group strength" v-if="rowToEdit.strength">
                    <CustomInputGroup 
                        v-model="rowToEdit.strength"
                        :label="$t('rx.strength.label')"
                        :inputType="'number'" 
                        :valuePlaceholder="$t('rx.strength.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('rx.strength.dropdownPlaceholder')"
                        :options="strengthUnitOptions" 
                        :invalidValue="$v.rowToEdit.strength.value.$error"
                    />
                    <div class="error">
                        <small 
                            class="p-invalid" 
                            v-if="$v.rowToEdit.strength.value.$error && !$v.rowToEdit.strength.value.validStrength">
                            {{inputError($t('rx.strength.label'))}}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-xxl-6">
                <div class="form-group period" v-if="rowToEdit.period">
                    <CustomInputGroup 
                        v-model="rowToEdit.period"
                        :label="$t('rx.period.label')" 
                        :inputType="'number'" 
                        :valuePlaceholder="$t('rx.period.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('rx.period.dropdownPlaceholder')"
                        :options="periodUnitOptions" 
                        :invalidValue="$v.rowToEdit.period.value.$error"

                    />
                    <div class="error">
                        <small 
                            class="p-invalid" 
                            v-if="$v.rowToEdit.period.value.$error && !$v.rowToEdit.period.value.numeric">
                            {{numericError($t('rx.period.label'))}}
                        </small>
                        <small
                            v-else-if="
                            !$v.rowToEdit.period.value.maxValue &&
                            $v.rowToEdit.period.value.$error
                            "
                            class="p-invalid"
                        >
                            {{
                            maxValueError(
                                $t("rx.period.label"),
                                $v.rowToEdit.period.value.$params.maxValue.max
                            )
                            }}
                    </small>
                    </div>
                </div>
            </div>
        </div>
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow" ></DeleteDialog>
    </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/global/rx/rx.json"></i18n>
<i18n src="@/lang/mr/ophthalmic/history.json"></i18n>
<script>
///////////////////////////////////
import { cloneDeep } from "lodash";
//////////////////////////////////
// import rxOptions from '@/mixins/mr/global/rx/options/rxOptions'
import historyOptions from "@/mixins/mr/ophthalmic/options/historyOptions";

import { mapGetters } from "vuex";
import 
 {
    numeric,
    required, 
    maxValue
 } from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
import 
{   htmlTagsError,
    inputError,
    numericError,
    maxRecordsError,
    requiredError,
    maxValueError,
} from '@/validation/errors'
import CustomInputGroup from "@/components/global/custom/CustomInputGroup.vue"
import Base from '@/components/global/utilities/Base.vue'
import AddButton from "@/components/global/utilities/AddButton.vue"
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
import EditDialog from "@/components/global/utilities/EditDialog.vue"    
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
import ResetButton from "@/components/global/utilities/ResetButton.vue"
export default {
    mixins:[historyOptions],
    props:{
        v:{
            type:Object,
            required:true
        },
        check_error:{
            type:Object,
        },
        serializer_error:{
            type:Object,
        },
    },
    components:{
        Base,
        CustomInputGroup,
        AddButton,
        EditButton,
        DeleteButton,         
        EditDialog,
        DeleteDialog,
        ResetButton,
    },
    data(){
        return{
            rowToAdd:{
                drugName:null,
                form:null,
                strength:{
                    selection: null,
                    value:''
                },
               period:{
                  selection: null,
                    value:''
                },
            },
            rowToEdit:{},
            indexToEdit:null,
            displayEditDialog: false,
            indexToDelete:null,
            displayDeleteDialog: false,          
        }
    },
    /////////////////////////
    computed:{
        ...mapGetters('detailsOphthalmic/ophthalmic',['getOcularMedication'] ),
        ocularMedication:{
            get() {
                return this.getOcularMedication;
            },
            set(value) {
                this.$store.dispatch('detailsOphthalmic/ophthalmic/setOcularMedication', value);
            }
        },
    },
    /////////////////////////////
    validations:{
        rowToAdd:{
            drugName:{
                required,
                validator: (value) => {
                    if(typeof value == 'object' || value == null || value == '')
                    return true;
                    else {
                        return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                    }
                },
            },
            form:{
                notContainsHtmlTags(value) {
                    if (value == '' ||typeof(value)=="object")
                        return true ; 
                    return notContainsHtmlTags(value);
                    
                },
            },
            strength:{
                value:{
                    validStrength(val){
                        if (val == '')
                            return true ; 
                        const dataRegux = /^(\d{1,4}(\/|:|-)\d{1,5})$|^(\d{1,4})$/g ;
                        if (val.search(dataRegux) !=-1)
                            return true;
                        return false;
                    }
                }
            },
            period:{
                value:{
                   numeric,
                   maxValue: maxValue(100),
                }
            },
        },
        rowToEdit:{
            drugName:{
                required,
                validator: (value) => {
                    if(typeof value == 'object' || value == null || value == '')
                    return true;
                    else {
                        return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                    }
                },
            },
            form:{
                notContainsHtmlTags(value) {
                    if (value == '' ||typeof(value)=="object")
                        return true ; 
                    return notContainsHtmlTags(value);
                    
                },
            },
            strength:{
                value:{
                    validStrength(val){
                        if (val == '')
                            return true ; 
                        const dataRegux = /^(\d{1,4}(\/|:|-)\d{1,5})$|^(\d{1,4})$/g ;
                        if (val.search(dataRegux) !=-1)
                            return true;
                        return false;
                    }
                }
            },
            period:{
                value:{
                    numeric,
                   maxValue: maxValue(100),
                }
            },
        },
    },
    watch:{
        'rowToAdd.period': {
            deep: true,
            handler(newValue, oldValue) {
                this.handlePeriodInput();
            },
        },
        'rowToEdit.period': {
            deep: true,
            handler(newValue, oldValue) {
                this.handlePeriodEditInput();
            },
        },
    },
    methods:{
        htmlTagsError,
        requiredError,
        inputError,
        numericError,
        maxValueError,
        maxRecordsError,
        /////////////////////////////
        resetForm(){
            this.rowToAdd = {
                drugName:null,
                form:null,
                strength:{
                    selection: null,
                    value:""
                },
                period:{
                    selection: null,
                    value:''
                },
            }
              this.$v.rowToAdd.$reset();
        },
        reset(){
            this.resetForm();
            this.v.$reset();
            this.ocularMedication= {
                    rx: [],
                    note: "",
                }
        },
        //////////////////////////////
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!(this.v.$invalid || this.$v.rowToAdd.$invalid )){
            this.ocularMedication.rx.push({...this.rowToAdd});
              this.resetForm();
            }
        },
        ////////////////////////////////
        openEditDialog(val,index) {
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
        editRow(){
          this.$v.rowToEdit.$touch();
            this.v.$touch();
            if (!(this.v.$invalid || this.$v.rowToEdit.$invalid)) {
                this.ocularMedication.rx[this.indexToEdit] = { ...this.rowToEdit };
                this.closeEditDialog();
            }
        },
        //////////////////////////////////////
        openDeleteDialog(index) {
          this.displayDeleteDialog = true;
          this.indexToDelete =index
        },
        closeDeleteDialog() {
          this.displayDeleteDialog = false;
          this.indexToDelete =null
        },
        deleteRow(){
            this.ocularMedication.rx.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },

        /////////////////////////////////////////
        handlePeriodInput(){
            if(this.rowToAdd.period.selection){
            if(this.rowToAdd.period.selection.value=='life time'){
                this.rowToAdd.period.value=''
            }}
        },
        handlePeriodEditInput(){
            if(this.rowToEdit.period){
                if(this.rowToEdit.period.selection){
                if(this.rowToEdit.period.selection.value=='life time'){
                    this.rowToEdit.period.value=''
                }
            }}
        },
    },
}
</script>
<style lang="scss" scoped>
.ocular-medication{
    // .p-inputgroup-addon.p-invalid {
    //     border-color: red;
    // }
}
</style>