<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from './types';

	const { projects }: { projects: Project[] } = $props();
</script>

<section id="projects">
	<header>
		<section-title>Projects</section-title>
		<subtitle>Some of my recent work</subtitle>
	</header>

	<project-grid>
		{#each projects as project (project.title)}
			<ProjectCard {project} />
		{/each}
	</project-grid>
</section>

<style>
	section {
		padding: 40px 0;
	}

	header {
		margin-bottom: 20px;

		& section-title {
			font-size: 28px;
			font-weight: 600;
			color: #f8fafc;
			margin-bottom: 6px;
			display: block;
		}

		& subtitle {
			color: #94a3b8;
			font-size: 16px;
			display: block;
		}
	}

	project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 20px;

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
		}
	}
</style>
