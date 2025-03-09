<script lang="ts">
	import type { PortfolioData } from './types';
	export let data: PortfolioData;
</script>

<section id="about">
	<status-badge>
		<span>✨</span>
		<span>{data.status}</span>
		<span>✨</span>
	</status-badge>

	<name-wrap>
		<h1 class="heading">{data.name}</h1>
	</name-wrap>

	<h2>{data.role}</h2>

	<info-row>
		<span>📍</span>
		<span>{data.location}</span>
		<dot></dot>
		<span>💼</span>
		<span>{data.experience}</span>
	</info-row>

	<p>{data.intro}</p>

	<social>
		<a href="https://{data.links.github}" target="_blank" rel="noopener noreferrer">
			<span>GitHub</span>
			<span>→</span>
		</a>
		<a href="https://{data.links.linkedin}" target="_blank" rel="noopener noreferrer">
			<span>LinkedIn</span>
			<span>→</span>
		</a>
		<a href="https://{data.links.cv}" target="_blank" rel="noopener noreferrer">
			<span>Download CV</span>
			<span>→</span>
		</a>
	</social>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-bottom: 80px;

		& h2 {
			font-size: 20px;
			color: #94a3b8;
			margin-bottom: 16px;
		}

		& p {
			font-size: 16px;
			color: #94a3b8;
			max-width: 600px;
			margin-bottom: 24px;
		}
	}

	status-badge {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 14px;
		color: #22d3ee;
		margin-bottom: 24px;
		background-color: rgba(34, 211, 238, 0.1);
		padding: 8px 16px;
		border-radius: 9999px;
	}

	name-wrap {
		background: linear-gradient(to right, #22d3ee, #818cf8);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.heading {
		font-size: 52px;
		font-weight: bold;
		letter-spacing: -0.025em;
		margin-bottom: 16px;
	}

	info-row {
		display: flex;
		align-items: center;
		gap: 12px;
		justify-content: center;
		font-size: 14px;
		color: #94a3b8;
		margin-bottom: 24px;
	}

	dot {
		display: block;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #94a3b8;
	}

	social {
		display: flex;
		gap: 16px;
		justify-content: center;
	}

	a {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 16px;
		background-color: rgba(248, 250, 252, 0.05);
		border-radius: 8px;
		font-size: 14px;
		transition: background-color 0.3s;
	}

	a:hover {
		background-color: rgba(248, 250, 252, 0.1);
	}

	@media (max-width: 640px) {
		.heading {
			font-size: 36px;
		}
	}
</style>
