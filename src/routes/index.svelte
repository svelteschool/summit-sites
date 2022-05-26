<script context="module">
	export const hydrate = false;
	export const router = false;
	export const prerender = true;

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const urls = ['/sponsors.json', '/speakers.json'];

		const [sponsors, speakers] = await Promise.all(
			urls.map(async (url) => {
				const resp = await fetch(url);
				return resp.json();
			})
		);

		return {
			props: {
				sponsors,
				speakers
			}
		};
	}
</script>

<script lang="ts">
	export let speakers, sponsors;

	import Cover from '$lib/cover/Cover.svelte';
	import CTA from '$lib/CTA.svelte';
	import Sponsors from '$lib/sponsors/Sponsors.svelte';
	import Speakers from '$lib/speakers/Speakers.svelte';

	import Faq from '$lib/faq/Faq.svelte';
</script>

<svelte:head>
	<title>Svelte Summit Fall 2022</title>
</svelte:head>

<Cover />
<CTA
	title="We're looking for more speakers!"
	text="We’re looking for people who want to speak about Svelte related topics during our conference. Talks should be 30 minutes long. Accommodation and travel will be paid for."
	href="https://sessionize.com/svelte-summit-fall-2022/"
	id="cfp"
/>
<Sponsors {sponsors} />
<Speakers {speakers} />
<Faq />
