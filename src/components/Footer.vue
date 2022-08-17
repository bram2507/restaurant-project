<template>
	<div class="footer__container">
		<h2>Footer</h2>
	</div>
	<div class="footer-media">
		<div>
			<h1>Ashitaka</h1>
		</div>
		<div class="footer_nav">
			<router-link to="/"><span>Restaurante</span></router-link>
			<router-link to="/menu"><span>Menu</span></router-link>
			<router-link to="/specials"><span>Especiales</span></router-link>
			<router-link to="/booking"><span>Reservas</span></router-link>
		</div>
		<div class="socail_media">
			<div>
				<img src="@/assets/instagram.svg" alt="" />
			</div>
			<div>
				<img src="@/assets/facebook.svg" alt="" />
			</div>
			<div>
				<img src="@/assets/twitter.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "footer-content",
};
</script>

<style scoped>
.footer__container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 25vh;
	background-color: var(--black);
}
.footer-media {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	min-height: 10vh;
	background-color: var(--cream);
}

.footer_nav {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 57%;
	height: auto;
}

.socail_media {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 20%;
	height: auto;
}

.socail_media img {
	width: 35px;
	height: 35px;
}
</style>