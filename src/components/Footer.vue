<template>
	<div class="footer-media">
		<div class="footer__container"></div>
		<div>
			<h1>Ashitaka</h1>
		</div>
		<div class="footer_nav">
			<div @click="$router.push('/')">Restaurante</div>
			<div @click="$router.push('/menu')">Carta</div>
			<div @click="$router.push('/specials')">Especialidades</div>
			<div @click="$router.push('/groups')">Grupos</div>
			<div @click="$router.push('/booking')">Reservas</div>
		</div>
		<div class="socail_media">
			<div @click="goToInstagram()">
				<img src="@/assets/instagram.svg" alt="" />
			</div>
			<div @click="goToFacebook()">
				<img src="@/assets/facebook.svg" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "footer-content",
	methods: {
		goToInstagram() {
			window.open("https://www.instagram.com/sushiyakuza/", "_blank");
		},
		goToFacebook() {
			window.open("https://www.facebook.com/sushiyakuza.es/", "_blank");
		},
	},
};
</script>

<style scoped>
.footer__container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 25vh;
	background-color: var(--black);
}
.footer-media {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: auto;
	background-color: var(--cream);
	flex-wrap: wrap;
}

.footer_nav {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 57%;
	height: auto;
}

.footer_nav div {
	margin-top: 1.5vh;
}

.socail_media {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 20%;
	height: auto;
}

.socail_media img {
	width: 35px;
	height: 35px;
}

@media screen and (max-width: 500px) {
	.footer-media {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		min-height: 10vh;
		background-color: var(--cream);
	}

	.footer_nav {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		height: auto;
		flex-direction: column;
		margin-top: 2vh;
		margin-bottom: 2vh;
	}

	.socail_media {
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: auto;
	}
}
</style>