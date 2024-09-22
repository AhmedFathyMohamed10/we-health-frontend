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
        border-radius: 0px 2rem 2rem 0px;
        width: 50% !important;

        .p-dropdown-panel{ 
          .p-dropdown-header{
            padding: 0;
          }
        }
      }
      .p-inputtext {
          border-radius: 2rem 0px 0px 2rem;
          width: 50% !important;
      }
      input {
        border-radius: 2rem 0px 0px 2rem;
        border-right: 0px;
      }
  }
  .rtl .input-group-wrapper {
      .p-dropdown {
          border-radius: 2rem 0px 0px 2rem;
          width: 50% !important;
      }
      .p-inputtext {
          border-radius: 2rem 0px 0px 2rem;
          width: 50% !important;
      }
      input {
          border-radius: 0px 2rem 2rem 0px;
          border-right: 1px solid #56c596;
          border-left: 0px;
        }
    }
</style>