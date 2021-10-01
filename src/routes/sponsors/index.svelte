<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<script>
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
		enthustiastic developers from across the globe. Since then we've hosted and organised two more
		events, each time the number of attendees grows by a lot.
	</p>
	<p>
		In contrast to most other events we take pride in keeping it joyful and fun, much like how
		people feel when they decide to use Svelte.
	</p>
</section>

<ul class="grid">
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

	<p>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nostrum quidem maxime atque
		necessitatibus. Consectetur assumenda cumque odit quia optio deleniti, id aspernatur dolorum
		voluptate exercitationem doloremque eligendi libero quod?
	</p>

	<p style="color: var(--highlight-color)">
		<strong>With your help we can make Svelte Summit even better. </strong>
	</p>
</section>
<div class="grid statistics">
	<a
		href="https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/"
		target="_blank"
		rel="noopener noreferrer"
		class="stat stack box"
	>
		<img class="drop-shadow" src={satisfaction} alt="Developer Satisfaction" />
		<small>Most satisfying framework in State of JS 2020 Survey</small>
	</a>
	<a
		href="https://insights.stackoverflow.com/survey/2021#section-most-loved-dreaded-and-wanted-web-frameworks"
		target="_blank"
		rel="noopener noreferrer"
		class="stat stack box"
	>
		<img class="drop-shadow" src={loved} alt="Most Loved Framework" />
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
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere vel non alias
				pariatur ratione quo aperiam, odit expedita distinctio architecto tempora quae eveniet
				molestias quibusdam perspiciatis repudiandae, natus sint?
			</p>
			<ul>
				<li>- Everything in GOLD</li>
				<li>- 2</li>
				<li>- 3</li>
			</ul>
		</li>
		<li class="box stack">
			<div class="cluster">
				<h3>🏆 Gold</h3>
				<span class="price primary-text">€<data value="2500">2500</data></span>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere vel non alias
				pariatur ratione quo aperiam, odit expedita distinctio architecto tempora quae eveniet
				molestias quibusdam perspiciatis repudiandae, natus sint?
			</p>
			<ul>
				<li>- Everything in GOLD</li>
				<li>- 2</li>
				<li>- 3</li>
			</ul>
		</li>
		<li class="box stack">
			<div class="cluster">
				<h3>📏 Silver</h3>
				<span class="price primary-text">€<data value="900">900</data></span>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facere vel non alias
				pariatur ratione quo aperiam, odit expedita distinctio architecto tempora quae eveniet
				molestias quibusdam perspiciatis repudiandae, natus sint?
			</p>
			<ul>
				<li>- Everything in GOLD</li>
				<li>- 2</li>
				<li>- 3</li>
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
		<a href="mailto:sponsors@sveltesummit.com"><strong>sponsors@sveltesummit.com</strong></a>
		<ul class="center social">
			<a
				href="https://twitter.com/sveltesociety"
				target="_blank"
				rel="noopener noreferrer"
				role="listitem"
			>
				<svg
					class="icon"
					fill="var(--primary-color)"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
					/>
				</svg>
				Twitter
			</a>
			<a href="https://sveltesociety.dev" target="_blank" rel="noopener noreferrer" role="listitem">
				<svg
					class="icon"
					fill="var(--primary-color)"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
					/>
				</svg>
				Website
			</a>
			<a
				href="https://youtube.com/sveltesociety"
				target="_blank"
				rel="noopener noreferrer"
				role="listitem"
				class="with-icon"
			>
				<svg
					class="icon"
					fill="var(--primary-color)"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
					/>
				</svg>
				YouTube
			</a>
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
		font-size: calc(34px + 5vw);
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

	.drop-shadow {
		max-width: 500px;
		filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5));
		border-radius: 6px;
	}

	.box {
		background: rgba(0, 0, 0, 0.5);
		border-radius: 5px;
		place-content: center;
	}

	p {
		max-width: 60ch;
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
		font-size: 1.5rem;
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
</style>
