<script>
	import { page } from '$app/stores';
	let signedUp = $page.url.searchParams.get('signedup') || false;
	console.log($page.url.searchParams.get('signedup'));
	let error = false;
</script>

{#if !signedUp}
	<form class="background" id="signup" action="/subscribe" method="post">
		<div class="container">
			<input
				required
				class:error={error !== false}
				name="email"
				type="email"
				placeholder="Your e-mail address..."
			/>
			<button class="primary-bg">Sign up</button>
		</div>
		{#if error}
			<span class="error-message">{error}</span>
		{/if}
	</form>
{:else}
	<div class="background" role="dialog">Thanks for signing up. Please check your email.</div>
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

	button {
		color: black;
	}
</style>
