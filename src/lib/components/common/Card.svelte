<script lang="ts">
</script>

<card>
	<slot></slot>
</card>

<style>
	card {
		display: block;
		background-color: rgba(248, 250, 252, 0.03);
		border-radius: 16px;
		padding: 24px;
		transition: background-color 0.3s;
	}

	card:hover {
		background-color: rgba(248, 250, 252, 0.05);
	}
</style>
