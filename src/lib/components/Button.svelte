<script>
	export let label = 'Unlabeled';
	export let type = 'default';
</script>

<button class={type}>{label}</button>

<style>
	button {
		font-family: 'IBM Plex Sans SemiBold', 'Helvetica', sans-serif;
		font-weight: 600;
		font-size: 16px;
		text-decoration: none;
		text-align: center;
		text-transform: uppercase;
		padding: 5px 15px;
		margin: 2px;
		border: none;
		cursor: pointer;
		transition: background-color 250ms ease-in-out, transform 150ms ease;
		color: white;
		background-color: #00a90a;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
	}

	button:hover,
	button:focus {
		background-color: #00d40e;
	}

	button.add {
		background-color: #e100ed;
	}

	button.add:hover,
	button.add:focus {
		background-color: #f427ff;
	}

	button.remove {
		background-color: #6032c8;
	}

	button.remove:hover,
	button.remove:focus {
		background-color: #8d5dff;
	}

	button:focus {
		outline: 1px solid #fff;
		outline-offset: -4px;
	}

	button:active {
		transform: scale(0.97);
	}
</style>
