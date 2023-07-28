<script>
	import FeedbackForm from '$lib/FeedbackForm/FeedbackForm.svelte';
	let isHovered = false;
	function handleMouseOver() {
		isHovered = true;
	}
	function handleMouseOut() {
		isHovered = false;
	}
	function handleFocus() {
		isHovered = true;
	}
	function handleBlur() {
		isHovered = false;
	}
</script>

<nav class="relative grid p-4 md:p-2 lg:p-4">
	<div class="flex items-center justify-between">
		<div class="text-4xl md:text-5xl lg:text-6xl">Wondermakers</div>
		<div class="relative flex items-center gap-2 text-center text-xl md:text-2xl lg:text-2xl">
			<iconify-icon
				width="36"
				icon="mdi:chat-outline"
				on:mouseover={handleMouseOver}
				on:mouseout={handleMouseOut}
				on:focus={handleFocus}
				on:blur={handleBlur}
				role="button"
				tabindex="0"
			/>
			<a href="feedback">Give us feedback!</a>
			{#if isHovered}
				<FeedbackForm />
			{/if}
		</div>
	</div>
	<img src="/Vector1.svg" alt="img" class="w-screen" />
</nav>
