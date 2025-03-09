<script lang="ts">
	import type { FormData } from './types';
	import { createEventDispatcher } from 'svelte';

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

<section id="contact" class="contact">
	<header>
		<h3 class="title">Contact</h3>
		<divider></divider>
	</header>

	<form class="form" on:submit|preventDefault={handleSubmit}>
		<input type="text" bind:value={formData.name} placeholder="Your Name" class="input" required />

		<input
			type="email"
			bind:value={formData.email}
			placeholder="Your Email"
			class="input"
			required
		/>

		<textarea
			bind:value={formData.message}
			placeholder="Your Message"
			rows="4"
			class="textarea"
			required
		></textarea>

		<button type="submit" class="btn">Send Message</button>
	</form>
</section>

<style>
	.contact {
		background-color: rgba(248, 250, 252, 0.02);
		backdrop-filter: blur(8px);
		border-radius: 24px;
		padding: 32px;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 32px;
	}

	.title {
		font-size: 20px;
		font-weight: 600;
		color: #e2e8f0;
	}

	divider {
		display: block;
		width: 40px;
		height: 2px;
		background-color: #22d3ee;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.input,
	.textarea {
		width: 100%;
		background-color: rgba(248, 250, 252, 0.03);
		border: 1px solid rgba(248, 250, 252, 0.05);
		border-radius: 12px;
		padding: 12px 16px;
		font-size: 14px;
		color: #f8fafc;
	}

	.input::placeholder,
	.textarea::placeholder {
		color: #64748b;
	}

	.input:focus,
	.textarea:focus {
		outline: none;
		border-color: #22d3ee;
	}

	.textarea {
		resize: none;
	}

	.btn {
		width: 100%;
		padding: 14px;
		background: linear-gradient(to right, #22d3ee, #818cf8);
		border: none;
		border-radius: 12px;
		font-size: 14px;
		font-weight: 500;
		color: #f8fafc;
		cursor: pointer;
		transition: opacity 0.3s;
	}

	.btn:hover {
		opacity: 0.9;
	}
</style>
