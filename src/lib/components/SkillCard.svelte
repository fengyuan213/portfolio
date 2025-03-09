<script lang="ts">
	import type { Skill } from './types';

	export let skill: Skill;
	export let title: string;

	$: backgroundColor = `${skill.color}20`; // 20 is ~12% opacity in hex
</script>

<skill-card>
	<icon style="background-color: {backgroundColor}">{skill.icon}</icon>

	<content>
		<h4 class="title">{title}</h4>

		<tags>
			{#each skill.items as item}
				<tag style="background-color: {backgroundColor}; color: {skill.color}">{item}</tag>
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

	icon {
		width: 40px;
		height: 40px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
	}

	content {
		flex: 1;
	}

	.title {
		font-size: 16px;
		font-weight: 500;
		color: #e2e8f0;
		margin-bottom: 12px;
	}

	tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	tag {
		padding: 4px 12px;
		border-radius: 6px;
		font-size: 14px;
	}
</style>
