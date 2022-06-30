<script>
	import FeedbackList from "./FeedbackList.svelte";

	let feedback = [
		{
			id: 1,
			rating: 10,
			text: 'mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus'
		},
		{
			id: 1,
			rating: 10,
			text: 'suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet'
		},
		{
			id: 1,
			rating: 10,
			text: 'pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim'
		}
	];
</script>

<section>
	<FeedbackList feedback = {feedback}/>
</section>
