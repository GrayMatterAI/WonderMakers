<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';

	let data: PageData;

	onMount(() => {
		setTimeout(() => {
			goto('/upload/result');
		}, 2500);
	});
</script>

<div class="grid justify-center">Loading</div>
