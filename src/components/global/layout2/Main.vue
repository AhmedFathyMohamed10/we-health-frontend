<template>
  <main class="custom-main">
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="custom-content">
      <slot name="content"></slot>
    </div>
  </main>
</template>

<script>
import Header from "./Header.vue"
import Sidebar from "./Sidebar.vue"
export default {
  name: 'Main',
  components:{
    Header,
    Sidebar,
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
// .custom-main{
//   position: relative;
//   .custom-content{
//     position: absolute;
//     left: 5rem;
//     overflow: hidden;
//   }
// }
.custom-main {
	display: flex;

	.custom-content {
		flex: 1 1 0;
		padding: 2rem;
    padding-top: 5rem;
    padding-left: 5rem;

		@media (max-width: 1024px) {
			padding-left: 5rem;
		}
	}
}
</style>