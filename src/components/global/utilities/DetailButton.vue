<template>
    <div class="details">
        <button 
            class="btn btn-icon rounded-circle btn-info-gradient" 
            @click.prevent="details"
            v-tooltip.bottom="'Details'"
        >
            <i class="fa fa-info fa-md"></i>
        </button>
    </div>
</template>
<script>
export default {
    name:"DetailButton",
    methods:{
        details(){
            this.$emit('details')
        },
    },
}
</script>