<script lang="ts">
	import type { Project } from './types';

	export let project: Project;

	const getProjectIcon = (type: string) => {
		switch (type) {
			case 'ai':
				return '🤖';
			case 'data':
				return '📊';
			case 'cloud':
				return '☁️';
			default:
				return '💻';
		}
	};

	const getProjectColor = (type: string) => {
		switch (type) {
			case 'ai':
				return '#22D3EE';
			case 'data':
				return '#818CF8';
			case 'cloud':
				return '#A78BFA';
			default:
				return '#22D3EE';
		}
	};

	$: projectColor = getProjectColor(project.type);
	$: projectIcon = getProjectIcon(project.type);
	$: backgroundColor = `${projectColor}20`; // 20 is ~12% opacity in hex
</script>

<card>
	<card-header>
		<title-wrap>
			<icon style="background-color: {backgroundColor}">{projectIcon}</icon>
			<h4 class="title">{project.title}</h4>
		</title-wrap>

		<tags>
			{#each project.tags as tag}
				<tag style="background-color: {backgroundColor}; color: {projectColor}">{tag}</tag>
			{/each}
		</tags>
	</card-header>

	<p class="desc">{project.desc}</p>

	<a href="#" class="link" style="color: {projectColor}">
		<span>View Project</span>
		<span class="arrow">→</span>
	</a>
</card>

<style>
	card {
		display: block;
		background-color: rgba(248, 250, 252, 0.03);
		border-radius: 16px;
		padding: 24px;
		transition: background-color 0.3s;
	}

	card:hover {
		background-color: rgba(248, 250, 252, 0.05);
	}

	card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 16px;
	}

	title-wrap {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	icon {
		width: 32px;
		height: 32px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
	}

	.title {
		font-size: 18px;
		font-weight: 500;
		color: #e2e8f0;
	}

	tags {
		display: flex;
		gap: 8px;
	}

	tag {
		padding: 4px 12px;
		border-radius: 6px;
		font-size: 14px;
	}

	.desc {
		font-size: 14px;
		color: #94a3b8;
		margin-bottom: 16px;
	}

	.link {
		font-size: 14px;
		display: flex;
		align-items: center;
		gap: 8px;
		text-decoration: none;
	}

	.arrow {
		transition: transform 0.3s;
	}

	card:hover .arrow {
		transform: translateX(4px);
	}
</style>
