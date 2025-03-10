<script lang="ts">
	import type { PortfolioData } from './types';

	const { portfolioData }: { portfolioData: PortfolioData } = $props();
</script>

<section id="about">
	<inner>
		<avatar>
			<profile>FL</profile>
		</avatar>

		<content>
			<header>
				<name>{portfolioData.name}</name>
				<role>{portfolioData.role}</role>
			</header>

			<meta-info>
				<item>
					<icon-wrap>📍</icon-wrap>
					<span>{portfolioData.location}</span>
				</item>
				<item>
					<icon-wrap>💼</icon-wrap>
					<span>{portfolioData.experience}</span>
				</item>
				<item>
					<icon-wrap>👨‍💻</icon-wrap>
					<span>{portfolioData.status}</span>
				</item>
			</meta-info>
			<intro>{portfolioData.intro}</intro>

			<links>
				<a href={`https://${portfolioData.links.github}`} target="_blank" rel="noopener">
					<span>GitHub</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
						/></svg
					>
				</a>
				<a href={`https://${portfolioData.links.linkedin}`} target="_blank" rel="noopener">
					<span>LinkedIn</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
						/></svg
					>
				</a>
				<a href={`https://${portfolioData.links.cv}`} target="_blank" rel="noopener">
					<span>Download CV</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"
						/></svg
					>
				</a>
			</links>
		</content>
	</inner>
</section>

<style>
	section {
		padding: 60px 0 30px 0;
		min-height: auto;
		display: flex;
		align-items: center;
	}

	inner {
		display: grid;
		grid-template-columns: 180px 1fr;
		gap: 30px;
		align-items: center;

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
			gap: 16px;
			text-align: center;
		}
	}

	avatar {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;

		@media (max-width: 640px) {
			justify-content: center;
		}

		& profile {
			width: 140px;
			height: 140px;
			background: linear-gradient(45deg, #0ea5e9, #8b5cf6);
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 42px;
			color: #fff;
			font-weight: 600;
		}
	}

	status {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 14px;
		color: #cbd5e1;
		margin-top: 4px;
	}

	content {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	header {
		& name {
			font-size: 34px;
			font-weight: 700;
			color: #f8fafc;
			line-height: 1.1;
			display: block;
		}

		& role {
			font-size: 18px;
			color: #94a3b8;
			display: block;
		}
	}

	meta-info {
		display: flex;
		gap: 16px;
		margin-top: 6px;

		@media (max-width: 640px) {
			justify-content: center;
			flex-wrap: wrap;
		}

		& item {
			display: flex;
			align-items: center;
			gap: 6px;
			color: #cbd5e1;
			font-size: 14px;
		}
	}

	icon-wrap {
		font-size: 15px;
		display: inline-block;
	}

	intro {
		font-size: 15px;
		line-height: 1.5;
		color: #cbd5e1;
		max-width: 700px;
		margin-top: 6px;
	}

	links {
		display: flex;
		gap: 10px;
		margin-top: 12px;

		@media (max-width: 640px) {
			justify-content: center;
		}

		& a {
			display: flex;
			align-items: center;
			gap: 6px;
			background: rgba(22, 78, 99, 0.25);
			color: #38bdf8;
			padding: 6px 14px;
			border-radius: 8px;
			font-size: 14px;
			font-weight: 500;
			transition: background 0.3s;
			text-decoration: none;

			&:hover {
				background: rgba(22, 78, 99, 0.4);
			}
		}
	}
</style>
