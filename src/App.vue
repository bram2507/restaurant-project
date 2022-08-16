<template>
	<div class="app">
		<Navbar />
		<router-view />
		<Footer />
	</div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
	name: "app-component",
	components: {
		Navbar,
		Footer,
	},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap");
html,
body {
	margin: 0px;
}
#app {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
	font-family: "M PLUS Rounded 1c", sans-serif;
}
</style>
