<script>
	export let visible = false;
</script>

{#if visible}
	<div class="overlay">
		<div class="popup">
			<slot>Popup content here</slot>
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.popup {
		background: white;
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
		max-width: 90%;
		max-height: 90%;
		overflow: auto;
	}
</style>
