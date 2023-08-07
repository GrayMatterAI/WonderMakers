<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/Button/Button.svelte';

	let selectedStyle = '';

	let styles = [
		'Cartoon Style',
		'Watercolor Wash',
		'Doodle Art',
		'Scribble Art',
		'Minimalist Style',
		'Fantasy Art'
	];

	function selectStyle(style: string) {
		selectedStyle = style;
	}

	function navigateToUploadDrawing() {
		goto('/upload/drawing');
	}

	function uploadDrawing() {
		goto('/upload/loading');
	}
</script>

<div class="container mx-auto flex flex-col items-center rounded-3xl bg-orange-200">
	<h1 class="my-10 text-6xl font-normal">Now, pick your style!</h1>
	<div class="mb-10 grid grid-cols-3 gap-x-32 gap-y-16">
		{#each styles as style (style)}
			<button on:click={() => selectStyle(style)}>
				<p class="text-center text-xl">{style}</p>
				<img src="/Screenshot 2023-07-04 at 10.58 1.png" alt={style} class="h-auto w-full" />
			</button>
		{/each}
	</div>
	<div class="text-xl">
		{selectedStyle ? `You selected: ${selectedStyle}` : `You haven't selected a style yet`}
	</div>
	<div class="flex w-full justify-between">
		<Button title="Back" text="Back" buttonFunction={navigateToUploadDrawing} />
		<Button
			title={selectedStyle ? "Let's go!" : 'Please select a style!'}
			text="Create!"
			buttonFunction={() => uploadDrawing()}
			disabled={!selectedStyle}
		/>
	</div>
</div>
