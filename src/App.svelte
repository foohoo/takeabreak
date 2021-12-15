<script lang="ts">
	import Timer from './Timer.svelte';
	import YoutubeSection from './YoutubeSection.svelte';
	import youtubesearch from './js/youtube-search';

	export let name: string;

	var minutes = 0;
	var seconds = 0;

	var interval = setInterval(function(){});
	var message = "";
	var timer = "";
	var working = true;

	$: videoResponses = ["kt4Z2AA5Kj0", "l7_1aQpQTCE", "twM7ulKpPjI"];

	function countingDown(timerLength, breakTimerLength){
		minutes = 0;
		seconds = 0;
		working = true;
		clearInterval(interval)

		message = "Time until break...";
		var targetTime = new Date().getTime() + parseInt(timerLength+1000);

		interval = setInterval(function() {

			var now = new Date().getTime();
			var distance =  (targetTime) - now;
			
			minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (minutes <= 0 && seconds <= 0) {
				minutes = 0;
				seconds = 0;
				// let searchPromise = new Promise(function(resolve, reject) {
				// 	let v = youtubesearch();
				// 	resolve(v);
				// });

				// searchPromise.then((value :[]) => {
				// 	videoResponses = value;
				// 	working = !working;
				// 	targetTime = working 
				// 		? new Date().getTime() + parseInt(timerLength+1000) 
				// 		: new Date().getTime() + parseInt(breakTimerLength+1000);
				// 	message = working ? "Time until break..." : "Break finishes in...";
				// 	timer = "";
				// })

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
	<span class="timer-comps">
		<h1>{name}</h1>
	</span>
	<span class="timer-comps">
		<Timer countFunction={countingDown} />
	</span>
</div>

<main>
	<h1>{message}</h1>
	<h1>{timer}</h1>
</main>

<YoutubeSection hidden={working} videoResponses={videoResponses}/>

<style>

	.timer-bar{
		display: table;
	}

	.timer-comps{
		display: table-cell;
		vertical-align: bottom;
	}

	.timer-bar h1{
		margin: 0;
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