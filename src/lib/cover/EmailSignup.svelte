<script>
	import { enhance } from '$lib/form';

	let signedUp = false;
</script>

{#if !signedUp}
	<form
		id="signup"
		action="/todos.json"
		method="post"
		use:enhance={{
			result: async (res, form) => {
				await res.json();
				signedUp = true;

				form.reset();
			}
		}}
	>
		<input type="email" placeholder="Your e-mail address..." />
		<button class="highlight-bg">Sign up to the mailing list</button>
	</form>
{:else}
	thanks for signing up
{/if}

<style>
	form {
		font-family: Inter;
		padding: 1rem 1.5rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		border-radius: 1rem;
		background: rgba(0, 0, 0, 0.1);
	}

	input {
		border: none;
		padding: 0.75rem 0.8rem;
		border-radius: 4px;
		flex-grow: 1;
	}
</style>
