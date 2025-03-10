<script lang="ts">
	import Portfolio from '$lib/components/Portfolio.svelte';
	import { page } from '$app/state';
	import type { PortfolioData } from '$lib/components/types';

	// Use the page store to access the data
	const portfolioData = page.data.portfolioData as PortfolioData;
</script>

<svelte:head>
	<title>Portfolio-Freddy</title>
	<meta name="description" content="Professional Portfolio" />
</svelte:head>

<Portfolio {portfolioData} />
