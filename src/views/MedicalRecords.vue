<template>
	<router-view />
</template>

<script>
export default {
	components: {},
	mounted() {
		
		this.fetchStaticData();
	},
	methods: { 
		async fetchStaticData() {
			this.$store.dispatch('detailsGeneral/generalStaticData/loadStaticData');
		},
	}
};
</script>