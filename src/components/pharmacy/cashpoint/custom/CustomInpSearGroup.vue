
<template>
    <div class="custom-search">
        <label class="form-label">{{label}}</label>
            <div class="custom-input-group">    
                    <div class="p-inputgroup"> 
                        <span v-if="showIcons && icon" class="p-inputgroup-addon bg-light">
                             <i :class="icon"></i>
                        </span>

                        <InputText class="w-100 " 
                        v-model.trim="form.value"
                            @input="formChanged"
                            :type="inputType"
                            :placeholder="valuePlaceholder"
                            :class="[
                            {'p-invalid':invalidValue},
                            {'custom-input':showIcons && icon}
                           ]" 
                        />
                        <Dropdown 
                          class="w-100"
                          v-model="form.selection"
                           @input="formChanged"
                            :options="options"
                            optionLabel="value" 
                            :placeholder="placeholder"
                            :class="{'p-invalid':invalidSelection}"
                        />
                   </div>
            </div>
    </div>
</template>
<script>
export default {
    name:'CustomInpSearGroup',
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
        //  two field without icons
        input{
            border-radius: 2rem 0px 0px 2rem;
            border-right:0px;
        }
        //   three field with icons
          .custom-input{
             border-radius: 0px 0px 0px 0px !important;
                 padding-right: 8px;
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
        
      }
 
</style>
