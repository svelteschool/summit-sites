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
<!-- <CTA
	title="Get your tickets now!"
	text="There are just a couple of more weeks left to get your tickets at the regular price. Get yours now, before the price goes up!"
	href="https://ti.to/svelte/svelte-summit-fall-edition"
	id="ticket-cta"
/> -->
<Sponsors {sponsors} />
<Speakers {speakers} />
<Faq />
