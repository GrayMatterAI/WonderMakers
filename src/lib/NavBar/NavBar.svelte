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

<nav class="p-4 grid md:p-2 lg:p-4 relative">
	<div class="flex justify-between items-center">
		<div class="text-4xl md:text-5xl lg:text-6xl">Wondermakers</div>
		<div class="flex gap-2 text-xl items-center text-center md:text-2xl lg:text-2xl relative">
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
