<template>
  <div class="form-component">
    <div class="upload-area">
        <Base>
            <DropFile :staticRef="'drop-form-general'" v-model="inputFile" @ready="openAddDialog" 
              :accept="['image','video','document']">
          </DropFile>
        </Base>
    </div>
    <div class="uploaded-files my-2" v-if="recordsToDisplay.length">
        <Base>
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                    <h4>{{ $t('header') }}</h4>
                    <ResetButton @reset="reset"></ResetButton>            
                </div>
            </div>  
            <div class="row">
                <div class="col-12">
                    <div v-if="v">
                        <small v-if="v.$error&&!v.maxLength" class="p-invalid">
                            {{maxRecordsError($t('header'),v.$params.maxLength.max)}}
                        </small>
                    </div>
                    <div class="p-2">
                        <strong>{{$t('uploadedDocs')}} : </strong><small>{{ recordsToDisplay.length }}</small>
                    </div>
                </div>
                <div class="col-12">
                    <div class="w-100 d-flex flex-wrap">
                        <div v-for="(record,index) in recordsToDisplay" :key="index" class="flex-grow-1 flex-md-grow-0">
                            <div class="file-record m-2">
                                <div class="p-2">
                                    <DisplayFileBtn :file="record.file" @deleteFileItem="openDeleteDialog"></DisplayFileBtn>
                                </div>
                                <h6 class="p-2">
                                    <strong>{{$t('title.label')}} : </strong>
                                    <small>{{record.title}}</small>
                                </h6>
                                <p class="p-2">
                                    <strong>{{$t('comment.label')}} : </strong>
                                    <small>{{record.comment}}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    </div>
    <EditDialog :display="displayAddModal" @cancel="closeAddDialog" @close="closeAddDialog" @save="addRow" :header="$t('header')">    
        <div class="row">
            <div class="col-md-6 col-xl-4">
                <div class="form-group">
                    <label class="form-label">{{$t('title.label')}}</label>
                    <input 
                        type="text" 
                        :placeholder="$t('title.placeholder')" 
                        v-model="rowToAdd.title"
                        class="form-control" 
                        :class="{
                            'is-invalid':
                            $v.rowToAdd.title.$invalid && $v.rowToAdd.title.$anyDirty && $v.rowToAdd.title.$anyError
                        }"
                    >
                    <div v-if="! $v.rowToAdd.title.required &&  $v.rowToAdd.title.$error" class="invalid-feedback">
                        {{requiredError($t('title.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.title.notContainsHtmlTags &&  $v.rowToAdd.title.$error" class="invalid-feedback">
                        {{htmlTagsError($t('title.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.title.minLength &&  $v.rowToAdd.title.$error" class="invalid-feedback">
                        {{minLengthError($t('title.label'), $v.rowToAdd.title.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.title.maxLength &&  $v.rowToAdd.title.$error" class="invalid-feedback">
                        {{maxLengthError($t('title.label'), $v.rowToAdd.title.$params.maxLength.max)}}
                    </div>
                </div>
            </div>        
            <div class="col-md-6 col-xl-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('section.label')}}</label>
                <Dropdown 
                  v-model="rowToAdd.section"
                  :options="sectionOptions" 
                  optionLabel="value" 
                  :placeholder="$t('section.placeholder')" 
                  :class="{'p-invalid':$v.rowToAdd.section.$error}"
                 />
                 <small class="p-invalid" v-if="!$v.rowToAdd.section.required &&  $v.rowToAdd.section.$error">
                    {{requiredError($t('section.label'))}}
                 </small>
              </div>
            </div>            
            <div class="col-md-6 col-xl-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('status.label')}}</label>
                <Dropdown 
                  v-model="rowToAdd.status"
                  :options="statusOptions" 
                  optionLabel="value" 
                  :placeholder="$t('status.placeholder')" 
                  :class="{'p-invalid':$v.rowToAdd.status.$error}"
                 />
                 <small class="p-invalid" v-if="!$v.rowToAdd.status.required &&  $v.rowToAdd.status.$error">
                    {{requiredError($t('status.label'))}}
                 </small>
              </div>
            </div>            
            <div class="col-md-6 col-xl-4">
                <div class="form-group">
                    <label class="form-label">{{$t('comment.label')}}</label>
                    <input 
                        type="text" 
                        :placeholder="$t('comment.placeholder')" 
                        v-model="rowToAdd.comment"
                        class="form-control" 
                        :class="{
                            'is-invalid':
                            $v.rowToAdd.comment.$invalid && $v.rowToAdd.comment.$anyDirty && $v.rowToAdd.comment.$anyError
                        }"
                    >
                    <div v-if="! $v.rowToAdd.comment.notContainsHtmlTags &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{htmlTagsError($t('comment.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.minLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{minLengthError($t('comment.label'), $v.rowToAdd.comment.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.comment.maxLength &&  $v.rowToAdd.comment.$error" class="invalid-feedback">
                            {{maxLengthError($t('comment.label'), $v.rowToAdd.comment.$params.maxLength.max)}}
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-4" v-if="inputFile">
                <div class="form-group">
                    <label class="form-label">{{$t('file.label')}}</label>
                    <DisplayFileBtn :file="inputFile" @deleteFileItem="closeAddDialog"></DisplayFileBtn>
                </div>
            </div>
        </div>
    </EditDialog>
    <DeleteDialog :display="displayDeleteModal" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/global/form/form.json"></i18n>
<script>
//////////////////////////////////////////////////////////
import {inputError,htmlTagsError,minLengthError,maxLengthError,fileSizeError,requiredError,maxRecordsError} from "@/validation/errors";
import {minLength,maxLength,required} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
// //////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import DropFile from '@/components/global/file-handling/DropFile.vue'
import DisplayFileBtn from '@/components/global/file-handling/DisplayFileBtn.vue'
import EditDialog from "@/components/global/utilities/EditDialog.vue"  
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"  
//////////////////////////////////////////////////////////////////////////
import formOptions from "@/mixins/mr/global/form/formOptions";
export default {
    mixins:[formOptions],
    props:{
        formOptions:{
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
        check_error:{
            type:Object,
        },
        v:{
            type:Object,
        },
        serializer_error:{
            type:Object,
        },         
    },
    components:{
        DropFile,
        DisplayFileBtn,
        Base,
        ResetButton,
        EditDialog,
        DeleteDialog,
    },
    data(){
        return {
            inputFile: {},
            form:this.value,
            rowToAdd:{
                title:"",
                section:null,
                status:null,
                comment:"",
                file:""
            },
            indexToEdit:null,
            displayAddModal: false,
            indexToDelete:null,
            displayDeleteModal: false,
            recordsToDisplay:[],
        }
    },
    validations:{
        rowToAdd:{
            title: {
                required,
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
                },
            },
            section: {
                required,
            },
            status: {
                required,
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
    watch:{
        value(){
            if(!this.value)
                this.form=[]
        },
        form:{
            deep: true,
            handler(newValue, oldValue) {
                this.$emit('input',[...this.form])
            },
        },        
    },    
    methods:{
        /////////////////////////
        inputError,
        htmlTagsError,
        maxLengthError,
        minLengthError,
        fileSizeError,
        requiredError,
        maxRecordsError,
        /////////////////////////
        resetForm(){
            this.rowToAdd = {
                title:"",
                section:null,
                status:null,
                comment:"",
                file:""
            };
            this.$v.rowToAdd.$reset();
        },
        reset(){
            this.resetForm();
            this.form=[];
            this.recordsToDisplay=[];
            this.v.$reset();
        },
        addRow(){
            this.v.$touch();
            this.$v.rowToAdd.$touch();
            if (this.inputFile.base64 && this.inputFile.validExtension && this.inputFile.validSize){
                if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
                    this.rowToAdd.file = this.inputFile.base64
                    this.form.push({...this.rowToAdd});
                    let displayRecord={
                        title: this.rowToAdd.title,
                        section: this.rowToAdd.section,
                        status: this.rowToAdd.status,
                        comment: this.rowToAdd.comment,
                        file: {...this.inputFile}
                    }
                    this.recordsToDisplay.push(displayRecord);
                    this.closeAddDialog()
                    this.resetForm()
                }
            }
        },
        // addRow(){
        //     this.v.$touch();
        //     this.$v.rowToAdd.$touch();
        //     if (this.inputFile.base64){
        //         if (this.inputFile.validExtension && this.inputFile.validSize){
        //             let validTypeList=['image','video','document']
        //             if(validTypeList.includes(this.inputFile.type)){
        //                 this.rowToAdd.file = this.inputFile.base64
        //                 if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
        //                 // if(!this.$v.rowToAdd.$invalid){
        //                     this.form.push({...this.rowToAdd});
        //                     let displayRecord={
        //                         title: this.rowToAdd.title,
        //                         section: this.rowToAdd.section,
        //                         status: this.rowToAdd.status,
        //                         comment: this.rowToAdd.comment,
        //                         file: {...this.inputFile}
        //                     }
        //                     this.recordsToDisplay.push(displayRecord);
        //                     this.closeAddDialog()
        //                 }
        //             }
        //         }
        //     }
        //     else {
        //         if(!(this.$v.rowToAdd.$invalid)){
        //             this.form.push({...this.rowToAdd});
        //             let displayRecord={
        //                 title: this.rowToAdd.title,
        //                 section: this.rowToAdd.section,
        //                 status: this.rowToAdd.status,
        //                 comment: this.rowToAdd.comment,
        //                 file: {...this.inputFile}
        //             }
        //             this.recordsToDisplay.push(displayRecord);
        //             this.closeAddDialog()
        //         } 
        //     }
        // },
        ////////////////////////
        
        
        openAddDialog(){
            this.displayAddModal=true;
        },
        closeAddDialog(){
            this.displayAddModal=false;
            this.inputFile={};
            this.resetForm();
        },
        openDeleteDialog(index) {
          this.displayDeleteModal = true;
          this.indexToDelete =index
        },
        closeDeleteDialog() {
          this.displayDeleteModal = false;
          this.indexToDelete =null
        },
        deleteRow(){
            this.form.splice(this.indexToDelete,1);
            this.recordsToDisplay.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },  
        deleteFileItem(){
            this.inputFile = {}
        }    
    },
}
</script>

<style lang="scss" scoped>
.upload-area {
    border-radius: 1.5rem;
}
.file-record {
    // max-width: 200px;
    border: 1px solid $success;
    border-radius:4px;
    box-shadow: 1px 1px 4px $gray;
    h6,p{
        max-width: 220px;
    }
}
/deep/.content {
    border: dashed 2px #20507287;
    border-radius: 1rem;
}
</style>