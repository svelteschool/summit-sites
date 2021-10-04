<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../styles/app.css';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Svelte Summit Fall 2021: The 4th Svelte only conference</title>
	<meta name="title" content="Svelte Summit Fall 2021: The 4th Svelte only conference" />
	<meta
		name="description"
		content="Svelte Summit is an online JavaScript event focused on Svelte and its community taking place on November 20th 2021."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sveltesummit.com/" />
	<meta property="og:title" content="Svelte Summit Fall 2021: The 4th Svelte only conference" />
	<meta
		property="og:description"
		content="Svelte Summit is an online JavaScript event focused on Svelte and its community taking place on November 20th 2021."
	/>
	<meta property="og:image" content="https://sveltesummit.com/metatagimg-fall.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://sveltesummit.com/" />
	<meta
		property="twitter:title"
		content="Svelte Summit Fall 2021: The 4th Svelte only conference"
	/>
	<meta
		property="twitter:description"
		content="Svelte Summit is an online JavaScript event focused on Svelte and its community taking place on November 20th 2021."
	/>
	<meta property="twitter:image" content="https://sveltesummit.com/metatagimg-fall.png" />
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />
