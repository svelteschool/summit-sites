export const get = () => {
	const sponsors = {
		platinum: [
			{
				url: 'https://monogram.io',
				name: 'Monogram',
				desc: 'Digital agency designing and developing the best Jamstack websites and web apps.',
				image: 'monogram'
			},
			{},
			{}
		],
		gold: Array.from(Array(6).keys()),
		silver: Array.from(Array(10).keys()),
	};

	return {
		status: 200,
		body: sponsors
	};
};
