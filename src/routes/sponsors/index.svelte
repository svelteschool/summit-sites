<script context="module">
	export const prerender = true;
</script>

<script>
	import sveltekit from './_assets/sveltekitsatisfaction.png';
	import kitInterest from './_assets/kit-interest.png';
	import satisfaction from './_assets/sveltesatisfaction.png';
	import loved from './_assets/loved.png';
</script>

<svelte:head>
	<title>Svelte Summit Fall 2022 - Sponsors</title>
</svelte:head>

<section class="cover">
	<h1 class="center">
		<span class="meta highlight-text"
			><time>September 8-9,</time>
			<address>Stockholm, Sweden</address></span
		><span class="primary-text">Sponsorship Opportunities</span>
	</h1>

	<div class="contact center stack">
		<p>The only Svelte focused conference on the planet.</p>
		<a href="mailto:sponsors@sveltesummit.com" class="button primary-bg">Contact us</a>
	</div>
</section>

<section class="stack center">
	<h2>About Svelte Summit</h2>
	<hr />
	<p>
		On the 26th of April 2019 we held the first Svelte conference. It gathered over 1000 highly
		enthusiastic developers from across the globe. Since then we've hosted and organised three more
		events, each time the number of attendees grows by a lot. In contrast to most other events we
		take pride in keeping it joyful and fun, much like how people feel when they decide to use
		Svelte.
	</p>
	<p>
		This time around we're going in-person. An absolutely awesome opportunity for you to meet and
		talk with Svelte developers from across the world. We're aiming to get at least 250 developers
		to join us.
	</p>
	<p>Below you'll find some stats on earlier events as well as our Social media accounts.</p>
</section>

<ul class="grid info-boxes">
	<li class="card">
		<span class="highlight-text">2.5<small>k</small></span>
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
		<span class="primary-text">15<small />+</span>
		<span class="primary-text desc">talks from around the world</span>
	</li>
	<li class="card" style="color: var(--twitter-blue);">
		<span>15.5<small>k</small></span>
		<span class="desc">twitter followers</span>
	</li>
	<li class="card">
		<span class="highlight-text">200<small>k</small>+</span>
		<span class="highlight-text desc">YouTube views</span>
	</li>
	<li class="card">
		<span class="primary-text">12<small>k</small></span>
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
		href="https://2021.stateofjs.com/en-US/libraries/back-end-frameworks"
		target="_blank"
		rel="noopener noreferrer"
		class="stat stack box"
	>
		<img src={kitInterest} alt="Developer Satisfaction" />
		<small
			>SvelteKit has the highest Satisfaction score of all metaframeworks and the highest interest.</small
		>
	</a>
	<a
		href="https://2021.stateofjs.com/en-US/libraries/front-end-frameworks/"
		target="_blank"
		rel="noopener noreferrer"
		class="stat stack box"
	>
		<img src={satisfaction} alt="Developer Satisfaction" />
		<small
			>Most satisfying framework in State of JS 2021 Survey. Highest interest out of all frameworks.</small
		>
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
		<small>Most loved framework in StackOverflow 2021 Survey</small>
	</a>
</div>

<section class="packages center stack">
	<h2>Sponsorship Packages</h2>
	<hr />
	<ul class="grid" style="--grid-width: 350px;">
		<li class="box stack" style="grid-column: 1 / -1">
			<div class="cluster">
				<h3>💎 Platinum</h3>
				<span class="price primary-text">$<data value="8000">8000</data></span>
			</div>
			<p><span class="sponsor-count">(3 of 3 left)</span></p>
			<p>
				This is the package for companies that really want to show their love for Svelte and the
				Svelte community. You'll get the largest size logo on the website and an above the fold logo
				in our email blasts. If you have any other interesting ideas we can discuss those as well.
			</p>
			<ul class="perks">
				<li>Large logo on the event website before, during and after the event.</li>
				<li>
					Large (~3x size of Gold table) table with 2 roll-ups where you can present your company in
					the lounge area during the event
				</li>
				<li>One slide in-between talks shown during the intermissions and breaks</li>
				<li>Above the fold (on desktop) logo in all our email blasts</li>
				<li>Announcement of sponsorship in email and on Twitter</li>
				<li>5 tickets to the event itself</li>
				<li>
					Large logo at the start of the videos when they are uploaded to the YouTube channel after
					the event.
				</li>
				<li>1 speaker dinner spot</li>
			</ul>
		</li>
		<li class="box stack" style="grid-column: 1 / -1">
			<div class="cluster">
				<h3>🥇 Gold</h3>
				<span class="price primary-text">$<data value="5000">5000</data></span>
			</div>
			<p><span class="sponsor-count">(6 of 6 left)</span></p>
			<p>
				You like Svelte a lot. And you want there to be more conferences. This is the package for
				you. You'll get everything in Silver but larger logos. You'll also be eternalised in the
				separate videos that will be uploaded after the event on our YouTube channel
			</p>
			<ul class="perks">
				<li>Logo on the event website before, during and after the event.</li>
				<li>
					Table with in 1 roll-up where you can present your company in the lounge area during the
					event
				</li>
				<li>
					Logo at the start of the videos when they are uploaded to the YouTube channel after the
					event.
				</li>
				<li>Announcement of sponsorship in email and on Twitter</li>
				<li>2 tickets to the event itself</li>
			</ul>
		</li>
		<li class="box stack" style="grid-column: 1 / -1">
			<div class="cluster">
				<h3>🎙 Podcast and 🐥 Twitter</h3>
				<span class="price primary-text">$<data value="15000">15000</data></span>
			</div>
			<p><span class="sponsor-count">(1 of 1 left)</span></p>
			<p>
				You think the Svelte community is awesome and want to make sure it thrives. This is a
				package that is designed to give you an opportunity to repeatedly keep the name of your
				company in the mind's of our audience.
			</p>
			<ul class="perks">
				<li>
					A 30 second pre-roll and mid-roll ad in the <a
						href="https://www.svelteradio.com"
						target="_blank">Svelte Radio Podcast</a
					> for 20 episodes (roughly 1 per week for 5 months).
				</li>
				<li>Your logo in the corner of our Twitter banner as well as a link in our profile Bio</li>
				<li>Your logo in the corner of our YouTube banner</li>
				<li>Link in pinned Tweets during the period.</li>
				<li>Announcement of sponsorship in our email newsletter and our Twitter account</li>
				<li>2 tickets to the event</li>
			</ul>
		</li>
		<li class="box stack" style="grid-column: 1 / -1">
			<div class="cluster">
				<h3>🥙 Dinner and Lunch</h3>
				<span class="price primary-text">$<data value="8000">8000</data></span>
			</div>
			<p><span class="sponsor-count">(1 of 1 left)</span></p>
			<p>
				You like food. And Svelte! This is your chance to get the venue branded with your company
				during the lunches and dinners.
			</p>
			<ul class="perks">
				<li>We decorate the venue with roll-ups of your company</li>
				<li>Announcement of sponsorship from the MC/organizer before Lunch and Dinner</li>
				<li>You will be visible at the dinner party event.</li>
			</ul>
		</li>
		<li class="box stack">
			<div class="cluster">
				<h3>☕️ Coffee Sponsor</h3>
				<span class="price primary-text">$<data value="3000">3000</data></span>
			</div>
			<p><span class="sponsor-count">(1 of 1 left)</span></p>
			<p>We all need coffee. It's the life essence of a developer.</p>
			<ul class="perks">
				<li>Logo on the coffee cups</li>
				<li>Roll-up by the coffee station(s)</li>
			</ul>
		</li>
		<li class="box stack">
			<div class="cluster">
				<h3>🪪 Lanyard Sponsor</h3>
				<span class="price primary-text">$<data value="3000">3000</data></span>
			</div>
			<p><span class="sponsor-count">(1 of 1 left)</span></p>
			<p>
				The lanyard is something people often keep after an event. It's a fund way to get some
				exposure.
			</p>
			<ul class="perks">
				<li>Your logo next to the Svelte Society/Summit logo on the lanyards</li>
			</ul>
		</li>
		<li class="box stack" style="grid-column: 1 / -1">
			<div class="cluster">
				<h3>💡 Other ideas?</h3>
				<span class="price primary-text">$<data value="X">X</data></span>
			</div>
			<p><span class="sponsor-count">(X left)</span></p>
			<p>
				Sometimes the packages we've designed don't fit the needs of you or your company. We're
				definitely open to modifying already existing ones or creating completely custom made
				packages just for you. Reach out to us and we'll figure something out!
			</p>
			<ul class="perks">
				<li>Make your own perks!</li>
			</ul>
		</li>
	</ul>
	<a href="mailto:sponsors@sveltesummit.com" class="button big primary-bg">Sponsor the conference</a
	>
</section>

<section class="stack center questions">
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
		background: var(--cover-background-dark);
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

	.sponsor-text-link {
		border-bottom: 2px solid var(--primary-color);
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

	.sponsor-count {
		opacity: 0.5;
		margin-left: 1rem;
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
		background: var(--cover-background-dark);
		color: white;
		margin: 0 calc(var(--space) * -1);
		max-width: initial;
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
