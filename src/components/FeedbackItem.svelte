<script>
	export let item;

	import { FeedbackStore } from '../stores/feedbackItmStore.js';
	import { scale } from 'svelte/transition';
	import Card from './Card.svelte';
	import Votes from './VotesWidget.svelte';
	import Rating from './RatingWidget.svelte';

	function handleDelete(itemId) {
		FeedbackStore.update((currentItem) => {
			return currentItem.filter((item) => item.id != itemId);
		});
	}
</script>

<div transition:scale>
	<Card>
		<Rating>{item.rating}</Rating>
		<Votes>{item.votes}</Votes>
		<button class="close" on:click={() => handleDelete(item.id)}>╳</button>
		<p class="text-display">{item.text}</p>
		<div class="item-id">ID: {item.id}</div>
	</Card>
</div>

<style>

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
