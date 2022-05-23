<section>
	<div class="stack center">
		<h2 id="faq">FAQ</h2>
		<hr />
		<dl class="questions">
			<div class="question">
				<dt>What is this?</dt>
				<dd>
					Svelte Summit is an event dedicated to Svelte and everything that is happening in the
					community. This is the first time we're going in-person. Don't miss it! It's going to be
					an absolute blast!
				</dd>
			</div>
			<div class="question">
				<dt>What is included in the ticket?</dt>
				<dd>
					<ul>
						<li>2 days filled with talks and sessions from speakers across the world.</li>
						<li>2 evenings with parties where you can hang out with other Svelte developers.</li>
						<li>Breakfast, lunch and dinner on both days (with vegan options)</li>
						<li>Dinner on the first day (with vegan options)</li>
					</ul>
				</dd>
			</div>
			<div class="question">
				<dt>How many sessions will there be?</dt>
				<dd>We're aiming to have around 15 sessions spread out over two days.</dd>
			</div>
			<div class="question">
				<dt>Will it be recorded?</dt>
				<dd>
					Absolutely! You'll find it on the <a
						href="https://youtube.com/sveltesociety"
						target="_blank"
						rel="noopener noreferrer">Svelte Society YouTube channel</a
					> once the event has been finished.
				</dd>
			</div>
			<dt>Can you remind me when the date gets closer?</dt>
			<dd>Yes, <a href="#signup">enter your email here</a>.</dd>
			<dt>I'd like to do a talk, how can I submit one?</dt>
			<dd>
				You can submit one <a
					href="https://sessionize.com/svelte-summit-fall-2022/"
					target="_blank"
					rel="noopener noreferrer">here</a
				>.
			</dd>
			<div class="question">
				<dt>Do you have a code of conduct?</dt>
				<dd>
					We sure do. And we expect everyone to abide by it. You can read it here: <a
						href="https://github.com/sveltejs/community/blob/main/CODE_OF_CONDUCT.md"
						target="_blank"
						rel="noopener noreferrer">Code of Conduct</a
					>.
				</dd>
			</div>
			<div class="question">
				<dt>I want to sponsor the event!</dt>
				<dd>
					The easiest way is to fire off an email to <a href="mailto:sponsors@sveltesummit.com"
						>sponsors@sveltesummit.com</a
					>
					and tell us what you have in mind. We have two different levels of sponsorship: Platinum and
					Gold. We also have a number of other cool packages that you can take a look at. Our
					<a href="/sponsors">sponsor deck is available here</a>.
				</dd>
			</div>
		</dl>
	</div>
</section>

<!-- <section class="time">
	<div class="stack center">
		<h2>Timezones</h2>
		<hr />
		<div class="cluster timezones">
			<div class="zone">London (GMT)<br />2:00 pm</div>
			<div class="zone">Stockholm (CET)<br />3:00 pm</div>
			<div class="zone">Berlin (CET)<br />3:00 pm</div>
			<div class="zone">Moscow (GMT+3)<br />6:00 pm</div>
			<div class="zone">Tokyo (GMT+9)<br />11:00 PM</div>
			<div class="zone">Sydney (AEDT)<br />2:00 am</div>
			<div class="zone">San Francisco (PST)<br />6:00 am</div>
			<div class="zone">New York (EST)<br />9:00 AM</div>
		</div>
	</div>
</section> -->
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
		background: black;
		border-radius: 5px;
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
	li {
		list-style-type: circle;
		list-style-position: inside;
	}
</style>
