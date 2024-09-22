<template>
  <div class="form-group add" :class="{'mb-0':hideLabel}">
    <label for="" class="form-label d-none d-md-block invisible " v-if="!hideLabel">+</label>
    <button v-if="path == 'mr'" class="btn btn-pill btn-success-gradient" @click.prevent="add" ><i class="fa fa-plus fa-md" aria-hidden="true"></i> Add 
    </button>
    <button v-else class="btn btn-icon rounded-circle btn-success-gradient" @click.prevent="add" v-tooltip.bottom="'Add'">
      <i class="fa fa-plus fa-md"></i>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      path: '',
    }
  },
  props: {
    hideLabel: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  methods: {
    add() {
      this.$emit('add')
    },
  },
  mounted() {
    this.path = this.$route.path.slice(1, 3)
  }
}
</script>
<style lang="scss" scoped>

</style>