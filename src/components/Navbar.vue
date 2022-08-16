<template>
	<div class="navbar">
		<div class="navbar__logo">
			<img src="@/assets/Logo.svg" alt="" />
		</div>
		<div></div>
		<div v-if="desktop" class="navbar__navegation">
			<router-link to="/"><span>Restaurante</span></router-link>
			<router-link to="/menu"><span>Menu</span></router-link>
			<router-link to="/specials"><span>Especiales</span></router-link>
			<router-link to="/booking"><span>Reservas</span></router-link>
		</div>
		<div v-else></div>
	</div>
</template>
<script>
export default {
	name: "navbar-content",
	data() {
		return {
			desktop: true,
			windowWitdh: 0,
		};
	},
	watch: {
		windowWitdh: function (value) {
			this.desktop = true;
			if (value < 956) {
				this.desktop = false;
			}
		},
	},
	created() {
		window.addEventListener("resize", () => {
			this.windowWitdh = window.innerWidth;
		});
	},
};
</script>
<style scoped>
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 50px;
	background-color: transparent !important;
}

.navbar__logo {
	width: 300px;
	height: 50px;
	background-color: brown;
}

.navbar__navegation {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	min-width: 75%;
	flex-wrap: wrap;
	min-height: 50px;
	background-color: lightblue;
	text-decoration: none;
}

.navbar__navegation span {
	margin-left: 2vh;
	margin-right: 2vh;
}

.navbar__logo img {
	height: 100%;
	image-rendering: optimizeQuality;
}
</style>