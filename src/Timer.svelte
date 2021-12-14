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

<timer>
	<select id="timer-length" bind:value={selectedTimerLength} on:change={setTimerLength(selectedTimerLength)}>
		<option value=0>Select a time...</option>
		<option value=10000>10 secs</option>
		<option value=900000>15 mins</option>
		<option value=1800000>30 mins</option>
		<option value=3600000>1 hour</option>
	</select>
	<select id="break-timer" bind:value={selectedBreakLength} on:change={setBreakTimer(selectedBreakLength)}>
		<option value=0>Select a time...</option>
		<option value=10000>10 secs</option>
		<option value=900000>15 mins</option>
		<option value=1800000>30 mins</option>
		<option value=3600000>1 hour</option>
	</select>
	<button on:click={countFunction(timerLengthAmount, breakTimerAmount)}>Start timer</button>
</timer>

<style>
	timer {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		vertical-align: text-bottom;
	}
	@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
</style>