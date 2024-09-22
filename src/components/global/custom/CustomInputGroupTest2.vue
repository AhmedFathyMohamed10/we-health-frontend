<!-- 
<template>
    <div class="custom-search">
        <label class="form-label">{{label}}</label>
            <div class="custom-input-group">    
                 <div class="p-inputgroup"> 
                        <span v-if="showIcons" class=" p-inputgroup-addon bg-light">
                             <i :class="icon"></i>
                        </span>

                        <InputText class="w-100  " 
                            v-model.trim="form.value"
                            @input="formChanged"
                            :type="inputType"
                            :placeholder="valuePlaceholder"
                            :class="[
                            {'p-invalid':invalidValue},
                            {'custom-input':showIcons}
                           ]" 
                        />
                        <Dropdown class="w-100"
                            v-model="form.selection"
                            @input="formChanged"
                            :options="options"
                            :optionLabel="locale" 
                            optionValue="key"
                            :placeholder="placeholder"
                            :class="{'p-invalid':invalidSelection}"
                        />
                </div>
            </div>
            </div>
</template>

// <i18n src="@/lang/global/global.json"></i18n>
// <i18n src="@/components/pharmacycashpoint/lang/otc/otc.json"></i18n>
<script>
import otcOptions from '@/components/pharmacycashpoint/mixins/otc/options/otcOptions.js'
export default {
    // mixins:[otcOptions],
    name:'CustomInputGroupTest2',
    components:{
       
    },
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
        valuePlaceholder:{
            type:String,
            default(){
                return this.locale=='ar'?'القيمة':'Value'
            },
        },
        inputType:{
            type:String,
            default(){
                return 'number'
            },
        },
        options:{
            type:Array,
            required:true,
        },
        invalidSelection:{
            type:Boolean,
        },
        invalidValue:{
            type:Boolean,
        },
        addIcons:{
            type:Boolean,
        },
        showIcons:{
            type:Boolean,
        },
        icon:{
            type:String,
        },

    },
    data(){
        return{
         
        }
    },
    computed:{
        form(){
            return this.value
        }
    },
        methods:{
            formChanged(){
                this.$emit('input',this.form)   
        },
    }
}
</script>
<style lang="scss" scoped>
    .custom-input-group {
        display: flex;
        .p-dropdown {
          border-radius: 0px 2rem 2rem 0px;
          .p-dropdown-panel{ 
            .p-dropdown-header{
              padding: 0;
            }
          }
        }
        //  two feild without icons
        input{
            border-radius: 2rem 0px 0px 2rem;
            border-right:0px;
        }
        //   three feild with icons
          .custom-input{
             border-radius: 0px 0px 0px 0px !important;
             border-right:0px !important;
        }
    }
    .rtl .custom-input-group {
        .p-dropdown {
            border-radius: 2rem 0px 0px 2rem;
        }
        input {
            border-radius: 0px 2rem 2rem 0px;
            border-right: 1px solid #56c596;
            border-left: 0px;
          }
          .custom-input{
             border-radius: 0px 0px 0px 0px !important;
             border-left:0px !important;
        }
      }
 
</style> -->