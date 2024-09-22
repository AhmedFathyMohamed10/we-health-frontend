<template>
    <div class="delete">
        <button 
            class="btn btn-icon rounded-circle btn-danger-gradient " 
            @click.prevent="deleteData"
            v-tooltip.bottom="'Delete'" 
        >
            <i class="fa fa-trash fa-md fs-10"></i>
        </button>
    </div>
</template>
<script>
export default {
    name:"DeleteButton",
    methods:{
        deleteData(){
            this.$emit('delete')
        },
    },
}
</script>
