<script>
	import Card from './Card.svelte';
	import Button from './Button.svelte';

	const MIN_INPUT_LENGTH = 10;
	const INPUT_TOO_SHORT_MESSAGE = `Your feedback must be at least ${MIN_INPUT_LENGTH} characters.`;

	let text = '';
	let message = null;
	let buttonDisabled = true;

	function checkLength() {
    console.log(text.length);
		if (text.length >= MIN_INPUT_LENGTH) {
			buttonDisabled = false;
			message = null;
		} else {
			buttonDisabled = true;
			message = INPUT_TOO_SHORT_MESSAGE;
		}
	}
</script>

<Card>
	<header>
		<h2>How would you rate us?</h2>
	</header>
	<form>
		<!--Rating select-->
		<div class="input-group">
			<input
				type="text"
				bind:value={text}
				on:input={checkLength}
				placeholder="Tell us what moves you"
			/>
			<Button type="Submit" disabled={buttonDisabled}>Submit</Button>
		</div>
		{#if message}
			<div class="message">
				{message}
			</div>
		{/if}
	</form>
</Card>

<style>
	header {
		max-width: 400px;
		margin: auto;
	}
	header h2 {
		font-size: 22px;
		font-weight: 600;
		text-align: center;
	}
	.input-group {
		display: flex;
		flex-direction: row;
		border: 1px solid #ccc;
		padding: 8px 10px;
		border-radius: 8px;
		margin-top: 15px;
	}
	input {
		flex-grow: 2;
		border: none;
		font-size: 16px;
	}
	input:focus {
		outline: none;
	}
	.message {
		padding-top: 10px;
		text-align: center;
		color: rebeccapurple;
	}
</style>
