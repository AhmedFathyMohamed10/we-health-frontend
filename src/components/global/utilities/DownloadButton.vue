<template>
  <div class=" download">
      <button 
          class="btn btn-icon rounded-circle btn-success-gradient " 
          @click.prevent="download"
          v-tooltip.bottom="'Reset'"
        >
        <i class="fa-solid fa-download "></i>
      </button>
    </div>
  </template>
<script>
export default {
  methods:{
    download(){
      this.$emit('download')
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