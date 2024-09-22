<template>
    <div class="display-file" v-if="file.rawFile">
        <div class="file-box" :class="{'gray-background': showDelete}">
            <img v-if="file.type=='image'"  :src="file.source">
            <video  controls  v-else-if="file.type=='video'">
                <source :src="file.source" />
            </video>
            <span v-else-if="file.type=='pdf'">
                <i class="fa fa-file-pdf-o" style="font-size: 5rem"></i>
            </span>
            <span v-else-if="file.type=='docx'"><i class="pi pi-file-word" style="font-size: 5rem"></i></span>
            <span v-else><i class="fa fa-file" style="font-size: 5rem"></i></span>
            <span class="d-block text-center">
                {{file.name.substring(0,15)}} {{file.name.length>15?'...':''}}
            </span>
            <div class="delete" v-if="showDelete">
                <button 
                    class="btn btn-outline-danger btn-icon rounded-circle me-2" 
                    @click="deleteFileItem()" 
                >
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </div>
        <div v-if="!file.validExtension || !file.validSize" class="media-errors text-center" >
            <div class="invalid-feedback d-block" v-if="!file.validExtension">
                {{inputError(file.name)}}
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
import {inputError,fileSizeError} from "@/validation/errors";
export default {
    props: {
        file:{
            type:Object,
            required:true
        },
        showDelete: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            inputError,
            fileSizeError,
        }
    },
    methods:{
        deleteFileItem(){
            this.$emit('deleteFileItem')
        }
    },

}
</script>

<style lang="scss" scoped>
    .display-file{
        .file-box{
            // width:150px ;
            height: 150px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1px;
            border-radius:2rem;
            video , img{
                width: 80%;
                height:80%;
                object-fit: contain;
            }
            .delete{
                position: absolute;
                padding:3px;
                background:white;
                border-radius: 50%;
                right: -15px;
                top: -15px;
            }
        }
        .gray-background{
            background: $gray;
        }
    }
</style>