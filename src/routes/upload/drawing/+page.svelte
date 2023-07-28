<script lang="ts">
	import { goto } from '$app/navigation';
	import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';
	import type { FilesInput } from '../../../types/files.type';

	let files: FilesInput = {
		accepted: [],
		rejected: []
	};

	function handleFilesSelect(e: any) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}

	function navigateToUploadStyle() {
		goto('/upload/style');
	}
</script>

<section class="flex flex-col items-center">
	<h1 class="mt-8 text-6xl font-normal">First, upload your drawing!</h1>
	<div class="container bg-orange-100">
		<Dropzone accept="image/jpeg, image/png" inputElement="hello" on:drop={handleFilesSelect} />
		<button>Upload Drawing</button>
		<button>Take a Picture</button>
	</div>
	<button
		on:click={navigateToUploadStyle}
		class="mx-auto my-6 w-96 transform rounded-3xl border-4 border-black bg-black bg-gradient-to-r px-2 py-4 font-potta text-3xl font-bold tracking-widest text-white transition-colors duration-100 ease-in-out hover:border-4 hover:border-black hover:bg-transparent hover:text-black"
		>Next</button
	>
</section>
