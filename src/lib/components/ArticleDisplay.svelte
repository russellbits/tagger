<script>
	import Button from './Button.svelte';
	export let data;
	export let n = 'follow';
</script>

<div class="tag-input">
	<input type="text" />
	<button class="add">+</button>
	<Button label={'Suggest Tags'} />
</div>
<pre>FAIL: {data}</pre>
<div>
	<Button label={'Party'} type={'add'} /><Button label={'Government'} type={'add'} />
</div>

<article>
	<h1>How {n} became big business for Twitter</h1>
	<Button label={'x | China'} type={'remove'} /><Button label={'x | Twitter'} type={'remove'} />
	<p>
		A Reuters review of publicly available government tenders, budget documents and promoted tweets
		from 2020 to 2022 shows local government authorities and Chinese Communist Party propaganda
		offices for cities, provinces and even districts across the country have flocked to Twitter to
		buy ads.
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
