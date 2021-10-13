<script>
	import { enhance } from '$lib/form';

	let signedUp = false;
	let error = false;
	let pending = false;
</script>

{#if !signedUp}
	<form
		class="background"
		id="signup"
		action="/subscribe"
		method="post"
		use:enhance={{
			pending: async () => {
				error = false;
				pending = true;
			},
			result: async (res, form) => {
				const response = await res.json();

				pending = false;
				signedUp = true;
				form.reset();
			},
			error: async (res) => {
				const response = await res.json();

				error = response.error.message;
			}
		}}
	>
		<div class="container">
			<input
				required
				class:error={error !== false}
				name="email"
				type="email"
				placeholder="Your e-mail address..."
			/>
			<button class="highlight-bg">Sign up to the mailing list</button>
		</div>
		{#if error}
			<span class="error-message">{error}</span>
		{/if}
	</form>
{:else}
	<dialog class="background" open>Thanks for signing up. Please check your email.</dialog>
{/if}

<style>
	.background {
		font-family: Inter;
		padding: 1rem 1.5rem;
		border-radius: 1rem;
		border: none;
		background: rgba(0, 0, 0, 0.1);
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	input {
		border: none;
		padding: 0.75rem 0.8rem;
		border-radius: 4px;
		flex-grow: 2;
	}

	.error-message {
		margin-top: 1rem;
		font-size: 0.8rem;
		max-width: 40ch;
		font-weight: 400;
	}

	.error {
		border: 2px solid red;
	}

	dialog {
		position: static;
		gap: 1rem;
		color: var(--text-color);
		font-size: 1rem;
		font-weight: 600;
	}

	button {
		color: black;
	}
</style>
