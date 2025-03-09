<script lang="ts">
	export let activeSection: string;
	export let onSectionClick: (section: string) => void;

	const sections = ['About', 'Skills', 'Projects', 'Contact'];
</script>

<nav class="main-nav">
	<nav-inner>
		<logo>
			<logo-icon>JD</logo-icon>
			<logo-text>Portfolio</logo-text>
		</logo>

		<links>
			{#each sections as section}
				<button
					class="nav-link {activeSection === section.toLowerCase() ? 'active' : ''}"
					on:click={() => onSectionClick(section.toLowerCase())}
				>
					{section}
				</button>
			{/each}
		</links>

		<button class="menu-btn" aria-label="Menu">☰</button>
	</nav-inner>
</nav>

<style>
	.main-nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: rgba(15, 23, 42, 0.8);
		backdrop-filter: blur(8px);
		border-bottom: 1px solid rgba(248, 250, 252, 0.08);
		z-index: 50;
	}

	nav-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 16px 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	logo {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	logo-icon {
		width: 40px;
		height: 40px;
		background: linear-gradient(to bottom right, #22d3ee, #818cf8);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		font-weight: bold;
	}

	logo-text {
		font-size: 18px;
		font-weight: 500;
	}

	links {
		display: flex;
		align-items: center;
		gap: 32px;
	}

	.nav-link {
		font-size: 14px;
		color: #94a3b8;
		background: none;
		border: none;
		cursor: pointer;
		transition: color 0.3s;
	}

	.nav-link:hover {
		color: #22d3ee;
	}

	.nav-link.active {
		color: #22d3ee;
	}

	.menu-btn {
		display: none;
		font-size: 24px;
		background: none;
		border: none;
		color: #f8fafc;
		cursor: pointer;
	}

	@media (max-width: 640px) {
		links {
			display: none;
		}

		.menu-btn {
			display: block;
		}
	}
</style>
