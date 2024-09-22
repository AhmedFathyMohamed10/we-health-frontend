<!-- <template>
  <div class="base" @click="$emit('click')">
    <slot></slot>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.base {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius:1.5rem;
    padding:1.5rem;
    box-shadow: 1px 1px 4px $gray;
  }
  @media (max-width:425px){
    .base {
      padding:0.75rem;
      border-radius:0.75rem;
  }
}
</style> -->
<template>
  <div :class="{ 'fullscreen': isFullScreen }" class="base-wrapper my-3" @click="$emit('click')">
    <div v-if="shouldShowCustomHeader">
      <slot name="header"></slot>
    </div>
    <div v-if="shouldShowDefaultHeader" class="base-header d-flex align-items-center flex-wrap"
      :class="[!(showToggleContent || showFullScreen || showToggleShow || showPermission ||showAction) ? 'justify-content-center' : 'justify-content-between']"
      >

      <!-- new mohamed khaled -->
      <div class="base-header-actions d-flex align-items-center gap-3">
        <h6 v-if="showToggleShow" class="toggle-content-icon m-0 " v-tooltip="$t('hide')">
          <img :src="isShowGroup ? require('@/assets/sidebar.svg') : require('@/assets/layout-sidebar-right.svg')" alt="" @click="showGroup()"/>

        </h6>
      </div>

      <div class="base-header-title d-flex align-items-center gap-3">
        <h6 class="mb-0 header-icon" v-if="icon"><i class="fs-5" :class="[icon]"></i></h6>
        <h6 class="mb-0">{{ title }}</h6>
      </div>
      <div class="base-header-actions d-flex align-items-center gap-3">
        <h6 v-if="showFullScreen" class="m-0">
          <i :class="['pi fs-5', isFullScreen ? 'pi-window-minimize' : 'pi-window-maximize']" v-tooltip="$t('fullscreen')"
            @click="fullScreen"></i>
        </h6>
        <h6 v-if="showToggleContent" class="toggle-content-icon m-0" v-tooltip="$t('hide')">
          <i class="pi pi-angle-down fs-5" @click="toggleContent"></i>
        </h6>
        <h6 v-if="showPermission || showAction" class="toggle-content-icon m-0 " v-tooltip="$t('hide')">
          <span v-if="showPermission">
            <img :src="isShowPermission ? require('@/assets/sidebar.svg') : require('@/assets/layout-sidebar-right.svg')" alt="" @click="openOrClosePermission()"/>
          </span>
          <div class="d-flex align-items-center gap-1" v-if="showAction">
            <slot name="custom-header"></slot>
            <!-- <i class="pi pi-angle-down fs-5" @click="toggleContent"></i> -->
          </div>
        </h6>
      </div>
      <!-- new mohamed khaled -->
      <!-- <div class="base-header-actions d-flex align-items-center gap-3">
      </div> -->
    </div>
    <!-- <transition name="fade" mode="in-out"> -->
    <div class="content " v-if="showContent">
      <div class="base-body">
        <div class="base-body-navigate mb-2" v-if="showBreadCrumb">
          <Breadcrumb :home="home" :model="items" />
        </div>
                <slot></slot>
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
    showToggleShow: {
      type: Boolean,
      default: false,
    },
    showPermission: {
      type: Boolean,
      default: false,
    },
    showAction: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showContent: true,
      isFullScreen: false,
      isShowGroup: true,
      isShowPermission: true,
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
        this.showToggleShow ||
        this.showPermission ||
        this.showAction ||
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
    showGroup() {
      this.isShowGroup = !this.isShowGroup;
      this.$emit('showGroup', this.isShowGroup);
    },
    openOrClosePermission() {
      this.isShowPermission = !this.isShowPermission;
      this.$emit('openOrClosePermission', this.isShowPermission);
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
  z-index: 1000;
}

.base-wrapper {
  width: 100%;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 1px 1px 6px $primary;
  transition: all 0.5s ease;

  .base-header {
    padding: 0.4rem;

    .pi {
      cursor: pointer;}
    .header-icon{
      color: $primary;
      cursor: pointer;
    }
  }

  .base-body {
    padding: 0.4rem;
    border-radius: 0.75rem;
    background: $light-gradient;
    border-radius: 1rem;
  }

  .base-footer {
    padding: 0.4rem;
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

