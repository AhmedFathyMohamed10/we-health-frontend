<template>
    <div>
      <!-- Customize this template based on your data structure -->
      <div v-if="props.node">
        <div v-for="column in props.columns" :key="column.field">
          {{ props.node[column.field] }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      props: Object,
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  