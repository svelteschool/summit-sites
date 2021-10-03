<section class="stack" id="sponsors">
	<h2>Sponsors</h2>
	<hr />
	<div class="golds">
		<!-- <a href="/" class="platinum sponsor"><img src={svelteschool} alt="Svelte School Sponsor" /></a> -->
		<a href="/sponsors" class="platinum sponsor">Platinum 💎</a>
	</div>
	<div class="sponsors golds">
		<!-- <a href="/sponsors" class="gold sponsor"><img src={svelteschool} alt="Svelte School Sponsor" /></a> -->
		<a href="/sponsors" class="gold sponsor">Gold 🏆</a>
		<a href="/sponsors" class="gold sponsor">Gold 🏆</a>
		<a href="/sponsors" class="gold sponsor">Gold 🏆</a>
	</div>
	<div class="sponsors silvers">
		<!-- <a href="/sponsors" class="silver sponsor"><img src={svelteschool} alt="Svelte School Sponsor" /></a> -->
		<a href="/sponsors" class="silver sponsor">Silver 📏</a>
		<a href="/sponsors" class="silver sponsor">Silver 📏</a>
		<a href="/sponsors" class="silver sponsor">Silver 📏</a>
		<a href="/sponsors" class="silver sponsor">Silver 📏</a>
	</div>
	<h3><a href="/sponsors" class="button big highlight-bg">Become a sponsor</a></h3>
</section>

<style>
	.stack {
		text-align: center;
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
	}
	.sponsors {
		display: grid;
		gap: 15px;
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

	.platinum img {
		max-width: 300px;
	}

	.gold img {
		max-width: 175px;
	}

	.silver img {
		max-width: 125px;
	}
	.golds {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}

	.silvers {
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}

	h3 {
		margin-top: 2.5rem;
	}
</style>
