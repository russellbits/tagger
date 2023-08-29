<script>
	export let data;
	export let highlight;
</script>

<div>
	<h2>Articles</h2>
	<ul>
		{#each data.articles as article}
			{#if article.id == highlight}
				<li class="highlight"><a href="#">{article.title}</a></li>
			{:else}
				<li><a href="#">{article.title}</a></li>
			{/if}
		{/each}
	</ul>
</div>

<style>
	h2 {
		color: white;
		font-family: 'Roboto Condensed', 'Helvetica', sans-serif;
		font-size: 1.8em;
		text-transform: uppercase;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	li {
		font-family: 'IBM Plex Serif', 'Georgia', serif;
		font-size: 0.8em;
		line-height: 1.4em;
		min-height: calc((0.8 * 3)+ (1.4 * 3));
		padding: 1em 0.4em;
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
	}
	li:hover {
		background-color: rgba(0, 169, 10, 1);
		border-radius: 5px;
	}
	li.highlight {
		background-color: rgba(0, 169, 10, 1);
		border-radius: 5px;
	}
	a {
		color: white;
		text-decoration: none;
	}
</style>
