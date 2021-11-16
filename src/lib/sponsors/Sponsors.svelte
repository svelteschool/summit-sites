<script>
	// Sponsor images
	import graphcms from './images/graphcms.png';
	import leveluptuts from './images/leveluptuts.svg';
	import cloudflare from './images/cloudflare.svg';
	import svekyll from './images/svekyll.png';
	import netlify from './images/netlify.svg';
	import vercel from './images/vercel.svg';
	import magic from './images/magic.svg';
	import fauna from './images/fauna.svg';
	import wpengine from './images/wpengine.png';

	let platinum = [
		{
			url: 'https://graphcms.com/?utm_source=website&utm_medium=Referral&utm_campaign=SvelteSummit',
			name: 'GraphCMS',
			desc: 'GraphCMS gives you instant GraphQL Content APIs to create, enrich, federate, and deliver your content across platforms.',
			image: graphcms
		}
	];

	// Gold sponsors
	let gold = [
		{
			url: 'https://leveluptutorials.com',
			name: 'Level Up Tuts',
			desc: 'Cutting-edge, focused & high quality video tutorials for web developers and designers',
			image: leveluptuts
		},
		{
			url: 'https://pages.cloudflare.com/ ',
			name: 'Cloudflare Pages',
			desc: 'Build lighting fast Jamstack sites with Cloudflare Pages',
			image: cloudflare
		},
		{
			url: 'https://svekyll.com/?mtm_campaign=Svelte%20Summit',
			name: 'Svekyll',
			desc: 'Svekyll: the fastest and most powerful blog, hosted by ExtraStatic',
			image: svekyll
		},
		{
			url: 'https://netlify.com',
			name: 'Netlify',
			desc: 'Netlify is the most popular way to build, deploy and scale modern web applications.',
			image: netlify
		},
		{
			url: 'https://vercel.com',
			name: 'Vercel',
			desc: 'Vercel is the easiest way to deploy your Svelte apps.',
			image: vercel
		},
		{
			url: 'https://go.magic.link/svelte-summit',
			name: 'Magic Labs, Inc.',
			desc: 'Magic is the simplest way to add future-proof auth to your Svelte apps.',
			image: magic
		},
		{
			url: 'https://fauna.com/?utm_source=svelte+summit+&utm_medium=website+&utm_campaign=Q4+2021&utm_id=events+',
			name: 'Fauna',
			desc: 'Fauna: The data API for modern applications.',
			image: fauna
		},
		{
			url: 'https://wpengine.com/atlas/',
			name: 'WPEngine',
			desc: 'The complete headless WordPress platform for absurdly fast sites',
			image: wpengine
		}
	];
</script>

<section class="stack" id="sponsors">
	<h2>Sponsors</h2>
	<hr />
	<div class="platinums">
		{#each platinum as { url, name, desc, image }}
			{#if name}
				<a
					href={url}
					class="platinum sponsor"
					rel="noopener noreferrer"
					target="_blank"
					data-tooltip={desc}
				>
					<img src={image} alt="{name} logo" />
				</a>
			{:else}
				<a href="/sponsors" class="gold sponsor">Gold 🥇</a>
			{/if}
		{/each}
	</div>
	<div class="sponsors golds">
		{#each gold as { url, name, desc, image }}
			{#if name}
				<a
					href={url}
					class="gold sponsor"
					rel="noopener noreferrer"
					target="_blank"
					data-tooltip={desc}
				>
					<img src={image} alt="{name} logo" />
				</a>
			{:else}
				<a href="/sponsors" class="gold sponsor">Gold 🥇</a>
			{/if}
		{/each}
	</div>
	<!-- <div class="sponsors silvers">
		<a href="/sponsors" class="silver sponsor"><img src={svelteschool} alt="Svelte School Sponsor" /></a>
		<a href="/sponsors" class="silver sponsor">Silver 🥈</a>
		<a href="/sponsors" class="silver sponsor">Silver 🥈</a>
		<a href="/sponsors" class="silver sponsor">Silver 🥈</a>
		<a href="/sponsors" class="silver sponsor">Silver 🥈</a>
	</div> -->
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
		padding: 1rem;
	}

	.sponsor img {
		width: 100%;
	}
	
	.platinum {
		min-height:  250px;
	}

	.gold {
		min-height:  150px;
	}

	.platinum img {
		max-width: 350px;
	}

	.gold img {
		max-width: 150px;
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

	[data-tooltip] {
		position: relative;
	}
	[data-tooltip]:before,
	[data-tooltip]:after {
		position: absolute;
		visibility: hidden;
		opacity: 0;
		-webkit-transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
			-webkit-transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
		-moz-transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
			-moz-transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
		transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out,
			transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24);
		-webkit-transform: translate3d(0, 0, 0);
		-moz-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		pointer-events: none;
	}
	[data-tooltip]:hover:before,
	[data-tooltip]:hover:after,
	[data-tooltip]:focus:before,
	[data-tooltip]:focus:after {
		visibility: visible;
		opacity: 1;
	}
	[data-tooltip]:after {
		z-index: 1000;
		padding: 8px;
		width: 260px;
		background-color: rgba(0, 0, 0, 1);
		border-radius: 4px;
		color: #fff;
		font-weight: normal;
		content: attr(data-tooltip);
		font-size: 14px;
		line-height: 1.2;
	}
	[data-tooltip]:before,
	[data-tooltip]:after {
		top: 105%;
		left: 50%;
		transform: translate(-50%, 0);
	}
</style>
