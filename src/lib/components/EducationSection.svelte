<script lang="ts">
	import type { Education } from './types';

	export let education: Education;
</script>

<section>
	<header>
		<h3>Education</h3>
		<divider></divider>
	</header>

	<school-info>
		<education-details>
			<degree-text>{education.degree}</degree-text>
			<university-text>{education.university}</university-text>
			<year-text>{education.year}</year-text>
		</education-details>
	</school-info>

	{#if education.courses && education.courses.length > 0}
		<courses-section>
			<courses-title>Core Courses</courses-title>
			<courses-list>
				{#each education.courses as course}
					<course-item>{course}</course-item>
				{/each}
			</courses-list>
		</courses-section>
	{/if}
</section>

<style>
	section {
		background-color: rgba(248, 250, 252, 0.02);
		backdrop-filter: blur(8px);
		border-radius: 24px;
		padding: 32px;

		& h3 {
			font-size: 20px;
			font-weight: 600;
			color: #e2e8f0;
		}
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 32px;
	}

	divider {
		display: block;
		width: 40px;
		height: 2px;
		background-color: #22d3ee;
	}

	school-info {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-bottom: 24px;
	}

	education-details {
		display: flex;
		flex-direction: column;
	}

	degree-text {
		display: block;
		font-size: 16px;
		color: #f8fafc;
		margin-bottom: 4px;
	}

	university-text {
		display: block;
		font-size: 14px;
		color: #94a3b8;
		margin-bottom: 4px;
	}

	year-text {
		display: block;
		font-size: 14px;
		color: #22d3ee;
	}

	courses-section {
		margin-top: 16px;
		padding-top: 16px;
		border-top: 1px solid rgba(148, 163, 184, 0.1);
	}

	courses-title {
		display: block;
		font-size: 14px;
		font-weight: 600;
		color: #e2e8f0;
		margin-bottom: 12px;
	}

	courses-list {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	course-item {
		font-size: 12px;
		color: #94a3b8;
		background-color: rgba(148, 163, 184, 0.1);
		padding: 4px 10px;
		border-radius: 4px;
	}
</style>
