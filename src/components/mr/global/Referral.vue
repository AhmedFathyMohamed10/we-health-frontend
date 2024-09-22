<!-- <template>
<div class="referral">
    <Base>    
        <div class="row">
            <div class="col-md-4">                
                <div class="form-group recommendation">
                    <label class="form-label">{{$t('referral.recommendation.label')}}</label>
                    <div class="p-inputgroup">
                        <span 
                            class="p-inputgroup-addon" 
                            :class="{'p-invalid':$v.rowToAdd.recommendation.manualInsertion.$invalid}"
                        >
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <AutoComplete
                            v-if="rowToAdd.recommendation.selection.english && rowToAdd.recommendation.selection.arabic"   
                            v-model="rowToAdd.recommendation.selection"
                            :suggestions="recommendationsSuggestions"
                            :field="locale=='ar'?'arabic':'english'"  
                            :placeholder="$t('referral.recommendation.placeholder')" 
                            @complete="searchRecommendations($event)"
                        />
                        <AutoComplete
                            v-else   
                            v-model="rowToAdd.recommendation.manualInsertion"
                            :suggestions="recommendationsSuggestions"
                            :field="locale=='ar'?'arabic':'english'"  
                            :placeholder="$t('referral.recommendation.placeholder')" 
                            @complete="searchRecommendations($event)"
                            :class="{'p-invalid':$v.rowToAdd.recommendation.manualInsertion.$invalid}"
                        />
                    </div>
                    <div class="error">
                        <small class="d-block text-danger" v-if="$v.rowToAdd.recommendation.manualInsertion.$error && !$v.rowToAdd.recommendation.manualInsertion.notContainsHtmlTags">
                            {{htmlTagsError($t('referral.recommendation.label'))}}
                        </small>
                        <small class="d-block text-danger" v-else-if="!$v.rowToAdd.recommendation.manualInsertion.minLength">
                            {{minLengthError($t('referral.recommendation.label'),$v.rowToAdd.recommendation.manualInsertion.$params.minLength.min)}}
                        </small>
                        <small class="d-block text-danger" v-else-if="!$v.rowToAdd.recommendation.manualInsertion.maxLength">
                            {{maxLengthError($t('referral.recommendation.label'), $v.rowToAdd.recommendation.manualInsertion.$params.maxLength.max) }}
                        </small>
                    </div>
                </div>
            </div>          
            <div class="col-md-4">
                <div class="form-group">
                    <label for="" class="form-label">{{$t('referral.comment.label')}}</label>
                    <input 
                    type="text" 
                    :placeholder="$t('referral.comment.placeholder')" 
                    v-model="rowToAdd.comment"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        $v.rowToAdd.comment.$invalid && $v.rowToAdd.comment.$anyDirty && $v.rowToAdd.comment.$anyError
                    }"
                    >
                    <div v-if="! $v.rowToAdd.comment.notContainsHtmlTags &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{htmlTagsError($t('referral.comment.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.minLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{minLengthError($t('referral.comment.label'), $v.rowToAdd.comment.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.maxLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{maxLengthError($t('referral.comment.label'), $v.rowToAdd.comment.$params.maxLength.max)}}
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <AddButton @add="addRow"></AddButton>
            </div>
        </div>
    </Base>
    <div class="table-wrapper my-2" v-if="referral.length>0">
        <Base >
            <div class="row my-2">      
                <div class="col-12">
                    <div class="table-responsive">
                        <table class="table table-sm text-center">
                            <thead>
                                <tr>
                                    <th scope="col">{{$t('table.thead.count')}}</th>
                                    <th scope="col">{{$t('referral.recommendation.label')}}</th>
                                    <th scope="col">{{$t('referral.comment.label')}}</th>
                                    <th scope="col">{{$t('table.thead.controls')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(val, index) in referral" :key="index">
                                    <td class="align-middle">{{parseInt(index)+1}}</td>
                                    <td class="align-middle">
                                        <div v-if="val.recommendation.manualInsertion">
                                        {{val.recommendation.manualInsertion}}
                                        </div>
                                        <div v-if="val.recommendation.selection.english">
                                        {{locale == 'ar' ? val.recommendation.selection.arabic : val.recommendation.selection.english}}
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

    <Dialog :visible.sync="displayEditDialog" :closable="false" :containerStyle="{'min-width': '50vw','max-width':'90vw'}">
    </Dialog>
    <EditDialog :display="displayEditDialog" @cancel="closeEditDialog" @save="editRow">
        <div class="row" v-if="rowToEdit">
            <div class="col-md-6">                
                <div class="form-group recommendation" v-if="rowToEdit.recommendation">
                    <label class="form-label">{{$t('referral.recommendation.label')}}</label>
                    <div class="p-inputgroup">
                        <span 
                            class="p-inputgroup-addon" 
                            :class="{'p-invalid':$v.rowToEdit.recommendation.manualInsertion.$invalid}"
                        >
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <AutoComplete
                            v-if="rowToEdit.recommendation.selection.english && rowToEdit.recommendation.selection.arabic"   
                            v-model="rowToEdit.recommendation.selection"
                            :suggestions="recommendationsSuggestions"
                            :field="locale=='ar'?'arabic':'english'"  
                            :placeholder="$t('referral.recommendation.placeholder')" 
                            @complete="searchRecommendations($event)"
                        />
                        <AutoComplete
                            v-else   
                            v-model="rowToEdit.recommendation.manualInsertion"
                            :suggestions="recommendationsSuggestions"
                            :field="locale=='ar'?'arabic':'english'"  
                            :placeholder="$t('referral.recommendation.placeholder')" 
                            @complete="searchRecommendations($event)"
                            :class="{'p-invalid':$v.rowToEdit.recommendation.manualInsertion.$invalid}"
                        />
                    </div>
                    <div class="error">
                        <small class="d-block text-danger" v-if="$v.rowToEdit.recommendation.manualInsertion.$error && !$v.rowToEdit.recommendation.manualInsertion.notContainsHtmlTags">
                            {{htmlTagsError($t('referral.recommendation.label'))}}
                        </small>
                        <small class="d-block text-danger" v-else-if="!$v.rowToEdit.recommendation.manualInsertion.minLength">
                            {{minLengthError($t('referral.recommendation.label'),$v.rowToEdit.recommendation.manualInsertion.$params.minLength.min)}}
                        </small>
                        <small class="d-block text-danger" v-else-if="!$v.rowToEdit.recommendation.manualInsertion.maxLength">
                            {{maxLengthError($t('referral.recommendation.label'), $v.rowToEdit.recommendation.manualInsertion.$params.maxLength.max) }}
                        </small>
                    </div>
                </div>
            </div>          
            <div class="col-md-6">
                <div class="form-group">
                <label for="" class="form-label">{{$t('referral.comment.label')}}</label>
                <input 
                    type="text" 
                    :placeholder="$t('referral.comment.placeholder')" 
                    v-model="rowToEdit.comment"
                    class="form-control" 
                    :class="{
                        'is-invalid':
                        $v.rowToEdit.comment.$invalid && $v.rowToEdit.comment.$anyDirty && $v.rowToEdit.comment.$anyError
                    }"
                >
                <div v-if="! $v.rowToEdit.comment.notContainsHtmlTags &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                        {{htmlTagsError($t('referral.comment.label'))}}
                </div>
                <div v-if="! $v.rowToEdit.comment.minLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                        {{minLengthError($t('referral.comment.label'), $v.rowToEdit.comment.$params.minLength.min)}}
                </div>
                <div v-if="! $v.rowToEdit.comment.maxLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                        {{maxLengthError($t('referral.comment.label'), $v.rowToEdit.comment.$params.maxLength.max)}}
                </div>
                </div>
            </div>
        </div>      
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>
</div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/global/referral/referral.json"></i18n><script>
// ////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,} from "@/validation/errors";
import {minLength,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
// //////////////////////////////////////////////////////////
import referralOptions from '@/mixins/mr/global/referral/options/referralOptions'
// //////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue"
import AddButton from "@/components/global/utilities/AddButton.vue"
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
import EditDialog from "@/components/global/utilities/EditDialog.vue"    
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
/////////////////////////////////////////////////////////////
export default {
    mixins:[referralOptions],
    props: {
        value:{
            required:true,
                type: Array,
                default(){
                    return []
                }
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
        EditButton,
        DeleteButton,
        EditDialog,
        DeleteDialog
    },
    data(){
        return {
        htmlTagsError,
        maxLengthError,
        minLengthError,
        referral: this.value,
        rowToAdd:{
            recommendation:{
                selection:{
                    english:"",
                    arabic:"",
                },
                manualInsertion:""
            },
            comment:"",
        },
        rowToEdit:{

        },
        indexToEdit:null,
        displayEditDialog: false,
        indexToDelete:null,
        displayDeleteDialog: false,
        recommendationsSuggestions: [],
        }
    },
    validations:{
        rowToAdd:{
            recommendation:{
                selection:{},
                manualInsertion:{
                    minLength: minLength(1),
                    maxLength: maxLength(255),
                    notContainsHtmlTags(value) {
                        if (value == '' || typeof(value)=="object")
                            return true ; 
                        return notContainsHtmlTags(value);
                        
                    },
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
            recommendation:{
                selection:{},
                manualInsertion:{
                    minLength: minLength(1),
                    maxLength: maxLength(255),
                    notContainsHtmlTags(value) {
                        if (value == '' || typeof(value)=="object")
                            return true ; 
                        return notContainsHtmlTags(value);
                        
                    },
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
        referral: {
            deep: true,
            handler(newValue, oldValue) {
                this.$emit('input',[...this.referral])
            },
        },
        'rowToAdd.recommendation': {
            deep: true,
            handler(newValue, oldValue) {
                this.handleRecommendationInput();
            },
        },
        'rowToEdit.recommendation': {
            deep: true,
            handler(newValue, oldValue) {
                this.handleRecommendationEditInput();
            },
        },    
    },
    methods: {
        searchRecommendations(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.recommendationsSuggestions = [...this.recommendationsOptions];
                }
                else {
                    this.recommendationsSuggestions = this.recommendationsOptions.filter((recommendationOption) => {
                        return recommendationOption.english.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        },
        /////////////////////////////////////////
        handleRecommendationInput(){
            if(typeof(this.rowToAdd.recommendation.manualInsertion)==='object'){
                this.rowToAdd.recommendation.selection=JSON.parse(JSON.stringify(this.rowToAdd.recommendation.manualInsertion));
                this.rowToAdd.recommendation.manualInsertion=''
            }
            if(typeof(this.rowToAdd.recommendation.selection)==='string'){
                this.rowToAdd.recommendation.manualInsertion=this.rowToAdd.recommendation.selection
                this.rowToAdd.recommendation.selection={english:'',arabic:''};
            }
        },
        handleRecommendationEditInput(){
            if(this.rowToEdit.recommendation){
                if(typeof(this.rowToEdit.recommendation.manualInsertion)=='object'){
                    this.rowToEdit.recommendation.selection=JSON.parse(JSON.stringify(this.rowToEdit.recommendation.manualInsertion));
                    this.rowToEdit.recommendation.manualInsertion=''
                }
            }
            if(this.rowToEdit.recommendation){
                if(typeof(this.rowToEdit.recommendation.selection)=='string'){
                    this.rowToEdit.recommendation.manualInsertion=this.rowToEdit.recommendation.selection
                    this.rowToEdit.recommendation.selection={english:'',arabic:''};
                }
            }
        },                
        /////////////////////////
        addRow(){
        this.$v.rowToAdd.$touch();
        if(!(
                this.$v.rowToAdd.$invalid ||
                !this.rowToAdd.recommendation.selection.english && 
                !this.rowToAdd.recommendation.manualInsertion && 
                !this.rowToAdd.comment 
            )){
                this.referral.push({...this.rowToAdd});
                this.rowToAdd = {
                    recommendation:{
                        selection:{
                            english:"",
                            arabic:"",
                        },
                        manualInsertion:""
                    },
                    comment:"",
                }
            }
            this.$v.rowToAdd.$reset();
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
        this.$v.rowToEdit.$touch();
        if (!this.$v.rowToEdit.$invalid){
            this.referral[this.indexToEdit]={...this.rowToEdit};
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
            this.referral.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    },

};
</script> -->







<template>
    <div class="referral">
        <Base>    
            <div class="row">
              <div class="col-12 d-flex justify-content-between">
                <h4>{{ $t('referral.header') }}</h4>
                <ResetButton @reset="reset"></ResetButton>            
              </div>
            </div>  
            <div class="row">
                <div class="col-md-4">                
                    <div class="form-group recommendation">
                        <label class="form-label">{{$t('referral.recommendation.label')}}</label>
                        <div class="p-inputgroup">
                            <span 
                                class="p-inputgroup-addon" 
                                :class="{'p-invalid':
                                $v.rowToAdd.recommendation.$error 
                                }"
                                >
                                <i class="mdi mdi-pill"></i>
                            </span>
                            <AutoComplete
                                v-model="rowToAdd.recommendation"
                                :suggestions="recommendationParams.suggestions"
                                :class="{'p-invalid':$v.rowToAdd.recommendation.$error}"                          
                                field="value"  
                                :placeholder="$t('referral.recommendation.placeholder')" 
                                @complete="search($event,recommendationParams)"
                            />
                        </div>
                        <div class="error">
                            <small class="p-invalid" v-if="$v.rowToAdd.recommendation.$error&&!$v.rowToAdd.recommendation.validator">
                                {{inputError($t('referral.recommendation.label'))}}
                            </small>
                            <small class="p-invalid" v-else-if="$v.rowToAdd.recommendation.$error&&!$v.rowToAdd.recommendation.required">
                                {{requiredError($t('referral.recommendation.label'))}}
                            </small>
                        </div>
                    </div>
                </div>                      
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="" class="form-label">{{$t('referral.comment.label')}}</label>
                        <input 
                        type="text" 
                        :placeholder="$t('referral.comment.placeholder')" 
                        v-model="rowToAdd.comment"
                        class="form-control" 
                        :class="{
                            'is-invalid':
                            $v.rowToAdd.comment.$invalid && $v.rowToAdd.comment.$anyDirty && $v.rowToAdd.comment.$anyError
                        }"
                        >
                        <div v-if="! $v.rowToAdd.comment.notContainsHtmlTags &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                                {{htmlTagsError($t('referral.comment.label'))}}
                        </div>
                        <div v-if="! $v.rowToAdd.comment.minLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                                {{minLengthError($t('referral.comment.label'), $v.rowToAdd.comment.$params.minLength.min)}}
                        </div>
                        <div v-if="! $v.rowToAdd.comment.maxLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                                {{maxLengthError($t('referral.comment.label'), $v.rowToAdd.comment.$params.maxLength.max)}}
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <AddButton @add="addRow"></AddButton>
                    <small v-if="v.$error&&!v.maxLength" class="p-invalid">
                    {{maxRecordsError($t('referral.header'),v.$params.maxLength.max)}}
                  </small>
                </div>
            </div>
        </Base>
        <div class="table-wrapper my-2" v-if="referral.length>0">
            <Base >
                <div class="row my-2">      
                    <div class="col-12">
                        <div class="table-responsive">
                            <table class="table table-sm text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">{{$t('table.thead.count')}}</th>
                                        <th scope="col">{{$t('referral.recommendation.label')}}</th>
                                        <th scope="col">{{$t('referral.comment.label')}}</th>
                                        <th scope="col">{{$t('table.thead.controls')}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(val, index) in referral" :key="index">
                                        <td class="align-middle">{{parseInt(index)+1}}</td>
                                        <td class="align-middle">
                                            <div v-if="val.recommendation">
                                                <span v-if="(typeof val.recommendation == 'object')">{{val.recommendation.value}}</span>
                                                <span v-else>{{val.recommendation}}</span>
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
    
        <EditDialog :display="displayEditDialog" @close="closeEditDialog" :header="$t('referral.header')" @cancel="closeEditDialog" @save="editRow">
            <div class="row" v-if="rowToEdit">
                <div class="col-md-6">                
                    <div class="form-group recommendation">
                        <label class="form-label">{{$t('referral.recommendation.label')}}</label>
                        <div class="p-inputgroup">
                            <span 
                                class="p-inputgroup-addon" 
                                :class="{'p-invalid':
                                $v.rowToEdit.recommendation.$error 
                                }"
                                >
                                <i class="mdi mdi-pill"></i>
                            </span>
                            <AutoComplete
                                v-model="rowToEdit.recommendation"
                                :suggestions="recommendationParams.suggestions"
                                :class="{'p-invalid':$v.rowToEdit.recommendation.$error}"                          
                                field="value"  
                                :placeholder="$t('referral.recommendation.placeholder')" 
                                @complete="search($event,recommendationParams)"
                            />
                        </div>
                        <div class="error">
                            <small class="p-invalid" v-if="$v.rowToEdit.recommendation.$error&&!$v.rowToEdit.recommendation.validator">
                                {{inputError($t('referral.recommendation.label'))}}
                            </small>
                            <small class="p-invalid" v-else-if="$v.rowToEdit.recommendation.$error&&!$v.rowToEdit.recommendation.required">
                                {{requiredError($t('referral.recommendation.label'))}}
                            </small>
                        </div>
                    </div>
                </div>                                  
                <div class="col-md-6">
                    <div class="form-group">
                    <label for="" class="form-label">{{$t('referral.comment.label')}}</label>
                    <input 
                        type="text" 
                        :placeholder="$t('referral.comment.placeholder')" 
                        v-model="rowToEdit.comment"
                        class="form-control" 
                        :class="{'is-invalid':$v.rowToEdit.comment.$error}"
                    >
                    <div v-if="! $v.rowToEdit.comment.notContainsHtmlTags &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                            {{htmlTagsError($t('referral.comment.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.comment.minLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                            {{minLengthError($t('referral.comment.label'), $v.rowToEdit.comment.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.comment.maxLength &&  $v.rowToEdit.comment.$error" class="invalid-feedback">
                            {{maxLengthError($t('referral.comment.label'), $v.rowToEdit.comment.$params.maxLength.max)}}
                    </div>
                    </div>
                </div>
            </div>      
        </EditDialog>
        <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow" ></DeleteDialog>
    </div>
    </template>
    <i18n src="@/lang/global/global.json"></i18n>
    <i18n src="@/lang/mr/global/referral/referral.json"></i18n>
    <script>
    // ////////////////////////////////////////////////////////
    import {htmlTagsError,minLengthError,maxLengthError,requiredError,maxRecordsError} from "@/validation/errors";
    import {minLength,maxLength,required} from "vuelidate/lib/validators";
    import {notContainsHtmlTags} from "@/validation/customValidators";
    // //////////////////////////////////////////////////////////
    import referralOptions from '@/mixins/mr/global/referral/options/referralOptions'
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
        mixins:[referralOptions],
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
            referral: this.value,
            rowToAdd:{
                recommendation:null,
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
                recommendation:{
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
                recommendation:{
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
            referral: {
                deep: true,
                handler(newValue, oldValue) {
                    this.$emit('input',[...this.referral])
                },
            },
        },
        methods: {
            /////////////////////////
            htmlTagsError,
            maxLengthError,
            minLengthError,
            requiredError,
            maxRecordsError,
            /////////////////////////
            resetForm(){
                this.rowToAdd ={
                    recommendation:null,
                    comment:"",
                }
                this.$v.rowToAdd.$reset();
            },
            reset(){
              this.resetForm();
              this.v.$reset();
              this.referral=[];
            },
            addRow(){
                this.v.$touch();
                this.$v.rowToAdd.$touch();
                if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
                    this.referral.push({...this.rowToAdd});
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
                    // this.referral[this.indexToEdit]={...this.rowToEdit};
                    this.referral.splice(this.indexToEdit,1,{...this.rowToEdit});
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
                this.referral.splice(this.indexToDelete,1);
                this.closeDeleteDialog();
            },
        },
    
    };
    </script>
    