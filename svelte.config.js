import adapter from '@sveltejs/adapter-vercel';
import { sveltePreprocessSvg } from '@svitejs/svelte-preprocess-svg';
import preprocess from 'svelte-preprocess';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), sveltePreprocessSvg()],

	browser: {
		hydrate: false,
		router: false
	},

	kit: {
		adapter: adapter({ edge: true }),
		vite: {
			plugins: [imagetools()],
		}
	}
};

export default config;
