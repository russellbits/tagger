<script>
	import '../house.css';
	import Header from '$lib/components/Header.svelte';
	// import TagsNav from '$lib/components/TagsNav.svelte';
	import ArticleNav from '$lib/components/ArticleNav.svelte';
	import ArticleDisplay from '$lib/components/ArticleDisplay.svelte';
	export let data;
</script>

<Header />
<ArticleNav />
<ArticleDisplay />

<style>
</style>
