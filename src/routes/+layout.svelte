<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="app">
	{@render children()}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
