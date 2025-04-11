<script lang="ts">
	import { globalState } from '$lib/globalState.svelte';

	let { value }: { value: string } = $props();

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		globalState.showMobileNav = false;
	};
</script>

<li class="relative">
	<button
		class="cursor-pointer text-center text-xl font-bold uppercase opacity-50 transition-all duration-250 ease-out hover:opacity-100"
		class:!opacity-100={value === globalState.currentNav}
		onclick={() => scrollToSection(value)}
	>
		{value}
	</button>
</li>
