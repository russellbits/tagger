<script>
	import '../house.css';
	import Header from '$lib/components/Header.svelte';
	import TagsNav from '$lib/components/TagsNav.svelte';
	import ArticleNav from '$lib/components/ArticleNav.svelte';
	import ArticleDisplay from '$lib/components/ArticleDisplay.svelte';
	export let data;
</script>

<Header />

<main>
	<div class="tag-nav">
		<TagsNav {data} highlight={2} />
	</div>
	<div class="article-nav">
		<ArticleNav {data} highlight={4} />
	</div>
	<div class="article-display">
		<pre>{JSON.stringify(data)}</pre>
		<!-- For root route, don't dispkay article? -->
		<!-- <ArticleDisplay {data} title={'I said so.'} /> -->
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
		padding: 0.45em 0;
		margin: 0;
		height: 100vh;
		width: 15vw;
	}
	.article-nav {
		background-color: rgba(0, 101, 27, 0.5);
		padding: 0.45em 0.2em;
		height: 100vh;
		width: 30vw;
	}
	.article-display {
		padding: 0.45em 1em;
		height: 100vh;
		width: 70vw;
	}
</style>
