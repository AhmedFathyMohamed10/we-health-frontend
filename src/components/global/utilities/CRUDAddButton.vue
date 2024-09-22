<template>
  <div class="form-group add" :class="{'mb-0':hideLabel}">
    <label for="" class="form-label d-none d-md-block invisible " v-if="!hideLabel">+</label>
    <button class="btn btn-icon rounded-circle btn-success-gradient" @click.prevent="add" v-tooltip.bottom="'Add'">
      <i class="fa fa-plus fa-md"></i>
    </button>
  </div>
</template>
<script>
export default {
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
}
</script>
<style lang="scss" scoped>

</style>