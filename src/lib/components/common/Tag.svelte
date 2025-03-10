<script lang="ts">
	const { color = '#e2e8f0' }: { color?: string } = $props();

	// Set the CSS variable directly in the script
	const style = $derived(() => {
		return {
			color: color,
			'border-color': `${color}20` // 20 is ~12% opacity in hex
		};
	});
</script>

<tag style="--tag-color: {color}">
	<slot />
</tag>

<style>
	tag {
		background: rgba(255, 255, 255, 0.05);
		padding: 4px 12px;
		border-radius: 20px;
		font-size: 13px;
		display: inline-block;
		border-bottom: 2px solid transparent;
		border-color: var(--tag-color);
		color: var(--tag-color);
		transition: transform 0.2s;

		&:hover {
			transform: translateY(-2px);
		}
	}
</style>
