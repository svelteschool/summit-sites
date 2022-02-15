<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../styles/app.css';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Svelte Summit Spring 2022: The 5th Svelte only conference</title>
	<meta content="Svelte Summit Spring 2022: The 5th Svelte only conference" name="title" />
	<meta
		content="Svelte Summit is an online JavaScript event focused on Svelte and its community taking place on April 30th 2022."
		name="description"
	/>

	<!-- Open Graph / Facebook -->
	<meta content="website" property="og:type" />
	<meta content="https://sveltesummit.com/" property="og:url" />
	<meta content="Svelte Summit Spring 2022: The 5th Svelte only conference" property="og:title" />
	<meta
		content="Svelte Summit is an online JavaScript event focused on Svelte and its community taking place on April 30th 2022."
		property="og:description"
	/>
	<meta content="https://sveltesummit.com/metatagimg-spring.png?23826843" property="og:image" />

	<!-- Twitter -->
	<meta content="summary_large_image" property="twitter:card" />
	<meta content="https://sveltesummit.com/" property="twitter:url" />
	<meta
		content="Svelte Summit Spring 2022: The 5th Svelte only conference"
		property="twitter:title"
	/>
	<meta
		content="Svelte Summit is an online JavaScript event focused on Svelte and its community taking place on April 30th 2022."
		property="twitter:description"
	/>
	<meta
		content="https://sveltesummit.com/metatagimg-spring.png?23826843"
		property="twitter:image"
	/>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />
