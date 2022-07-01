<script>
	import FeedbackList from "./FeedbackList.svelte";
	import FeedbackStats from "./FeedbackStats.svelte"

	let feedback = [
		{
			id: 1,
			rating: 7,
			text: 'mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus'
		},
		{
			id: 2,
			rating: 9,
			text: 'suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet'
		},
		{
			id: 3,
			rating: 10,
			text: 'pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim'
		}
	];

	$: itemCount = feedback.length;
	$: averageRating = (feedback.reduce((sum,item) => sum + item.rating,0 )/itemCount).toFixed(1);

	function deleteItem(event){
		feedback = feedback.filter((item) => item.id != event.detail );
	}
</script>

<section>
	<FeedbackStats count = {itemCount} average	={averageRating} />
	<FeedbackList feedback = {feedback} on:delete-item = {deleteItem}/>
</section>
