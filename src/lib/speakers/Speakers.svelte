<script>
	export let talks;

	console.log(talks[2].speakers);
</script>

<section class="stack center">
	<h2 id="speakers">Speakers</h2>
	<hr />
	<ul class="grid">
		{#each talks as { speakers, title, description }}
			<li>
				<article class="speaker">
					<div class="profile">
						{#each speakers as { profilePicture, fullName }}
							<picture>
								<img
									width="100"
									height="100"
									src={profilePicture}
									loading="lazy"
									alt="Image of {fullName}"
								/>
							</picture>
						{/each}
					</div>
					<div class="title">
						{#each speakers as { fullName, links }}
							<address rel="author">
								{fullName}
								{#if links[0]}
									<a
										href={links[0]?.url}
										target="_blank"
										rel="noopener noreferrer"
										class="twitter with-icon"
										aria-label="{fullName} Twitter"
									>
										<svg
											class="icon"
											fill="white"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											><path
												d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
											/>
										</svg>
										Twitter
									</a>
								{/if}
							</address>
						{/each}
						<h3>{title}</h3>
					</div>
					<div class="text">
						<p>{@html description}</p>
					</div>
				</article>
			</li>
		{/each}
	</ul>
</section>

<style>
	.grid {
		grid-gap: 50px;
		--grid-width: 400px;
	}
	.center {
		--max-width: 1180px;
	}
	.twitter {
		color: #e4eef0;
		margin-left: 5px;
	}
	.speaker {
		display: grid;
		grid-template-rows: auto 1fr;
		grid-template-columns: auto 1fr;
		grid-template-areas:
			'profile title'
			'profile text';
		row-gap: 10px;
		column-gap: 20px;
	}
	.profile {
		grid-area: profile;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.text {
		color: #d8ecef;
		min-width: 0;
		grid-area: text;
		font-size: 16px;
		line-height: 1.7;
	}
	.title {
		min-width: 0;
		grid-area: title;
	}
	address,
	.twitter {
		font-size: 15px;
		color: rgba(215, 236, 239, 0.67);
	}
	h2 {
		scroll-margin-top: 7rem;
	}
	h3 {
		margin-top: 0.5rem;
	}
	img {
		width: 100%;
		max-width: 100px;
		border-radius: 9999px;
	}

	@media screen and (max-width: 850px) {
		.speaker {
			grid-template-areas:
				'profile title'
				'text text';
		}
		img {
			max-width: 50px;
		}
	}
</style>
