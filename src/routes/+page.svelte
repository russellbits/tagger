<script>
	import '../house.css';
	import Header from '$lib/components/Header.svelte';
	export let data;
</script>

<Header />

<h1>Welcome to Tagger</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
	{#each data.articles as article}
		<li>{article.title}</li>
	{/each}
</ul>

<ul>
	<pre>{JSON.stringify(data)}</pre>
	{#each data.labels as label}
		<li>{label.name}</li>
	{/each}
</ul>

<style>
	h1 {
		font-family: 'IBM Plex Serif', 'Georgia', serif;
		font-weight: 400;
		font-size: 2em;
	}
</style>
