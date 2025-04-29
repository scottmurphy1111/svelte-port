<script lang="ts">
	import GridRow from '$lib/components/GridRow.svelte';
	import SectionPanel from '$lib/components/SectionPanel.svelte';
	import type { Skill } from '$lib/types';
	import Icon from '@iconify/svelte';

	let { skills }: { skills: Skill[] } = $props();
</script>

<SectionPanel id="skills" title="Skills & Tools">
	<div class="grid grid-cols-2 gap-4">
		{#each skills as skill}
			<div class="flex w-full flex-col items-stretch justify-center gap-4">
				<div
					class="border-primaryBlue flex h-16 w-16 items-center justify-center rounded-full border-2 p-2 text-4xl"
				>
					<Icon icon={skill.icon} />
				</div>
				<div class="flex h-1 w-1/5 bg-white"></div>
				<div class="flex flex-col items-stretch justify-center">
					{#each skill.skillsArray as item}
						<p class="text-base font-bold md:text-lg">{item}</p>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</SectionPanel>
