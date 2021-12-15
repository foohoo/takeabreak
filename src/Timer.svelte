<script lang="ts">
	export let countFunction;
	var timerLengthAmount: number = 0;
	var breakTimerAmount: number = 0;
	let selectedTimerLength;
	let selectedBreakLength;

	function setTimerLength(ms){
		timerLengthAmount = parseInt(ms);
	}

	function setBreakTimer(ms){
		breakTimerAmount = parseInt(ms);
	}
</script>

<div class="timer">
	<span class="dropdown-section">
		<span class="dropdown">
			<p>Working Time</p>
			<select id="timer-length" bind:value={selectedTimerLength} on:change={setTimerLength(selectedTimerLength)}>
				<option value=0>Select a time...</option>
				<option value=10000>10 secs</option>
				<option value=900000>15 mins</option>
				<option value=1800000>30 mins</option>
				<option value=3600000>1 hour</option>
			</select>
		</span>
		<span class="dropdown">
			<p>Break Time</p>
			<select id="break-timer" bind:value={selectedBreakLength} on:change={setBreakTimer(selectedBreakLength)}>
				<option value=0>Select a time...</option>
				<option value=10000>10 secs</option>
				<option value=900000>15 mins</option>
				<option value=1800000>30 mins</option>
				<option value=3600000>1 hour</option>
			</select>
			<button on:click={countFunction(timerLengthAmount, breakTimerAmount)}>Start</button>
		</span>
	</span>
</div>

<style>
	.timer {
		margin-left: 1em;
		position: relative;
		display: table;
	}

	button {
		margin-left: 0.5em;
		text-transform: uppercase;
	}

	.dropdown{
		display: table-cell;
		padding-right: 0.5em;
	}
	.dropdown-section{
		display: inline;
	}

	p {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1em;
		font-weight: 100;
		margin: 0;
		text-shadow: -0.5px 0 #972222,0 -0.5px #972222,-0.5px 0 #972222,0 -0.5px #972222;
	}

	@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
</style>