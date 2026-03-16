<script lang="ts">
	import { globalState } from '$lib/globalState.svelte';
	import Icon from '@iconify/svelte';

	let { value, icon }: { value: string; icon: string } = $props();

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
		class="flex cursor-pointer items-center justify-between gap-2 text-center text-xl font-bold uppercase opacity-50 transition-all duration-250 ease-out hover:opacity-100"
		class:!opacity-100={value === globalState.currentNav}
		onclick={() => scrollToSection(value)}
	>
		<Icon {icon} class="h-6 w-6" />
		{value}
	</button>
</li>
