<template>
	<div class="special__contanier">
		<div class="special__contanier--title">
			<h1>Nuestros especiales</h1>
		</div>
		<div class="special__contanier--top__img">
			<img
				src="https://images.squarespace-cdn.com/content/v1/5a37f0e2f09ca4f1abf483ca/1660642188729-TJP536JINYDAOPCCQIJD/Composicion.png?format=2500w"
				alt=""
			/>
		</div>
		<div class="special__contanier--descp">
			<div class="special__contanier--descp__text">
				<p>
					La creatividad ha sido su mejor insignia, introduciendo en el sushi
					ingredientes como el plátano por primera vez en España. <br /><br />
					La apertura de locales más nuevos, con una estética totalmente
					innovadora, refuerza su trayectoria. Hoy, ofrece un estilo único para
					un restaurante de Sushi Madrid Centro.
				</p>
			</div>
		</div>
		<div class="specials__blocks">
			<div v-for="(item, key) in specials" :key="key">
				<img :src="item.img" alt="specials" />
				<div class="top-left">{{ item.name }}</div>
			</div>
		</div>
		<div class="specials__blocks--extra">
			<div v-for="(item, key) in bestSpecials" :key="key">
				<img :src="item.img" alt="specials" />
				<div class="top-left">{{ item.name }}</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "specials-view",
	data() {
		return {
			specials: [
				{
					name: "Pollo Teriyaki",
					img: "https://images.squarespace-cdn.com/content/v1/5a37f0e2f09ca4f1abf483ca/1584124959985-6HG5WEWHVCMQZ1LO1GO6/Yakuza%2B2019%2BSeptiembre%2Bpareja.jpg?format=1500w",
				},
				{
					name: "Ex Rolls",
					img: "https://images.squarespace-cdn.com/content/v1/5a37f0e2f09ca4f1abf483ca/1569922475985-3H2S1P6I7ZYU1BR8LN0C/__0014_Yakuza_Sept_Rolls_2.jpg?format=1500w",
				},
				{
					name: "Ensalada wakane",
					img: "https://images.squarespace-cdn.com/content/v1/5a37f0e2f09ca4f1abf483ca/1633599504360-7WGM4JHPU0FFLYOIOES8/Captura+de+pantalla+2021-10-07+a+las+11.33.40.png?format=1500w",
				},
				{
					name: "Nkaed Roll",
					img: "https://images.squarespace-cdn.com/content/v1/5a37f0e2f09ca4f1abf483ca/1660643019089-FASGXPVRV92KC8U318JH/2.png?format=1000w",
				},
				{
					name: "Cachas Roll",
					img: "https://images.squarespace-cdn.com/content/v1/5a37f0e2f09ca4f1abf483ca/1660643022647-JSC6ZL6KN31GED5YQ2RT/5.png?format=1000w",
				},
				{
					name: "Tentación",
					img: "https://images.squarespace-cdn.com/content/v1/5a37f0e2f09ca4f1abf483ca/1660643021231-41ODMGMBM2AP8RNFPS4Q/3.png?format=1000w",
				},
			],
			bestSpecials: [
				{
					name: "Noodles de langostinos y vegetales",
					img: "https://images.squarespace-cdn.com/content/v1/5a37f0e2f09ca4f1abf483ca/1660643023404-HVB18XMROKA9KRYCGCUD/6.png?format=2500w",
				},
				{
					name: "Noodles de pollo y vegetales",
					img: "https://images.squarespace-cdn.com/content/v1/5a37f0e2f09ca4f1abf483ca/1660643030110-S5TOR049XVQPCEYXP8OJ/DSC08249.jpg?format=2500w",
				},
			],
		};
	},
};
</script>
<style scoped>
.special__contanier {
	width: 100%;
	min-height: 85vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--white);
	flex-direction: column;
}
.special__contanier--title {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50vh;
	background-color: var(--red);
	color: var(--white);
	font-size: 3vw;
}

.special__contanier--top__img {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;
}

.special__contanier--top__img img {
	width: 100%;
	height: 100%;
	image-rendering: optimizeQuality;
}
.special__contanier--descp {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;
}

.special__contanier--descp__text {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 85%;
	height: auto;
	font-size: 3vw;
	padding: 4vh;
}
.specials__blocks {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: auto;
	flex-wrap: wrap;
}

.specials__blocks--extra {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: auto;
	flex-wrap: wrap;
}

.specials__blocks--extra div {
	width: 752px;
	height: 800px;
	padding: 0.1vh;
}

.specials__blocks--extra div img {
	width: 100%;
	height: 100%;
	image-rendering: optimizeQuality;
}

.specials__blocks div {
	width: 500px;
	height: 400px;
	padding: 0.1vh;
}

.specials__blocks div img {
	width: 100%;
	height: 100%;
	image-rendering: optimizeQuality;
}
.top-left {
	top: -97%;
	margin-left: 5vh;
	width: 100px;
	height: auto;
	position: relative;
	color: var(--white);
}
</style>