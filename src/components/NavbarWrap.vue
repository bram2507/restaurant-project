<template>
	<div v-if="menuOpen2">
		<div class="wrap-menu">
			<div @click="$router.push('/')">Restaurante</div>
			<div @click="$router.push('/menu')">Carta</div>
			<div @click="$router.push('/specials')">Especialidades</div>
			<div @click="$router.push('/groups')">Grupos</div>
			<div @click="$router.push('/booking')">Reservas</div>
			<div @click="showCart">
				<svg
					width="35"
					height="35"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.584 17.662 18.25 9.75H5.75l1.666 7.912a2 2 0 0 0 1.957 1.588h5.254a2 2 0 0 0 1.957-1.588Z"
					></path>
					<path d="M8.75 9.5V7.75a3 3 0 0 1 3-3h.5a3 3 0 0 1 3 3V9.5"></path>
					<path d="M19.25 9.75H4.75"></path>
				</svg>
				<sup>{{ this.length }}</sup>
			</div>
		</div>
		<div v-if="cart" class="cart__preview">
			<div class="cart__preview--title"><h2>Lista de Pedido</h2></div>
			<div class="cart__preview--items__scroll">
				<div
					class="cart__preview--items"
					v-for="(item, key) in Object.values(list)"
					:key="key"
				>
					<div v-if="item.cant > 0">
						{{ item.name.replaceAll("-", " ") }} ({{ item.cant }})
					</div>
					<div v-if="item.cant > 0">{{ item.price }} €</div>
					<div v-if="item.cant > 0" @click="addItem(item)">
						<svg
							width="15"
							height="15"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
							<path d="M12 8v8"></path>
							<path d="M8 12h8"></path>
						</svg>
					</div>
					<div
						class="delete__svg"
						v-if="item.cant > 0"
						@click="deleteItem(item)"
					>
						<svg
							width="15"
							height="15"
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
							<path d="m15 9-6 6"></path>
							<path d="m9 9 6 6"></path>
						</svg>
					</div>
				</div>
			</div>
			<div class="cart__preview--container">
				<div class="cart__preview--total">
					<div>
						<div>SubTotal</div>
						<div>{{ this.list.subTotal }} €</div>
					</div>
				</div>
				<div class="cart__preview--total">
					<div>
						<div>IVA</div>
						<div>{{ this.list.iva }} €</div>
					</div>
				</div>
				<div class="cart__preview--total">
					<div>
						<div>Total</div>
						<div>
							{{ total2() }}
							€
						</div>
					</div>
				</div>
			</div>
			<div v-if="subTotal2() > 0" class="cart__preview--title">
				<button @click="booking2()" class="cart__preview--button__ship">
					Gestionar Pedido
				</button>
			</div>
			<div v-if="subTotal2() > 0" class="cart__preview--title">
				<button class="cart__preview--button__delete" @click="clearCart">
					Eliminar Pedido
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
	name: "navbar-wrap",
	data() {
		return {
			menu: true,
			cart: false,
		};
	},
	computed: {
		...mapGetters({
			$book: "getBooking",
			$nav2: "nav",
		}),
		list() {
			return this.$book;
		},
		length() {
			var cant = 0;
			Object.values(this.list).map((e) => {
				if (e.cant >= 0) {
					cant += e.cant;
				}
				return e;
			});
			return cant;
		},
		menuOpen2() {
			return this.$nav2;
		},
	},
	watch: {
		list: {
			deep: true,
			handler(value) {
				return value;
			},
		},
	},
	created() {},
	methods: {
		addItem(item) {
			this.$store.dispatch("addItem", item);
		},
		deleteItem(item) {
			this.$store.dispatch("deleteItem", item);
		},
		booking2() {
			this.$router.push("/booking");
			setTimeout(() => {
				this.cart = false;
			});
		},
		clearCart() {
			this.$store.dispatch("clearCart");
			setTimeout(() => {
				this.cart = false;
			}, 1000);
		},
		showCart() {
			this.cart = !this.cart;
		},
		subTotal2() {
			var subtotal = 0;
			Object.values(this.list).map((e) => {
				if (e.cant >= 0) {
					subtotal += parseFloat(e.price) * parseInt(e.cant);
					return e;
				}
			});
			return parseFloat(subtotal).toFixed(2);
		},
		iva2() {
			return (this.subTotal2() * 0.21).toFixed(2);
		},
		total2() {
			let total = parseFloat(this.list.subTotal) + parseFloat(this.list.iva);
			return parseFloat(total).toFixed(2);
		},
	},
};
</script>
<style scoped>
.wrap-menu {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
	min-height: 5vh;
	background-color: var(--black);
	flex-direction: column;
	color: white;
	padding: 4vh;
	margin-top: 10vh;
	position: fixed;
	z-index: 300;
	animation: fadeIn 0.1s ease-in-out;
}

.wrap-menu div {
	margin-top: 3vh;
}

.cart__preview {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 250px;
	min-height: 5vh;
	background-color: var(--white);
	border-radius: 2vh;
	z-index: 300;
	position: fixed;
	padding: 3vh;
	top: 500px;
	right: 2%;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	animation: fadeIn 0.2s ease-in-out;
	font-size: 0.8rem;
}

.delete__svg {
	margin-left: 1vh;
	margin-right: 1vh;
	cursor: pointer;
}

.cart__preview div {
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
	width: 200px;
	min-height: 2vh;
}

.cart__preview--items {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: auto;
	padding: 0.1vh;
}

.cart__preview--items__scroll {
	width: 100%;
	height: 25vh;
	overflow-y: scroll;
	overflow-x: hidden;
}

.cart__preview--container {
	display: flex;
	justify-content: space-between;
	align-content: center;
	flex-direction: column;
	width: 90%;
	height: auto;
	border-top: 1px dashed var(--grey);
	padding: 1vh;
	margin-top: 3vh;
	margin-bottom: 3vh;
}

.cart__preview--total {
	color: var(--black);
	width: 100%;
	height: auto;
	flex-direction: row;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.cart__preview--total div {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	height: auto;
}
.cart__preview--items div:first-child {
	width: 75%;
	height: auto;
	padding: 0.5vh;
}

.cart__preview--items div:nth-child(2) {
	width: 30%;
	height: auto;
	padding: 0.5vh;
}

.cart__preview--button__ship {
	width: 200px;
	height: auto;
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
	position: relative;
	margin-bottom: 2vh;
}

.cart__preview--button__ship:hover {
	border-radius: 4vh;
	outline: none;
	border: 2px solid var(--black);
	background-color: var(--white);
	color: var(--black);
	font-size: 1em;
	transition: 0.5s ease-in-out;
}

.cart__preview--button__delete {
	width: 200px;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4vh;
	outline: none;
	border: none;
	border: 2px solid var(--red);
	background-color: var(--red);
	color: var(--white);
	font-size: 1em;
	transition: 0.5s ease-in-out;
	margin-left: 2vh;
	padding: 2vh;
	position: relative;
	margin-bottom: 2vh;
}

.cart__preview--button__delete:hover {
	border-radius: 4vh;
	outline: none;
	border: 2px solid var(--red);
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

	100% {
		opacity: 1;
		transition: 0.2s ease-in-out;
	}
}
</style>