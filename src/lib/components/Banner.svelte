<div class="banner">
	<span>
		Win a chance to join us at the exclusive speaker dinner by <a
			target="_blank"
			rel="noopener noreferrer"
			href="https://ti.to/svelte/svelte-summit-fall-edition"
			>picking up your ticket before June 1st</a
		>.
	</span>
</div>

<style>
	.banner {
		display: grid;
		place-items: center;
		width: 100%;
		min-height: 50px;
		background: var(--primary-color);
		color: var(--cover-background-dark);
		padding: 15px 0;
		position: sticky;
		bottom: 0;
		font-weight: 700;
		text-align: center;
	}

	a {
		color: var(--cover-background-dark);
		text-decoration: underline;
	}
	a:visited {
		color: var(--cover-background-dark);
	}
	a:hover {
		color: var(--cover-background-dark);
	}

	@media (max-width: 600px) {
		.banner {
			font-size: 0.9rem;
		}
	}
</style>
