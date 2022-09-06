<template>
	<div class="booking__contanier">
		<div class="map-container">
			<GoogleMap
				api-key="AIzaSyBGgxahEVkXdc4d--6wYKYw7i3ZIoMmtss"
				style="width: 100%; height: 500px"
				:center="center"
				:zoom="20"
			>
				<Marker :options="{ position: center }" />
			</GoogleMap>
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
});
</script>
<style scoped>
.booking__contanier {
	width: 100%;
	min-height: 85vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: lightslategrey;
	flex-direction: column;
}

.map-container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 75%;
	height: auto;
}

.container {
	display: block;
	margin: auto;
	text-align: center;
	border-radius: 5px;
	background-color: #f2f2f2;
	padding: 20px;
	width: 50%;
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