<script lang="ts">
	import AnimateOnScrollElement from './AnimateOnScrollElement.svelte';

	interface Props {
		id: string;
		title?: string;
		children?: import('svelte').Snippet;
		light?: boolean;
	}

	let { id, title, children, light = undefined }: Props = $props();
</script>

{#snippet sectionHeader(title: string)}
	<AnimateOnScrollElement>
		<h2 class="text:2xl mb-4 font-bold md:text-3xl">{title}</h2>
	</AnimateOnScrollElement>
{/snippet}

<div
	{id}
	class="relative z-30 flex min-h-lvh w-full px-4 py-24 text-white md:px-0"
	class:bg-light={light}
	class:!text-black={light}
>
	<div class=" container mx-auto flex w-full flex-col justify-center gap-4">
		{#if title}
			{@render sectionHeader(title)}
		{/if}
		{@render children?.()}
	</div>
</div>
