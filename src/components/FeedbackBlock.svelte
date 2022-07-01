<script>
	import FeedbackList from "./FeedbackList.svelte";

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

	function deleteItem(event){
		feedback = feedback.filter((item) => item.id != event.detail );
	}
</script>

<section>
	<FeedbackList feedback = {feedback} on:delete-item = {deleteItem}/>
</section>
