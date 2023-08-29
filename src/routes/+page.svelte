<script>
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
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
