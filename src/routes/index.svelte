<script lang="ts">
	import Cover from '$lib/test/Cover.svelte';
	import Sponsors from '$lib/sponsors/Sponsors.svelte';
	import CTA from '$lib/CTA.svelte';
	import OrganisedBy from '$lib/sponsors/OrganisedBy.svelte';
	import Faq from '$lib/faq/Faq.svelte';
</script>

<svelte:head>
	<title>Svelte Summit Fall 2021</title>
</svelte:head>

<Cover />
<CTA
	title="We're looking for more speakers!"
	text="We’re looking for people who want to speak about Svelte related topics during our virtual conference. Talks are pre-recorded beforehand and can either be 25 or 5-10 minutes long. Your talk must be about Svelte in some way."
	href="https://sessionize.com/svelte-summit-fall-2021/"
	id="speakers"
/>
<Sponsors />
<OrganisedBy />
<Faq />
