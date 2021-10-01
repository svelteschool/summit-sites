<script lang="typescript">
	import logo from './logo.svg';
	import leaves from './leaves.svg';

	import EmailSignup from './EmailSignup.svelte';
</script>

<section class="cover cover-light-bg" id="intro">
	<img class="logo center" src={logo} alt="Svelte Society Presents" />
	<h1 class="heading center">
		<span class="title">SVELTE <span class="highlight-text">SUMMIT FALL</span></span>
		<small>
			<time>NOV 20 2021</time>
			<span class="subheading">THE 4TH VIRTUAL CONFERENCE ABOUT SVELTE</span>
			<img class="leaves" src={leaves} alt="decorative fall leaves" />
		</small>
	</h1>
	<div class="center"><EmailSignup /></div>
</section>

<style>
	section {
		position: relative;
		background: var(--primary-color);
		background: linear-gradient(
			45deg,
			var(--cover-background-light) 35%,
			var(--cover-background-dark) 35%,
			var(--cover-background-dark) 100%
		);
		overflow: hidden;
		margin: 0 calc(var(--space) * -1);
		padding: 8rem 0.5rem 4rem 0.5rem;
	}

	.leaves {
		height: 140px;
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
		text-align: right;
		word-spacing: 9999rem;
		font-size: 7rem;
		line-height: 1;
	}

	small {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 4px;
	}

	time {
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
