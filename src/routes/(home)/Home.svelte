<script lang="ts">
	import SectionPanel from '$lib/components/SectionPanel.svelte';
	import { globalState } from '$lib/globalState.svelte';
	import type { Home } from '$lib/types';
	import Gear from './Gear.svelte';

	let { home }: { home: Home } = $props();
</script>

<SectionPanel id="home">
	<div class="text-center">
		<div class="relative flex items-center justify-center">
			<Gear />
			<div
				class="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center gap-2"
			>
				<h1>
					<span
						class="text-primaryBlue text-4xl font-bold opacity-0 transition-all delay-500 duration-500 ease-in-out md:text-5xl"
						class:!opacity-100={globalState.introAnimationComplete}
					>
						{home.name}
					</span>
				</h1>
				<p
					class="margin-auto text-lg font-bold opacity-0 transition-all delay-1000 duration-500 ease-in-out md:text-xl"
					class:!opacity-100={globalState.introAnimationComplete}
				>
					{home.subHeadingA}
					{home.subHeadingB}
				</p>
			</div>
		</div>
	</div>
</SectionPanel>
