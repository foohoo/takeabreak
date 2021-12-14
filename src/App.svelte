<script lang="ts">
	import Timer from './Timer.svelte';

	export let name: string;

	var minutes = 0;
	var seconds = 0;

	var interval = setInterval(function(){});
	var message = "";
	var timer = "";
	var working = true;

	function countingDown(timerLength, breakTimerLength){
		minutes = 0;
		seconds = 0;
		clearInterval(interval)

		message = "Time until break...";
		var targetTime = new Date().getTime() + parseInt(timerLength+1000);

		interval = setInterval(function() {

			var now = new Date().getTime();
			var distance =  (targetTime) - now;
			
			minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (minutes <= 0 && seconds <= 0) {
				working = !working;
				targetTime = working 
					? new Date().getTime() + parseInt(timerLength+1000) 
					: new Date().getTime() + parseInt(breakTimerLength+1000);
				message = working ? "Time until break..." : "Break finishes in...";
				timer = "";
			}

			timer = `${minutes}m ${seconds}s`;
		}, 1000);
	}

</script>

<div class="timer-bar">
	<h1>{name}</h1>
	<Timer countFunction={countingDown} />
</div>

<main>
	<h1>{message}</h1>
	<h1>{timer}</h1>
</main>

<youtube-section>
	<h2>Youtube</h2>
</youtube-section>

<style>

	.timer-bar{
		padding: 1em;
		vertical-align: middle;
	}

	.timer-bar h1{
		display: inline;
		padding-top: 1em;
	}

	.youtube-section{
		padding: 1em;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	:root {
		--back-url: url(https://source.unsplash.com/random/1280x720/?nature,landscape);
	}

	:global(body) {
		background-size: cover;
		background-repeat: no-repeat;
		background-image: var(--back-url);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>