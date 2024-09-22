<template>
  <div class="form">
    <div class="upload-area">
        <Base>
            <DropFile :staticRef="'drop-form-general'" v-model="inputFile" @ready="openAddDialog" 
            :accept="['image','document']"></DropFile>
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
                   
                    <div v-else-if="! $v.rowToAdd.title.maxLength &&  $v.rowToAdd.title.$error" class="invalid-feedback">
                        {{maxLengthError($t('title.label'), $v.rowToAdd.title.$params.maxLength.max)}}
                    </div>
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
<i18n src="@/lang/erp/media.json"></i18n>
<script>
//////////////////////////////////////////////////////////
import {inputError,htmlTagsError,maxLengthError,fileSizeError,requiredError,maxRecordsError} from "@/validation/errors";
import {maxLength,required} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
// //////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import DropFile from '@/components/global/file-handling/DropFile.vue'
import DisplayFileBtn from '@/components/global/file-handling/DisplayFileBtn.vue'
import EditDialog from "@/components/global/utilities/EditDialog.vue"  
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"  
//////////////////////////////////////////////////////////////////////////
export default {
    props:{
        value:{
            required:true,
            type: Array,
            default(){
                return []
            }
        },
        isUpdating:{
            type: Boolean,
            default(){
                return false
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
                comment:"",
                file:""
            },
            indexToEdit:null,
            displayAddModal: false,
            indexToDelete:null,
            displayDeleteModal: false,
            recordsToDisplay:[],
            fileTypes:{
              image: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'],
              video: ['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'],
              audio: ['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'],
              document: 
              ['doc', 'txt', 'docx', 'pages', 'epub', 'pdf', 'numbers', 'csv', 'xls', 'xlsx', 'keynote', 'ppt', 'pptx']
            },
        }
    },
    validations:{
        rowToAdd:{
            title: {
                required,
               
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
                },
            },
            comment: {
              
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
        // isUpdating(){
        //     if(this.isUpdating){
        //     this.recordsToDisplay = [...this.value]
        // }
        // }, 
    }, 
    mounted(){
        if(this.isUpdating){
            let records = [...this.value]
            records.forEach(record=>{
                const {title,comment} = record
                let file = this.handleFile(record.file);
                console.log(title)
                console.log(comment)
                console.log(file)
                this.recordsToDisplay.push({title,file,comment})
            })
        }
    },   
    methods:{
        /////////////////////////
        inputError,
        htmlTagsError,
        maxLengthError,
        fileSizeError,
        requiredError,
        maxRecordsError,
        /////////////////////////
        resetForm(){
            this.rowToAdd = {
                title:"",
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
                        comment: this.rowToAdd.comment,
                        file: {...this.inputFile}
                    }
                    this.recordsToDisplay.push(displayRecord);
                    this.closeAddDialog()
                    this.resetForm()
                }
            }
        },
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
        },
        handleFile(val) {
            if (val){
                let fileExt = val.split('.').pop();
                console.log(fileExt)
                let type = "";
                if (this.fileTypes.image.includes(fileExt.toLowerCase()))
                {
                    type = "image";
                }
                else if (this.fileTypes.document.includes(fileExt.toLowerCase())) {
                    type = "document";
                }
                else {
                    type = "other";
                }
                return { 
                    type: type, 
                    extension:fileExt,
                    validExtension:true, 
                    validSize: true, 
                    rawFile: true, 
                };
            }
        },    
    },
}
</script>

<style lang="scss" scoped>
.upload-area {
    border-radius: 1.5rem;
    border: 0.25rem dashed $secondary !important;
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
</style>