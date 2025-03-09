<script lang="ts">
	import type { Project } from './types';
	import ProjectCard from './ProjectCard.svelte';

	export let projects: Project[];
</script>

<section id="projects" class="projects">
	<header>
		<h3 class="title">Featured Projects</h3>
		<divider></divider>
	</header>

	<cards>
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</cards>
</section>

<style>
	.projects {
		background-color: rgba(248, 250, 252, 0.02);
		backdrop-filter: blur(8px);
		border-radius: 24px;
		padding: 32px;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 32px;
	}

	.title {
		font-size: 20px;
		font-weight: 600;
		color: #e2e8f0;
	}

	divider {
		display: block;
		width: 40px;
		height: 2px;
		background-color: #22d3ee;
	}

	cards {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
