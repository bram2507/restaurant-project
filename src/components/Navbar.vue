<template>
	<div :class="navStyle">
		<div class="navbar__logo">
			<div class="navbar__logo__name">
				<h1>Yakuza</h1>
			</div>
		</div>
		<div v-if="desktop" class="navbar__navegation">
			<router-link to="/">
				<span>Restaurante</span>
			</router-link>
			<router-link to="/menu">
				<span>Menu</span>
			</router-link>
			<router-link to="/specials"><span>Especiales</span></router-link>
			<router-link to="/booking"><span>Reservas</span></router-link>
			<div>
				<div @click="showCart">
					Cesta <sup>{{ this.list.length }}</sup>
				</div>
				<div v-if="!cart"></div>
			</div>
		</div>
		<div v-else>
			<div>
				<div @click="showCart">Cesta {{ this.list.length }}</div>
			</div>
		</div>
		<div v-if="!cart" class="cart__preview">
			<div class="cart__preview--title"><h2>Lista de Pedido</h2></div>
			<ul
				class="cart__preview--items"
				v-for="(item, key) in list"
				:key="key + item.id"
			>
				<li>{{ item.name }} ({{ groupItem(item) }})</li>
				<!-- <li>{{ priceItem(item) }} €</li> -->
			</ul>
			<div v-if="list.length" class="cart__preview--title">
				<button></button>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
	name: "navbar-content",
	data() {
		return {
			cant: 1,
			cart: false,
			desktop: true,
			windowWitdh: 0,
			navStyle: "navbar-active",
		};
	},
	computed: {
		...mapGetters({
			$getBooking: "getBooking",
		}),
		list() {
			return Object.values(this.$getBooking);
		},
	},
	watch: {
		windowWitdh: function (value) {
			this.desktop = true;
			if (value < 956) {
				this.desktop = false;
			}
		},
		list: {
			deep: true,
			handler(value) {
				const groupByName = Object.values(value).reduce((group, food) => {
					const { name } = food;
					group[name] = group[name] ?? [];
					group[name].push(food);
					return group;
				}, {});

				return groupByName;
			},
		},
	},
	created() {
		window.addEventListener("resize", () => {
			this.windowWitdh = window.innerWidth;
			console.log("Resize");
		});
	},
	methods: {
		showCart() {
			this.cart = !this.cart;
		},
		groupItem(item) {
			let arr = Object.values(this.$getBooking);
			arr = arr.filter((e) => e.name === item.name);
			this.cant = arr.length;
			return arr.length;
		},
		priceItem(item) {
			let price = parseFloat(item.price) * parseInt(this.cant);
			return parseFloat(price).toFixed(2);
		},
		deleteItem(item) {
			this.$store.dispatch("deleteItem", item);
		},
	},
};
</script>
<style scoped>
.navbar-active {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: auto;
	padding: 0.5vh;
	margin: 0px;
	top: 0;
	position: fixed;
	background-color: var(--black);
	font-family: "M PLUS Rounded 1c", sans-serif;
	text-decoration: none;
	color: white;
	z-index: 300;
}
.navbar__logo__name {
	margin-left: 2vh;
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
	color: var(--white);
}

.navbar__navegation:active,
span:active {
	text-decoration: none;
}

.navbar__logo img {
	height: 100%;
	image-rendering: optimizeQuality;
}

.cart__preview {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 200px;
	height: auto;
	background-color: var(--white);
	border-radius: 2vh;
	z-index: 300;
	position: fixed;
	padding: 3vh;
	top: 80px;
	right: 5%;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	animation: fadeIn 0.2s ease-in-out;
	font-size: 0.8rem;
}

.cart__preview li {
	list-style: none;
	color: var(--black);
}

.cart__preview h2 {
	color: var(--black);
}

.cart__preview--title {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;
}

.cart__preview--items {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: auto;
	padding: 0.1vh;
}

.cart__preview--items li:first-child {
	width: 75%;
	height: auto;
}

.cart__preview--items li:nth-child(2) {
	width: 30%;
	height: auto;
}

.cart__preview button {
	width: 120px;
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
	margin-left: 2vh;
	padding: 2vh;

	margin-bottom: 2vh;
}

.cart__preview button:hover {
	border-radius: 4vh;
	outline: none;
	border: 2px solid var(--black);
	background-color: var(--white);
	color: var(--black);
	font-size: 1em;
	transition: 0.5s ease-in-out;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
		transition: 0.2s ease-in-out;
	}
	50% {
		opacity: 0.5;
		transition: 0.2s ease-in-out;
	}
	100% {
		opacity: 1;
		transition: 0.2s ease-in-out;
	}
}
</style>