<script lang="ts">
	import Timer from './Timer.svelte';

	export let name: string;

	var minutes = 0;
	var seconds = 0;

	var interval = setInterval(function(){});

	function countingDown(targetDate){
		minutes = 0;
		seconds = 0;
		clearInterval(interval)

		interval = setInterval(function() {

		var now = new Date().getTime();
		var distance =  targetDate - now;
		
		minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((distance % (1000 * 60)) / 1000);

		if (distance < 0) {
			clearInterval(interval);
		}
		}, 1000);
	}

</script>

<timer-bar>
	<Timer countFunction={countingDown} />
</timer-bar>

<main>
	<h1>{name}</h1>
	<h1>{minutes}m {seconds}s</h1>
</main>

<youtube-section>
	<h2>Youtube</h2>
</youtube-section>

<style>

	timer-bar{
		padding: 1em;
	}

	youtube-section{
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