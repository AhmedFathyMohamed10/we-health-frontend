<template>
  <!-- <Menu></Menu> -->
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img v-if="!is_expanded" :src="miniLogo" alt="We Health it" /> 
			<img v-else :src="fullLogo" alt="We Health it" /> 
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="toggleMenu">
				<span class=""><i class="pi pi-align-justify"></i></span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">

			<router-link to="/" class="button">
				<span class=""><i class="pi pi-home"></i></span>
				<span class="text">Home</span>
			</router-link>
			<router-link to="/about" class="button">
				<span class=""><i class="pi pi-home"></i></span>
				<span class="text">About</span>
			</router-link>
			<router-link to="/team" class="button">
				<span class=""><i class="pi pi-home"></i></span>
				<span class="text">Team</span>
			</router-link>
			<router-link to="/contact" class="button">
				<span class=""><i class="pi pi-home"></i></span>
				<span class="text">Contact</span>
			</router-link>    
		</div>
		<div class="flex"></div>
		
		<div class="menu">
			<router-link to="/settings" class="button">
				<span class=""><i class="fa fa-cog" aria-hidden="true"></i></span>
				<span class="text">Settings</span>
			</router-link>
		</div>
	</aside>
</template>
<script>
import Menu from "./recursive/Menu.vue"
export default {
  components:{
    // Menu
  },
  data() {
    return {
      is_expanded: localStorage.getItem("is_expanded") === "true",
      miniLogo: require('@/assets/global/logo/BONDS.svg'),
      fullLogo: require('@/assets/global/logo/Logo.svg'),
    };
  },
  methods: {
    toggleMenu() {
      this.is_expanded = !this.is_expanded;
      localStorage.setItem("is_expanded", this.is_expanded);
    },
  },
};
</script>
<style lang="scss" scoped>
.submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease-out;
}

.slide-enter-to,
.slide-leave {
  max-height: 500px; /* Adjust the maximum height based on your content */
}



button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}





aside {
	display: flex;
	flex-direction: column;

	// background-color: var(--dark);
	// color: #fff;
  background-color: #fff;
  color: $secondary;

	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0%;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			// width: 3rem;
      min-width: 3rem;
      min-height: 3rem;
      width: 75%;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: #fff;
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: $primary;
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	h3 {
		color: $gray;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: #fff;
				transition: 0.2s ease-in-out;
			}
			.text {
				color: #fff;
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: $secondary;

				.material-icons, .text {
					color: $primary;
				}
			}

			&.router-link-exact-active {
				background-color: $secondary;
				border-right: 5px solid $primary;

				.material-icons, .text {
					color: $primary;
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: $gray;
		}
	}

	&.is-expanded {
		width: 300px;

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
		}
	}

	// @media (max-width:2560px) {
		position: absolute;
		z-index: 99;
    // top: 5rem;
	// }
}
</style>