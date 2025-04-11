<script lang="ts">
	import { globalState } from '$lib/globalState.svelte';

	let { value, onclick = undefined }: { value: string; onclick?: () => void } = $props();

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<li class="relative" {onclick}>
	<button
		class="cursor-pointer text-center text-xl font-bold uppercase opacity-50 transition-all duration-250 ease-out hover:opacity-100"
		class:!opacity-100={value === globalState.currentNav}
		onclick={() => scrollToSection(value)}
	>
		{value}
	</button>
</li>
