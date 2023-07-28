<script>
	import '../app.css';
	import NavBar from '$lib/NavBar/NavBar.svelte';
	import 'iconify-icon';
</script>

<body
	class="grid max-h-full max-w-full scale-95 justify-center overflow-auto bg-WMBG md:scale-100 lg:scale-100"
>
	<NavBar />
	<slot />
</body>
