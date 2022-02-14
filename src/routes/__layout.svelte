<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../styles/app.css';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Svelte Summit Fall 2021: The 4th Svelte only conference</title>
	<meta content="Svelte Summit Fall 2021: The 4th Svelte only conference" name="title"/>
	<meta
			content="Svelte Summit is an online JavaScript event focused on Svelte and its community taking place on November 20th 2021."
			name="description"
	/>

	<!-- Open Graph / Facebook -->
	<meta content="website" property="og:type"/>
	<meta content="https://sveltesummit.com/" property="og:url"/>
	<meta content="Svelte Summit Fall 2021: The 4th Svelte only conference" property="og:title"/>
	<meta
			content="Svelte Summit is an online JavaScript event focused on Svelte and its community taking place on November 20th 2021."
			property="og:description"
	/>
	<meta content="https://sveltesummit.com/metatagimg-fall.png" property="og:image"/>

	<!-- Twitter -->
	<meta content="summary_large_image" property="twitter:card"/>
	<meta content="https://sveltesummit.com/" property="twitter:url"/>
	<meta
			content="Svelte Summit Fall 2021: The 4th Svelte only conference"
			property="twitter:title"
	/>
	<meta
			content="Svelte Summit is an online JavaScript event focused on Svelte and its community taking place on November 20th 2021."
			property="twitter:description"
	/>
	<meta content="https://sveltesummit.com/metatagimg-fall.png" property="twitter:image"/>
</svelte:head>

<Header/>

<main>
	<slot/>
</main>

<Footer/>
