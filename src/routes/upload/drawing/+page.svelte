<script lang="ts">
	import { goto } from '$app/navigation';
	import Dropzone from '$lib/Dropzone/Dropzone.svelte';

	function navigateToUploadStyle() {
		goto('/upload/style');
	}
</script>

<section class="container mx-auto flex flex-col items-center rounded-3xl bg-orange-200">
	<h1 class="mt-14 text-6xl font-normal">First, upload your drawing!</h1>
	<div class="container mt-8 grid rounded-lg p-6">
		<Dropzone />
		<button
			class="mx-auto mt-4 w-64 rounded-md bg-black px-6 py-2 text-white transition-colors duration-100 ease-in-out hover:border-4 hover:border-black hover:bg-transparent hover:text-black"
			>Upload Drawing</button
		>
		<button
			class="mx-auto mt-4 w-64 rounded-md bg-black px-6 py-2 text-white transition-colors duration-100 ease-in-out hover:border-4 hover:border-black hover:bg-transparent hover:text-black"
			>Take a Picture</button
		>
	</div>
	<button
		on:click={navigateToUploadStyle}
		class="mx-auto my-6 w-96 transform rounded-3xl border-4 border-black bg-black bg-gradient-to-r px-2 py-4 font-potta text-3xl font-bold tracking-widest text-white transition-colors duration-100 ease-in-out hover:border-4 hover:border-black hover:bg-transparent hover:text-black"
		>Next</button
	>
</section>
