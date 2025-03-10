<script lang="ts">
	import SkillCard from './SkillCard.svelte';
	import type { Skill } from './types';

	const { skills }: { skills: Skill[] } = $props();
</script>

<section id="skills">
	<header>
		<title>Skills & Technologies</title>
		<subtitle>A collection of technologies I've worked with</subtitle>
	</header>

	<grid>
		{#each skills as skill (skill.title)}
			<SkillCard title={skill.title} icon={skill.icon} items={skill.items} color={skill.color} />
		{/each}
	</grid>
</section>

<style>
	section {
		padding: 60px 0;
		scroll-margin-top: 80px;
	}

	header {
		margin-bottom: 30px;

		& title {
			font-size: 28px;
			font-weight: 600;
			color: #f8fafc;
			margin-bottom: 10px;
			display: block;
		}

		& subtitle {
			color: #94a3b8;
			font-size: 16px;
			display: block;
		}
	}

	grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 24px;

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
		}
	}
</style>
