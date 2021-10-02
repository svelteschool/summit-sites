<script>
	import { enhance } from '$lib/form';

	let signedUp = false;
	let error = false;
	let pending = false;
</script>

{#if !signedUp}
	<form
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

				console.log('Response: ', response);

				error = response.error.message;
			}
		}}
	>
		<div class="inputs">
			<input
				class:error={error !== false}
				name="email"
				type="email"
				placeholder="Your e-mail address..."
			/>
			<button class="highlight-bg">Sign up to the mailing list</button>
		</div>
		{#if error}
			<span>{error}</span>
		{/if}
	</form>
{:else}
	thanks for signing up
{/if}

<style>
	form {
		font-family: Inter;
		padding: 1rem 1.5rem;
		border-radius: 1rem;
		background: rgba(0, 0, 0, 0.1);
	}

	.inputs {
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

	span {
		margin-top: 1rem;
		font-size: 0.8rem;
		max-width: 40ch;
		font-weight: 600;
	}

	.error {
		border: 2px solid red;
	}
</style>
