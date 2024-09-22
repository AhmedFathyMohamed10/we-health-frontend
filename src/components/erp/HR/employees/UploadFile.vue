<template>
   <div class="upload-file-container"  @dragover.prevent @drop.prevent :class="uploaded_files.length > 4 ? 'border-danger' :''">
    <div class="drop-container"   @drop="dragFile">

      <input type="file" ref="fileInput" multiple hidden :accept="acceptedFileTypes" @change="fileUpload">
      <!-- <button data-v-2a5c4c3c="" class="btn btn-pill btn-success" @click="$refs.fileInput.click()">Browse </button> -->
       <span  @click="$refs.fileInput.click()" class="pi pi-upload custom-upload-file"></span> 
      <span class="drop-title">Drop files here</span>
    </div>
    <div v-if="uploaded_files">
     
        <div class="d-flex justify-content-between p-3 mb-2 gap-2  text-dark flex-wrap" >
        <div class="diaplay-area bg-light p-2" v-for="(file,index) in uploaded_files" :key="index" :class="[!file.isValidExtension || !file.isvalidateSize ?'border-danger':'']">
          
          <div class="d-flex justify-content-end">
            <Button icon="pi pi-times" class="p-button-rounded p-button-secondary p-button-text"  @click="removeFile(index)"/>
          </div>
          <div class="text-center"><i class="fs-6" :class="getIcon(file.fileExtension)"></i></div>
          <div  class="text-center text-wrap"> {{ file.file.name }}</div>
          <div >
            <small class="p-invalid" v-if="!file.isValidExtension">
              Invalid extension
            </small>
            <small class="p-invalid" v-if="!file.isvalidateSize">
              Invalid size
            </small>
          </div>
        </div>
       
       
      </div>

    </div>
    <div v-if="saved_files">
      
        <div class="d-flex justify-content-between p-3 mb-2 gap-2  text-dark flex-wrap" >
          <div class="diaplay-area bg-light p-2 flex-grow-1" v-for="(path,index) in saved_files" :key="index">
            <div class="d-flex justify-content-end">
              <Button icon="pi pi-times" class="p-button-rounded p-button-secondary p-button-text"  @click="removePath(index)"/>
            </div>
            
            <!-- <div class="text-center"><i class="fs-1 " :class="getIconClass(path)"></i></div> -->
            <div class="text-center"><i class="fs-6" :class="getIconClass(path)"></i></div>
            <div  class="text-center"><a :href="`${mediaUrl}${path}`" target="_blank"> <span>{{  extractFileName(path) }}</span></a></div>
            
          </div>
       

        </div>
      
        
      

    </div>
     
  </div>
  </template>
  <script>
 import {
  maxLength,
} from "vuelidate/lib/validators";
export default {
 
    props:{
      mediaUrl:{
        type: String,
            default(){
                return ""
            }
      },
        value:{
            required:true,
            type: Array,
            default(){
                return []
            }
        },
        saved_files:{
          type: Array,
            default(){
                return []
            }
        }
    },
    watch:{
        value(){
            if(!this.value)
                this.uploaded_files=[]
        },
        uploaded_files:{
            deep: true,
            handler(newValue, oldValue) {
                this.$emit('input',[...this.uploaded_files])
            },
        },      
       
    }, 
  data() {
    return {
      showDiv : true,
      selectedFiles: [],
      isValidExtension:false,
      isvalidateSize :false,
      uploaded_files:[],
      imageExtentions:["jpg", "jpeg", "png", "gif"]
    };
  },
  validations: {
   
  },
  computed:{
    acceptedFileTypes(){
        const imageTypes = ".jpg, .jpeg, .png, .gif";
        const documentTypes = ".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .txt, .csv";
        return documentTypes +","+ imageTypes

    },
    hasError() {
      return (
        !this.isValidExtension ||
        !this.isvalidateSize ||
        this.isMaxLength
      );
    }
    
  },
  methods: {
    dragFile(event) {
      this.selectedFiles=Array.from(event.dataTransfer.files)
      this.handleFileUpload(this.selectedFiles)
        },  
    fileUpload(event){
      console.log(event.target.files)
      this.selectedFiles=Array.from(event.target.files)
      if (this.selectedFiles.length > 4) {
    // Show an error message
    alert("You can only upload a maximum of 4 files.");
    return;
  }
      this.handleFileUpload(this.selectedFiles)
    },      
    handleFileUpload() {
      this.uploaded_files = []
      let maxSizeInBytes = 2 * 1024 * 1024; // 10MB
      var allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif','.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt', '.csv'];
      
      this.selectedFiles.forEach(element => {
        if (element.size < maxSizeInBytes) {
          this.isvalidateSize = true
          this.$refs.fileInput.value = "";; // Reset the input value
        
        }
        var fileExtension = element.name.split('.').pop().toLowerCase();
        if (allowedExtensions.includes('.' + fileExtension)) {
          this.isValidExtension = true
          this.$refs.fileInput.value = ""; // Reset the input value
          this.uploaded_files.push({
            file:element,
            fileExtension:fileExtension,
            isValidExtension :this.isValidExtension,
            isvalidateSize:this.isvalidateSize,
          })
      // return files
    }
      });
      
    },
    removeFile(index) {
      this.uploaded_files.splice(index, 1)
      this.selectedFiles.splice(index, 1)
    },
    removePath(index){
      this.$emit('removePath',index)
    },
 extractFileName(filePath) {
  const lastIndex = filePath.lastIndexOf('/');
  if (lastIndex !== -1) {
    return filePath.substring(lastIndex + 1);
  } else {
    return filePath;
  }
},
getIcon(extension){
  const ext = extension.toLowerCase();
  if ( this.imageExtentions.includes(extension)) {
    // <i class=></i>
    console.log('extension',extension)
        return 'fas fa-images';
      } else if (ext === 'pdf') {
        return 'far fa-file-pdf';
      } else if (ext === 'doc' || ext === 'docx') {
        return 'far fa-file-word';
      } else {
        return 'far fa-file-word';
      }
},
getIconClass(filePath) {
      const extension = filePath.split('.').pop();
      // const ext = extension.toLowerCase();
      console.log(extension)
      return this.getIcon(extension)
      
    }
  }

};
</script>
<style lang="scss" scoped>
.custom-upload-file{
  font-size: 4rem;
  color: $success;
}
.drop-container{
    position: relative;
    display: flex;
    gap: 10px;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  padding: 20px;
  border-radius: 10px;
 
  color: #205072;
  cursor: pointer;
  transition: background .2s ease-in-out, border .2s ease-in-out; 
}
.upload-file-container{
  border: 2px dashed #56C596;
  border-radius: 10px;
}

.upload-file-container:hover {
    background: #eee;
    
  }
  
.drop-container:hover .drop-title {
    color: #222;
  }
  .drop-title {
    color:#205072;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    transition: color .2s ease-in-out;
  }
  input[type=file]::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #56C596;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: background .2s ease-in-out;
  }
  input[type=file]::file-selector-button:hover {
    background:#2B634B ;
  }
  .diaplay-area{
    border-radius: 10px;    
  }
  
</style>
