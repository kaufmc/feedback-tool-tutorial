<script>
  export let feedback = [];
  import FeedbackItem from "./FeedbackItem.svelte";

  console.log(feedback);
</script>

{#each feedback as item}
  <FeedbackItem item = {item}/>
{/each}