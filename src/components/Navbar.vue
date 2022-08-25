<template>
	<div :class="navStyle">
		<div class="navbar__logo">
			<div class="navbar__logo__name">
				<h1>Ashitaka</h1>
			</div>
		</div>
		<div v-if="desktop" class="navbar__navegation">
			<router-link to="/">
				<slot>
					<span>Restaurante</span>
				</slot>
			</router-link>
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
			navStyle: "navbar",
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
			console.log("Resize");
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
	height: auto;
	padding: 0.5vh;
	margin: 0px;
	top: 0;
	position: fixed;
	background-color: transparent;
	font-family: "M PLUS Rounded 1c", sans-serif;
	text-decoration: none;
}
.navbar-scroll {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: auto;
	padding: 0.5vh;
	margin: 0px;
	top: 0;
	position: fixed;
	background-color: transparent;
	font-family: "M PLUS Rounded 1c", sans-serif;
	text-decoration: none;
}

.navbar__logo {
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0.5vh;
}

.navbar__navegation {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	flex-wrap: wrap;
	min-height: 50px;
	text-decoration: none;
	text-decoration: underline;
}

.navbar__navegation span,
router-link {
	font-size: 1.2rem;
	margin-left: 2vh;
	margin-right: 2vh;
	text-decoration: none;
	color: var(--black);
}

.navbar__logo img {
	height: 100%;
	image-rendering: optimizeQuality;
}
</style>