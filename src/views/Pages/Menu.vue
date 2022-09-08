<template>
	<div class="menu__contanier">
		<dynamic-food :food="starters" />
		<dynamic-food :food="rolls" />
		<dynamic-food :food="raice" />
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
			starters: {
				title: "Entrantes",
				starters: [
					{
						id: null,
						name: "Edamame",
						desc: "Vainas de soja con sal maldón.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/cbabcd814c7e8e95d5ba6e6f9824e1c8",
						price: "4.40€",
					},
					{
						id: null,
						name: "Gyozas de Pollo",
						desc: "4 unidades de empanaditas fritas con pollo y vegetales.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/1165f88e8963be7b9cb470e6bbb61d4b",
						price: "5,40€",
					},
					{
						id: null,
						name: "Gyozas Vegetales",
						desc: "Empanaditas fritas rellenas de vegetales, acompañadas de salsa ponzu (4 unidades)",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/b5f7abba7b58d824e51e9a7f1fafa9d2",
						price: "4,90€",
					},
				],
			},
			rolls: {
				title: "Rolls",
				starters: [
					{
						id: null,
						name: "Ex",
						desc: "Langostinos tempura, plátano frito, queso crema y cebollino con topping de aguacate, salsa dragón y anguila",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/3f84a7929a1dcaf991d827839e361f4e",
						price: "12,40€",
					},
					{
						id: null,
						name: "Veggie",
						desc: "Plátano frito, espárragos, pepino, cebollino y zanahoria, cubierto de sésamo y wakame.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/4071b01532011a369415d26748ee1de0",
						price: "10,90€",
					},
					{
						id: null,
						name: "Tentación",
						desc: "Roll tempurizado con salmón y aguacate con topping de cebolla crunchy y salsa Mayo Sésamo",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/3f8626fda6038c9bc56a8abcf48961d9",
						price: "13,40€",
					},
				],
			},
			raice: {
				title: "Arroz y Noodles",
				starters: [
					{
						id: null,
						name: "Poke de Salmón",
						desc: "Salmón, edamames, wakame, lombarda, acompañado de arroz, salsa mayo-sesámo cubierto con sesámo negro.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/15f1285f8287d2e3fe5f2f0f2ff7066b",
						price: "12,40€",
					},
					{
						name: "Noodles de pollo y vegetales",
						desc: "Fideos salteados con vegetales, pollo y salsa de ostras.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/b26d02787abcb83676e9a2e43db797c9",
						price: "10,90€",
					},
					{
						name: "Noodles de langostinos y vegetales",
						desc: "Fideos salteados con vegetales, langostinos y salsa de ostras.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/35cfdf698406f3ff41b4194f3f997b4d",
						price: "13,40€",
					},
				],
			},
		};
	},
};
</script>
<style scoped>
.menu__contanier {
	width: 100%;
	min-height: 85vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--white);
	flex-direction: column;
}
</style>