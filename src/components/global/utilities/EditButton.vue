<template>
    <div class="edit">
        <button 
            class="btn btn-icon rounded-circle btn-warning-gradient custom-edit-button-size" 
            @click.prevent="edit"
            v-tooltip.bottom="'Edit'"
        >
            <i class="fa fa-pencil fa-md fs-10"></i>
        </button>
    </div>
</template>
<script>
export default {
    name:"EditButton",
    methods:{
        edit(){
            this.$emit('edit')
        },
    },
}
</script>

<style lang="scss">
.custom-edit-button-size {
  min-width: unset;
  margin: 0rem 0.4rem;
  font-size: 0.4rem;
}
</style>