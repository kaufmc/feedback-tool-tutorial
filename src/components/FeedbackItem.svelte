<script>
	export let item;

	import { FeedbackStore } from '../stores/stores.js';
	import { scale } from 'svelte/transition';
	import Card from './Card.svelte';

	function handleDelete(itemId) {
		FeedbackStore.update((currentItem) =>{
			return currentItem.filter(item => item.id != itemId);
		})
	}
</script>

<div transition:scale>
	<Card>
		<div class="num-display">{item.rating}</div>
		<button class="close" on:click={() => handleDelete(item.id)}>╳</button>
		<p class="text-display">{item.text}</p>
		<div class="item-id">ID: {item.id}</div>
	</Card>
</div>

<style>
	.num-display {
		position: absolute;
		top: -10px;
		left: -10px;
		width: 50px;
		height: 50px;
		background: #ff6a95;
		color: #ffffff;
		border: 2px #ffd6e1 solid;
		border-radius: 50%;
		padding: 10px;
		text-align: center;
		font-size: 19px;
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
