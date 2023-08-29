<script>
	import '../../house.css';
	import Header from '$lib/components/Header.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<Header />

<h2>Interactive Components</h2>

<h4>Generic Buttons</h4>
<Button label={'Suggest Tags'} />

<h4>Add Tag Buttons</h4>
<Button label={'+ | China'} type={'add'} />

<h4>Remove Tag Buttons</h4>
<Button label={'x | Government'} type={'remove'} />

<h4>Article Inputs</h4>
<div class="tag-input">
	<input type="text" />
	<button class="add">+</button>
	<Button label={'Suggest Tags'} />
</div>
<div>
	<Button label={'Party'} type={'add'} /><Button label={'Government'} type={'add'} />
</div>
<div class="articleTitle">
	<h1>How China became big business for Twitter</h1>
</div>
<div />

<style>
	.articleTitle {
		background-color: rgba(96, 50, 200, 1);
	}
	.articleTitle h1 {
		font-family: 'IBM Plex Serif', 'Georgia', serif;
	}
	h4 {
		padding: 2em 0 0.5em 0;
	}
</style>
