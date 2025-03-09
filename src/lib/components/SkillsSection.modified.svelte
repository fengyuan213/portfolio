<script lang="ts">
	import type { SkillSet } from './types';
	import SkillCard from './SkillCard.svelte';
	import { Section } from './common';

	export let skills: SkillSet;
</script>

<Section id="skills" title="Technical Expertise" marginBottom={true}>
	<skill-list>
		<SkillCard skill={skills.languages} title="Programming Languages" />
		<SkillCard skill={skills.frontend} title="Frontend Development" />
		<SkillCard skill={skills.backend} title="Backend Development" />
	</skill-list>
</Section>

<style>
	skill-list {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
</style>
