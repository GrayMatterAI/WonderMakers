<script>
	import '../app.css';
	import NavBar from '$lib/NavBar/NavBar.svelte';
</script>

<body class="scale-95 grid justify-center bg-WMBG max-h-full max-w-full overflow-auto md:scale-100 lg:scale-100">
	<NavBar />
	<slot />
</body>
