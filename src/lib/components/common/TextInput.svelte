<script lang="ts">
	let inputValue = $state('');

	let {
		value = $bindable(''),
		placeholder = '',
		type = 'text',
		required = false
	} = $props<{
		value?: string;
		placeholder?: string;
		type?: string;
		required?: boolean;
	}>();

	// Import the createEventDispatcher
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	$effect(() => {
		inputValue = value;
	});

	function updateValue(e: Event) {
		if (e.target instanceof HTMLInputElement) {
			value = e.target.value;
		}
	}
</script>

<input {type} value={inputValue} on:input={updateValue} {placeholder} {required} />

<style>
	input {
		width: 100%;
		background-color: rgba(248, 250, 252, 0.03);
		border: 1px solid rgba(248, 250, 252, 0.05);
		border-radius: 12px;
		padding: 12px 16px;
		font-size: 14px;
		color: #f8fafc;
		transition: border-color 0.3s;
	}

	input::placeholder {
		color: #64748b;
	}

	input:focus {
		outline: none;
		border-color: #22d3ee;
	}
</style>
