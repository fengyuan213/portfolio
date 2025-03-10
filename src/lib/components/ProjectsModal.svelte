<script lang="ts">
	import type { Project } from './types';
	import TechBadge from './TechBadge.svelte';
	import FeatureCard from './FeatureCard.svelte';
	import Modal from './Modal.svelte';
	import Tag from './common/Tag.svelte';
	import Card from './common/Card.svelte';

	const { project, onClose }: { project: Project; onClose? } = $props();
</script>

<Modal isOpen={true} {onClose}>
	<content>
		<header>
			<wrap>
				<icon style:background-color="rgba(34,211,238,0.10)">{project.icon}</icon>
				<h2 id="modal-title">{project.title}</h2>
			</wrap>
			<btn onclick={onClose} aria-label="Close modal">×</btn>
		</header>

		{#if project.image}
			<img-wrap>
				<img src={project.image} alt="{project.title} preview" />
			</img-wrap>
		{:else}
			<preview>
				<wrap>
					<icon style:background-color="rgba(34,211,238,0.10)">{project.icon}</icon>
					<text>Project showcase without visual preview</text>
				</wrap>
			</preview>
		{/if}

		<main>
			<info-grid>
				<Card
					color={project.color}
					background="rgba(248, 250, 252, 0.03)"
					hoverBackground="rgba(248, 250, 252, 0.03)"
					padding="1rem"
				>
					<h4>Tech Stack</h4>
					<tag-list>
						{#each project.tags as tech}
							<Tag color={project.color}>{tech}</Tag>
						{/each}
					</tag-list>
				</Card>
				<Card
					color={project.color}
					background="rgba(248, 250, 252, 0.03)"
					hoverBackground="rgba(248, 250, 252, 0.03)"
					padding="1rem"
				>
					<h4>Project Type</h4>
					<text>Full-stack Application</text>
				</Card>
			</info-grid>

			<section>
				<h3>Project Details</h3>

				<text>{project.details || 'No detailed description available.'}</text>
			</section>

			{#if project.features}
				<section>
					<h3>Key Features</h3>
					<features>
						{#each project.features as feature}
							<Card
								color={project.color}
								background="rgba(248, 250, 252, 0.03)"
								hoverBackground="rgba(248, 250, 252, 0.03)"
								padding="1rem"
							>
								<feature-content>
									<feature-icon>{feature.icon}</feature-icon>
									<feature-title>{feature.title}</feature-title>
									<feature-desc>{feature.desc}</feature-desc>
								</feature-content>
							</Card>
						{/each}
					</features>
				</section>
			{/if}

			{#if project.demo_live || project.github}
				<section>
					<h3>Project Links</h3>
					<links>
						{#if project.demo_live}
							<a
								href="https://"
								style:background-color="rgba(34,211,238,0.10)"
								style:color="#22D3EE"
							>
								View Live Demo
							</a>
						{/if}
						{#if project.github}
							<a
								href="https://"
								style:background-color="rgba(34,211,238,0.10)"
								style:color="#22D3EE"
							>
								GitHub Repository
							</a>
						{/if}
					</links>
				</section>
			{/if}
		</main>
	</content>
</Modal>

<style>
	content {
		display: flex;
		flex-direction: column;
		width: 100%;
		overflow-x: hidden;
		min-width: 0;
		box-sizing: border-box;
	}

	/* Header */
	header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: 1.5rem;
		flex-wrap: wrap;

		& wrap {
			display: flex;
			align-items: center;
			gap: 1rem;
			flex: 1;
			min-width: 0;
		}

		& h2 {
			font-size: 24px;
			font-weight: 600;
			color: #f8fafc;
			margin: 0;
			word-break: break-word;
			hyphens: auto;
			min-width: 0;
			overflow-wrap: break-word;
		}

		& btn {
			font-size: 24px;
			color: #94a3b8;
			background: none;
			border: none;
			cursor: pointer;
			padding: 0;
			flex-shrink: 0;
			margin-left: 8px;
		}
	}

	/* Icons */
	icon {
		height: 48px;
		width: 48px;
		min-width: 48px;
		flex-shrink: 0;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
	}

	/* Image */
	img-wrap {
		display: block;
		margin-bottom: 1.5rem;
		width: 100%;

		& img {
			height: 300px;
			width: 100%;
			border-radius: 16px;
			object-fit: cover;
		}
	}

	/* Preview */
	preview {
		height: 200px;
		width: 100%;
		border-radius: 16px;
		background-color: rgba(34, 211, 238, 0.05);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.5rem;

		& wrap {
			text-align: center;
		}

		& icon {
			height: 64px;
			width: 64px;
			margin: 0 auto 1rem;
			font-size: 32px;
		}
	}

	/* Content */
	main {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		width: 100%;
		min-width: 0;
	}

	/* Tags */
	tag-list {
		display: flex;
		gap: 0.3rem;
		flex-wrap: wrap;
		margin-bottom: 0.5rem;
	}

	/* Text */
	text {
		font-size: 15px;
		line-height: 1.5;
		color: #cbd5e1;
		display: block;
		word-wrap: break-word;
		overflow-wrap: break-word;
		hyphens: auto;
	}

	/* Grid & Cards */
	info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin-bottom: 1rem;
		width: 100%;
	}

	/* Inside Card styling */
	:global(info-grid h4) {
		font-size: 14px;
		font-weight: 600;
		color: #f8fafc;
		margin: 0 0 0.5rem 0;
	}

	:global(info-grid text) {
		font-size: 14px;
		color: #94a3b8;
		display: block;
	}

	/* Sections */
	section {
		border-top: 1px solid rgba(248, 250, 252, 0.08);
		padding-top: 1.5rem;
		width: 100%;

		& h3 {
			font-size: 18px;
			font-weight: 600;
			color: #f8fafc;
			margin: 0 0 1rem 0;
		}
	}

	features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		width: 100%;
	}

	feature-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		min-width: 0;
	}

	feature-icon {
		font-size: 24px;
		margin-bottom: 0.25rem;
	}

	feature-title {
		font-size: 16px;
		font-weight: 600;
		color: #f8fafc;
		word-wrap: break-word;
	}

	feature-desc {
		font-size: 14px;
		color: #94a3b8;
		line-height: 1.4;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}

	links {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;

		& a {
			padding: 0.5rem 1rem;
			border-radius: 8px;
			font-size: 14px;
			font-weight: 500;
			text-decoration: none;
		}
	}
</style>
