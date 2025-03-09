<script lang="ts">
	const { color, size = 'md' } = $props<{
		color: string;
		size?: 'sm' | 'md' | 'lg';
	}>();
</script>

<icon data-size={size} style:--icon-bg-color={`${color}20`}>
	<slot></slot>
</icon>

<style>
	icon {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 8px;
		background-color: var(--icon-bg-color, rgba(34, 211, 238, 0.1));
	}

	icon[data-size='sm'] {
		width: 32px;
		height: 32px;
		font-size: 18px;
	}

	icon[data-size='md'] {
		width: 40px;
		height: 40px;
		font-size: 20px;
	}

	icon[data-size='lg'] {
		width: 48px;
		height: 48px;
		font-size: 24px;
	}
</style>
