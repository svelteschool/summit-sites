<script>
	import AustinCrim from './photos/Austin_Crim.jpg?w=100;200&format=webp;avif;jpg&meta';
	import BenHolmes from './photos/Ben_Holmes.jpg?w=100;200&format=webp;avif;jpg&meta';
	import DeanFogarty from './photos/Dean_Fogarty.jpg?w=100;200&format=webp;avif;jpg&meta';
	import Dominik from './photos/Dominik_G.png?w=100;200&format=webp;avif;jpg&meta';
	import Evyatar from './photos/Evyatar_Alush.jpeg?w=100;200&format=webp;avif;jpg&meta';
	import Geoff from './photos/Geoff_Rich.jpg?w=100;200&format=webp;avif;jpg&meta';
	import JesseSkinner from './photos/Jesse_Skinner.jpg?w=100;200&format=webp;avif;jpg&meta';
	import Jim from './photos/Jim_Fisk.jpg?w=100;200&format=webp;avif;jpg&meta';
	import Kellen from './photos/Kellen_Mace.jpg?w=100;200&format=webp;avif;jpg&meta';
	import KenKunz from './photos/Ken_Kunz.jpg?w=100;200&format=webp;avif;jpg&meta';
	import Kevin from './photos/Kevin_Bridges.jpg?w=100;200&format=webp;avif;jpg&meta';
	import Mateo from './photos/Mateo_Morris.jpeg?w=100;200&format=webp;avif;jpg&meta';
	import Scott from './photos/Scott_Tolinski.jpg?w=100;200&format=webp;avif;jpg&meta';
	import Steph from './photos/Steph_Dietz.png?w=100;200&format=webp;avif;jpg&meta';
	import StephLuz from './photos/Stephanie_Luz.png?w=100;200&format=webp;avif;jpg&meta';
	import Rich from './photos/Rich_Harris.jpeg?w=100;200&format=webp;avif;jpg&meta';
	
	const sortImage = (acc, img) => {
		acc[img.format].push(img)
		return acc;
	}
	
	const imageStructure = () => ({ avif: [], webp: [], jpg: []})
	
	const imageMap = new Map([
		['austin', AustinCrim.reduce(sortImage, imageStructure())],
		['ben', BenHolmes.reduce(sortImage, imageStructure())],
		['dean', DeanFogarty.reduce(sortImage, imageStructure())],
		['dominik', Dominik.reduce(sortImage, imageStructure())],
		['evyatar', Evyatar.reduce(sortImage, imageStructure())],
		['geoff', Geoff.reduce(sortImage, imageStructure())],
		['jesse', JesseSkinner.reduce(sortImage, imageStructure())],
		['jim', Jim.reduce(sortImage, imageStructure())],
		['kellen', Kellen.reduce(sortImage, imageStructure())],
		['ken', KenKunz.reduce(sortImage, imageStructure())],
		['kevin', Kevin.reduce(sortImage, imageStructure())],
		['mateo', Mateo.reduce(sortImage, imageStructure())],
		['scott', Scott.reduce(sortImage, imageStructure())],
		['steph', Steph.reduce(sortImage, imageStructure())],
		['stephLuz', StephLuz.reduce(sortImage, imageStructure())],
		['rich', Rich.reduce(sortImage, imageStructure())],
	])
	
	export let talks;
</script>

<section class="stack center">
	<h2 id="speakers">Speakers</h2>
	<hr />
	<ul class="grid">
		{#each talks as { author, title, text }}
			<li>
				<article class="speaker">
					<div class="profile">
						{#each author as { image, name }}
							<picture>
								{#each Object.values(imageMap.get(image)) as [first, second]}
									<source srcset="{first.src} w{first.width}, {second.src}, w{second.width}" type="image/{first.format}" />
								{/each}
								<img width="100" height="100" src={imageMap.get(image).jpg[1].src} loading="lazy" alt="Image of {name}" />
							</picture>
						{/each}
					</div>
					<div class="title">
						{#each author as speaker}
							<address rel="author">
								{speaker.name}
								{#if speaker.twitter}
									<a
										href="https://twitter.com/{speaker.twitter}"
										target="_blank"
										rel="noopener noreferrer"
										class="twitter with-icon"
										aria-label="{speaker.name} Twitter"
									>
										<svg
											class="icon"
											fill="white"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											><path
												d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
											/>
										</svg>
										Twitter
									</a>
								{/if}
							</address>
						{/each}
						<h3>{title}</h3>
					</div>
					<div class="text">
						{@html text}
					</div>
				</article>
			</li>
		{/each}
	</ul>
</section>

<style>
	.grid {
		grid-gap: 50px;
		--grid-width: 400px;
	}
	.center {
		--max-width: 1180px;
		padding: 0;
	}
	.twitter {
		color: #e4eef0;
		margin-left: 5px;
	}
	.speaker {
		display: grid;
		grid-template-rows: auto 1fr;
		grid-template-columns: auto 1fr;
		grid-template-areas:
			'profile title'
			'profile text';
		row-gap: 10px;
		column-gap: 20px;
	}
	.profile {
		grid-area: profile;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.text {
		color: #d8ecef;
		min-width: 0;
		grid-area: text;
		font-size: 16px;
		line-height: 1.7;
	}
	.title {
		min-width: 0;
		grid-area: title;
	}
	address,
	.twitter {
		font-size: 15px;
		color: rgba(215, 236, 239, 0.67);
	}
	h2 {
		scroll-margin-top: 7rem;
	}
	h3 {
		margin-top: 0.5rem;
	}
	img {
		width: 100%;
		max-width: 100px;
		border-radius: 9999px;
	}

	@media screen and (max-width: 850px) {
		.speaker {
			grid-template-areas:
				'profile title'
				'text text';
		}
		img {
			max-width: 50px;
		}
	}
</style>
