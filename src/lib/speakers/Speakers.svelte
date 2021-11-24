<script>
	import AustinCrim from './photos/Austin_Crim.jpg?w=100;200&webp&meta&srcset'
	import BenHolmes from './photos/Ben_Holmes.jpg?w=100;200&webp&meta&srcset'
	import DeanFogarty from './photos/Dean_Fogarty.jpg?w=100;200&webp&meta&srcset'
	import Dominik from './photos/Dominik_G.png?w=100;200&webp&meta&srcset'
	import Evyatar from './photos/Evyatar_Alush.jpeg?w=100;200&webp&meta&srcset'
	import Geoff from './photos/Geoff_Rich.jpg?w=100;200&webp&meta&srcset'
	import JesseSkinner from './photos/Jesse_Skinner.jpg?w=100;200&webp&meta&srcset'
	import Jim from './photos/Jim_Fisk.jpg?w=100;200&webp&meta&srcset'
	import kellen from './photos/Kellen_Mace.jpg?w=100;200&webp&meta&srcset'
	import kenKunz from './photos/Ken_Kunz.jpg?w=100;200&webp&meta&srcset'
	import kevin from './photos/Kevin_Bridges.jpg?w=100;200&webp&meta&srcset'
	import mateo from './photos/Mateo_Morris.jpeg?w=100;200&webp&meta&srcset'
	import scott from './photos/Scott_Tolinski.jpg?w=100;200&webp&meta&srcset'
	import steph from './photos/Steph_Dietz.png?w=100;200&webp&meta&srcset'
	import stephLuz from './photos/Stephanie_Luz.png?w=100;200&webp&meta&srcset'
	import rich from './photos/Rich_Harris.jpeg?w=100;200&webp&meta&srcset'

	let talks = [
		{
			author: [{
							name: "Rich Harris",
							image: rich,
							twitter: "rich_harris"
			}],
			title: "Svelte Cubed",
			text: "The other side of SvelteKit"
		},
		{
			author: [{
							name: "Steph Dietz",
							image: steph,
							twitter: "steph_dietz_"
			}],
			title: "Why Svelte is the best framework for beginner and advanced developers alike",
			text: "With no boilerplate code and little Svelte-specific syntax, Svelte feels just like vanilla JavaScript, making it a great framework for beginners to easily pick up. While it is beginner friendly, it does not sacrifice any best practices or features. In fact, Svelte can do everything other popular frameworks can do and more. Because of this, it is more than just a good starting point for beginners."
		},	
		{
			author: [{
							name: "Scott Tolinski",
							image: scott,
							twitter: "stolinski"
			}],
			title: "From React to Svelte",
			text: "We rewrote our entire platform on Svelte. In this talk, I'll cover the practical techniques, lessons learned and tips and tricks for anyone considering a move."
		},	
		{
			author: [{
							name: "Mateo Morris",
							image: mateo,
							twitter: "_mateomorris"
			}],
			title: "Introducing Primo: a Svelter, all-in-one way to build and manage static sites",
			text: "In this talk I'll show you how you can use Primo (an open-source desktop app) to quickly build interactive, easily editable websites using Svelte. In the process I'll demonstrate how Svelte's powerful features enable both Primo's component-driven development & lean, accessible, fast-loading static sites."
		},			
		{
			author: [{
							name: "Kevin Bridges",
							image: kevin,
							twitter: "kevinast"
			}],
			title: "Responsive Svelte (exploring Svelte's reactivity)",
			text: "The session focuses on better understanding Svelte's reactivity. We will do this from an 'observer perspective' - by visualizing it first-hand (right in your application)!"
		},		
		{
			author: [{
							name: "Dean Fogarty",
							image: DeanFogarty
			}],
			title: "Transforming data to and from storage areas using Svelte custom stores",
			text: "Custom stores can be used to wrap transforming data to and from storage mechanisms, either inside the browser or outside. Here we demonstrate a couple of fun transforms that have practical and real-world use."
		},
		{
			author: [{
							name: "Austin Crim",
							image: AustinCrim,
							twitter: "crim_codes"
			}],
			title: "Skipping Scales to Make Music: Svelte as an Instructional Tool",
			text: "<p>After failing to learn React, Svelte swooped in to rescue my frontend learning journey by allowing me to build things fast. Its syntax was simple and its mental model intuitive. </p><p>Though there is much gnashing of teeth over web development neophytes skipping the fundamentals and going straight to frameworks, I will make the case for why starting Svelte helped changed the arc of my career.</p>"
		},		
		{
			author: [{
							name: "Geoff Rich",
							image: Geoff,
							twitter: "geoffrich_"
			}],
			title: "Svelte Transitions and Accessibility",
			text: "<p>Svelte includes built-in animations that makes it easy to slide, scale, and fly elements in and out of the DOM. However, you need to be careful to not trigger motion sickness in your users. I will go over which Svelte transitions could cause accessibility issues and how to respect user motion preferences when using them.</p><p>We'll iteratively build a solution to change which transition we use when the user requests reduced motion -- first only using CSS, then detecting the user's motion preference in a Svelte component, to finally encapsulating the logic in a reusable Svelte store.</p>"
		},
		{
			author: [{
							name: "Ben Holmes",
							image: BenHolmes,
							twitter: "bholmesdev "
			}],
			title: "The 'how' and 'why' of islands architecture with Svelte + Slinkity",
			text: "<p>I'll be honest here. Svelte didn't capture my attention for its slick templating language, its state management, or really its DX in general. No, I fell in love since the Svelte 2 days because of one dream: finding a runtime-less *disappearing* framework.</p><p>This new trend towards 'partially' hydrating pages with little nuggets, or islands, of interactivity (see Astro) is *built* for such a JS-light approach. So let's discuss why Svelte is my framework of choice for islands architecture, and how 11ty + Slinkity can bring these islands to any HTML template.</p>"
		},			
		{
			author: [{
							name: "Evyatar Alush",
							image: Evyatar,
							twitter: "evyataral"
			}],
			title: "Up your form validation game with Vest",
			text: "<p>Forms were not always a part of the web, in fact, they were only added in HTML2, and even to this day writing them feels like they are an afterthought.</p> <p>Vest is a powerful form validations framework inspired by the syntax and style of unit testing libraries like Mocha or Jest. It uses their declarative structure and makes it easy to write complex form validations that are also easy to read and maintain.</p>"
		},	
		{
			author: [{
							name: "Dominik G.",
							image: Dominik
			}],
			title: "Sveltable Vector Graphics",
			text: "A fresh take on icon libraries."
		},		
		{
			author: [{
							name: "Jesse Skinner",
							image: JesseSkinner,
							twitter: "JesseSkinner"
			}],
			title: "Adding Svelte to your legacy projects",
			text: "Excited to use Svelte, but stuck maintaining a huge React or PHP application? You don't have to rewrite your whole application to get started using Svelte! In this session you'll learn some techniques for adding Svelte to any web project. You'll also see how to reuse your existing JavaScript widgets inside your Svelte components, whether they are React components, or even ancient jQuery plugins!"
		},			
		{
			author: [{
							name: "Kellen Mace",
							image: kellen,
							twitter: "kellenmace"
			}],
			title: "Bringing Svelte to 40% of the Web: Using Wordpress to Power Svelte",
			text: "<p>WordPress is the world's most popular content management system, powering over 40% of all sites on the web– a staggering statistic.</p> <p>In this talk, we'll discuss how we can let content creators keep the excellent editorial workflows that WordPress provides, while leveraging Svelte on the frontend to provide a phenomenal user experience.</p>"
		},		
		{
			author: [{
							name: "Ken Kunz",
							image: kenKunz,
							twitter: "kennethkunz"
			}],
			title: "A State Machine walks into a Svelte Component",
			text: "Finite state machines provide an elegant, powerful approach for modeling complex behavior, and are ideally suited to many UI components. Alas, existing JavaScript FSM implementations feel verbose and bloated alongside Svelte's elegant, minimalist syntax. No more! svelte-fsm is the Svelte-esque FSM library. Discover the joy and benefits of using svelte-fsm to manage your components' state."
		},		
		{
			author: [
				{
					name: "Jim Fisk",
					image: Jim,
					twitter: "jimafisk"
				},
				{
					name: "Stephanie Luz",
					image: stephLuz
				},

			],
			title: "Dreaming of Theming with Svelte using Plenti",
			text: "Plenti is a free and open source static site generator for Svelte. Its simple design makes it great for beginners who are trying to break into tech, but it's also powerful and extremely fast for devs who need to be hyper-focused on being productive. Plenti takes care of common things you need for building websites, including connecting your Svelte components to a data source, client routing, hydrating to a single page app (SPA), and creating HTML fallbacks for each page to improve performance and SEO."
		}
	]
</script>


<section class="stack center">
	<h2 id="speakers">Speakers</h2>
	<hr />
	<ul class="grid">
		{#each talks as {author, title, text}}
			<li>
				<article class="speaker">
					<div class="profile">
						{#each author as {image, name}}
							{#if image.endsWith('svg')}
								<img src={image} alt="Image of {name}" />
							{:else}
								<img srcset={image} type="image/webp" alt="Image of {name}" />
							{/if}
						{/each}
					</div>
					<div class="title">
						{#each author as speaker}
							<address rel="author">{speaker.name}
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
		color: #E4EEF0;
		margin-left:  5px;
	}
	.speaker {
		display: grid;
		grid-template-rows: auto 1fr;
		grid-template-columns: auto 1fr;
		grid-template-areas: 
		    "profile title"
		    "profile text";
		row-gap: 10px;
		column-gap: 20px;
	}
	.profile {
		grid-area: profile;
		display:  flex;
		flex-direction: column;
		gap: 1rem;
	}
	.text {
		color: #D8ECEF;
		min-width: 0;
		grid-area: text;
		font-size:  16px;
		line-height: 1.7;
	}
	.title {
		min-width: 0;
		grid-area: title;
	}
	address, .twitter {
		font-size:  15px;
		color: rgba(215, 236, 239, 0.67);
	}
	h2 {
		scroll-margin-top: 7rem;
	}
	h3 {
		margin-top: 0.5rem;
	}
	img {
		width:  100%;
		max-width:  100px;
		border-radius:  9999px;
	}

	@media screen and (max-width: 850px) {
		.speaker {
			grid-template-areas: 
			    "profile title"
			    "text text";
		}
		img {
			max-width: 50px;
		}
	}
</style>
