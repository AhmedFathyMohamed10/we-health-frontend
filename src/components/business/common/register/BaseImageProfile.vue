<template>
  <div class="base my-3" @click="$emit('click')">
      <div class="base-header d-flex align-items-center flex-wrap justify-content-center ">
          <div class="base-header-title d-flex align-items-center  gap-3">
              <h6 class="mb-0" v-if="icon"><i class="fs-5" :class="[icon]"></i></h6>
              <h6 class="mb-0">{{ title }}</h6>
            </div>      
        </div>
        <div class="content animate__animated animate__fadeInDown" v-if="showContent">
          <div class="base-body"> 
            <slot ></slot>
          </div>
        </div>
   </div>
</template>
<script>
export default {
    data(){
        return{
          showContent:true,
        }
    },
     props: {
      title: {
        type: String,
        default: '',
      },
      icon: {
        type: String,
        default: '',
      },
   
}
}
</script>
<style lang="scss" scoped>
.base {
    width: 100%;
    height: fit-content;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 1px 1px 6px #56C596;
    position: relative;
    z-index: 1000;

    .base-header{
      padding: 0.75rem;
      background-color:#fff;
      border-radius: 1rem 1rem 0 0;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    }
    .base-body{
      padding: 1rem;
      background: linear-gradient(180deg, #F1FAF7, #E0EBE8);
      padding-bottom:3.5rem;
      border-radius: 0 0 1rem 1rem
    }

    // box-shadow: 1px 1px 4px $gray;
  }
  @media (max-width:425px){
    .base {
      // padding:0.75rem;
      // border-radius:0.75rem;
  }
}
</style>
