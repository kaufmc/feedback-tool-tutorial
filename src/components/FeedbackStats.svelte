<script>
  export let count;
  export let average;
</script>

<div class="feedback-stats">
  <div class="feedback-value">{count} Reviews</div>
  <div class="feedback-value">Average Rating: {average}</div>
</div>

<style>
  .feedback-stats{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 10px;

  }
</style>