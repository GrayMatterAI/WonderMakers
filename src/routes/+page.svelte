<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/Button/Button.svelte';

	function navigateToUploadDrawing() {
		goto('/upload/drawing');
	}
</script>

<div class="mx-auto grid p-4">
	<h1 class="mb-4 text-center text-4xl md:text-5xl lg:text-6xl">
		Welcome to your creative studio Wondermaker!
	</h1>
	<img src="/image13.svg" alt="img" class="mx-auto" />
	<Button buttonFunction={navigateToUploadDrawing} text="Get Started!" title="Get Started!" />
</div>
