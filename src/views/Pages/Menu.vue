<template>
	<div class="menu__contanier">
		<dynamic-food :food="food" :style="style"></dynamic-food>
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
			food: {
				title: "Entrantes",
				starters: [
					{
						name: "Edamame",
						desc: "Vainas de soja con sal maldón.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/cbabcd814c7e8e95d5ba6e6f9824e1c8",
						price: "4.40€",
					},
					{
						name: "Gyozas de Pollo",
						desc: "4 unidades de empanaditas fritas con pollo y vegetales.",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/1165f88e8963be7b9cb470e6bbb61d4b",
						price: "5,40€",
					},
					{
						name: "Gyozas Vegetales",
						desc: "Empanaditas fritas rellenas de vegetales, acompañadas de salsa ponzu (4 unidades)",
						img: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,q_auto,f_auto,h_99,w_132,dpr_2.0/v1/es/dishes/brg_816/b5f7abba7b58d824e51e9a7f1fafa9d2",
						price: "4,90€",
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
	background-color: lightskyblue;
	flex-direction: column;
}
</style>