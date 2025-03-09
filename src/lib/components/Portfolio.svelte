<script lang="ts">
	import { onMount } from 'svelte';
	import { portfolioData } from './data';
	import Navigation from './Navigation.svelte';
	import AboutSection from './AboutSection.svelte';
	import SkillsSection from './SkillsSection.svelte';
	import ProjectsSection from './ProjectsSection.svelte';
	import EducationSection from './EducationSection.svelte';
	import ContactSection from './ContactSection.svelte';
	import type { FormData } from './types';

	let activeSection = 'about';

	function scrollToSection(section: string) {
		activeSection = section;
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function handleContactSubmit(event: CustomEvent<FormData>) {
		alert('Message sent!');
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{ threshold: 0.5 }
		);

		['about', 'skills', 'projects', 'contact'].forEach((section) => {
			const element = document.getElementById(section);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	});
</script>

<container>
	<Navigation {activeSection} onSectionClick={scrollToSection} />

	<main-area>
		<content>
			<AboutSection data={portfolioData} />

			<grid>
				<col-left>
					<SkillsSection skills={portfolioData.skills} />
					<ProjectsSection projects={portfolioData.projects} />
				</col-left>

				<col-right>
					<EducationSection education={portfolioData.edu} />
					<ContactSection on:submit={handleContactSubmit} />
				</col-right>
			</grid>
		</content>
	</main-area>
</container>

<style>
	container {
		display: block;
		min-height: 100vh;
		width: 100vw;
		background: linear-gradient(to bottom right, #0f172a, #1e293b);
		font-family: 'Inter', sans-serif;
		color: #f8fafc;
	}

	main-area {
		display: block;
		padding: 100px 60px;
	}

	content {
		display: block;
		max-width: 1000px;
		margin: 0 auto;
	}

	grid {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		gap: 40px;
	}

	col-left {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	col-right {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	@media (max-width: 1024px) {
		grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 640px) {
		main-area {
			padding: 100px 24px;
		}
	}
</style>
