<script>
	import Button from './Button.svelte';
	export let data;
</script>

<div class="tag-input">
	<input type="text" />
	<button class="add">+</button>
	<Button label={'Suggest Tags'} />
</div>
<pre>{JSON.stringify(data)}</pre>
<div>
	<Button label={'Party'} type={'add'} /><Button label={'Government'} type={'add'} />
</div>

<article>
	<h1>{data.props.article.title}</h1>
	<Button label={'x | China'} type={'remove'} /><Button label={'x | Twitter'} type={'remove'} />
	<p>
		{data.props.article.summary}
	</p>
</article>

<style>
	article > h1 {
		font-family: 'IBM Plex Serif', 'Georgia', serif;
		font-size: 1.8em;
		background-color: rgba(96, 50, 200, 1);
		padding: 0.5em;
	}
	article > p {
		font-family: 'IBM Plex Serif', 'Georgia', serif;
		font-size: 1em;
		color: white;
	}
	h4 {
		padding: 2em 0 0.5em 0;
	}
</style>
