export const get = () => {
	const talks = [
		{
			author: [
				{
					name: 'Rich Harris',
					image: 'rich',
					twitter: 'rich_harris'
				}
			],
			title: 'Svelte Cubed',
			text: 'The other side of SvelteKit'
		},
		{
			author: [
				{
					name: 'Steph Dietz',
					image: 'steph',
					twitter: 'steph_dietz_'
				}
			],
			title: 'Why Svelte is the best framework for beginner and advanced developers alike',
			text: 'With no boilerplate code and little Svelte-specific syntax, Svelte feels just like vanilla JavaScript, making it a great framework for beginners to easily pick up. While it is beginner friendly, it does not sacrifice any best practices or features. In fact, Svelte can do everything other popular frameworks can do and more. Because of this, it is more than just a good starting point for beginners.'
		},
		{
			author: [
				{
					name: 'Scott Tolinski',
					image: 'scott',
					twitter: 'stolinski'
				}
			],
			title: 'From React to Svelte',
			text: "We rewrote our entire platform on Svelte. In this talk, I'll cover the practical techniques, lessons learned and tips and tricks for anyone considering a move."
		},
		{
			author: [
				{
					name: 'Mateo Morris',
					image: 'mateo',
					twitter: '_mateomorris'
				}
			],
			title: 'Introducing Primo: a Svelter, all-in-one way to build and manage static sites',
			text: "In this talk I'll show you how you can use Primo (an open-source desktop app) to quickly build interactive, easily editable websites using Svelte. In the process I'll demonstrate how Svelte's powerful features enable both Primo's component-driven development & lean, accessible, fast-loading static sites."
		},
		{
			author: [
				{
					name: 'Kevin Bridges',
					image: 'kevin',
					twitter: 'kevinast'
				}
			],
			title: "Responsive Svelte (exploring Svelte's reactivity)",
			text: "The session focuses on better understanding Svelte's reactivity. We will do this from an 'observer perspective' - by visualizing it first-hand (right in your application)!"
		},
		{
			author: [
				{
					name: 'Dean Fogarty',
					image: 'dean'
				}
			],
			title: 'Transforming data to and from storage areas using Svelte custom stores',
			text: 'Custom stores can be used to wrap transforming data to and from storage mechanisms, either inside the browser or outside. Here we demonstrate a couple of fun transforms that have practical and real-world use.'
		},
		{
			author: [
				{
					name: 'Austin Crim',
					image: 'austin',
					twitter: 'crim_codes'
				}
			],
			title: 'Skipping Scales to Make Music: Svelte as an Instructional Tool',
			text: '<p>After failing to learn React, Svelte swooped in to rescue my frontend learning journey by allowing me to build things fast. Its syntax was simple and its mental model intuitive. </p><p>Though there is much gnashing of teeth over web development neophytes skipping the fundamentals and going straight to frameworks, I will make the case for why starting Svelte helped changed the arc of my career.</p>'
		},
		{
			author: [
				{
					name: 'Geoff Rich',
					image: 'geoff',
					twitter: 'geoffrich_'
				}
			],
			title: 'Svelte Transitions and Accessibility',
			text: "<p>Svelte includes built-in animations that makes it easy to slide, scale, and fly elements in and out of the DOM. However, you need to be careful to not trigger motion sickness in your users. I will go over which Svelte transitions could cause accessibility issues and how to respect user motion preferences when using them.</p><p>We'll iteratively build a solution to change which transition we use when the user requests reduced motion -- first only using CSS, then detecting the user's motion preference in a Svelte component, to finally encapsulating the logic in a reusable Svelte store.</p>"
		},
		{
			author: [
				{
					name: 'Ben Holmes',
					image: 'ben',
					twitter: 'bholmesdev '
				}
			],
			title: "The 'how' and 'why' of islands architecture with Svelte + Slinkity",
			text: "<p>I'll be honest here. Svelte didn't capture my attention for its slick templating language, its state management, or really its DX in general. No, I fell in love since the Svelte 2 days because of one dream: finding a runtime-less *disappearing* framework.</p><p>This new trend towards 'partially' hydrating pages with little nuggets, or islands, of interactivity (see Astro) is *built* for such a JS-light approach. So let's discuss why Svelte is my framework of choice for islands architecture, and how 11ty + Slinkity can bring these islands to any HTML template.</p>"
		},
		{
			author: [
				{
					name: 'Evyatar Alush',
					image: 'evyatar',
					twitter: 'evyataral'
				}
			],
			title: 'Up your form validation game with Vest',
			text: '<p>Forms were not always a part of the web, in fact, they were only added in HTML2, and even to this day writing them feels like they are an afterthought.</p> <p>Vest is a powerful form validations framework inspired by the syntax and style of unit testing libraries like Mocha or Jest. It uses their declarative structure and makes it easy to write complex form validations that are also easy to read and maintain.</p>'
		},
		{
			author: [
				{
					name: 'Dominik G.',
					image: 'dominik'
				}
			],
			title: 'Sveltable Vector Graphics',
			text: 'A fresh take on icon libraries.'
		},
		{
			author: [
				{
					name: 'Jesse Skinner',
					image: 'jesse',
					twitter: 'JesseSkinner'
				}
			],
			title: 'Adding Svelte to your legacy projects',
			text: "Excited to use Svelte, but stuck maintaining a huge React or PHP application? You don't have to rewrite your whole application to get started using Svelte! In this session you'll learn some techniques for adding Svelte to any web project. You'll also see how to reuse your existing JavaScript widgets inside your Svelte components, whether they are React components, or even ancient jQuery plugins!"
		},
		{
			author: [
				{
					name: 'Kellen Mace',
					image: 'kellen',
					twitter: 'kellenmace'
				}
			],
			title: 'Bringing Svelte to 40% of the Web: Using Wordpress to Power Svelte',
			text: "<p>WordPress is the world's most popular content management system, powering over 40% of all sites on the web– a staggering statistic.</p> <p>In this talk, we'll discuss how we can let content creators keep the excellent editorial workflows that WordPress provides, while leveraging Svelte on the frontend to provide a phenomenal user experience.</p>"
		},
		{
			author: [
				{
					name: 'Ken Kunz',
					image: 'ken',
					twitter: 'kennethkunz'
				}
			],
			title: 'A State Machine walks into a Svelte Component',
			text: "Finite state machines provide an elegant, powerful approach for modeling complex behavior, and are ideally suited to many UI components. Alas, existing JavaScript FSM implementations feel verbose and bloated alongside Svelte's elegant, minimalist syntax. No more! svelte-fsm is the Svelte-esque FSM library. Discover the joy and benefits of using svelte-fsm to manage your components' state."
		},
		{
			author: [
				{
					name: 'Jim Fisk',
					image: 'jim',
					twitter: 'jimafisk'
				},
				{
					name: 'Stephanie Luz',
					image: 'stephLuz'
				}
			],
			title: 'Dreaming of Theming with Svelte using Plenti',
			text: "Plenti is a free and open source static site generator for Svelte. Its simple design makes it great for beginners who are trying to break into tech, but it's also powerful and extremely fast for devs who need to be hyper-focused on being productive. Plenti takes care of common things you need for building websites, including connecting your Svelte components to a data source, client routing, hydrating to a single page app (SPA), and creating HTML fallbacks for each page to improve performance and SEO."
		}
	];

	return {
		status: 200,
		body: talks
	};
};
