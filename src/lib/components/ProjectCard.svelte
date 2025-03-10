<script lang="ts">
	import type { Project } from './types';
	import { projectState } from './projectContext.svelte';
	import Tag from './common/Tag.svelte';
	import Card from './common/Card.svelte';

	const { project }: { project: Project } = $props();
	const backgroundColor = $derived(`${project.color}20`); // 20 is ~12% opacity in hex
</script>

<Card
	color={project.color}
	background="rgba(30, 41, 59, 0.8)"
	hoverBackground="rgba(30, 41, 59, 0.9)"
	padding="24px"
>
	<header>
		<icon style:background-color={backgroundColor}>{project.icon}</icon>
		<card-title>{project.title}</card-title>
	</header>

	<description>{project.desc}</description>
	<tag-list>
		{#each project.tags as tag}
			<Tag color={project.color}>{tag}</Tag>
		{/each}
	</tag-list>
	<view-btn
		style:color={project.color}
		on:click={() => {
			console.log('Setting selected project:', project.title);
			projectState.selectedProject = project;
			console.log('State after update:', projectState.selectedProject?.title);
		}}
	>
		<span>View Project</span>
		<arrow>→</arrow>
	</view-btn>
</Card>

<style>
	header {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 12px;

		& card-title {
			font-size: 18px;
			font-weight: 600;
			color: #f8fafc;
			display: block;
		}
	}

	icon {
		width: 32px;
		height: 32px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		flex-shrink: 0;
	}

	description {
		font-size: 14px;
		color: #cbd5e1;
		margin-bottom: 14px;
		word-break: break-word;
		display: block;
		line-height: 1.5;
	}

	tag-list {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		margin-bottom: 16px;
	}

	view-btn {
		font-size: 14px;
		display: flex;
		align-items: center;
		gap: 8px;
		text-decoration: none;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		font-weight: 500;

		& arrow {
			display: inline-block;
			transition: transform 0.3s;
		}
	}

	:global(card:hover) view-btn arrow {
		transform: translateX(4px);
	}
</style>
