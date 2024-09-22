<template>
    <div class="drop-file w-100">
        <div @dragover.prevent @drop.prevent class="drag-wrapper">
            <input type="file" hidden @input="uploadFile($event)" :ref="staticRef" />
            <input type="file" hidden @input="uploadFile($event)" :ref="`${staticRef}-camera`" capture="environment" />
            <div @drop="dragFile" class="drag-area d-flex justify-content-between align-items-center flex-column">
                <h6 class="text-success mb-0"><i class="fa fa-upload fa-5x" aria-hidden="true"></i></h6> 
                <h4 class="mb-0 p-2 text-center">Upload Or Drop The File Here ...</h4>
                <div class="d-flex justify-content-center flex-wrap">
                    <button class="btn btn-pill btn-secondary w-md m-2" @click="$refs[staticRef].click()">
                        Browse
                    </button>
                    <button class="btn btn-pill btn-secondary w-md m-2" @click="$refs[`${staticRef}-camera`].click()">
                        <i class="fa fa-camera" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {convertFileToBase64} from "@/helpers/utilities"
export default {
    props:{
      value:{
          required: true,
      },
      accept:{
          type: Array,
          default(){
              return [] // available options till now : ['image','video','audio','document']
          }
      },
      staticRef:{
          type:String,
          required:true,
      },
    },
    data(){
      return {
        fileTypes:{
          image: ['gif', 'jpg', 'jpeg', 'png', 'bmp', 'webp'],
          video: ['mp4', 'm3u8', 'rmvb', 'avi', 'swf', '3gp', 'mkv', 'flv'],
          audio: ['mp3', 'wav', 'wma', 'ogg', 'aac', 'flac'],
          document:['doc', 'txt', 'docx', 'pages', 'epub', 'pdf', 'numbers', 'csv', 'xls', 'xlsx', 'keynote', 'ppt', 'pptx']
        },
        outputFile:{},



        // accept:['document']
      }
    },
    methods:{
        uploadFile(event) {
            this.getFileFromInput(event)
        },
        dragFile(event) {
            this.getFileFromDrag(event)
        },        
        handleFile(val) {
            if (val){
                let fileExt = val.name.split('.').pop();
                let isValidExtension = false;
                let isValidSize = true;
                let type = "other";
                // isValidExtension = false;
                if (val.size > 2*1024*1024) { isValidSize = false } //2Mb
                if(this.accept.length > 0){
                  for (let i=0; i<this.accept.length;i++){
                    console.log(this.accept[i])
                    console.log(fileExt)
                    if (this.fileTypes[this.accept[i]].includes(fileExt.toLowerCase())){
                        console.log("if")
                      type = this.accept[i];
                      isValidExtension = true
                      if (val.size > 2*1024*1024) { isValidSize = false }
                    //   else{
                        
                    //   } //2Mb
                      
                    }
                    // else {
                    //     console.log("else")
                    //     con;
                    // }
                   
                  }
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
        // handleFile(val) {
        //     if (val){
        //         let fileExt = val.name.split('.').pop();
        //         let isValidExtension = false;
        //         let isValidSize = false;
        //         let type = "";
        //         if (this.fileTypes.image.includes(fileExt.toLowerCase()))
        //         {
        //             isValidExtension = true;
        //             type = "image";
        //             if (val.size > 2*1024*1024) { isValidSize = false } //5Mb
        //             else  { isValidSize = true } 
        //         }
        //         else if (this.fileTypes.video.includes(fileExt.toLowerCase()))
        //         {
        //             isValidExtension = true;
        //             type = "video";
        //             if (val.size > 2*1024*1024) { isValidSize = false } //5Mb
        //             else  { isValidSize = true } 
        //         } 
        //         else if (this.fileTypes.document.includes(fileExt.toLowerCase())) {
        //             isValidExtension = true;
        //             type = "document";
        //             if (val.size > 2*1024*1024) { isValidSize = false } //5Mb
        //             else  { isValidSize = true } 
        //         }
        //         else {
        //             isValidExtension = false;
        //             isValidSize = false;
        //             type = "other";
        //         }
        //         return { 
        //             source: URL.createObjectURL(val), 
        //             name: val.name, 
        //             size: val.size, 
        //             type: type, 
        //             extension:fileExt,
        //             validExtension:isValidExtension, 
        //             validSize: isValidSize, 
        //             rawFile: val ,
        //             base64:''
        //         };
        //     }
        // },


        getFileFromInput(event){
            this.outputFile=this.handleFile(event.target.files[0])  
            convertFileToBase64(this.outputFile.rawFile)
            .then(data => this.outputFile.base64 = data)
            .then(()=>{this.$emit('input',this.outputFile)})
            .then(()=>{this.$emit('ready')})
            .then(()=>{event.target.value=''})
        },
        getFileFromDrag(event){
            this.outputFile=this.handleFile(event.dataTransfer.files[0])  
            convertFileToBase64(this.outputFile.rawFile)
            .then(data => this.outputFile.base64 = data)
            .then(()=>{this.$emit('input',this.outputFile)})
            .then(()=>{this.$emit('ready')})
            .then(()=>{event.target.value=''})
        },
    }
}
</script>

<style lang="scss" scoped>
.drag-area{
    min-height: 200px;
}
</style>