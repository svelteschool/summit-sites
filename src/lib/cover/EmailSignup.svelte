<script>
	let error = false;
</script>

<form
	class="background"
	id="signup"
	action="https://marketing.sveltesociety.dev/subscription/form"
	method="post"
>
	<div class="container">
		<input type="hidden" name="nonce" />
		<input
			required
			class:error={error !== false}
			name="email"
			type="email"
			placeholder="Your e-mail address..."
		/>
		<button>Get the newsletter</button>
		<p style="display: none;">
			<input
				id="14609"
				type="checkbox"
				name="l"
				checked
				value="14609764-92ce-4cca-861e-a2ff446dd28c"
			/>
			<label for="14609">Svelte Summit</label>
		</p>
	</div>
	{#if error}
		<span class="error-message">{error}</span>
	{/if}
</form>

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

	button {
		background: var(--primary-color);
		color: white;
	}
</style>
