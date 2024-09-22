<template>
  <div class="custom-drop-menu  ">
    <div class="menu-head" id="test-menu">
      <label v-if="label" class="form-label">{{ label }}</label>
      <button
        @click="toggle"
        class="btn btn-pill me-2 btn-outline-success custom-drop-menu-btn w-100"
        :class="{ 'btn-outline-danger': invalid }"
      >
        <div class="d-flex justify-content-between">
          <span v-if="!value" class="custom-btn-label">{{btnPlaceholder}}</span>
          <span v-else class="custom-btn-label-active">{{value.toString() }}</span>
          <span class="custom-btn-icon"><i class="fa fa-angle-down fa-lg"></i></span>
        </div>
      </button>
      <slot></slot>
      <OverlayPanel
        ref="op"
        :showCloseIcon="false"
        :dismissable="true"
        appendTo="body"
        id="overlay_panel"
        style="width: fit-content"
      >
        <div class="menu-body d-flex " :class="{ 'align-items-center': otherChecked }">
          <div v-if="!otherChecked" class="d-flex">
            <div v-for="(option, outer) in options" :key="outer" class="column me-2">
              <span
                v-for="(item, inner) in option"
                :key="inner"
                class="item p-2 d-flex align-item-center justify-content-center"
                :class="{ active: item === data[outer] }"
                style="cursor: pointer"
                @click="concatItems(item, outer)"
              >
                {{ item }}
              </span>
            </div>
            <div class="column me-2" v-if="ortho">
              <span 
                class="item p-2 d-flex align-item-center justify-content-center"
                :class="{ active: data[options.length+1] === 'Ortho' }"
                style="cursor: pointer"
                @click="setOrtho"
                >
                Ortho
              </span>
            </div>
          </div>
          <div v-else class="p-2">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Other Value"
              v-model="form"
              @change="formChanged"
            />
            
          </div>
          <div class="ms-4">
            <button
              class="btn btn-icon rounded-circle btn-success d-block" @click="setOther">
              <i class="fa fa-keyboard-o"></i>
            </button>
            <button
              class="btn btn-icon rounded-circle btn-info d-block my-2" @click="resetForm">
              <i class="fa fa-refresh"></i>
            </button>
          </div>
        </div>
      </OverlayPanel>
    </div>
  </div>
</template>
<script>
// import Checkbox from 'primevue/checkbox';
import OverlayPanel from "primevue/overlaypanel";
export default {
  props: {
    value: {
      // type:String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
    },
    preLabel: {
      type: String,
    },
    excludeColumn: {
      type: Number,
    },
    // used in case ortho choice in entrance testing > coverTest >Unilateral Cover Test and Alternating Cover Test
    ortho: {
      type: Boolean,
      default(){
        return false;
      },
    },
    invalid: {
      type: Boolean,
    },
  },
  components: {
    // Checkbox,
    OverlayPanel,
  },
  data() {
    return {
      form: this.value,
      btnPlaceholder: "Select",
      data: [],
      otherChecked: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    formChanged() {
      this.$emit("input", this.form.toString());
    },
    toggle(event) {
      this.$refs.op.toggle(event);
    },
    init() {
      let columns = this.options.length;
      if (this.ortho){
        for (let i = 0; i < columns+1; i++) {
          this.data[i] = "";
        }
      }
      else {
        for (let i = 0; i < columns; i++) {
          this.data[i] = "";
      }
      }
    },
    concatItems(item, outer) {
        /////////////////////////////////////// check case ortho option selected ////////////////////// 
        if(this.ortho)
          if(item && this.data[this.options.length] === 'Ortho')
              this.data[this.options.length] = ''
        /////////////////////////////////////// default concat behavior ///////////////////////////////
        this.data[outer] = item;
        if (this.preLabel) {
          this.form = this.preLabel + this.data.reduce((a, b) => a + b);
          this.formChanged();
        } 
        if (typeof this.excludeColumn === "number") {
          if (this.data.length > 2) {
            this.form = this.data[this.excludeColumn] + this.data.slice(1).reduce((a, b) => a + b);
            this.formChanged();
          }
        } 
        else {
          this.form = this.data.reduce((a, b) => a + b);
          this.formChanged();
        } 
    },
    resetForm() {
      this.init();
      this.concatItems()
    },
    setOther(){
      this.otherChecked=!this.otherChecked
      if(this.otherChecked)
        this.resetForm()
    },
    setOrtho(){
        this.init();
        this.data[this.options.length] = 'Ortho';
        this.concatItems()
    },
  },
};
</script>
<style lang="scss" scoped>

.custom-drop-menu {
  .custom-drop-menu-btn {
    color: $success-2 !important;
    .custom-btn-label {
      color: $success-2 !important;
      opacity: 0.5;
      font-size: 0.875rem;
    }
    .custom-btn-label-active {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .custom-btn-icon {
      color: $success !important;
    }
    &:hover {
      background-color: #fff !important;
    }
  }
}
#overlay_panel .menu-body .column .item {
  &:hover {
    background-color: $gray !important;
  }
}
#overlay_panel .menu-body .column .item.active {
  color: $success !important;
}
.p-overlaypanel {
  max-height: 240px !important;
  overflow: auto !important;
}
</style>
