<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<router-view name='menu' />
		<transition
			enter-active-class="animated rubberBand"
			leave-active-class="animated rollOut">
		 	<router-view />
		</transition>
		<router-view name='menuInferior' />
	</div>
</template>

<script>
// import Menu from './components/template/Menu'
export default {
	// components: {
	// 	Menu
	// }
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
