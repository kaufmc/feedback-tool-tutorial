<div class="num-display">
	<slot />
	<div class="unit-display">rating</div>
</div>

<style>
	.num-display {
		position: absolute;
		top: -15px;
		left: -15px;
		width: 50px;
		height: 50px;
		background: #ff6a95;
		color: #ffffff;
		border: 2px #ffd6e1 solid;
		border-radius: 50%;
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
