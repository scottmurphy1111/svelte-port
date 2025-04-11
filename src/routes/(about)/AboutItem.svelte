<script lang="ts">
	import type { About, iAboutItem } from '$lib/types';
	import Icon from '@iconify/svelte';

	let {
		item,
		toggleDescription
	}: { item: iAboutItem; toggleDescription: (item: iAboutItem) => void } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class="flex cursor-pointer flex-col"
	onclick={() => toggleDescription(item)}
	role="button"
	tabindex="0"
>
	<div class="text:xl flex items-center gap-2 font-bold md:text-2xl">
		<Icon icon={item.icon} class="text-white" />
		<p class="text-primaryBlue">{item.heading}</p>
	</div>
	<p
		class="ml-10 h-0 overflow-hidden transition-all duration-500 ease-in-out"
		class:!h-8={item.open}
	>
		{item.revealDescription}
	</p>
</div>
