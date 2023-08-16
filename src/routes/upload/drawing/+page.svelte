<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/Button/Button.svelte';
	import Dropzone from '$lib/Dropzone/Dropzone.svelte';

	function navigateToUploadStyle() {
		goto('/upload/style');
	}

	interface IFiles {
		accepted: any[];
		rejected: any[];
	}

	let files: IFiles = {
		accepted: [],
		rejected: []
	};

	function handleFilesSelect(e: any) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}
</script>

<div class="container mx-auto flex flex-col items-center rounded-3xl bg-orange-200">
	<h1 class="mt-14 text-6xl font-normal">First, upload your drawing!</h1>
	<div class="container mt-8 grid rounded-lg p-6">
		<Dropzone on:drop={handleFilesSelect}>
			<button
				class="mx-auto mt-4 w-64 rounded-xl border-4 border-black bg-black px-6 py-2 text-xl tracking-wider text-white transition-colors duration-100 ease-in-out hover:bg-transparent hover:text-black"
			>
				Upload Drawing
			</button>
		</Dropzone>
		<!-- 		<button
			class="mx-auto mt-4 w-64 rounded-xl border-4 border-black bg-black px-6 py-2 tracking-wider text-white transition-colors duration-100 ease-in-out hover:bg-transparent hover:text-black"
			>Take a Picture</button
		> -->
	</div>
	<Button title="Next" text="Next" buttonFunction={navigateToUploadStyle} />
</div>
