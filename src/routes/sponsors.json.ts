export const get = () => {
	const sponsors = {
		platinum: [
			{
				url: 'https://monogram.io',
				name: 'Monogram',
				desc: 'Digital agency designing and developing the best Jamstack websites and web apps.',
				image: 'monogram'
			},
			{
				url: 'https://graphcms.com/?utm_source=website&utm_medium=Referral&utm_campaign=SvelteSummit',
				name: 'GraphCMS',
				desc: 'GraphCMS gives you instant GraphQL Content APIs to create, enrich, federate, and deliver your content across platforms.',
				image: 'graphcms'
			},
			{
				url: 'https://vercel.com',
				name: 'Vercel',
				desc: 'Vercel is the easiest way to deploy your Svelte apps.',
				image: 'vercel'
			},
		],
		gold: [
			{
				url: 'https://www.storyblok.com/?utm_source=sveltesummit&utm_medium=logo&utm_campaign=sveltesummit2022',
				name: 'Storyblok',
				desc: 'Storyblok is a Headless CMS that helps developers leverage the advantages of Svelte using reusable components and real-time visual editor.',
				image: 'storyblok'
			},
			{},
			{},
			{},
			{},
			{}
		],
		silver: Array.from(Array(8).keys()),
	};

	return {
		status: 200,
		body: sponsors
	};
};
