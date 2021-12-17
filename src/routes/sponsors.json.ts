export const get = () => {
	const sponsors = {
		platinum: [
			{
				url: 'https://graphcms.com/?utm_source=website&utm_medium=Referral&utm_campaign=SvelteSummit',
				name: 'GraphCMS',
				desc: 'GraphCMS gives you instant GraphQL Content APIs to create, enrich, federate, and deliver your content across platforms.',
				image: 'graphcms'
			}
		],
		gold: [
			{
				url: 'https://leveluptutorials.com',
				name: 'Level Up Tuts',
				desc: 'Cutting-edge, focused & high quality video tutorials for web developers and designers',
				image: 'leveluptuts'
			},
			{
				url: 'https://pages.cloudflare.com/ ',
				name: 'Cloudflare Pages',
				desc: 'Build lighting fast Jamstack sites with Cloudflare Pages',
				image: 'cloudflare'
			},
			{
				url: 'https://svekyll.com/?mtm_campaign=Svelte%20Summit',
				name: 'Svekyll',
				desc: 'Svekyll: the fastest and most powerful blog, hosted by ExtraStatic',
				image: 'svekyll'
			},
			{
				url: 'https://netlify.com',
				name: 'Netlify',
				desc: 'Netlify is the most popular way to build, deploy and scale modern web applications.',
				image: 'netlify'
			},
			{
				url: 'https://vercel.com',
				name: 'Vercel',
				desc: 'Vercel is the easiest way to deploy your Svelte apps.',
				image: 'vercel'
			},
			{
				url: 'https://go.magic.link/svelte-summit',
				name: 'Magic Labs, Inc.',
				desc: 'Magic is the simplest way to add future-proof auth to your Svelte apps.',
				image: 'magic'
			},
			{
				url: 'https://fauna.com/?utm_source=svelte+summit+&utm_medium=website+&utm_campaign=Q4+2021&utm_id=events+',
				name: 'Fauna',
				desc: 'Fauna: The data API for modern applications.',
				image: 'fauna'
			},
			{
				url: 'https://wpengine.com/atlas/',
				name: 'WPEngine',
				desc: 'The complete headless WordPress platform for absurdly fast sites',
				image: 'wpengine'
			}
		]
	};

	return {
		status: 200,
		body: sponsors
	};
};
