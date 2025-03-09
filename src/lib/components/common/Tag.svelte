<script lang="ts">
	const { color } = $props<{
		color: string;
	}>();
</script>

<tag style:--tag-color={color} style:--tag-bg-color={`${color}20`}>
	<slot></slot>
</tag>

<style>
	tag {
		padding: 4px 12px;
		border-radius: 6px;
		font-size: 14px;
		display: inline-block;
		background-color: var(--tag-bg-color);
		color: var(--tag-color);
	}
</style>
