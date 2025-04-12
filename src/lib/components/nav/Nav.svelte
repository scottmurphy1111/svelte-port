<script lang="ts">
	import GridRow from '$lib/components/GridRow.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { globalState } from '$lib/globalState.svelte';
	import Icon from '@iconify/svelte';
	import NavItem from './NavItem.svelte';

	let { nav } = $props();
</script>

<div
	class="fixed top-0 left-0 z-40 h-[70px] w-full -translate-y-24 bg-neutral-950 p-2 transition-all delay-[1500ms] duration-1000 ease-in-out"
	class:!translate-y-0={globalState.introAnimationComplete}
>
	<div class="container mx-auto">
		<div class="flex items-center justify-between">
			<div class="flex w-24 cursor-pointer items-center place-self-start">
				<Logo onclick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} />
			</div>
			<div class="col-span-2 ml-auto flex w-8 text-4xl md:hidden">
				<Icon
					icon="ci:hamburger-md"
					class="text-white"
					onclick={() => (globalState.showMobileNav = !globalState.showMobileNav)}
				/>

				<div
					class="absolute top-0 left-0 z-50 flex h-screen w-screen translate-x-full items-center justify-center bg-neutral-950 transition-all duration-500 ease-in-out"
					class:!translate-x-0={globalState.showMobileNav}
				>
					<button
						class="absolute top-4 right-4 text-2xl"
						onclick={() => (globalState.showMobileNav = !globalState.showMobileNav)}
						><Icon icon="zondicons:close-outline" /></button
					>
					<ul
						class="z-40 m-0 flex min-h-auto w-full list-none flex-col items-center justify-between px-4"
					>
						{#each nav as item}
							<NavItem value={item.value} />
						{/each}
					</ul>
				</div>
			</div>
			<div class="relative ml-auto hidden w-auto items-center overflow-hidden md:flex">
				<ul
					class="z-40 m-0 flex min-h-auto w-full list-none items-center justify-between gap-4 px-4"
				>
					{#each nav as item}
						<NavItem value={item.value} />
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
