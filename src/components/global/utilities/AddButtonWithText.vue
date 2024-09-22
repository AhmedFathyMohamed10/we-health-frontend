<template>
  <div class="form-group add" :class="{'mb-0':hideLabel}">
    <button class="btn btn-pill btn-success-gradient" @click.prevent="add" ><i class="fa fa-plus fa-md" aria-hidden="true"></i> Add 
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