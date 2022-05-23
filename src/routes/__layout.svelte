<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../styles/app.css';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Svelte Summit Fall 2022: The First In-person Svelte only conference</title>
	<meta
		content="Svelte Summit Fall 2022: The first in-person Svelte only conference"
		name="title"
	/>
	<meta content="The first in-person Svelte only conference." name="description" />

	<!-- Open Graph / Facebook -->
	<meta content="website" property="og:type" />
	<meta content="https://sveltesummit.com/" property="og:url" />
	<meta
		content="Svelte Summit Fall 2022: The first in-person Svelte only conference"
		property="og:title"
	/>
	<meta content="The first in-person Svelte only conference." property="og:description" />
	<meta content="https://sveltesummit.com/metaimg-fall22.png?2382623234843" property="og:image" />

	<!-- Twitter -->
	<meta content="summary_large_image" property="twitter:card" />
	<meta content="https://sveltesummit.com/" property="twitter:url" />
	<meta
		content="Svelte Summit Fall 2022: The first in-person Svelte only conference"
		property="twitter:title"
	/>
	<meta content="The first in-person Svelte only conference." property="twitter:description" />
	<meta
		content="https://sveltesummit.com/metaimg-fall22.png?23822342346843"
		property="twitter:image"
	/>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />

<Banner />
