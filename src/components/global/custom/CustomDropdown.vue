<template>
    <div>
        <label v-if="label" class="form-label">{{label}}</label>
        <Dropdown
            v-model="form.selection"
            @input="formChanged"
            :options="options"
            :filter="options.length > 10"
            optionLabel="value"
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
    },
    data(){
        return{
            // form:this.value,
            // form:{
            //     selection:"",
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
        
            const selectedOption = this.form.selection
            this.otherSelected=false;
            //
            // const valueOther = this.form.selection.value.toLowerCase();
            // console.log(valueOther);
            if(!this.form.selection && !this.form.other){
                this.otherSelected=false;
            }
            else if((this.form.selection.value.toLowerCase()) =='other' && !this.form.other){
                this.otherSelected=true;
                this.form.selection=''
            }
            else if((this.form.selection.value.toLowerCase()) !='other' && this.form.selection){
                this.form.other='';
                this.form.selection=selectedOption;
            }
        },

        // toggleOtherOption(){
        //     const selectedOption = this.form.selection
        //     this.otherSelected=false;
        //     if(!this.form.selection && !this.form.other){
        //         this.otherSelected=false;
        //     }
        //     else if(this.form.selection=='other' && !this.form.other){
        //         this.otherSelected=true;
        //         this.form.selection=''
        //     }
        //     else if(this.form.selection!='other' && this.form.selection){
        //         this.form.other='';
        //         this.form.selection=selectedOption;
        //     }
        // },
        
        formChanged(){
            if(this.form.selection){
                this.toggleOtherOption();
            }
       
            this.$emit('input',JSON.parse(JSON.stringify(this.form)));
        },
    },
}
</script>