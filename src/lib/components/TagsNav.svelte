<script>
	export let data;
	export let highlight;
	const labelsNumber = data.labels.length;
</script>

<h2>{labelsNumber} Labels</h2>
<ul>
	<li class="main-tag">All Articles</li>
	{#each data.labels as label}
		{#if label.id == highlight}
			<li class="highlight"><a href="#">{label.name}</a></li>
		{:else}
			<li><a href="#">{label.name}</a></li>
		{/if}
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	li {
		font-family: 'Inter', 'Helvetica', serif;
		font-weight: 700;
		font-size: 0.8em;
		text-transform: capitalize;
		line-height: 1em;
		min-height: calc((0.8 * 3)+ (1.4 * 3));
		padding: 0.5em 2.3em;
	}
	li:hover {
		background-color: rgba(0, 169, 10, 1);
	}
	li.highlight {
		background-color: rgba(0, 169, 10, 1);
	}
	li.main-tag {
		text-transform: uppercase;
	}
	a {
		color: white;
		text-decoration: none;
	}
</style>
