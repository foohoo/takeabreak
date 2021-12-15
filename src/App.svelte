<script lang="ts">
	import Timer from './Timer.svelte';
	import YoutubeSection from './YoutubeSection.svelte';
	import youtubesearch from './js/youtube-search';

	export let name: string;

	var audio = new Audio('http://soundbible.com/grab.php?id=1254&type=mp3');

	var minutes = 0;
	var seconds = 0;

	var interval = setInterval(function(){});
	var message = "";
	var timer = "";
	var working = true;

	$: videoResponses = ["kt4Z2AA5Kj0", "twM7ulKpPjI"];

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
  				audio.play();

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

<div class="more-snow"></div>

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
		font-weight: 200;
		text-shadow: -1px 0 #972222,0 1px #972222,1px 0 #972222,0 -1px #972222;
	}

	:root {
		--back-url: url(https://source.unsplash.com/random/1280x720/?christmas);
	}

	:global(body) {
		background-size: cover;
		background-repeat: no-repeat;
		background-image: var(--back-url);
		background-blend-mode: color-burn;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}


	@import url("https://fonts.googleapis.com/css?family=Merienda+One");

body:before, body:after,
.more-snow:before,
.more-snow:after {
	z-index: -1000;
  content: "";
  position: fixed;
  top: -3000%;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.01);
  background-image: url(http://www.freepngimg.com/download/winter_snow/4-2-white-snow-png.png);
  background-size: 30%;
  -webkit-animation-name: MOVE-BG;
  -webkit-animation-duration: 500s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
}

body:before {
  filter: blur(6px);
  opacity: 0.4;
}
body:after {
  filter: blur(1px);
  top: -1500%;
  background-image: url(http://www.freepngimg.com/download/winter_snow/4-2-white-snow-png.png);
  background-size: 90%;
  -webkit-animation-duration: 200s;
          animation-duration: 200s;
}

.more-snow:before {
  filter: blur(4px);
  opacity: 0.4;
  top: -2500%;
  background-size: 60%;
  -webkit-animation-duration: 400s;
          animation-duration: 400s;
}
.more-snow:after {
  filter: blur(2px);
  opacity: 0.4;
  top: -2000%;
  background-image: url(https://laviwebfiles.com/stage/codepen/4-2-white-snow-png.png);
  background-size: 70%;
  -webkit-animation-duration: 300s;
          animation-duration: 300s;
}

@-webkit-keyframes MOVE-BG {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(70%);
  }
}
	
</style>