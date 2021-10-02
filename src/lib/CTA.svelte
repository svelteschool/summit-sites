<script>
	export let title, text, href, id;
</script>

<section class="box stack container" {id}>
	<h2>{title}</h2>
	<p>{text}</p>
	<div>
		<a class="button highlight-bg" {href} target="_blank" rel="noopener noreferrer">
			Send Proposal
		</a>
	</div>
</section>

<style>
	.container {
		background: black;
		border-radius: 4px;
		margin: 2.5rem auto;
		width: 100%;
		--space: 2rem;
	}

	p {
		max-width: 60ch;
	}
</style>
