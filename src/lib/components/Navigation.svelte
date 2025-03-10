<script lang="ts">
	import { onMount } from 'svelte';

	const { activeSection, onSectionClick }: { activeSection: string; onSectionClick } = $props();

	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav class:scrolled={isScrolled}>
	<wrap>
		<logo>
			<svg
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10.5 21L5 12L10.5 3H19.5L25 12L19.5 21H10.5Z"
					fill="url(#gradient)"
					stroke="url(#stroke)"
					stroke-width="2"
				/>
				<defs>
					<linearGradient
						id="gradient"
						x1="5"
						y1="3"
						x2="25"
						y2="21"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#38BDF8" />
						<stop offset="1" stop-color="#6366F1" />
					</linearGradient>
					<linearGradient id="stroke" x1="5" y1="3" x2="25" y2="21" gradientUnits="userSpaceOnUse">
						<stop stop-color="#38BDF8" />
						<stop offset="1" stop-color="#6366F1" />
					</linearGradient>
				</defs>
			</svg>
			<span>F.L</span>
		</logo>

		<menu class:open={isMobileMenuOpen}>
			<item class:active={activeSection === 'about'}>
				<btn on:click={() => onSectionClick('about')}>About</btn>
			</item>
			<item class:active={activeSection === 'skills'}>
				<btn on:click={() => onSectionClick('skills')}>Skills</btn>
			</item>
			<item class:active={activeSection === 'projects'}>
				<btn on:click={() => onSectionClick('projects')}>Projects</btn>
			</item>
			<item class:active={activeSection === 'contact'}>
				<btn on:click={() => onSectionClick('contact')}>Contact</btn>
			</item>
		</menu>

		<toggle on:click={() => (isMobileMenuOpen = !isMobileMenuOpen)}>
			<bar />
			<bar />
			<bar />
		</toggle>
	</wrap>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 20px 0;
		z-index: 100;
		transition: all 0.3s ease;

		&.scrolled {
			padding: 15px 0;
			background: rgba(15, 23, 42, 0.8);
			backdrop-filter: blur(8px);
			border-bottom: 1px solid rgba(255, 255, 255, 0.05);
		}
	}

	wrap {
		max-width: 1000px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
	}

	logo {
		display: flex;
		align-items: center;
		gap: 10px;
		color: #f8fafc;
		font-weight: 600;
		font-size: 18px;
	}

	menu {
		display: flex;
		gap: 30px;

		@media (max-width: 640px) {
			position: fixed;
			top: 70px;
			left: 0;
			width: 100%;
			background: rgba(15, 23, 42, 0.9);
			backdrop-filter: blur(8px);
			flex-direction: column;
			gap: 0;
			transform: translateY(-100%);
			opacity: 0;
			padding: 20px 0;
			transition: all 0.3s ease;
			pointer-events: none;
			border-bottom: 1px solid rgba(255, 255, 255, 0.05);

			&.open {
				transform: translateY(0);
				opacity: 1;
				pointer-events: auto;
			}
		}
	}

	item {
		position: relative;

		&.active::after {
			content: '';
			position: absolute;
			left: 50%;
			bottom: -6px;
			height: 3px;
			width: 20px;
			background: linear-gradient(90deg, #38bdf8, #6366f1);
			border-radius: 3px;
			transform: translateX(-50%);
		}

		@media (max-width: 640px) {
			padding: 15px 20px;
			width: 100%;
			text-align: center;

			&.active::after {
				bottom: 10px;
			}
		}
	}

	btn {
		color: #e2e8f0;
		font-size: 16px;
		font-weight: 500;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		transition: color 0.3s;

		&:hover {
			color: #f8fafc;
		}
	}

	toggle {
		display: none;
		flex-direction: column;
		gap: 5px;
		cursor: pointer;
		padding: 5px;

		@media (max-width: 640px) {
			display: flex;
		}

		& bar {
			width: 24px;
			height: 2px;
			background: #e2e8f0;
			border-radius: 3px;
			transition: all 0.3s ease;
		}
	}
</style>
