<template>
	<div class="main__contanier"></div>
</template>

<script>
export default {
	name: "main-content",
	props: {
		msg: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main__contanier {
	width: 100%;
	min-height: 85vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: lightsalmon;
}
</style>
