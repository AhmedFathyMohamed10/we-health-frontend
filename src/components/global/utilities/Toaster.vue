<template>
    <Toast position="top-right">
      <template #message="slotProps">
        <div class="flex-grow-1 d-flex gap-2">
          <div v-if="slotProps.message.icon">
            <i class="d-block pi" :class="[slotProps.message.icon]" style="font-size:1.5rem"></i>
          </div>
          <div >
            <h6>{{slotProps.message.summary}}</h6>
            <p v-if="slotProps.message.details">{{slotProps.message.details}}</p>
          </div>
        </div>
      </template>
    </Toast>
</template>
<script>
export default {
  
}
</script>