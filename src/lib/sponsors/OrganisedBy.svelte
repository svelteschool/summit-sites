<script>
	import svelteschool from './svelteschool.svg';
</script>

<section class="stack">
	<h2>Organised by</h2>
	<hr />
	<a
		href="https://svelte.school"
		target="_blank"
		rel="noopener noreferrer"
		class="organiser sponsor"><img width="300" height="100" src={svelteschool} alt="Svelte School Sponsor" /></a
	>
</section>

<style>
	.stack {
		text-align: center;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}
	.sponsor {
		display: grid;
		place-items: center;
		background: black;
		border-radius: 5px;
		padding: 3rem;
	}

	.sponsor img {
		width: 100%;
	}

	.organiser img {
		max-width: 300px;
	}
</style>
