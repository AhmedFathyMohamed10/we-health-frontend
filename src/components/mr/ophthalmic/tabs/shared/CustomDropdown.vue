<template>
    <div>
        <label v-if="label" class="form-label">{{label}}</label>
        <Dropdown 
            v-model="form.selection" 
            @input="formChanged"
            :options="options" 
            :optionLabel="locale=='ar'?'arabic':'english'" 
            :placeholder="placeholder" 
            :class="{'p-invalid':invalidSelection}" 
        />
        <input v-if="(otherSelected || form.other)"
            v-model.trim="form.other"
            @input="formChanged"
            :type="inputType"
            :placeholder="otherPlaceholder" 
            class="form-control my-2" 
            :class="{'is-invalid':invalidOther}"
        >
        <slot></slot>
        
            <!-- :class="{'p-invalid':v.other.$invalid && v.other.$anyError || invalidOther}" -->
        <!-- <div class="error" v-if="v">
            <small class="d-block text-danger" v-if="v.other.$anyError && !v.other.notContainsHtmlTags">
                {{htmlTagsError(label?label:'This Field')}}
            </small>
            <small class="text-error my-2" v-else-if="v.other.$anyError && !v.other.minLength">
                {{minLengthError(label?label:'This Field',v.other.$params.minLength.min)}}
            </small>
            <small class="text-error my-2" v-else-if="v.other.$anyError && !v.other.maxLength">
                {{maxLengthError(label?label:'This Field', v.other.$params.maxLength.max) }}
            </small>
        </div> -->
    </div>
</template>
<script>
import {htmlTagsError,minLengthError,maxLengthError} from '@/validation/errors'
export default {
    props:{
        value:{
            type:Object,
            required:true,
        },  
        label:{
            type:String,
            // required:true
        },
        placeholder:{
            type:String,
            default(){
                return this.locale=='ar'?'اختر':'Select'
            },
        },
        otherPlaceholder:{
            type:String,
            default(){
                return this.locale=='ar'?'اختيار اخر':'Other Value'
            },
        },
        options:{
            type:Array,
            required:true,
        },
        invalidSelection:{
            type:Boolean,
        },
        invalidOther:{
            type:Boolean,
        },
        inputType:{
            type:String,
            default(){
                return 'text'
            },
        },
        // v:{
        //     type:Object,
        // },
    },
    data(){
        return{
            // form:this.value,
            // form:{
            //     selection:{english:'',arabic:''},
            //     value:""
            // },
            otherSelected:false,
            htmlTagsError,
            minLengthError,
            maxLengthError,
        }
    },
    computed:{
        form(){
            return this.value
        }
    },
    methods:{
        toggleOtherOption(){
            this.otherSelected=false;
            const selectedOption = {...this.form.selection}
            if(this.form.selection.english=='other' || this.form.selection.english==''){
                this.otherSelected=true;
                this.form.selection={english:"",arabic:""}
            }
            else if(this.form.selection.english!='other'){
                this.form.other='';
                this.form.selection=selectedOption;
            }
        },
        clear(){
            this.form=null;
        },
        formChanged(){
            this.toggleOtherOption()
            this.$emit('input',JSON.parse(JSON.stringify(this.form)))
            // this.$emit('form-changed', this.form)
        },
        // display selectedOption After Copy Method
        // copy(){
        //     if(this.data['other']){
        //         this.otherSelected=true
        //         this.selectedOption={english:"other",arabic:"other"}
        //     }
        //     else if (this.data[this.selectionKey].english){
        //         this.selectedOption=this.data[this.selectionKey]
        //         // console.log(this.selectedOption)
        //     }
        // },
    },
}
</script>