<script lang="ts">
	import Cover from '$lib/cover/Cover.svelte';
	import Sponsors from '$lib/sponsors/Sponsors.svelte';
	import Speakers from '$lib/speakers/Speakers.svelte';
	import CTA from '$lib/CTA.svelte';
	import OrganisedBy from '$lib/sponsors/OrganisedBy.svelte';
	import Faq from '$lib/faq/Faq.svelte';
</script>

<svelte:head>
	<title>Svelte Summit Fall 2021</title>
</svelte:head>

<Cover />
<Sponsors />
<Speakers />
<OrganisedBy />
<Faq />
