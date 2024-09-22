<template>
    <div class="imageEditorApp" >
        <div class="form-group image-wrapper my-2" v-if="!uploadOnly">
            <img v-if="outputImage.toString().length>0" 
              :src="outputImage" class="w-100 d-block" >
            <img v-else :src="editorControls.templateImage" class="w-100 d-block">
            <slot></slot>
        </div>    
        <div class="d-flex justify-content-center align-items-center control" v-if="!hideButtons">
            <div>
                <button class="btn btn-icon rounded-circle btn-secondary me-2" @click="$refs[staticRef].click()">
                    <i class="fa fa-paperclip fa-lg" aria-hidden="true"></i>
                </button>
                
            </div>
            <div>
                <button v-if="!uploadOnly" class="btn btn-info btn-icon rounded-circle me-2"  
                    @click="editImage"><i class="fa fa-pencil"></i>
                </button>
            </div>
            <div>
                <button v-if="!uploadOnly" class="btn btn-danger btn-icon rounded-circle me-2" @click="deleteImage">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </div>
        <div class="input-btn">
            <input :ref="staticRef" accept="image/*" type="file" style="display:none" 
                @input="uploadImage($event)" 
            />
        </div>
        <div v-if="validatedFile.validSize==false || validatedFile.validExtension==false" class="errors text-danger my-2">
            <span v-if="validatedFile.validExtension==false" class="d-block">{{imageTypeError()}}</span>
            <span v-else-if="validatedFile.validSize==false" class="d-block">{{imageSizeError(2)}}</span>
        </div>
        <Dialog 
            header="Edit Image" 
            position="center"
            :visible.sync="displayMaximizable" 
            :maximizable="true" 
            :modal="true"
            :closable="false"
        >
            <tui-image-editor ref="tuiImageEditor"  :include-ui="useDefaultUI" :options="options"></tui-image-editor>
            <template #footer>
              <div class="row">
                <!-- <div class="col-md-6"></div> -->
                <div class="offset-md-4 col-md-8 offset-lg-6 col-lg-6">
                  <div class="row">
                    <div class="col-md-6">
                      <button class="btn btn-pill btn-danger-gradient mb-3 w-100" @click="closeMaximizable">
                          {{$t('btns.cancel')}}
                      </button>
                    </div>
                    <div class="col-md-6">
                      <button class="btn btn-pill btn-success-gradient w-100" @click="save">
                          {{$t('btns.save')}}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </template>
        </Dialog>
    </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import {imageTypeError,imageSizeError} from "@/validation/errors"
import {convertFileToBase64,dataURItoBlob,getFileNameFromBase64} from "@/helpers/utilities"
import ImageEditor from '@toast-ui/vue-image-editor/src/ImageEditor.vue'
const icona = require("tui-image-editor/dist/svg/icon-a.svg");
const iconb = require("tui-image-editor/dist/svg/icon-b.svg");
const iconc = require("tui-image-editor/dist/svg/icon-c.svg");
const icond = require("tui-image-editor/dist/svg/icon-d.svg");
const blackTheme = {
 "menu.normalIcon.path": icond,
 "menu.activeIcon.path": iconb,
 "menu.disabledIcon.path": icona,
 "menu.hoverIcon.path": iconc
};
export default {
    props:{
        value:{
            required: true,
        },
        editorControls:{
            type:Object,
        },
        staticRef:{
            type:String,
            required:true,
        },
        uploadOnly:{
            type:Boolean,
            default:true,
        },
        hideButtons:{
            type:Boolean,
            default:false,
        },
    },
    components: {
        "tui-image-editor": ImageEditor
    },
    data() {
        return {
            imageTypeError,
            imageSizeError,
            // image variables 
            validatedFile:{},
            outputImage:this.value,
            displayMaximizable:false,
            useDefaultUI: true,
            options: {
                cssMaxWidth: window.innerWidth,
                cssHeight: 800,
                includeUI: {
                    menuBarPosition:'left',
                    loadImage: {
                        path:this.editorControls.templateImage,
                        name:'template image'
                    },
                    theme: blackTheme
                },
                //  initMenu: "filter"
            },
            imageTypes: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'],
        };
    },
     
    watch: {
        value(){
            this.outputImage = this.value;
        }
    },
    methods: {
        validateImage(val) {
            if (val){
                let fileExt = val.name.split('.').pop();
                let isValidExtension = false;
                let isValidSize = false;
                if (this.imageTypes.includes(fileExt.toLowerCase())){
                    isValidExtension = true;
                    if (val.size > 2*1024*1024) { isValidSize = false } //5Mb
                    else  { isValidSize = true } 
                }
                else {
                    isValidExtension = false;
                    isValidSize = false;
                }
                return { 
                    name: val.name, 
                    size: val.size, 
                    validExtension:isValidExtension, 
                    validSize: isValidSize, 
                    rawFile: val ,
                };
            }
        },        
        editImage(){
            this.displayMaximizable = true;
            if(this.outputImage){
                this.options.includeUI.loadImage.path = this.outputImage ;
            }            
            else {
                this.options.includeUI.loadImage.path = this.editorControls.templateImage
            }
        },
        deleteImage(){
            this.outputImage='';
            this.options.includeUI.loadImage.path = this.editorControls.templateImage
            this.validatedFile={}
            this.$emit('input',this.outputImage);
        },
        uploadImage(event) {
            this.validatedFile = this.validateImage(event.target.files[0]);
            const source = { ...this.validatedFile };
            this.$emit('source', source);
            if (this.validatedFile.validExtension && this.validatedFile.validSize) {
                convertFileToBase64(event.target.files[0])
               .then(data => this.outputImage = data).then(()=>{this.editImage()});
            }
        },
        closeMaximizable() {
            this.displayMaximizable = false ;
        },
        save() {
            this.outputImage = this.$refs.tuiImageEditor.invoke("toDataURL");
            this.$emit('input',this.outputImage);
            this.closeMaximizable();
            this.options.includeUI.loadImage.path = this.outputImage
        },
        
    }
};
</script>
<style lang="scss" scoped>
// $success:#56C596;
/deep/ .p-dialog{
    min-width:60vw;
    box-shadow: 0 0 0 9999px rgba(20 ,50 ,72 , 0.7);
    // position: absolute;
    // z-index:10018 ;
    transform-origin: center top !important;
    top:0 !important;
    right: 0 !important;
    .p-dialog-content{
        height: 100%;
        min-height: 60vh;
    }
}
.imageEditorApp {
    position: relative;
    .image-wrapper{
      
        width: 100%;
        height:100%;
       
        img{
            width: 100%;
            height:100%;
            object-fit: contain;
        }
    }
    .errors{
        position: absolute;
        z-index: 10;
        top: -25px;
        // width: 100%;
    }
 /deep/.tui-image-editor-header-buttons{
  display: none;
 }

 /deep/.tui-image-editor-header-logo{
   display: none;
 }

 /deep/.tui-image-editor-help-menu .top{
   display: flex;
 }
 /deep/.tui-image-editor-container.left{
     min-height: 530px;
 }
/deep/.tui-image-editor-container.left .tui-image-editor-main-container{
    left: 64px;
    width: calc(100% - 128px);
    height: 100%;
    right: 64px;
}
 /deep/.tui-colorpicker-clearfix{
     display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    li{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 7px;
        input{
            width: 100%;
            height: 100%;
            margin: 0;
            font-size: 0px;
        }
    }
 }



 /deep/.tui-image-editor-container .tui-image-editor-menu > .tui-image-editor-item.active, .tui-image-editor-container .tui-image-editor-help-menu > .tui-image-editor-item.active{
     background: $success;
 }

 /deep/.tui-image-editor-menu use.normal.use-default, .tui-image-editor-help-menu use.normal.use-default{
    fill-rule: evenodd;
    fill: $success;
    stroke: $success;
 }

 /deep/.tui-image-editor-menu use.active.use-default, .tui-image-editor-help-menu use.active.use-default{
    fill-rule: evenodd;
    fill: white;
    stroke: white;
 }

 /deep/.tui-image-editor-menu use.hover.use-default, .tui-image-editor-help-menu use.hover.use-default{
    fill-rule: evenodd;
    fill: white;
    stroke: white;
 }

 /deep/.tui-image-editor-submenu use.normal.use-default{
     fill-rule: evenodd;
     fill: white;
     stroke: white;
 }

 /deep/.tui-image-editor-submenu use.active.use-default{
    fill-rule: evenodd;
    fill: $success;
    stroke: $success;
 }

 /deep/.tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-button > label, .tui-image-editor-container .tui-image-editor-range-wrap.tui-image-editor-newline.short label, .tui-image-editor-container .tui-image-editor-range-wrap.tui-image-editor-newline.short label > span{
     color: white;
     &:hover{
         color: $success;
     }
 }

/deep/.tui-image-editor-container .tui-image-editor-help-menu.right{
    width: 64px;
    background-color: #151515;
    height: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
/deep/.tui-image-editor-container .tui-image-editor-menu, .tui-image-editor-container .tui-image-editor-help-menu{
    width: 64px;
    background-color: #151515;
    height: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

}
 /deep/.tui-image-editor-help-menu .tui-image-editor-item .svg_ic-menu .normal.use-default{
    fill-rule: evenodd;
    fill: $success;
    stroke: $success;
    &:hover{
        fill-rule: evenodd;
        fill: white;
        stroke: white;
    }
 }
 /deep/.tui-image-editor-help-menu .tui-image-editor-item .svg_ic-menu .hover.use-default{
        fill-rule: evenodd;
        fill: white;
        stroke: white;
 }

}

</style>