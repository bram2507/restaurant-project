<template>
	<div class="main_contanier">
		<div class="main_contanier__call-action">
			<section class="main_contanier__call-action__left">
				<img src="@/assets/Recurso_7.svg" alt="" />
			</section>
			<div class="main_contanier__call-action__right">
				<section class="main_contanier__call-action__right--title">
					<h1>En Yakuza hacemos las cosas diferente.</h1>
				</section>
				<section class="main_contanier__call-action__right--subtitle">
					<h2>Olvídate del clásico sushi y prepárate para abrir grande.</h2>
				</section>
				<section class="main_contanier__call-action__right--buttons">
					<div class="buttons__action">
						<button
							class="buttons__action_style"
							@click="$router.push('/menu')"
						>
							Carta
						</button>
						<button
							class="buttons__action_style"
							@click="$router.push('/groups')"
						>
							Grupos
						</button>
					</div>
				</section>
				<section class="main_contanier__call-action_right--customers-says">
					<div class="customers-says__number">
						<div>
							<h2><strong class="number">24K+ </strong></h2>
						</div>
						<div>
							<h2>&nbsp;Clientes Satisfechos</h2>
						</div>
					</div>
					<div class="customers-says__number__testimonies">
						<div class="testemonies--img">
							<img src="@/assets/pexels-daniel-xavier-1239291.jpg" alt="" />
						</div>
						<div class="testemonies--paragraph">
							<p>
								"Esta es la mejor experiencia de comida japonesa que he tenido.
								es mi lugar favorito".
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
		<div class="main_contanier__call-action">
			<section class="main_contanier__dished">
				<section class="main_contanier__dished--left">
					<section>
						<img class="img" src="@/assets/Recurso_18.svg" alt="" />
					</section>
					<section>
						<img class="img" src="@/assets/Recurso_4.svg" alt="" />
					</section>
				</section>
				<div class="main_contanier__dished--rigth">
					<section class="main_contanier__dished--rigth__title">
						<h1>SUSHI YAKUZA, SUSHI PARECE, JAPO NO ES</h1>
					</section>
					<section class="main_contanier__dished--rigth__subtitle">
						<h2>
							La creatividad ha sido su mejor insignia, introduciendo en el
							sushi ingredientes como el plátano por primera vez en España.
						</h2>
					</section>
				</div>
			</section>
		</div>
		<div class="main_contanier__call-action--products_list"></div>
		<div class="main_contanier__call-action__seller">
			<section class="main_contanier__call-action__seller--container">
				<ul class="main_contanier__call-action__seller--left_side_product">
					<li>
						<h1>Los rolls más pedidos / トレンド</h1>
					</li>
					<li>
						<h2>Roll Japoneses</h2>
					</li>
					<li>
						<h3>Prueba nuestros rolls y no querás otros.</h3>
					</li>
					<li class="sushi_products">
						<div
							class="sushi_products__item"
							v-for="(item, key) in sushi"
							:key="key"
						>
							<img src="@/assets/icons8-checkmark.svg" alt="icons" /> {{ item }}
						</div>
					</li>
				</ul>
				<div class="main_contanier__call-action__seller--right_side_product">
					<img src="@/assets/Recurso_6.svg" alt="recurso6" />
				</div>
			</section>
			<section
				class="main_contanier__call-action__seller--container__separator"
			></section>
			<section class="main_contanier__call-action__seller--container">
				<div class="main_contanier__call-action__seller--right_side_product">
					<img src="@/assets/Recurso_14.svg" alt="recurso6" />
				</div>

				<ul class="main_contanier__call-action__seller--left_side_product">
					<li>
						<h1>Bebidas más pedidas / トレンド</h1>
					</li>
					<li>
						<h2>Bebidas Japonesas</h2>
					</li>
					<li>
						<h3>Acompaña tu comida con una bebida especial fría o caliente.</h3>
					</li>
					<li class="sushi_products">
						<div
							class="sushi_products__item"
							v-for="(item, key) in drinks"
							:key="key"
						>
							<img src="@/assets/icons8-checkmark.svg" alt="icons" />
							{{ item }}
						</div>
					</li>
				</ul>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	name: "main-content",
	props: {
		msg: String,
	},
	data() {
		return {
			desktop: true,
			windowWitdh: 0,
			sushi: [
				"Ex roll",
				"Veggie roll",
				"Tentación roll",
				"Cachas roll",
				"Pecado roll",
				"Mordisco roll",
			],
			drinks: [
				"Asahi Lager",
				"Kirin Ichiban Lager",
				"Sapporo",
				"Kombu-cha",
				"Macha Tea",
				"Muguicha",
			],
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
	mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
	list-style: none;
}
.main_contanier {
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--white);
	margin: 0px;
	margin-top: 10vh;
	flex-direction: column;
}
.main_contanier__call-action {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: auto;
	background-color: var(--white);
}

.main_contanier__call-action--products_list {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	min-height: 30vh;
	background-color: var(--red);
}

.main_contanier__call-action__left {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25%;
	min-height: 70vh;
	background-color: var(--red);
	background-image: url("@/assets/fondo_1.svg");
	background-position: top left center;
	background-repeat: no-repeat;
	background-size: 230%;
}

.main_contanier__call-action__left img {
	width: 160%;
	height: 120%;
	z-index: 10;
	position: sticky;
	transition: 0.6s ease-in-out;
}

.main_contanier__call-action__seller {
	width: 100%;
	min-height: 30vh;
	background-color: var(--white);
}

.sushi_products {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	width: 75%;
	height: auto;
	flex-wrap: wrap;
	font-family: "Noto Sans", sans-serif;
}

.sushi_products__item {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 200px;
	height: auto;
	font-size: 1.2rem;
	font-family: "Noto Sans", sans-serif;
}

.sushi_products__item img {
	width: 20px;
	height: 20px;
	margin-right: 1vh;
}

.main_contanier__call-action__seller--left_side_product h1 {
	color: var(--red);
}

.main_contanier__call-action__seller--container {
	display: flex;
	justify-content: space-between;
	align-items: center top;
	width: 100%;
	min-height: 30vh;
}

.main_contanier__call-action__seller--container__separator {
	width: 100%;
	height: 2px;
	background-color: var(--red);
}

.main_contanier__call-action__seller--left_side_product {
	width: 50%;
	min-height: 50vh;
	background-color: var(--white);
	display: flex;
	justify-content: center;
	align-items: left;
	flex-direction: column;
}

.main_contanier__call-action__seller--right_side_product {
	min-width: 50%;
	min-height: 50vh;
	background-color: var(--cream);
	background-image: url("@/assets/letters_foods_1.svg");
	background-position: right;
	background-repeat: no-repeat;
	background-size: 30%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.main_contanier__call-action__seller--right_side_product img {
	width: 40%;
	height: 40%;
	image-rendering: optimizeQuality;
	display: flex;
	justify-content: flex-start;
	align-content: flex-start;
	margin-right: 5vh;
}

.main_contanier__call-action__left img:hover {
	transition: 0.6s ease-in-out;
	transform: scale(1.12) translateX(50px) translateY(50px);
}
.main_contanier__call-action__right {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 75%;
	min-height: 50vh;
	background-color: var(--white);
	flex-wrap: wrap;
}

.main_contanier__call-action__right--title {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	text-align-last: center;
	width: 100%;
	min-height: 20vh;
}

.main_contanier__call-action__right--subtitle {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 4vh;
	width: 85%;
	min-height: 5vh;
}

.main_contanier__call-action__right--title h1 {
	width: 65%;
	font-size: 4vw;
	padding: 4vh;
	font-family: "Noto Sans", sans-serif;
	text-align: left;
	text-align-last: left;
}

.main_contanier__call-action__right--subtitle h2 {
	width: 65%;
	font-size: 2.5vw;
	padding: 4vh;
	font-family: "Noto Sans", sans-serif;
	text-align: left;
	text-align-last: left;
}

.main_contanier__call-action_right--customers-says {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 25vh;
	flex-wrap: wrap;
	background-color: var(--cream);
}

.customers-says__number {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 400px;
	height: 50px;
	margin-top: 2vh;
	border-right: 3px solid var(--black);
	border-left: 3px solid var(--black);
	padding: 2vh;
}
.customers-says__number > div {
	margin-top: 2vh;
	margin-bottom: 4vh;
}

.customers-says__number h1 {
	color: var(--grey);
	font-family: "Noto Sans", sans-serif;
	text-align: top;
}

.customers-says__number h2 {
	color: var(--black);
	font-family: "Noto Sans", sans-serif;
}

.main_contanier__call-action__right--buttons {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 5vh;
	margin-bottom: 5vh;
}
.buttons__action {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	min-height: 5vh;
	flex-wrap: wrap;
}
.buttons__action_style {
	margin-top: 2vh;
	margin-bottom: 2vh;
	width: 42%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4vh;
	outline: none;
	border: none;
	border: 2px solid var(--black);
	background-color: var(--black);
	color: var(--white);
	font-size: 1em;
	transition: 0.5s ease-in-out;
	margin-left: 1.5vh;
	margin-right: 1.5vh;
}

.buttons__action_style:hover {
	width: 42%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4vh;
	outline: none;
	border: 2px solid var(--black);
	background-color: var(--white);
	color: var(--black);
	font-size: 1em;
	transition: 0.5s ease-in-out;
	margin-left: 1.5vh;
	margin-right: 1.5vh;
}

.number {
	font-size: 4vw;
}

.customers-says__number__testimonies {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 500px;
	min-height: 50px;
	margin-top: 2vh;
	flex-direction: row;
	padding: 2vh;
}

.testemonies--img img {
	width: 100px;
	height: 100px;
	margin-right: 2vh;
	margin-left: 2vh;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.testemonies--paragraph p {
	font-size: 1em;
	font-family: "Noto Sans", sans-serif;
	color: var(--black);
	text-align: left;
	text-align-last: left;
}

.main_contanier__dished {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	min-height: 25vh;
	flex-wrap: flex;
	background-color: var(white);
}

.main_contanier__dished--left {
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 25%;
	min-height: 50vh;
	flex-direction: column;
	background-color: var(--white);
}

.main_contanier__dished--left > section:first-child {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 50vh;
	flex-direction: column;
	background-color: var(--cream);
	margin-bottom: 1vh;
	background-image: url("@/assets/letters_foods_1.svg");
	background-position: right;
	background-repeat: no-repeat;
	background-size: 30%;
}

.main_contanier__dished--left > section:last-child {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 50vh;
	flex-direction: column;
	background-color: var(--cream);
	background-image: url("@/assets/letters_foods_1.svg");
	background-position: right;
	background-repeat: no-repeat;
	background-size: 30%;
}

.main_contanier__dished--left img {
	width: 45%;
	height: 45%;
	image-rendering: optimizeQuality;
	transition: 0.5s ease-in-out;
}
.main_contanier__dished--left img:hover {
	transform: scale(1.3);
	transition: 0.5s ease-in-out;
}

.main_contanier__dished--rigth {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 75%;
	height: auto;
	background-color: var(--white);
	flex-direction: column;
}

.main_contanier__dished--rigth__title {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	height: auto;
	flex-direction: column;
}

.main_contanier__dished--rigth__title h1 {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 4.5vw;
	font-family: "Noto Sans", sans-serif;
	padding: 4vh;
	text-align: left;
	text-align-last: left;
}

.main_contanier__dished--rigth__subtitle {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 65%;
	height: auto;
}

.main_contanier__dished--rigth__subtitle h2 {
	font-size: 3vw;
	font-family: "Noto Sans", sans-serif;
	padding: 2vh;
	text-align: left;
	text-align-last: left;
}

@media screen and (min-width: 200px) and (max-width: 675px) {
	.main_contanier__call-action__seller--right_side_product img {
		width: 40%;
		height: 40%;
		image-rendering: optimizeQuality;
		display: flex;
		justify-content: flex-start;
		align-content: flex-start;
		margin-right: 5vh;
	}

	.main_contanier__call-action__left img:hover {
		transition: 0.6s ease-in-out;
	}

	.main_contanier__call-action__seller--container {
		display: flex;
		justify-content: center;
		align-items: center top;
		width: 100%;
		min-height: 30vh;
		flex-wrap: wrap;
	}

	.main_contanier__call-action__seller--left_side_product {
		width: 100%;
		min-height: 50vh;
		background-color: var(--white);
		display: flex;
		justify-content: center;
		align-items: left;
		flex-direction: column;
	}

	.main_contanier__call-action__seller--right_side_product {
		min-width: 100%;
		min-height: 50vh;
		background-color: var(--cream);
		background-image: url("@/assets/letters_foods_1.svg");
		background-position: right;
		background-repeat: no-repeat;
		background-size: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
}
</style>
