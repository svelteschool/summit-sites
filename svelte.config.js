import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocessSvg } from '@svitejs/svelte-preprocess-svg';
import preprocess from 'svelte-preprocess';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), sveltePreprocessSvg()],

	kit: {
		adapter: adapter(),
		vite: {
			plugins: [imagetools()],
			define: {
				'process.env.EMAIL_API_KEY': JSON.stringify(
					process.env['EMAIL_API_KEY'] || EMAIL_API_KEY
				)
			}
		}
	}
};

export default config;
