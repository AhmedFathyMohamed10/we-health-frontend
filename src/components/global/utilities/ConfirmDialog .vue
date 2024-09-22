<template>
    <Dialog :visible="display" :closable="false"  :modal="true" >
        <slot></slot>
        <template #footer>
            <div class="d-flex justify-content-center align-items-center gap-2 my-2 ">
                <div class="">
                    <button class="btn btn-pill btn-success-gradient w-100" @click.prevent="yes">
                        {{$t('btns.yes')}}
                    </button>
                </div>
                <div class="">
                    <button class="btn btn-pill btn-danger-gradient w-100" @click.prevent="no">
                        {{$t('btns.no')}}
                    </button>
                </div>
            </div>
        </template>
    </Dialog>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<script>
export default {
    props: {
        display:{
            required:true,
            type: Boolean,
            default(){
                return false;
            }
        },
       
        
    },
    data(){
        return{
          
        }
    },
    methods:{
       yes(){
            this.$emit('yes')
        },
        no(){
            this.$emit('no')
        },
    },
}
</script>

<style>

</style>