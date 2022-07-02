<script>
	import FeedbackList from "./FeedbackList.svelte";
	import FeedbackStats from "./FeedbackStats.svelte";
	import FeedbackForm from "./FeedbackForm.svelte";

	let feedback = [
		{
			id: '7d010919-5a7b-4971-9509-4670ccf687a0',
			rating: 7,
			text: 'mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus'
		},
		{
			id: '7f19be3b-61f3-47ef-8fc3-33907d054985',
			rating: 9,
			text: 'suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet'
		},
		{
			id: '739ef758-6b38-4662-935d-a7dbd698d43e',
			rating: 10,
			text: 'pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim'
		}
	];

	$: itemCount = feedback.length;
	$: averageRating = (feedback.reduce((sum,item) => sum + item.rating,0 )/itemCount).toFixed(1);

	function deleteItem(event){
		feedback = feedback.filter((item) => item.id != event.detail );
	}

	function handleFormSubmitted(event){
		console.log('Form data:' + event.detail.text);
		feedback =[
			event.detail,...feedback];
	}
</script>

<section>
	<FeedbackForm on:form-submitted={handleFormSubmitted} />
	<FeedbackStats count={itemCount} average={averageRating} />
	<FeedbackList {feedback} on:delete-item={deleteItem} />
</section>
