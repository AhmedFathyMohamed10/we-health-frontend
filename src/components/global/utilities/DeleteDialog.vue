<template>
        <Dialog :visible="display" :closable="false" :header="header" :modal="true" >
            <div class="row">
            <div class="col-md-12 text-center">
              <i class="text-danger fa fa-exclamation-triangle fs-70  mb-4 d-block"></i>
              <h2 class="text-center text-danger">{{ $t('dialog.warning') }}</h2>
              <h4 v-if="message" class="text-center">{{ message }}</h4>
              <h5 v-else class="text-center">{{ $t('dialog.deleteMsg') }}</h5>
            </div>
        </div>
        <template #footer>
          <div class="row ">
            <div class="col-md-6 my-2">
              <button class="btn btn-pill btn-info-gradient w-100" @click.prevent="cancel">
                  {{$t('btns.cancel')}}
              </button>
            </div>
            <div class="col-md-6 my-2">
                <button  class="btn btn-pill btn-danger-gradient w-100" @click.prevent="deleteConfirmed">
                    <span v-if="isLoading"><i class="pi pi-spin pi-spinner" style="font-size:1rem"></i></span>
                    <span :class="isLoading?'mx-2':''">{{$t('btns.delete')}}</span>
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
        isLoading:{
          type: Boolean,
          default(){
            return false;
          }
      },
        header:{
            type: String,
            default(){
                return '';
            }
        },        
        message:{
            type: String,
            default(){
                return '';
            }
        },
    },
    data(){
        return{
          
        }
    },
    methods:{
        cancel(){
            this.$emit('cancel')
        },
        deleteConfirmed(){
            this.$emit('delete')
        },
    },
}
</script>

<style>

</style>