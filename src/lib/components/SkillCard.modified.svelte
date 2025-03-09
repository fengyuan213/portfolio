<script lang="ts">
	import type { Skill } from './types';
	import { Icon, Tag } from './common';

	export let skill: Skill;
	export let title: string;
</script>

<skill-card>
	<Icon color={skill.color} size="md">{skill.icon}</Icon>

	<content>
		<h4>{title}</h4>

		<tags>
			{#each skill.items as item}
				<Tag color={skill.color}>{item}</Tag>
			{/each}
		</tags>
	</content>
</skill-card>

<style>
	skill-card {
		display: flex;
		align-items: flex-start;
		gap: 16px;
	}

	content {
		flex: 1;
	}

	h4 {
		font-size: 16px;
		font-weight: 500;
		color: #e2e8f0;
		margin-bottom: 12px;
		margin-top: 0;
	}

	tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
</style>
