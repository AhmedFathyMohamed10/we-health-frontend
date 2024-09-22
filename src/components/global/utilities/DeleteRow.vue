<template>
  <div class="form-group delete">
      <button 
          class="btn btn-icon rounded-circle btn-danger-gradient custom-edit-button-size" 
          @click.prevent="deleteRow"
          v-tooltip.bottom="'Delete'"
       >
          <i class="pi pi-times"></i>
      </button>
  </div>
</template>
<script>
export default {
  methods:{
    deleteRow(){
          this.$emit('deleteRow')
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