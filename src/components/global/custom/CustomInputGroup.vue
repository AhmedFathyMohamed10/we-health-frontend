<template>
    <div>
        <label class="form-label">{{label}}</label>
        <div class="custom-input-group">
                <InputText
                    v-model.trim="form.value"
                    @input="formChanged"
                    :type="inputType"
                    min="0"
                    :placeholder="valuePlaceholder"
                    :class="{'p-invalid':invalidValue}" 
                />
                <Dropdown
                    v-model="form.selection"
                    @input="formChanged"
                    :options="options"
                    :optionLabel="optionLabel" 
                    :optionValue="optionValue" 
                    :placeholder="placeholder"
                    :class="{'p-invalid':invalidSelection}"
                />
        </div>
    </div>
</template>
<script>
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
        optionValue:{
            type:String,
            default(){
                return null;
            },
        },
        optionLabel:{
            type:String,
            default(){
                return "value";
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
    },
    data(){
        return{
            // form:this.value,
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
        input {
          border-radius: 2rem 0px 0px 2rem;
          border-right: 0px;
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