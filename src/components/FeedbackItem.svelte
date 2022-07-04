<script>
	export let item;

	import { FeedbackStore } from '../stores/feedbackItmStore.js';
	import { scale } from 'svelte/transition';
	import Card from './Card.svelte';

	function handleDelete(itemId) {
		FeedbackStore.update((currentItem) => {
			return currentItem.filter((item) => item.id != itemId);
		});
	}
</script>

<div transition:scale>
	<Card>
		<div class="num-display">
			{item.rating}
			<div class="unit-display">rating</div>
		</div>
		<div class="votes-display">
			{item.votes}
			<div class="unit-display">votes</div>
		</div>
		<button class="close" on:click={() => handleDelete(item.id)}>╳</button>
		<p class="text-display">{item.text}</p>
		<div class="item-id">ID: {item.id}</div>
	</Card>
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
	.close {
		position: absolute;
		top: 10px;
		right: 20px;
		cursor: pointer;
		border: none;
		background: none;
	}
	.item-id {
		font-size: x-small;
		color: lightgray;
		margin-top: 10px;
	}
</style>
