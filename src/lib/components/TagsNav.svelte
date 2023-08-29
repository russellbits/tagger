<script>
	export let data;
	export let highlight;
	const labelsNumber = data.labels.length;
</script>

<div>
	<h2>{labelsNumber} Labels</h2>
	<!-- <pre>{JSON.stringify(data.labels.length)}</pre> -->
	<ul>
		{#each data.labels as label}
			{#if label.id == highlight}
				<li class="highlight"><a href="#">{label.name}</a></li>
			{:else}
				<li><a href="#">{label.name}</a></li>
			{/if}
		{/each}
	</ul>
</div>

<style>
	h2 {
		color: white;
		font-family: 'Roboto Condensed', 'Helvetica', sans-serif;
		font-size: 1.8m;
		text-transform: uppercase;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	li {
		font-family: 'Inter', 'Helvetica', serif;
		font-weight: 700;
		font-size: 0.8em;
		text-transform: uppercase;
		line-height: 1em;
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
