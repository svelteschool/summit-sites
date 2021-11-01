<script lang="ts">
	import Cover from '$lib/cover/Cover.svelte';
	import Sponsors from '$lib/sponsors/Sponsors.svelte';
	import CTA from '$lib/CTA.svelte';
	import OrganisedBy from '$lib/sponsors/OrganisedBy.svelte';
	import Faq from '$lib/faq/Faq.svelte';
</script>

<svelte:head>
	<title>Svelte Summit Fall 2021</title>
</svelte:head>

<Cover />
<Sponsors />
<CTA
	title="Call for Submissions has closed!"
	text="We're currently going through the submissions and will soon update the page with more information. Stay tuned."
	id="speakers"
/>
<OrganisedBy />
<Faq />
