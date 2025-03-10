<script lang="ts">
	import type { Education } from './types';

	const { education }: { education: Education } = $props();
</script>

<section id="education">
	<header>
		<title>Education</title>
	</header>

	<card>
		<degree>{education.degree}</degree>
		<university>{education.university}</university>
		<year>{education.year}</year>

		<courses-title>Core Courses</courses-title>
		<course-list>
			{#if education.courses}
				{#each education.courses as course}
					<course-item>
						<bullet></bullet>
						<span>{course}</span>
					</course-item>
				{/each}
			{/if}
		</course-list>
	</card>
</section>

<style>
	section {
		padding: 40px 0;
	}

	header {
		margin-bottom: 20px;

		& title {
			font-size: 28px;
			font-weight: 600;
			color: #f8fafc;
			display: block;
		}
	}

	card {
		background: rgba(30, 41, 59, 0.8);
		border-radius: 12px;
		padding: 24px;
		border-left: 4px solid #8b5cf6;
		display: block;
	}

	degree {
		font-size: 20px;
		font-weight: 600;
		color: #f8fafc;
		margin-bottom: 6px;
		display: block;
	}

	university {
		color: #94a3b8;
		font-size: 16px;
		display: block;
	}

	year {
		color: #64748b;
		font-size: 14px;
		margin-top: 4px;
		margin-bottom: 20px;
		display: block;
	}

	courses-title {
		font-size: 16px;
		font-weight: 600;
		color: #f8fafc;
		margin-bottom: 12px;
		display: block;
	}

	course-list {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	course-item {
		display: flex;
		align-items: flex-start;
		gap: 10px;

		& bullet {
			flex-shrink: 0;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background: #8b5cf6;
			margin-top: 6px;
			display: block;
		}

		& span {
			color: #cbd5e1;
			font-size: 14px;
			line-height: 1.4;
		}
	}
</style>
