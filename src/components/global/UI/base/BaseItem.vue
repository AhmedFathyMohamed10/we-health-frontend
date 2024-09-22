<template>
  <div class="custom-component">
    <div class="text-end p-1">
      <img data-v-2b476c73="" src="@/assets/global/utilities/drag-handle-corner-line.svg" alt="drag-handle-corner-line">
      <div class="text-center">
        <slot name="icon" class="fs-2 fa-icon-modify" v-if="!icon">{{ icon }}</slot>
        <slot v-else name="icon">
          <i class="fs-2 fa-icon-modify" :class="[iconClass,sizeClass]"></i>
        </slot><br>
        <span class="fs-smaller-custom" v-if="!title">{{ title }}</span>
        <span class="fs-smaller-custom" v-else>{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import image from "@/assets/global/ui/base/drag-handle-corner-line.svg";

export default {
  props: {
    title: String,
    icon: [String, Object], // Assuming icon can be a class or HTML element
    active: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default:'large',
    },
    shape: {
      type: String,
      default:'normal',
    },

  },
  data() {
    return {
      cornerDots: image,
    };
  },
  computed: {
    iconClass() {
      return typeof this.icon === 'string' ? this.icon : ''; // Assuming icon is a class if it's a string
    },
    sizeClass() {
      switch (this.size) {
        case 'small': return 'fs-10'
        case 'medium': return 'fs-6'
        case 'large': return 'fs-5'
        case 'x-large': return 'fs-2'
        default: return 'fs-5'
      }
    },
    shapeClass() {
      switch (this.shape) {
        case 'normal': return 'normal'
        case 'round': return 'round'
        case 'leaf': return 'leaf'
        default: return 'normal'
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.base-item {
  background-color: #fff;
  padding: 1rem;
  width: 10rem !important;
  width: auto;
  border-radius: 1rem;
  box-shadow: 0px 2px 4px $primary;
  color: $secondary;
  font-weight: bold;
  height: 10rem;
  &.normal{
    border-radius:0.5rem;
  }
  &.round{
    border-radius:1rem;
  }
  &.leaf{
    border-radius:1.5rem 0rem;
  }
  i{
    font-weight: bold;
  }
  &:hover {
    cursor: pointer;
    background: $primary-gradient-1;
    color: #fff;
  }
}

.active {
  /* Styles for the active state go here */
  background: $primary-gradient-1;
  color: #fff;
}
.custom-component{
  border-bottom-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  text-align: center;
  font-weight: 500;
  background-color: white;
  box-shadow: 1px 1px 4px #56C596;
  min-height: 80px;
  min-width: 120px;
}
.custom-component:hover {
  background: linear-gradient(180deg, #56C596 0%, #2B634B 100%) !important;
  .fa-icon-modify, .fs-smaller-custom {
    color: white;
  }
}
.fs-smaller-custom {
  font-size: smaller;
  font-weight: 600;
}
</style>
