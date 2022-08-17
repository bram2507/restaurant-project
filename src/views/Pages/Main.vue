<template>
	<div class="main_contanier">
		<div class="main_contanier__call-action">
			<section class="main_contanier__call-action__left">
				<img src="@/assets/Recurso_7.svg" alt="" />
			</section>
			<div class="main_contanier__call-action__right">
				<section class="main_contanier__call-action__right--title">
					<h1>Feel the taste of Japanes food</h1>
				</section>
				<section class="main_contanier__call-action__right--subtitle">
					<h2>Feel the taste of the japanes food from anywhere and anytime.</h2>
				</section>
				<section class="main_contanier__call-action_right--customers-says">
					<div class="customers-says__number">
						<div>
							<h2><strong class="number">24K+ </strong></h2>
						</div>
						<div><h2>&nbsp;Happy Customers</h2></div>
					</div>
					<div class="customers-says__number__testimonies">
						<div class="testemonies--img">
							<img src="@/assets/pexels-daniel-xavier-1239291.jpg" alt="" />
						</div>
						<div class="testemonies--paragraph">
							<p>
								"This is the best japan food experience i ever had. It is my
								favorite palce".
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
		<div class="main_contanier__call-action">
			<section class="main_contanier__dished">
				<div class="main_contanier__dished--left">
					<div>
						<img src="@/assets/Recurso_18.svg" alt="" />
					</div>
					<div>
						<img src="@/assets/Recurso_4.svg" alt="" />
					</div>
				</div>
				<div class="main_contanier__dished--rigth"></div>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_contanier {
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--white);
	margin: 0px;
	flex-direction: column;
}
.main_contanier__call-action {
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: auto;
	background-color: var(--white);
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
	height: 160%;
	z-index: 20;
	position: sticky;
}
.main_contanier__call-action__right {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 75%;
	min-height: 50vh;
	background-color: var(--white);
	flex-direction: column;
}

.main_contanier__call-action__right--title {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	text-align-last: center;
	margin-left: 2vh;
	width: 100%;
	min-height: 20vh;
}

.main_contanier__call-action__right--subtitle {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	text-align-last: center;
	margin-left: 2vh;
	width: 100%;
	min-height: 5vh;
}

.main_contanier__call-action__right--title h1 {
	font-size: 8vw;
	padding: 2vh;
	font-family: "Noto Sans", sans-serif;
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

.customers-says__number h1 {
	color: var(--grey);
	font-family: "Noto Sans", sans-serif;
	text-align: top;
}

.customers-says__number h2 {
	color: var(--black);
	font-family: "Noto Sans", sans-serif;
}

.number {
	font-size: 4em;
}

.customers-says__number__testimonies {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 50px;
	margin-top: 2vh;
	flex-direction: row;
	padding: 2vh;
}

.testemonies--img img {
	width: 75px;
	height: 75px;
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
	background-color: var(white);
}

.main_contanier__dished--left {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25%;
	min-height: 25vh;
	flex-direction: column;
	background-color: brown;
}

.main_contanier__dished--left > div:first-child {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 35vh;
	flex-direction: column;
	background-color: var(--cream);
	margin-bottom: 0.8vh;
}

.main_contanier__dished--left > div:nth-child(n) {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 35vh;
	flex-direction: column;
	background-color: var(--cream);
}

.main_contanier__dished--left img {
	width: 45%;
	height: 45%;
	image-rendering: optimizeQuality;
}

.main_contanier__dished--rigth {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 75%;
	min-height: 71vh;

	background-color: green;
}
</style>
