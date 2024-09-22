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
        // width: 50% !important;
        
        .p-dropdown-panel{ 
          .p-dropdown-header{
            padding: 0;
          }
        }
      }
      .p-inputtext {
        border-radius: 2rem 0px 0px 2rem ;
        border-right: 0px;
      }
      .custom-input-group{
        border-radius: 0rem;
      }
      .custom-group{
        border-radius: 0px 2rem 2rem 0px !important;
        border: 1px solid var(--success-color);
      }
      /deep/.p-inputnumber-input	 {
        border-radius: 0px 2rem 2rem 0px !important;
      }
      .custom-input-date{
        /deep/.p-button.p-button-icon-only {
        border-radius: 0rem;
      }
      }
      .custom-input-time{
        /deep/.p-inputtext {
            border-radius: 0rem ;
      }
      }
     
    }
  .rtl .input-group-wrapper {
      .p-dropdown {
          border-radius: 2rem 0px 0px 2rem;
          width: 50% !important;
      }
      .p-inputtext {
        border-radius: 0px 2rem 2rem 0px ;
      }
      .custom-group{
        border-radius: 2rem 0px 0px 2rem !important;
        border: 1px solid var(--success-color);
      }
      .custom-input-group{
        border-radius: 0rem;
      }
    }
</style>