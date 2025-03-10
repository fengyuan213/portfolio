<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const { isOpen, onClose }: { isOpen: boolean; onClose?: () => void } = $props();

	let modalVisible = $state(isOpen);

	// Watch isOpen prop changes
	$effect(() => {
		modalVisible = isOpen;
	});

	// Handle close with animation
	function handleClose() {
		modalVisible = false;
		if (onClose) {
			setTimeout(() => {
				onClose();
			}, 300); // Match transition duration
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			handleClose();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<backdrop transition:fade={{ duration: 200 }} on:click={onClose} role="dialog" aria-modal="true">
		<modal-box
			transition:scale={{ duration: 300, start: 0.95, opacity: 0, easing: quintOut }}
			on:click|stopPropagation
		>
			<slot />
		</modal-box>
	</backdrop>
{/if}

<style>
	backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.75);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 20px;
		overflow-y: auto;
		box-sizing: border-box;
	}

	modal-box {
		background-color: #1e293b;
		border-radius: 16px;
		padding: 24px;
		width: min(550px, 100%);
		min-width: 0;
		max-height: min(700px, calc(100vh - 40px));
		margin: auto;
		overflow-y: auto;
		overflow-x: hidden;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
		position: relative;
		box-sizing: border-box;
		flex-shrink: 1;
		/* Custom scrollbar */
		scrollbar-width: thin;
		scrollbar-color: #4b5563 #1e293b;

		/* Custom scrollbar */
		&::-webkit-scrollbar {
			width: 8px;
		}
		&::-webkit-scrollbar {
			width: 8px;
		}
		&::-webkit-scrollbar-track {
			background: rgba(248, 250, 252, 0.02);
			border-radius: 8px;
		}

		&::-webkit-scrollbar-thumb {
			background: rgba(148, 163, 184, 0.2);
			border-radius: 8px;
			border: 2px solid #1e293b;
		}
		&::-webkit-scrollbar-thumb:hover {
			background: rgba(148, 163, 184, 0.3);
		}
	}
</style>
