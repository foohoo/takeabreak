<script lang="ts">
	export let name: string;
	let root = document.querySelector(":root");
	function handleClick() {
		// root.setAttribute('--back-url', `url(https://source.unsplash.com/random/1280x720/?landscape)`)
		root.setAttribute('--back-url', `url(https://source.unsplash.com/random/1280x720/?nature,landscape)`)
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
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
		--back-url: url(https://source.unsplash.com/random/1280x720/?cat);
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