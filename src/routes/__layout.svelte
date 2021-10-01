<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../styles/app.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
