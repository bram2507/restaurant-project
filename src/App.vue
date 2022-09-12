<template>
	<div class="app">
		<Navbar />
		<NavbarWrap />
		<router-view />
		<Footer />
	</div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import NavbarWrap from "./components/NavbarWrap.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "app-component",
	components: {
		Navbar,
		NavbarWrap,
		Footer,
	},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&family=Noto+Sans&display=swap");
* {
	--cream: #fff4dc;
	--red: #b04649;
	--grey: #6b6f72;
	--black: #101010;
	--white: #ffffff;
}
html,
body {
	margin: 0px;
	padding: 0px;
}
#app {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
	font-family: "Noto Sans", sans-serif;
	text-decoration: none;
	overflow-x: hidden;
}
h1 {
	font-size: 2em;
	font-family: "Noto Sans", sans-serif;
}
</style>
