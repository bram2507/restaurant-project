<template>
	<div class="menu__contanier">
		<div class="menu__contanier--shipping">
			<h1>Carta para llevar</h1>
		</div>
		<dynamic-food :food="startersShipping" />
		<dynamic-food :food="rollsShipping" />
		<dynamic-food :food="raiceShipping" />
		<dynamic-food :food="desertShipping" />
	</div>
	<div class="menu__contanier">
		<div class="menu__contanier--shipping">
			<h1>Carta restaurante</h1>
		</div>
		<dynamic-food :food="startersRestaurant" />
		<dynamic-food :food="rollsRestaurant" />
		<dynamic-food :food="raiceRestaurant" />
		<dynamic-food :food="desertRestaurant" />
	</div>
</template>
<script>
import Food from "./Food.vue";

export default {
	name: "menu-view",
	components: {
		"dynamic-food": Food,
	},
	data() {
		return {
			startersShipping: {
				title: "Entrantes",
				starters: [
					{
						name: "Edamame",
						desc: "Vainas de soja con sal maldón.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/cbabcd814c7e8e95d5ba6e6f9824e1c8",
						price: "4.40€",
						restaurant: false,
					},
					{
						name: "Gyozas-de-Pollo",
						desc: "4 unidades de empanaditas fritas con pollo y vegetales.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/1165f88e8963be7b9cb470e6bbb61d4b",
						price: "5,40€",
						restaurant: false,
					},
					{
						name: "Gyozas-Vegetales",
						desc: "Empanaditas fritas rellenas de vegetales, acompañadas de salsa ponzu (4 unidades)",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/b5f7abba7b58d824e51e9a7f1fafa9d2",
						price: "4,90€",
						restaurant: false,
					},
				],
			},
			rollsShipping: {
				title: "Rolls",
				starters: [
					{
						name: "Ex",
						desc: "Langostinos tempura, plátano frito, queso crema y cebollino con topping de aguacate, salsa dragón y anguila",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/3f84a7929a1dcaf991d827839e361f4e",
						price: "12,40€",
						restaurant: false,
					},
					{
						name: "Veggie",
						desc: "Plátano frito, espárragos, pepino, cebollino y zanahoria, cubierto de sésamo y wakame.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/4071b01532011a369415d26748ee1de0",
						price: "10,90€",
						restaurant: false,
					},
					{
						name: "Tentación",
						desc: "Roll tempurizado con salmón y aguacate con topping de cebolla crunchy y salsa Mayo Sésamo",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/3f8626fda6038c9bc56a8abcf48961d9",
						price: "13,40€",
						restaurant: false,
					},
				],
			},
			raiceShipping: {
				title: "Arroz y Noodles",
				starters: [
					{
						name: "Poke-de-Salmón",
						desc: "Salmón, edamames, wakame, lombarda, acompañado de arroz, salsa mayo-sesámo cubierto con sesámo negro.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/15f1285f8287d2e3fe5f2f0f2ff7066b",
						price: "12,40€",
						restaurant: false,
					},
					{
						name: "Noodles-de-pollo-y-vegetales",
						desc: "Fideos salteados con vegetales, pollo y salsa de ostras.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/b26d02787abcb83676e9a2e43db797c9",
						price: "10,90€",
						restaurant: false,
					},
					{
						name: "Noodles-de-langostinos-y-vegetales",
						desc: "Fideos salteados con vegetales, langostinos y salsa de ostras.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/35cfdf698406f3ff41b4194f3f997b4d",
						price: "13,40€",
						restaurant: false,
					},
				],
			},
			desertShipping: {
				title: "Postres",
				starters: [
					{
						name: "Maki de Red Velvet",
						desc: "Tarta Red Velvet con topping de black cookie y sirope de chocolate.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/9850fe6cebf0e4c3fb8ba8293db9b2e9",
						price: "6,90€",
						restaurant: false,
					},
				],
			},
			startersRestaurant: {
				title: "Entrantes",
				starters: [
					{
						name: "Edamame",
						desc: "Vainas de soja con sal maldón.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/cbabcd814c7e8e95d5ba6e6f9824e1c8",
						price: "4.40€",
						restaurant: true,
					},
					{
						name: "Gyozas-de-Pollo",
						desc: "4 unidades de empanaditas fritas con pollo y vegetales.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/1165f88e8963be7b9cb470e6bbb61d4b",
						price: "5,40€",
						restaurant: true,
					},
					{
						name: "Gyozas-Vegetales",
						desc: "Empanaditas fritas rellenas de vegetales, acompañadas de salsa ponzu (4 unidades)",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/b5f7abba7b58d824e51e9a7f1fafa9d2",
						price: "4,90€",
						restaurant: true,
					},
					{
						name: "Sushi Pizza Original",
						desc: "Base de arroz crocante con tope de aguacate salmón ahumado, wakame, masago, sésamo y salsas de anguila y Mayo-Japo cortada en 4 partes.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/91b125b1c631e623e0006af6821e4743",
						price: "8,40€",
						restaurant: true,
					},
					{
						name: "Wakame",
						desc: "Ensalada de algas con sésamo",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/9ab8c88195a5f995f6dd2073d3c35bcd",
						price: "5,40€",
						restaurant: true,
					},
					{
						name: "Sushi pizza Geisha",
						desc: "Base de arroz crocante con topping de aguacate, plátano macho, y langostino tempura, cubierto de salsa dragón y mayo sésamo, masago y sésamo.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/3a57cf567ea1bd8101edec665813692e",
						price: "7,40€",
						restaurant: true,
					},
				],
			},
			rollsRestaurant: {
				title: "Rolls",
				starters: [
					{
						name: "Ex",
						desc: "Langostinos tempura, plátano frito, queso crema y cebollino con topping de aguacate, salsa dragón y anguila",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/3f84a7929a1dcaf991d827839e361f4e",
						price: "12,40€",
						restaurant: true,
					},
					{
						name: "Veggie",
						desc: "Plátano frito, espárragos, pepino, cebollino y zanahoria, cubierto de sésamo y wakame.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/4071b01532011a369415d26748ee1de0",
						price: "10,90€",
						restaurant: true,
					},
					{
						name: "Tentación",
						desc: "Roll tempurizado con salmón y aguacate con topping de cebolla crunchy y salsa Mayo Sésamo",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/3f8626fda6038c9bc56a8abcf48961d9",
						price: "13,40€",
						restaurant: true,
					},
					{
						name: "Cachas",
						desc: "Pollo empanado, aguacate, queso crema y cebollino envueltos en sésamo con brotes, salsa teriyaki y salsa Mayo Sésamo.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/357193d29f60f327970026a727cb0ed6",
						price: "10,40€",
						restaurant: true,
					},
					{
						name: "Pecado",
						desc: "Langostinos tempura, queso crema y cebollino cubierto de aguacate y salmón, con topping de langostino tempura y salsa dinamita",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/22e3b45f99fb83979ea7006c57f40136",
						price: "14,40€",
						restaurant: true,
					},
					{
						name: "Mordisco",
						desc: "Roll tempurizado con surimi, aguacate y queso crema con topping de pasta de dinamita",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/8f5f496a5d43d80fd6adda28e58fde0f",
						price: "13,40€",
						restaurant: true,
					},
				],
			},
			raiceRestaurant: {
				title: "Arroz y Noodles",
				starters: [
					{
						name: "Poke-de-Salmón",
						desc: "Salmón, edamames, wakame, lombarda, acompañado de arroz, salsa mayo-sesámo cubierto con sesámo negro.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/15f1285f8287d2e3fe5f2f0f2ff7066b",
						price: "12,40€",
						restaurant: true,
					},
					{
						name: "Pollo-Teriyaki",
						desc: "Pollo salteado con vegetales en salsa teriyaki, acompañado de arroz, zanahoria con topping de sésamo negro.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/c9d65684ac1fc8bd17d77eff6cd612c5",
						price: "11,90€",
						restaurant: true,
					},
					{
						name: "Noodles-de-pollo-y-vegetales",
						desc: "Fideos salteados con vegetales, pollo y salsa de ostras.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/b26d02787abcb83676e9a2e43db797c9",
						price: "10,90€",
						restaurant: true,
					},
					{
						name: "Noodles-de-langostinos-y-vegetales",
						desc: "Fideos salteados con vegetales, langostinos y salsa de ostras.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/35cfdf698406f3ff41b4194f3f997b4d",
						price: "13,40€",
						restaurant: true,
					},
				],
			},
			desertRestaurant: {
				title: "Postres",
				starters: [
					{
						name: "Maki-de-Red-Velvet",
						desc: "Tarta Red Velvet con topping de black cookie y sirope de chocolate.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/9850fe6cebf0e4c3fb8ba8293db9b2e9",
						price: "6,90€",
						restaurant: true,
					},
				],
			},
		};
	},
	created() {},
};
</script>
<style scoped>
.menu__contanier {
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--white);
	flex-direction: column;
}
.menu__contanier--shipping {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50vh;
	background-color: var(--red);
	color: var(--white);
	margin-top: 7vh;

	font-size: 3vw;
}
</style>