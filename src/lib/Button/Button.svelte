<script lang="ts">
	export let buttonFunction: () => void;
	export let text: string;
	export let title: string;
	export let disabled: boolean = false;
</script>

<button
	on:click={buttonFunction}
	{disabled}
	class="mx-6 my-6 w-96 rounded-xl border-4 border-black bg-black bg-gradient-to-r px-2 py-4 font-potta text-3xl font-bold tracking-widest text-white transition-colors duration-100 ease-in-out hover:border-4 hover:border-black hover:bg-transparent hover:text-black disabled:border-gray-300 disabled:bg-gray-300 disabled:hover:border-gray-300 disabled:hover:text-white"
	{title}
>
	{text}
</button>
