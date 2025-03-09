<script lang="ts">
	import type { SkillSet } from './types';
	import SkillCard from './SkillCard.svelte';

	export let skills: SkillSet;
</script>

<section id="skills" class="skills">
	<header>
		<h3 class="title">Technical Expertise</h3>
		<divider></divider>
	</header>

	<skill-list>
		<SkillCard skill={skills.languages} title="Programming Languages" />
		<SkillCard skill={skills.frontend} title="Frontend Development" />
		<SkillCard skill={skills.backend} title="Backend Development" />
	</skill-list>
</section>

<style>
	.skills {
		background-color: rgba(248, 250, 252, 0.02);
		backdrop-filter: blur(8px);
		border-radius: 24px;
		padding: 32px;
		margin-bottom: 24px;
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

	skill-list {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
</style>
