<script>
	import '../house.css';
	import Header from '$lib/components/Header.svelte';
	export let data;
</script>

<Header />

<h1>Articles</h1>

<ul>
	{#each data.articles as article}
		<li>{article.title}</li>
	{/each}
</ul>

<h2>Labels</h2>
<ul>
	{#each data.labels as label}
		<li>{label.name}</li>
	{/each}
</ul>
