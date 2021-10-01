<section>
	<div class="stack center">
		<h2 id="faq">FAQ</h2>
		<hr />
		<dl class="questions">
			<dt>I want to sponsor the event!</dt>
			<dl>
				The easiest way is to fire off an email to <a href="mailto:sponsors@sveltesummit.com"
					>sponsors@sveltesummit.com</a
				>
				and tell us what you have in mind. We have three different levels of sponsorship: Platinum,
				Gold and Silver. Our sponsor deck is available <a href="/">here</a>.
			</dl>
			<dt>What is this?</dt>
			<dl>
				Svelte Summit is an event dedicated to Svelte and everything that is happening in the
				community. You'll be able to tune in to a full day of talks and discussions all while
				chatting to other Svelthusiasts on the Discord server.
			</dl>
			<dt>How do I watch it?</dt>
			<dl>
				Once the day arrives, tune in to the <a
					href="https://youtube.com/sveltesociety"
					target="_blank"
					rel="noopener noreferrer">Svelte Society YouTube channel</a
				> and start watching. We'll also make sure to post a notice at the top of this page if you forget
				where to go.
			</dl>
			<dt>Will it be recorded?</dt>
			<dl>
				Absolutely! You'll find it on the <a
					href="https://youtube.com/sveltesociety"
					target="_blank"
					rel="noopener noreferrer">Svelte Society YouTube channel</a
				> once the event has been finished.
			</dl>
			<dt>Can you remind me when the date gets closer?</dt>
			<dl>Yes, <a href="#signup">enter your email here</a>.</dl>
			<dt>I'd like to do a talk, how can I submit one?</dt>
			<dl>
				To submit a talk, please <a
					href="https://sessionize.com/svelte-summit-fall-2021/"
					target="_blank"
					rel="noopener noreferrer">visit the CFP page</a
				>. You can submit up to two talks, please be as thorough when describing it, as possible!
			</dl>
		</dl>
	</div>
	<div class="stack center">
		<h2>Timezones</h2>
		<hr />
		<div class="cluster timezones">
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
			<div class="zone">San Francisco (PDT)<br />6:00 am</div>
		</div>
	</div>
</section>

<style>
	section {
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		max-width: initial;
		margin: calc(var(--space) * -1);
	}

	.timezones {
		--space: 0.75rem;
	}

	.zone {
		padding: 8px 12px;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 4px;
		flex: 1 1 155px;
	}

	.stack {
		max-width: 1080px;
	}

	.questions {
		display: column;
		column-count: 2;
		column-gap: 40px;
	}
	dt {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
	dl {
		font-size: 1rem;
		margin-bottom: 40px;
	}

	hr {
		width: 15%;
		border: 2px solid white;
		border-radius: 9999px;
		margin: 0.75rem auto;
	}

	@media (max-width: 800px) {
		.questions {
			column-count: 1;
		}
	}
</style>
