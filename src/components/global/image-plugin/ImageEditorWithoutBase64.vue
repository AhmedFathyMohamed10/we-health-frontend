<template>
    <div class="imageEditorApp" >
        <div class="form-group image-wrapper my-2" v-if="!uploadOnly" >
            <img v-if="outputImage"
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
        </div>
        <div class="input-btn">
            <input
               :ref="staticRef"
                accept="image/*" 
                type="file" 
                style="display:none" 
                @input="uploadImage($event)" 
            />
        </div>
        <div v-if="validatedFile.validSize==false || validatedFile.validExtension==false" class="errors text-danger my-2">
            <span v-if="validatedFile.validExtension==false" class="d-block">{{imageTypeError()}}</span>
            <span v-else-if="validatedFile.validSize==false" class="d-block">{{imageSizeError(2)}}</span>
        </div>
    </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import {imageTypeError,imageSizeError} from "@/validation/errors"
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
    },
    data() {
        return {
            imageTypeError,
            imageSizeError,
            validatedFile:{},
            outputImage:this.value,
            // test//
            outputImage2:this.value,
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
        uploadImage(event) {
            this.validatedFile = this.validateImage(event.target.files[0]);
            console.log("validatedFile", this.validatedFile);
            const source = { ...this.validatedFile };
            this.$emit('source', source);
            if (this.validatedFile.validExtension && this.validatedFile.validSize) {
                // this.outputImage = event.target.files[0];  
                this.outputImage =URL.createObjectURL(event.target.files[0]); 
                this.$emit('input',this.outputImage);
                // this.$emit('input',this.outputImage);
                this.outputImage2 = event.target.files[0];
                console.log("outputImage",this.outputImage) 
			
             } 
        },
        // convertFileToBase64(event.target.files[0]).then(data => this.outputImage = data).then(()=>{this.editImage()});
        //////////////////////////////
        // this.form.cover_img = file;
        //   // Read Image Display
        // this.form.cover = URL.createObjectURL(file);
        // console.log("from file name",fileName)
        // // convert image as form data
        // const formData = new FormData();
        // formData.append('image', this.form.cover_img);
        // console.log("from image cover_img",this.form.cover_img)
        // console.log("from cover",this.form.cover)
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