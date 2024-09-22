<template>
  <section class="w-100 d-flex justify-content-around">
    <input type="text" v-model="newCategory" direction: RTL
    @keyup.enter="changNewCategory" @keydown="addSpace" /><button
      @click="changNewCategory"
      :disabled="!newCategory"
      class="input-group-text btn btn-labeled p-1 px-3"
      style="background: rgb(86, 197, 150); color: rgb(255, 255, 255); margin: -1%"
    >
      <i class="bi bi-check-lg"></i>
    </button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      newCategory: null,
    };
  },
  methods: {
    changNewCategory() {
      if (this.newCategory?.trim().length > 0) {
        this.$emit("changNewCategory", this.newCategory?.toLowerCase()?.trim());
        this.newCategory = null;
      }
    },
    addSpace(e) {
      if (this.newCategory?.trim().length > 0)
        if (e.keyCode == 32) {
          this.newCategory = this.newCategory + " ";
        }
    },
  },
};
</script>
<style scoped>
button:disabled {
  background-color: transparent;
}

input {
  width: 100%;
  border: none;
  outline: none;
}
</style>
