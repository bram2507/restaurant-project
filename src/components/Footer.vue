<template>
	<div class="footer__container">
		<h2>Footer</h2>
	</div>
	<div class="footer-media"></div>
</template>

<script>
export default {
	name: "footer-content",
};
</script>

<style scoped>
.footer__container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 25vh;
	background-color: var(--black);
}
.footer-media {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 5vh;
	background-color: var(--cream);
}
</style>