<template>
  <!--app-content open-->
  <div class="main-content app-content mt-0">
      <div class="side-app">
          <!-- CONTAINER -->
          <div class="main-container container-fluid">
              <slot></slot>
          </div>
          <!-- CONTAINER END -->
      </div>
  </div>
  <!--app-content close-->
</template>

<script>
export default {
name: 'Main'
};
</script>

<style>
.app-content {
overflow: scroll;
}
.side-app {
/* position: absolute;
top: 75px;
bottom:75px ; */
}
</style>
