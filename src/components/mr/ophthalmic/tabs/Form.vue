<template>
    <div class="form my-3">
        <Base>
            <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="form-label">{{$t('title.label')}}</label>
                    <input 
                      type="text" 
                      :placeholder="$t('title.placeholder')" 
                      v-model="rowToAdd.title"
                      class="form-control" 
                      :class="{
                          'is-invalid':
                          $v.rowToAdd.title.$errorrror
                      }"
                    >
                    <div v-if="! $v.rowToAdd.title.notContainsHtmlTags &&  $v.rowToAdd.title.$error" class="invalid-feedback">
                            {{htmlTagsError($t('title.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.title.minLength &&  $v.rowToAdd.title.$error" class="invalid-feedback">
                            {{minLengthError($t('title.label'), $v.rowToAdd.title.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.title.maxLength &&  $v.rowToAdd.title.$error" class="invalid-feedback">
                            {{maxLengthError($t('title.label'), $v.rowToAdd.title.$params.maxLength.max)}}
                    </div>
                  </div>
                </div>                
                <div class="col-md-4">
                  <div class="form-group">
                    <label class="form-label">{{$t('comment.label')}}</label>
                    <input 
                      type="text" 
                      :placeholder="$t('comment.placeholder')" 
                      v-model="rowToAdd.comment"
                      class="form-control" 
                      :class="{
                          'is-invalid':
                          $v.rowToAdd.comment.$error
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
                <div class="col-md-4 d-flex">
                    <div class="form-group">
                        <label for="" class="form-label invisible ">Uplaod</label>
                        <UploadFile v-model="inputFile" :staticRef="'form-tab-input'"></UploadFile>
                    </div>
                    <div class="form-group ">
                        <label for="" class="form-label invisible ">Add</label>
                        <button class="btn btn-icon rounded-circle btn-success" @click="addRow">
                            <i class="fa fa-plus fa-md"></i>
                        </button>
                    </div>
                </div>
                <div class="col-md-4" v-if="inputFile">
                    <DisplayFile :file="inputFile" @deleteFileItem="deleteFileItem" :showDelete="true"></DisplayFile>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">{{$t('overAllComment.label')}}</label>
                        <textarea
                            v-model="form.note" 
                            :placeholder="$t('overAllComment.placeholder')" 
                            class="form-control"
                            :class="{
                                'is-invalid':
                                (v.note.$invalid)
                                ||
                                (serializer_error.note?serializer_error.note.length>0:false)
                            }" 
                        ></textarea>
                        <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('overAllComment.label'))}}
                        </div>
                        <div v-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                                {{minLengthError($t('overAllComment.label'), v.note.$params.minLength.min)}}
                        </div>
                        <div v-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                                {{maxLengthError($t('overAllComment.label'), v.note.$params.maxLength.max)}}
                        </div> 
                    </div>
                </div>
        </div>                    
        </Base>
        <div class="table-wrapper my-2" v-if="recordsToDisplay.length>0">
      <Base >
        <div class="row my-2">      
          <div class="col-12">
            <div class="table-responsive"  >
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('title.label')}}</th>
                            <th scope="col">{{$t('comment.label')}}</th>                          
                            <th scope="col">{{$t('file.label')}}</th>                          
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in recordsToDisplay" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <span>{{val.title}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.comment}}</span>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.file">
                                    <DisplayFile :file="val.file" :showDelete="false"></DisplayFile>
                                </div>
                                <div v-else></div>                            
                            </td>
                            <td class="align-middle">
                                <div class="d-flex justify-content-center">
                                        <button class="btn btn-danger btn-icon rounded-circle" @click="openDeleteDialog(index)"><i class="fa fa-trash"></i></button>
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
    <DeleteDialog :display="displayDeleteModal" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>
    </div>
</template>
<i18n src="@/lang/mr/global/form/form.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
//////////////////////////////////////////////////////////
import {inputError,htmlTagsError,minLengthError,maxLengthError,fileSizeError} from "@/validation/errors";
import {minLength,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags,fileExtension ,fileSize} from "@/validation/customValidators";
// //////////////////////////////////////////////////////////

import UploadFile from '@/components/global/file-handling/UploadFile.vue'
import DisplayFile from '@/components/global/file-handling/DisplayFile.vue'
import { mapActions } from "vuex";
import Base from '@/components/global/utilities/Base.vue' 
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
export default {
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
        UploadFile,
        DisplayFile,
        DeleteDialog,
    },
    data(){
        return{
            inputError,
            htmlTagsError,
            maxLengthError,
            minLengthError,
            fileSizeError,
            form: {
                records: [],
                note: "",
            },
            rowToAdd:{
                title:"",
                comment:"",
                file:""
            },

            inputFile: {},
            recordsToDisplay:[],

            indexToDelete:null,
            displayDeleteModal: false,
        }
    },
    validations:{
        rowToAdd:{
            title: {
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
            },
        },
    },
    watch: {
        form: {
            deep: true,
            handler(newValue, oldValue) {
                this.setForm(newValue);
                this.v.$touch();
            },
        },
    },    
    methods:{
        ...mapActions("ophthalmic", [
            "setForm",
        ]),
        /////////////////////////
        addRow(){
            this.$v.rowToAdd.$touch();
            ////////////////////////////////
            if (this.inputFile.base64){
                if (this.inputFile.validExtension && this.inputFile.validSize){
                    let validTypeList=['image','pdf','video','docx']
                    if(validTypeList.includes(this.inputFile.type)){
                        this.rowToAdd.file = this.inputFile.base64
                        if(!this.$v.rowToAdd.$invalid){
                            let displayRecord={
                                title: this.rowToAdd.title,
                                comment: this.rowToAdd.comment,
                                file: {...this.inputFile}
                            }
                            this.recordsToDisplay.push(displayRecord);
                            this.form.records.push({...this.rowToAdd});
                            this.rowToAdd={
                                title:"",
                                comment:"",
                                file:""
                            }
                            this.inputFile={}
                            this.$v.rowToAdd.$reset();
                        }
                    }
                }
            }
            /////////////////// 
            else {
                if(!(
                    this.$v.rowToAdd.$invalid ||
                    !this.rowToAdd.title &&
                    !this.rowToAdd.comment 
                )){
                    let displayRecord={
                        title: this.rowToAdd.title,
                        comment: this.rowToAdd.comment,
                        file: {...this.inputFile}
                    }
                    this.recordsToDisplay.push(displayRecord);
                    this.form.records.push({...this.rowToAdd});
                    this.rowToAdd={
                        title:"",
                        comment:"",
                        file:""
                    }
                    this.inputFile={}
                    this.$v.rowToAdd.$reset();
                } 
            }
        },
        ////////////////////////
        openDeleteDialog(index) {
          this.displayDeleteModal = true;
          this.indexToDelete =index
        },
        closeDeleteDialog() {
          this.displayDeleteModal = false;
          this.indexToDelete =null
        },
        deleteRow(){
            this.recordsToDisplay.splice(this.indexToDelete,1);
            this.form.records.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
        deleteFileItem(){
            this.inputFile = {}
        }
    }
}
</script>
<style lang="scss" scoped>
.form {}
</style>