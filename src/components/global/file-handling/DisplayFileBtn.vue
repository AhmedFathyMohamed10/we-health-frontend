<template>
    <div class="display-file d-flex flex-column" v-if="file.rawFile">
        <div class="btn-group file-attach" role="group" aria-label="Name">
            <button 
                class="btn btn-pill flex-grow-1 btn-name"
                :class="[!file.validExtension || !file.validSize ? 'btn-outline-danger' :'btn-outline-success']"
            >
                <i class="mdi mdi-file me-2"></i>{{file.type!='other'?file.type:''}} File.{{file.extension}} 
            </button>
            <button 
                class="btn btn-pill btn-close"
                :class="[!file.validExtension || !file.validSize ? 'btn-outline-danger' :'btn-outline-success']"
                aria-label="Close"
                @click="deleteFileItem()" 
            >
                <span aria-hidden="true"><i class="pi pi-times"></i></span>
            </button>
        </div>
        <div v-if="!file.validExtension || !file.validSize" class="d-flex files-errors" >
            <div class="invalid-feedback d-block" v-if="!file.validExtension">
                {{fileTypeError(file.extension)}}
            </div>
            <div class="invalid-feedback d-block" v-else-if="!file.validSize">
                {{fileSizeError(2)}}
            </div>
        </div>
    </div>
</template>
<script>
// {
//         source: URL.createObjectURL(val), 
//         name: val.name, 
//         size: val.size, 
//         validExtension:isValidExtension, 
//         type: type, 
//         validSize: isValidSize, 
//         rawFile: val 
// }
import {fileTypeError,fileSizeError} from "@/validation/errors";
export default {
    props: {
        file:{
            type:Object,
            required:true
        },
    },
    data(){
        return {
        }
    },
    methods:{
        //////////////
        fileTypeError,
        fileSizeError,
        //////////////
        deleteFileItem(){
            this.$emit('deleteFileItem')
        }
    },

}
</script>

<style lang="scss" scoped>
.display-file{
    .btn-group {
        .btn-name{
            cursor: normal !important;
            &:hover{
                cursor: normal !important;
            }
        }
        .btn{
            height: auto;
            max-height: 38px;
        }
        .btn-close{
            padding: 0;
            span{
                line-height: 0.75;
            }
        }
        
    }
}
</style>