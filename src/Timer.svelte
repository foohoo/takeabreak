<script lang="ts">
	export let countFunction;
	var targetDate = new Date("Jan 5, 2022 15:37:25").getTime();
</script>

<timer>
	<button on:click={countFunction(targetDate)}>Add One</button>
</timer>

<style>
	timer {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
</style>