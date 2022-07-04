<script>
	import { FeedbackStore } from '../stores/feedbackItmStore.js';
	import FeedbackItem from './FeedbackItem.svelte';
	import { flip } from 'svelte/animate';
</script>

{#each $FeedbackStore as item (item.id)}
	<div animate:flip={{ duration: 500 }}>
		<FeedbackItem {item} />
	</div>
{/each}
