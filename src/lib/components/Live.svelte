<script>
	export let id = '';
</script>

<div class="background" id="live">
	<div class="container">
		<h2>
			Watch it
			<span class="live">LIVE</span>
			on
			<a href="hhttps://www.youtube.com/watch?v={id}" rel="noreferrer" target="_blank">YouTube</a>!
		</h2>
		<iframe
			title="Svelte Summit Live YouTube Video"
			width="840"
			height="420"
			src="https://www.youtube.com/embed/{id}"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
</div>

<style>
	.background {
		text-align: center;
	}
	iframe {
		max-width: 100%;
	}
</style>
