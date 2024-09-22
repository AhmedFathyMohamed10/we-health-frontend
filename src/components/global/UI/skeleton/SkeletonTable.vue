<template>
  <div class="table-responsive">
    <DataTable :value="Array(rows).fill({})">
      <Column v-for="(column, index) in columns" :key="index"  :header="column">
        <template #body>
          <Skeleton></Skeleton>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    rows: {
      type: Number,
      required: true,
      default(){
        return 3
      }
    }
  }
}
</script>
