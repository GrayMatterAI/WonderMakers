<script lang="ts">
	import Button from '$lib/Button/Button.svelte';
</script>

<div class="grid justify-center">
	<div class="py-5 text-center text-5xl font-bold">Great job Wondermaker!</div>
	<div class="grid grid-cols-3 gap-4 p-5">
		<div />
		<img src="/resultExample.png" alt="Result Example" class="rounded-lg" />
		<div class="flex flex-col justify-between space-y-2">
			<Button title="Fix" text="Fix" buttonFunction={() => {}} />
			<Button title="Create a Story" text="Create a story out of it!" buttonFunction={() => {}} />
		</div>
	</div>
	<div class="grid grid-cols-3 gap-4 p-5">
		<Button title="Share" text="Share" buttonFunction={() => {}} />
		<Button title="Download" text="Download" buttonFunction={() => {}} />
		<Button title="Done" text="Done" buttonFunction={() => {}} />
	</div>
</div>
