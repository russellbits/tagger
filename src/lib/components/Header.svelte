<script>
	//import logo from '/images/bilby-logo.svg';
	export let location = '';
	export let isHome = false;
	$: if (location !== '/') {
		isHome = true;
	}
	import Button from '$lib/components/Button.svelte';

	import { goto } from '$app/navigation';
	function routeToPage(route) {
		goto(`${route}`);
	}
</script>

<header>
	<div class="logo">
		<a href="https://bilby.ai">
			<img src="/images/bilby-logo.svg" width="146" height="46" alt="Bilbly AI" />
		</a>
	</div>

	<div class="greeting">Hi, Russell!</div>

	<nav>
		{#if !isHome}
			<Button label={'Home'} on:click={routeToPage('/')} />
		{/if}
		<Button label={'Sign Out'} />
	</nav>
</header>

<style>
	header {
		color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: black;
	}

	.logo {
		padding: 1em;
	}

	.greeting {
		font-family: 'IBM Plex Serif', 'Georgia', serif;
		font-size: 1.5em;
		display: flex;
		justify-content: left;
	}

	nav {
		font: 'IBM Plex Sans', sans-serif;
		font-weight: 600;
		display: flex;
		justify-content: right;
	}
</style>
