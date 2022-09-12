<template>
	<div class="groups__contanier">
		<div class="groups__contanier--title">
			<h1>Menus de grupo</h1>
		</div>
		<div class="descp_menus">
			<div class="descp__menus--text">
				<p>
					Los menus de grupo están destinados a 6 a 10 personas. Es posible
					elegir entre unos 2 tipos de menus. Está completamente compensados y
					las cantidades son una locura.
				</p>
			</div>
		</div>
		<div class="main__food-container--items">
			<div class="main__food-contanier--title">
				<div>
					<h1>
						{{ menu.title }}
						{{ parseFloat(total(menu) + iva(menu)).toFixed(2) }} €
					</h1>
				</div>
				<div>
					<img src="@/assets/brush.svg" alt="" />
				</div>
			</div>
			<div class="main__food-contanier--items">
				<div
					class="main__food-list"
					v-for="(item, key) in menu.starters"
					:key="key"
				>
					<div class="main__food-list--items">
						<div>
							<span>{{ item.name.replaceAll("-", " ") }}</span>
							<span
								><strong class="shipping__access">{{
									item.shipping
								}}</strong></span
							>
							<span>{{ item.desc }}</span>
							<span>{{ item.price }}</span>
						</div>
						<div>
							<img :src="item.img" alt="food-image" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="main__food-container--items">
			<div class="main__food-contanier--title">
				<div>
					<h1>
						{{ menu2.title }}
						{{ parseFloat(total(menu2) + iva(menu2)).toFixed(2) }} €
					</h1>
				</div>
				<div>
					<img src="@/assets/brush.svg" alt="" />
				</div>
			</div>
			<div class="main__food-contanier--items">
				<div
					class="main__food-list"
					v-for="(item, key) in menu2.starters"
					:key="key"
				>
					<div class="main__food-list--items">
						<div>
							<span>{{ item.name.replaceAll("-", " ") }}</span>
							<span
								><strong class="shipping__access">{{
									item.shipping
								}}</strong></span
							>
							<span>{{ item.desc }}</span>
							<span>{{ item.price }}</span>
						</div>
						<div>
							<img :src="item.img" alt="food-image" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="select-menu">
			<div>
				<select
					name="menus"
					@change="onChange($event)"
					class="form-control"
					v-model="menus"
				>
					<option value="Menu Simple">Menu Simple</option>
					<option value="Menu Empresa">Menu Empresa</option>
				</select>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			menus: ["menu simple", "menu empresa"],
			menu: {
				title: "Menu simple",
				starters: [
					{
						name: "Poke-de-Salmón X (2)",
						desc: "Salmón, edamames, wakame, lombarda, acompañado de arroz, salsa mayo-sesámo cubierto con sesámo negro.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/15f1285f8287d2e3fe5f2f0f2ff7066b",
						price: 12.4 * 2 + " €",
						shipping: "(Solo disponible en el local)",
						restaurant: true,
					},
					{
						name: "Pollo-Teriyaki X (2)",
						desc: "Pollo salteado con vegetales en salsa teriyaki, acompañado de arroz, zanahoria con topping de sésamo negro.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/c9d65684ac1fc8bd17d77eff6cd612c5",
						price: 11.9 * 2 + " €",
						shipping: "(Solo disponible en el local)",
						restaurant: true,
					},
					{
						name: "Noodles-de-pollo-y-vegetales X (2)",
						desc: "Fideos salteados con vegetales, pollo y salsa de ostras.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/b26d02787abcb83676e9a2e43db797c9",
						price: 10.9 * 2 + " €",
						shipping: "(Solo disponible en el local)",
						restaurant: true,
					},
					{
						name: "Maki-de-Red-Velvet X (4)",
						desc: "Tarta Red Velvet con topping de black cookie y sirope de chocolate.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/9850fe6cebf0e4c3fb8ba8293db9b2e9",
						price: 12.4 * 2 + " €",
						shipping: "(Solo disponible en el local)",
						restaurant: true,
					},
				],
			},
			menu2: {
				title: "Menu empresa",

				starters: [
					{
						name: "Poke-de-Salmón X (2)",
						desc: "Salmón, edamames, wakame, lombarda, acompañado de arroz, salsa mayo-sesámo cubierto con sesámo negro.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/15f1285f8287d2e3fe5f2f0f2ff7066b",
						price: 12.4 * 2 + " €",
						shipping: "(Solo disponible en el local)",
						restaurant: true,
					},
					{
						name: "Pollo-Teriyaki X (2)",
						desc: "Pollo salteado con vegetales en salsa teriyaki, acompañado de arroz, zanahoria con topping de sésamo negro.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/c9d65684ac1fc8bd17d77eff6cd612c5",
						price: 11.9 * 2 + " €",
						shipping: "(Solo disponible en el local)",
						restaurant: true,
					},
					{
						name: "Noodles-de-pollo-y-vegetales X (2)",
						desc: "Fideos salteados con vegetales, pollo y salsa de ostras.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/b26d02787abcb83676e9a2e43db797c9",
						price: 10.9 * 2 + " €",
						shipping: "(Solo disponible en el local)",
						restaurant: true,
					},
					{
						name: "Maki-de-Red-Velvet X (4)",
						desc: "Tarta Red Velvet con topping de black cookie y sirope de chocolate.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/9850fe6cebf0e4c3fb8ba8293db9b2e9",
						price: 12.4 * 2 + " €",
						shipping: "(Solo disponible en el local)",
						restaurant: true,
					},
					{
						name: "Ex",
						desc: "Langostinos tempura, plátano frito, queso crema y cebollino con topping de aguacate, salsa dragón y anguila",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/3f84a7929a1dcaf991d827839e361f4e",
						price: 12.4 * 2 + " €",
						shipping: "(Solo disponible en el local)",
						restaurant: true,
					},
					{
						name: "Veggie",
						desc: "Plátano frito, espárragos, pepino, cebollino y zanahoria, cubierto de sésamo y wakame.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/4071b01532011a369415d26748ee1de0",
						price: 10.9 * 2 + " €",
						shipping: "(Solo disponible en el local)",
						restaurant: true,
					},
					{
						name: "Tentación",
						desc: "Roll tempurizado con salmón y aguacate con topping de cebolla crunchy y salsa Mayo Sésamo",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/3f8626fda6038c9bc56a8abcf48961d9",
						price: 13.4 * 2 + " €",
						shipping: "(Solo disponible en el local)",
						restaurant: true,
					},
					{
						name: "Cachas",
						desc: "Pollo empanado, aguacate, queso crema y cebollino envueltos en sésamo con brotes, salsa teriyaki y salsa Mayo Sésamo.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/357193d29f60f327970026a727cb0ed6",
						price: 10.4 * 2 + " €",
						shipping: "(Solo disponible en el local)",
						restaurant: true,
					},
					{
						name: "Pecado",
						desc: "Langostinos tempura, queso crema y cebollino cubierto de aguacate y salmón, con topping de langostino tempura y salsa dinamita",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/22e3b45f99fb83979ea7006c57f40136",
						price: 10.4 * 2 + " €",
						shipping: "(Solo disponible en el local)",
						restaurant: true,
					},
				],
			},
		};
	},
	methods: {
		total(menu) {
			let total = 0;
			menu.starters.map((e) => {
				total += parseFloat(e.price.replaceAll(" €", ""));
			});
			return total + " €";
		},
		iva(menu) {
			let total = 0;
			menu.starters.map((e) => {
				total += parseFloat(e.price.replaceAll(" €", ""));
			});
			return parseFloat(total * 0.21).toFixed(2) + " €";
		},
		onChange(event) {
			alert(event.target.value);
		},
	},
};
</script>
<style scoped>
.shipping__access {
	color: var(--red);
}

.select-menu {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;
	margin-top: 10vh;
	margin-bottom: 10vh;
}

.select-menu div {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 85%;
	height: auto;
	padding: 4vh;
}

.descp_menus {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;
}
.descp_menus--text {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 85%;
	height: auto;
	font-size: 5vw;
	padding: 4vh;
}
.groups__contanier {
	width: 100%;
	min-height: 85vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--white);
	flex-direction: column;
}
.groups__contanier--title {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50vh;
	background-color: var(--red);
	color: var(--white);
	font-size: 3vw;
}

.main__food-contanier--title {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;
	font-size: 3vw;
	font-family: "Noto Sans", sans-serif;
	flex-direction: column;
}

.main__food-contanier--title div:last-child {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 25vh;
	margin-top: -10vh;
}
.main__food-contanier--title img {
	width: 85%;
	height: 100%;
	color: var(--red);
}

.main__food-contanier--items {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	height: auto;
	background-color: var(--white);
	flex-direction: column;
}
.main__food-list {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 85%;
	height: auto;
	border-radius: 1vh;
	background-color: var(--white);
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

	margin-bottom: 2vh;
	transition: 0.3s ease-in-out;
}

/* .main__food-list:hover {
	transition: 0.3s ease-in-out;
	transform: translateY(10px);
} */

.main__food-list--items {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	min-height: auto;
	flex-direction: row;
}

.main__food-list--items > div:first-child {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	width: 65%;
	min-height: 5vh;
	flex-direction: column;
}

.main__food-list--items > div:first-child span {
	padding: 2vh;
	text-align: left;
}

.main__food-list--items > div:last-child {
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	height: auto;
	border-radius: 1vh;
	padding: 2vh;
}

.main__food-list--items > div:last-child img {
	border-radius: 1vh;
	width: 100%;
	height: 100%;
}
</style>