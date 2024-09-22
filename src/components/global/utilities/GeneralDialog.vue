<template>
  <Dialog
    :visible.sync="show"
    :containerStyle="{ 'min-width': `${minWidth}`, 'max-width': `${maxWidth}` }"
    :closable="true  "
    :maximizable="true"
    :modal="true"
    @hide="close"
  >
    <template #header>
      <div class="custom-header d-flex align-items-center gap-2">
        <h5 class="custom-header-title-icon mb-0" v-if="icon">
          <i class="fs-5" :class="icon"></i>
        </h5>
        <h5 class="custom-header-title mb-0" v-if="header">{{ header }}</h5>
      </div>
    </template>
    <div class="custom-content" :class="checkFooterExist()">
        <slot></slot>
    </div>
  </Dialog>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<script>
export default {
  props: {
    display: {
      required: true,
      type: Boolean,
      default() {
        return false;
      },
    },
    header: {
      type: String,
      default() {
        return "";
      },
    },
    icon: {
      type: String,
      default() {
        return "";
      },
    },
    isLoading: {
      type: Boolean,
      default() {
        return false;
      },
    },
    minWidth: {
      type: String,
      default() {
        return "25vw";
      },
    },
    maxWidth: {
      type: String,
      default() {
        return "65vw";
      },
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
      default: () => [],
    },
  },
  data() {
    return {
      show: this.display,
 
    };
  },
  watch: {
    display() {
      this.show = this.display;
    },
  },
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    save() {
      this.$emit("save");
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
// .custom-content {
//   .p-dialog-content{
//   border-bottom-right-radius: 2rem;
//   border-bottom-left-radius: 2rem;
// }
// }
/deep/.p-dialog-header,
.p-dialog-content,
.p-dialog-footer {
  box-shadow: 1px 1px 6px $primary !important;
}

/deep/.p-dialog-footer {
  box-shadow: 1px 1px 6px $primary !important;
}
.custom-header {
  .custom-header-title-icon {
    i {
      color: $primary;
      font-weight: bold;
    }
  }
}
/deep/.p-dialog-header-icons {
  gap: 0.25em;
  .p-dialog-header-close {
    background: $secondary-gradient;
    color: #fff;
  }
  .p-dialog-header-maximize {
    background: $primary-gradient-1;
    color: #fff;
    margin: unset;
  }
}
/deep/.p-dialog-content {
  overflow: scroll;
  box-shadow: 1px 1px 6px $primary !important;
  background-image: $light-gradient;
  // border-bottom-right-radius: 2rem;
  // border-bottom-left-radius: 2rem;
}
/deep/.custom-footer {
  button {
    width: 120px;
    .p-button-icon {
      border: 2px solid white !important;
      border-radius: 50% !important;
      padding: 4px;
      font-size: 10px;
    }
  }
}

@media screen and (max-width: 425px) {
  .custom-footer {
    justify-content: center;
    button {
      width: 100%;
    }
  }
}
</style>