<template>
	<div class="booking__contanier">
		<div class="booking__container--where__to__find">
			<h1>Donde encontrarnos</h1>
		</div>
		<div class="map-container">
			<GoogleMap
				api-key="AIzaSyBGgxahEVkXdc4d--6wYKYw7i3ZIoMmtss"
				style="width: 80%; height: 800px"
				:center="center"
				:zoom="20"
			>
				<Marker :options="{ position: center }" />
			</GoogleMap>
		</div>
		<div class="booking__container--where__to__find">
			<h1>Horarios</h1>
		</div>
		<div class="schudle">
			<div
				class="schudle__days"
				v-for="(date, key) in Object.values(schudle)"
				:key="key"
			>
				<div>
					{{ date.day }}
				</div>
				<div>
					{{ date.time }}
				</div>
			</div>
		</div>

		<div class="booking__container--where__to__find">
			<h1>Contáctanos con tu pedido</h1>
		</div>
		<div class="container">
			<form class="form">
				<label>Nombre</label>
				<input
					type="text"
					v-model="name"
					name="name"
					placeholder="Nombre y Apellidos"
				/>
				<label>Email</label>
				<input
					type="email"
					v-model="email"
					name="email"
					placeholder="Escribe un email"
				/>
				<label>Message</label>
				<textarea
					name="message"
					v-model="message"
					cols="30"
					rows="15"
					placeholder="Mensaje"
				>
				</textarea>

				<input class="submit-input" type="submit" value="Enviar" />
			</form>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { mapGetters } from "vuex";
export default defineComponent({
	name: "booking-menu",
	components: { GoogleMap, Marker },
	setup() {
		const center = { lat: 40.43317925777378, lng: -3.7033898463846864 };
		return { center };
	},
	computed: {
		...mapGetters({
			$getBooking: "getBooking",
		}),
	},
	data() {
		return {
			name: "",
			email: "",
			message: "",
			schudle: [
				{ day: "Lunes", time: " 13:00 – 17:00 / 20:00 – 23:30" },
				{ day: "Martes", time: " 13:00 – 17:00 / 20:00 – 23:30" },
				{ day: "Miercoles", time: " 13:00 – 17:00 / 20:00 – 23:30" },
				{ day: "Jueves", time: " 13:00 – 17:00 / 20:00 – 23:30" },
				{ day: "Viernes", time: " 13:00 – 17:00 / 20:00 – 23:30" },
				{ day: "Sábado", time: " 13:00 – 17:00 / 20:00 – 23:30" },
				{ day: "Domingo", time: " 13:00 – 17:00 / 20:00 – 23:30" },
			],
		};
	},
	created() {
		Object.values(this.$getBooking).map((e) => {
			if (e.cant) {
				this.message += e.name + " " + e.cant + "\n\n\n";
			}
			return e;
		});
	},
});
</script>
<style scoped>
.booking__contanier {
	width: 100%;
	min-height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: lightslategrey;
	flex-direction: column;
}
.schudle {
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: auto;
	background-color: var(--white);
	padding: 4vh;
}

.schudle div {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 80%;
	height: auto;
	background-color: var(--white);
	padding: 4vh;
}
.map-container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: auto;
	padding: 10vh;
	background-color: var(--white);
}

.container {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	text-align: center;
	border-radius: 5px;
	background-color: var(--white);
	padding: 20px;
	width: 100%;
}

.form {
	width: 75%;
	height: auto;
}
.submit-input {
	width: 120px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4vh;
	outline: none;
	border: none;
	border: 2px solid var(--red);
	background-color: var(--white);
	color: var(--red);
	font-size: 1em;
	transition: 0.5s ease-in-out;
	margin-left: 2vh;
	margin-bottom: 2vh;
}

.booking__container--where__to__find {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50vh;
	background-color: var(--red);
	color: var(--white);

	font-size: 3vw;
}

label {
	float: left;
}

input[type="text"],
[type="email"],
textarea {
	width: 100%;
	padding: 12px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	margin-top: 6px;
	margin-bottom: 16px;
	resize: vertical;
}

input[type="submit"] {
	background-color: #4caf50;
	color: white;
	padding: 12px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

input[type="submit"]:hover {
	background-color: #45a049;
}
</style>