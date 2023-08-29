<script>
	import '../../house.css';
	import Header from '$lib/components/Header.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<Header />

<h2>Interactive Components</h2>

<Button label={'Suggest Tags'} />
<Button label={'+ | China'} type={'add'} />
<Button label={'x | Government'} type={'remove'} />
