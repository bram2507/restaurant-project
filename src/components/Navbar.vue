<template>
	<div class="navbar">
		<div class="navbar__logo"></div>
		<div class="navbar__navegation">
			<router-link to="/">Restaurante</router-link>
			<router-link to="/menu">Menu</router-link>
			<router-link to="/specials">Especiales</router-link>
			<router-link to="/specials">Reservas</router-link>
		</div>
	</div>
</template>
<script>
export default {
	name: "navbar-content",
};
</script>
<style scoped>
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 45px;
	background-color: transparent !important;
}

.navbar__logo {
	width: 15%;
	height: 45px;
	background-color: brown;
}

.navbar__navegation {
	display: flex;
	justify-content: space-evenly;
	align-items: flex-end;
	width: 85%;
	height: 45px;
	background-color: lightblue;
}
</style>