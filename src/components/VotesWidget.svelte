<div class="votes-display">
	<slot />
	<div class="unit-display">votes</div>
</div>

<style>
	.votes-display {
		position: absolute;
		top: -15px;
		left: 50px;
		width: 50px;
		height: 50px;
		background: #cda2fd;
		color: #ffffff;
		border: 2px #edddff solid;
		border-radius: 25%;
		padding: 4px;
		text-align: center;
		font-size: 19px;
	}

	.unit-display {
		position: relative;
		top: -8px;
		font-size: xx-small;
	}
</style>
