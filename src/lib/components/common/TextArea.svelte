<script lang="ts">
	let textareaValue = $state('');

	let {
		value = $bindable(''),
		placeholder = '',
		rows = 4,
		required = false
	} = $props<{
		value?: string;
		placeholder?: string;
		rows?: number;
		required?: boolean;
	}>();

	// Import the createEventDispatcher
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	$effect(() => {
		textareaValue = value;
	});

	function updateValue(e: Event) {
		if (e.target instanceof HTMLTextAreaElement) {
			value = e.target.value;
		}
	}
</script>

<textarea value={textareaValue} oninput={updateValue} {placeholder} {rows} {required}></textarea>

<style>
	textarea {
		width: 100%;
		background-color: rgba(248, 250, 252, 0.03);
		border: 1px solid rgba(248, 250, 252, 0.05);
		border-radius: 12px;
		padding: 12px 16px;
		font-size: 14px;
		color: #f8fafc;
		resize: none;
		transition: border-color 0.3s;
	}

	textarea::placeholder {
		color: #64748b;
	}

	textarea:focus {
		outline: none;
		border-color: #22d3ee;
	}
</style>
