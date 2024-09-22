<template>
    <div class="sendOrderToVerify">
        <button 
            class="btn btn-icon rounded-circle btn-secondary-gradient custom-edit-button-size" 
            @click.prevent="sendOrderToVerify"
            v-tooltip.bottom="'SendOrderToVerify'" 
        >
            <i class="fa fa-send fa-md fs-10"></i>
        </button>
    </div>
</template>
<script>
export default {
    name:"ReviewOrderButton",
    methods:{
        sendOrderToVerify(){
            this.$emit('sendOrderToVerify')
        },
    },
}
</script>
