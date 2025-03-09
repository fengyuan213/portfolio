<script lang="ts">
	import type { FormData } from './types';
	import { createEventDispatcher } from 'svelte';
	import { Section, TextInput, TextArea, Button } from './common';

	const dispatch = createEventDispatcher();

	let formData: FormData = {
		name: '',
		email: '',
		message: ''
	};

	function handleSubmit() {
		dispatch('submit', formData);
		formData = {
			name: '',
			email: '',
			message: ''
		};
	}
</script>

<Section id="contact" title="Contact">
	<form on:submit|preventDefault={handleSubmit}>
		<TextInput bind:value={formData.name} placeholder="Your Name" required={true} />

		<TextInput type="email" bind:value={formData.email} placeholder="Your Email" required={true} />

		<TextArea bind:value={formData.message} placeholder="Your Message" required={true} />

		<Button type="submit" fullWidth={true}>Send Message</Button>
	</form>
</Section>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
