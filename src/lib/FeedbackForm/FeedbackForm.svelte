<script>
	let feedback = '';

	function handleSubmit() {
		// handle form submission here
	}
</script>

<form class="form" on:submit|preventDefault={handleSubmit}>
	<textarea
		id="form-feedback"
		bind:value={feedback}
		placeholder="Enter your feedback here"
		title="Feedback"
		style="padding-bottom:1rem"
	/>
	<button
		type="submit"
		class="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
	>
		Submit Feedback
	</button>
</form>
