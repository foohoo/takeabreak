<script lang="ts">
	export let name: string;
	let root = document.documentElement.style;
	let search = 'nature,landscape';
	let i = 0;
	function handleClick() {
		root.setProperty('--back-url', `url(https://source.unsplash.com/random/1024x768/?${search},${i++})`)
	}
</script>

<main>
	<h1>{name}</h1>
	<button on:click={() => handleClick()}>Button</button>
</main>

<style>
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