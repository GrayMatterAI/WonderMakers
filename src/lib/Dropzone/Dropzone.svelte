<script lang="ts">
	let dragging = false;

	function handleDragEnter() {
		dragging = true;
	}

	function handleDragLeave() {
		dragging = false;
	}

	function handleDrop(event: any) {
		dragging = false;
		const files = event.dataTransfer.files;
		// handle files...
	}
</script>

<div
	tabindex="0"
	role="button"
	class="h-96 w-full rounded-md flex flex-col justify-center items-center text-3xl border-2 border-dashed border-black bg-transparent p-4 {dragging
		? 'bg-blue-200'
		: ''}"
	on:dragenter={handleDragEnter}
	on:dragover|preventDefault
	on:dragleave={handleDragLeave}
	on:drop|preventDefault={handleDrop}
>
	Drag 'n' drop some files here, or click to select files
</div>
