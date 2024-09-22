<template>
  <div class="business">
    <div class="bg-vid">
      <video autoplay muted loop>
        <source src="../assets/authentication/bg-vid.mp4" />
      </video>
    </div>
    <div class="content">
      <!-- <div class="container d-flex justify-content-center align-items-center w-100 p-4"> -->
        <div class="custom-container w-100 p-4">
          <Base>
            <div class="header d-flex justify-content-between align-items-center">
              <div>
                <button @click="goBack" class="btn btn-icon text-success fw-bold" title="back">
                  <i class="fs-1 fa fa-angle-left" aria-hidden="true"></i>
                </button>
              </div>
              <div class="d-flex align-items-center justify-content-start">
                <div> <img src="/img/BONDS.bb321ed2.svg" alt ="this image logo" width="50%"  /> </div>
                <div class="mx-0 px-0"> <h1 class="text-center mb-0">WE Health It</h1></div>
              </div>
  
              <div class="lang-switcher">
                  <Language></Language>
              </div>
            </div>
            <!-- <div class="logo my-3">
              <h1 class="text-center">WE Health It</h1>
            </div> -->
            <div class="form-content  mb-4">
              <router-view></router-view>
            </div>
          </Base>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>
<script>
import Language from "@/components/global/utilities/Language.vue";
import Base from "@/components/global/utilities/Base.vue";

export default {
  components: {
    Language,
    Base,
  },
  data() {
    return {

    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.business {
  width: 100%;
  height: 100%;
  .bg-vid {
    width: 100%;
    height: 100%;

    video {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }
  .content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    // backdrop-filter: blur(10px);
    min-height: 100px;
    overflow-y: auto;

    .custom-container {
      // background-color: white;
      // border-radius: 34px;

      .header {
        border-radius: 1rem;
        box-shadow: 1px 1px 2px #56C596;
      }
      .form-content {
        min-height: calc(100vh - 230px) !important;
      }
  }
  }

}
</style>
