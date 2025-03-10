<script lang="ts">
	// Remove event dispatching, as we'll use SvelteKit's form actions directly
	import type { FormData } from './types';
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
</script>

<section id="contact" class="contact">
	<header>
		<h3 class="title">Contact</h3>
		<divider></divider>
	</header>

	<!-- Direct SvelteKit form action approach -->
	<!-- If Portfolio is rendered at route /, the action will be /?/contact -->
	<!-- If Portfolio is rendered elsewhere, adjust the action accordingly -->
	<form class="form" method="POST" action="?/contact" use:enhance>
		<input type="text" name="name" placeholder="Your Name" class="input" required />

		<input type="email" name="email" placeholder="Your Email" class="input" required />

		<textarea placeholder="Your Message" name="message" rows="4" class="textarea" required
		></textarea>

		<button type="submit" class="btn">Send Message</button>
	</form>
	{#if page.form?.message}
		<p class="message">{page.form.message}</p>
	{/if}

	{#if page.form?.error}
		<p class="error">{page.form.error}</p>
	{/if}
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
		margin-bottom: 18px;
		position: relative;
	}

	.title {
		font-size: 20px;
		font-weight: 600;
		color: #e2e8f0;
	}

	divider {
		display: block;
		width: 40px;
		height: 3px;
		background: linear-gradient(to right, #22d3ee, #818cf8);
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.input,
	.textarea {
		width: 100%;
		background-color: rgba(248, 250, 252, 0.05);
		border: 1px solid rgba(15, 23, 42, 0.6);
		border-radius: 8px;
		padding: 12px 16px;
		font-size: 14px;
		color: #f8fafc;
		box-sizing: border-box;
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
		padding: 12px;
		margin-top: 4px;
		background: linear-gradient(to right, #22d3ee, #818cf8);
		border: none;
		border-radius: 8px;
		font-size: 14px;
		font-weight: 500;
		color: #f8fafc;
		cursor: pointer;
		transition: opacity 0.3s;
	}

	.btn:hover {
		opacity: 0.9;
	}

	.message {
		margin-top: 12px;
		color: #4ade80;
		font-size: 14px;
		font-weight: 500;
	}

	.error {
		margin-top: 12px;
		color: #f87171;
		font-size: 14px;
		font-weight: 500;
	}
</style>
