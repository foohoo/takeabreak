<script lang="ts">
	export let countFunction;
	var timerAmount: number = 0;
	let selected;

	function setTimer(ms){
		timerAmount = parseInt(ms);
	}
</script>

<timer>
	<select bind:value={selected} on:change={setTimer(selected)}>
		<option value=0>Select a time...</option>
		<option value=900000>15 mins</option>
		<option value=1800000>30 mins</option>
		<option value=3600000>1 hour</option>
	</select>
	<button on:click={countFunction(new Date().getTime() + timerAmount)}>Start timer</button>
</timer>

<style>
	timer {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
</style>