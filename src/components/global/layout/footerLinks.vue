<template>
	<div class="m-3">
	    <span class="sb-down">About</span>
	    <span class="sb-down">Accessibility</span><br v-if="sidebarStatus == 0">
	    <span class="sb-down">Advertising</span>
	    <span class="sb-down">Privacy & Terms</span>
	    <span class="sb-down">Business Services</span>
	    <span class="sb-down">Help Center</span><br>
	    <span class="sb-down">We Health It <i class="fa-regular fa-copyright"></i> 2024</span>
	</div>
</template>
<script>
export default {
  props:{
    sidebarStatus: {
        type: Number,
        required: true,
        default: 0,
    },
  },
}
</script>