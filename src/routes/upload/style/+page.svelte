<script lang="ts">
	import { goto } from '$app/navigation';

	function navigateToUploadDrawing() {
		goto('/upload/drawing');
	}
</script>

<section class="uploadDrawing">
	<h1>Now, pick your style!</h1>
	<button
		on:click={navigateToUploadDrawing}
		class="mx-auto my-6 w-96 transform rounded-3xl border-4 border-black bg-black bg-gradient-to-r px-2 py-4 font-potta text-3xl font-bold tracking-widest text-white transition-colors duration-100 ease-in-out hover:border-4 hover:border-black hover:bg-transparent hover:text-black"
		>Back</button
	>
</section>
