<script>
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
	</div>
	<img src="/Vector1.svg" alt="img" class="w-screen" />
</nav>
