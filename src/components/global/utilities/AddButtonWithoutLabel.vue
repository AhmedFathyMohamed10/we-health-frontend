<template>
  <div class="form-group add custom-margin-left" :class="{'mb-0':hideLabel}">
    <button class="btn btn-icon rounded-circle mx-4 btn-success-gradient" @click.prevent="add" v-tooltip.bottom="'Add'">
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
.custom-margin-left{
  margin-left: -1rem;
}
</style>