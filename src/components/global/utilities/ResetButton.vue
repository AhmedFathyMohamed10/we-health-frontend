<template>
    <div class="form-group reset">
        <button 
            class="btn btn-icon rounded-circle btn-info-gradient" 
            @click.prevent="reset"
            v-tooltip.bottom="'Reset'"
         >
            <i class="fa fa-refresh fa-md"></i>
        </button>
    </div>
</template>
<script>
export default {
    methods:{
        reset(){
            this.$emit('reset')
        },
    },
}
</script>
