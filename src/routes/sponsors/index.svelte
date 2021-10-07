<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<script>
	import sveltekit from './_assets/sveltekitsatisfaction.png';
	import satisfaction from './_assets/sveltesatisfaction.png';
	import loved from './_assets/loved.png';
</script>

<svelte:head>
	<title>Svelte Summit Fall 2021 - Sponsors</title>
</svelte:head>

<section class="cover">
	<h1 class="center">
		<span class="meta highlight-text"
			><time>November 20th, </time>
			<address>Worldwide</address></span
		><span class="primary-text title">Sponsorship Opportunities</span>
	</h1>

	<div class="contact center stack">
		<p>The only Svelte focused conference on the planet.</p>
		<a href="mailto:sponsors@sveltesummit.com" class="button highlight-bg">Contact us</a>
	</div>
</section>

<section class="stack center">
	<h2>About Svelte Summit</h2>
	<hr />
	<p>
		On the 26th of April 2019 we held the first Svelte conference. It gathered over 1000 highly
		enthusiastic developers from across the globe. Since then we've hosted and organised two more
		events, each time the number of attendees grows by a lot. In contrast to most other events we
		take pride in keeping it joyful and fun, much like how people feel when they decide to use
		Svelte.
	</p>
	<p>Below you'll find some stats on earlier events as well as our Social media accounts.</p>
</section>

<ul class="grid info-boxes">
	<li class="card">
		<span class="highlight-text">5<small>k</small></span>
		<span class="highlight-text desc">live attendees</span>
	</li>
	<li class="card">
		<span class="primary-text">21<small>k</small></span>
		<span class="primary-text desc">async attendees</span>
	</li>
	<li class="card">
		<span class="repeating-colors">50<small>+</small></span>
		<span class="repeating-colors desc">countries reached</span>
	</li>
	<li class="card">
		<span class="primary-text">17<small /></span>
		<span class="primary-text desc">talks from around the world</span>
	</li>
	<li class="card" style="color: var(--twitter-blue);">
		<span>11<small>k</small></span>
		<span class="desc">twitter followers</span>
	</li>
	<li class="card">
		<span class="highlight-text">100<small>k</small>+</span>
		<span class="highlight-text desc">YouTube views</span>
	</li>
	<li class="card">
		<span class="primary-text">10<small>k</small></span>
		<span class="primary-text desc">YouTube Subscribers</span>
	</li>
</ul>

<section class="stack center">
	<h2>Why sponsor?</h2>
	<hr />
	<p>
		Svelte is growing like crazy. Numbers are up manyfold on the Community discord, Reddit as well
		as on a number of other platforms. Developers love Svelte. So much so that they quit their jobs
		if they find a new one where they can use it. As you can see in the screenshots below, Svelte
		topped the charts for most exciting and most loved framework in a couple of surveys this year.
	</p>

	<p style="color: var(--highlight-color)">
		<strong>With your help we can make Svelte Summit even better. </strong>
	</p>
</section>
<div class="grid statistics">
	<a
		href="https://jamstack.org/survey/2021/#choices-frameworksminor"
		target="_blank"
		rel="noopener noreferrer"
		class="stat stack box"
	>
		<img src={sveltekit} alt="Developer Satisfaction" />
		<small>SvelteKit has the highest Satisfaction score of newcomer frameworks</small>
	</a>
	<a
		href="https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/"
		target="_blank"
		rel="noopener noreferrer"
		class="stat stack box"
	>
		<img src={satisfaction} alt="Developer Satisfaction" />
		<small>Most satisfying framework in State of JS 2020 Survey</small>
	</a>
	<a
		href="https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks"
		target="_blank"
		rel="noopener noreferrer"
		class="stat stack box"
	>
		<img src={loved} alt="Most Loved Framework" />
		<small>Most loved framework in StackOverflow 2020 Survey</small>
	</a>
</div>

<section class="packages center stack">
	<h2>Sponsorship Packages</h2>
	<hr />
	<ul class="grid" style="--grid-width: 350px;">
		<li class="box stack" style="grid-column: 1 / -1">
			<div class="cluster">
				<h3>💎 Platinum</h3>
				<span class="price primary-text">€<data value="5000">5000</data></span>
			</div>
			<p>
				This is the package for companies that really want to show their love for Svelte and the
				Svelte community. You'll get the largest size logo on the website and the possibility to
				provide a 30 second promo video during the event. If you have any other interesting ideas we
				can discuss those as well.
			</p>
			<ul class="perks">
				<li>Everything in 🥇 Gold</li>
				<li>Largest size of logo on website and in slides between talks</li>
				<li>
					30 second promo/video during start, break and end of event. (you'll have to make it
					yourself!)
				</li>
				<li>Other ideas, reach out to discuss</li>
			</ul>
		</li>
		<li class="box stack">
			<div class="cluster">
				<h3>🥇 Gold</h3>
				<span class="price primary-text">€<data value="3000">3000</data></span>
			</div>
			<p>
				You like Svelte a lot. And you want there to be more conferences. This is the package for
				you. You'll get everything in Silver but larger logos. You'll also be eternalised in the
				separate videos that will be uploaded after the event on our YouTube channel
			</p>
			<ul class="perks">
				<li>Everything in 🥈 Silver</li>
				<li>Larger size of your logo on slides between talks</li>
				<li>
					Logo at the start of separate videos uploaded after the event on our YouTube channel.
				</li>
			</ul>
		</li>
		<li class="box stack">
			<div class="cluster">
				<h3>🥈 Silver</h3>
				<span class="price primary-text">€<data value="1000">1000</data></span>
			</div>
			<p>
				You're a smaller company that wants to show your support for Svelte. This is an excellent
				opportunity to let developers know you're interested in Svelte.
			</p>
			<ul class="perks">
				<li>Logo on website</li>
				<li>Logo shown at the start and end of the event</li>
			</ul>
		</li>
	</ul>
	<a href="mailto:sponsors@sveltesummit.com" class="button big highlight-bg"
		>Sponsor the conference</a
	>
</section>

<section class="stack center highlight-bg questions">
	<h2>Got questions?</h2>
	<p>Send us a message. We're happy to discuss the options in more detail.</p>
	<address class="stack primary-text">
		<a href="mailto:sponsors@sveltesummit.com" class="question-links"
			><strong>sponsors@sveltesummit.com</strong></a
		>
		<ul class="center social">
			<li>
				<a
					href="https://twitter.com/sveltesociety"
					class="question-links"
					target="_blank"
					rel="noopener noreferrer"
				>
					Twitter
				</a>
			</li>
			<li>
				<a
					href="https://sveltesociety.dev"
					class="question-links"
					target="_blank"
					rel="noopener noreferrer"
				>
					Website
				</a>
			</li>
			<li>
				<a
					href="https://youtube.com/sveltesociety"
					class="question-links"
					target="_blank"
					rel="noopener noreferrer"
				>
					YouTube
				</a>
			</li>
		</ul>
	</address>
	<a class="primary-text" href="/"><strong>Code of Conduct</strong></a>
</section>

<style>
	.cover {
		background: rgba(0, 0, 0, 0.5);
		margin: 0 calc(var(--space) * -1);
	}

	h1 {
		display: grid;
		place-items: center;
	}
	h2 {
		font-size: 2.5rem;
	}
	h3 {
		font-weight: bold;
		font-size: 2rem;
	}

	.info-boxes {
		max-width: 900px;
		margin: 0 auto;
	}

	.grid {
		justify-content: start;
		width: 100%;
	}

	.meta {
		display: flex;
		font-family: var(--font-body);
		gap: 0.5ch;
		font-size: calc(12px + 1vw);
	}

	.title {
		font-family: var(--font-heading);
		line-height: 1.2;
		text-align: center;
		font-size: clamp(42px, 7vw, 120px);
		word-spacing: 9999px;
	}

	.contact {
		padding-bottom: 2rem;
	}

	.grid {
		margin: initial auto;
	}

	.card {
		display: grid;
		place-content: center;
		text-align: center;
		background: rgba(0, 0, 0, 0.5);
		padding: 0.8rem;
		border-radius: 6px;
		font-size: 4rem;
		font-weight: 600;
	}

	.desc {
		font-size: 1rem;
		max-width: 140px;
	}

	img {
		max-width: 500px;
		filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5));
		border-radius: 6px;
		object-fit: cover;
	}

	.box {
		background: rgba(0, 0, 0, 0.5);
		border-radius: 5px;
		place-content: start;
	}

	p {
		max-width: 60ch;
	}

	.perks li {
		list-style: initial;
		margin-left: 1rem;
	}

	.statistics {
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.packages {
		--max-width: 900px;
		width: 100%;
		padding-left: calc(var(--space) * -1);
		padding-right: calc(var(--space) * -1);
	}

	.cluster {
		justify-content: space-between;
	}

	.price {
		font-weight: 600;
		font-size: 2rem;
	}

	.questions {
		color: black;
		margin: 0 calc(var(--space) * -1);
		max-width: initial;
	}

	.repeating-colors {
		background: repeating-linear-gradient(
			45deg,
			var(--primary-color) 0,
			var(--primary-color) 15%,
			var(--highlight-color) 15%,
			var(--highlight-color) 30%
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	address {
		text-align: center;
	}

	.social {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	.question-links {
		color: var(--primary-color);
	}
	.question-links:visited {
		color: var(--primary-color);
	}
</style>
