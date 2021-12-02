<script lang="typescript">
	import logo from './logo.svg';
	import leaves from './leaves.svg';

	import EmailSignup from './EmailSignup.svelte';
</script>

<section class="cover cover-light-bg" id="intro">
	<img class="logo center" width="109" height="120" src={logo} alt="Svelte Society Presents" />
	<h1 class="heading center">
		<span class="title">Svelte <span class="highlight-text">Fall<br />Summit</span></span>
		<small>
			<time datetime="2021-11-20">Nov 20 2021</time>
			<span class="subheading">The 4th virtual conference about Svelte</span>
			<img width="178" height="140" class="leaves" src={leaves} alt="decorative fall leaves" />
		</small>
	</h1>
	<h2>
		<a href="https://www.youtube.com/embed/1Df-9EKvZr0">Watch the event</a>
	</h2>
	<div class="center"><EmailSignup /></div>
</section>

<style>
	h2 {
		text-align: center;
	}
	a {
		color: white;
	}
	.cover {
		position: relative;
		background-image: url('/bg.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	section {
		position: relative;
		background: var(--primary-color);
		overflow: hidden;
		margin: 0 calc(var(--space) * -1);
		padding: 8rem 0.5rem 4rem 0.5rem;
	}

	.leaves {
		height: 140px;
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
		max-width: 16ch;
		font-size: 2rem;
		line-height: 1.05;
		margin-top: 9px;
		color: #ffdf98;
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
