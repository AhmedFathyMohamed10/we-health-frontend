<!-- <template>
  <Dialog :visible="display" :containerStyle="{ 'min-width': `${minWidth}`, 'max-width': `${maxWidth}` }" :closable="false"
    :modal="true">
    <template #header>
      <span class="p-dialog-title" v-if="header">{{ header }}</span>
      <div class="p-dialog-header-icons">
        <button aria-label="close" type="button" class="p-dialog-header-icon p-dialog-header-close p-link" @click="close">
          <span class="p-dialog-header-close-icon pi pi-times"></span>
        </button>
      </div>
    </template>
    <slot></slot>
    <template #footer>
      <div class="row">
        <div class="offset-xxl-6 col-xxl-6">
          <div class="row">
            <div class="col-md-6 my-2">
              <button class="btn btn-pill btn-success-gradient w-100" @click.prevent="save">
                <span v-if="isLoading"><i class="pi pi-spin pi-spinner" style="font-size:1rem"></i></span>
                <span :class="isLoading ? 'mx-2' : ''">{{ $t('btns.save') }}</span>
              </button>
            </div>
            <div class="col-md-6 my-2">
              <button class="btn btn-pill btn-info-gradient w-100" @click.prevent="cancel">
                <span>{{ $t('btns.cancel') }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
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
      }
    },
    header: {
      type: String,
      default() {
        return '';
      }
    },
    isLoading: {
      type: Boolean,
      default() {
        return false;
      }
    },
    minWidth: {
      type: String,
      default() {
        return '25vw';
      }
    },
    maxWidth: {
      type: String,
      default() {
        return '65vw';
      }
    },
  },
  methods: {
    cancel() {
      this.$emit('cancel')
    },
    save() {
      this.$emit('save')
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style></style> -->



















































<template>
  <Dialog
    :visible.sync="show"
    :containerStyle="{ 'min-width': `${minWidth}`, 'max-width': `${maxWidth}` }"
    :closable="true"
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
    <div>
      <Breadcrumb
        :home="home"
        :model="items"
        class="mb-2"
        v-if="showBreadCrumb"
      />
      <slot></slot>
    </div>
    <template #footer >
      <div class="d-flex flex-row justify-content-between" >
        <div class="d-flex justify-content-start">
          <slot name="custom-footer" ></slot>
        </div>
        <div class="custom-footer d-flex justify-content-end flex-wrap gap-2" v-if="footer">
          <!-- <slot name="custom-footer" ></slot> -->
          <Button
            class="p-button-danger"
            :label="$t('btns.cancel')"
            icon="pi pi-times"
            :iconPos="locale == 'ar' ? 'right' : 'left'"
            :loading="isLoading"
            @click.prevent="cancel"
          />
          <Button
            :label="$t('btns.save')"
            icon="pi pi-check"
            :iconPos="locale == 'ar' ? 'right' : 'left'"
            :loading="isLoading"
            @click.prevent="save"
          />
        </div>
    </div>
    </template>
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
    footer: {
      type: Boolean,
      default() {
        return true;
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
      breadcrumbHome: { icon: "pi pi-home", to: "/" },
      breadcrumbItems: [
        { label: "Computer" },
        { label: "Notebook" },
        { label: "Accessories" },
        { label: "Backpacks" },
        { label: "Item" },
      ],
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
      // console.log("hide close");
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/.p-dialog-header,
.p-dialog-content,
.p-dialog-footer {
  box-shadow: 1px 1px 6px $primary !important;
}
/deep/.p-dialog-content {
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
  .p-dialog-header-close {
    background: $secondary-gradient;
    color: #fff;
  }
  .p-dialog-header-maximize {
    background: $primary-gradient-1;
    color: #fff;
  }
}
/deep/.p-dialog-content {
  background-image: $light-gradient;
  overflow: scroll;
}
/deep/.custom-footer {
  button {
    height: 38px;
    width: 120px;
    .p-button-icon {
      border: 2px solid white !important;
      border-radius: 50% !important;
      padding: 4px;
      font-size: 10px;
    }
  }
}
/deep/.p-breadcrumb {
  background: none !important;
  border: none !important;
  padding: 0 !important;
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