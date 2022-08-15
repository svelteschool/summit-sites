export const get = () => {
	const sponsors = {
		platinum: [
			{
				url: 'https://netlify.com',
				name: 'Netlify',
				desc: 'Netlify, the platform for modern web development.',
				image: 'netlify'
			},
			{
				url: 'https://vercel.com',
				name: 'Vercel',
				desc: 'Vercel is the easiest way to deploy your Svelte apps.',
				image: 'vercel'
			},
			{
				url: 'https://graphcms.com/?utm_source=website&utm_medium=Referral&utm_campaign=SvelteSummit',
				name: 'Hygraph',
				desc: "Hygraph (previously GraphCMS) is the enterprise-grade federated content platform that enables ambitious digital products at scale.",
				image: 'hygraph'
			}
		],
		gold: [
			{
				url: 'https://www.storyblok.com/?utm_source=sveltesummit&utm_medium=logo&utm_campaign=sveltesummit2022',
				name: 'Storyblok',
				desc: 'Storyblok is a Headless CMS that helps developers leverage the advantages of Svelte using reusable components and real-time visual editor.',
				image: 'storyblok'
			},
			{
				url: 'https://monogram.io',
				name: 'Monogram',
				desc: 'Digital agency designing and developing the best Jamstack websites and web apps.',
				image: 'monogram'
			},
			{
				url: 'https://array.com/company/about-us',
				name: 'Array',
				desc: 'A financial wellness and identity tool that allows businesses  to leverage consumers credit data to offer new tailored services and products to their end users',
				image: 'array'
			},
			{
				url: 'http://smore.com/',
				name: 'Smore',
				desc: `Smore makes it easy to design beautiful and effective online newsletters. Smore helps more than 70% of the school districts in North America to communicate on a daily basis with their staff, parents and community.`,
				image: 'smore'
			},
			{},
			{}
			// {
			// 	url: 'https://javascriptdb.com/?ctx=svelte-summit',
			// 	name: 'JavascriptDB',
			// 	desc: 'Use javascript as a database. Build low code serverless applications faster than ever.',
			// 	image: 'jsdb'
			// },
		]
	};

	return {
		status: 200,
		body: sponsors
	};
};
