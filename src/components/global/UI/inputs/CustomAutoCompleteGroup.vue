<template>
  <div class="input-group-wrapper">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data(){
      return{}
  },
  computed:{ },
  methods:{}
}
</script>
<style lang="scss" scoped>
.input-group-wrapper {
  display: flex;
  .p-dropdown {
    border-radius: 2rem 0px 0px 2rem;
    width: 40% !important;
    .p-dropdown-panel{ 
      .p-dropdown-header{
        padding: 0;
      }
    }
  }
  /deep/.p-input-icon-right .p-autocomplete-input {
      border-radius: 0px 2rem 2rem 0px;
  }
}
.rtl .input-group-wrapper {
    .p-dropdown {
        border-radius: 0px 2rem 2rem 0rem  ;
        width: 40% !important;
    }
    /deep/.p-input-icon-left .p-autocomplete-input {
      border-radius: 2rem 0rem 0rem 2rem;
  }
  }
</style>