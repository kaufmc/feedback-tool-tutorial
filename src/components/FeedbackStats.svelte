<script>
  import { FeedbackStore } from '../stores/stores.js';

	$: itemCount = $FeedbackStore.length;
	$: averageRating = ($FeedbackStore.reduce((sum,item) => sum + item.rating,0 )/itemCount).toFixed(1);

</script>

<div class="feedback-stats">
  <div class="feedback-value">{itemCount} Reviews</div>
  <div class="feedback-value">Average Rating: {averageRating}</div>
</div>

<style>
  .feedback-stats{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 10px;

  }
</style>