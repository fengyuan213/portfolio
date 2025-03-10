<script lang="ts">
	import Tag from './common/Tag.svelte';
	import Card from './common/Card.svelte';

	const {
		title,
		icon,
		items,
		color
	}: { title: string; icon: string; items: string[]; color: string } = $props();
</script>

<Card
	{color}
	background="rgba(255, 255, 255, 0.02)"
	hoverBackground="rgba(255, 255, 255, 0.04)"
	padding="20px"
>
	<header>
		<icon style:color>{icon}</icon>
		<h3>{title}</h3>
	</header>
	<list>
		{#each items as item}
			<Tag {color}>{item}</Tag>
		{/each}
	</list>
</Card>

<style>
	header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 16px;

		& h3 {
			color: #f8fafc;
			font-size: 18px;
			font-weight: 500;
			margin: 0;
		}
	}

	icon {
		font-size: 20px;
	}

	list {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
</style>
