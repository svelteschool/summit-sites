<script lang="ts">
	import logo from './logo.svg';

	import EmailSignup from './EmailSignup.svelte';
	// import Live from '$lib/components/Live.svelte';
</script>

<section class="cover" id="intro">
	<img class="logo center" width="109" height="120" src={logo} alt="Svelte Society Presents" />
	<!-- <div class="center">
		<Live id="qqj2cBockqE" />
	</div> -->
	<h1 class="heading center">
		<span class="title">Svelte Summit<br /><span class="highlight-text">Fall</span></span>
		<small>
			<time datetime="2022-09-08">Sep 8-9 2022</time>
			<span class="subheading">Stockholm Sweden</span>
		</small>
	</h1>
	<div class="center">
		<!-- <a href="https://www.youtube.com/watch?v=qqj2cBockqE" target="_blank" rel="noopener norefferer"
			>Watch it on YouTube</a
		> -->
		<EmailSignup />
	</div>
</section>

<style>
	.cover {
		position: relative;
		background-image: url('/bg.svg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
	}

	section {
		position: relative;
		background: var(--cover-background-dark);
		overflow: hidden;
		margin: 0 calc(var(--space) * -1);
		padding: 8rem 0.5rem 4rem 0.5rem;
	}

	@media (min-width: 950px) {
		.cover h1 {
			transform: translate(7.5%, 0);
		}
	}

	.logo {
		max-height: 120px;
	}

	.heading {
		font-family: var(--font-leading);
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
		align-items: start;
		min-width: 0;
	}

	.title {
		color: #fff;
		text-transform: uppercase;
		text-align: right;
		word-spacing: 9999rem;
		font-size: 7rem;
		line-height: 1;
	}

	small {
		text-transform: uppercase;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 4px;
	}

	time {
		color: #fff;
		max-width: 8ch;
		font-size: 3.24rem;
		line-height: 1;
	}

	.subheading {
		max-width: 8ch;
		font-size: 3.24rem;
		line-height: 1.05;
		margin-top: 9px;
		color: var(--primary-color);
	}

	@media (max-width: 600px) {
		.heading {
			grid-template-columns: 1fr;
		}
		.title {
			text-align: center;
			font-size: clamp(20px, 20vw, 80px);
		}

		small {
			text-align: center;
			align-items: center;
		}

		time {
			max-width: initial;
			font-size: clamp(15px, 15vw, 60px);
		}

		.subheading {
			max-width: 16ch;
			font-size: clamp(12px, 10vw, 40px);
		}
	}
</style>
