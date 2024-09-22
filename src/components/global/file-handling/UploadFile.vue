<template>
    <div class="upload-file">
        <input type="file" hidden @input="getFileFromInput($event)" :ref="staticRef">
        <button 
        class="btn btn-secondary "
        :class="[label?'btn-pill d-block w-100':'btn-icon rounded-circle me-2']"  
        @click="$refs[staticRef].click()">
            <span v-if="label">{{ label }}</span>
            <i v-else class="fa fa-paperclip fa-md"></i>
        </button>
    </div>
</template>
<script>
import {convertFileToBase64} from "@/helpers/utilities"
export default {
    props:{
        value:{
            required: true,
        },
        staticRef:{
            type:String,
            required:true,
        },
        label:{
            type:String,
            default(){
                return ''
            }
        },
    },
    data(){
        return {
            fileTypes:{
              image: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'],
              video: ['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'],
              audio: ['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'],
              document: 
              ['doc', 'txt', 'docx', 'pages', 'epub', 'pdf', 'numbers', 'csv', 'xls', 'xlsx', 'keynote', 'ppt', 'pptx']
            },
            outputImage:{}
        }
    },
    // watch:{
    //     value(){
    //         if(!this.value.rawFile){
    //             console.log("watch")
    //             this.outputImage={}
    //         }
    //     },
    // },
    methods:{
        handleFile(val) {
            if (val){
                let fileExt = val.name.split('.').pop();
                let isValidExtension = false;
                let isValidSize = false;
                let type = "";
                if (this.fileTypes.image.includes(fileExt.toLowerCase()))
                {
                    isValidExtension = true;
                    type = "image";
                    if (val.size > 2*1024*1024) { isValidSize = false } //5Mb
                    else  { isValidSize = true } 
                }
                else if (this.fileTypes.video.includes(fileExt.toLowerCase()))
                {
                    isValidExtension = true;
                    type = "video";
                    if (val.size > 2*1024*1024) { isValidSize = false } //5Mb
                    else  { isValidSize = true } 
                } 
                else if (this.fileTypes.document.includes(fileExt.toLowerCase())) {
                    isValidExtension = true;
                    type = "document";
                    if (val.size > 2*1024*1024) { isValidSize = false } //5Mb
                    else  { isValidSize = true } 
                }
                else {
                    isValidExtension = false;
                    isValidSize = false;
                    type = "other";
                }
                return { 
                    source: URL.createObjectURL(val), 
                    name: val.name, 
                    size: val.size, 
                    type: type, 
                    extension:fileExt,
                    validExtension:isValidExtension, 
                    validSize: isValidSize, 
                    rawFile: val ,
                    base64:''
                };
            }
        },
        getFileFromInput(event){
            this.outputImage=this.handleFile(event.target.files[0])  
            // console.log(this.outputImage)
            convertFileToBase64(this.outputImage.rawFile)
            .then(data => this.outputImage.base64 = data)
            .then(()=>{this.$emit('input',this.outputImage)})
        },
    }
}
</script>

<style>

</style>