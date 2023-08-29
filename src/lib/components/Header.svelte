<script>
	//import logo from '/images/bilby-logo.svg';
</script>

<header>
	<div class="logo">
		<a href="https://bilby.ai">
			<img src="/images/bilby-logo.svg" width="146" height="46" alt="Bilbly AI" />
		</a>
	</div>

	<div class="greeting">Hi, Russell!</div>

	<nav>
		<button> Sign Out </button>
	</nav>
</header>

<style>
	header {
		color: white;
		display: flex;
		justify-content: space-between;
		background-color: black;
	}

	.logo {
		padding: 1em;
	}

	.greeting {
		font-family: 'IBM Plex Serif', 'Georgia', serif;
		font-size: 2em;
		display: flex;
		justify-content: left;
	}

	nav {
		font: 'IBM Plex Sans', sans-serif;
		font-weight: 600;
		display: flex;
		justify-content: right;
	}
</style>
