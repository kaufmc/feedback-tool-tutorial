<script>
	export let votes = 0;

	function handleVoteUp(event){
		++votes
	}
	function handleVoteDown(event){
		--votes
	}
</script>

<div class="votes-display">
	<button on:click={handleVoteUp} value = 1>▲</button>
	{votes}
	<button on:click={handleVoteDown} value= -1>▼</button>
	<div class="unit-display">votes</div>
</div>

<style>
	.votes-display {
		position: absolute;
		top: -15px;
		left: 50px;
		width: 60px;
		height: 50px;
		background: #cda2fd;
		color: #ffffff;
		border: 2px #edddff solid;
		border-radius: 25%;
		padding: 4px 0px 0px 0px;
		text-align: center;
		font-size: 19px;
	}

	.unit-display {
		position: relative;
		top: -8px;
		font-size: xx-small;
	}

	button{
		border: none;
		background: none;
		color: white;
		border-radius: 50%;
		height: 12px;
		width: 12px;
	}
</style>
