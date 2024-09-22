<template>
  <div :class="{ 'fullscreen': isFullScreen }" class="base-wrapper my-3">
    <div v-if="shouldShowCustomHeader">
      <slot name="header"></slot>
    </div>
    <div v-if="shouldShowDefaultHeader" class="base-header d-flex align-items-center flex-wrap" :class="[!(showToggleContent||showFullScreen)?'justify-content-center':'justify-content-between']">
      <div class="base-header-title d-flex align-items-center gap-3">
        <h6 class="mb-0" v-if="icon"><i class="fs-5" :class="[icon]"></i></h6>
        <h6 class="mb-0">{{ title }}</h6>
      </div>
      <div class="base-header-actions d-flex align-items-center gap-3">
        <h6 v-if="showFullScreen" class="m-0">
          <i :class="['pi fs-5',isFullScreen?'pi-window-minimize':'pi-window-maximize']" v-tooltip="$t('fullscreen')" @click="fullScreen"></i>
        </h6>
        <h6 v-if="showToggleContent" class="toggle-content-icon m-0" v-tooltip="$t('hide')">
          <i class="pi pi-angle-down fs-5" @click="toggleContent"></i>
        </h6>
      </div>
    </div>
    <!-- <transition name="fade" mode="in-out"> -->
      <div class="content animate__animated animate__fadeInDown" v-if="showContent">
        <div class="base-body">
          <div class="base-body-navigate mb-2" v-if="showBreadCrumb">
            <Breadcrumb :home="home" :model="items" />
          </div>
          <slot ></slot>
        </div>
        <div v-if="shouldShowFooter" class="base-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    <!-- </transition> -->
  </div>
</template>



<script>
import Breadcrumb from "primevue/breadcrumb";

export default {
  components: {
    Breadcrumb,
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
    showBreadCrumb: {
      type: Boolean,
      default: false,
    },
    home: {
      type: Object,
      default: () => ({ icon: "pi pi-home", to: "/" }),
    },
    items: {
      type: Array,
      default: () => []
    },
    showToggleContent: {
      type: Boolean,
      default: false,
    },
    showFullScreen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showContent: true,
      isFullScreen: false,
    };
  },
  computed: {
    shouldShowCustomHeader() {
      return this.$slots.header !== undefined;
    },
    shouldShowDefaultHeader() {
      return !this.shouldShowCustomHeader && (
        this.title ||
        this.showToggleContent ||
        this.showFullScreen
      );
    },
    shouldShowFooter() {
      return this.$slots.footer !== undefined;
    },
  },
  methods: {
    toggleContent() {
      this.showContent = !this.showContent;
    },
    fullScreen() {
      this.isFullScreen = !this.isFullScreen;
    },
  },
};
</script>

<style lang="scss" scoped>
.fullscreen {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; /* Adjust as needed */
}
.base-wrapper {
  width: fit-content !important;
  // width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 1px 1px 4px $primary;
  overflow: hidden;
  transition: height 0.5 ease;
  .base-header {
    padding: 0.75rem;
    .pi{
      cursor: pointer;
    }
  }
  .base-body {
    padding: 0.75rem;
    background-image: $light-gradient;  }
  .base-footer {
    padding: 0.75rem;
  }
  /deep/.p-breadcrumb {
    background: none !important;
    border: none !important;
    padding: 0 !important;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
