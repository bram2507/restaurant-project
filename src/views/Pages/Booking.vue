<template>
	<div class="booking__contanier">
		<div class="booking__container--where__to__find">
			<h1>Donde encontrarnos</h1>
		</div>
		<div class="map-container">
			<GoogleMap
				api-key="AIzaSyBGgxahEVkXdc4d--6wYKYw7i3ZIoMmtss"
				style="width: 100%; height: 800px"
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
		<!-- <div class="container">
			<form>
				<label>Name</label>
				<input type="text" v-model="name" name="name" placeholder="Your Name" />
				<label>Email</label>
				<input
					type="email"
					v-model="email"
					name="email"
					placeholder="Your Email"
				/>
				<label>Message</label>
				<textarea
					name="message"
					v-model="message"
					cols="30"
					rows="5"
					placeholder="Message"
				>
				</textarea>

				<input type="submit" value="Send" />
			</form>
		</div> -->
	</div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
	name: "booking-menu",
	components: { GoogleMap, Marker },
	setup() {
		const center = { lat: 40.43317925777378, lng: -3.7033898463846864 };
		return { center };
	},
	data() {
		return {
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
}

.container {
	display: block;
	margin: auto;
	text-align: center;
	border-radius: 5px;
	background-color: var(--white);
	padding: 20px;
	width: 50%;
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