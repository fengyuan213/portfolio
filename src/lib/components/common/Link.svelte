<script lang="ts">
	const {
		href,
		color = '#22d3ee',
		external = false
	} = $props<{
		href: string;
		color?: string;
		external?: boolean;
	}>();
</script>

<a
	{href}
	style:--link-color={color}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
>
	<slot></slot>
	<arrow>→</arrow>
</a>

<style>
	a {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: 14px;
		text-decoration: none;
		color: var(--link-color, #22d3ee);
	}

	arrow {
		display: inline-block;
		transition: transform 0.3s;
	}

	a:hover arrow {
		transform: translateX(4px);
	}
</style>
