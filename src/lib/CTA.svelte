<script>
	export let title, text, href, id;
</script>

<section class="box stack container" {id}>
	<h2>{title}</h2>
	<p>{text}</p>
	{#if href}
		<div>
			<a class="button primary-bg" {href} target="_blank" rel="noopener noreferrer">
				Send Proposal
			</a>
		</div>
	{/if}
</section>

<style>
	.container {
		background: black;
		border-radius: 4px;
		margin: 2.5rem auto;
		width: 100%;
		--space: 2rem;
		scroll-margin-top: 5rem;
	}

	p {
		max-width: 60ch;
	}
</style>
