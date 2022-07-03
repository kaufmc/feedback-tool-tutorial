<script>
	export let feedback = [];
	import FeedbackItem from './FeedbackItem.svelte';
	import { flip } from 'svelte/animate';

	console.log(feedback);
</script>

{#each feedback as item (item.id)}
	<div  animate:flip="{{duration: 500}}">
		<FeedbackItem {item} on:delete-item />
	</div>
{/each}
