<script>
	import '../house.css';
	import Header from '$lib/components/Header.svelte';
	import ArticleNav from '$lib/components/ArticleNav.svelte';
	export let data;
</script>

<Header />

<main>
	<div class="tag-nav">
		<h2>Labels</h2>
		<ul>
			{#each data.labels as label}
				<li>{label.name}</li>
			{/each}
		</ul>
	</div>
	<div class="article-nav">
		<ArticleNav {data} highlight={4} />
	</div>
	<div class="article-display">
		<h2>Article Title</h2>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: left;
	}
	.tag-nav {
		background-color: rgba(0, 101, 27, 1);
		padding: 0.45em 1em;
		height: 100vh;
		width: 10vw;
	}
	.article-nav {
		background-color: rgba(0, 101, 27, 0.5);
		padding: 0.45em 1em;
		height: 100vh;
		width: 30vw;
	}
	.article-display {
		padding: 0.45em 1em;
		height: 100vh;
		width: 70vw;
	}
	h2 {
		font-family: 'Roboto Condensed', 'Helvetica', sans-serif;
		font-size: 28px;
		text-transform: uppercase;
	}
</style>
