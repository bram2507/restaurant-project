<template>
	<div class="main__food-contanier">
		<div class="main__food-contanier--items">
			<div class="main__food-contanier--title">
				<h1>{{ food.title }}</h1>
			</div>
			<div
				class="main__food-list"
				v-for="(item, key) in food.starters"
				:key="key"
			>
				<div class="main__food-list--items">
					<div>
						<span>{{ item.name.replaceAll("-", " ") }}</span>
						<span>{{ item.desc }}</span>
						<span>{{ item.price }}</span>
						<button @click="addItem(item)">añadir</button>
						<button @click="deleteItem(item)">eliminar</button>
					</div>
					<div>
						<img :src="item.img" alt="food-image" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
	name: "food-menu",
	components: {},
	props: {
		food: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {};
	},
	computed: {
		...mapGetters({
			$getBooking: "getBooking",
		}),
		list() {
			return this.$getBooking;
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
		hasFood(item) {
			let food = false;
			console.log(item.cant);
			item.cant > 0 ? (food = true) : (food = false);
			return food;
		},
	},
};
</script>
<style scoped>
.main__food-contanier {
	display: flex;
	justify-content: center;
	align-content: center;
	width: 100%;
	height: 100vh;
	background-color: var(--white);
	flex-direction: column;
	margin-top: 40vh;
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

.main__food-list--items button {
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

.main__food-list--items button:hover {
	border-radius: 4vh;
	outline: none;
	border: 2px solid var(--black);
	background-color: var(--white);
	color: var(--black);
	font-size: 1em;
	transition: 0.5s ease-in-out;
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

.main__food-contanier--title {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;

	font-size: 3vw;
	font-family: "Noto Sans", sans-serif;
}
</style>