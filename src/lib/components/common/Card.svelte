<script lang="ts">
	const {
		color = '#8b5cf6',
		background = 'rgba(30, 41, 59, 0.8)',
		hoverBackground = undefined,
		padding = '24px'
	} = $props();

	// Calculate hover background if not provided
	const defaultHoverBackground = $derived(() => {
		if (hoverBackground) return hoverBackground;

		// Extract values from rgba format
		const match = background.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
		if (match) {
			const [_, r, g, b, a] = match;
			// Slightly increase opacity for hover (similar to original)
			const newOpacity = Math.min(parseFloat(a) + 0.1, 1).toFixed(2);
			return `rgba(${r}, ${g}, ${b}, ${newOpacity})`;
		}

		return background; // Fallback
	});
</script>

<card
	style:border-left="4px solid {color}"
	style:background
	style:padding
	style:border-radius="12px"
	style:--hover-bg={defaultHoverBackground}
>
	<slot />
</card>

<style>
	card {
		display: block;
		transition: background-color 0.3s;

		&:hover {
			background: var(--hover-bg) !important;
		}
	}
</style>
