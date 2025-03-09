<script lang="ts">
	const { type = 'button', fullWidth = false } = $props<{
		type?: 'button' | 'submit' | 'reset';
		fullWidth?: boolean;
	}>();
</script>

<button {type} data-full={fullWidth}>
	<slot></slot>
</button>

<style>
	button {
		padding: 14px 24px;
		background: linear-gradient(to right, #22d3ee, #818cf8);
		border: none;
		border-radius: 12px;
		font-size: 14px;
		font-weight: 500;
		color: #f8fafc;
		cursor: pointer;
		transition: opacity 0.3s;
	}

	button:hover {
		opacity: 0.9;
	}

	button[data-full='true'] {
		width: 100%;
	}
</style>
