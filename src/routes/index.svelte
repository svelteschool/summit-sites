<script context="module">
	export const hydrate = false;
	export const router = false;
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch }) {
		const urls = ['/sponsors.json', '/talks.json']
	
		const [sponsors, talks] = await Promise.all(urls.map(async url => {
		  const resp = await fetch(url);
		  return resp.json();
		}));

			return {
				props: {
					talks,
					sponsors
				}
			};
	}
</script>

<script lang="ts">
	export let talks, sponsors;
	
	import Cover from '$lib/cover/Cover.svelte';
	import Sponsors from '$lib/sponsors/Sponsors.svelte';
	import Speakers from '$lib/speakers/Speakers.svelte';
	import OrganisedBy from '$lib/sponsors/OrganisedBy.svelte';
	import Faq from '$lib/faq/Faq.svelte';
</script>

<svelte:head>
	<title>Svelte Summit Fall 2021</title>
</svelte:head>

<Cover />
<Sponsors {sponsors} />
<Speakers {talks} />
<OrganisedBy />
<Faq />
