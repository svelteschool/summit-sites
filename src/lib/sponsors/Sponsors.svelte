<script>
	// Sponsor images
	// import monogram from './images/monogram.png';
	// import storyblok from './images/storyblok.png';
	// import array from './images/array.png';
	// import cloudflare from './images/cloudflare.svg';
	// import netlify from './images/netlify.png';
	// import graphcms from './images/graphcms.png';
	// import vercel from './images/vercel.png';
	// import jsdb from './images/jsdb.svg';
	// import fauna from './images/fauna.svg';
	// import wpengine from './images/wpengine.png?w=300&webp';

	const imageMap = new Map([
		// ['monogram', monogram],
		// ['storyblok', storyblok],
		// ['array', array],
		// ['cloudflare', cloudflare],
		// ['netlify', netlify],
		// ['graphcms', graphcms],
		// ['vercel', vercel],
		// ['jsdb', jsdb]
		// ['magic', magic],
		// ['fauna', fauna],
		// ['wpengine', wpengine],
	]);
	export let sponsors;
</script>

<section class="stack" id="sponsors">
	<h2>Sponsors</h2>
	<hr />
	<div class="sponsors platinums">
		{#each sponsors.platinum as { url, name, desc, image }}
			{#if name}
				<a
					href={url}
					class="platinum sponsor"
					rel="noopener noreferrer"
					target="_blank"
					data-tooltip={desc}
					aria-label={name}
				>
					<img height="150" src={imageMap.get(image)} alt="{name} logo" />
				</a>
			{:else}
				<a href="/sponsors" class="platinum sponsor">Platinum 💎</a>
			{/if}
		{/each}
	</div>
	<div class="sponsors golds">
		{#each sponsors.gold as { url, name, desc, image }}
			{#if name}
				<a
					href={url}
					class="gold sponsor"
					rel="noopener noreferrer"
					target="_blank"
					data-tooltip={desc}
				>
					<img height="64" src={imageMap.get(image)} alt="{name} logo" />
				</a>
			{:else}
				<a href="/sponsors" class="gold sponsor">Gold 🥇</a>
			{/if}
		{/each}
	</div>
	<!-- <div class="sponsors silvers">
		{#each sponsors.silver as { url, name, desc, image }}
			{#if name}
				<a
					href={url}
					class="silver sponsor"
					rel="noopener noreferrer"
					target="_blank"
					data-tooltip={desc}
				>
					<img height="64" src={imageMap.get(image)} alt="{name} logo" />
				</a>
			{:else}
				<a href="/sponsors" class="silver sponsor">Silver 🥈</a>
			{/if}
		{/each}
	</div> -->
	<div><a href="/sponsors" class="button">Become a sponsor</a></div>
</section>

<style>
	section {
		padding: 6rem 0;
	}
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
		padding: 2rem;
		cursor: pointer;
	}

	.platinums {
		grid-template-columns: 1fr;
	}

	.platinum {
		min-height: 150px;
	}

	.gold {
		padding: 1rem;
		height: 150px;
	}

	.silver {
		min-height: 100px;
	}

	.platinum img {
		max-height: 100px;
	}

	.gold img {
		max-width: 200px;
	}
	.golds {
		grid-template-columns: repeat(auto-fit, minmax(250px, 0.5fr));
	}
	.silvers {
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}

	@media screen and (max-width: 600px) {
		.golds {
			grid-template-columns: 1fr 1fr;
		}
		.silvers {
			grid-template-columns: 1fr 1fr 1fr;
		}
		.gold {
			height: 100px;
		}
		.gold img {
			max-width: 100px;
		}

		.sponsors {
			gap: 10px;
		}
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
