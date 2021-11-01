<section>
	<div class="stack center">
		<h2 id="faq">FAQ</h2>
		<hr />
		<dl class="questions">
			<dt>I want to sponsor the event!</dt>
			<dd>
				The easiest way is to fire off an email to <a href="mailto:sponsors@sveltesummit.com"
					>sponsors@sveltesummit.com</a
				>
				and tell us what you have in mind. We have two different levels of sponsorship: Platinum and Gold. Our sponsor deck is available <a href="/sponsors">here</a>.
			</dd>
			<dt>What is this?</dt>
			<dd>
				Svelte Summit is an event dedicated to Svelte and everything that is happening in the
				community. You'll be able to tune in to a full day of talks and discussions all while
				chatting to other Svelthusiasts on the Discord server.
			</dd>
			<dt>How do I watch it?</dt>
			<dd>
				Once the day arrives, tune in to the <a
					href="https://youtube.com/sveltesociety"
					target="_blank"
					rel="noopener noreferrer">Svelte Society YouTube channel</a
				> and start watching. We'll also make sure to post a notice at the top of this page if you forget
				where to go.
			</dd>
			<dt>Will it be recorded?</dt>
			<dd>
				Absolutely! You'll find it on the <a
					href="https://youtube.com/sveltesociety"
					target="_blank"
					rel="noopener noreferrer">Svelte Society YouTube channel</a
				> once the event has been finished.
			</dd>
			<dt>Can you remind me when the date gets closer?</dt>
			<dd>Yes, <a href="#signup">enter your email here</a>.</dd>
			<dt>I'd like to do a talk, how can I submit one?</dt>
			<dd>
				The time to submit talks has unfortunately closed. We look forward to your submissions next next year.
			</dd>
			<dt>Do you have a code of conduct?</dt>
			<dd>
				We sure do. And we expect everyone to abide by it. You can read it here: <a
					href="https://sveltesociety.dev/about"
					target="_blank"
					rel="noopener noreferrer">Code of Conduct</a
				>.
			</dd>
		</dl>
	</div>
</section>
<section class="time">
	<div class="stack center">
		<h2>Timezones</h2>
		<hr />
		<p>
			Once a set time has been announced we'll update this section with a bunch of different local
			times.
		</p>
		<!-- <div class="cluster timezones">
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
		</div> -->
	</div>
</section>

<style>
	section {
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		max-width: initial;
		margin: 0 calc(var(--space) * -1);
	}

	.time {
		padding-top: 0;
	}

	h2 {
		scroll-margin-top: 7rem;
	}

	.timezones {
		--space: 0.75rem;
	}

	.zone {
		padding: 8px 12px;
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
	dd {
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
