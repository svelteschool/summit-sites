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
	<title>Svelte Summit Spring 2022</title>
</svelte:head>

<Cover />
<CTA
	title="We're looking for more speakers!"
	text="We’re looking for people who want to speak about Svelte related topics during our virtual conference. Talks are pre-recorded beforehand and can either be 25 or 5-10 minutes long. Your talk must be about Svelte in some way."
	href="https://sessionize.com/svelte-summit-fall-2022/"
	id="speakers"
/>
<Sponsors {sponsors} />
<Speakers {speakers} />
<Faq />
