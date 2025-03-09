<script lang="ts">
	const {
		id = undefined,
		title,
		marginBottom = false
	} = $props<{
		id?: string;
		title: string;
		marginBottom?: boolean;
	}>();
</script>

<section {id} data-margin={marginBottom}>
	<header>
		<h3>{title}</h3>
		<divider></divider>
	</header>

	<slot></slot>
</section>

<style>
	section {
		background-color: rgba(248, 250, 252, 0.02);
		backdrop-filter: blur(8px);
		border-radius: 24px;
		padding: 32px;
	}

	section[data-margin='true'] {
		margin-bottom: 24px;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 32px;
	}

	h3 {
		font-size: 20px;
		font-weight: 600;
		color: #e2e8f0;
		margin: 0;
	}

	divider {
		display: block;
		width: 40px;
		height: 2px;
		background-color: #22d3ee;
	}
</style>
